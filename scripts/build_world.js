// Builds the world map basemap (window.__WORLD__ in data.js).
//   npm i --no-save --prefix scripts/.tools mapshaper d3-geo   (once; scripts/.tools is git-ignored)
//   node scripts/build_world.js [sourceDir]
// Sources (downloaded into sourceDir, default scripts/.cache, if missing):
//   Natural Earth 1:50m admin_0_countries, lakes, lakes_historic (Aral Sea before it shrank) — regional view;
//   Natural Earth 1:110m admin_0_countries, lakes — "whole world" view;
//   geoBoundaries gbOpen UZB ADM1 (Republic of Karakalpakstan, modern borders, dashed outline);
//   our own 1939 oblast grid (window.__KZ_HIST__["1939"], 12 oblasts) dissolved into the outline of the Kazakh ASSR
//   (clipped to Natural Earth land, so it stops at the Caspian shore).
// Every layer is clipped in longitude/latitude first and projected after that:
//   regional view: Albers equal-area conic, central meridian 65°E, standard parallels 28° and 58°N (sphere);
//   whole world: Equal Earth, central meridian 65°E (d3-geo cuts polygons at the 115°W seam).
// Output paths are relative SVG commands on an integer grid (q units per projection unit); the page draws them in
// a group scaled by 1/q, so points and arrows from app.js (same projection formulas, unit scale) sit on top of them.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const tools = [path.join(__dirname, ".tools", "node_modules"), process.env.TOOLS || root];
const need = m => { try { return require(m); } catch (e) { return require(require.resolve(m, { paths: tools })); } };
const mapshaper = need("mapshaper"), d3 = need("d3-geo");

const SRC = path.resolve(process.argv[2] || path.join(__dirname, ".cache"));
const NE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/";
const FILES = {
  c50: NE + "ne_50m_admin_0_countries.geojson",
  l50: NE + "ne_50m_lakes.geojson",
  h50: NE + "ne_50m_lakes_historic.geojson",
  c110: NE + "ne_110m_admin_0_countries.geojson",
  l110: NE + "ne_110m_lakes.geojson",
  uzb: "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/UZB/ADM1/geoBoundaries-UZB-ADM1_simplified.geojson"
};
const REGION = { bbox: [0, 5, 140, 78], view: [20, 20, 120, 65], proj: { lon0: 65, p1: 28, p2: 58, p0: 45 }, q: 1e4 };
const WORLD = { proj: { lon0: 65 }, q: 2e3 };

async function load(key) {
  const f = path.join(SRC, path.basename(FILES[key]));
  if (!fs.existsSync(f)) {
    fs.mkdirSync(SRC, { recursive: true });
    const r = await fetch(FILES[key]);
    if (!r.ok) throw new Error(`download failed (${r.status}): ${FILES[key]}`);
    fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
  }
  return JSON.parse(fs.readFileSync(f, "utf8"));
}

// mapshaper on in-memory GeoJSON
async function ms(cmd, gj, inOpts = "", files = {}) {
  const out = await mapshaper.applyCommands(`-i in.json ${inOpts} ${cmd} -o out.json format=geojson precision=0.00001`, { "in.json": gj, ...files });
  const gj2 = JSON.parse(out["out.json"]);
  // a layer without attributes comes back as a GeometryCollection
  return gj2.features ? gj2 : { type: "FeatureCollection", features: (gj2.geometries || []).map(g => ({ type: "Feature", properties: {}, geometry: g })) };
}

// same formulas as albersFor() and equalEarth() in app.js
const D2R = Math.PI / 180;
function albersFor({ lon0, p1, p2, p0 }) {
  const n = (Math.sin(p1 * D2R) + Math.sin(p2 * D2R)) / 2, C = Math.cos(p1 * D2R) ** 2 + 2 * n * Math.sin(p1 * D2R), r0 = Math.sqrt(C - 2 * n * Math.sin(p0 * D2R)) / n;
  return (lon, lat) => { const r = Math.sqrt(Math.max(0, C - 2 * n * Math.sin(lat * D2R))) / n, th = n * (lon - lon0) * D2R; return [r * Math.sin(th), -(r0 - r * Math.cos(th))]; };
}
const ALBW = albersFor(REGION.proj);
const EE = d3.geoEqualEarth().rotate([-WORLD.proj.lon0, 0]).scale(1).translate([0, 0]).precision(0);

