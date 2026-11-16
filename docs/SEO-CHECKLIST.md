# Checklist de SEO — iti.ink

Site no ar: <https://itih182.github.io/iti-ink/>

Ordem de execução. O item 1 é o que mais pesa para "tatuador em Criciúma".

## 1. Google Business Profile (obrigatório)

O site sozinho não aparece para buscas locais. A ficha no Google é o que
ocupa o bloco de mapa e o "pacote local" da busca.

1. Acesse <https://business.google.com> com a conta Google do estúdio.
2. Cadastre o negócio:
   - Nome: `iti.ink tattoo estúdio`
   - Categoria principal: **Tatuador** (secundária: Estúdio de tatuagem)
   - Endereço: Rua Campos Novos, 235 — São Luiz, Criciúma — SC, CEP 88803-320
   - Área de atendimento: Criciúma e região
   - Telefone: (48) 98859-5450
   - Site: https://itih182.github.io/iti-ink/
   - Horário: preencher os horários reais
3. Confirme o endereço (o Google envia código por carta ou pede vídeo).
4. Adicione **no mínimo 10 fotos**: fachada, interior e trabalhos recentes.
   Ficha com fotos recebe muito mais cliques.
5. Publique o primeiro post e peça avaliação a clientes antigos.
   **Avaliações são o fator nº 1 de posição no mapa.**

## 2. Google Search Console (obrigatório)

1. Acesse <https://search.google.com/search-console>.
2. Adicione a propriedade por **prefixo de URL**:
   `https://itih182.github.io/iti-ink/`
3. Verifique por arquivo HTML: baixe o arquivo `googleXXXX.html`, coloque na
   raiz do repositório, faça commit e push. Depois clique em Verificar.
4. Em **Sitemaps**, envie: `sitemap.xml`.
5. Em **Inspeção de URL**, cole a URL do site e peça indexação.

## 3. O que já está pronto no código

- [x] `title` e `description` com "tatuador em Criciúma"
- [x] `canonical`, `robots`, `og:*`, `twitter:card`
- [x] Imagem social 1200×630 (`assets/img/og-cover.png`)
- [x] Schema.org `TattooParlor` com endereço, CEP, telefone, geo, fundação
- [x] Schema.org `FAQPage` com 4 perguntas
- [x] `sitemap.xml` e `robots.txt`
- [x] Lighthouse: Acessibilidade 100 / Boas práticas 100 / SEO 100
- [x] Zero JavaScript, zero dependências, zero requisições bloqueantes
- [x] Logo otimizado (16 KB no header, 512 px no schema)
- [x] Navegação mobile sem hambúrguer, alvos de toque ≥ 44 px
- [x] Galeria horizontal arrastável no celular
- [x] `prefers-reduced-motion` respeitado

## 4. Trocar as fotos do portfólio

As imagens atuais são placeholders SVG gerados por script.

1. Salve as fotos reais como `assets/img/tattoo-1.jpg` … `tattoo-6.jpg`
   (JPG, ~1200 px no lado maior, menos de 200 KB cada).
2. No `index.html`, troque `src="assets/img/tattoo-1.svg"` por
   `src="assets/img/tattoo-1.jpg"` nas seis figuras.
3. Ajuste o `alt` de cada foto descrevendo o que está na imagem
   (ex.: "Tatuagem de traço fino no antebraço").
4. Atualize `alt`, `width` e `height` para as proporções reais.
5. Commit e push.

## 5. Manutenção mensal

- Publicar 2 a 3 fotos novas no Google Business Profile.
- Responder todas as avaliações.
- Rodar Lighthouse e manter as três notas em 100.
