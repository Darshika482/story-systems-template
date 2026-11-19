# Voice and Production Notes

How the screenplay turns into audio (ElevenLabs) and picture (code animation), and how reels
are cut from the film. Short on purpose: the screenplay and the prop bible carry the detail.

## 1. One command

```bash
node production/tools/build.js
```

It reads `moksha-marg-prakashak.fountain` and writes four sheets. Run it again after any script
change; never edit the sheets by hand.

| File | What it is | Who uses it |
|------|------------|-------------|
| `production/audio/audio-sheet.csv` | every spoken line: id, scene, character, on-screen / voice-over / off-screen, delivery note, text | voice generation |
| `production/audio/granth-cards.csv` | every granth card and strip with book page and quote-bank ID | the checker who compares each line with the scan; the card designer |
| `production/reels/reel-index.md` | every reel: start scene, title, hook, दादी's closing question | the reel editor |
| `production/scene-index.md` | every scene with place, time of day and an estimated running time | scheduling the animation |

## 2. Voices (ElevenLabs)

Design each voice once, save it, and use the same voice ID for the whole film and every reel.

| Tag in the sheet | Voice | Brief for voice design | Notes |
|------------------|-------|------------------------|-------|
| DADI (on-screen) | woman, late sixties | warm, a little gravel, quick when ordering people about | Jaipur lilt, light |
| DADI (voice-over) | the same voice | closer, slower, smiling; a grandmother telling a story to one child | this is the film's signature sound — cast it first |
| DADAJI | man, seventies | soft, dry, slight rasp, never raised | when reading a granth card: half a step slower, every word clear |
| ARJUN | man, early forties | urban, tired warmth; quick when scheming, flat at 2 a.m. | no voice at all in Chapter 4 until the last scene |
| MEERA | woman, about forty | clear, bright, quick; clipped when annoyed, softens fast | a teacher's diction |
| SAM | boy, sixteen | dry, fast, voice just settled | designed voice, never a clone of a real child |
| ANAYA | girl, seven | bright, no lisp | designed voice, never a clone of a real child |
| Off-screen pool | six or seven voices | one each for GUPTA, VERMAJI, MRS KAPOOR, MEHTA, BOSS, NANI/BUA, GATE and the rest | add a phone, intercom or next-room filter in the mix, not in the voice |

Working rules:

- The `delivery` column is the acting note for that line (flat, half asleep, reading). Pass it
  to the model as the direction; do not speak it.
- `…` in the text is a held pause, `—` is a break or a cut-off. Keep them in the text sent for
  generation.
- Generate scene by scene, not line by line, so that rhythm carries across a conversation;
  then split on the ids.
- Granth lines are spoken exactly as written. Where the granth joins a postposition to a word
  (दुःखका, होनेपर) the reader still says it naturally: "दुःख का", "होने पर". Add these to the
  pronunciation dictionary rather than changing the text on screen.
- Record दादी's narration for a whole chapter in one session so her tone does not drift.

Pronunciation dictionary — build before the first render:

| Word | Say it as |
|------|-----------|
| मोक्षमार्गप्रकाशक | मोक्ष-मार्ग-प्रकाशक |
| मिथ्यात्व · मिथ्यादर्शन | मिथ्-यात्व · मिथ्या-दर्शन |
| आकुलता | आ-कुल-ता |
| सम्यग्दर्शन · सम्यक् | सम्-यग्-दर्शन · सम्-यक् |
| भवितव्य | भ-वि-तव्य |
| औपाधिकभाव | औ-पा-धिक भाव |
| वीतराग-विज्ञान | वीत-राग वि-ज्ञान ("ज्ञ" as ग्य in speech; दादाजी corrects the spelling, not the sound) |
| महात्म्य | म-हात्म्य |
| बहुरि | ब-हु-रि |
| दुःखका, होनेपर, इच्छाके … | दुःख का, होने पर, इच्छा के |

## 3. Picture (code animation)

- **Three worlds, three looks.** The flat — warm, flat colour, limited animation. The parchment
  page — sepia ink, hand-drawn wobble, where कोई acts. Jaipur 1760s — lamp gold on deep indigo;
  a hand, a sleeve, a lamp, a page.
- **The dollhouse is the master set.** Build the cut-away flat once. A wide film frame shows
  three rooms; each room is one 9:16 column. Reels are crops of the same render, not re-stagings.
- **Rigs.** Six family rigs with a small pose set each (sit, stand, turn, reach, look up, look
  down) and face states (neutral, amused, stung, tired, laughing, still). Everyone else is a
  voice, a silhouette, a phone screen or hands.
- **Props are single files.** Each prop is one SVG with all its states (`production/props/`).
  A scene names the prop and the state; nobody redraws it.
- **Granth cards.** One template: cream card, gold edge, the line, the page number. Hold 4.5
  seconds or the length of the reading, whichever is longer. One second of silence before it.
- **Camera.** Mostly still, eye level. It moves only on `कैरी:` moments and on three big
  push-ins: the Prologue flame, the power-cut lamp (5.5), and the last page (7.4 / E.3).
- **Hidden कोई.** Every present-day scene has one small कोई in the background — a doodle, a
  sticker, a pattern. It rewards a second viewing and gives the reels a comment hook.
- **Seasons carry the year.** Fog and kites (Jan), dry colour (Mar), white heat (May–June), first
  rain, seepage and storm (Jul–Aug), lamps (Oct), kites again. The cane in the pot is the
  film's clock after the interval.

## 4. Reels

- Each reel is its scene (or scenes) from the film, cropped to the middle 9:16 column, opening
  on the hook text for two seconds over the first shot.
- A reel never uses a `वचन-पट्टी`; it shows at most three `वचन-कार्ड`, each followed by the plain
  restatement.
- It ends on दादी's closing question, then an end card: "ग्रन्थ में पढ़ें — पृष्ठ N".
- Captions on every line.
- Release order follows the film. Test first with four that stand entirely alone: R03 (चश्मा
  सिर पर है), R24 (चूसो मत, बो दो), R36 (forward या सच?), R38 (एक रुपये की भूल).

## 5. Before lock

1. A person who reads the granth compares every row of `granth-cards.csv` with the scan.
2. A person from the community reads the whole script once for maryada.
3. A table read with the six voices — lines will change; regenerate the sheets after.