// rings of a (Multi)Polygon / (Multi)LineString
const parts = g => !g ? [] : g.type === "Polygon" ? g.coordinates : g.type === "MultiPolygon" ? g.coordinates.flat() : g.type === "LineString" ? [g.coordinates] : g.type === "MultiLineString" ? g.coordinates : [];
// densify long lon/lat segments (clip edges along parallels must bend in a conic projection)
function densify(ring, step = 1) {
  const out = [];
  ring.forEach((p, i) => {
    if (i) { const a = ring[i - 1], k = Math.ceil(Math.max(Math.abs(p[0] - a[0]), Math.abs(p[1] - a[1])) / step); for (let j = 1; j < k; j++) out.push([a[0] + (p[0] - a[0]) * j / k, a[1] + (p[1] - a[1]) * j / k]); }
    out.push(p);
  });
  return out;
}
// projected rings -> relative integer path
function encode(rings, q, closed = !0) {
  let d = "";
  for (const ring of rings) {
    let px = null, py = null, n = 0, s = "";
    for (const [x, y] of ring) {
      const X = Math.round(x * q), Y = Math.round(y * q);
      if (X === px && Y === py) continue;
      s += px === null ? `M${X} ${Y}` : (n === 1 ? "l" : " ") + (X - px) + " " + (Y - py);
      s = s.replace(/ -/g, "-"); px = X; py = Y; n++;
    }
    if (n > (closed ? 2 : 1)) d += s + (closed ? "z" : "");
  }
  return d;
}
const regionPath = (g, closed) => encode(parts(g).map(r => densify(r).map(p => ALBW(p[0], p[1]))), REGION.q, closed);
// d3 projection with seam cutting: collect the projected rings / lines from the stream
// d3 reads polygon winding on the sphere: a ring wound the other way would mean "everything except this area"
function rewind(g) {
  const fix = poly => d3.geoArea({ type: "Polygon", coordinates: poly }) > 2 * Math.PI ? poly.map(r => r.slice().reverse()) : poly;
  return g.type === "Polygon" ? { type: g.type, coordinates: fix(g.coordinates) } : g.type === "MultiPolygon" ? { type: g.type, coordinates: g.coordinates.map(fix) } : g;
}
function worldRings(g, closed = !0) {
  const rings = []; let cur = null;
  const sink = { point(x, y) { cur.push([x, y]); }, lineStart() { cur = []; }, lineEnd() { cur.length && rings.push(cur); }, polygonStart() {}, polygonEnd() {}, sphere() {} };
  d3.geoStream(rewind(g), EE.stream(sink));
  return encode(rings, WORLD.q, closed);
}
const bboxOf = (pts) => pts.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [1 / 0, 1 / 0, -1 / 0, -1 / 0]).map(v => +v.toFixed(4));

