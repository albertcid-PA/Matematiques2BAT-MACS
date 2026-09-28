param(
    [string]$Source
)

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$sourceRoot = (Join-Path $projectRoot "figures/tikz")
$outputRoot = (Join-Path $projectRoot "docs/img")
$buildRoot = (Join-Path $projectRoot "tmp/tikz")
$directorySeparator = [System.IO.Path]::DirectorySeparatorChar
$runningOnWindows = [System.Environment]::OSVersion.Platform -eq [System.PlatformID]::Win32NT
$latexCommand = if ($runningOnWindows) { "latex.exe" } else { "latex" }
$dvisvgmCommand = if ($runningOnWindows) { "dvisvgm.exe" } else { "dvisvgm" }

function Convert-TikzToSvg {
    param(
        [Parameter(Mandatory = $true)]
        [string]$TexPath
    )

    $fullTexPath = (Resolve-Path -LiteralPath $TexPath).Path
    $sourcePrefix = $sourceRoot.TrimEnd($directorySeparator) + $directorySeparator

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

    & $latexCommand `
        "-interaction=nonstopmode" `
        "-halt-on-error" `
        "-output-directory=$figureBuildDirectory" `
        $fullTexPath | Out-Host

    if ($LASTEXITCODE -ne 0) {
        throw "LaTeX no ha pogut compilar $relativePath"
    }

    $dviPath = Join-Path $figureBuildDirectory "$baseName.dvi"
    $svgPath = Join-Path $svgDirectory "$baseName.svg"

    & $dvisvgmCommand `
        "--no-fonts" `
        "--exact-bbox" `
        "--output=$svgPath" `
        $dviPath | Out-Host

    if ($LASTEXITCODE -ne 0) {
        throw "dvisvgm no ha pogut convertir $relativePath"
    }

    # Afegeix un fons blanc dins de l'SVG perquè la figura conservi el mateix
    # aspecte en els modes clar i fosc del web.
    $svgContent = [System.IO.File]::ReadAllText($svgPath)
    $viewBoxMatch = [regex]::Match(
        $svgContent,
        'viewBox=[''"](?<coordinates>[^''"]+)[''"]'
    )

    if (-not $viewBoxMatch.Success) {
        throw "No s'ha pogut trobar el viewBox de $svgPath"
    }

    $viewBox = $viewBoxMatch.Groups["coordinates"].Value -split "\s+"

    if ($viewBox.Count -ne 4) {
        throw "El viewBox de $svgPath no té quatre coordenades"
    }

    $whiteBackground = "<rect x='$($viewBox[0])' y='$($viewBox[1])' width='$($viewBox[2])' height='$($viewBox[3])' fill='white'/>"
    $svgContent = [regex]::Replace(
        $svgContent,
        "(<svg\b[^>]*>)",
        "`$1`r`n$whiteBackground",
        1
    )
    $utf8WithoutBom = [System.Text.UTF8Encoding]::new($false)
    [System.IO.File]::WriteAllText($svgPath, $svgContent, $utf8WithoutBom)

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
