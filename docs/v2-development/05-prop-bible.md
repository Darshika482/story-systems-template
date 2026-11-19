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

Scene numbers are those of `03-treatment.md` and of the assembled screenplay
`moksha-marg-prakashak.fountain`, which keeps the same numbers and adds 5.5A, 5.5B, 7.1A, 7.1B,
7.4A, 7.4B, E.0 and E.3. Where the two differ, this page follows the screenplay.
"Screen-left" and "screen-right" are the viewer's left and right. "Wearer's left" is the left of the person wearing the thing.

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
| Jaipur, 1760s | `night-indigo` | `outline`, 2 px | lamp gold; flat moonlight through the jali | one lamp lights everything and its flame never moves; what the lamp does not reach stays indigo |

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
| 1.2 | `chashma:on-head`, then `on-nose`, then `on-head` again | the gag is planted |
| 1.12 | `on-nose`, then `chashma:folded-on-granth` | "वो चश्मा ग्रन्थ पर रखते हैं।" |
| 3.2 | `chashma:on-head` | the photo shoot |
| 5.1, 5.5 | `chashma:on-nose` | on his nose and still he cannot read |
| 6.3 | `on-nose`, then `folded-on-granth` | "मुझे दिखाई नहीं दे रहा।" — he takes them off |
| 6.8, 7.1 | `chashma:folded-on-granth` | not worn; in 7.1 he wears the eye shield (section 4) |
| 7.2 | — | dark glasses after the operation (section 4); neither pair |
| 7.3, 7.4 | `chashma-naya:on-nose` | the new pair, from the stairs onward; the old pair lies in the drawer of his desk |
| 7.5 | `chashma:on-dadi` | the old pair comes out of the drawer and changes hands; अनाया pushes it up |
| E.0, E.1 | `chashma-naya:on-nose` | on his nose, and now it is the book he cannot find |
| E.1, E.2 | `chashma:on-dadi` | on the terrace and at the kitchen table; she looks over the thick rims |

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
| 6.8 | `granth:wrapped`, then `open-on-stand` | the रेहल stands empty and the book lies wrapped beside it; अर्जुन opens it and reads |
| 7.1 | `open-on-stand`, then `granth:wrapped` | अर्जुन wraps it, carefully, the way his father does |
| 7.4 | `granth:open-last-page` | the unfinished word |
| E.1 | `granth:wrapped` | in दादी's lap, at the parapet, where the wool basket was a year ago |
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
- **In Jaipur the flame is `lau:steady` and nothing else.** It does not flicker, lean or dim:
  "लौ ज़रा भी नहीं हिलती।" The flicker states belong to the home lamp and the small clay lamps.

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
every year. Flame at scale 1. Six of them stand on a steel plate in 5.5.

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
| 1.12 | `diya-ghar:lit` | on his desk in L4, beside the रेहल |
| 5.5 | `diya-ghar:lit`, then six `diya-mitti:lit` | the power cut: the home lamp goes from hand to hand and lights six clay lamps on a steel plate |
| 5.5A | `diya-jaipur:lit` | the carry lands here; the pile of written leaves has grown |
| 6.8 | `diya-ghar:unlit` | suggested: the book is wrapped and the lamp is out; only the ceiling bulb, until अर्जुन reads |
| 7.4, 7.4A | `diya-ghar:lit` and a row of `diya-mitti:lit`; then `diya-jaipur:lit` | दिवाली, then the last page |
| 7.5 | `diya-ghar:lit` | the one light in L4 |
| E.2 | `diya-ghar:lit` | beside दादी, together with the ceiling bulb |
| E.3 | `diya-jaipur:lit` | the last picture of the film: five seconds, the flame does not move |

**Never**

- Never redraw the flame. Flicker — in the flat only — by morphing between the five states.
- Never light the home lamp as decoration. It burns when the granth is read, in the power cut,
  on दिवाली, and in 7.5.
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
| E.2 | glimpsed through the half-open door as अर्जुन passes |
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
| 1.6 | `gilas:full` | first seen; filled from the मटका; slid from दादाजी's side to अर्जुन's — screen-left to screen-right |
| 1.17 | `gilas:full` | अनाया carries it to the bench |
| 6.8 | `gilas:full` | अर्जुन fills it and sets it down; what दादाजी slides across this time, "गिलास की तरह", is his card |
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
  order. **A card never changes slot.** Six slots are still free at the end of the film.
- **Case card**: `paper-cream` index card 14.5 by 11, one red head-rule; title lettered by
  दादाजी; one crayon drawing by अनाया; one `brass` pin on the edge that faces the centre.
- **Centre card**: 25 by 16.5. Until 2.8 it is covered by a slip, taped at two corners, that
  shows only `?`. From 2.8 it reads `मिथ्यादर्शन`, in old ink, over a red rule and `उलटी समझ`;
  two scraps of tape stay on it for the rest of the film.
- **`लाल ऊन`**: one thread of `wool-red`, 0.6 thick, from each card's pin to the nearest edge of
  the centre card, with a slight sag. Threads from the outer side cards run through the channel
  between the two middle rows.
- **दादाजी's own card** sits in slot 15, the bottom screen-left corner, **face down**, tilted
  3°, one corner lifting, and has **no thread**.
- **Map tags** (from 5.3): small `paper-cream` tags, 7 by 4, pinned close round the centre card
  — `जीव` and `अजीव` above it, `पुण्य-पाप` below. Between the two upper tags, right above the
  centre card, सम's slip: a `wool-red` dot and `आप यहाँ हैं`.

**Wear marks.** The lower screen-left corner of the frame is chipped. Old pin-holes in the cork.
A darker rectangle low on the screen-right where one notice hung for years.

