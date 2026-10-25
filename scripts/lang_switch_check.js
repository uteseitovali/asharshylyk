// Language switch with open panels (node scripts/lang_switch_check.js [url]).
// Needs the local server (python -m http.server 8000) and Chrome (path from CHROME, default: the Windows install).
// For each of the 11 layer objects: open its card in ru, switch to en, then kz, and check that the card text and
// the block titles ("Годы", "Коротко", ...) follow the language: no Cyrillic in en (the source list is excluded:
// bibliography titles stay in the original script, transliterated in en), no Russian block titles in kz.
// Also: the region card, the defense-mode panel and the "i" popover follow the switch; the scroll position is kept.
const { spawn } = require("child_process");
const fs = require("fs"), os = require("os"), path = require("path");

const URL = process.argv[2] || "http://localhost:8000/";
const CHROME = process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const port = 9300 + Math.floor(Math.random() * 500), prof = fs.mkdtempSync(path.join(os.tmpdir(), "langchk-"));
  const ch = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, "--no-first-run", "--window-size=1440,900", "about:blank"], { stdio: "ignore" });
  let page;
  for (let i = 0; i < 50 && !page; i++) { try { page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === "page"); } catch (e) {} await sleep(200); }
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r));
  let id = 0; const pend = new Map(), errors = [];
  ws.addEventListener("message", e => {
    const m = JSON.parse(e.data);
    if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
    if (m.method === "Runtime.exceptionThrown") errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push(m.params.args.map(a => a.value ?? a.description).join(" "));
  });
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expr => { const x = (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result; if (x.exceptionDetails) throw new Error(x.exceptionDetails.exception?.description || x.exceptionDetails.text); return x.result.value; };
  await send("Runtime.enable");
  await send("Page.addScriptToEvaluateOnNewDocument", { source: "try{localStorage.setItem('agln_intro_seen','1');localStorage.setItem('agln_lang','ru')}catch(e){}" });
  await send("Page.navigate", { url: URL });
  for (let i = 0; i < 60; i++) { try { if (await ev("typeof zKz !== 'undefined' && !!document.querySelector('.langopt')")) break; } catch (e) {} await sleep(250); }
  await sleep(600);

  const res = await ev(`(async () => {
    const w = ms => new Promise(r => setTimeout(r, ms)), setL = async L => { document.querySelector('.langopt[data-lang="' + L + '"]').click(); await w(450); };
    const CYR = /[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі]/, RU_TITLES = ["Годы", "Год", "Где", "Коротко", "Масштаб", "оценка", "Связь с темой атласа", "Что спорно или неизвестно", "Что известно об этом восстании", "Как считают", "Источники", "Восстание", "слой:"]; // "Лагерь" is the same word in Kazakh
    const card = () => {
      const d = document.querySelector("#drawerBody"), c = d.cloneNode(true);
      c.querySelectorAll(".mc-src").forEach(n => n.remove());
      const heads = [...d.querySelectorAll(".mc-h, .kv span, .sec-t, .mc-layer")].map(n => n.textContent.trim());
      return { text: c.textContent.replace(/\\s+/g, " ").trim(), heads };
    };
    document.querySelectorAll(".chip[data-l=camps] input,.chip[data-l=revolts] input").forEach(i => i.checked || i.click());
    await w(300);
    const problems = [], marks = [...document.querySelectorAll("#lCamps g.node, #lRevolts g.node")];
    for (let k = 0; k < marks.length; k++) {
      await setL("ru");
      const g = [...document.querySelectorAll("#lCamps g.node, #lRevolts g.node")][k];
      g.dispatchEvent(new MouseEvent("click", { bubbles: true })); await w(300);
      const d = document.querySelector("#drawer"), ru = card();
      d.scrollTop = 120; const y0 = d.scrollTop;
      await setL("en"); const en = card();
      if (!d.classList.contains("on")) problems.push(k + ": card closed after switch");
      if (en.text === ru.text) problems.push(k + ": en text unchanged");
      if (CYR.test(en.text)) problems.push(k + ": Cyrillic in en: " + (en.text.match(/.{0,30}[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі].{0,30}/) || [""])[0]);
      const yWant = Math.min(y0, d.scrollHeight - d.clientHeight); // a shorter card cannot scroll as far
      if (Math.abs(d.scrollTop - yWant) > 2) problems.push(k + ": scroll not kept (" + yWant + " -> " + d.scrollTop + ")");
      await setL("kz"); const kz = card();
      if (kz.text === ru.text || kz.text === en.text) problems.push(k + ": kz text unchanged");
      const ruLeft = kz.heads.filter(h => RU_TITLES.some(r => h === r || h.startsWith(r + " ") || h.startsWith("слой:")));
      if (ruLeft.length) problems.push(k + ": Russian titles in kz: " + ruLeft.join(", "));
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })); await w(200);
    }
    // region card
    await setL("ru"); openRegion("1939", KZ["1939"][0]); await w(500);
    const r1 = document.querySelector("#drawerBody h3").textContent; await setL("en");
    const r2 = document.querySelector("#drawerBody h3").textContent, r2t = document.querySelector("#drawerBody").textContent;
    if (r1 === r2) problems.push("region card title unchanged: " + r1);
    if (/Казахское|Общее население|Сохранить/.test(r2t)) problems.push("region card keeps Russian labels");
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })); await w(200);
    // defense-mode panel
    await setL("ru"); storyStart(); await w(500);
    const s1 = document.querySelector("#stT").textContent; await setL("kz");
    const s2 = document.querySelector("#stT").textContent, b2 = document.querySelector("#bStory").textContent, n2 = document.querySelector("#stN").textContent;
    if (s1 === s2) problems.push("story title unchanged");
    if (/Шаг|Остановить/.test(n2 + b2)) problems.push("story panel keeps Russian: " + n2 + " / " + b2);
    storyStop(); await w(300);
    // "i" popover
    await setL("ru"); document.querySelector(".tab[data-v=kz]").click(); await w(300);
    const ib = document.querySelector("#statsKz .info-i"); ib.click(); await w(200);
    const p1 = document.querySelector(".info-pop").textContent; await setL("en");
    const pop = document.querySelector(".info-pop"), p2 = pop.textContent;
    if (pop.classList.contains("on") && (p1 === p2 || CYR.test(p2))) problems.push("info popover keeps Russian");
    await setL("ru");
    return { cards: marks.length, problems };
  })()`);
  ws.close(); ch.kill();
  const ok = res.cards === 11 && !res.problems.length && !errors.length;
  console.log(`cards: ${res.cards}; problems: ${res.problems.length}; console errors: ${errors.length}`);
  res.problems.concat(errors).forEach(p => console.log("  " + p));
  console.log(ok ? "OK: open panels follow the language switch" : "FAIL");
  process.exitCode = ok ? 0 : 1;
})().catch(e => { console.error(e); process.exit(1); });
