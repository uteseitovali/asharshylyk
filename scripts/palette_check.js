// Palette acceptance check (node scripts/palette_check.js [--gen]).
// Reads PALETTE from app.js and checks, for both themes:
//  1. WCAG contrast of every scale colour with the map background >= 3:1;
//  2. region border vs every fill (border colour = map background, so the same number), reported;
//  3. neighbouring classes stay distinguishable for normal vision, protanopia and deuteranopia:
//     CIE76 dE >= 8 (Machado, Oliveira & Fernandes 2009, severity 1.0, applied in linear RGB);
//  4. marks (camps, uprisings, labels) differ from every scale colour (dE >= 10, all three visions).
// --gen prints proposed ramps generated in OKLCH (used once to build PALETTE; kept for reproducibility).
const fs = require("fs");
const path = require("path");

const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
const toLin = c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
const fromLin = c => c <= .0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - .055;
const clamp = x => Math.min(1, Math.max(0, x));
const rgb2hex = rgb => "#" + rgb.map(c => Math.round(clamp(c) * 255).toString(16).padStart(2, "0")).join("");
const lum = h => { const [r, g, b] = hex2rgb(h).map(toLin); return .2126 * r + .7152 * g + .0722 * b; };
const contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };

// CIELAB (D65)
function lab(lin) {
  const [r, g, b] = lin, X = (.4124 * r + .3576 * g + .1805 * b) / .95047, Y = .2126 * r + .7152 * g + .0722 * b, Z = (.0193 * r + .1192 * g + .9505 * b) / 1.08883;
  const f = t => t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116, fx = f(X), fy = f(Y), fz = f(Z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
const CVD = {
  normal: null,
  protan: [[.152286, 1.052583, -.204868], [.114503, .786281, .099216], [-.003882, -.048116, 1.051998]],
  deutan: [[.367322, .860646, -.227968], [.280085, .672501, .047413], [-.011820, .042940, .968881]]
};
const sim = (h, kind) => { const l = hex2rgb(h).map(toLin), M = CVD[kind]; return M ? M.map(r => clamp(r[0] * l[0] + r[1] * l[1] + r[2] * l[2])) : l; };
const dE = (a, b, kind) => { const p = lab(sim(a, kind)), q = lab(sim(b, kind)); return Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); };

// OKLCH -> sRGB hex (for --gen)
function oklch(L, C, h) {
  const a = C * Math.cos(h * Math.PI / 180), b = C * Math.sin(h * Math.PI / 180);
  const l = (L + .3963377774 * a + .2158037573 * b) ** 3, m = (L - .1055613458 * a - .0638541728 * b) ** 3, s = (L - .0894841775 * a - 1.2914855480 * b) ** 3;
  const lin = [4.0767416621 * l - 3.3077115913 * m + .2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - .3413193965 * s, -.0041960863 * l - .7034186147 * m + 1.7076147010 * s];
  // reduce chroma until in gamut
  if (lin.some(c => c < -1e-4 || c > 1 + 1e-4)) return C > .005 ? oklch(L, C - .005, h) : rgb2hex(lin.map(c => fromLin(clamp(c))));
  return rgb2hex(lin.map(c => fromLin(clamp(c))));
}

if (process.argv.includes("--gen")) {
  const N = 6, lerp = (a, b, t) => a + (b - a) * t;
  // light: low = lighter (L .66, contrast >= 3:1 with #fffdf8), high = dark; dark: low = muted (L .55), high = light & saturated
  const spec = { blue: 255, orange: 48, violet: 300 };
  for (const [name, h] of Object.entries(spec)) {
    const light = [...Array(N)].map((_, i) => oklch(lerp(.655, .30, i / (N - 1)), lerp(.10, .14, Math.sin(Math.PI * i / (N - 1))), h));
    const dark = [...Array(N)].map((_, i) => oklch(lerp(.56, .92, i / (N - 1)), lerp(.045, .13, i / (N - 1)) * (i === N - 1 ? .75 : 1), h));
    console.log(name, "light", JSON.stringify(light), "\n", name, "dark ", JSON.stringify(dark));
  }
  // negative side orange-brown (not red: red is the uprisings' mark colour), positive side blue
  const side = (h, Ls, Cs) => Ls.map((L, i) => oklch(L, Cs[i], h)), NEG = +(process.argv[3] || 62);
  console.log("diverge light", JSON.stringify({ neg: side(NEG, [.33, .43, .53], [.10, .12, .11]), mid: oklch(.62, 0, 0), pos: side(255, [.53, .43, .33], [.09, .12, .13]) }));
  console.log("diverge dark ", JSON.stringify({ neg: side(NEG, [.88, .77, .66], [.07, .12, .13]), mid: oklch(.56, 0, 0), pos: side(255, [.66, .77, .88], [.10, .10, .06]) }));
  process.exit(0);
}

// ---- read PALETTE from app.js ----
const app = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
const i = app.indexOf("const PALETTE = "), j = app.indexOf("\n};", i);
if (i < 0 || j < 0) throw new Error("PALETTE not found in app.js");
const PALETTE = eval("(" + app.slice(i + "const PALETTE = ".length, j + 2) + ")");

if (process.argv[2] === "--try") { // node scripts/palette_check.js --try "#hex" ...: min dE of candidate marks to all scale colours
  for (const c of process.argv.slice(3)) console.log(c, ["light", "dark"].map(th => {
    const T = PALETTE[th], all = [...Object.values(T.ramps).flat(), ...T.diverge.neg, T.diverge.mid, ...T.diverge.pos];
    return th + " " + Math.min(...["normal", "protan", "deutan"].flatMap(k => all.map(s => dE(c, s, k)))).toFixed(1) + " (contrast " + contrast(c, T.mapBg).toFixed(2) + ")";
  }).join("  "));
  process.exit(0);
}
if (process.argv[2] === "--search") { // node scripts/palette_check.js --search <hueFrom> <hueTo>: best mark colour per theme
  const [h0, h1] = [+(process.argv[3] || 10), +(process.argv[4] || 40)];
  for (const th of ["light", "dark"]) {
    const T = PALETTE[th], all = [...Object.values(T.ramps).flat(), ...T.diverge.neg, T.diverge.mid, ...T.diverge.pos];
    let best = null;
    for (let L = .45; L <= .8; L += .01) for (let C = .12; C <= .26; C += .01) for (let h = h0; h <= h1; h += 2) {
      const c = oklch(L, C, h);
      if (contrast(c, T.mapBg) < 3) continue;
      const m = Math.min(...["normal", "protan", "deutan"].flatMap(k => all.map(s => dE(c, s, k))));
      (!best || m > best.m) && (best = { c, m, L: L.toFixed(2), C: C.toFixed(2), h });
    }
    console.log(th, JSON.stringify(best));
  }
  process.exit(0);
}
let fails = 0;
const row = (...c) => console.log("| " + c.join(" | ") + " |");
for (const theme of ["light", "dark"]) {
  const T = PALETTE[theme], bg = T.mapBg, border = T.border;
  console.log(`\n### ${theme}: map background ${bg}, region border ${border}\n`);
  row("scale", "colours (low → high)", "min contrast with bg", "min contrast border/fill", "min neighbour dE normal / protan / deutan");
  row("---", "---", "---", "---", "---");
  const scales = { ...T.ramps, diverge: [...T.diverge.neg, T.diverge.mid, ...T.diverge.pos] };
  for (const [name, cols] of Object.entries(scales)) {
    const cBg = Math.min(...cols.map(c => contrast(c, bg))), cBr = Math.min(...cols.map(c => contrast(c, border)));
    const nb = ["normal", "protan", "deutan"].map(k => Math.min(...cols.slice(1).map((c, n) => dE(c, cols[n], k))));
    const ok = cBg >= 3 && nb.every(x => x >= 8);
    ok || fails++;
    row(name, cols.join(" "), cBg.toFixed(2) + (cBg >= 3 ? "" : " ✗"), cBr.toFixed(2), nb.map(x => x.toFixed(1)).join(" / ") + (nb.every(x => x >= 8) ? "" : " ✗"));
  }
  // marks vs every scale colour
  const all = Object.values(scales).flat();
  for (const [mk, c] of Object.entries({ ...PALETTE.marks, label: T.label })) {
    const m = Math.min(...["normal", "protan", "deutan"].flatMap(k => all.map(s => dE(c, s, k))));
    const ok = m >= 10; ok || fails++;
    console.log(`mark ${mk} ${c}: min dE to any scale colour (3 visions) = ${m.toFixed(1)}${ok ? "" : " ✗"}`);
  }
  console.log(`no data: hatch pattern (${T.noData.line} lines on ${T.noData.bg}); contrast of lines with background ${contrast(T.noData.line, bg).toFixed(2)}`);
}
console.log(fails ? `\nFAIL: ${fails} check(s)` : "\nOK: all palette checks pass");
process.exitCode = fails ? 1 : 0;
