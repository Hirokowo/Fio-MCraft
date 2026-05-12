@echo off
setlocal

:prompt
echo =======================================================
echo     LOTM PATHWAY PREDICATE GENERATOR (Sequences 9-0)
echo =======================================================
set /p CLASS_NAME="Enter the pathway name (e.g., twilight, eclipse, weaver) or type 'exit' to quit: "

if /i "%CLASS_NAME%"=="exit" goto end
if "%CLASS_NAME%"=="" (
    echo You must enter a name!
    goto prompt
)

echo.
echo Generating 10 sequence files for '%CLASS_NAME%'...

for /L %%i in (0,1,9) do (
    (
        echo {
        echo   "condition": "minecraft:entity_properties",
        echo   "entity": "this",
        echo   "predicate": {
        echo     "nbt": "{Tags:[\"unlocked_%CLASS_NAME%_%%i\"]}"
        echo   }
        echo }
    ) > "unlocked_%CLASS_NAME%_%%i.json"
    
    echo  - Created unlocked_%CLASS_NAME%_%%i.json
)

echo.
echo Success! All 10 files generated.
echo.
goto prompt

:end
exit