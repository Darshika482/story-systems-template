#!/usr/bin/env node
/**
 * Makes a reading copy of the screenplay for people who will not open a .fountain file.
 *
 *   node production/tools/export-reading-copy.js
 *
 * Writes  exports/html/moksha-marg-prakashak.html
 *         exports/pdf/moksha-marg-prakashak.pdf   (needs Playwright + Chromium)
 *
 * Team notes ([[…]]) are hidden except reel markers, which become a small shaded box.
 * Granth cards and strips are set apart so a reader can find every line of the granth.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'moksha-marg-prakashak.fountain');
const HTML_OUT = path.join(ROOT, 'exports', 'html', 'moksha-marg-prakashak.html');
const PDF_OUT = path.join(ROOT, 'exports', 'pdf', 'moksha-marg-prakashak.pdf');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function render() {
  const raw = fs.readFileSync(SRC, 'utf8').split('\n');
  const split = raw.findIndex((l) => l.trim() === '===');
  const meta = {};
  raw.slice(0, split).forEach((l) => {
    const m = l.match(/^([A-Za-z ]+):\s*(.*)$/);
    if (m) meta[m[1].trim()] = m[2].trim();
  });
  const lines = raw.slice(split + 1);

  const out = [];
  let inDialogue = false;
  const closeDialogue = () => { if (inDialogue) { out.push('</div>'); inDialogue = false; } };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    const prev = i > 0 ? lines[i - 1].trim() : '';

    if (line === '') { closeDialogue(); continue; }

    const reel = line.match(/^\[\[REEL\s+(R\d+)\s*\|\s*(.+?)\s*\|\s*हुक:\s*"(.+?)"\s*\|\s*दादी का सवाल:\s*"(.+?)"\s*\]\]$/);
    if (reel) {
      closeDialogue();
      out.push(`<div class="reel"><b>${reel[1]} · ${esc(reel[2])}</b><br>हुक: ${esc(reel[3])}<br>दादी का सवाल: ${esc(reel[4])}</div>`);
      continue;
    }
    if (line.startsWith('[[')) continue;

    if (line.startsWith('# ')) { closeDialogue(); out.push(`<h1>${esc(line.slice(2))}</h1>`); continue; }
    if (line.startsWith('= ')) { closeDialogue(); out.push(`<p class="synopsis">${esc(line.slice(2))}</p>`); continue; }

    const heading = line.match(/^((?:INT|EXT)\..+?)(?:\s+#(.+?)#)?$/);
    if (heading && /^(INT|EXT)\./.test(line)) {
      closeDialogue();
      out.push(`<h2><span class="num">${esc(heading[2] || '')}</span>${esc(heading[1])}</h2>`);
      continue;
    }

    if (/^>?\s*(CUT TO:|DISSOLVE TO:|MATCH CUT TO:|SMASH CUT TO:|TIME CUT:|FADE IN:|FADE OUT\.)$/.test(line)) {
      closeDialogue();
      out.push(`<p class="transition">${esc(line.replace(/^>\s*/, ''))}</p>`);
      continue;
    }

    const card = line.match(/^(वचन-कार्ड|वचन-पट्टी)\s*\(पृ\.\s*([^)]+)\):\s*(“.+”)\s*$/);
    if (card) {
      closeDialogue();
      const cls = card[1] === 'वचन-कार्ड' ? 'card' : 'strip';
      out.push(`<div class="${cls}"><span class="label">${card[1]} · पृ. ${esc(card[2])}</span>${esc(card[3])}</div>`);
      continue;
    }

    if (!inDialogue && prev === '' && /^[A-Z][A-Z\s\d'.-]+(\s*\([^)]+\))?$/.test(line)) {
      out.push(`<div class="dialogue"><p class="cue">${esc(line)}</p>`);
      inDialogue = true;
      continue;
    }

    if (inDialogue) {
      if (line.startsWith('(') && line.endsWith(')')) out.push(`<p class="paren">${esc(line)}</p>`);
      else out.push(`<p class="line">${esc(line)}</p>`);
      continue;
    }

    const device = line.match(/^(पर्दे पर|चिप|डॉलहाउस|कैरी|कोई — पन्ने पर|सम का फ़ोन \(9:16\)):/);
    out.push(`<p class="action${device ? ' device' : ''}">${esc(line)}</p>`);
  }
  closeDialogue();

  return `<!doctype html>
