# Análise UX/UI — iti.ink

Data: 15/11/2026 · Site: https://itih182.github.io/iti-ink/

Método: inspeção do código, medição em 320 / 390 / 768 / 1440 px, Lighthouse,
cálculo de contraste e revisão de hierarquia de conteúdo.

---

## 1. O que já está certo

- **Hierarquia clara**: portfólio logo abaixo do hero, depois sobre, estilos,
  localização, dúvidas, CTA.
- **Contraste AA em todo o texto**: turquesa sobre preto 12,1:1; cinza 5,7:1;
  texto do botão primário 10,3:1.
- **Lighthouse 100 / 100 / 100**, zero erro de console, 146 KB, 12 requisições.
- **Paridade desktop e mobile confirmada por medição**: 320 e 390 px com
  overflow zero, galeria em carrossel, dica de arraste visível, nav cabendo
  inteira. 768 e 1440 px com galeria em grade.
- **Alvos de toque ≥ 44 px** em nav, footer, FAQ e botões.
- **Sem JavaScript**: nada quebra, nada bloqueia, nada expira.

---

## 2. Problemas de severidade alta (afetam confiança e conversão)

### A1. Nenhum horário de funcionamento

Não existe horário no site nem no schema. Quem vem da busca não sabe se o
estúdio está aberto hoje. É a primeira coisa que o visitante procura depois do
endereço.

Correção: bloco de horário na seção "Onde estamos" + `openingHoursSpecification`
no JSON-LD.

### A2. Nenhum link para Instagram

Tatuagem é decisão visual. O cliente pesquisa o profissional no Instagram antes
de mandar mensagem. Sem link, o site é um beco sem saída social, e o Google
perde o sinal de entidade (`sameAs`).

Correção: link no header/footer e `sameAs` no JSON-LD.

### A3. Zero prova social

O site afirma "8 anos de experiência" e nada mais. Não há avaliação,
depoimento, número de clientes ou antes-e-depois.

Correção: 3 depoimentos curtos com primeiro nome e 1 linha de contexto +
`aggregateRating` quando houver avaliações reais no Google.

### A4. O tatuador não tem nome nem rosto

Todo o texto fala em "o tatuador". Pessoas marcam com pessoas, não com estúdios.

Correção: nome artístico, uma foto de trabalho e uma frase em primeira pessoa
na seção Sobre.

### A5. Preço totalmente opaco

"Orçamento gratuito" reduz o medo, mas não elimina. Sem nenhuma âncora
("pequenas a partir de R$ X"), uma parte dos visitantes assume que não pode
pagar e sai antes de perguntar.

Correção: faixa de partida ou explicação do que define o preço, com 3 exemplos
de tamanho.

### A6. Fotos são placeholders

O site vende um serviço visual sem mostrar trabalho real. Enquanto os
placeholders estiverem no ar, a nota "imagens ilustrativas" precisa continuar —
mas ela mesma reduz a confiança.

Correção: 6 fotos reais, 1200 px no lado maior, menos de 200 KB cada.

---

## 3. Severidade média

| # | Problema | Efeito | Correção |
|---|---|---|---|
| M1 | Cards de estilo são só texto | Site visual com seção sem imagem | Foto pequena por card |
| M2 | FAQ não cobre as dúvidas que travam a decisão | Visitante sai para perguntar no WhatsApp o que já poderia estar respondido | Adicionar: dói, tempo de cicatrização, precisa sinal, formas de pagamento, cuidados |
| M3 | Portfólio sem ampliação nem legenda | Não dá para ver detalhe no desktop | Lightbox em CSS puro + legenda com estilo e local do corpo |
| M4 | Falta "como funciona" | Processo desconhecido gera medo | 3 passos: conversa, orçamento e desenho, sessão |
| M5 | Header sticky de 118 px no celular | Consome 14 % da tela em 320 px | Reduzir para ~64 px ou deixar sticky só no desktop |
| M6 | 7 CTAs de WhatsApp idênticos | Oportunidade perdida de contexto | Mensagem diferente por seção (portfólio, preço, local) |
| M7 | Conteúdo com 278 palavras | Pouco texto para ranquear em serviço local | Bloco de 300–400 palavras sobre tatuagem em Criciúma |
| M8 | Google Fonts render-blocking | ~150 ms a mais no primeiro desenho | Self-host das 2 fontes em woff2 |

---

## 4. Severidade baixa

- Link inline "WhatsApp" no rodapé da galeria com 16 px de altura de toque.
- `prefetch` para `wa.me` provavelmente inútil: abre app, não é recurso de página.
- Transição de opacidade no `::-webkit-scrollbar-thumb` não é confiável.
- Falta `og:image:type` e `format-detection` no `<head>`.
- Nota "imagens ilustrativas" fica na área principal até as fotos entrarem.

---

## 5. Ordem sugerida para amanhã

1. Ficha no Google Business Profile (você) — maior impacto isolado.
2. Horário + Instagram + nome do tatuador no site (depende de você informar).
3. Trocar as 6 fotos.
4. Depoimentos (depende de você coletar).
5. Search Console: enviar `sitemap.xml`.
6. Depois: "como funciona", FAQ ampliado, lightbox, âncora de preço.

---

## 6. O que eu preciso de você

- Horário de funcionamento por dia da semana.
- Instagram do estúdio.
- Nome artístico do tatuador.
- Faixa de preço ou como você prefere comunicar valor.
- 3 depoimentos de clientes.
- As 6 fotos.
