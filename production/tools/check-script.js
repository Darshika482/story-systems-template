#!/usr/bin/env node
/**
 * Checks the screenplay against the project's own rules.
 *
 *   node production/tools/check-script.js [file.fountain ...]
 *
 * With no arguments it checks moksha-marg-prakashak.fountain, or the parts in
 * screenplay/parts if the assembled file does not exist yet.
 *
 * 1. Granth fidelity — every वचन-कार्ड / वचन-पट्टी must carry a bank ID note on the next
 *    non-blank line, and its words must match sourcematerials/granth-quote-bank.md exactly.
 * 2. Curly double quotes may appear only on card and strip lines, or in dialogue around
 *    words that are part of a bank line.
 * 3. Maryada word list — flags words for things the screen never shows.
 * 4. Cue list — every character cue must be one of the agreed names.
 *
 * Exit code 1 if any granth line fails; other findings are listed as warnings.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const BANK = path.join(ROOT, 'sourcematerials', 'granth-quote-bank.md');

const CUES = new Set([
  'DADI', 'DADAJI', 'ARJUN', 'MEERA', 'SAM', 'ANAYA', 'GUPTA', 'SUNIL', 'ANIL', 'VERMAJI',
  'MRS KAPOOR', 'MEHTA', 'BOSS', 'BUA', 'NANI', 'KARAN', 'DHRUV', 'GATE', 'DOCTOR',
  'PHOTOGRAPHER', 'GANNEWALA', 'LOUDSPEAKER', 'TV',
]);

// Words for things the film never shows. A hit is a prompt to look, not proof of a breach.
const MARYADA = [
  'चाय', 'कॉफ़ी', 'कॉफी', 'आलू', 'प्याज़', 'प्याज', 'लहसुन', 'गाजर', 'मूली', 'अंडा', 'अंडे',
  'शहद', 'मांस', 'चिकन', 'मछली', 'समोसा', 'समोसे', 'मूर्ति', 'प्रतिमा', 'मुनि', 'पागल',
];

function loadBank() {
  const bank = {};
  for (const line of fs.readFileSync(BANK, 'utf8').split('\n')) {
    const m = line.match(/^\|\s*(Q\w+)\s*\|\s*[^|]+\|\s*“(.+?)”/);
    if (m) bank[m[1]] = m[2];
  }
  return bank;
}

function targets() {
  const args = process.argv.slice(2).filter((a) => a.endsWith('.fountain'));
  if (args.length) return args.map((a) => path.resolve(a));
  const whole = path.join(ROOT, 'moksha-marg-prakashak.fountain');
  if (fs.existsSync(whole)) return [whole];
  const parts = path.join(ROOT, 'screenplay', 'parts');
  return fs.readdirSync(parts).filter((f) => f.endsWith('.fountain')).sort().map((f) => path.join(parts, f));
}

const bank = loadBank();
let errors = 0;
let warnings = 0;
const used = new Set();
const pending = [];

for (const file of targets()) {
  const rel = path.relative(ROOT, file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const err = (n, msg) => { errors += 1; console.log(`ERROR ${rel}:${n}  ${msg}`); };
  const warn = (n, msg) => { warnings += 1; console.log(`warn  ${rel}:${n}  ${msg}`); };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    const n = i + 1;
    const prev = i > 0 ? lines[i - 1].trim() : '';

    const card = line.match(/^(वचन-कार्ड|वचन-पट्टी)\s*\(पृ\.\s*([^)]+)\):\s*“(.+)”\s*$/);
    if (card) {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j += 1;
      const note = (lines[j] || '').trim();
      const id = note.match(/^\[\[(Q\w+)(?:\s+—\s+part\s+(\d)\s+of\s+(\d))?\]\]$/);
      if (id) {
        const whole = bank[id[1]];
        used.add(id[1]);
        if (!whole) err(n, `${id[1]} is not in the quote bank`);
        else if (id[2]) {
          if (!whole.includes(card[3])) err(n, `${id[1]} part ${id[2]}: words differ from the bank`);
        } else if (whole !== card[3]) {
          err(n, `${id[1]}: words differ from the bank\n        script: ${card[3]}\n        bank:   ${whole}`);
        }
      } else if (/^\[\[GRANTH-NEW/.test(note)) {
        pending.push(`${rel}:${n}  ${note}  “${card[3]}”`);
      } else {
        err(n, 'granth line has no [[Q…]] or [[GRANTH-NEW …]] note after it');
      }
      return;
    }

    // Outside a card, curly quotes are allowed only around words that are part of a bank line
    // (for example two people speaking the two halves of one granth sentence).
    if (/[“”]/.test(line) && !line.startsWith('[[')) {
      const spoken = line.match(/“([^”]*)”/g) || ['“”'];
      for (const q of spoken) {
        const words = q.slice(1, -1).replace(/^…\s*/, '').replace(/\s*…$/, '').trim();
        const known = words && Object.values(bank).some((b) => b.includes(words));
        if (!known) err(n, `curly double quotes around words that are not in the quote bank: ${q}`);
      }
    }
    if (/^\[\[GRANTH-VERIFY/.test(line)) pending.push(`${rel}:${n}  ${line}`);

    if (prev === '' && /^[A-Z][A-Z\s\d'.-]+(\s*\([^)]+\))?$/.test(line) && !/^(INT|EXT|CUT|FADE|DISSOLVE)/.test(line)) {
      const name = line.replace(/\s*\([^)]*\)\s*$/, '').trim();
      if (!CUES.has(name)) warn(n, `cue "${name}" is not in the agreed list`);
    }

    if (!line.startsWith('[[')) {
      for (const w of MARYADA) {
        const re = new RegExp(`(^|[^\\u0900-\\u097F])${w}([^\\u0900-\\u097F]|$)`);
        if (re.test(line)) warn(n, `maryada word "${w}": ${line.slice(0, 70)}`);
      }
    }
  });
}

console.log(`\nGranth lines used: ${used.size} of ${Object.keys(bank).length} in the bank.`);
if (pending.length) {
  console.log(`\nStill to settle against the scan (${pending.length}):`);
  pending.forEach((p) => console.log(`  ${p}`));
}
console.log(`\n${errors} error(s), ${warnings} warning(s).`);
process.exit(errors ? 1 : 0);
