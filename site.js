/* ===========================================================
   Panels and the language menu.

   Tabs switch the visible panel on the spot: no reload, no scrolling
   to a section, and the address bar is left alone.

   Incoming deep links still have to land in the right place, so a
   hash arriving from outside is read once on load and mapped to a
   panel. Old links like index.html#materials and index.html#colophon
   keep working.
   =========================================================== */

const PANEL_FOR_HASH = {
  '': 'home',
  '#home': 'home',
  '#gatherings': 'gatherings',
  '#materials': 'materials',
  '#colophon': 'collaborators',
  '#collaborators': 'collaborators'
};

function showPanel(name, opts) {
  const panels = document.querySelectorAll('.panel');
  if (!panels.length) return;
  let matched = false;

  panels.forEach(p => {
    const isTarget = p.dataset.panel === name;
    p.hidden = !isTarget;
    if (isTarget) matched = true;
  });

  // An unknown name would leave every panel hidden, so fall back home.
  if (!matched) {
    document.querySelector('.panel[data-panel="home"]').hidden = false;
    name = 'home';
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.setAttribute('aria-selected', tab.dataset.panel === name ? 'true' : 'false');
  });

  if (!opts || !opts.keepScroll) window.scrollTo(0, 0);
  document.dispatchEvent(new CustomEvent('pulse:panel', { detail: { panel: name } }));
}

function initPanels() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => showPanel(tab.dataset.panel));
  });

  const home = document.querySelector('[data-go-home]');
  if (home) {
    home.addEventListener('click', e => { e.preventDefault(); showPanel('home'); });
  }

  document.querySelectorAll('[data-goto-panel]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showPanel(el.dataset.gotoPanel);
    });
  });

  const hash = window.location.hash;
  showPanel(PANEL_FOR_HASH[hash] !== undefined ? PANEL_FOR_HASH[hash] : 'home', { keepScroll: true });
}

function initLangMenu() {
  const btn = document.querySelector('.lang-btn');
  const menu = document.querySelector('.lang-menu');
  if (!btn || !menu) return;

  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  const open = () => { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); };

  btn.addEventListener('click', e => {
    e.stopPropagation();
    menu.hidden ? open() : close();
  });

  menu.addEventListener('click', e => {
    const choice = e.target.closest('button[data-lang]');
    if (!choice) return;
    applyLanguage(choice.dataset.lang);
    close();
  });

  document.addEventListener('click', e => {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang());
  initPanels();
  initLangMenu();
});
