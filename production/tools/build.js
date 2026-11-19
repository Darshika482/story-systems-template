#!/usr/bin/env node
/**
 * Builds the production sheets from the screenplay.
 *
 *   node production/tools/build.js
 *
 * Reads   moksha-marg-prakashak.fountain  (repo root)
 * Writes  production/audio/audio-sheet.csv   one row per spoken line, for ElevenLabs
 *         production/audio/granth-cards.csv  every granth card and strip, with page and bank ID
 *         production/reels/reel-index.md     every reel, its scenes, hook and closing question
 *         production/scene-index.md          every scene with an estimated running time
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SCRIPT = path.join(ROOT, 'moksha-marg-prakashak.fountain');

// One line of the layout used in this script is close to four seconds of screen time
// (calibrated on Chapter 1: 1,215 lines for about 18.5 minutes, blank lines included).
const SECONDS_PER_LINE = 0.92;

function csvCell(value) {
  return '"' + String(value).replace(/"/g, '""') + '"';
}

function mmss(seconds) {
  const s = Math.round(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function build() {
  const lines = fs.readFileSync(SCRIPT, 'utf8').split('\n');
  const start = lines.findIndex((l) => l.trim() === '===') + 1;

  const scenes = [];
  const audio = [];
  const cards = [];
  const reels = [];
  let scene = null;
  let chapter = '';
  let cue = null;
  let delivery = '';
  let lastCard = null;

  const cueRe = /^([A-Z][A-Z\s\d'.-]+?)(\s*\(([^)]+)\))?$/;

  for (let i = start; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();
    const prev = i > 0 ? lines[i - 1].trim() : '';

    if (scene) scene.lineCount += 1;

    if (line.startsWith('# ')) {
      chapter = line.slice(2);
      cue = null;
      continue;
    }

    const heading = line.match(/^(INT\.|EXT\.)\s+(.+?)\s+-\s+([A-Z]+)(?:\s+#(.+?)#)?$/);
    if (heading) {
      scene = {
        number: heading[4] || '',
        place: `${heading[1]} ${heading[2]}`,
        time: heading[3],
        chapter,
        lineCount: 0,
        reel: '',
      };
      scenes.push(scene);
      cue = null;
      continue;
    }

    const reel = line.match(/^\[\[REEL\s+(R\d+)\s*\|\s*(.+?)\s*\|\s*हुक:\s*"(.+?)"\s*\|\s*दादी का सवाल:\s*"(.+?)"\s*\]\]$/);
    if (reel && scene) {
      reels.push({ id: reel[1], title: reel[2], hook: reel[3], question: reel[4], scenes: [scene.number] });
      scene.reel = reel[1];
      continue;
    }

    const bank = line.match(/^\[\[(Q\w+|GRANTH-NEW[^\]]*|GRANTH-VERIFY[^\]]*)(?:\s+—[^\]]*)?\]\]$/);
    if (bank && lastCard) {
      lastCard.bank = line.slice(2, -2);
      lastCard = null;
      continue;
    }

    const card = line.match(/^(वचन-कार्ड|वचन-पट्टी)\s*\(पृ\.\s*([^)]+)\):\s*“(.+)”\s*$/);
    if (card && scene) {
      lastCard = { scene: scene.number, kind: card[1], page: card[2], text: card[3], bank: '' };
      cards.push(lastCard);
      cue = null;
      continue;
    }

    if (line === '') {
      cue = null;
      delivery = '';
      continue;
    }
    if (line.startsWith('[[') || line.startsWith('=') || line.startsWith('>')) continue;

    if (prev === '' && cueRe.test(line) && !/^(CUT|FADE|DISSOLVE)/.test(line)) {
      const m = line.match(cueRe);
      cue = { name: m[1].trim(), ext: (m[3] || '').trim() };
      delivery = '';
      continue;
    }

    if (cue && line.startsWith('(') && line.endsWith(')')) {
      delivery = line.slice(1, -1);
      continue;
    }

    if (cue && scene) {
      const last = audio[audio.length - 1];
      if (last && last.open && last.line === i - 1 && last.delivery === delivery) {
        last.text += ' ' + line;
        last.line = i;
      } else {
        audio.push({
          scene: scene.number,
          character: cue.name,
          ext: cue.ext,
          delivery,
          text: line,
          line: i,
          open: true,
        });
      }
    }
  }

  const out = (rel, content) => {
    const file = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
    console.log(`Wrote ${rel}`);
  };

  // Audio sheet
  const counters = {};
  const audioRows = [['id', 'scene', 'character', 'kind', 'delivery', 'text'].join(',')];
  for (const a of audio) {
    counters[a.scene] = (counters[a.scene] || 0) + 1;
    const id = `${a.scene}-${String(counters[a.scene]).padStart(2, '0')}`;
    const kind = a.ext.includes('V.O.') ? 'voice-over' : a.ext.includes('O.S.') ? 'off-screen' : 'on-screen';
    audioRows.push([id, a.scene, a.character, kind, a.delivery, a.text].map(csvCell).join(','));
  }
  out('production/audio/audio-sheet.csv', audioRows.join('\n') + '\n');

  // Granth cards
  const cardRows = [['scene', 'kind', 'book_page', 'bank_id', 'text'].join(',')];
  for (const c of cards) cardRows.push([c.scene, c.kind, c.page, c.bank, c.text].map(csvCell).join(','));
  out('production/audio/granth-cards.csv', cardRows.join('\n') + '\n');

  // Reel index
  const reelMd = [
    '# Reel index',
    '',
    'Generated by `node production/tools/build.js` from the screenplay. Do not edit by hand.',
    'Each reel starts at the scene shown; where a reel covers more than one scene the full span is',
    'in `docs/v2-development/03-treatment.md`.',
    '',
    '| Reel | Starts at scene | Title | Hook (first 2 s) | दादी का सवाल |',
    '|------|-----------------|-------|------------------|---------------|',
    ...reels.map((r) => `| ${r.id} | ${r.scenes[0]} | ${r.title} | ${r.hook} | ${r.question} |`),
    '',
  ];
  out('production/reels/reel-index.md', reelMd.join('\n'));

  // Scene index
  let total = 0;
  const sceneMd = [
    '# Scene index',
    '',
    'Generated by `node production/tools/build.js` from the screenplay. Do not edit by hand.',
    'Running times are estimates from script length, for planning only.',
    '',
    '| Scene | Chapter | Place | Time of day | Reel | Est. |',
    '|-------|---------|-------|-------------|------|------|',
  ];
  for (const s of scenes) {
    const sec = s.lineCount * SECONDS_PER_LINE;
    total += sec;
    sceneMd.push(`| ${s.number} | ${s.chapter} | ${s.place} | ${s.time} | ${s.reel} | ${mmss(sec)} |`);
  }
  sceneMd.push('', `**${scenes.length} scenes · estimated running time ${mmss(total)}**`, '');
  out('production/scene-index.md', sceneMd.join('\n'));

  console.log(`\n${scenes.length} scenes, ${audio.length} spoken lines, ${cards.length} granth cards/strips, ${reels.length} reels, about ${mmss(total)}.`);
}

build();
