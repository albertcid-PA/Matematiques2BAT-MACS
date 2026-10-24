$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$zensical = Join-Path $projectRoot ".venv\Scripts\zensical.exe"
$python = "C:\Users\acid8\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tempDir = Join-Path $projectRoot "tmp\pdfs\tema-3-sistemes-metode-gauss"
$rawPdf = Join-Path $tempDir "tema_3_sistemes_metode_gauss_sense_peu.pdf"
$outputPdf = Join-Path $projectRoot "output\pdf\tema_3_sistemes_metode_gauss.pdf"
$webPdf = Join-Path $projectRoot "docs\assets\apunts\tema_3_sistemes_metode_gauss.pdf"
$profileDir = Join-Path $tempDir "edge-profile"
$port = 8772
$server = $null

$resolvedTempDir = [IO.Path]::GetFullPath($tempDir)
$resolvedProfileDir = [IO.Path]::GetFullPath($profileDir)
$tempPrefix = $resolvedTempDir.TrimEnd([IO.Path]::DirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar
if (-not $resolvedProfileDir.StartsWith($tempPrefix, [StringComparison]::OrdinalIgnoreCase)) {
    throw "El perfil temporal ha quedat fora del directori de treball previst."
}

foreach ($required in @($zensical, $python, $edge)) {
    if (-not (Test-Path -LiteralPath $required)) {
        throw "No s'ha trobat el programa necessari a $required"
    }
}

New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $outputPdf) | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $webPdf) | Out-Null
Remove-Item -LiteralPath $rawPdf -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $resolvedProfileDir -Recurse -Force -ErrorAction SilentlyContinue

Push-Location $projectRoot
try {
    & $python (Join-Path $PSScriptRoot "genera_recull_tema_3.py")
    if ($LASTEXITCODE -ne 0) {
        throw "No s'ha pogut generar la pàgina imprimible del tema 3."
    }

    & $zensical build --clean
    if ($LASTEXITCODE -ne 0) {
        throw "La compilació de Zensical ha fallat."
    }

    $server = Start-Process -FilePath $python `
        -ArgumentList "-m", "http.server", "$port", "--bind", "127.0.0.1" `
        -WorkingDirectory (Join-Path $projectRoot "site") -PassThru -WindowStyle Hidden

    $url = "http://127.0.0.1:$port/algebra-lineal/sistemes-gauss/recull-tema-3/"
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

    $edgeOutput = & $edge `
        "--headless=new" `
        "--disable-gpu" `
        "--no-pdf-header-footer" `
        "--run-all-compositor-stages-before-draw" `
        "--user-data-dir=$profileDir" `
        "--print-to-pdf=$rawPdf" `
        $url 2>&1
    $edgeExitCode = $LASTEXITCODE
    if ($edgeOutput) {
        $edgeOutput | ForEach-Object { Write-Host $_ }
    }
    for ($attempt = 0; $attempt -lt 150 -and -not (Test-Path -LiteralPath $rawPdf); $attempt++) {
        Start-Sleep -Milliseconds 200
    }
    if ($edgeExitCode -ne 0 -or -not (Test-Path -LiteralPath $rawPdf)) {
        throw "Edge no ha pogut generar el PDF (codi $edgeExitCode)."
    }

    & $python (Join-Path $PSScriptRoot "afegeix_peu_pdf.py") `
        $rawPdf `
        $outputPdf `
        "3. Sistemes i mètode de Gauss" `
        "Tema 3 de Matemàtiques Aplicades a les Ciències Socials II" `
        "Matemàtiques Aplicades a les Ciències Socials II · Tema 3"
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
