# deploy.ps1 - Builds the site and publishes it to the gh-pages branch (GitHub Pages)
# Usage: open Terminal and run  .\deploy.ps1
$ErrorActionPreference = "Stop"
$env:GIT_ASK_YESNO = "false"

# 1) Make sure there are no unsaved tracked changes
$dirty = git status --porcelain --untracked-files=no
if ($dirty) {
    Write-Host "There are uncommitted changes. Save them first:" -ForegroundColor Yellow
    Write-Host "  git add -A" -ForegroundColor White
    Write-Host '  git commit -m "your message"' -ForegroundColor White
    Write-Host "  git push origin main" -ForegroundColor White
    Write-Host "Then run the script again." -ForegroundColor Yellow
    exit 1
}

$current = (git branch --show-current).Trim()
if ($current -eq "gh-pages") {
    Write-Host "You are on gh-pages. Switch to main first: git switch main" -ForegroundColor Yellow
    exit 1
}

# 2) Build the site
Write-Host "[1/3] Building the site (npm run build) ..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit 1 }

# 3) Update the gh-pages branch
Write-Host "[2/3] Updating gh-pages branch ..." -ForegroundColor Cyan
git switch gh-pages
git show main:.gitignore | Out-File -FilePath .gitignore -Encoding utf8

# Remove old built files, then copy the fresh build
Remove-Item -Path "assets", "index.html", "favicon.svg", ".nojekyll" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "dist\*" -Destination . -Recurse -Force

git add -A
git commit -m "Update site: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" --quiet
if ($LASTEXITCODE -eq 0) {
    git push origin gh-pages
    Write-Host "[3/3] Published successfully: https://abubesun-hub.github.io/NITAQ-IQ/" -ForegroundColor Green
} else {
    Write-Host "Nothing new to publish (build is identical to the deployed version)." -ForegroundColor Yellow
}

# 4) Go back to the original branch
git switch $current
