# iti.ink tattoo estúdio — site

Site estático do estúdio de tatuagem **iti.ink**, em Criciúma – SC.
Sem build, sem banco, sem custo: HTML + CSS puro, hospedado no GitHub Pages.

```
index.html      página única (hero, sobre, estilos, portfólio, localização, CTA)
style.css       todo o estilo (paleta preto / branco / cinza / turquesa)
assets/         logo, favicon, og-cover e placeholders do portfólio
robots.txt      libera indexação e aponta o sitemap
sitemap.xml     mapa do site para o Google
.nojekyll       desliga o Jekyll do GitHub Pages
```

## Antes de publicar: troque os dados provisórios

| O quê | Onde |
|---|---|
| Fotos reais das tattoos | `assets/img/tattoo-1..6` (exporte em `.jpg` ou `.webp`, até ~200 KB cada, e atualize o `src` no `index.html`) |
| Logo definitiva | `assets/logo.svg` |
| Endereço com CEP | `index.html` (bloco `address` e JSON-LD) |
| Instagram / redes | adicione um link no `<footer>` e o campo `sameAs` no JSON-LD |
| Horário de funcionamento | adicione `openingHoursSpecification` no JSON-LD |
| `SEU-USUARIO` | `deploy.ps1 -User seu-usuario` troca em todos os arquivos |

## Publicar no GitHub Pages (gratuito)

1. Crie a conta em <https://github.com/signup> (grátis).
2. Crie um repositório **público** chamado `iti-ink`.
3. No terminal, dentro desta pasta:

```powershell
git remote add origin https://github.com/SEU-USUARIO/iti-ink.git
git branch -M main
git push -u origin main
```

4. No repositório: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root → Save**.
5. Configure a URL final e publique:

```powershell
.\deploy.ps1 -User SEU-USUARIO
```

O script troca `SEU-USUARIO` em `index.html`, `robots.txt` e `sitemap.xml`,
faz commit e envia. Depois de 1–2 minutos o site fica em
`https://SEU-USUARIO.github.io/iti-ink/`.

### Domínio próprio (opcional)

Um domínio `.com.br` custa cerca de R$ 40/ano no Registro.br — é o único gasto
possível neste projeto. Configure em **Settings → Pages → Custom domain**.
Um domínio próprio melhora a confiança e o ranqueamento; o `github.io` já funciona.

## Aparecer no Google

Hospedar não basta. Os passos que realmente colocam o estúdio na busca estão em
[`docs/SEO-CHECKLIST.md`](docs/SEO-CHECKLIST.md). Os dois obrigatórios:

1. **Google Business Profile** (ficha do estúdio no Maps) — é o que faz aparecer
   em "tatuador em Criciúma" e no mapa.
2. **Google Search Console** — envie o `sitemap.xml` e peça indexação.
