# Prop and Location Bible — Draft 2

**मोक्षमार्गप्रकाशक** · every prop is designed once, in code, and is the same object in every scene and every reel.

This page is the single specification. The drawings live in `production/props/` — one SVG file
per prop, every state of that prop inside the same file — and the colours live in
`production/props/tokens.json`. Open `production/props/index.html` to see everything on one sheet.

How to use it:

- **Writers** copy the Hindi prop name exactly as printed in a sheet heading, and give the state
  in the action line when it changes: `चश्मा — सिर पर`. The "In the script" column of each state
  table is the wording to use.
- **Animators** load the SVG, take the group `#state-…` they need, and never redraw. If a shot
  needs something a sheet does not allow, the sheet changes first, then the shot.
- **Continuity** reads section 5: one row per prop, one column per chapter.

Scene numbers are those of `03-treatment.md`. "Screen-left" and "screen-right" are the viewer's
left and right. "Wearer's left" is the left of the person wearing the thing.

## 1. Design language

### 1.1 Look

- **Flat vector.** Closed shapes filled with one token colour each. No texture, no blur, no
  drop shadows other than one flat contact shadow under an object.
- **Outline.** A rounded line in dark warm brown (`outline`), never black. It is 2 px on a
  1080p frame at the prop's normal size. The sheets are drawn at one and a half times screen
  size, so the same line is 3 px there. Inner detail lines are half that weight.
- **Shade and highlight are overlays, not colours.** Shade is `outline` at 16 % opacity;
  highlight is `cotton-white` at 50 %. A sheet may use a lighter or heavier overlay, never a new
  hex value.
- **No gradients, except light.** Exactly three things in the film may carry a gradient, and all
  three are light: the lamp (`lamp-gold`), a screen (`phone-blue`), and daylight (`day-sky`).
  Light is never outlined.
- **Wear is drawn, and it is fixed.** Each prop has two or three marks that make it this object
  and no other. They are part of the drawing, in the same place in every state.
- **Nothing is mirrored.** A prop is turned by choosing another state, not by flipping the art;
  flipping moves the wear to the wrong side.

### 1.2 Three worlds

| World | Ground | Line | Light | Rule |
|-------|--------|------|-------|------|
| The flat (and the rest of 2027) | `wall-cream` | `outline`, 2 px | lamp gold, screen blue, daylight | warm, lived-in, every object a little worn |
| The parchment page | `parchment` | `ink-sepia`, hand-drawn wobble | none — the page is evenly lit | sepia ink only; no fills except the page colour; no shadows |
| Jaipur, 1760s | `night-indigo` | `outline`, 2 px | lamp gold only | one lamp lights everything; what the lamp does not reach stays indigo |

The wobble of the page world is one filter (`koi-wobble` in `koi.svg`: fractal noise, base
frequency 0.018, displacement 4). Stepping its seed every eight frames makes the line boil;
nothing else on the page moves unless कोई moves.

### 1.3 Palette tokens

These 26 tokens are the single source of truth. The same names and values are in
`production/props/tokens.json`. Nothing on screen uses a colour that is not in this table.

| Token | Hex | Group | Used for |
|-------|-----|-------|----------|
| `outline` | `#4A2C20` | line | every outline in the flat and in Jaipur; lettering on props; shade overlay |
| `ink-sepia` | `#6E4322` | line | every line on the parchment page; printed and written text inside books |
| `soot-black` | `#2A2321` | line | old spectacle frame, soot, wicks, clock hands, iron, phone glass, black hair |
| `wall-cream` | `#F4E8CF` | ground | walls of the flat; background of the contact sheet |
| `paper-cream` | `#FFF8E4` | ground | pages, index cards, labels, clock face, shawl border |
| `parchment` | `#EAD8B1` | ground | the page world; the hand's writing sheet |
| `cotton-white` | `#FCFAF4` | ground | thread, string, cloth, sleeve, wicks, whiteboard, white hair; highlight overlay |
| `night-indigo` | `#1F2348` | ground | Jaipur night; the flat at 2 a.m.; अर्जुन's phone case; blue ink |
| `lamp-gold` | `#F5A623` | light | flame and lamp glow |
| `flame-core` | `#FFE9A6` | light | the heart of the flame; the centre of a lamp gradient |
| `phone-blue` | `#4DA3F0` | light | every lit screen and its glow; as flat pigment only on small things (a pen cap, a crayon) |
| `day-sky` | `#CDE6F0` | light | daylight, sky, water, lens glass |
| `rust-shawl` | `#B5532B` | cloth | दादाजी's shawl; the blemish on the cane |
| `granth-maroon` | `#7A1E2C` | cloth | the binding of the granth; दादी's sari |
| `haldi-yellow` | `#EDB82F` | cloth | the granth's wrapping cloth, the kite, मीरा's list pad, tassel, sunflower |
| `wool-red` | `#D2312E` | cloth | the wool and its threads, the ribbon marker, the red bahi, tied threads |
| `kite-pink` | `#EF6FA1` | cloth | the kite, अनाया's notebook and frock |
| `steel` | `#BFC8CE` | material | tumbler, tins, almirah, spoon; दादी's grey hair |
| `brass` | `#C4932F` | material | home lamp, clock rim, pins, donor plate, gold title, gold wire rim, lamp oil |
| `terracotta` | `#C66B3F` | material | clay lamps, both flower pots, the ghee pot |
| `wood` | `#9A683C` | material | rehal, board frame, needles, soil, stems |
| `cane-straw` | `#CFAE74` | material | cork, cane basket, sandalwood beads, cane stalk, dry leaves, brown paper, tape |
| `leaf-green` | `#6B9B3A` | material | every living leaf |
| `bench-green` | `#2F6D54` | material | the bench; dark green crayon |
| `skin-wheat` | `#E3B68D` | skin | दादी, मीरा, अनाया |
| `skin-tan` | `#C98F63` | skin | दादाजी, अर्जुन, सम्यक्; the hand in Jaipur |

Two colours carry meaning and are kept for it:

- **Blue light is always a screen.** In a night scene the only blue in the flat is `phone-blue`.
- **Red is the account.** `wool-red` is the wool, the threads on the board, the ribbon in the
  granth and the cloth of the old ledger. Nothing else in the flat is that red.

### 1.4 The three light gradients

| Light | Gradient | Where it is allowed |
|-------|----------|---------------------|
| Lamp | radial, `flame-core` at the centre to `lamp-gold`; the glow fades `lamp-gold` 50 % to nothing | the flame itself, a halo of 1.5 flame-heights, and a gold wash on whatever faces the lamp |
| Screen | radial, `cotton-white` at the centre to `phone-blue`; the glow fades `phone-blue` 50 % to nothing | the lit screen, a halo round the phone, and a blue wash on the face that looks at it |
| Daylight | linear, `day-sky` at the window to `wall-cream` in the room | windows, balcony, terrace, the bench at dawn |

### 1.5 How the files are built

- **Grid.** One state sits in one cell. A cell is 100 by 100 units and 400 by 400 in the SVG
  viewBox (1 unit = 4 px). Long or tall props use a longer cell and say so in their sheet.
- **States side by side.** Each state is a group `<g id="state-KEY">` with an attribute
  `data-state="prop:KEY"`. The groups are laid out left to right and the viewBox is widened to
  hold them all. One file is the whole truth about one prop.
- **Drawn once.** Inside a file the object is drawn once in `<defs>` and every state re-uses
  that drawing, so two states cannot drift apart.
- **Colours by name.** A shape takes its colour from a class named after the token —
  `f-terracotta` (fill), `s-wool-red` (stroke), `c-lamp-gold` (gradient stop). Each file
  declares only the classes it uses, with the hex copied from the token table.
