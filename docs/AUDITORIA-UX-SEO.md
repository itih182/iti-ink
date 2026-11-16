# Auditoria UX/UI + SEO — iti.ink

Data: 16/11/2026
Site: https://itih182.github.io/iti-ink/
Método: medição em 6 viewports (320×568, 390×844, 414×896, 768×1024, 1024×768,
1440×900), Lighthouse, cálculo de contraste, inspeção de HTML, CSS e JSON-LD.

---

## 1. Placar técnico

| Item | Resultado |
|---|---|
| Lighthouse acessibilidade | 100 |
| Lighthouse boas práticas | 100 |
| Lighthouse SEO | 100 |
| Overflow horizontal | 0 px em todos os 6 viewports |
| Erros de console | 0 |
| Imagens sem `alt` | 0 |
| Imagens sem `width`/`height` | 0 |
| Links externos sem `rel="noopener"` | 0 |
| Requisições | 10–12 |
| Peso | 25 KB com cache, ~146 KB no primeiro acesso |

Contraste calculado (WCAG AA exige 4,5:1 em texto normal):

| Combinação | Razão | Veredito |
|---|---|---|
| Branco #f5f5f5 sobre preto #0a0a0a | 18,9:1 | passa AAA |
| Cinza claro #bdbdbd sobre preto | 10,5:1 | passa AAA |
| Turquesa #40e0d0 sobre preto | 12,1:1 | passa AAA |
| Texto #06211f sobre turquesa | 10,3:1 | passa AAA |
| Cinza #8a8a8a sobre preto | 5,7:1 | passa AA |

---

## 2. Medições de layout

| Viewport | Header | Hero | Header / tela | Header + hero / tela | Nav cabe | Galeria | Card |
|---|---|---|---|---|---|---|---|
| 320×568 | 118 px | 298 px | **21 %** | **73 %** | sim | carrossel | 225×225 |
| 390×844 | 118 px | 298 px | 14 % | 49 % | sim | carrossel | 285×285 |
| 414×896 | 118 px | 298 px | 13 % | 46 % | sim | carrossel | 305×305 |
| 768×1024 | 126 px | 228 px | 12 % | 35 % | sim | grade 2 col | 349×435 |
| 1024×768 | 75 px | 261 px | 10 % | 44 % | sim | grade 3 col | 312×390 |
| 1440×900 | 75 px | 268 px | 8 % | 38 % | sim | grade 3 col | 363×453 |

Leitura: no desktop o cabeçalho é discreto (8–10 %). No celular pequeno
(320×568, iPhone SE) o cabeçalho fixo mais o hero consomem 73 % da primeira
tela. O portfólio começa praticamente fora da dobra. É o único problema
estrutural real de layout encontrado.

---

## 3. WEB (desktop e notebook)

### O que está bom

- Hierarquia correta: hero → portfólio → sobre → estilos → local → FAQ → CTA.
- Galeria em grade de 3 colunas, proporção uniforme 4:5, sem buracos.
- Largura de leitura limitada a 40 rem (~65 caracteres), confortável.
- Foco visível em todos os controles, com anel duplo de alto contraste.
- Header sticky de 75 px, não rouba a tela.
- 7 pontos de conversão para WhatsApp distribuídos sem poluição.

### Problemas

| Sev. | Problema | Evidência | Correção |
|---|---|---|---|
| Alta | Nenhum horário de funcionamento | não existe no HTML nem no JSON-LD | bloco de horário + `openingHoursSpecification` |
| Alta | Nenhum link de Instagram | 0 links sociais | link no footer + `sameAs` |
| Alta | Zero prova social | nenhuma avaliação, depoimento ou nota | 3 depoimentos + `aggregateRating` quando houver |
| Alta | Tatuador sem nome nem rosto | texto usa "o tatuador" | nome artístico e 1 frase em primeira pessoa |
| Alta | Preço totalmente opaco | nenhuma faixa de referência | "a partir de" ou 3 exemplos de tamanho |
| Média | Portfólio sem ampliação nem legenda | `<figure>` só com `<img>` | lightbox CSS + legenda com estilo e local |
| Média | Cards de estilo só com texto | 4 cards, 0 imagens | miniatura por card |
| Média | Falta "como funciona" | nenhuma seção de processo | 3 passos |
| Média | Conteúdo raso | 276 palavras no total | bloco de 300–400 palavras sobre tatuagem em Criciúma |
| Baixa | Fontes externas bloqueiam render | 2 origens do Google Fonts | self-host woff2 |
| Baixa | `prefetch` para `wa.me` | abre app, não é recurso de página | remover |

---

## 4. MOBILE

### O que está bom

