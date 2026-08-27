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