| Slot | Card, as lettered | Pinned in | Drawing on it |
|------|-------------------|-----------|---------------|
| 13 | `कूपन` — अनाया's case | 1.16, the first card | a girl, ten coupons, ten arrows |
| 8 | `रात 2 बजे` — अर्जुन's | 1.16 | a moon |
| 9 | `मेहता` | 1.16 | a call tile with the camera off |
| 12 | `बस ये दर्द जाए` | 1.16 | a red zigzag |
| 3 | `मैंने किया / ऐसा ही होना था` | 1.16 | none: two lines of words |
| 4 | `बारिश` | 1.16 | cloud and three drops |
| 15 | दादाजी's own — `ग्यारह कहाँ गए?` | 1.16, face down, after अर्जुन has left | none |
| 17 | `मेरी शॉल` | 2.2 | a rust rectangle |
| 2 | `गुस्सा मेरा nature है?` | 2.3, by मीरा, in her own blue hand | none |
| 18 | `कमरा 14` | 2.5 | a key |
| 5 | `सूरजमुखी` | 2.6 | a sunflower |
| 7 | `गाड़ी वाला slot` | 3.1 | a car |
| 10 | `91.4` | 3.5 | none |
| 16 | दादी's — the numerals `११` | 7.5, beside his | none |

| State key | In the script | Cards with a thread | Centre | दादाजी's card | Extras |
|-----------|---------------|---------------------|--------|---------------|--------|
| `board:ch1` | `निदान बोर्ड — छह कार्ड` | 6 | covered, `?` | face down | — |
| `board:ch2` | `निदान बोर्ड — दस कार्ड` | 10 | `मिथ्यादर्शन` | face down | — |
| `board:ch3` | `निदान बोर्ड — बारह कार्ड` | 12 | open | face down | — |
| `board:ch5` | `निदान बोर्ड — नक्शे के मोहरे` | 12 | open | face down | three map tags, सम's slip |
| `board:ch6` | `निदान बोर्ड — कोना ख़ाली` | 12 | open | **gone**: a pale rectangle and a pin-hole | as before |
| `board:ch7` | `निदान बोर्ड — कार्ड पलटा हुआ` | 13 | open | back in its slot, face up, threaded | slot 8 now reads `मैं कहाँ ग़लत गिन रहा हूँ?` |
| `board:final` | `निदान बोर्ड — पूरा` | 14 | open | face up | दादी's `११` in slot 16 |

| Scene | Change |
|-------|--------|
| 1.16 | the board is born. `कूपन` first, then five more; the centre card and its `?`; the threads, pulled from `लाल ऊन का गोला`; last, when अर्जुन has gone, the face-down card in the corner: `board:ch1` |
| 2.2, 2.5, 2.6 | one card each |
| 2.3 | मीरा pins her own, alone, to the still-covered centre |
| 2.8 | the slip comes off: `board:ch2` |
| 3.1, 3.5 | one card each: `board:ch3`. In 3.5 दादाजी walks from the dining table to the board and rests his hand on the face-down card. He does not turn it |
| chapter 4 | no change |
| 5.2 | seen from the living room through the open door; every thread on one card |
| 5.3 | the two map tags and सम's slip; by 5.4 the third tag: `board:ch5` |
| 6.8 | the card is in दादाजी's kurta pocket; he slides it across the kitchen table; अर्जुन turns it over and leaves it face up beside the granth: `board:ch6` |
| 7.1A | अर्जुन unpins `रात 2 बजे`, writes on its back, pins it in the same slot with the same thread. दादाजी's card is back, face up: `board:ch7` |
| 7.5 | दादी writes `११` on a blank card and ties it with the last of her wool: `board:final` |
| E.2 | glimpsed through the half-open door |

**Never**

- Never move a card to another slot.
- Never let a thread end anywhere but on the centre card.
- Never show the face of दादाजी's card before 6.8, not even in a reflection.
- Never use any thread colour but `wool-red`.
- Never letter a card that the screenplay has not named. Free slots stay empty.

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
lost its end knob. The strip of knitting stays short all year: most of the wool goes to the board.

| State key | In the script | Ball radius | Chapters |
|-----------|---------------|-------------|----------|
| `oon:full` | `ऊन का गोला — पूरा` | 14.5 | P, 1 |
| `oon:half` | `ऊन का गोला — आधा` | 11 | 2, 3, 4 |
| `oon:small` | `ऊन का गोला — छोटा` | 7.5 | 5, 6 |
| `oon:last` | `ऊन का गोला — मुट्ठी भर` | 4.25 | 7; after 7.5 the ball is gone and the basket is put away |

| Scene | Note |
|-------|------|
| 1.2 | first seen, in her lap on the terrace, needles moving |
| 1.14 | on the bed in L4 |
| 1.16 | "मेरा ऊन कहाँ जा रहा है?" — the first six threads are pulled from it |
| 2.4 | one strand, knotted in the corner of her pallu, becomes the vow thread |
| 7.4 | "ऊन का गोला अब मुट्ठी भर रह गया है।" |
| 7.5 | she ties her own card with the last of it: "गोला ख़त्म।" |
| E.1 | no basket in her lap: the wrapped granth is there instead |

**Never**

- Never let the ball grow back between scenes, and never show a second ball.
- Never let the knitting grow faster than the ball shrinks.

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

- Silver (`steel`) phone in a clear case, 32 wide by 68 high. **Always upright when he films.** When he films,
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
| E.0 | `phone-arjun:on` | it rings in his pocket; he lets it ring twice, answers in one line, and puts it back |
| E.1 | `phone-sam:off`, then `on` | he asks before he films |
| E.2 | both `back` | face down on the shoe rack, charging; no glow anywhere |

**Never**

- Never show सम filming with the phone sideways (he holds it sideways once, to edit, in 3.6),
  and never show अर्जुन's without the crack.
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
| `patang:2028` | `दूसरी पतंग — हरी-सफ़ेद` | another kite: the same pattern in `leaf-green` and `cotton-white`, no tear |

| Scene | State | Note |
|-------|-------|------|
| 1.2 | `patang:drifting` | first seen; lands on the terrace; she hugs it; by evening `patang:tied` |
| 1.13 | `patang:tied` | on the grill in the winter rain |
| 2.6 | `patang:gone` | a piece of string flaps on the grill: "आई तो मेरे पास थी।" It stays there for the rest of the year |
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
| `gamla:4-tall` | `गन्ने का गमला — निशान से ऊँचा` | three jointed stalks, nine blades, one dry leaf, 107 — top at 137 from the floor | epilogue |