- **Guides.** Dashed lines (class `g`) are placement guides — a brow, a shoulder, a door frame.
  They are never rendered in a shot.
- **Lettering.** Words on props are live text in `Noto Sans Devanagari`, bold, so that they stay
  correct Hindi. Body text inside books is drawn as ink strokes and is never invented wording.
  Words of the granth appear only on granth cards, from the quote bank.

## 2. Prop sheets

### 2.1 `दादाजी का चश्मा`

**Files** `chashma-old.svg` (the old pair) · `chashma-new.svg` (`दादाजी का नया चश्मा`, from 7.3)

**Purpose.** The film's running gag and its heart: what he looks for is on his head; what he
promised in 1977 was "left on his head" too. The old pair ends the film on दादी's nose.

**Construction — old pair** (cell 100 × 100, front view)

- Two round lenses, radius 11.5, centres 30 apart. Glass is `day-sky` at half strength with one
  white power ring at radius 7.75 and one glint at ten o'clock: the lenses are thick.
- Frame: `soot-black` acetate, 3.25 thick all round, a saddle bridge 2.75 thick, a short end
  piece at each side.
- Temples: `soot-black`, 2.5 thick, 11.5 long as seen from the front.
- Overall width 79.

**Wear marks — old pair**

- **The mend.** The wearer's-left temple (screen-right from the front) is bound with white
  thread, `cotton-white`, **eight turns**, a band 8 long that starts 1.5 from the hinge, with one
  loose end 2 long.
- **The chip.** A small grey facet, `steel`, on the outer edge of the wearer's-right rim
  (screen-left) at eight o'clock.

**Construction — new pair.** Thin `brass` wire, 0.75 thick, with its own outline; oval lenses
20 wide by 18 high, centres 27 apart; two clear nose pads; dark temple tips. No mend, no chip.
It is lighter, smaller and unmarked on purpose.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `chashma:on-head` | `चश्मा — सिर पर` | pushed up above the hairline, lenses foreshortened to 56 % height, temples running down to the ears |
| `chashma:on-nose` | `चश्मा — नाक पर` | front view, eyes behind the lens centres |
| `chashma:folded-on-granth` | `चश्मा — ग्रन्थ पर` | temples folded behind the front, the mended one on top, lying on the wrapped granth |
| `chashma:on-dadi` | `चश्मा — दादी की नाक पर` | slid 7.5 down and tilted 4°; the temples overshoot her ears; her eyes look over the rims |
| `chashma-naya:on-nose` | `नया चश्मा — नाक पर` | front view |
| `chashma-naya:folded` | `नया चश्मा — मुड़ा हुआ` | temples folded |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `chashma:on-nose` | first seen: reading in the kitchen at 1:52 |
| 1.2 | `chashma:on-head`, then `on-nose` | the gag is planted |
| 3.2 | `chashma:on-head` | the photo shoot |
| 5.1, 5.5 | `chashma:on-nose` | on his nose and still he cannot read |
| 6.3 | `on-nose`, then `folded-on-granth` | "मुझे दिखाई नहीं दे रहा।" — he takes them off |
| 6.8, 7.1 | `chashma:folded-on-granth` | not worn; in 7.1 he wears the eye shield (section 4) |
| 7.3, 7.4 | `chashma-naya:on-nose` | the new pair, from the stairs onward; the old pair is on top of the almirah |
| 7.5 | `chashma:on-dadi` | the old pair changes hands; अनाया pushes it up |
| E.1 | `chashma-naya:on-nose` | on his nose, and now it is the book he cannot find |
| E.2 | `chashma:on-dadi` | the last image of the old pair |

**Never**

- Never move the mend to the other temple or count other than eight turns.
- Never draw the old pair without the chip, even in a wide shot: at small size it is one grey dot.
- Never put the new pair on his head. That gag belongs to the old pair and ends with it.
- Never resize the old pair to fit दादी. It is too big for her; that is the drawing.

### 2.2 `ग्रन्थ`

**File** `granth.svg` · with its `रेहल` (folding stand) and its `पीला कपड़ा` (wrapping cloth)

**Purpose.** The book itself: read daily for forty years by one person, heard through a door for
fifty by another.

**Construction**

- **Book, closed** (front view): cover 41 wide by 59.5 high, `granth-maroon` cloth, corners
  rounded 1.5; a joint line 3.5 in from the spine; page block `paper-cream` showing 3 thick at
  the fore-edge and the foot.
- **Gold** (`brass`): a double rule 3 to 4 in from the head, foot and fore-edge and just inside
  the joint; the title in two lines,
  `मोक्षमार्ग` / `प्रकाशक`, 5.5 high, centred in the upper half; one small diamond between two
  short rules under it; `पं. टोडरमलजी` near the foot. No picture of any kind on the cover.
- **Ribbon marker**: `wool-red`, 2 wide, swallow-tailed, hanging 8 below the foot.
- **रेहल**: one piece of `wood` that opens into an X, 67 wide, the arms 2.75 thick, crossing 76
  down the cell. The open book lies in the upper V; the wrapped book lies level across its tips.
- **पीला कपड़ा**: `haldi-yellow`, folded like an envelope to a tucked knot in the middle, with
  one `wool-red` running stitch along each of the two upper folds.
- **Pages**: text is ruled `ink-sepia` strokes, nine to a page on the stand, broken into
  word-lengths. The only real word ever shown on a page of this book is the last one.

**Wear marks**

- The lower outer corner of the front cover is rubbed through to the board (`cane-straw`).
- Two hairline cracks at the top of the joint.
- A thumb shadow on the lower outer corner of both open pages, darker on the screen-right page.
- The screen-left foot of the रेहल is worn pale.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `granth:closed` | `ग्रन्थ — बंद` | the cover, title readable |
| `granth:wrapped` | `ग्रन्थ — कपड़े में, रेहल पर` | yellow bundle across the stand, ribbon tip showing |
| `granth:open-on-stand` | `ग्रन्थ — रेहल पर खुला` | leaves rise 19° either side of the gutter; ribbon down the gutter |
| `granth:open-in-hands` | `ग्रन्थ — हाथ में खुला` | leaves rise 7°; two thumbs only — hands belong to the rig |
| `granth:open-last-page` | `ग्रन्थ — आख़िरी पन्ना` | flat insert of pages ३३८–३३९; the right-hand page stops after five and a half lines on `बहु` |

| Scene | State | Note |
|-------|-------|------|
| 1.1, 1.6 | `granth:open-on-stand` | first seen, on the kitchen table, `घर का दीया` lit beside it |
| 1.12, 1.14, 1.16 | `granth:open-on-stand` | on his desk in L4, its home |
| 1.17, 2.2, 5.1 | `granth:wrapped`, then `open-in-hands` | carried to the bench in its cloth |
| 5.5 | `granth:open-in-hands` | passes from दादाजी's hands to सम's |
| 6.3 | `open-in-hands`, then `closed` | opened to stop a fight; he cannot see it |
| 6.8 | `granth:wrapped`, then `open-on-stand` | no book open when the scene starts; अर्जुन opens it and reads |
| 7.4 | `granth:open-last-page` | the unfinished word |
| E.1 | `granth:closed` | in दादी's hands |
| E.2 | `granth:open-on-stand` | first page; her finger under the line |

**Never**

- Never show the book on the floor, on a bed, under another object, or with anything but the
  old spectacles resting on it.
- Never invent text on a page. Strokes only; real words come from granth cards.
- Never show the last page with a full stop, a flourish or an ornament after `बहु`.
- Never change the number of stitches of colour on the cloth: yellow cloth, red stitch, nothing else.

