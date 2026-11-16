# iti.ink tattoo estúdio — site

Site estático do estúdio de tatuagem **iti.ink**, em Criciúma — SC.
Sem build, sem banco, sem custo: HTML + CSS puro, hospedado no GitHub Pages.

**No ar:** <https://itih182.github.io/iti-ink/>

```
index.html      página única (hero, portfólio, sobre, estilos, localização, FAQ, CTA)
style.css       todo o estilo (paleta preto / branco / cinza / turquesa)
assets/         logo, favicon, og-cover e placeholders do portfólio
assets/generate-assets.mjs  regenera os placeholders SVG
robots.txt      libera indexação e aponta o sitemap
sitemap.xml     mapa do site para o Google
.nojekyll       desliga o Jekyll do GitHub Pages
deploy.ps1      troca a URL em todos os arquivos e publica
```

## Estado atual

- Lighthouse: **Acessibilidade 100 · Boas práticas 100 · SEO 100**
- Zero JavaScript, zero dependências, zero requisições bloqueantes
- 146 KB no primeiro carregamento, 12 requisições
- Responsivo de 320 px a 1440 px, sem rolagem horizontal
- Galeria arrastável no celular, alvos de toque ≥ 44 px

## Trocar conteúdo provisório

| O quê | Onde |
|---|---|
| Fotos reais das tattoos | `assets/img/tattoo-1..6` (`.jpg` ou `.webp`, até ~200 KB cada, e atualize o `src` no `index.html`) |
| Logo definitiva | `assets/logo-128.png` (header/footer) e `assets/logo-512.png` (schema) |
| Endereço com CEP | `index.html` (bloco `address` e JSON-LD) |
| Instagram / redes | adicione um link no `<footer>` e o campo `sameAs` no JSON-LD |
| Horário de funcionamento | adicione `openingHoursSpecification` no JSON-LD |

## Publicar

O repositório já está conectado e publicado em `main`.

```powershell
git add -A
git commit -m "sua mensagem"
git push
```

O GitHub Pages publica sozinho em 1 a 2 minutos.

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