(async () => {
  const [c50, l50, h50, c110, l110, uzb] = await Promise.all(["c50", "l50", "h50", "c110", "l110", "uzb"].map(load));
  const clip = `-clip bbox=${REGION.bbox.join(",")}`;

  // ---- regional view (1:50m)
  const rc = await ms(`-filter-fields NAME ${clip} -simplify 45% keep-shapes -filter-islands min-area=300km2 remove-empty`, c50);
  const lakeNames = /^(Lake Balkhash|Issyk-Kul|Lake Zaysan|Lake Baikal|Siletitengiz Köli|Tengiz Köli)$/;
  const lakes = { type: "FeatureCollection", features: l50.features.filter((f, i, a) => lakeNames.test(f.properties.name) && a.findIndex(g => g.properties.name === f.properties.name) === i).concat(h50.features.filter(f => f.properties.name === "Aral Sea")) };
  const rl = await ms(`-filter-fields name ${clip} -simplify 20% keep-shapes`, lakes);
  // Kazakh ASSR: dissolve our 12 oblasts of 1939 (snap closes hairline gaps between neighbours)
  global.window = {}; eval(fs.readFileSync(path.join(root, "data.js"), "utf8").split("\nwindow.__WORLD__")[0]);
  const ob = { type: "FeatureCollection", features: window.__KZ_HIST__["1939"].map(f => ({ type: "Feature", properties: {}, geometry: f.g })) };
  if (ob.features.length !== 12) throw new Error("expected 12 oblasts of 1939, got " + ob.features.length);
  // the grid is coarse along the coasts: clip it to Natural Earth land so the outline does not run over the Caspian
  const land = await ms(`-clip bbox=40,30,95,60 -dissolve2`, c50);
  const kz = await ms(`-dissolve2 gap-fill-area=500km2 -clip land.json -filter-islands min-area=50km2`, ob, "snap snap-interval=0.002", { "land.json": land });
  const kk = await ms(`-filter 'shapeName === "Republic of Karakalpakstan"' -simplify 25% keep-shapes`, uzb);
  if (kk.features.length !== 1) throw new Error("Karakalpakstan not found in the geoBoundaries file");
  // graticule every 10°, clipped to the region
  const grat = [];
  for (let lon = 10; lon <= 130; lon += 10) grat.push([[lon, 10], [lon, 75]]);
  for (let lat = 10; lat <= 70; lat += 10) grat.push([[0, lat], [140, lat]]);
  const view = [];
  for (let i = 0; i <= 20; i++) { const lon = REGION.view[0] + (REGION.view[2] - REGION.view[0]) * i / 20; view.push(ALBW(lon, REGION.view[1]), ALBW(lon, REGION.view[3])); }

  const region = {
    bbox: bboxOf(view), q: REGION.q, proj: REGION.proj,
    countries: rc.features.map(f => ({ n: f.properties.NAME, d: regionPath(f.geometry) })).filter(c => c.d),
    lakes: rl.features.map(f => ({ n: f.properties.name, d: regionPath(f.geometry) })),
    kz: kz.features.map(f => regionPath(f.geometry)).join(""),
    kk: regionPath(kk.features[0].geometry),
    grat: encode(grat.map(l => densify(l, 2.5).map(p => ALBW(p[0], p[1]))), REGION.q, !1)
  };

  // ---- whole world (1:110m, Equal Earth)
  const wc = await ms(`-filter-fields NAME -filter 'NAME !== "Antarctica"' -simplify 40% keep-shapes`, c110);
  const wgrat = [];
  for (let lon = -180; lon < 180; lon += 30) wgrat.push({ type: "LineString", coordinates: [...Array(31)].map((_, i) => [lon, -75 + 5 * i]) });
  for (let lat = -60; lat <= 75; lat += 30) wgrat.push({ type: "LineString", coordinates: [...Array(73)].map((_, i) => [-180 + 5 * i, lat]) });
  const sphere = []; { const s = { point(x, y) { sphere.push([x, y]); }, lineStart() {}, lineEnd() {}, polygonStart() {}, polygonEnd() {} }; d3.geoStream({ type: "Sphere" }, EE.stream(s)); }
  const world = {
    bbox: bboxOf(sphere), q: WORLD.q, proj: WORLD.proj,
    countries: wc.features.map(f => ({ n: f.properties.NAME, d: worldRings(f.geometry) })).filter(c => c.d),
    lakes: l110.features.filter(f => f.properties.name === "Lake Baikal" || f.properties.name === "Lake Balkhash").map(f => ({ n: f.properties.name, d: worldRings(f.geometry) }))
      .concat(h50.features.filter(f => f.properties.name === "Aral Sea").map(f => ({ n: "Aral Sea", d: worldRings(f.geometry) }))),
    kz: kz.features.map(f => worldRings(f.geometry)).join(""),
    grat: wgrat.map(l => worldRings(l, !1)).join(""),
    sphere: encode([sphere], WORLD.q)
  };

  const W = { meta: { source: "Natural Earth 1:50m / 1:110m; geoBoundaries UZB ADM1; KZ outline = 12 oblasts of 1939 (atlas grid)", built: "scripts/build_world.js" }, region, world };
  const js = "window.__WORLD__=" + JSON.stringify(W) + ";";
  const dataPath = path.join(root, "data.js"), data = fs.readFileSync(dataPath, "utf8");
  const i = data.indexOf("window.__WORLD__="), j = data.indexOf("\nwindow.__MAUP__=", i);
  if (i < 0 || j < 0) throw new Error("window.__WORLD__ / window.__MAUP__ not found in data.js");
  fs.writeFileSync(dataPath, data.slice(0, i) + js + data.slice(j));
  const kb = s => (Buffer.byteLength(s) / 1024).toFixed(1) + " KB";
  console.log(`region: ${region.countries.length} countries ${kb(JSON.stringify(region))}; world: ${world.countries.length} countries ${kb(JSON.stringify(world))}; basemap total ${kb(js)}; data.js ${kb(fs.readFileSync(dataPath, "utf8"))}`);
})().catch(e => { console.error(e); process.exit(1); });