### 2.3 `जयपुर का दीया` and `घर का दीया`

**Files** `diya-jaipur.svg` · `diya-ghar.svg` · `diya-mitti.svg` (`छोटा मिट्टी का दीया`) · `lau.svg` (`लौ`, the flame)

**Purpose.** The film's visual rhyme. The lamp by which the book was written and the lamp by
which it is read carry the same flame, and that flame is what turns into a phone screen.

**The flame — `लौ`**

- One closed path, leaning a hair to screen-left, 66 high by 36 wide before scaling, with an
  inner core half its size. Fill: the lamp gradient. No outline.
- The path is identical, point for point, in all four files. In the two hero lamps it is drawn
  at scale 1.25 with the **wick tip at (78, 54.5)** of the cell (312, 218 in the viewBox), so a
  match cut between Jaipur and the flat needs no re-registration.
- `lau.svg` holds five states built from the same path commands in the same order, so that any
  one can be morphed into any other: `lau:steady`, `lau:flicker-a`, `lau:flicker-b`, `lau:low`,
  and `lau:blue` — the same shape in the screen gradient, used once, for the carry out of P.1.

**Construction — `जयपुर का दीया`** (clay, 1760s)

- Hand-thrown shallow bowl, `terracotta`, 57.5 wide by 22.5 high, flat foot, rim seen slightly
  from above; the rim is pinched out into a spout on screen-right.
- Oil: `brass`. Wick: `cotton-white`, 1.25 thick, lying in the spout, its last 2 burnt
  `soot-black`.

**Wear marks — Jaipur.** The **soot mark**: `soot-black` at 80 %, on the lip of the spout and
smeared down its outer side. A potter's thumb dent low on the screen-left wall. One nick in the
back rim. Two throwing ridges.

**Construction — `घर का दीया`** (brass, the flat)

- `brass` throughout: round foot 27 wide, short stem with one knob, shallow cup 46.5 wide with a
  spout on screen-right, a ring handle at the back. Total height 31.

**Wear marks — home.** The ring handle is bent out of round. One dent in the cup. A dried oil
streak under the spout. Tarnish on the screen-right side of the foot.

**`छोटा मिट्टी का दीया`.** The plain small clay lamp, 30 wide, no marks at all: these are new
every year. Flame at scale 1.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `diya-jaipur:lit` | `जयपुर का दीया — जलता हुआ` | flame and halo |
| `diya-jaipur:unlit` | `जयपुर का दीया — बुझा` | reference only; it is never dark on screen |
| `diya-ghar:lit` / `diya-ghar:unlit` | `घर का दीया — जलता हुआ` / `बुझा` | with and without flame |
| `diya-mitti:lit` / `diya-mitti:unlit` | `मिट्टी का दीया — जलता हुआ` / `बुझा` | with and without flame |

| Scene | Lamp and state | Note |
|-------|----------------|------|
| P.1 | `diya-jaipur:lit` | first image of the film; carry: `lau:steady` → `lau:blue` → अर्जुन's screen |
| 1.1, 1.6 | `diya-ghar:lit` | on the kitchen table, screen-right of the रेहल: the gold room |
| 5.5 | `diya-ghar:lit`, then five `diya-mitti:lit` | one lamp lights five; carry to `diya-jaipur:lit` |
| 6.8 | `diya-ghar:unlit` | no book open, no lamp: only the ceiling bulb, until अर्जुन reads |
| 7.4 | `diya-ghar:lit`, a row of `diya-mitti:lit` | दिवाली; carry to `diya-jaipur:lit` |
| E.2 | `diya-ghar:lit` | beside दादी; last carry of the film to `diya-jaipur:lit` |

**Never**

- Never redraw the flame. Flicker by morphing between the five states.
- Never light the home lamp unless the granth is open on its stand beside it, or it is दिवाली.
- Never show the Jaipur lamp going out, being lit, or being touched.
- Never put the soot mark on the brass lamp or polish it off the clay one.

### 2.4 `रुकी हुई घड़ी`

**File** `ghadi-420.svg` · one state

**Purpose.** A clock that is right twice a day and thinks it runs (2.6).

**Construction** (cell 100 × 100)

- `brass` rim, outer radius 32.5, 4 wide; face `paper-cream`, radius 28.5; a minute track of
  sixty ticks and twelve heavier hour marks.
- Devanagari numerals १–१२, 5 high, at radius 22. The word `जयपुर` in small capitals-size under
  the १२.
- Hands `soot-black`: the minute hand, 21 long, lies **exactly on the ४**; the hour hand, 14
  long, lies a third of the way from ४ to ५. At 4:20 the two hands are 10° apart and almost
  touch. That near-touch is the look of this clock.
- A thin `wool-red` second hand, frozen at 52 seconds.
- One winding hole with a brass collar, above the ६: it is a wind-up clock that nobody winds.
- It hangs from one nail by a brass loop.

**Wear marks.** A **hairline crack in the glass at ७**, running from the rim 13 toward the
centre with one short branch. The face has yellowed in a crescent from ६ to ९.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `ghadi:stopped` | `रुकी हुई घड़ी — 4:20` | the only state |

| Scene | Note |
|-------|------|
| 1.12 | first seen, high on the back wall of L4 |
| 1.14, 1.16, 5.3, 7.5 | in every shot of that wall |
| 2.6 | cut-away from the balcony; granth card over it |

**Never**

- Never move any hand, including the second hand. A ticking sound under it is also forbidden.
- Never show it at 4:20 by a real clock: no scene in L4 is timed at 4:20.
- Never give the hospital clock (L13) this face. That one runs.

### 2.5 `स्टील का गिलास`

**File** `steel-gilas.svg`

**Purpose.** How this family says everything it cannot say: a glass of water slid across a table.

**Construction** (cell 100 × 100)

- `steel` tumbler, 32 wide at the rolled rim, 23 at the base, 56 high. One highlight strip down
  the screen-left side, one shade strip down the screen-right.
- Two engraved rings 14 below the rim, one ring 5.5 above the base.
- **Engraving** between the rim and the rings, following the curve: `ह. प्र. जैन · 1977`,
  3 high, in `outline` at 80 %.
- Water, when there is any: `day-sky`, seen as an ellipse inside the rim.

**Wear marks.** One dent low on the screen-left side. Three fine scratches on the screen-right.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `gilas:full` | `गिलास — भरा` | water to 1 below the rim |
| `gilas:empty` | `गिलास — ख़ाली` | dark inside |

| Scene | State | Note |
|-------|-------|------|
| 1.6 | `gilas:full` | first seen; slid from दादाजी's side to अर्जुन's — screen-left to screen-right |
| 1.17 | `gilas:full` | अनाया carries it to the bench |
| 6.8 | `gilas:full` | on the table between father and son; nobody slides it |
| E.2 | `gilas:full` | slid from अर्जुन to दादी — screen-right to screen-left, along the same line of the table |

**Never**

- Never let the engraving face away from camera when the glass is slid.
- Never fill it with anything but water.
- Never give another glass in the house an engraving that can be read.

### 2.6 `निदान बोर्ड`

**Files** `nidan-board.svg` (the board in seven states) · `nidan-card.svg` (one card, large)

**Purpose.** The diagnosis made visible: every case in the house is a card, and every card is
tied to the same centre.

**Construction** (cell 130 × 100)

- दादाजी's cork board from the bank: `wood` frame 120 by 90, 3.5 wide; `cane-straw` cork; a
  `brass` pin at each corner of the cork.
