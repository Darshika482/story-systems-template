# Writing Rules — screenplay, animation and voice

Everyone writing or checking a scene follows this page. It exists so that six chapters written
at different times read as one film, pass the repo's Fountain validator, can be animated in
code, and can be voiced in ElevenLabs.

## 1. Fountain format (the validator is strict about these)

- **Scene headings in English capitals**, one hyphen with spaces before the time word, and the
  time word must be one of DAY, NIGHT, MORNING, EVENING, AFTERNOON, DAWN, DUSK, CONTINUOUS,
  LATER. Scene number in `#…#` at the end.
  `INT. FLAT 502 KITCHEN - NIGHT #1.3#`
- **Character cues in English capitals**, only from this list: DADI, DADAJI, ARJUN, MEERA, SAM,
  ANAYA, and for off-screen people GUPTA, SUNIL, ANIL, VERMAJI, MRS KAPOOR, MEHTA, BOSS, BUA,
  NANI, KARAN, DHRUV, GATE, DOCTOR, PHOTOGRAPHER, GANNEWALA, LOUDSPEAKER, TV. Extensions:
  `(V.O.)` for narration and phone voices, `(O.S.)` for someone in the next room.
  The narrator is always `DADI (V.O.)`.
- **Parentheticals: lowercase English letters only** — letters, spaces, comma, hyphen,
  apostrophe. `(softly)`, `(not looking up)`, `(beat)`, `(to his grandson)`. No Hindi, no digits, no full stop, no capital letters — so no names.
- **Dialogue in Hindi (Devanagari).** English words people really say stay in Latin letters:
  office, okay, deal, logic.
- **Action lines in Hindi**, present tense, short paragraphs. An action line must not begin with
  a Latin capital letter (the validator reads a short one as a character name) and must not
  begin with the words CUT, FADE, DISSOLVE, SMASH, TIME, MATCH, INT or EXT.
- **Transitions**, alone on a line. Plain: `CUT TO:` `DISSOLVE TO:` `FADE IN:` `FADE OUT.`
  With a leading `>` (the validator needs it): `>MATCH CUT TO:` `>SMASH CUT TO:` `>TIME CUT:`
- Chapter = `# अध्याय N — शीर्षक`. A one-line synopsis under a heading starts with `=`.
- Notes for the team go in `[[ … ]]` on their own line.

## 2. Screen devices (each is an action line that starts with its Hindi label)

| Label | Meaning |
|-------|---------|
| `वचन-कार्ड (पृ. 70): “…”` | full-screen granth card, cream with gold edge, held 4.5 s or more; whoever is reading reads it aloud, slowly |
| `वचन-पट्टी (पृ. 71): “…”` | the same words as a lower-third strip while the camera stays on faces; film only, never in a reel |
| `चिप: आकुलता = बेचैनी` | a small label giving a plain meaning for a new word; one new word per scene at most |
| `पर्दे पर: ‘…’` | any on-screen text: dates, phone screens, messages, signs |
| `डॉलहाउस:` | the cut-away view of the whole flat, three rooms across |
| `कोई — पन्ने पर:` … `वापस।` | the ink figure acts out Panditji's example on parchment, wordless, 5–8 s |
| `सम का फ़ोन (9:16):` | vertical frame inside the film: what Sam is recording |

Reel marker, directly under the scene heading:
`[[REEL R07 | शीर्षक | हुक: "…" | दादी का सवाल: "…"]]`

## 3. The granth on screen

- “ ” curly double quotes are **only** for Pandit Todarmalji's words, copied character for
  character from `sourcematerials/granth-quote-bank.md`. After each card add a note with the
  bank ID: `[[Q70]]`.
- A card is followed at once by the reader's plain restatement in everyday Hindi.
- At most three cards in any one scene; no joke lands inside or over a card.
- Anything that is ours is said as ours: "मैं इसे ऐसे समझता हूँ…". Never "पंडितजी कहते हैं" before
  words that are not in the bank.
- If a scene needs a passage that is not in the bank, write the gist in the character's own
  words and leave `[[GRANTH-VERIFY p. N — what is needed]]`.
- Nobody is ever called सम्यग्दृष्टि, ज्ञानी or enlightened. Nobody "gets it" completely.

## 4. Maryada — what the screen never shows

- No tea, coffee, non-veg, eggs, root vegetables (potato, onion, garlic, carrot, radish) or
  honey. People drink water; milk and छाछ are fine. Sugarcane juice, fruit and dry snacks are
  fine.
- Nobody is shown eating after dark. The family eats before sunset; that is a house custom and
  Sam questions it in Chapter 6.
