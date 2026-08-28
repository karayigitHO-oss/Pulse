// Pulse rule generator: irregular, beat-like tick spacing.
// Deliberately not evenly spaced — a real pulse isn't a ruler.
//
// The same eighteen beats are drawn everywhere the rule appears, so it
// reads as one signature repeating rather than as random noise.
//
// On a page that declares a season (see .season-* in style.css), the
// ticks are coloured across that season's three stops instead of plain
// brass — gold through orange into deep red for Summer 2026. That is
// the Coptic stitching along the spine of one of Yalım's notebooks:
// the same gesture the divider was always making.

const PULSE_BEATS = [10,14,9,22,11,15,8,26,12,10,18,9,13,24,10,16,9,12];

function hexToRgb(value) {
  let h = (value || '').trim().replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ];
}

// Returns the season's three colours, or null on pages with no season.
function seasonStops(el) {
  const cs = getComputedStyle(el);
  const stops = ['--season-1', '--season-2', '--season-3']
    .map(name => hexToRgb(cs.getPropertyValue(name)));
  return stops.every(Boolean) ? stops : null;
}

function mix(a, b, t) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t));
}

// t runs 0 to 1 across the whole rule; the middle colour sits at 0.5.
function sampleStops(stops, t) {
  const rgb = t < 0.5
    ? mix(stops[0], stops[1], t * 2)
    : mix(stops[1], stops[2], (t - 0.5) * 2);
  return 'rgb(' + rgb.join(',') + ')';
}

function buildPulse(el) {
  const stops = seasonStops(el);
  const last = PULSE_BEATS.length - 1;
  PULSE_BEATS.forEach((beat, i) => {
    const tick = document.createElement('span');
    tick.style.marginRight = beat + 'px';
    tick.style.height = (8 + (beat % 6)) + 'px';
    if (stops) {
      tick.style.background = sampleStops(stops, i / last);
      tick.style.opacity = '0.9';
    }
    el.appendChild(tick);
  });
}

document.querySelectorAll('.pulse-rule').forEach(buildPulse);

/* ===========================================================
   The spine.

   Each stitch is drawn as its own element rather than cut out of one
   repeating gradient, for two reasons: a gradient repeats at a fixed
   period, which reads as machine-ruled, and it cannot give each band
   its own shading. Here every stitch gets a height, a gap and a
   gradient of its own — lit on one edge, shadowed on the other — so
   the thread sits on the paper like a cord.

   The gaps are left empty on purpose. The spine's background is paper,
   so a gap is the edge of the sheets showing between stitches.
   =========================================================== */

// height, gap — uneven on purpose, the same refusal of the ruler the
// pulse rule makes.
const SPINE_STITCHES = [
  [19, 5], [12, 4], [23, 7], [15, 4], [27, 5], [13, 7],
  [20, 4], [11, 6], [25, 5], [16, 7], [21, 4], [14, 6],
  [24, 5], [12, 7], [18, 4], [26, 6]
];

const SPINE_COLOURS = ['--gold', '--orange', '--deep-red'];

function shade(rgb, towards, amount) {
  return rgb.map(v => Math.round(v + (towards - v) * amount));
}

/* The palette colours are chosen to carry links and labels on a dark
   background, so they are saturated and bright. Thread is not: it is
   dyed cotton seen in ordinary light, and at full strength it reads as
   plastic ribbon rather than binding. So the spine pulls each colour
   towards a warm grey before drawing it, and keeps the lit and
   shadowed edges close together — matte, not glossy. Nothing else on
   the site is affected; this dulling lives only in the spine. */
const THREAD_GREY = [124, 108, 92];
const THREAD_MATTE = 0.34;      // how far towards that grey
const THREAD_RELIEF = 0.20;     // how far the edges are lit and shadowed

function matte(rgb) {
  return rgb.map((v, i) => Math.round(v + (THREAD_GREY[i] - v) * THREAD_MATTE));
}

function buildSpine(el) {
  const cs = getComputedStyle(document.documentElement);
  const colours = SPINE_COLOURS
    .map(name => hexToRgb(cs.getPropertyValue(name)))
    .filter(Boolean);
  if (!colours.length) return;

  const horizontal = window.matchMedia('(max-width: 700px)').matches;
  const run = horizontal ? window.innerWidth : window.innerHeight;

  el.textContent = '';

  let laid = 0;
  let i = 0;
  while (laid < run + 80) {
    const [size, gap] = SPINE_STITCHES[i % SPINE_STITCHES.length];
    const base = matte(colours[i % colours.length]);

    // Lit edge, body, shadowed edge — across the width of the binding,
    // following the same curve as the paper underneath it. The relief
    // is shallow on purpose: thread catches a little light, not a lot.
    const lit = 'rgb(' + shade(base, 255, THREAD_RELIEF).join(',') + ')';
    const body = 'rgb(' + base.join(',') + ')';
    const dark = 'rgb(' + shade(base, 0, THREAD_RELIEF).join(',') + ')';

    const stitch = document.createElement('span');
    if (horizontal) {
      stitch.style.width = size + 'px';
      stitch.style.marginRight = gap + 'px';
      stitch.style.background =
        'linear-gradient(180deg, ' + lit + ' 0%, ' + body + ' 46%, ' + dark + ' 100%)';
    } else {
      stitch.style.height = size + 'px';
      stitch.style.marginBottom = gap + 'px';
      stitch.style.background =
        'linear-gradient(90deg, ' + lit + ' 0%, ' + body + ' 46%, ' + dark + ' 100%)';
    }
    el.appendChild(stitch);

    laid += size + gap;
    i++;
  }
}

function drawSpines() {
  document.querySelectorAll('.spine').forEach(buildSpine);
}

drawSpines();

// The band has to refill when the window changes size, and swap
// direction when it crosses the point where it lies down.
let spineTimer;
window.addEventListener('resize', () => {
  window.clearTimeout(spineTimer);
  spineTimer = window.setTimeout(drawSpines, 150);
});
