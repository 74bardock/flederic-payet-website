@echo off
set "SOURCE=C:\Sites\Flederic_Payet\metabosync-healthtech"
set "DEST=C:\Sites\Flederic_Payet\anciennes versions\metabosync-healthtech"

for /r "%SOURCE%" %%f in (*Copie*) do (
    rem Récupère le chemin relatif du fichier par rapport à la source
    set "FULLPATH=%%f"
    setlocal enabledelayedexpansion
    set "RELPATH=!FULLPATH:%SOURCE%=!"
    
    rem Extrait le dossier parent du fichier relatif pour créer l'arborescence
    for %%i in ("!RELPATH!") do set "RELDESDIR=%%~dpi"
    
    rem Crée le sous-dossier dans la destination s'il n'existe pas
    if not exist "%DEST%!RELDESDIR!" mkdir "%DEST%!RELDESDIR!"
    
    rem Déplace le fichier vers son sous-dossier de destination correspondant
    move "%%f" "%DEST%!RELDESDIR!"
    endlocal
)