<html lang="hi"><head><meta charset="utf-8">
<title>${esc(meta.Title || 'Screenplay')}</title>
<style>
  @page { size: A4; margin: 22mm 20mm 20mm 24mm; }
  body { font-family: "Noto Serif Devanagari", "Noto Sans Devanagari", "FreeSerif", serif; font-size: 12.5pt; line-height: 1.5; color: #222; max-width: 170mm; margin: 0 auto; }
  .title { text-align: center; padding: 70mm 0 0; page-break-after: always; }
  .title .big { font-size: 34pt; font-weight: bold; }
  .title p { margin: 4mm 0; }
  .title .small { font-size: 10pt; color: #555; margin-top: 60mm; }
  h1 { font-size: 18pt; text-align: center; margin: 0 0 4mm; page-break-before: always; padding-top: 30mm; }
  .synopsis { text-align: center; font-style: italic; color: #555; margin: 0 12mm 14mm; }
  h2 { font-family: "DejaVu Sans Mono", monospace; font-size: 10.5pt; margin: 9mm 0 3mm; page-break-after: avoid; }
  h2 .num { color: #888; margin-right: 3mm; }
  p { margin: 0 0 3mm; }
  .action.device { color: #0b5a5a; }
  .dialogue { margin: 0 22mm 3mm 30mm; page-break-inside: avoid; }
  .cue { font-family: "DejaVu Sans Mono", monospace; font-size: 10pt; margin: 3mm 0 0 22mm; }
  .paren { font-family: "DejaVu Sans Mono", monospace; font-size: 9pt; color: #666; margin: 0 0 0 12mm; }
  .line { margin: 0; }
  .transition { font-family: "DejaVu Sans Mono", monospace; font-size: 10pt; text-align: right; margin: 4mm 0; }
  .card, .strip { margin: 4mm 6mm; padding: 3mm 5mm; text-align: center; page-break-inside: avoid; }
  .card { background: #fbf5e3; border: 1.2pt solid #b8922f; font-weight: bold; }
  .strip { border: 0.6pt solid #999; color: #333; }
  .label { display: block; font-size: 8.5pt; font-weight: normal; color: #8a6d1d; margin-bottom: 1mm; }
  .strip .label { color: #777; }
  .reel { background: #eaf3f3; border-left: 3pt solid #1d7373; font-size: 9.5pt; padding: 2mm 4mm; margin: 0 0 4mm; color: #1d5555; page-break-inside: avoid; }
</style></head><body>
<div class="title">
  <div class="big">${esc(meta.Title || '')}</div>
  <p>${esc(meta.Credit || '')}</p>
  <p>${esc(meta.Source || '')}</p>
  <p class="small">${esc(meta['Draft date'] || '')}<br>${esc(meta.Notes || '')}</p>
</div>
${out.join('\n')}
</body></html>`;
}

async function main() {
  const html = render();
  fs.mkdirSync(path.dirname(HTML_OUT), { recursive: true });
  fs.writeFileSync(HTML_OUT, html);
  console.log(`Wrote ${path.relative(ROOT, HTML_OUT)}`);

  let chromium;
  try { ({ chromium } = require('playwright')); } catch (e) {
    console.log('Playwright not available — open the HTML file and print it to PDF.');
    return;
  }
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + HTML_OUT);
  fs.mkdirSync(path.dirname(PDF_OUT), { recursive: true });
  await page.pdf({
    path: PDF_OUT,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#888;"><span class="pageNumber"></span></div>',
  });
  await browser.close();
  console.log(`Wrote ${path.relative(ROOT, PDF_OUT)}`);
}

main();
