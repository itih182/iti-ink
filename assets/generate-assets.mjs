// Gera assets SVG (logo, favicon, og-cover e placeholders do portfólio).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const IMG = "assets/img";
mkdirSync(IMG, { recursive: true });

const TQ = "#40e0d0";
const TQ_DIM = "#2bb8aa";
const BG = "#0a0a0a";
const CARD = "#141414";
const LINE = "#2a2a2a";
const GRAY = "#5a5a5a";

// ---------- logo ----------
const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" width="240" height="64" role="img" aria-label="iti.ink tattoo estúdio">
  <text x="0" y="44" font-family="Bebas Neue, Impact, Haettenschweiler, sans-serif" font-size="46" letter-spacing="1.5" fill="#f5f5f5">iti<tspan fill="${TQ}">.</tspan>ink</text>
  <rect x="1" y="54" width="70" height="2" fill="${TQ}"/>
  <text x="80" y="58" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="10" letter-spacing="4.2" fill="${GRAY}">TATTOO ESTÚDIO</text>
</svg>
`;

// ---------- favicon ----------
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${BG}"/>
  <circle cx="32" cy="32" r="17" fill="none" stroke="${TQ}" stroke-width="2.5"/>
  <circle cx="32" cy="32" r="4" fill="${TQ}"/>
  <path d="M32 8v6M32 50v6M8 32h6M50 32h6" stroke="${TQ}" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

// ---------- og cover ----------
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="25%" cy="30%" r="75%">
      <stop offset="0%" stop-color="${TQ}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${TQ}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g fill="none" stroke="${TQ}" stroke-opacity="0.18" stroke-width="1.5">
    <circle cx="960" cy="315" r="150"/>
    <circle cx="960" cy="315" r="215"/>
    <circle cx="960" cy="315" r="280"/>
  </g>
  <text x="90" y="300" font-family="Bebas Neue, Impact, sans-serif" font-size="96" fill="#f5f5f5">iti<tspan fill="${TQ}">.</tspan>ink</text>
  <text x="94" y="360" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" letter-spacing="8" fill="${GRAY}">TATTOO ESTÚDIO</text>
  <text x="94" y="440" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="30" fill="#bdbdbd">Tatuador em Criciúma · SC</text>
  <text x="94" y="486" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="24" fill="${TQ}">8 anos de experiência</text>
</svg>
`;

writeFileSync("assets/logo.svg", logo);
writeFileSync("assets/favicon.svg", favicon);
writeFileSync(join(IMG, "og-cover.svg"), og);

