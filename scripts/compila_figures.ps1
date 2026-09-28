param(
    [string]$Source
)

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$sourceRoot = (Join-Path $projectRoot "figures\tikz")
$outputRoot = (Join-Path $projectRoot "docs\img")
$buildRoot = (Join-Path $projectRoot "tmp\tikz")

function Convert-TikzToSvg {
    param(
        [Parameter(Mandatory = $true)]
        [string]$TexPath
    )

    $fullTexPath = (Resolve-Path -LiteralPath $TexPath).Path
    $sourcePrefix = $sourceRoot.TrimEnd("\") + "\"

    if (-not $fullTexPath.StartsWith($sourcePrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "La figura ha d'estar dins de $sourceRoot"
    }

    $relativePath = $fullTexPath.Substring($sourcePrefix.Length)
    $relativeDirectory = Split-Path -Path $relativePath -Parent
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($fullTexPath)

    $svgDirectory = if ($relativeDirectory) {
        Join-Path $outputRoot $relativeDirectory
    } else {
        $outputRoot
    }

    $figureBuildDirectory = if ($relativeDirectory) {
        Join-Path (Join-Path $buildRoot $relativeDirectory) $baseName
    } else {
        Join-Path $buildRoot $baseName
    }

    New-Item -ItemType Directory -Force -Path $svgDirectory, $figureBuildDirectory | Out-Null

    Write-Host "Compilant $relativePath..."

    & latex.exe `
        "-interaction=nonstopmode" `
        "-halt-on-error" `
        "-output-directory=$figureBuildDirectory" `
        $fullTexPath | Out-Host

    if ($LASTEXITCODE -ne 0) {
        throw "LaTeX no ha pogut compilar $relativePath"
    }

    $dviPath = Join-Path $figureBuildDirectory "$baseName.dvi"
    $svgPath = Join-Path $svgDirectory "$baseName.svg"

    & dvisvgm.exe `
        "--no-fonts" `
        "--exact-bbox" `
        "--output=$svgPath" `
        $dviPath | Out-Host

    if ($LASTEXITCODE -ne 0) {
        throw "dvisvgm no ha pogut convertir $relativePath"
    }

    Write-Host "Figura actualitzada: $svgPath" -ForegroundColor Green
}

if ($Source) {
    Convert-TikzToSvg -TexPath $Source
} else {
    $figures = @(Get-ChildItem -LiteralPath $sourceRoot -Filter "*.tex" -File -Recurse)

    if ($figures.Count -eq 0) {
        Write-Host "No s'han trobat figures TikZ."
        exit 0
    }

    foreach ($figure in $figures) {
        Convert-TikzToSvg -TexPath $figure.FullName
    }
}