The cane stalks are `cane-straw` with ring-shaped nodes; every living blade is `leaf-green`.
अनाया's height mark of January 2027 is at 122 from the floor; the `4-tall` cell shows it as a guide.

| Scene | State | Note |
|-------|-------|------|
| 1.13 | `gamla:surajmukhi` | background, at the screen-right end of the balcony |
| 2.6 | `gamla:surajmukhi` | the flower faces the lane; मीरा turns the pot every morning — turn the plant group, never the pot |
| 4.3 | the pot of the `kana-ganna` cell, empty | beside the new tulsi at the railing; its white band catches the last sun |
| 4.4 | `gamla:kana-ganna` | the vendor throws the length aside; दादाजी picks it up |
| 4.5 | `gamla:0-node` | planted as the first rain arrives |
| 5.x, 6.x, 7.x | `1-sprout`, `2-knee`, `3-waist` | one step per chapter; never two steps inside a chapter |
| E.1 | `gamla:4-tall` | carried up to a corner of the terrace for the sun; मीरा shows with her hand where last year's mark was, and the cane is above it |

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
| E.0, E.1 | `shawl:draped`, on दादाजी | on the bench at dawn, then on the terrace |

**Never**

- Never fill, darn or move the moth hole.
- Never give अर्जुन a shawl of his own in the same colour.
- Never drape it over a head.

### 2.14 `दादी की माला` and `व्रत की कॉपी`

**Files** `mala.svg` (also `दादाजी की माला`) · `vrat-ki-copy.svg`

**Purpose.** Her two ledgers. One counts on beads, the other in numerals; both are bargains.

**Construction — `दादी की माला`**

- **108** sandalwood beads (`cane-straw`), each 1.9 across, on a `wool-red` thread; one larger
  head bead; a `haldi-yellow` tassel 9.25 long.
- The beads are round dashes on one path whose length is declared as 108, so the count is exact
  by construction. Hanging, the loop is 53 wide by 63.5 high.

**Wear marks — her mala.** The fourteen beads on either side of the head bead are darker,
polished by fingers. One bead — the twenty-second, counting clockwise from the peg — is a paler
replacement.

**`दादाजी की माला`.** His own, "सादी, काठ के दानों की": the same loop in plain dark `wood`
beads on a white thread, a knot where hers has a tassel, no polished run, no replaced bead. It
is seen once, in 6.8.

**Construction — `व्रत की कॉपी`**

- Soft school exercise notebook, 46 by 62.5, swollen with use, corners worn round, covered in
  brown paper (`cane-straw`), spine mended with `wood`-coloured cloth tape.
- A name label with a red rule. On it, in her rounded numerals, only `१९७७ –`. No name.
- A `wool-red` thread tied round the book.
- Inside: school ruling (blue lines, red margin) and **dates in Devanagari numerals only**, two
  columns to a page, in `night-indigo` ink. Not one word.

**Wear marks — notebook.** The lower outer corner is curled. A round water stain on the cover.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `mala:loop` | `माला — खूँटी पर` / `माला — हाथ में` | the full loop; in a hand it is the same loop passed over the fingers |
| `mala:coiled` | `माला — रखी हुई` | lying in a double coil |
| `mala:dadaji` | `दादाजी की माला` | the plain wooden one |
| `vrat-copy:closed` | `व्रत की कॉपी — बंद` | cover and label |
| `vrat-copy:open` | `व्रत की कॉपी — खुली` | the opening of scene 6.5: the last entry is `१४·९·२७` |

| Scene | State | Note |
|-------|-------|------|
| 1.12 | `mala:loop`, in her hand | first seen: it stops for a moment, then runs fast; two extra rounds that night |
| chapters 2–5 | `mala:loop`, on its peg | by her pillow in L4; `vrat-copy:closed` on the shelf beneath it |
| 6.5 | `vrat-copy:open` | she brings it under her arm with the plate of rice and slides it across: two women, two ledgers |
| 6.8 | `mala:dadaji`, in his hand | fast, far faster than usual, until अर्जुन speaks |
| 6.9 | `mala:loop`, in her hand | the hospital corridor |
| E.2 | `mala:coiled` | suggested: on the kitchen table beside the granth, not in her hand |

**Never**

- Never redraw the beads by hand or change the count.
- Never give दादाजी's mala a tassel, or hers a knot.
- Never write a word in the notebook, and never a date later than the scene's own date.
- Never show a mala on the floor.

### 2.15 `मीरा की लिस्ट`

**File** `meera-ki-list.svg`

**Purpose.** "लिस्ट में था।" Her care, her standards and her wound, on one pad.

**Construction** (cell 100 × 100)

- Magnetic list pad, 35 by 62.5: pale yellow sheets (`haldi-yellow` under a 62 % white
  overlay), a solid `haldi-yellow` header 9 high lettered `लिस्ट`, a `soot-black` magnet strip
  along the top.
- A blue pen (`phone-blue` cap and tip, white barrel) hanging from a `cotton-white` string
  fixed at the top screen-right corner.
- Her handwriting is an even running stroke in `night-indigo`: level and neat. When a scene
  needs the words, they are on-screen text laid over the pad. Each line has a tick-box; each
  tick is its own path, so ticks can be added one at a time.
- A slip torn from this pad is the same pale yellow: the labels of `तीन डिब्बे` are three of them.

**Wear marks.** The top screen-left corner of the magnet strip is chipped. A turmeric
thumb-print on the right margin. The lowest sheet curls up at the bottom screen-left.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `list:full` | `मीरा की लिस्ट — रोज़ की` | nine lines, four ticked |
| `list:all-ticked` | `मीरा की लिस्ट — सब पर टिक` | ten lines, ten ticks |
| `list:three-lines` | `मीरा की लिस्ट — तीन लाइनें` | lettered on the pad: `१. लड्डू` · `२. पापाजी की दवा` · `३.` and nothing after it |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `list:full` | first seen, on the fridge door in L2 |
| 2.3 | `list:full` | three slips are torn off for the tins; the exam timetable hangs above it |
| 3.2 | `list:full`, in her hand | the pad comes off the fridge for the function list |
| 5.4 | a new sheet, no ticks | `दस लक्षण 2027`, added as on-screen text |
| 6.3 | the same sheet, ticks begun | one tick more for each day done |
| 6.5 | `list:all-ticked` | "सब सही किया। फिर भी?" |
| E.1 | `list:three-lines`, in her hand on the terrace | she lifts the pen, thinks, and lets it fall back on its string |

