cd C:\Sites\Flederic_Payet\metabosync-healthtech\src
chcp 65001 > nul & tree /F /A > projet_complet.txt & for /R %F in (*.json *.tsx *.ts *.md) do @echo ======================================== >> projet_complet.txt & @echo FICHIER: %F >> projet_complet.txt & @echo ======================================== >> projet_complet.txt & type "%F" >> projet_complet.txt
pause