// ---------- placeholders ----------
const arts = [
  // traço fino botânico
  `<g fill="none" stroke="${TQ}" stroke-width="2" stroke-linecap="round">
     <path d="M300 620 C300 460 300 320 300 150"/>
     <path d="M300 470 C240 440 210 390 215 330 C275 350 305 395 300 470Z"/>
     <path d="M300 400 C360 372 392 322 388 262 C328 282 300 328 300 400Z"/>
     <path d="M300 320 C238 292 208 240 214 180 C272 202 302 250 300 320Z"/>
     <path d="M300 250 C356 224 386 176 382 120 C326 140 300 186 300 250Z"/>
     <circle cx="300" cy="132" r="9"/>
   </g>`,
  // blackwork geométrico
  `<g fill="none" stroke="${TQ}" stroke-width="2.4">
     <circle cx="300" cy="370" r="150"/>
     <circle cx="300" cy="370" r="110"/>
     <circle cx="300" cy="370" r="70"/>
     <path d="M300 220 L430 445 L170 445 Z"/>
     <path d="M300 250 L400 430 L200 430 Z" stroke-width="1.4"/>
     <path d="M212 270 L388 270"/>
     <path d="M226 330 L374 330"/>
     <path d="M240 390 L360 390"/>
   </g>
   <circle cx="300" cy="370" r="14" fill="${TQ}"/>`,
  // floral realismo
  `<g fill="none" stroke="${TQ}" stroke-width="1.8" stroke-linecap="round">
     <path d="M300 640 C310 520 292 430 300 350"/>
     <g transform="translate(300 340)">
       <path d="M0 0 C-70 -40 -110 -110 -95 -170 C-45 -150 -8 -95 0 0Z"/>
       <path d="M0 0 C70 -40 110 -110 95 -170 C45 -150 8 -95 0 0Z"/>
       <path d="M0 0 C-40 -75 -40 -160 0 -205 C40 -160 40 -75 0 0Z"/>
       <path d="M0 0 C-95 -20 -160 -70 -175 -130 C-105 -130 -45 -85 0 0Z"/>
       <path d="M0 0 C95 -20 160 -70 175 -130 C105 -130 45 -85 0 0Z"/>
       <circle cx="0" cy="-12" r="16" fill="${TQ}" stroke="none" opacity="0.85"/>
     </g>
   </g>`,
  // mandala dotwork
  `<g fill="none" stroke="${TQ}" stroke-width="1.6">
     <circle cx="300" cy="300" r="60"/>
     <circle cx="300" cy="300" r="95"/>
     <circle cx="300" cy="300" r="130"/>
     <circle cx="300" cy="300" r="165" stroke-dasharray="2 10"/>
     <path d="M300 135 L300 465M135 300 L465 300M183 183 L417 417M417 183 L183 417" stroke-width="1"/>
   </g>
   <g fill="${TQ}">
     <circle cx="300" cy="240" r="5"/><circle cx="300" cy="360" r="5"/>
     <circle cx="240" cy="300" r="5"/><circle cx="360" cy="300" r="5"/>
     <circle cx="252.5" cy="252.5" r="4"/><circle cx="347.5" cy="347.5" r="4"/>
     <circle cx="347.5" cy="252.5" r="4"/><circle cx="252.5" cy="347.5" r="4"/>
     <circle cx="300" cy="300" r="9"/>
   </g>`,
  // estúdio / máquina (abstrato)
  `<g fill="none" stroke="${TQ}" stroke-width="2.2" stroke-linecap="round">
     <rect x="235" y="120" width="130" height="150" rx="16"/>
     <path d="M300 270 L300 400"/>
     <path d="M300 400 L300 500" stroke-width="4"/>
     <path d="M270 120 L270 70 M330 120 L330 70"/>
     <path d="M150 470 C230 420 370 420 450 470"/>
     <path d="M170 520 C240 480 360 480 430 520" stroke-width="1.2" opacity="0.6"/>
   </g>
   <rect x="262" y="160" width="76" height="8" rx="4" fill="${TQ}" opacity="0.8"/>`,
  // lettering
  `<g fill="none" stroke="${TQ}" stroke-width="2.6" stroke-linecap="round">
     <path d="M180 330 C210 250 250 250 260 330 C270 250 310 250 320 330"/>
     <path d="M180 330 L180 400 M320 330 L320 400"/>
     <path d="M195 400 L305 400"/>
   </g>
   <path d="M150 430 C260 470 340 470 450 430" fill="none" stroke="${TQ_DIM}" stroke-width="1.4" opacity="0.5"/>
   <path d="M160 460 C260 495 340 495 440 460" fill="none" stroke="${TQ_DIM}" stroke-width="1" opacity="0.3"/>`,
];

const labels = [
  "TRAÇO FINO", "BLACKWORK", "FLORAL", "DOTWORK", "ESTÚDIO", "LETTERING",
];

arts.forEach((art, i) => {
  const tall = i === 0 || i === 2 || i === 5;
  const w = 600;
  const h = tall ? 750 : 600;
  const cy = tall ? 375 : 300;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${h}" width="${w}" height="${h}" role="img" aria-label="Espaço reservado para foto: ${labels[i]}">
  <rect width="600" height="${h}" fill="${CARD}"/>
  <g opacity="0.55">${art.replaceAll('cy="370"', `cy="${cy}"`).replaceAll('cy="300"', `cy="${cy}"`)}</g>
  <rect x="1" y="1" width="598" height="${h - 2}" fill="none" stroke="${LINE}"/>
  <g transform="translate(0 ${h - 96})">
    <text x="40" y="0" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="15" letter-spacing="5" fill="#7a7a7a">${labels[i]}</text>
    <text x="40" y="34" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="13" letter-spacing="1" fill="#3f3f3f">FOTO EM BREVE</text>
  </g>
</svg>
`;
  writeFileSync(join(IMG, `tattoo-${i + 1}.svg`), svg);
});

console.log("assets gerados");
