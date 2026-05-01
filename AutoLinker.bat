@echo off
title Fio'MCraft Auto-Symlink Manager
color 0b
setlocal enabledelayedexpansion

:: ==========================================
:: CONFIGURATION PATHS
:: ==========================================
set "REPO_DIR=C:\Users\xxarm\Documents\Github\Fio'MCraft"
set "INSTANCE_DIR=C:\Users\xxarm\AppData\Roaming\ModrinthApp\profiles\Skulkbound (1)"

:: Folders to IGNORE (separated by spaces)
:: Note: Because the script automatically ignores folders that already exist in Modrinth,
:: you don't technically need to exclude things you've already linked manually, but they are here just in case!
set "EXCLUDE_LIST=config configs defaultconfigs kubejs .git mods resourcepacks"

echo ==================================================
echo       Fio'MCraft Auto-Symlink Manager
echo ==================================================
echo Repo Path: %REPO_DIR%
echo Modpack Path: %INSTANCE_DIR%
echo.

:: Verify that both paths actually exist before doing anything
if not exist "%REPO_DIR%" (
    echo [ERROR] GitHub Repository directory not found!
    pause
    exit /b
)
if not exist "%INSTANCE_DIR%" (
    echo [ERROR] Modrinth Instance directory not found!
    pause
    exit /b
)

:: Loop through every top-level folder inside the GitHub repo
for /d %%F in ("%REPO_DIR%\*") do (
    set "FOLDER_NAME=%%~nxF"
    set "SHOULD_SKIP=false"

    :: Check if the folder name is in the exclusion list
    for %%E in (%EXCLUDE_LIST%) do (
        if /I "!FOLDER_NAME!"=="%%E" set "SHOULD_SKIP=true"
    )

    :: If it's not excluded, process it
    if "!SHOULD_SKIP!"=="false" (
        set "TARGET_PATH=%INSTANCE_DIR%\!FOLDER_NAME!"
        
        :: Check if it already exists in the Modrinth folder
        if exist "!TARGET_PATH!" (
            echo [IGNORED] "!FOLDER_NAME!" - Already exists in Modrinth.
        ) else (
            echo [LINKING] "!FOLDER_NAME!"...
            mklink /J "!TARGET_PATH!" "%%F" >nul
            if !errorlevel! equ 0 (
                echo           Success!
            ) else (
                echo           Failed to link!
            )
        )
    ) else (
        echo [SKIPPED] "!FOLDER_NAME!" - Found in exclusion list.
    )
)

echo.
echo ==================================================
echo Symlink scan complete! You can close this window.
pause