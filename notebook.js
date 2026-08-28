/* ===========================================================
   The notebook: one poem to a page, turned by peeling the corner.

   Why a peel rather than a book-style flip: a real flipbook needs
   pages of a fixed size, and these poems are 14 lines and 40 lines.
   Anything that assumes a fixed page either shrinks the long poem
   past reading or pushes it off the screen. Peeling the corner keeps
   the paper gesture and lets each page be exactly as long as its poem.

   Pages are already in the HTML, so if this script never runs the
   poems are all still there, one after another. Nothing is hidden
   until JavaScript is confirmed working.
   =========================================================== */

const TURN_MS = 500;

function initNotebook() {
  const book = document.querySelector('.notebook');
  if (!book) return;

  const leaves = Array.from(book.querySelectorAll('.leaf'));
  if (leaves.length < 2) return;

  const prevBtn = document.querySelector('[data-leaf-prev]');
  const nextBtn = document.querySelector('[data-leaf-next]');
  const where = document.querySelector('.leaf-where');
  const indexBtns = Array.from(document.querySelectorAll('.leaf-index button'));

  let at = 0;
  let busy = false;

  function render(animate) {
    leaves.forEach((leaf, i) => {
      leaf.hidden = i !== at;
      leaf.classList.remove('turning');
      if (i === at && animate) {
        leaf.classList.remove('arriving');
        void leaf.offsetWidth;          // restart the animation
        leaf.classList.add('arriving');
      }
    });

    if (prevBtn) prevBtn.disabled = at === 0;
    if (nextBtn) nextBtn.disabled = at === leaves.length - 1;

    if (where) {
      where.innerHTML = '';
      const label = document.createElement('b');
      label.textContent = leaves[at].dataset.firstLine || '';
      where.append(
        document.createTextNode(t('nb.where') + ' ' + (at + 1) + ' ' + t('nb.of') + ' ' + leaves.length + ' — '),
        label
      );
    }

    indexBtns.forEach((b, i) => {
      b.setAttribute('aria-current', i === at ? 'true' : 'false');
    });
  }

  function go(to, viaPeel) {
    if (busy) return;
    const target = Math.max(0, Math.min(leaves.length - 1, to));
    if (target === at) return;

    const leaving = leaves[at];

    if (!viaPeel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      at = target;
      render(true);
      return;
    }

    busy = true;
    leaving.classList.add('turning');
    window.setTimeout(() => {
      leaving.classList.remove('turning');
      at = target;
      render(true);
      busy = false;
    }, TURN_MS);
  }

  // ----- dragging the corner -----
  leaves.forEach((leaf, i) => {
    const corner = leaf.querySelector('.corner');
    if (!corner) return;

    let startX = 0;
    let dragging = false;

    corner.addEventListener('pointerdown', e => {
      if (i === leaves.length - 1) return;      // nothing behind the last page
      dragging = true;
      startX = e.clientX;
      leaf.classList.add('is-dragging');
      corner.setPointerCapture(e.pointerId);
    });

    corner.addEventListener('pointermove', e => {
      if (!dragging) return;
      // Peeling means pulling the corner leftwards, across the page.
      const pulled = Math.max(0, startX - e.clientX);
      const size = Math.min(46 + pulled * 1.1, 240);
      corner.style.width = size + 'px';
      corner.style.height = size + 'px';
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      leaf.classList.remove('is-dragging');
      const pulled = Math.max(0, startX - e.clientX);
      corner.style.width = '';
      corner.style.height = '';
      if (pulled > 90) go(at + 1, true);
    }

    corner.addEventListener('pointerup', endDrag);
    corner.addEventListener('pointercancel', endDrag);
    corner.addEventListener('click', e => {
      // A plain click on the corner turns the page too, for anyone
      // who would rather tap than drag.
      if (Math.abs(e.detail) && !dragging) go(at + 1, true);
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', () => go(at - 1, true));
  if (nextBtn) nextBtn.addEventListener('click', () => go(at + 1, true));
  indexBtns.forEach((b, i) => b.addEventListener('click', () => go(i, true)));

  // ----- swiping anywhere on the page, for touch -----
  let swipeX = null;
  book.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') return;
    if (e.target.closest('.corner')) return;
    swipeX = e.clientX;
  });
  book.addEventListener('pointerup', e => {
    if (swipeX === null) return;
    const dx = e.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) < 60) return;
    go(dx < 0 ? at + 1 : at - 1, true);
  });

  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowRight') go(at + 1, true);
    if (e.key === 'ArrowLeft') go(at - 1, true);
  });

  // ----- deep links -----
  // issues/summer-2026.html#karanlikta must open the notebook already
  // standing on that poem, not on page one.
  function openFromHash() {
    const id = window.location.hash.replace('#', '');
    if (!id) return false;
    const found = leaves.findIndex(l => l.id === id);
    if (found === -1) return false;
    at = found;
    return true;
  }

  openFromHash();
  render(false);
  window.addEventListener('hashchange', () => { if (openFromHash()) render(true); });

  document.addEventListener('pulse:lang', () => render(false));
}

document.addEventListener('DOMContentLoaded', initNotebook);
