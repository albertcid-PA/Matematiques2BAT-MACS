$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$zensical = Join-Path $projectRoot ".venv\Scripts\zensical.exe"
$python = "C:\Users\acid8\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$chrome = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tempDir = Join-Path $env:TEMP "codex-resultats-problemes-pau-calcul"
$rawPdf = Join-Path $tempDir "resultats_problemes_pau_calcul_sense_peu.pdf"
$outputPdf = Join-Path $projectRoot "output\pdf\resultats_problemes_pau_calcul.pdf"
$webPdf = Join-Path $projectRoot "docs\assets\exercicis\resultats_problemes_pau_calcul.pdf"
$profileDir = Join-Path $tempDir "chrome-profile"
$port = 8768
$server = $null

if (-not (Test-Path -LiteralPath $zensical)) {
    throw "No s'ha trobat Zensical a $zensical"
}
if (-not (Test-Path -LiteralPath $python)) {
    throw "No s'ha trobat Python a $python"
}
if (-not (Test-Path -LiteralPath $chrome)) {
    throw "No s'ha trobat Microsoft Edge a $chrome"
}

New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $outputPdf) | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $webPdf) | Out-Null
Remove-Item -LiteralPath $rawPdf -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $profileDir -Recurse -Force -ErrorAction SilentlyContinue

Push-Location $projectRoot
try {
    & $zensical build --clean
    if ($LASTEXITCODE -ne 0) {
        throw "La compilació de Zensical ha fallat."
    }

    $server = Start-Process -FilePath $python `
        -ArgumentList "-m", "http.server", "$port", "--bind", "127.0.0.1" `
        -WorkingDirectory (Join-Path $projectRoot "site") -PassThru -WindowStyle Hidden

    $url = "http://127.0.0.1:$port/calcul/resultats-problemes-pau/"
    $ready = $false
    for ($attempt = 0; $attempt -lt 30; $attempt++) {
        try {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 1
            if ($response.StatusCode -eq 200) {
                $ready = $true
                break
            }
        }
        catch {
            Start-Sleep -Milliseconds 200
        }
    }
    if (-not $ready) {
        throw "El servidor temporal no ha respost a $url"
    }

    $chromeOutput = & $chrome `
        "--headless=new" `
        "--disable-gpu" `
        "--no-pdf-header-footer" `
        "--run-all-compositor-stages-before-draw" `
        "--user-data-dir=$profileDir" `
        "--print-to-pdf=$rawPdf" `
        $url 2>&1
    $chromeExitCode = $LASTEXITCODE
    if ($chromeOutput) {
        $chromeOutput | ForEach-Object { Write-Host $_ }
    }
    for ($attempt = 0; $attempt -lt 50 -and -not (Test-Path -LiteralPath $rawPdf); $attempt++) {
        Start-Sleep -Milliseconds 200
    }
    if ($chromeExitCode -ne 0 -or -not (Test-Path -LiteralPath $rawPdf)) {
        throw "Edge no ha pogut generar el PDF (codi $chromeExitCode)."
    }

    & $python (Join-Path $PSScriptRoot "afegeix_peu_pdf.py") `
        $rawPdf `
        $outputPdf `
        "Resultats dels problemes PAU de càlcul" `
        "Llistat de resultats dels problemes PAU de càlcul" `
        "Matemàtiques Aplicades a les Ciències Socials II · Resultats dels problemes PAU"
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $outputPdf)) {
        throw "No s'ha pogut afegir el peu de pàgina al PDF."
    }

    Copy-Item -LiteralPath $outputPdf -Destination $webPdf -Force
    & $zensical build --clean
    if ($LASTEXITCODE -ne 0) {
        throw "La compilació final de Zensical ha fallat."
    }
    Write-Host "PDF generat: $outputPdf"
    Write-Host "Còpia publicable: $webPdf"
}
finally {
    if ($server -and -not $server.HasExited) {
        Stop-Process -Id $server.Id -Force
    }
    Pop-Location
}
