# Instruccions per a Claude

@AGENTS.md

Les instruccions permanents del projecte són a `AGENTS.md`, que és la font única compartida amb altres assistents (ChatGPT/Codex). Aquest fitxer només hi afegeix el que és propi de la manera de treballar de Claude. Si hi ha conflicte, prevalen la petició vigent del professor i `AGENTS.md`; no dupliquis aquí regles que ja hi consten.

En començar una sessió nova: llegeix aquest fitxer i `AGENTS.md`; per reprendre feina o decisions, `ESTAT_PROJECTE.md`; per a fonts, generadors, compilació i publicació, `GUIA_MANTENIMENT.md`; per a figures, `GUIA_GRAFIQUES.md`. Revisa també `git status`.

## Entorn de treball

- El professor treballa aquest projecte alternant Claude Code (app d'escriptori, Windows) i Codex, tots dos oberts directament a la carpeta `C:\Users\acid8\Documents\ClaudeGPT\Apunts 2n BAT`. Segueix la secció «Relleu entre assistents» d'`AGENTS.md`. Comprova la carpeta abans d'actuar i fes servir rutes relatives en scripts i documents.
- L'ordinador té MiKTeX (pdfLaTeX, XeLaTeX, latexmk, `pdftoppm`), Git i Edge (comprovat l'1 de novembre de 2026). L'entorn `.venv` es va recrear aquell dia a la carpeta actual i conté Zensical, `pypdf` i `reportlab`; els scripts ja no depenen del Python del runtime de Codex. Mira la secció «Entorn local» de `GUIA_MANTENIMENT.md` si alguna cosa falla.
- Treballa directament al repositori principal: `git fetch` funciona des d'aquesta carpeta.
- Desa en UTF-8 i comprova els accents després de desar.
- La memòria de Claude i els projectes de claude.ai no substitueixen `ESTAT_PROJECTE.md`: la continuïtat viu al repositori perquè la comparteixen tots els assistents.

## Abast i publicació

- `AGENTS.md` permet publicar quan el professor demana actualitzar el web. Si la petició no ho diu clarament, deixa els canvis en local i pregunta abans de fer commit o push.
- Quan es publiqui, selecciona els fitxers de la tasca, revisa el diff i no versionis `site/`, `tmp/` ni `.venv/`.
- En acabar, informa per separat de què s'ha modificat, què s'ha comprovat i què queda pendent.