**Never**

- Never letter words on the drawing except the three lines of the epilogue.
- Never show the pen anywhere but on its string or in her hand.
- Never leave the fridge door without the pad, except while she is holding it.

### 2.16 `घी का घड़ा`

**File** `ghee-ka-ghada.svg`

**Purpose.** A clay pot that everyone calls by what it holds (6.6).

**Construction** (cell 100 × 100)

- An old, thick, round-bellied clay pot, `terracotta`, 36 wide by 48 high, short neck, rolled rim.
- A ring of **nine lime dots** round the shoulder.
- Mouth covered by a `cotton-white` cloth with two `wool-red` stripes, tied down with cotton
  string in a bow, the cloth's edge standing out below the string in ten points.

**Wear marks.** **The shoulder is blackened** (`soot-black` at 40 %): "काला पड़ा कंधा, पीढ़ियों
का घिसा हुआ।" The fourth and seventh dots are almost rubbed away. A dark ghee stain runs down
the belly from the neck on screen-right. One ghee spot on the cloth.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `ghada:tied` | `घी का घड़ा — बँधा` | cloth on, upright |
| `ghada:overturned` | `घी का घड़ा — औंधा` | mouth down and leaning, in a pool of ghee (`haldi-yellow` under white), cloth and string beside it |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `ghada:tied` | first seen, at the screen-right end of the top kitchen shelf; there in every kitchen shot |
| 6.6 | `ghada:overturned`, then upright in दादाजी's hands | the scene opens on it; he feels for it, lifts it and wipes it with his palm |
| after 6.6 | `ghada:tied` | back on the shelf |

**Never**

- Never show it cracked or in pieces. It is overturned, not broken.
- Never show the throw. 6.6 begins after it.
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
| 2.2 | `bench:dry` | अर्जुन, in the shawl, sits at the screen-right end |
| 5.1 | `bench:wet` | the first page |
| E.0 | `bench:dry` | fog again. दादाजी on screen-left; अर्जुन, in a kurta, on screen-right, under the pale slat |

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
- Before 2.3 each carries her own white kitchen label, held by one piece of tape. From 2.3 each
  carries a **slip torn from the yellow list pad**, stuck over the old label, lettered in her
  `night-indigo` hand.

**Wear marks.** A dent low on the screen-left side of the big tin. The knob of the middle lid is
a `brass` replacement. The lid of the small tin sits 4° crooked.

| State key | In the script | Labels, large to small |
|-----------|---------------|------------------------|
| `dibbe:kitchen` | `तीन डिब्बे — रसोई के लेबल` | `शक्कर` · `अजवाइन` · `जीरा` |
| `dibbe:sorted` | `तीन डिब्बे — नए लेबल` | `जानना` · `गुस्सा — आना-जाना` · `रंग-रूप` |

| Scene | State | Note |
|-------|-------|------|
| 1.1 | `dibbe:kitchen` | on the top shelf, screen-left of the ghee pot |
| 2.3 | `kitchen`, then `sorted` | दादाजी brings them in empty, stacked one on another; she lines them up, labels them, and looks at the middle one a moment longer |
| after 2.3 | `dibbe:sorted` | they stay that way for the rest of the film |

**Never**

- Never change their order: large, middle, small.
- Never peel the yellow slips off again.

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
| 6.3 | `crayons:ordered` | she walks through the fight carrying the tray |
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
| 4.1 | `whiteboard:blank`, plus the scene's words | first seen; nobody reads it. This scene's hidden कोई is a small ink figure अनाया drew in the one corner that is never wiped |
| 4.4 | `whiteboard:bona` | |
| 4.2 | `whiteboard:blank` | under his arm |
| 4.5 | `whiteboard:blank` | put down when his voice comes back |

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
| 5.1 | `koi:stand` | holding a very small lamp |
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

**Construction** (cell 100 × 100, seen from above the low desk)

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
reed is stained.

| State key | In the script | Drawing |
|-----------|---------------|---------|
| `haath:writing` | `हाथ — लिखता हुआ` | nib on the sheet at the end of the fifth line |
| `haath:dip` | `हाथ — दवात में` | nib in the mouth of the pot |
| `haath:pen-down` | `क़लम — दवात पर आड़ी` | no hand; the pen lies across the mouth of the inkpot; the last word on the sheet is `बहु` |

| Scene | State | Note |
|-------|-------|------|
| P.1 | `haath:dip`, `haath:writing` | first seen; the opening words are on-screen text from the quote bank |
| 5.5A | `haath:writing` | carry from the home lamp |
| 7.4A | `haath:writing`, `haath:dip`, then `haath:pen-down` | two letters; the pen stops; the hand lays it across the pot and leaves the frame |
| E.3 | `haath:pen-down` | the last picture of the film, with `diya-jaipur:lit` |

**Never**

- **Never a face.** Never a head, a shoulder, a shadow of a head, a reflection, a second hand.
  The frame never rises above the forearm.
- Never a voice. Never his name on screen in this world.
- Never show the hand falling or trembling, the lamp going out, or anything that depicts or
  suggests his death. The hand lays the pen down gently and goes out of frame; that is all.
- Never put a full stop, a blot or a flourish after `बहु`.


## 3. Location sheets

Each scene uses one location from this list. A new location needs a reason and a sheet.

### 3.1 The dollhouse — how flat B-502 is drawn

The flat is drawn once, as a doll's house with its front wall taken off. It has five rooms and a
balcony, and it is a diagram, not a floor plan: the flat is on one storey, but its **front row of
rooms is drawn below and its back row above**, like two shelves. Nobody ever climbs between the
shelves; a person who leaves a room through its door simply arrives in the next shot.

| | Screen-left | Middle | Screen-right |
|---|-------------|--------|--------------|
| **Back row** (drawn above) | L4 grandparents' room | L3 living room | L3 balcony — open to the sky on its right |
| **Front row** (drawn below) | L1 master bedroom | L5 kids' room | L2 kitchen + dining — front door in its right wall |

