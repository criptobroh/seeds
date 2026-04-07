import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedsLogo = readFileSync(resolve(__dirname, '../public/logo-seeds.svg'), 'utf-8');

// Create OG image with Seeds logo + NoCoda logo
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="white"/>
  <rect x="0" y="0" width="1200" height="4" fill="#00CA8C"/>

  <!-- Seeds logo -->
  <g transform="translate(380, 160) scale(0.35)">
    ${seedsLogo.replace(/<\?xml[^?]*\?>/, '').replace(/<svg[^>]*>/, '').replace('</svg>', '')}
  </g>

  <!-- x separator -->
  <text x="600" y="310" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="20" fill="#aaa" text-anchor="middle">x</text>

  <!-- NoCoda text (logo will be composited separately) -->
  <text x="620" y="365" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="24" fill="#1a1a1a">NoCoda</text>

  <!-- Tagline -->
  <text x="600" y="430" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="28" fill="#1a1a1a" text-anchor="middle">Capacitacion en IA estructurada</text>
  <text x="600" y="465" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="20" fill="#888" text-anchor="middle">para tu equipo</text>

  <rect x="530" y="500" width="140" height="3" rx="2" fill="#00CA8C"/>
</svg>`;

// Generate base image from SVG
const baseImage = await sharp(Buffer.from(svg)).png().toBuffer();

// Resize NoCoda logo
const nocodaLogo = await sharp(resolve(__dirname, '../public/logo-nocoda.png'))
  .resize(32, 32)
  .png()
  .toBuffer();

// Composite NoCoda logo onto the base image
await sharp(baseImage)
  .composite([{
    input: nocodaLogo,
    left: 581,
    top: 340,
  }])
  .toFile(resolve(__dirname, '../public/og-image.png'));

console.log('OG image generated with real NoCoda logo');