- A **faded notice strip** across the top, `paper-cream`, torn at its screen-right end, pinned
  once: `सूचना पट्ट · शाखा जौहरी बाज़ार` at 40 % strength. It names the branch, not the bank.
- **Twenty fixed slots** round the centre: six across the top row, six across the bottom row,
  two at each side of the centre on the two middle rows. Slots are numbered 1–20 in reading
  order. **A card never changes slot.**
- **Case card**: `paper-cream` index card 14.5 by 11, one red head-rule; title lettered by
  दादाजी; one crayon drawing by अनाया; one `brass` pin on the edge that faces the centre.
- **Centre card**: 25 by 16.5. Until 2.8 it is covered by a slip, taped at two corners, that
  shows only `?`. From 2.8 it reads `मिथ्यादर्शन`, a red rule, and `उलटी समझ`; two scraps of
  tape stay on it for the rest of the film.
- **`लाल ऊन`**: one thread of `wool-red`, 0.6 thick, from each card's pin to the nearest edge of
  the centre card, with a slight sag. Threads from the four outer side cards run through the
  channel between the two middle rows.
- **दादाजी's own card** sits in slot 15, bottom screen-left, **face down**, tilted 3°, one
  corner lifting, and has **no thread** — until 6.8.

**Wear marks.** The lower screen-left corner of the frame is chipped. Old pin-holes in the cork.
A darker rectangle low on the screen-right where one notice hung for years.

| Slot | Card | Pinned in | Drawing on it |
|------|------|-----------|---------------|
| 8 | `नींद` | 1.16 | moon over a lit phone |
| 3 | `मैंने किया!` | 1.16 | sun |
| 9 | `बारिश` | 1.16 | cloud and three drops |
| 17 | `कमेंट` | 1.16 | speech bubble |
| 13 | `मेला` | 1.16 | giant wheel |
| 15 | दादाजी's own — `ग्यारह कहाँ गए?` | 1.16, face down | none |
| 4 | `शॉल` | 2.2 | a rust rectangle |
| 12 | `गुस्सा` | 2.3, by मीरा herself | a red zigzag |
| 18 | `कमरा १४` | 2.5 | a key |
| 7 | `तुलसी` | 2.8 | a pot with a bare twig |
| 1 | `गाड़ी` | 3.1 | a car |
| 6 | `फ़ंक्शन` | 3.2 | a garland |
| 14 | `नेटवर्क` | 3.3 | signal bars |
| 10 | `लंदन` | 3.4 | a paper plane |
| 2 | `टारगेट` | 5.1 | a spreadsheet grid |
| 5 | `फ़ॉरवर्ड` | 6.1 | a curved arrow |
| 11 | `व्रत` | 6.3 | a checklist |
| 16 | `शुद्ध आत्मा` | 6.4 | a stack of unwashed plates |
| 19 | `मैं कहाँ ग़लत गिन रहा हूँ?` | 7.1, in अर्जुन's hand | none |
| 20 | दादी's — the numeral `१` | 7.5 | none: the count that was one short |

Card titles are working titles and may change with the screenplay. Slots, order and counts may not.

| State key | In the script | Face-up cards | Threads | Centre | दादाजी's card |
|-----------|---------------|---------------|---------|--------|---------------|
| `board:ch1` | `निदान बोर्ड — पाँच कार्ड` | 5 | 5 | covered, `?` | face down |
| `board:ch2` | `निदान बोर्ड — नौ कार्ड` | 9 | 9 | `मिथ्यादर्शन` | face down |
| `board:ch3` | `निदान बोर्ड — तेरह कार्ड` | 13 | 13 | open | face down |
| `board:ch5` | `निदान बोर्ड — चौदह कार्ड` | 14 | 14 | open | face down |
| `board:ch6` | `निदान बोर्ड — सत्रह कार्ड` | 17 | 17 to the centre, plus 2 outward | open | face down |
| `board:ch7` | `निदान बोर्ड — सब धागे बीच में` | 19 | 21, all to the centre | open | face up, threaded |
| `board:final` | `निदान बोर्ड — पूरा` | 20 | 22 | open | face up |

| Scene | Change |
|-------|--------|
| 1.16 | the board is born: `board:ch1`. Wool comes from `लाल ऊन का गोला` |
| 2.2, 2.3, 2.5 | one card each; in 2.3 मीरा pins her own |
| 2.8 | the slip comes off the centre; `तुलसी` is pinned: `board:ch2` |
| 3.1–3.4 | four cards: `board:ch3` |
| 3.5 | his hand rests on the face-down card (see section 6, question 2) |
| chapter 4 | no change: three silent days |
| 5.1, 5.2 | one card: `board:ch5`. In 5.2 every thread runs to the centre |
| 6.1–6.4 | three cards. अर्जुन adds two threads of his own that run **outward**, from `लंदन` to a slip `मेहता` on the screen-right frame and from `नींद` to a slip `सोसाइटी` on the screen-left frame: `board:ch6` |
| 6.8 | दादाजी fetches his card; it goes back face up, with a thread |
| 7.1 | अर्जुन unpins his two outward threads and brings them to the centre; the slips go; he pins slot 19: `board:ch7` |
| 7.5 | दादी pins slot 20 with the last of her own wool: `board:final` |

**Never**

- Never move a card to another slot, and never take one down.
- Never let a thread end anywhere but on the centre card — except अर्जुन's two in chapter 6.
- Never show the face of दादाजी's card before 6.8, not even in a reflection.
- Never use any thread colour but `wool-red`.

### 2.7 `लाल ऊन का गोला`

**File** `lal-oon.svg`

**Purpose.** दादी's wool pays for the board. The ball is a clock of the film: it only shrinks.

**Construction** (cell 100 × 100)

- Shallow round cane basket, `cane-straw`, 53 wide by 23 high, three woven bands, a braided rim.
- Ball of `wool-red` with six winding lines, sitting inside so that the basket's front wall
  hides its lower part; a tail of wool comes over the screen-left rim and hangs down outside.
- Two `wood` needles leaning out to screen-right. On the lower needle, a strip of knitting
  10 wide and 5 deep.

**Wear marks.** One broken cane strand sticks out of the rim on screen-right. One needle has
lost its end knob. The knitting **never grows**: the wool goes to the board instead.

| State key | In the script | Ball radius | Chapters |
|-----------|---------------|-------------|----------|
| `oon:full` | `ऊन का गोला — पूरा` | 14.5 | P, 1 |
| `oon:half` | `ऊन का गोला — आधा` | 11 | 2, 3, 4 |
| `oon:small` | `ऊन का गोला — छोटा` | 7.5 | 5, 6 |
| `oon:last` | `ऊन का गोला — आख़िरी` | 4.25 | 7; after 7.5 only the tail is left |

| Scene | Note |
|-------|------|
| 1.12 | first seen, on the floor at दादी's side of the bed |
| 1.16 | "मेरा ऊन कहाँ जा रहा है?" — the first five threads are cut from it |
| 7.5 | she uses the last of it herself |

**Never**

- Never let the ball grow back between scenes, and never show a second ball.
- Never add rows to the knitting.

### 2.8 `अर्जुन का फ़ोन` and `सम का फ़ोन`

**Files** `phone-arjun.svg` · `phone-sam.svg`

**Purpose.** The two blue rooms. One phone is where a man looks for a missing rupee; the other
is where a boy counts himself.

**Construction — `अर्जुन का फ़ोन`** (cell 100 × 100)

- `night-indigo` case, 34 wide by 70 high, corners rounded 5.5, two side buttons on screen-right.
  Glass `soot-black`; screen 28 by 62; one punch-hole camera.
- Lit screen: the screen gradient, a halo of radius 49, and a neutral interface of rounded bars.
  No logo, no brand, no app that exists.

