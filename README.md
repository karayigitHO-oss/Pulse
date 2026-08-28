# Pulse — how the site is put together

Plain HTML and CSS. Nothing to install, nothing to build, nothing to run.
To see the site, double-click `index.html`. To put it online, upload the
whole folder as-is.

## What each file is

| File | What it holds |
|---|---|
| `index.html` | The homepage: the opening text, a five-line excerpt from Kaan's poem, the current issue, Materials, and the Colophon. |
| `gatherings.html` | Every issue, newest first. |
| `issues/` | One file per issue — one season each. |
| `issues/_template.html` | A blank issue to copy. Start here each season. |
| `images/` | Photographs. See the note inside it. |
| `style.css` | Every visual decision on the site. |
| `pulse.js` | Draws the tick-mark dividers, in the season's colours. |

You should never need to open `style.css` or `pulse.js` to add a piece.

`specimen.html` — the card showing all four scripts at once — is kept out
of this folder on purpose, in `Desktop/pulse-drafts`, until Auwn and Avia
have confirmed its Urdu and Bangla lines. It belongs back here once they
have.

## How gatherings are organised

The group meets every other Sunday. Meetings are gathered **by season and
theme**, four issues a year, closer to a small magazine than a dated
archive.

| Season | Months |
|---|---|
| Winter | December – February |
| Spring | March – May |
| Summer | June – August |
| Fall | September – November |

- **Issue 1 — Summer 2026, The Poetics of Relationality.** Two pieces by
  Kaan Gürgan. June and July still to be delivered.
- **Issue 2 — Fall 2026, Bridge.** Tentative, not locked in. Deliberately
  not listed on the site until it is.

## Adding a piece to the current issue

Open the issue file in `issues/`, copy an existing `<article>`, and change
the words. Give it a new `id` — that is what makes a piece linkable on its
own, as `issues/summer-2026.html#the-id`.

## Starting a new season

1. Copy `issues/_template.html` and rename it — `fall-2026.html`.
2. Fill in the six marked sections, numbered `1 of 6` through `6 of 6`.
3. Add a `.season-fall-2026` block to `style.css` with that season's three
   colours, and put the matching class on `<body>`.
4. Add the issue to `gatherings.html`, and point the homepage at it.

Or just ask Claude to do all four, which is the intended way.

## Colour

Summer 2026's colours are now the site's **permanent identity**, not a
rotating seasonal skin. Background `#1c1210`, a warm near-black with a
red-brown undertone. Vellum cards stay `#ede3ce`. The accent is one
three-colour system used everywhere — links, dividers, the pulse-rule
motif — replacing the old brass and ember:

| | | Contrast on the background |
|---|---|---|
| Gold | `#dca91d` | 8.4 : 1 — safe for text |
| Orange | `#d3814f` | 6.0 : 1 — safe for text |
| Deep red | `#9d041a` | **2.2 : 1 — fails; decorative only** |

**Deep red must never be used for words on the dark background.** It is
for rules, gradients and shapes. On vellum it is fine, because the paper
is light — which is where it already appears, in the stitched thread and
the language tags.

Source, on the record: a notebook Yalım made by hand, whose own colour
came from 3 Katip Çelebi Sk., the Ankara building the NOM Atölye
workshop moved into.

Later seasons still get **their own accent, scoped to their own
gathering page**, layered on top of this base — standing out against it
the way Summer's colours once stood out against the old neutral one.
Summer 2026's page needs no accent of its own any more, since the whole
site now carries its colours. Fall 2026 gets one at the end of Fall.

## Poem titles

Poems carry no invented titles. The first poem of Summer 2026 is
**untitled** and is referred to by its first line, *"Buraya birkaç sözcük
bırakıyorum"* — which is how untitled poems are cited anyway. The name
"Sözcükler" was assigned in an earlier session, was never Kaan's, and has
been removed from every visible heading.

*Karanlıkta* keeps its heading, because that one is the poet's own. One
titled poem beside one untitled poem is ordinary in poetry.

The `#sozcukler` in a link is a technical identifier, not a title, so it
stays and existing links keep working.

Each poem is followed by a single attribution line in the form the poet
used himself: `Kaan, NOM, 09.08.2026`. The short form is deliberate. The
roster elsewhere uses full names.

## The one rule about languages

**The language a piece was written in always comes first.** Translations
follow after it. Nothing about the styling marks which is the original —
the order does, and the credit line says it in words.

Poems stay in their original language. They are never translated
mechanically when the site's language changes. A translation happens only
as a deliberate choice, one poem at a time, credited to the person who
made it.

Each language block carries `lang="tr"`, `lang="en"`, `lang="ur"` or
`lang="bn"`. That one attribute selects the right font and line spacing.
Urdu blocks also need `dir="rtl"`. Add or remove blocks freely — the grid
fits however many are actually there.

If Sözcükler is ever translated into English, **alıcı** and **alan**
resolve as *taker* throughout, not *receiver*:

> Bir alıcısı çıkar belki → maybe a taker turns up
> Peki, alan ne yapar? → well, what does the taker do?

## How Materials cards reach someone

- **NOM Atölye's own work** links straight to their Shopier shop. They
  already sell there, so an inquiry email would only add a step.
- **Everything else** uses `poeticalbridge@gmail.com`, a dedicated address
  rather than anyone's personal inbox.

## Redesign: what is done and what is not

From the August 27 build plan, in its own suggested order:

| | Step | State |
|---|---|---|
| 1 | Base palette, site-wide | **done** |
| 2 | Tab navigation, instant panels | not started |
| 3 | Per-poem pages with page-curl | not started |
| 4 | Language box, four languages | not started |
| 5 | Illustration and plain wordmark | **done** |

Also done: the homepage opening poem in both languages, the updated
orientation line, removal of the old Gatherings preview, poem titling,
and the attribution lines.

## Still to do

- **The English/Turkish toggle.** Not built yet, waiting on the Turkish
  version of the homepage paragraph, which the group is writing rather
  than translating mechanically. Navigation, labels and prose get full
  parallel text; poems never do.
- **The first poem's full English translation does not exist.** The build
  plan assumed it was recoverable from the deleted `gatherings/sozcukler.html`
  in git history. It is not: both versions of that file hold the same
  9-line crop with a `…` in the middle, and the word "taker" appears
  nowhere in any past version. The full English was never written. So the
  first poem has no translation page, and per the plan Claude has not
  written one.
- **Kaan to confirm `geçenin`** in the twelfth line of *Karanlıkta* — it
  may be `gecenin`, as in line two, or may be deliberate. Left as written.
- **Look at `#1c1210` against the vellum cards.** Measured contrast is
  14.4 : 1, so the cards read clearly as paper, but a number is not the
  same as seeing it.
- June and July material for Issue 1.
- Notebook photographs into `images/`, with Yalım's explicit okay.
- Second Materials card is still a placeholder — no title, no photo.
- The two incoming MFA poets' names.
- Fall 2026's accent colour, at the end of Fall.
- Confirm whether Mustafa Gürkan Gürler is the same Ankara artist attached
  to Project 2's field-recording animation.
