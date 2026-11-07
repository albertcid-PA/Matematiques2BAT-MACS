param(
    [string]$Source
)

# Compila les figures TikZ de figures/tikz a SVG dins de docs/img.
# Si l'SVG resultant canvia, puja una unitat el ?v=n de totes les referències
# a docs/ i sources/, i regenera la pràctica de càlcul si se n'han tocat les fonts.

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$sourceRoot = (Join-Path $projectRoot "figures/tikz")
$outputRoot = (Join-Path $projectRoot "docs/img")
$buildRoot = (Join-Path $projectRoot "tmp/tikz")
$directorySeparator = [System.IO.Path]::DirectorySeparatorChar
$runningOnWindows = [System.Environment]::OSVersion.Platform -eq [System.PlatformID]::Win32NT
$latexCommand = if ($runningOnWindows) { "latex.exe" } else { "latex" }
$dvisvgmCommand = if ($runningOnWindows) { "dvisvgm.exe" } else { "dvisvgm" }

# Carpetes on es busquen referències als SVG. Els resultats generats per
# genera_pagines_practica.py s'exclouen: es reconstrueixen a partir de sources/calcul.
$referenceRoots = @("docs", "sources")
$generatedFiles = @(
    "docs/calcul/per-practicar/exercicis_calcul.md",
    "sources/generated/recull-enunciats-calcul.md"
)
$practiceSourcesPrefix = "sources/calcul/"

function Get-FileHashOrNull {
    param([string]$Path)
    if (Test-Path -LiteralPath $Path) {
        return (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash
    }
    return $null
}

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

    # El registre de LaTeX només es mostra si la compilació falla.
    $latexOutput = & $latexCommand `
        "-interaction=nonstopmode" `
        "-halt-on-error" `
        "-output-directory=$figureBuildDirectory" `
        $fullTexPath

    if ($LASTEXITCODE -ne 0) {
        $latexOutput | Out-Host
        throw "LaTeX no ha pogut compilar $relativePath"
    }

    $dviPath = Join-Path $figureBuildDirectory "$baseName.dvi"
    $svgPath = Join-Path $svgDirectory "$baseName.svg"
    $hashBefore = Get-FileHashOrNull -Path $svgPath

    & $dvisvgmCommand `
        "--no-fonts" `
        "--exact-bbox" `
        "--output=$svgPath" `
        $dviPath | Out-Host

    if ($LASTEXITCODE -ne 0) {
        throw "dvisvgm no ha pogut convertir $relativePath"
    }

    $hashAfter = Get-FileHashOrNull -Path $svgPath
    $state = if ($null -eq $hashBefore) { "nova" } elseif ($hashBefore -ne $hashAfter) { "canviada" } else { "igual" }

    Write-Host "Figura actualitzada: $svgPath" -ForegroundColor Green

    return [pscustomobject]@{ Name = "$baseName.svg"; State = $state }
}

function Get-ReferenceFiles {
    $files = foreach ($root in $referenceRoots) {
        Get-ChildItem -LiteralPath (Join-Path $projectRoot $root) -Filter "*.md" -File -Recurse
    }
    foreach ($file in $files) {
        $relative = $file.FullName.Substring($projectRoot.Length + 1).Replace("\", "/")
        if ($generatedFiles -notcontains $relative) {
            [pscustomobject]@{ FullName = $file.FullName; Relative = $relative }
        }
    }
}

function Update-SvgVersion {
    # Puja el ?v=n de totes les referències a l'SVG i en retorna els fitxers modificats.
    param([string]$SvgName, [object[]]$ReferenceFiles)

    $escapedName = [regex]::Escape($SvgName)
    $versionPattern = "(?<=[/(""'\s])$escapedName\?v=(\d+)"
    $bareReferencePattern = "(?<=[/(""'\s])$escapedName(?!\?v=)"
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    $changedFiles = @()

    foreach ($file in $ReferenceFiles) {
        $text = [System.IO.File]::ReadAllText($file.FullName, $utf8)
        if ($text -notmatch $escapedName) { continue }

        if ($text -match $bareReferencePattern) {
            Write-Warning "$($file.Relative) cita $SvgName sense ?v=n; afegeix-l'hi a mà."
        }

        $versions = New-Object System.Collections.Generic.List[string]
        $newText = [regex]::Replace($text, $versionPattern, {
            param($match)
            $next = [int]$match.Groups[1].Value + 1
            $versions.Add("v=$($match.Groups[1].Value) -> v=$next")
            "$SvgName`?v=$next"
        })

        if ($newText -ne $text) {
            [System.IO.File]::WriteAllText($file.FullName, $newText, $utf8)
            $changedFiles += $file.Relative
            Write-Host "  $($file.Relative): $(($versions | Select-Object -Unique) -join ', ')"
        }
    }

    return $changedFiles
}

if ($Source) {
    $results = @(Convert-TikzToSvg -TexPath $Source)
} else {
    $figures = @(Get-ChildItem -LiteralPath $sourceRoot -Filter "*.tex" -File -Recurse)

    if ($figures.Count -eq 0) {
        Write-Host "No s'han trobat figures TikZ."
        exit 0
    }

    $results = @(foreach ($figure in $figures) { Convert-TikzToSvg -TexPath $figure.FullName })
}

$changed = @($results | Where-Object { $_.State -eq "canviada" })
$new = @($results | Where-Object { $_.State -eq "nova" })
$unchanged = $results.Count - $changed.Count - $new.Count

Write-Host ""
Write-Host "Resum: $($changed.Count) SVG canviats, $($new.Count) nous i $unchanged sense canvis."

foreach ($figure in $new) {
    Write-Host "SVG nou: $($figure.Name). Afegeix-ne la referència al Markdown amb ?v=1."
}

if ($changed.Count -gt 0) {
    $referenceFiles = @(Get-ReferenceFiles)
    $touchedFiles = @()

    foreach ($figure in $changed) {
        Write-Host "Versió pujada de $($figure.Name):"
        $touched = @(Update-SvgVersion -SvgName $figure.Name -ReferenceFiles $referenceFiles)
        if ($touched.Count -eq 0) {
            Write-Warning "No s'ha trobat cap referència a $($figure.Name) amb ?v=n."
        }
        $touchedFiles += $touched
    }

    if (@($touchedFiles | Where-Object { $_.StartsWith($practiceSourcesPrefix) }).Count -gt 0) {
        $python = Join-Path $projectRoot ".venv/Scripts/python.exe"
        if (-not (Test-Path -LiteralPath $python)) { $python = Join-Path $projectRoot ".venv/bin/python" }
        if (Test-Path -LiteralPath $python) {
            Write-Host "Regenerant la pràctica de càlcul..."
            & $python (Join-Path $projectRoot "scripts/genera_pagines_practica.py")
            if ($LASTEXITCODE -ne 0) { throw "genera_pagines_practica.py ha fallat" }
        } else {
            Write-Warning "No s'ha trobat el Python de .venv: executa a mà scripts/genera_pagines_practica.py."
        }
    }

    Write-Host ""
    Write-Host "Revisa les figures canviades. Si alguna surt en un PDF, regenera'l." -ForegroundColor Yellow
}