**Wear marks — अर्जुन.** **A crack across the top screen-left corner of the screen**: from the
top edge, 8.5 in, down to the side edge, 13.5 down, in five segments with three spurs. It is
drawn last, over whatever the screen shows. The case is scuffed at the same corner — which is
the top screen-right corner when the phone lies face down.

**Construction — `सम का फ़ोन`**

- Silver (`steel`) phone in a clear case, 32 wide by 68 high. **Always upright.** When he films,
  the screen shows four corner brackets, a `wool-red` recording dot with a timer bar, and a
  round shutter with a red square.
- **The sticker**, on the back under the case: a plain five-point star, `haldi-yellow`, on a
  white disc of radius 6.75. Not a brand, not a character.

**Wear marks — सम.** The clear case has yellowed along its edge. The sticker is peeling at its
lower screen-right.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `phone-arjun:on` | `अर्जुन का फ़ोन — जला हुआ` | lit screen and halo, crack on top |
| `phone-arjun:off` | `अर्जुन का फ़ोन — बंद` | dark glass, crack still visible |
| `phone-arjun:back` | `अर्जुन का फ़ोन — उलटा` | the back of the case |
| `phone-sam:on` | `सम का फ़ोन — रिकॉर्डिंग` | viewfinder |
| `phone-sam:off` | `सम का फ़ोन — बंद` | dark glass |
| `phone-sam:back` | `सम का फ़ोन — उलटा` | the star |

| Scene | State | Note |
|-------|-------|------|
| P.2 | `phone-arjun:on` | first seen: the flame has become this screen. ₹2,841 / ₹2,840 |
| 1.1 | both `on` | the two blue rooms |
| 1.10, 1.15, 3.6 | `phone-sam:on` | he films first and asks later |
| 3.4 | `phone-arjun:on`, later `phone-sam:on` | the London call; at night he watches the speeches on सम's phone |
| 5.5 | `phone-sam:on` with no network; `phone-arjun:on` | "आज आख़िरी दिन" |
| 6.9 | `phone-sam:off` | into his pocket, unasked |
| 7.1 | `phone-arjun:on` | his own standing instruction |
| E.1 | `phone-sam:off`, then `on` | he asks before he films |
| E.2 | both `back` | face down on the shoe rack, charging; no glow anywhere |

**Never**

- Never show सम's phone held sideways, and never show अर्जुन's without the crack.
- Never put a real logo, app, or interface on either screen.
- Never let a lit screen appear in the epilogue's night scene.

### 2.9 `कटी पतंग`

**File** `kati-patang.svg`

**Purpose.** What arrives is claimed ("मेरी पतंग!") and what is claimed leaves. A year later one
is let go.

**Construction** (cell 100 × 100)

- Paper fighter kite, a diamond 61 wide by 65 high, corners at top (50, 13), right (80.5, 44),
  bottom (50, 78), left (19.5, 44).
- **Screen-left half `kite-pink`, screen-right half `haldi-yellow`.** One round "eye" on each
  half, radius 5.5, 10.5 from the spine, in the other half's colour, with a white centre: this
  is an `आँखदार` kite and it looks back at you.
- Bamboo spine and bow as detail lines; white paper tabs at the top and side corners; a
  two-colour tail 13 long with its colours swapped.

**Wear marks.** **A V-shaped tear in the lower screen-right edge**, near the tail, 7.5 deep.
**A short length of plain white cotton string**, about 50 long, frayed at its end. The string is
plain cotton — never glass-coated.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `patang:flat` | — | construction view |
| `patang:drifting` | `कटी पतंग — गिरती हुई` | tilted 24° to screen-left, string trailing up |
| `patang:tied` | `कटी पतंग — ग्रिल से बँधी` | hanging 12° off true from the top rail of the balcony grill |
| `patang:gone` | `पतंग नहीं — सिर्फ़ गाँठ` | the knot and a hand's length of string on the rail |
| `patang:2028` | `दूसरी पतंग` | same pattern with the colours mirrored, no tear |

| Scene | State | Note |
|-------|-------|------|
| 1.2 | `patang:drifting` | first seen; lands on the terrace; by evening `patang:tied` |
| 1.13 | `patang:tied` | on the grill in the winter rain |
| 2.6 | `patang:gone` | "आई तो मेरे पास थी।" |
| E.1 | `patang:2028` | lands, is held up, is let go |

**Never**

- Never show the family flying a kite, holding a reel, or cutting another kite.
- Never show the tear on the 2028 kite: it is a different kite.
- Never show a bird near a kite string.

### 2.10 `गन्ने का गमला`

**File** `ganne-ka-gamla.svg` · tall cell, 80 wide by 160 high · **1 unit = 1 cm**

**Purpose.** The midpoint of the film in one object: what is not fit to suck is fit to sow. The
pot is the same pot that held अनाया's sunflower.

**Construction**

- Terracotta flower pot, `terracotta`, **30 high**: rolled rim 36 wide and 4.5 high, body
  tapering from 30 to 23, soil (`wood`, darkened) rising 3.5 above the rim. Floor line at 152.5
  of the cell.
- **A white painted band**, `cotton-white`, 4.5 high, starting 2 below the rim.
- All seven states are drawn at the same scale, so the row reads as growth.

**Wear marks.** Two chips in the white band, at screen-left of centre and at screen-right. One
dried white drip below the band. A hairline crack down from the rim on screen-right. Salt bloom
near the foot.

| State key | In the script | Plant, height above the soil | When |
|-----------|---------------|------------------------------|------|
| `gamla:surajmukhi` | `गमला — सूरजमुखी` | sunflower, 55, fourteen petals, two leaves | chapters 2–3 |
| `gamla:kana-ganna` | `काना गन्ना` | the cane length from the cart: 58 long, three internodes, the blemish (`rust-shawl` with a `soot-black` centre) on the middle one; pot empty | 4.4 |
| `gamla:0-node` | `गमला — पोर बोई हुई` | one node pressed half into the soil, eye upward | 4.5 to the interval |
| `gamla:1-sprout` | `गमला — अंकुर` | one spear and two leaves, 14 | chapter 5 |
| `gamla:2-knee` | `गमला — घुटने तक` | five blades and a tiller, 41 | chapter 6 |
| `gamla:3-waist` | `गमला — कमर तक` | two jointed stalks and seven blades, 76 | chapter 7 |
| `gamla:4-tall` | `गमला — निशान से ऊँचा` | three jointed stalks, nine blades, one dry leaf, 107 — top at 137 from the floor | epilogue |

The cane stalks are `cane-straw` with ring-shaped nodes; every living blade is `leaf-green`.
अनाया's latest pencil mark is at 122 from the floor; the `4-tall` cell shows it as a guide.

| Scene | State | Note |
|-------|-------|------|
| 1.13 | `gamla:surajmukhi` | background, at the screen-right end of the balcony |
| 2.6 | `gamla:surajmukhi` | the flower faces the lane; मीरा turns the pot every morning — turn the plant group, never the pot |
| 4.4 | `gamla:kana-ganna` | the vendor throws the length aside; दादाजी picks it up |
| 4.5 | `gamla:0-node` | planted as the first rain arrives |
| 5.x, 6.x, 7.x | `1-sprout`, `2-knee`, `3-waist` | one step per chapter; never two steps inside a chapter |
| E.1 | `gamla:4-tall` | on the terrace, beside the stair-head door (see section 6, question 6) |

**Never**

- Never change the pot: same chips, same crack, same band, from sunflower to cane.
- Never show the sunflower being pulled out, cut or thrown away. Its season simply ends between
  chapters.
