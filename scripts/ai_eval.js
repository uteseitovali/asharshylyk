// Offline AI assistant check (node scripts/ai_eval.js [ru|en|kz|all]).
// Extracts the knowledge base and the retrieval code from app.js (no browser needed), asks the test questions and
// prints: question → fragment(s) given → on topic or not. Off-topic questions must get the "no answer" reply.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const data = fs.readFileSync(path.join(root, "data.js"), "utf8");
const cut = (from, to) => { const i = app.indexOf(from), j = app.indexOf(to, i); if (i < 0 || j < 0) throw new Error("marker: " + from); return app.slice(i, j); };

const ctx = { window: {}, console, Math, Set, Map, JSON };
vm.createContext(ctx);
vm.runInContext(data, ctx);
vm.runInContext([
  "let LANG = 'ru';",
  cut("const I18N = {", "\nfunction t("),
  "const t = k => (I18N[LANG] && I18N[LANG][k]) || I18N.ru[k] || k;",
  cut("const PALETTE = {", "\nconst RAMPS"),
  cut("const KZ = window.__KZ_HIST__", "\nconst D2R"),
  cut("const MODELS = [", "\nfunction chatAdd("),
  "globalThis.__ask = (lang, q) => { LANG = lang; return offlineAnswer(q); };"
].join("\n"), ctx);

// [question, expected]: the first fragment's title must match the expected pattern; null = off topic, "no answer" expected
const TESTS = {
  ru: [
    ["Что такое MAUP простыми словами?", "MAUP"],
    ["Сколько человек погибло во время Ашаршылыка?", "Ашаршылык"],
    ["Куда откочёвывали казахи?", "откоч"],
    ["Что произошло с Карагандинской областью?", "Карагандин|Аномальный"],
    ["Почему в Карагандинской области росло население?", "Карагандин|Аномальный"],
    ["Что говорит Сара Кэмерон о голоде?", "Кэмерон"],
    ["Чем отличается позиция Омарбекова?", "Омарбеков"],
    ["Что такое ареальная интерполяция?", "интерполяц"],
    ["Ученикам каких классов будет полезен атлас?", "Для кого"],
    ["Кто авторы атласа и кто руководитель?", "Авторы"],
    ["Как цитировать этот атлас?", "цитировать"],
    ["Что значит «предварительные областные данные»?", "Предварительные"],
    ["Чем отличается факт от модели и гипотезы?", "Факт"],
    ["Какие были переписи населения в 1926 и 1939 годах?", "Перепис"],
    ["Как пользоваться сайтом?", "пользоваться"],
    ["Какая погода будет завтра в Астане?", null],
    ["Напиши рецепт плова", null],
    ["Кто выиграл чемпионат мира по футболу?", null],
    ["Как решить квадратное уравнение?", null],
    ["Посоветуй хороший фильм на вечер", null]
  ],
  en: [
    ["What is MAUP in simple terms?", "MAUP"],
    ["How many people died during Asharshylyk?", "Asharshylyk"],
    ["Where did the Kazakhs migrate to?", "Migration"],
    ["What happened to Karaganda Oblast?", "Karaganda|Anomalous"],
    ["Why did the population grow in Karaganda Oblast?", "Karaganda|Anomalous"],
    ["What does Sarah Cameron say about the famine?", "Cameron"],
    ["How does Omarbekov's position differ?", "Omarbekov"],
    ["What is areal interpolation?", "interpolation"],
    ["Which school grades is the atlas useful for?", "Who the atlas"],
    ["Who are the authors of the atlas and who is the supervisor?", "Authors"],
    ["How should I cite this atlas?", "cite"],
    ["What does preliminary oblast data mean?", "Preliminary"],
    ["What is the difference between a fact, a model and a hypothesis?", "Fact"],
    ["What censuses were held in 1926 and 1939?", "census"],
    ["How do I use the site?", "use the site"],
    ["What will the weather be in Astana tomorrow?", null],
    ["Give me a pilaf recipe", null],
    ["Who won the football World Cup?", null],
    ["How do I solve a quadratic equation?", null],
    ["Recommend a good movie for tonight", null]
  ],
  kz: [
    ["MAUP деген не, қарапайым тілмен?", "MAUP"],
    ["Ашаршылық кезінде қанша адам қаза тапты?", "Ашаршылық"],
    ["Қазақтар қайда көшіп кетті?", "Көші-қон"],
    ["Қарағанды облысында не болды?", "Қарағанды|аномальды"],
    ["Неге Қарағанды облысында халық саны өсті?", "Қарағанды|аномальды"],
    ["Сара Кэмерон ашаршылық туралы не дейді?", "Кэмерон"],
    ["Омарбековтың көзқарасы немен ерекшеленеді?", "Омарбеков"],
    ["Ареалдық интерполяция деген не?", "интерполяция"],
    ["Атлас қай сынып оқушыларына пайдалы?", "кімге"],
    ["Атластың авторлары кім және жетекшісі кім?", "Авторлар"],
    ["Бұл атласқа қалай сілтеме жасау керек?", "сілтеме"],
    ["«Алдын ала облыстық деректер» нені білдіреді?", "Алдын ала"],
    ["Факт, модель және гипотеза қалай ерекшеленеді?", "Факт"],
    ["1926 және 1939 жылдары қандай санақтар болды?", "санақ"],
    ["Сайтты қалай пайдалану керек?", "пайдалану"],
    ["Ертең Астанада ауа райы қандай болады?", null],
    ["Палау рецептін жаз", null],
    ["Футболдан әлем чемпионатын кім жеңді?", null],
    ["Квадрат теңдеуді қалай шешеміз?", null],
    ["Кешке жақсы фильм ұсын", null]
  ]
};

const arg = process.argv[2] || "all", langs = arg === "all" ? ["ru", "en", "kz"] : [arg];
let total = 0, okAll = 0;
for (const lang of langs) {
  let ok = 0;
  console.log(`\n=== ${lang}`);
  for (const [q, want] of TESTS[lang]) {
    const a = ctx.__ask(lang, q), got = a.src || [];
    const pass = want === null ? got.length === 0 : got.length > 0 && new RegExp(want, "i").test(got[0]);
    pass && ok++;
    console.log(`${pass ? "OK " : "BAD"} | ${want === null ? "не по теме" : "по теме   "} | ${q} → ${got.length ? got.join(" / ") : "«нет ответа в базе знаний»"}`);
  }
  console.log(`${ok}/${TESTS[lang].length} (${lang})`);
  total += TESTS[lang].length; okAll += ok;
}
console.log(`\nTOTAL ${okAll}/${total}`);
process.exitCode = okAll === total ? 0 : 1;