- No harm to any living thing or plant on screen. The family does not fly kites.
- No image of a Tirthankar, a deity or a muni; inside a temple is never shown. Devotion is a
  माला, a दीया, folded hands, the granth on its stand.
- No other religion or path is named or mocked. The line on p. 214 that names other communities
  is never quoted.
- Pandit Todarmalji appears only as a hand, a sleeve, a lamp and a page. His death is not shown
  or described.

## 5. Dialogue

- Light first. Most scenes are people doing a household task and talking past each other.
- One still scene per chapter. In it, cut the words by half and let the action carry it.
- The line that carries the film's meaning is short, plain, and said without emphasis in the
  middle of something else. Nobody responds to it as if it were wise.
- Interruptions are written as a cut-off with a dash. Do not write two people speaking at once.
- No character explains their own feeling. No character summarises the scene.
- Each person keeps their own speech: see the Voice lines in `02-character-bible.md`.
- अनाया: sentences of eight words or fewer, things she can see.
- दादी's narration is a grandmother talking — "सुनो", "अब देखो" — never a commentary track. Three
  sentences at most in one go. She may be wrong, defensive, or try to skip a scene.
- Recurring lines, used sparingly and always paid off:
  दादाजी "हम्म।" · अर्जुन "मैंने किया!" / "ऐसा ही होना था।" / "एक रुपया कहाँ गया?" · मीरा "लिस्ट में
  था।" · दादी "ये बात ___ को सुनानी चाहिए।" / "हमारे घर में होता आया है।" · सम "Logic?" · अनाया
  "और फिर?" · वर्माजी "वाह! क्या life है आपकी!"

## 6. Staging for code animation

- Keep the people who matter inside the middle third of the wide frame (the 9:16 column).
- Two or three characters in a shot; the others are heard from the next room.
- People sit, stand, turn, reach, look. Avoid walking shots, crowds, vehicles in motion, hands
  doing fine work. A crowd is sound plus silhouettes.
- Let objects act: a phone that buzzes, a glass that is slid across a table, a pencil mark on a
  door frame, a thread moved on a board.
- Once per scene, something on screen becomes the next shot (a lamp flame becomes a phone glow).
  Write it as an action line starting `कैरी:`.
- Each scene uses one location from the list in `05-prop-bible.md`. New locations need a reason.
- Every prop is named exactly as in the prop bible, and its state is given when it changes
  ("चश्मा — सिर पर").

## 7. Lines for ElevenLabs

- Aim for 18 words or fewer per speech; break longer thoughts into two speeches with an action
  between them.
- Punctuation is timing: `…` a held pause, `—` a break or cut-off, a full stop for a drop.
- Write numbers the way they are said: "अट्ठाईस सौ इकतालीस", not "2,841". Digits belong only in
  `पर्दे पर:` text.
- Delivery goes in the parenthetical, in plain English: (flat), (half asleep), (reading).
- Granth lines are read exactly as written on the card.

## 8. Continuity facts (do not vary)

| Fact | Value |
|------|-------|
| Home | B-502, fifth floor, सूर्योदय रेज़िडेंसी, मानसरोवर, जयपुर; nameplate "हरिप्रसाद जैन" |
| Ages in Jan 2027 | दादाजी 72 · दादी 68 · अर्जुन 43 · मीरा 40 · सम्यक् 16 · अनाया 7 |
| Married | आखा तीज 1977; golden jubilee Sunday 9 May 2027 |
| दादाजी's work | head cashier, State Bank of Bikaner & Jaipur, जौहरी बाज़ार; 1977–2014 |
| The 1999 sentence | अर्जुन's class 12: 89% — "ग्यारह कहाँ गए?" |
| Sam's result | class 10: 91.4% — "आठ दशमलव छह कहाँ गए?" |
| The rupee | society maintenance ₹2,841; अर्जुन's auto-pay ₹2,840, set by him in 2024 |
| EMI | ₹48,500 home loan; function loan ₹3,20,000 |
| The course | "बस माँगो, सब मिलेगा" — ₹4,999 |
| Stopped clock | दादाजी's room, 4:20 |
| गुप्ता अंकल | रमेश गुप्ता, A-204; dies Saturday 16 Jan 2027, dawn |
| Key dates | संक्रांति Fri 15 Jan 2027 · boards 16 Feb–9 Mar · होली Mon 22 Mar · आखा तीज Sun 9 May · result third week of May · first rain late June · दस लक्षण Sun 5–Tue 14 Sep · क्षमावाणी Wed 15 Sep · surgery Mon 20 Sep · दिवाली Fri 29 Oct · संक्रांति Sat 15 Jan 2028 |
| Sunset | about 5:55 pm in January, 7:05 pm in May, 6:40 pm in September, 5:45 pm at Diwali |