- Never let the cane shrink, flower or be cut.

### 2.11 `तुलसी का गमला`

**File** `tulsi-gamla.svg`

**Purpose.** दादी waters a dead plant every morning for two months. It is her card on the board
before she knows she has one.

**Construction** (cell 100 × 100)

- A **square** planter on a plinth, `terracotta`, so that it can never be mistaken for the round
  cane pot: plinth 41 wide, body tapering from 36 to 30, 17 high, rim 40 wide.
- A toothed border of eight `cotton-white` teeth under the rim; a small arched lamp niche in the
  front; **a `wool-red` thread tied round the rim**, knotted to screen-right of centre.
- The plant: a woody stem with four side branches, 31 high; twenty-two oval leaves in pairs;
  five flower spikes drawn as rows of dots.

**Wear marks.** The third and sixth teeth of the border have flaked to ghosts. Soot above the niche.

| State key | In the script | Drawing | When |
|-----------|---------------|---------|------|
| `tulsi:green` | `तुलसी — हरी` | full plant, `leaf-green` on `wood` stems | P, chapter 1 |
| `tulsi:dried` | `तुलसी — सूखी` | the same branches bare, `cane-straw`; six curled leaves left on; four fallen | chapter 2 |
| `tulsi:new-cutting` | `तुलसी — नई क़लम` | the dry stem stays; a cutting 8.5 high with two pairs of leaves stands 10.5 to its screen-right | 2.8 to chapter 5 |
| `tulsi:cutting-grown` | `तुलसी — क़लम बड़ी` | the cutting 19 high with six pairs and its first spike; the dry stem still there | chapter 6 to the epilogue |

| Scene | State | Note |
|-------|-------|------|
| 1.13 | `tulsi:green` | first seen, at the screen-left end of the balcony, by the door |
| 2.6 | `tulsi:dried` | in the background; nobody remarks on it |
| 2.8 | `tulsi:dried`, then `new-cutting` | "सूख गई।" |
| 4.1 | `tulsi:new-cutting` | अनाया waters it |
| 6.7, 7.4, E | `tulsi:cutting-grown` | |

**Never**

- Never pull out or break the dry stem. The new one grows beside the old.
- Never put an image or a figure in the niche. It holds a lamp or nothing.
- Never show the leaves being plucked.

### 2.12 `लाल बही`

**File** `lal-bahi.svg` · long cell, 150 × 100

**Purpose.** The account book of दादाजी's father, in a script nobody in the house can read:
"पढ़ना न आए तो बही भी रद्दी।"

**Construction**

- Long narrow ledger, 116 long by 28 wide, soft, bound along one long edge, in `wool-red` cloth
  quilted with white running stitch: a border, a centre line, a cross at each end.
- Page block `paper-cream`, showing at the open long edge and at the screen-right end.
- Tied with a `cotton-white` cotton cord: three turns round the middle and a bow.
- Open, it lifts upward on its long edge: two leaves, each with three red column rules, filled
  with `मुड़िया` — drawn as a hooked running line with no head-stroke, broken into words. It is
  never real lettering, because it must stay unreadable.

**Wear marks.** The cloth is frayed at the top screen-right corner. An old ink stain near the
bottom screen-left corner. The lower edge is rubbed dark.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `bahi:tied` | `लाल बही — बँधी` | closed and corded |
| `bahi:open` | `लाल बही — खुली` | both leaves, the cord lying loose at the corner |

| Scene | State | Note |
|-------|-------|------|
| 1.12 | `bahi:tied` | first seen, on top of the steel almirah in L4; it is there in every shot of that wall |
| 7.5 | `bahi:open` | taken down, opened, not read |
| E | `bahi:tied` | back on the almirah |

**Never**

- Never write a readable word or numeral inside it.
- Never show it anywhere but the almirah top or दादाजी's hands.
- Never use a red for it other than `wool-red`.

### 2.13 `जंग-रंग शॉल`

**File** `shawl.svg`

**Purpose.** Borrowed for three cold mornings and called "मेरी शॉल" by the third (2.2): the body
as something put on.

**Construction** (cell 100 × 100, flat view)

- `rust-shawl` wool, 85 by 42.5; a thin `paper-cream` border, 0.9 wide, set 3 in from all four
  edges; fringe 3.5 long on the two short ends.
- Two faint creases where it is always folded in thirds.

**Wear mark.** **One moth hole**, 2.25 across with three loose ends, 8.5 in from a fringed end
and 8 up from a long edge. It is visible in every state.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `shawl:flat` | — | construction view |
| `shawl:folded` | `शॉल — तह की हुई` | in thirds, three layers showing, hole on the top layer |
| `shawl:draped` | `शॉल — ओढ़ी हुई` | round the back of the neck, both ends falling in front; the hole near the foot of the screen-right fall |

| Scene | State | Note |
|-------|-------|------|
| 1.2 | `shawl:draped`, on दादाजी | first seen, on the terrace |
| 1.7, 1.12, 1.17 | `shawl:draped`, on दादाजी | |
| 2.2 | `shawl:draped`, on अर्जुन | three mornings; the same drawing on the other rig |
| 2.7 to chapter 7 | `shawl:folded` | over the back of his chair in L4 |
| E.1 | `shawl:draped`, on दादाजी | |

**Never**

- Never fill, darn or move the moth hole.
- Never give अर्जुन a shawl of his own in the same colour.
- Never drape it over a head.

### 2.14 `दादी की माला` and `व्रत की कॉपी`

**Files** `mala.svg` · `vrat-ki-copy.svg`

**Purpose.** Her two ledgers. One counts on beads, the other in numerals; both are bargains.

**Construction — `दादी की माला`**

- **108** sandalwood beads (`cane-straw`), each 1.9 across, on a `wool-red` thread; one larger
  head bead; a `haldi-yellow` tassel 9.25 long.
- The beads are round dashes on one path whose length is declared as 108, so the count is exact
  by construction. Hanging, the loop is 53 wide by 63.5 high.

**Wear marks — माला.** The fourteen beads on either side of the head bead are darker, polished
by fingers. One bead — the twenty-second, counting clockwise from the peg — is a paler replacement.

**Construction — `व्रत की कॉपी`**

- Soft school exercise notebook, 46 by 62.5, swollen with use, covered in brown paper
  (`cane-straw`), spine mended with `wood`-coloured cloth tape.
- A name label with a red rule. On it, in her rounded numerals, only `१९७७ –`. No name.
- A `wool-red` thread tied round the book.
- Inside: school ruling (blue lines, red margin) and **dates in Devanagari numerals only**, two
  columns to a page, in `night-indigo` ink. Not one word.

**Wear marks — कॉपी.** The lower outer corner is curled. A round water stain on the cover.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `mala:loop` | `माला — खूँटी पर` / `माला — हाथ में` | the full loop; in a hand it is the same loop passed over the fingers |
| `mala:coiled` | `माला — रखी हुई` | lying in a double coil |
| `vrat-copy:closed` | `व्रत की कॉपी — बंद` | cover and label |
| `vrat-copy:open` | `व्रत की कॉपी — खुली` | the opening of scene 6.5: the last entry is `१४·९·२७` |

| Scene | State | Note |
|-------|-------|------|
| 1.12 | `mala:loop`, in her hand | first seen: two extra rounds that night |
| chapters 2–5 | `mala:loop`, on its peg | by her pillow in L4; `vrat-copy:closed` on the shelf beneath it |
| 6.5 | `vrat-copy:open` | two women, two ledgers |
| 6.8 | `mala:loop`, in दादाजी's hand | he turns it fast; it is this mala (see section 6, question 7) |
| 6.9 | `mala:loop`, in her hand | the hospital corridor |
| E.2 | `mala:coiled` | suggested: on the kitchen table beside the granth, not in her hand |

