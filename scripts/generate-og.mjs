import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedsLogo = readFileSync(resolve(__dirname, '../public/logo-seeds.svg'), 'utf-8');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="white"/>

  <!-- Seeds logo centered -->
  <g transform="translate(400, 190) scale(0.32)">
    ${seedsLogo.replace(/<\?xml[^?]*\?>/, '').replace(/<svg[^>]*>/, '').replace('</svg>', '')}
  </g>

  <!-- x separator -->
  <text x="600" y="310" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="18" fill="#bbb" text-anchor="middle">x</text>

  <!-- Placeholder for NoCoda logo (composited below) -->
</svg>`;

// Generate base from SVG
const baseImage = await sharp(Buffer.from(svg)).png().toBuffer();

// NoCoda logo with rounded corners
const nocodaRaw = await sharp(resolve(__dirname, '../public/logo-nocoda.png'))
  .resize(40, 40)
  .png()
  .toBuffer();

// Create rounded mask
const roundedMask = Buffer.from(
  `<svg width="40" height="40"><rect width="40" height="40" rx="8" ry="8" fill="white"/></svg>`
);

const nocodaLogo = await sharp(nocodaRaw)
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

// Composite
await sharp(baseImage)
  .composite([{
    input: nocodaLogo,
    left: 580,
    top: 330,
  }])
  .toFile(resolve(__dirname, '../public/og-image.png'));

console.log('Clean OG image generated');
