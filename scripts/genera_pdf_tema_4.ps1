$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$zensical = Join-Path $projectRoot ".venv\Scripts\zensical.exe"
$python = Join-Path $projectRoot ".venv\Scripts\python.exe"
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$tempDir = Join-Path $projectRoot "tmp\pdfs\tema-4-matrius"
$rawPdf = Join-Path $tempDir "tema_4_matrius_sense_peu.pdf"
$outputPdf = Join-Path $projectRoot "output\pdf\tema_4_matrius.pdf"
$webPdf = Join-Path $projectRoot "docs\assets\apunts\tema_4_matrius.pdf"
$printSource = Join-Path $projectRoot "sources\generated\recull-tema-4.md"
$printPage = Join-Path $projectRoot "docs\algebra-lineal\matrius\__pdf-tema-4.md"
$profileDir = Join-Path $tempDir "edge-profile"
$port = 8773
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
    & $python (Join-Path $PSScriptRoot "genera_recull_tema_4.py")
    if ($LASTEXITCODE -ne 0) {
        throw "No s'ha pogut generar la pàgina imprimible del tema 4."
    }
    Copy-Item -LiteralPath $printSource -Destination $printPage -Force

    & $zensical build --clean
    if ($LASTEXITCODE -ne 0) {
        throw "La compilació de Zensical ha fallat."
    }

    $serverArgs = @("-m", "http.server", "$port", "--bind", "127.0.0.1")
    $server = Start-Process -FilePath $python -ArgumentList $serverArgs -WorkingDirectory (Join-Path $projectRoot "site") -PassThru -WindowStyle Hidden

    $url = "http://127.0.0.1:$port/algebra-lineal/matrius/__pdf-tema-4/"
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

    $edgeArgs = @(
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--user-data-dir=$profileDir",
        "--print-to-pdf=$rawPdf",
        $url
    )
    $edgeOutput = & $edge @edgeArgs 2>&1
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

    $footerScript = Join-Path $PSScriptRoot "afegeix_peu_pdf.py"
    & $python $footerScript $rawPdf $outputPdf "4. Matrius" "Tema 4 de Matemàtiques Aplicades a les Ciències Socials II" "Matemàtiques Aplicades a les Ciències Socials II · Tema 4"
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $outputPdf)) {
        throw "No s'ha pogut afegir el peu de pàgina al PDF."
    }

    Copy-Item -LiteralPath $outputPdf -Destination $webPdf -Force
    Remove-Item -LiteralPath $printPage -Force
    & $zensical build --clean
    if ($LASTEXITCODE -ne 0) {
        throw "La compilació final de Zensical ha fallat."
    }
    Write-Host "PDF generat: $outputPdf"
    Write-Host "Còpia publicable: $webPdf"
}
finally {
    Remove-Item -LiteralPath $printPage -Force -ErrorAction SilentlyContinue
    if ($server -and -not $server.HasExited) {
        Stop-Process -Id $server.Id -Force
    }
    Pop-Location
}
