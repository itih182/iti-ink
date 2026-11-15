<#
  Configura a URL final do site e publica no GitHub Pages.

  Uso:
    .\deploy.ps1 -User seu-usuario-github

  O script:
    1. troca SEU-USUARIO pelo seu usuário em index.html, robots.txt e sitemap.xml;
    2. faz commit da mudança;
    3. faz push para o repositório (se o remote já existir).
#>
param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern('^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$')]
  [string]$User
)

$ErrorActionPreference = 'Stop'
$repo = 'iti-ink'

$files = @('index.html', 'robots.txt', 'sitemap.xml')
foreach ($f in $files) {
  $path = Join-Path $PSScriptRoot $f
  $text = [IO.File]::ReadAllText($path)
  $text = $text -replace 'SEU-USUARIO', $User
  [IO.File]::WriteAllText($path, $text, (New-Object System.Text.UTF8Encoding($false)))
  Write-Host "atualizado  $f"
}

Push-Location $PSScriptRoot
try {
  git add index.html robots.txt sitemap.xml
  git -c user.name='iti.ink' -c user.email='contato@iti.ink' commit -q -m "chore: configura URL do GitHub Pages"
  Write-Host "commit ok"

  $remote = git remote 2>$null
  if ($remote) {
    git push origin main
    Write-Host ""
    Write-Host "Publicado. O site fica em:" -ForegroundColor Green
    Write-Host "  https://$User.github.io/$repo/" -ForegroundColor Cyan
  }
  else {
    Write-Host ""
    Write-Host "Falta conectar o repositorio. Rode uma vez:" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/$User/$repo.git"
    Write-Host "  git branch -M main"
    Write-Host "  git push -u origin main"
  }
}
finally {
  Pop-Location
}