This arrangement is fixed, and it is the one the screenplay already uses: at 2 a.m. the front row
reads blue (अर्जुन), blue (सम), gold (the kitchen), and the fourth room — दादी, awake in the dark
— is found by moving up to the back row.

- **Each room is one 9:16 column.** A 16:9 frame of 1920 × 1080 holds one row: three columns of
  608 × 1080 separated and edged by four walls of 24. Cropping a column and scaling it by 1.776
  gives the 1080 × 1920 reel frame, so the same render serves the film and the reel.
- **One row at a time** is the normal wide frame — "तीन कमरे अगल-बगल". The people who matter
  stand in the middle third of their own column.
- **The whole house** is both rows at half size: 960 × 1080 in the middle of the film frame with
  the building's wall and the night on either side; in a reel it is 1080 × 1215, with the sky
  above and room for दादी's question below. This is the frame for "गिनो।"
- **Fourth walls.** The camera always looks at a room's back wall. The door from L4 to the rest
  of the flat is in the unseen front wall, which is why kitchen light never falls into it.
- **One pipe, three stains (5.2).** The cracked pipe runs inside the wall between the
  screen-left and middle columns. From July it leaves a damp patch in the three rooms that touch
  it — L4, L3 living room and L1 — and each is covered differently: a calendar (दादी), a strip
  of marble-finish wallpaper (मीरा), a square of putty (अर्जुन). All three covers stay to the
  end of the film. The fourth room on that wall, L5, hides its patch behind the bunk bed.
- **Night.** Walls go `night-indigo`. A lit phone tints its room `phone-blue`; the kitchen bulb
  and the home lamp tint theirs `lamp-gold`; the night-light in L5 is a small blue glow that is
  never counted as a "बत्ती".

### 3.2 L1 — master bedroom (front row, screen-left)

| | |
|---|---|
| Fixed furniture | double bed against the back wall, centre: मीरा's side screen-left, अर्जुन's side screen-right; a bedside table on his side; a low three-legged stool (तिपाई) on hers; wardrobe at screen-left; dressing mirror at the screen-right end of the back wall; curtained window above the bed |
| Light | night: `phone-blue` from his side of the bed (P.2, 1.1), nothing at all in E.2; afternoon with curtains shut (1.4): cream gloom and one slit of `day-sky`; morning: daylight from the window |
| Always present | his phone charger hanging empty from the bedside socket (in use until the epilogue); the square of putty high on the back wall from 5.2; her old class register on top of the wardrobe; the fitness-band box on the bedside table from 2.1 |
| Props that live here | `अर्जुन का फ़ोन` until the epilogue |

### 3.3 L2 — kitchen + dining (front row, screen-right)

One room, one table. A heading that says KITCHEN frames the counter and shelf; a heading that
says DINING frames the table. It is the same table in both.

