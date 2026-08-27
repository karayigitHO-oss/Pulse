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

The base palette — ink background, vellum cards, brass, ember — is fixed
and applies everywhere.

On top of that, **each season has its own three accent colours**, chosen
at the *end* of that season once it is clear what actually shaped it,
rather than picked in advance. They colour the tick dividers, the band
under the issue title, and the issue number. Nothing else.

Summer 2026 is gold `#dca91d`, orange `#d3814f`, deep red `#9d041a`, taken
from a notebook Yalım made by hand, whose own colour came from 3 Katip
Çelebi Sk., the Ankara building the NOM Atölye workshop moved into.

Fall, Winter and Spring stay open the same way until each one closes.

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

## Still to do

- **The English/Turkish toggle.** Not built yet, waiting on the Turkish
  version of the homepage paragraph, which the group is writing rather
  than translating mechanically. Navigation, labels and prose get full
  parallel text; poems never do.
- **Kaan to check the line breaks** in both poems. They were reconstructed
  from capitalisation, since the text arrived as continuous prose.
- **Kaan to confirm `geçenin`** in the ninth line of *Karanlıkta* — it may
  be `gecenin`, as in line two, or may be deliberate.
- June and July material for Issue 1.
- Notebook photographs into `images/`, with Yalım's explicit okay.
- Second Materials card is still a placeholder — no title, no photo.
- The two incoming MFA poets' names.
- Fall 2026's accent colour, at the end of Fall.
- Confirm whether Mustafa Gürkan Gürler is the same Ankara artist attached
  to Project 2's field-recording animation.
