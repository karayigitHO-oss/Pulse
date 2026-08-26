// Pulse rule generator: irregular, beat-like tick spacing.
// Deliberately not evenly spaced — a real pulse isn't a ruler.
//
// The same eighteen beats are drawn everywhere the rule appears, so it
// reads as one signature repeating rather than as random noise.
function buildPulse(el) {
  const widths = [10,14,9,22,11,15,8,26,12,10,18,9,13,24,10,16,9,12];
  widths.forEach(w => {
    const tick = document.createElement('span');
    tick.style.marginRight = w + 'px';
    tick.style.height = (8 + (w % 6)) + 'px';
    el.appendChild(tick);
  });
}
document.querySelectorAll('.pulse-rule').forEach(buildPulse);
