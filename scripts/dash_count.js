// Counts em dashes (—) by language: node scripts/dash_count.js [--list ru|en|kz]
// Every string literal / template chunk of app.js and every text run of index.html is assigned a language by its
// letters (Kazakh-specific letters -> kz, other Cyrillic -> ru, Latin only -> en). En dashes (–) in ranges are not counted.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const lang = s => /[әғқңөұүһіӘҒҚҢӨҰҮҺІ]/.test(s) ? "kz" : /[а-яё]/i.test(s) ? "ru" : "en";
const list = process.argv[2] === "--list" ? process.argv[3] : null, full = process.argv[4] === "--full";
const count = { ru: 0, en: 0, kz: 0 }, htmlCount = { ru: 0, en: 0, kz: 0 };
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const add = (bucket, s, where) => {
  const n = (s.match(/—/g) || []).length;
  if (!n) return;
  const l = lang(s);
  bucket[l] += n;
  if (list === l) full ? console.log(where + ": " + s + "\n") : s.match(/.{0,60}—.{0,60}/g).forEach(m => console.log(where + ": " + m.replace(/\s+/g, " ")));
};
// string and template literals (none of the regex literals in app.js contains a dash)
for (const m of app.matchAll(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g)) add(count, m[0], "app.js:" + (app.slice(0, m.index).split("\n").length));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8").replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/g, "");
for (const m of html.matchAll(/>([^<]+)</g)) add(htmlCount, m[1], "index.html");
for (const m of html.matchAll(/(?:title|aria-label|content|alt)="([^"]*)"/g)) add(htmlCount, m[1], "index.html");
const total = (app.match(/—/g) || []).length, totalHtml = (html.match(/—/g) || []).length;
list || console.log(JSON.stringify({ app: count, appTotal: total, html: htmlCount, htmlTotal: totalHtml }));
