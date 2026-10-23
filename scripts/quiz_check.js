// Quiz data check (node scripts/quiz_check.js [git-ref]).
// 1) every question has 4 options in ru/en/kz and `c` is a valid index;
// 2) the correct answer text is the same as in the reference version (default: 0460c98, before the reshuffle),
//    in every language, so a reordering never moved `c` onto a wrong option;
// 3) the correct answers are spread over A–D; 4) numeric option series are ascending.
const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");
const ref = process.argv[2] || "0460c98";
const LANGS = ["ru", "en", "kz"];

function extractQuiz(src) {
  const i = src.indexOf("QUIZ = [");
  let d = 0, j = i + 7;
  for (; j < src.length; j++) { if (src[j] === "[") d++; if (src[j] === "]") { d--; if (!d) break; } }
  return eval(src.slice(i + 7, j + 1));
}
const now = extractQuiz(fs.readFileSync(path.join(root, "app.js"), "utf8"));
const old = extractQuiz(execSync(`git show ${ref}:app.js`, { cwd: root, encoding: "utf8", maxBuffer: 64 << 20 }));

const problems = [];
const num = s => { const m = String(s).replace(",", ".").match(/[\d.]+/); if (!m) return NaN; let v = parseFloat(m[0]); if (/тысяч|thousand|мың/.test(s)) v *= 1e3; if (/миллион|million/.test(s)) v *= 1e6; return v; };
if (now.length !== old.length) problems.push(`question count ${old.length} -> ${now.length}`);
now.forEach((q, k) => {
  if (!(q.c >= 0 && q.c <= 3)) problems.push(`q${k + 1}: c=${q.c}`);
  for (const l of LANGS) {
    if (!q[l] || q[l].a.length !== 4) { problems.push(`q${k + 1} ${l}: options`); continue; }
    const want = old[k][l].a[old[k].c], got = q[l].a[q.c];
    if (want !== got) problems.push(`q${k + 1} ${l}: correct was «${want}», now «${got}»`);
    const nums = q[l].a.map(num);
    if (nums.every(v => !isNaN(v)) && nums.some((v, i) => i && v <= nums[i - 1])) problems.push(`q${k + 1} ${l}: numeric options not ascending`);
  }
});
const dist = { A: 0, B: 0, C: 0, D: 0 };
now.forEach(q => dist["ABCD"[q.c]]++);
const vals = Object.values(dist);
if (Math.max(...vals) - Math.min(...vals) > 1) problems.push(`uneven distribution ${JSON.stringify(dist)}`);

console.log(`questions: ${now.length}; correct answers by letter: ${JSON.stringify(dist)}; reference: ${ref}`);
now.forEach((q, k) => console.log(`${String(k + 1).padStart(2)}. ${"ABCD"[q.c]}  ru: ${q.ru.a[q.c]}  |  en: ${q.en.a[q.c]}  |  kz: ${q.kz.a[q.c]}`));
if (problems.length) { console.log("\nPROBLEMS:\n" + problems.join("\n")); process.exit(1); }
console.log("\nOK: c points to the same correct answer in ru, en and kz for every question.");