**Never**

- Never redraw the beads by hand or change the count.
- Never write a word in the notebook, and never a date later than the scene's own date.
- Never show the mala on the floor.

### 2.15 `मीरा की लिस्ट`

**File** `meera-ki-list.svg`

**Purpose.** "लिस्ट में था।" Her care, her standards and her wound, on one pad.

**Construction** (cell 100 × 100)

- Magnetic list pad, 35 by 62.5: pale yellow sheets (`haldi-yellow` under a 62 % white
  overlay), a solid `haldi-yellow` header 9 high lettered `लिस्ट`, a `soot-black` magnet strip
  along the top.
- A blue pen (`phone-blue` cap and tip, white barrel) hanging from a `cotton-white` string
  fixed at the top screen-right corner.
- Her handwriting is an even running stroke in `night-indigo`: level, neat, never real words.
  Each line has a tick-box; each tick is its own path, so ticks can be added one at a time.

**Wear marks.** The top screen-left corner of the magnet strip is chipped. A turmeric
thumb-print on the right margin. The lowest sheet curls up at the bottom screen-left.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `list:full` | `मीरा की लिस्ट — रोज़ की` | nine lines, four ticked |
| `list:all-ticked` | `मीरा की लिस्ट — सब पर टिक` | ten lines for the ten days, ten ticks |
| `list:three-lines` | `मीरा की लिस्ट — तीन लाइनें` | `१.` a line, ticked; `२.` a line; `३.` nothing |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `list:full` | first seen, on the fridge door in L2 |
| 3.2 | `list:full`, in her hand | the pad comes off the fridge for the function list |
| 5.4 | ten lines, no ticks | "इस बार दस लक्षण — पूरे नियम से।" |
| 6.3 | ten lines, one tick | one tick more for each day done |
| 6.5 | `list:all-ticked` | "सब सही किया। फिर भी?" |
| E.1 | `list:three-lines` | the third line is blank |

**Never**

- Never write a readable item on it other than the three numerals of the last state.
- Never show the pen anywhere but on its string or in her hand.
- Never leave the fridge door without the pad, except while she is holding it.

### 2.16 `घी का घड़ा`

**File** `ghee-ka-ghada.svg`

**Purpose.** A clay pot that everyone calls by what it holds (6.6).

**Construction** (cell 100 × 100)

- Small round-bellied clay pot, `terracotta`, 36 wide by 48 high, short neck, rolled rim.
- A ring of **nine lime dots** round the shoulder.
- Mouth covered by a `cotton-white` cloth with two `wool-red` stripes, tied down with cotton
  string in a bow, the cloth's edge standing out below the string in ten points.

**Wear marks.** The fourth and seventh dots are almost rubbed away. A dark ghee stain runs down
the belly from the neck on screen-right. One ghee spot on the cloth.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `ghada:tied` | `घी का घड़ा — बँधा` | cloth on |
| `ghada:open` | `घी का घड़ा — खुला` | cloth and string beside it, ghee showing, a steel spoon standing in it |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `ghada:tied` | first seen, at the screen-right end of the top kitchen shelf; there in every kitchen shot |
| 6.6 | `ghada:tied`, then `ghada:open` for the insert | the pot is looked at, not handled roughly |

**Never**

- Never show it broken, dropped or spilled.
- Never move it from the top shelf except in 6.6.

### 2.17 `बेंच`

**File** `bench.svg` · long cell, 150 × 100

**Purpose.** Forty years of two men. One half has been empty since 16 January.

**Construction** (front view)

- Three `soot-black` iron frames — two ends and a centre — with scrolled arms on the end frames.
  Overall 136 wide; seat 19 above the ground; top of the back 55.5 above the ground.
- Slats `bench-green`, in **two halves**: three back slats and three seat slats on each side of
  the centre frame, each back slat 61 long by 5.5 high.
- **A small `brass` donor plate**, 11.5 by 5.5, screwed across the centre frame at the height of
  the middle back slat: `भेंट · 1987`. It divides the bench. **Screen-left is दादाजी's half.
  Screen-right is गुप्ता अंकल's.**

**Wear marks**

- The **middle back slat of the screen-right half** is a replacement: paler (a 30 % white
  overlay), with two bright `steel` screws.
- The paint is **worn through to the wood on the front seat slat of both halves** — the patch on
  दादाजी's side 17.5 wide, the one on गुप्ता's side 13.5.
- One fleck of bare wood on the top back slat, screen-left.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `bench:dry` | `बेंच — सूखी` | as built |
| `bench:wet` | `बेंच — गीली` | lower half of each slat darker, water standing on गुप्ता's seat, six drops under the front edge, a puddle |

| Scene | State | Note |
|-------|-------|------|
| 1.7 | `bench:dry` | first seen, in fog; दादाजी on screen-left, screen-right empty |
| 1.17 | `bench:dry` | अनाया sits on screen-right without thinking |
| 2.2 | `bench:dry` | अर्जुन, in the shawl, sits on screen-right |
| 5.1 | `bench:wet` | the first page |

**Never**

- Never seat दादाजी on the screen-right half.
- Never shoot the bench from behind: the halves would swap.
- Never repaint the worn patches or the pale slat.

### 2.18 `तीन डिब्बे`

**File** `teen-dibbe.svg` · long cell, 150 × 100

**Purpose.** मीरा sorts what is one's own, what comes and goes, and what belongs to the body —
by labelling tins (2.3).

**Construction**

- Three `steel` kitchen tins with lids, in descending size from screen-left: 39 by 50, 32 by 39,
  24.5 by 28. Each has two embossed rings, a highlight on its screen-left side and shade on its
  screen-right.
- Each carries a `paper-cream` label held by tape, lettered in her `night-indigo` hand.

**Wear marks.** A dent low on the screen-left side of the big tin. The knob of the middle lid is
a `brass` replacement. The lid of the small tin sits 4° crooked.

| State key | In the script | Labels, large to small |
|-----------|---------------|------------------------|
| `dibbe:kitchen` | `तीन डिब्बे — रसोई के लेबल` | `शक्कर` · `मूँग दाल` · `जीरा` |
| `dibbe:sorted` | `तीन डिब्बे — नए लेबल` | `अपना` · `आता-जाता` · `शरीर का` — pasted over the old labels, whose top edges still show |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `dibbe:kitchen` | on the top shelf, screen-left of the ghee pot |
| 2.3 | `kitchen`, then `sorted` | she labels them and says nothing |
| after 2.3 | `dibbe:sorted` | they stay that way for the rest of the film |

**Never**

- Never change their order on the shelf: large, middle, small.
- Never peel the new labels off again.

### 2.19 `अनाया की सवाल-कॉपी` and her crayons

**Files** `sawal-copy.svg` · `crayons.svg` (`अनाया के क्रेयॉन`)

**Purpose.** She asks, and draws what she asked. And one thing in her world must always be in
order.

**Construction — notebook** (cell 100 × 100)

- Spiral-bound, 45.5 by 63, thirteen wire loops, `kite-pink` cover.
- On the cover: a large crayon `?` in `haldi-yellow`; a name label, stuck on 5° crooked, reading
  `अनाया`; and in the lower corner a pencil `कोई` 9 high.
- Inside: one question to a page, one crayon drawing to a question. Her handwriting is a wavy
  pencil stroke. The one question she writes out in full is `और फिर?`.

**Wear marks — notebook.** The lower outer corner of the cover is bent up.

**Construction — crayons**

