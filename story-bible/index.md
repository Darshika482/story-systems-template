# Story Bible

The durable, validated source of record for your story world — characters, locations, timeline,
props, themes, and arcs. Each entry is a short **map-card** that cites the manuscript rather than
copying it, and carries the commit SHA it was last verified against so staleness can be computed,
not guessed.

New here? Read [`_meta/CONVENTIONS.md`](_meta/CONVENTIONS.md) first.

## Sections

### [Characters](characters/) — the cast

- [अर्जुन (Arjun)](characters/arjun.md) — the 43-year-old fixer who has arranged everything and still cannot sleep.
- [मीरा (Meera)](characters/meera.md) — the one who holds the house together and is right about everyone except herself.
- [सम्यक् — "Sam" (Samyak)](characters/samyak-sam.md) — the 16-year-old who believes nothing he cannot check.
- [अनाया (Anaya)](characters/anaya.md) — the 7-year-old who notices everything nobody says; the honest listener.
- [दादी — शांति देवी (Dadi Shanti Devi)](characters/dadi-shanti-devi.md) — the narrator who hides that she reads slowly.
- [दादाजी — हरिप्रसाद (Dadaji Hariprasad)](characters/dadaji-hariprasad.md) — the vaidya who keeps his own card face down.
- [गुप्ता अंकल (Gupta Uncle)](characters/gupta-uncle.md) — a voice and a garlanded photo; his death starts the film.

### [Locations](locations/) — the world

- [फ़्लैट B-502 (Flat 502)](locations/flat-502.md) — the fifth-floor flat where nearly every scene plays out.
- [सोसाइटी गार्डन बेंच (Society Garden Bench)](locations/society-garden-bench.md) — the dawn garden where Dadaji teaches.
- [जयपुर का लेखन-कक्ष, 1760 (Jaipur Writer's Room)](locations/jaipur-writers-room-1760s.md) — a hand, a sleeve, a lamp and a page.
- [छत — टेरेस (The Terrace)](locations/terrace.md) — the Sankranti kite-sky that frames the story.

### [Timeline](timeline/) — chronology of events

- [मकर संक्रांति 2027 (Sankranti 2027)](timeline/sankranti-2027.md) — the opening day; the missing rupee.
- [गुप्ता अंकल की मृत्यु (Gupta Uncle Dies)](timeline/gupta-uncle-dies.md) — the inciting incident.
- [स्वर्ण जयंती (Golden Jubilee)](timeline/golden-jubilee.md) — the fiftieth-anniversary function on a loan.
- [रिज़ल्ट का दिन (Result Day)](timeline/result-day.md) — the inherited sentence passes down.
- [पहली बारिश — गन्ना बोया (First Rain, Cane Planted)](timeline/first-rain-cane-planted.md) — the midpoint; interval.
- [आँख का ऑपरेशन (The Surgery)](timeline/surgery.md) — the diagnostician becomes a patient.
- [दिवाली — अधूरा पन्ना (Diwali, the Unfinished Page)](timeline/diwali-unfinished-page.md) — the granth stops mid-word.
- [मकर संक्रांति 2028 (Sankranti 2028)](timeline/sankranti-2028.md) — a year on; the house learns to wake.

### [Props](props/) — objects that carry plot or meaning

- [दादाजी का चश्मा (Dadaji's Glasses)](props/dadaji-ka-chashma.md) — the glasses worn on the head while hunting for them.
- [ग्रन्थ — मोक्षमार्गप्रकाशक (The Granth)](props/granth.md) — the unfinished book that ends mid-word on "बहु".
- [जयपुर का दीया (The Jaipur Lamp)](props/jaipur-ka-diya.md) — the clay lamp that frames the film.
- [निदान बोर्ड (The Diagnosis Board)](props/nidan-board.md) — a card per case, threaded to one covered centre.
- [गन्ने का गमला (The Cane in the Pot)](props/ganne-ka-gamla.md) — the discarded cane planted as a time marker.
- [कटी पतंग (The Cut Kite)](props/kati-patang.md) — claimed at Sankranti, let go a year later.
- [स्टील का गिलास (The Steel Glass)](props/steel-ka-gilas.md) — the engraved tumbler slid across the table.
- [बेंच — गुप्ता का आधा (The Bench)](props/bench.md) — the shared bench whose empty half measures a loss.
- [लाल ऊन (The Red Wool)](props/lal-oon.md) — Dadi's wool that becomes the board's threads.

### [Themes](themes/) — the arguments the story makes

- [उलटी समझ — एक रोग (Ulti Samajh)](themes/ulti-samajh.md) — all suffering is one illness wearing six faces.
- [दिशा बदलना — संक्रांति (Disha Badalna)](themes/disha-badalna.md) — the cure is a turn of direction, not a new thing.
- [और फिर — अधूरा शब्द (Aur Phir)](themes/aur-phir.md) — the story refuses an ending; a child's question is its last line.

### [Arcs](arcs/) — how people (or the world) change

- [अर्जुन — फ़िक्सर से खोजी (Arjun: Fixer to Searcher)](arcs/arjun-fixer-to-searcher.md) — from the doer to the man who finds his own miscount.
- [दादी — कहनेवाली से पढ़नेवाली (Dadi: Narrator to Reader)](arcs/dadi-narrator-becomes-reader.md) — the narrator who finally reads.
- [ग्यारह कहाँ गए (The Inherited Sentence)](arcs/gyarah-kahan-gaye.md) — the cashier's joke passed down and released.
- [पचास साल पुराना वादा (The Fifty-Year Promise)](arcs/fifty-year-promise.md) — the 1977 reading-promise kept at last.

## Authoring a card

Copy the matching skeleton from [`_meta/templates/`](_meta/templates/) into the right section
folder, fill it in, cite the scenes under **Appears In**, and set `verified_against` to the
current commit. Keep it under 50 lines — if it's growing, you're restating the manuscript.

See [`_meta/example-character.md`](_meta/example-character.md) for a worked example (a
non-canonical teaching fixture — your `characters/` folder starts empty for your own cast).
