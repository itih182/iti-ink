import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const schemaMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);

assert.ok(schemaMatch, 'JSON-LD schema must exist');

const schema = JSON.parse(schemaMatch[1]);
const business = schema['@graph'].find((node) => node.name === 'iti.ink Tattoo Studio');
assert.ok(business, 'TattooParlor schema must exist');
assert.deepEqual(
  business.areaServed.map((area) => area.name),
  ['Criciúma', 'São Luís', 'Santa Bárbara', 'Próspera', 'Içara'],
  'areaServed must target requested hyperlocal areas',
);
assert.match(business.description, /Prefeitura Municipal de Criciúma/);
assert.match(business.description, /Parque das Nações/);

assert.match(html, /Localizado no bairro São Luís, próximo à Prefeitura Municipal de Criciúma\./);
assert.match(html, /Itiberê Riffel é tatuador em Criciúma com mais de/);

const gallery = html.match(/<div class="gallery-grid" id="gallery-grid">([\s\S]*?)<\/div>\s*<div class="gallery-cta-wrap">/);
assert.ok(gallery, 'gallery must exist');
assert.equal((gallery[1].match(/<button type="button" class="tattoo-card"/g) ?? []).length, 10);
assert.equal((gallery[1].match(/<div class="tattoo-card"/g) ?? []).length, 0);
assert.equal((gallery[1].match(/aria-label=/g) ?? []).length, 0);
assert.match(gallery[1], /(?:tatuador em Criciúma|Estúdio iti\.ink)/i);
assert.doesNotMatch(
  html,
  /document\.querySelectorAll\('\.tattoo-card'\)\.forEach\(\(card, idx\) => \{[\s\S]*?card\.addEventListener\('keydown'/,
  'native buttons must not retain duplicate keyboard handlers',
);

assert.match(html, /<source srcset="logo\.webp" type="image\/webp" \/>/);
assert.match(html, /\.tattoo-card\s*\{[\s\S]*?appearance:\s*none;/);

console.log('SEO and gallery accessibility checks passed.');