- Nav inteira visível em todos os tamanhos, sem hambúrguer (verificado a 320 px).
- Galeria vira carrossel com `scroll-snap` e dica de arraste animada.
- Botão de WhatsApp com 52 px, acima do mínimo de 44 px.
- Rodapé com 112 px de folga, sem colisão com o botão flutuante.
- Zero rolagem horizontal em 320, 390 e 414 px.
- Texto do hero legível sem zoom: h1 a 33,6 px em 320 px.

### Problemas

| Sev. | Problema | Evidência | Correção |
|---|---|---|---|
| Alta | Cabeçalho fixo domina a tela curta | 118 px = 21 % de 568 px; com hero, 73 % | compactar para ~88 px e liberar o sticky abaixo de 600 px de altura |
| Média | Cabeçalho fixo cobre conteúdo ao rolar | `position: sticky` + 118 px em toda a página | manter sticky só a partir de 600 px de altura |
| Baixa | Fonte da nav a 10,2 px em 320 px | 0,64 rem | subir para 0,7 rem com `letter-spacing` menor |
| Baixa | Link inline "WhatsApp" com 16 px de altura | na nota da galeria | aumentar `padding-block` |

---

## 5. SEO

### Implementado e verificado

| Elemento | Valor | Situação |
|---|---|---|
| `title` | "Tatuador em Criciúma \| iti.ink Tattoo Estúdio" (45 car.) | bom |
| `description` | 136 caracteres, com cidade e serviço | bom |
| `canonical` | absoluto, correto | bom |
| `robots` | `index, follow, max-image-preview:large` | bom |
| Open Graph | título, descrição, imagem 1200×630, alt | bom |
| Twitter Card | `summary_large_image` | bom |
| `lang` | `pt-BR` | bom |
| Schema `TattooParlor` | nome, URL, imagem, logo, telefone, preço, fundação, endereço com CEP, área, geo | bom |
| Schema `FAQPage` | 4 perguntas | bom |
| `sitemap.xml` | 1 URL, `lastmod` atualizado | bom |
| `robots.txt` | aponta o sitemap | bom |
| h1 único | "Tatuador em Criciúma" | bom |
| h2 | 6 seções | bom |
| h3 | 4 estilos | bom |

### Lacunas de SEO

| Sev. | Lacuna | Efeito | Correção |
|---|---|---|---|
| Alta | 276 palavras de conteúdo | página rasa para serviço local; o Google prefere profundidade | 300–400 palavras extras sobre tatuagem em Criciúma, cuidados e processo |
| Alta | Falta `openingHoursSpecification` | perde elegibilidade no pacote local | preencher com o horário real |
| Alta | Falta `sameAs` | Google não liga site a Instagram/ficha | adicionar quando o perfil existir |
| Alta | Falta `hasMap` e link da ficha | perde sinal de entidade local | adicionar URL do Maps |
| Média | Palavra "tatuagem" aparece 4× e "tatuador" 4× | pouca cobertura semântica | variar em h2 e texto corrido |
| Média | Imagens em SVG e PNG | sem WebP/AVIF, sem `srcset` | exportar fotos em WebP com 2 larguras |
| Média | Sem conteúdo de cauda longa | perde busca por "quanto custa tatuagem Criciúma", "tatuagem traço fino Criciúma" | FAQ maior + bloco de texto |
| Baixa | Sem `og:image:type` | alguns scrapers ignoram | adicionar |
| Baixa | Sem `format-detection` | iOS converte números em link de telefone | adicionar |
| Baixa | Sem `aggregateRating` | sem estrelas na busca | depende de avaliações reais |

### Fora do código (maior impacto)

1. **Google Business Profile** — é o que coloca o estúdio no mapa e no pacote local. Sem ficha, o site fica invisível para "tatuador em Criciúma".
2. **Search Console** — enviar `sitemap.xml` e pedir indexação.
3. **Avaliações no Google** — fator nº 1 de posição no mapa.
4. **Fotos reais** — substituir os 6 placeholders.

---

## 6. Ordem de execução recomendada

1. Google Business Profile (você) — maior ganho isolado.
2. Horário, Instagram e nome do tatuador no site.
3. Compactar o cabeçalho no celular e liberar o sticky em telas curtas.
4. Trocar as 6 fotos por WebP com `srcset`.
5. Depoimentos e âncora de preço.
6. "Como funciona", FAQ ampliado, lightbox.
7. Search Console.

---

## 7. Dados que só você tem

- Horário de funcionamento por dia.
- Instagram do estúdio.
- Nome artístico do tatuador.
- Faixa de preço ou como prefere comunicar valor.
- 3 depoimentos de clientes.
- As 6 fotos reais.