| | |
|---|---|
| Fixed furniture | back wall, from screen-left: fridge, then the counter with a two-burner stove under a window, then the clay मटका on its stand; one long **top shelf** above the counter; the dining table in front, long side to camera, four chairs; the front door in the screen-right wall with the shoe rack beside it and key hooks above |
| The table | the reader's chair is at the screen-left end, facing right, with the `रेहल` in front of it and `घर का दीया` at the reader's right hand. The other chair of the 2 a.m. scenes is at the screen-right end. The steel glass travels along the near edge |
| Light | 2 a.m.: one warm bulb in a steel shade over the table, `lamp-gold`, plus the home lamp when the granth is open — this is the gold room; day: `day-sky` from the window over the counter; the family eats before sunset, so no meal is ever lit by the bulb |
| Always present | `मीरा की लिस्ट` on the fridge door; on the top shelf, from screen-left, `तीन डिब्बे` and, at the screen-right end, `घी का घड़ा`; the मटका with its steel lid and ladle; a wall clock that runs; the shoe rack by the door |
| Props that live here | `स्टील का गिलास` (upturned on the मटका's lid), `मीरा की लिस्ट`, `तीन डिब्बे`, `घी का घड़ा`; in the epilogue both phones, face down, on the shoe rack. In chapter 2 a tulsi cutting stands in a glass of water on the window sill until 2.8 |

### 3.4 L3 — living room + balcony (back row, middle and screen-right)

Two columns, one location. The sliding door between them is in the wall they share.

| | |
|---|---|
| Living room, fixed | three-seat sofa against the back wall, centre; दादाजी's chair at screen-left by the door to L4; a window with a wide sill (the seat of 4.2) at the screen-left end of the back wall, a desert cooler under it in summer; a floor rug. The television is the fourth wall: it is never seen, only its light and its sound |
| Living room, always present | the **photo wall** above the sofa — a row of frames from a cradle to दादाजी on the day he retired with a garland in his hands, and after the last frame a peg with his father's walking stick; the strip of marble-finish wallpaper from 5.2; a biscuit tin on the side shelf |
| Balcony, fixed | iron grill on the open side: upright bars and a top rail; a clothes line; two cane stools. At the railing, side by side: `तुलसी का गमला` on the screen-left and the round pot (`गन्ने का गमला`) in the corner on the screen-right |
| Light | day: the daylight gradient from the balcony across the living room; evening: low gold sun from the balcony side; night: television blue in the living room; दिवाली (7.4): only flames — the home lamp and twenty small clay lamps along the grill, the threshold and the window |
| Always present on the balcony | from 1.2 the kite tied to the top rail, and from 2.6 only its knot and a hand of string; the next balcony, where वर्माजी is a silhouette; the sky, which tells the season — kites, winter rain, loo, monsoon, दिवाली |
| Props that live here | `कटी पतंग`, `तुलसी का गमला`, `गन्ने का गमला` until it is carried to the terrace; `अनाया की सवाल-कॉपी` and her crayons on the rug |

### 3.5 L4 — grandparents' room (back row, screen-left)

| | |
|---|---|
| Fixed furniture | back wall, from screen-left: दादाजी's low desk with one drawer, and above it the `निदान बोर्ड`; high in the middle of the wall, `रुकी हुई घड़ी`; at screen-right the steel almirah. The bed stands in front of the almirah, दादी's side nearest the camera. His wooden armchair is by the desk; a stool stands beside the almirah |
| Light | evening: gold sun through the door from the living room; night: `घर का दीया` on the desk and nothing else, unless someone carries a phone in |
| Always present | `लाल बही` on top of the almirah; the stopped clock; the board; दादी's small radio on the shelf by her pillow; the calendar she hung over the damp patch, from 5.2, with this scene's hidden कोई in its printed border |
| Props that live here | `ग्रन्थ` on its `रेहल` on the desk (home position), `घर का दीया` beside it, `निदान बोर्ड`, `रुकी हुई घड़ी`, `लाल बही`, `जंग-रंग शॉल` over the chair-back in the warm months, `दादी की माला` on its peg, `व्रत की कॉपी` under it, `लाल ऊन का गोला` on the floor at her side; from 7.3 the old spectacles in the desk drawer |

### 3.6 L5 — kids' room (front row, middle)

| | |
|---|---|
| Fixed furniture | bunk bed against the screen-left wall: सम below, अनाया above; a study table under the window at the back, centre; a cupboard at screen-right, on whose top a phone can be banished; a mirror on the back wall at the screen-left end, back to back with the mirror of L1 |
| Light | night: `phone-blue` from under सम's blanket, and a small blue night-light that is always on; the strip of that light under the closed door is all the next room sees of him (3.7); day: window daylight |
| Always present | the night-light; अनाया's height marks in pencil on the door frame at screen-right, the top one at 122 cm in January 2027; her drawings taped above the upper bunk; the exam timetable in chapter 2 |
| Props that live here | `सम का फ़ोन` until the epilogue; `अनाया की सवाल-कॉपी`; her crayons |

### 3.7 L6 — terrace

| | |
|---|---|
| Fixed elements | parapet (मुँडेर) across the back at two fifths of the frame height; the stair-head room with its door at screen-right; two water tanks at screen-left; a rug (दरी) laid in the middle on संक्रांति; the next roof beyond the parapet at screen-right, where वर्माजी is only ever a silhouette |
| Light | morning, fog lifting: the daylight gradient, `day-sky` above to `wall-cream` at the parapet; no cast shadows until the fog has gone |
| Always present | the sky full of kites as small diamonds; the cry "वो काटा!" from every roof; a steel plate of तिल के लड्डू on the rug; दादी's place by the parapet at screen-left |
| Props seen here | 1.2: `कटी पतंग` (`drifting`), `लाल ऊन का गोला` in her lap, the old spectacles `on-head`. E.1: `patang:2028`, `गन्ने का गमला` (`4-tall`) in the corner by the tanks, `ग्रन्थ` (`wrapped`) in her lap, `मीरा की लिस्ट` (`three-lines`) in मीरा's hand |

### 3.8 L7 — society garden bench

| | |
|---|---|
| Fixed elements | `बेंच`, centred, facing camera; a hedge behind it; one tree with a round platform at screen-left; a lamp post at screen-right; the path in front; the society gate far off at screen-right, in the direction both men look |
| Light | dawn: fog as a flat `cotton-white` veil over everything behind the bench, the lamp post still lit (`lamp-gold`, one small glow), cool `day-sky` above; 5.1: after rain, everything one step darker |
| Always present | birdsong; the lamp post; the gate in the fog; the brass plate; the empty half |
| Props seen here | `बेंच`; `ग्रन्थ` (`wrapped`, then `open-in-hands`); `जंग-रंग शॉल`; `स्टील का गिलास` (1.17) |

### 3.9 L8 — Gupta corridor, stairwell, lift lobby

| | |
|---|---|
| Gupta's corridor (1.8) | a door standing ajar at screen-right; a row of white slippers outside it; through the gap, a stool with गुप्ता अंकल's garlanded photograph and a white sheet on the floor; voices of the two sons behind the door |
| Stairwell (1.9, 7.3) | a dog-leg stair seen in section: one flight rising to the right, a landing with a window, one flight rising to the left; iron handrail; the floor number painted on each landing |
| Lift lobby (7.3) | the lift door with a paper taped to it — "असुविधा के लिए खेद।"; in one corner a half-made rangoli and a plate of lamps, and the hands of the woman making it |
| Fifth-floor landing | the door of B-502 and its brass nameplate: `हरिप्रसाद जैन` |
| Light | 1.8: flat grey morning, lamp-gold from inside the door; 1.9: one tube light per landing, the rest `night-indigo`; 7.3: evening gold through the landing windows, and दिवाली lamps on the lower floors |
| Always present | the handrail; the landing window; the lift door; the door of another flat on every landing |

### 3.10 L9 — parking

| | |
|---|---|
| Fixed elements | a row of slots under the building, pillars with painted numbers; slot `B-502` in the middle of frame; the family's grey hatchback; in 3.1 a strange car standing in the slot with a doctor's sticker on its rear glass; the guard's cabin far back |
| Light | 41°: white overhead sun outside, hard-edged shade under the building, no gradient; everything outside the shade bleached toward `cotton-white` |
| Always present | the painted `B-502`; the pillar; a drain grate; heat shimmer at the open end |

### 3.11 L10 — school fun fair

| | |
|---|---|
| Fixed elements | bunting across the top; stalls as flat painted fronts in a row; a giant wheel as a silhouette behind; a bench where दादाजी sits; the school gate at screen-right for the sunset |
| The hammer stall (1.15, recalled in 3.7) | a box with six round holes and a wooden mallet. What pops up is drawn as plain painted wooden pegs with two dots, never as animals with fur, tails or faces (see section 6, question 4) |
| Light | bright afternoon turning to a low orange sun at the gate |
| Always present | the crowd as silhouettes and sound; coupons as small pink slips, ten at the start and none at the end; सम's upright phone |

### 3.12 L11 — dharmshala courtyard

| | |
|---|---|
| Fixed elements | a sunny tiled courtyard with a row of numbered doors on three sides, room 14 in the centre of the back row; the office window in one corner, with keys on wooden tags hanging from nails; a rope cot in the courtyard; a heap of the family's bags |
| Light | noon: flat bright daylight, short shadows |
| Always present | the key board; the door numbered 14; people returning as silhouettes at the edge of frame; a bell heard far away. The inside of the temple is never shown, and no image is visible anywhere |

### 3.13 L12 — banquet lawn

| | |
|---|---|
| Fixed elements | a stage with two chairs and a marigold arch; behind it the LED wall, "50 Golden Years"; buffet counters at screen-left, cleared before sunset; a store room at screen-right with stacked chairs and one tube light |
| Light | slanting evening sun, then dusk; the LED wall is a screen and glows `phone-blue`; the store room is tube-light white |
| Always present | the guests as silhouettes, laughter and bangles; the microphone; the photographer's umbrella light; the LED wall |

### 3.14 L13 — hospital corridor

| | |
|---|---|
| Fixed elements | a long steel bench against a green wall (`leaf-green` under a 60 % white overlay); a door at screen-right that closes; a clock on the wall |
| Light | tube-light white, flat, no warmth, no shadows |
| Always present | **the clock runs** — it is the only clock in the film whose hands are seen to move; the closed door; the sound of a trolley; names being called |
| Props seen here | `दादी की माला`; two threads on her wrist; `सम का फ़ोन` (`off`) |

### 3.15 L14 — the writer's room, Jaipur, 1760s

| | |
|---|---|
| Fixed elements | a low wooden desk (चौकी) seen from above and in front; the sheet on it; the inkpot above the sheet's top screen-right corner; `जयपुर का दीया` at screen-right, its wick tip at (78, 54.5) of the frame's prop cell; a pile of finished leaves at screen-left; a stone jali window behind |
| Light | `lamp-gold` on `night-indigo`: the lamp gradient falls on the sheet, the hand and the nearest edge of the desk; moonlight through the jali is a flat pattern of `day-sky` at low strength on the floor, without a gradient |
| Always present | the flame, perfectly still; the pile of leaves, which is the only thing that changes — a few in P.1, higher in 5.5A, very high in 7.4A and E.3; the jali; wet ink catching the light |
| Framing rule | the camera never rises above the forearm and never turns to the room. No face, no figure, no shadow of one |
| Props that live here | `हाथ`, `जयपुर का दीया` |

### 3.16 L15 — the parchment page

| | |
|---|---|
| Fixed elements | the page fills the frame: `parchment`, with a double red margin rule down each side as in a manuscript, and ruled ink lines. कोई stands on one of those lines, in the upper two thirds; Panditji's words sit in the lower third as a granth card |
| Light | none. The page is evenly lit; nothing on it casts a shadow |
| Always present | the ruled line under his feet; the boil of the ink line; silence — a page has no music and no voice except the reader's |
| What may appear | things he acts with are drawn in the same ink line, without fill: a stone, a cloth, a sun, a very small lamp. Nothing coloured, nothing from the flat |

## 4. Character costume notes

Rigs are a later job. These notes fix only what the props and the story depend on. Skin and hair
use the tokens of section 1: `skin-tan` for दादाजी, अर्जुन and सम्यक्; `skin-wheat` for दादी,
मीरा and अनाया; hair `cotton-white` (दादाजी), `steel` (दादी), `soot-black` (the others).

| Person | Signature outfit | Silhouette cue | Story-linked changes |
|--------|------------------|----------------|----------------------|
| दादाजी | `cotton-white` kurta-pyjama; a `steel`-grey sleeveless woollen vest in winter; brown sandals | a slight stoop, and a bump on the top of the head: the spectacles | `जंग-रंग शॉल` in January and February and again in the epilogue. **Old thick spectacles** until the operation of 20 September; a clear plastic shield taped over the **right eye** in 7.1; dark glasses at the gate in 7.2; **thin gold-rim spectacles from 7.3** |
| दादी | cotton sari in `granth-maroon` with a thin `haldi-yellow` border — the colours of the book and its cloth, worn all year by the one person who has never opened it; pallu over her hair | small and broad; the pallu; a bun | a strand of the red wool knotted in the corner of her pallu becomes a vow thread on her wrist in 2.4; by 6.9 there are two, one faded and one new. **From 7.5 she wears दादाजी's old thick spectacles**, low on her nose |
| अर्जुन | **office shirt**: `day-sky`, tucked in, a pen in the pocket, grey trousers; the fitness band from 2.1 | rounded shoulders bent to a phone | in 3.3 a stiff shirt and tie above, pyjama below. **Kurta**, `cotton-white`, like his father's: first at the bench in 1.17, then on bench mornings, and in the epilogue. The borrowed shawl in 2.2. Vest and pyjama at 2 a.m. |
| मीरा | cotton kurta in `haldi-yellow` — the colour of her list pad — with a `cotton-white` dupatta | a tight bun with a pen pushed through it | a silk sari in `kite-pink` with a `brass` border for the function (3.4); plain white through दस लक्षण (6.3–6.5) |
| सम्यक् | `night-indigo` hoodie in winter, a loose `steel` T-shirt otherwise; headphones round his neck | tall and thin; the phone held upright at chest height | school uniform on school days; nothing else changes — he changes by what he does with the phone |
| अनाया | frock in `kite-pink` with `haldi-yellow` pockets; two short pigtails tied with `wool-red` ribbon; in winter a red cardigan knitted from the same wool as the ball | two pigtails; a notebook under one arm | taller by a hand's width in the epilogue, with no new mark on the door frame yet |
| The hand | the edge of a white `अंगरखा` sleeve | — | none |

## 5. Continuity table

One row per prop, one column per chapter. A dash means the prop is not seen. Keys are given
without the prop prefix.

| Prop | P | 1 | 2 | 3 | 4 | 5 | 6 | 7 | E |
|------|---|---|---|---|---|---|---|---|---|
| `दादाजी का चश्मा` (old) | — | on-nose; on-head in 1.2; folded-on-granth in 1.12 | on-nose | on-nose; on-head in 3.2 | on-nose | on-nose | on-nose; folded-on-granth from 6.3 | in the desk drawer; on-dadi from 7.5 | on-dadi |
| `दादाजी का नया चश्मा` | — | — | — | — | — | — | — | on-nose from 7.3 | on-nose |
| `ग्रन्थ` | — | open-on-stand; wrapped and open-in-hands at the bench | the same | the same | open-in-hands | open-in-hands | closed in 6.3; wrapped, then open-on-stand in 6.8 | open-on-stand, wrapped in 7.1; open-last-page in 7.4 | wrapped in E.1; open-on-stand in E.2 |
| `जयपुर का दीया` | lit | — | — | — | — | lit (5.5A) | — | lit (7.4A) | lit (E.3) |
| `घर का दीया` | — | lit beside the open granth | lit | lit | lit | lit; lights six clay lamps in 5.5 | unlit in 6.8 | lit; twenty clay lamps in 7.4 | lit (E.2) |
| `रुकी हुई घड़ी` | — | stopped | stopped | stopped | stopped | stopped | stopped | stopped | stopped |
| `स्टील का गिलास` | — | full (1.6, 1.17) | — | — | — | full (5.4) | full (6.8) | full (7.1) | full (E.2) |
| `निदान बोर्ड` | — | ch1 from 1.16 | ch2 at 2.8 | ch3 | ch3 | ch5 | ch5; ch6 at 6.8 | ch7 after 7.1A; final after 7.5 | final |
| `लाल ऊन का गोला` | — | full | half | half | half | small | small | last; gone after 7.5 | — |
| `अर्जुन का फ़ोन` | on | on | on | on | on | on | on | on in 7.1 | rings in his pocket (E.0); back (E.2) |
| `सम का फ़ोन` | — | on | on | on | on | on; no network in 5.5 | on; off in 6.9 | off | on, after asking (E.1); back (E.2) |
| `कटी पतंग` | — | drifting, then tied | gone from 2.6 | gone | gone | gone | gone | gone | 2028 |
| `गन्ने का गमला` | — | surajmukhi | surajmukhi | surajmukhi | empty; kana-ganna in 4.4; 0-node in 4.5 | 1-sprout | 2-knee | 3-waist | 4-tall, on the terrace |
| `तुलसी का गमला` | — | green | dried; new-cutting from 2.8 | new-cutting | new-cutting | new-cutting | cutting-grown | cutting-grown | cutting-grown |
| `लाल बही` | — | tied | tied | tied | tied | tied | tied | tied; open in 7.5 | tied |
| `जंग-रंग शॉल` | — | draped (दादाजी) | draped on अर्जुन in 2.2; folded from 2.7 | folded | folded | folded | folded | folded | draped (दादाजी) |
| `दादी की माला` | — | loop, in her hand in 1.12 | loop | loop | loop | loop | loop, in her hand in 6.9 | loop | coiled (E.2, suggested) |
| `दादाजी की माला` | — | — | — | — | — | — | dadaji (6.8) | — | — |
| `व्रत की कॉपी` | — | closed | closed | closed | closed | closed | open in 6.5 | closed | closed |
| `मीरा की लिस्ट` | — | full | full | full | full | full; new sheet in 5.4 | ticks grow; all-ticked in 6.5 | full | three-lines |
| `घी का घड़ा` | — | tied | tied | tied | tied | tied | overturned in 6.6, then tied | tied | tied |
| `बेंच` | — | dry | dry | — | — | wet | — | — | dry (E.0) |
| `तीन डिब्बे` | — | kitchen | sorted from 2.3 | sorted | sorted | sorted | sorted | sorted | sorted |
| `अनाया की सवाल-कॉपी` | — | closed | closed | closed | open in 4.2 | closed | closed | closed | closed |
| `अनाया के क्रेयॉन` | — | ordered | ordered | ordered | ordered | ordered | ordered | ordered; one green one put right in 7.4 | ordered |
| `व्हाइटबोर्ड` | — | — | — | — | blank; bona in 4.4 | — | — | — | — |
| `कोई` | — | credit (1.10); search, scold (1.14) | clutch (2.2) | as the pages need | as the pages need | stand, with a small lamp (5.1) | as the pages need | as the pages need | — |
| `हाथ` | dip, writing | — | — | — | — | writing (5.5A) | — | writing, then pen-down (7.4A) | pen-down (E.3) |

## 6. Open questions for the writers

These are places where the story documents disagree with each other, or leave a choice that a
drawing had to make. Each has been drawn one way; say so if it should be the other.

1. **The dollhouse has two rows.** B-502 is a flat on one storey, but five rooms and a balcony
   cannot be "three rooms across" in one row. Section 3.1 draws the front row below and the back
   row above. The order of the front row — master bedroom, kids' room, kitchen — is the
   screenplay's own (1.1, 2.1, 3.3, 3.7, E.2).
2. **Scene 3.6 puts the dining room "in the middle"**, between the two closed bedroom doors. In
   every other dollhouse line the kids' room is in the middle and the kitchen and dining are at
   screen-right. The drawing follows the majority; 3.6 needs one word changed.
3. **दादाजी's own card after 6.8.** The screenplay leaves it face up beside the granth on the
   kitchen table and does not say that it goes back on the board. `board:ch7` and `board:final`
   put it back in its corner, face up, with a thread — and दादी's `११` in the slot beside it, so
   that `ग्यारह कहाँ गए?` and `११` sit next to each other. Confirm or correct.
4. **The hammer stall.** The screenplay has toy mice jumping out of holes to be pressed down
   with a mallet (1.15, recalled in 3.7). The maryada rule is that nothing on screen depicts
   harm to a living thing. The location sheet draws the pop-ups as plain wooden pegs.
5. **सम's phone is "always upright"**, yet in 3.6 he holds it sideways to edit. The sheet now
   reads "always upright when he films".
6. **The map tags of 5.3.** दादाजी pins `जीव` and `अजीव` and says five more will come "अपनी बारी
   से"; in 5.4 मीरा has read `पुण्य-पाप` on a card. The board shows those three tags and no more.
   If the other tags are to appear, they go in a row under the centre card.
7. **The home lamp in 6.8.** The drawing has it unlit while the granth lies wrapped, so that the
   kitchen at the low point is lit by the bulb alone. The screenplay does not mention the lamp
   in that scene.
8. **The mala in E.2** lying coiled on the table, unused, is a suggestion, not something written.
