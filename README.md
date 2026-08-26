# Pulse — how the site is put together

Plain HTML and CSS. Nothing to install, nothing to build, nothing to run.
To see the site, double-click `index.html`. To put it online, upload the
whole folder as-is.

## What each file is

| File | What it holds |
|---|---|
| `index.html` | The homepage: the opening words, the **two newest gatherings in full**, Materials, and the Colophon. |
| `gatherings.html` | The archive — every gathering ever, one line each, linking to its own page. |
| `gatherings/` | One file per gathering. This is where the actual pieces live. |
| `gatherings/_template.html` | A blank gathering to copy. Start here every time. |
| `style.css` | Every visual decision on the site — colours, type, spacing. |
| `pulse.js` | Draws the tick-mark dividers. |

`specimen.html` — the card that shows all four scripts at once — is kept
out of this folder on purpose, in `Desktop/pulse-drafts`, until Auwn and
Avia have confirmed its Urdu and Bangla lines. It belongs back here once
they have.

You should never need to open `style.css` or `pulse.js` to add a piece.

## Adding a new gathering

1. **Copy** `gatherings/_template.html` and rename the copy to something
   short, lowercase, no spaces — `winter-light.html`, `sozcukler.html`.
   Keep it in the `gatherings/` folder.
2. **Fill in the five marked sections** inside it. They're numbered
   `1 of 5` through `5 of 5` and each says what it wants.
3. **Add it to the archive:** open `gatherings.html`, copy one of the
   existing `<li class="archive-item">` blocks, paste it at the top of
   the list, and change the words and the link.
4. **Feature it on the homepage:** open `index.html`, find the marked
   Gatherings section, paste the new card at the top, and delete the
   card that's now third. That older piece still has its own page — only
   the homepage copy goes away.

Or just ask Claude to do all four, which is the intended way.

## The one rule about languages

**The language a piece was written in always comes first.** Translations
follow after it. Nothing about the styling marks which is the original —
the order does, and the credit line says it in words:

> Written in Urdu, 12.03 · translated into English for Pulse

Each language block carries `lang="tr"`, `lang="en"`, `lang="ur"` or
`lang="bn"`. That one attribute is what selects the right font and the
right line spacing for the script. Urdu blocks also need `dir="rtl"` to
read right-to-left. Don't change those; do change everything around them.

Add or remove language blocks freely — the grid fits however many are
actually there. A piece can have one language or five.

## Two things worth knowing

**The homepage duplicates two gatherings.** The two newest exist both in
`index.html` and in their own file. Fix a typo in one and you must fix it
in the other. This is unavoidable without a build step; it's kept to two
so that the duplication clears itself as new pieces arrive.

**The fonts come from Google.** Urdu and Bangla need Noto Nastaliq Urdu
and Noto Serif Bengali, which load over the internet. Offline, those
scripts fall back to whatever the reader's device has.

Nastaliq is a heavy file, so it's only loaded where it might be needed.
`index.html` and `_template.html` load it; a gathering page that has no
Urdu or Bangla in it doesn't. The homepage always loads
it even when the featured pieces don't use it, because a piece in any
script could be featured there — and a missing font would go wrong
quietly rather than obviously.

If you ever copy a gathering page and add Urdu or Bangla to it, the font
line at the top needs to be the longer one from `_template.html`. Claude
will handle this; it's noted here in case you're ever doing it by hand.

## How Materials cards reach someone

Two different routes, on purpose:

- **NOM Atölye's own work** links straight to their Shopier shop. They
  already sell there, so an inquiry email would only add a step.
- **Everything else** — art collaborators, anyone without a shop — uses
  `poeticalbridge@gmail.com`, a dedicated address rather than anyone's
  personal inbox. Use it for any future non-NOM card too.

## Still to do

- **Confirm `poeticalbridge@gmail.com` is live and someone is watching it.**
  The site publishes it as the inquiry address, so until the account exists
  and is being read, inquiries are lost silently.
- Auwn and Avia to check the Urdu and Bangla lines in `specimen.html`, which
  is waiting in `Desktop/pulse-drafts` until they do.
- Second Materials card is still a placeholder — no title, no photo.
- The Bridge has a note but no piece attached yet.
- Both Materials cards need real photographs in place of the striped swatches.
- The hero line reads "**Objects:** hand-bound" while the section it points
  at is called Materials.