- Twelve wax crayons, each 4 wide, standing in an open card tray 80 wide with one `kite-pink`
  stripe. **The order never changes**, screen-left to screen-right: `wool-red`, `terracotta`,
  `haldi-yellow`, `leaf-green`, `bench-green`, `day-sky`, `phone-blue`, `night-indigo`,
  `kite-pink`, `wood`, `soot-black`, `cotton-white`.
- The tray is therefore also a colour chart of the film.

**Wear marks — crayons.** The red is worn to a stub and the white is almost new. One corner of
the tray is mended with tape.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `sawal-copy:closed` | `सवाल-कॉपी — बंद` | the cover |
| `sawal-copy:open` | `सवाल-कॉपी — खुली` | sample opening: a question and a kite; `और फिर?` and a lamp |
| `crayons:ordered` | `क्रेयॉन — क़तार में` | all twelve |
| `crayons:one-out` | `क्रेयॉन — एक बाहर` | the pink one lies in front of the tray; its place stands empty |

| Scene | State | Note |
|-------|-------|------|
| 1.11 | `sawal-copy:closed` | first seen, beside her on the sofa |
| 1.16 | `crayons:ordered` | she draws the first five cards |
| 4.2 | `sawal-copy:open` | at the window |
| any | `crayons:one-out` | only when a scene uses the trait; she puts it back before the scene ends |

**Never**

- Never change the order of the crayons, and never end a scene with one out of place.
- Never draw a deity, a monk, or a real cartoon character in her notebook.

### 2.20 `व्हाइटबोर्ड`

**File** `whiteboard.svg`

**Purpose.** Three days without a voice. He writes; nobody reads; the house runs (4.1).

**Construction** (cell 100 × 100)

- Handheld whiteboard, 65 by 45, thin `steel` frame 2.5 wide, `soot-black` plastic corner caps,
  a black marker with a white band tied to the top screen-right corner by a white string.
- His writing on it is live text in `soot-black`, tilted 3°.

**Wear marks.** The lower screen-left corner cap is missing. Two grey ghosts on the surface
where earlier words were wiped with a palm.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `whiteboard:blank` | `व्हाइटबोर्ड — ख़ाली` | ghosts only; a scene's own words are added as on-screen text |
| `whiteboard:bona` | `व्हाइटबोर्ड — "बोना = ?"` | the words of 4.4 |

| Scene | State | Note |
|-------|-------|------|
| 4.1 | `whiteboard:blank`, plus the scene's words | first seen; nobody reads it |
| 4.4 | `whiteboard:bona` | |
| 4.5 | `whiteboard:blank` | put down, face up, when his voice comes back |

**Never**

- Never show it before 4.1 or after 4.5.
- Never let anyone answer what is written on it in 4.1.

### 2.21 `कोई`

**File** `koi.svg`

**Purpose.** Panditji's "जैसे कोई…". A small wordless figure who acts the example out on the
page. "ये 'कोई' कौन है, आज तक पता नहीं चला। …शायद हम।"

**Construction** (cell 100 × 100; he stands on a ruled line 88 down the page)

- One reed-pen line in `ink-sepia`, 1.25 to 1.4 thick, passed through the `koi-wobble` filter.
- **Head**: one pen circle, radius 7.5, that overshoots where it closes. **Face**: two dots.
  No mouth, no nose, no hair, no ears.
- **Torso**: a closed pear shape, 14 wide by 29 high, filled with the page colour.
- **Badge**: a rounded rectangle 10 by 7.25 on the chest, lettered **`मैं`**.
- **Arms** 24 long, single lines ending in a dot. **Legs** 25 long, single lines ending in a
  short foot stroke. Standing height 71.
- These lengths are the same in every pose.

| State key | In the script | Pose |
|-----------|---------------|------|
| `koi:stand` | `कोई — खड़ा` | neutral, arms down |
| `koi:credit` | `कोई — श्रेय लेता हुआ` | both arms flung up and wide, head tipped back |
| `koi:clutch` | `कोई — पकड़े हुए` | hunched 7°, both arms wrapped across the body, eyes to one side |
| `koi:scold` | `कोई — डाँटता हुआ` | leaning 14°, one arm pointing down at a thing, the other on the hip |
| `koi:search` | `कोई — ढूँढता हुआ` | one hand flat above the eyes, looking away |
| `koi:sit` | `कोई — बैठा हुआ` | on the line, knees up, one arm over them, head down |

| Scene | Pose | Note |
|-------|------|------|
| 1.10 | `koi:credit` | first seen: he takes the credit for the sunrise |
| 1.14 | `koi:search` (hand to head), then `koi:scold` | the stone is already on the ground when the page opens; no blow is drawn |
| 2.2 | `koi:clutch` | the borrowed cloth |
| later pages | any of the six | a page uses at most three poses and lasts 5 to 8 seconds |

**The hidden कोई.** One is hidden in every present-day scene: a doodle, a pattern in a curtain,
a crack in plaster. It is `koi:stand`, no more than 9 high, tone on tone, never animated, and
never in the same place twice in one location. The script supervisor keeps the list.

**Never**

- Never a face beyond two dots. Never clothes, hair, a halo, a cloth over the mouth, a begging
  bowl, a staff: he is never a monk and never a real person.
- Never a word from him, a thought bubble, or a label such as "पागल".
- Never a wound, a blow, blood or a fall. Harm happens between pages.
- Never off the page, except as the hidden doodle.
- Never without the badge.

### 2.22 `हाथ`

**File** `haath.svg` · long file, three cells

**Purpose.** Pandit Todarmalji, Jaipur, 1760s: a hand, a sleeve, a pen, a page. Nothing more.

**Construction** (cell 100 × 100, seen from above the desk)

- **Sheet**: handmade paper, `parchment`, 68 by 60, lying 3.5° askew, lines of writing drawn as
  `ink-sepia` strokes.
- **Hand**: a right hand, `skin-tan`, holding the pen between thumb and first finger, three
  fingers curled under, four knuckle lines. It enters from the bottom screen-right corner and is
  cut by the frame at the forearm.
- **Sleeve**: the edge of a white `अंगरखा` sleeve, `cotton-white`, with one line of piping at
  the cuff and two fold lines.
- **Reed pen**: `cane-straw`, 39 long and 1.9 thick, one node ring, an ink-dark cut nib.
- **Inkpot**: `brass`, 17 wide by 13.5 high, a dark mouth, above the top screen-right corner of
  the sheet.

**Wear marks.** One run of dried ink down the screen-left side of the inkpot. The nib end of the
reed is stained for a fifth of its length.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `haath:writing` | `हाथ — लिखता हुआ` | nib on the sheet at the end of the fifth line |
| `haath:dip` | `हाथ — दवात में` | nib in the mouth of the pot |
| `haath:pen-down` | `क़लम — रखी हुई` | no hand; the pen lies on the sheet; the last word written is `बहु` |

| Scene | State | Note |
|-------|-------|------|
| P.1 | `haath:writing`, `haath:dip` | first seen; the opening words are added as on-screen text from the quote bank |
| 5.5 | `haath:writing` | carry from the home lamp |
| 7.4 | `haath:writing`, then `haath:pen-down` | he writes `बहु`; the pen is laid down; the lamp burns on |
| E.2 | `haath:pen-down` | the last picture of the film, with `diya-jaipur:lit` |

**Never**

- **Never a face.** Never a head, a shoulder, a shadow of a head, a reflection, a second hand.
  The frame never rises above the forearm.
- Never a voice. Never his name on screen in this world.
- Never show the hand falling, the lamp going out, or anything that depicts or suggests his death.
- Never show the hand lifting the pen away from `बहु`: the cut happens, and the pen is down.
