let LANG = "ru";

// All map colours in one place: scales per theme, marks, world map, historians' lenses. Ramps were generated in
// OKLCH (scripts/palette_check.js --gen) and are checked by the same script: every scale colour has contrast
// >= 3:1 with the map background, neighbouring classes differ by dE >= 8 also under protanopia/deuteranopia,
// marks and labels differ from every scale colour. Light theme: low = lighter, high = darker. Dark theme: low =
// muted, high = light and saturated. Diverging scales: two hues around a neutral grey.
const PALETTE = {
light: {
mapBg: "#fffdf8",
border: "#fffdf8",
label: "#ffffff",
noData: {
bg: "#fffdf8",
line: "#867c62"
},
ramps: {
blue: [ "#6693cd", "#457dc3", "#2667b4", "#0b529d", "#043f7c", "#032d5c" ],
orange: [ "#c37d59", "#b56233", "#a34804", "#853a04", "#682c03", "#4c1e01" ],
violet: [ "#9a82c5", "#8769b9", "#7451a9", "#603c93", "#4b2b76", "#361e57" ]
},
diverge: {
neg: [ "#502b01", "#744207", "#985b1a" ],
mid: "#868686",
pos: [ "#476e9f", "#184f90", "#033469" ]
},
// world map: basemap (land lighter than sea), Kazakhstan outline, flows and famine marks
world: {
sea: "#d9e3e8",
land: "#fbf8f1",
landLine: "#b3a98f",
grat: "#c3cfd5",
kzFill: "#f3dcd4",
kzLine: "#9b2f2f",
abroad: "#c2410c",
soviet: "#0369a1",
famineKz: "#b91c1c",
famineOther: "#a35208",
famineNon: "#5f6878"
}
},
dark: {
mapBg: "#111a2d",
border: "#111a2d",
label: "#ffffff",
noData: {
bg: "#111a2d",
line: "#7d8598"
},
ramps: {
blue: [ "#63768f", "#718caf", "#7ea2d1", "#8cb9f3", "#add0fd", "#d4e6fe" ],
orange: [ "#8b6d5e", "#aa7f69", "#c99175", "#e9a480", "#febc9b", "#feddcd" ],
violet: [ "#786f8b", "#8f82aa", "#a795ca", "#bfa8eb", "#d6c1ff", "#e8dffd" ]
},
diverge: {
neg: [ "#facea9", "#eba25f", "#ca7e31" ],
mid: "#747474",
pos: [ "#6795cf", "#89b7f3", "#c0dafc" ]
},
world: {
sea: "#0a1120",
land: "#1e2a42",
landLine: "#3d4c6c",
grat: "#18233a",
kzFill: "#3d2834",
kzLine: "#ec7373",
abroad: "#f07a45",
soviet: "#38bdf8",
famineKz: "#f05a5a",
famineOther: "#f59e0b",
famineNon: "#a3adbf"
}
},
marks: {
camp: "#f0b429",
revolt: "#a8283a",
outline: "#ffffff"
},
// the three historians' lenses
lens: {
cameron: "#e05252",
pianciola: "#8b7cf0",
omarbekov: "#d97706"
}
};

const RAMPS = PALETTE.light.ramps, RAMPS_DARK = PALETTE.dark.ramps, themeName = () => "light" === document.documentElement.getAttribute("data-theme") ? "light" : "dark", pal = () => PALETTE[themeName()], ramp = name => pal().ramps[name], diverge = () => pal().diverge;

try {
LANG = localStorage.getItem("agln_lang") || "ru";
} catch (e) {}

const I18N = {
ru: {
pageTitle: "Картография коллапса · Казахстан 1926–1939",
pageDesc: "Интерактивный историко-географический анализ Ашаршылыка 1930–1933 гг. средствами HGIS: переписи 1926 и 1939 годов, проблема MAUP, карта откочёвок, историографические линзы.",
brandTitle: "Картография коллапса",
brandSub: "Ашаршылык · HGIS · 1926–1939",
tabKz: "Карта Казахстана",
tabWorld: "Карта мира",
tabSchools: "Историография",
tabBiblio: "Библиография",
tabData: "Данные и MAUP",
tabQuiz: "Квиз",
tabAi: "ИИ-ассистент",
btnAboutTitle: "О проекте и методология",
themeToLight: "Включить светлую тему",
themeToDark: "Включить тёмную тему",
btnLangTitle: "Язык интерфейса",
secGrid: "Административная сетка",
seg1926: "1926 · 8 округов",
seg1939: "1939 · 12 областей",
hintGrid1926: "Перепись 1926 года: 8 крупных округов Казакской АССР. Крупные единицы сильнее усредняют: это эффект масштаба в MAUP.",
hintGrid1939: "Перепись 1939 года: 12 областей. Более дробная сетка показывает контрасты, невидимые на сетке 1926 года.",
secMetric: "Показатель",
secLayers: "Дополнительные слои",
layerCamps: "Лагеря и стройки",
layerRevolts: "Восстания 1929–1931",
layerLabels: "Подписи регионов",
secModes: "Режимы",
btnStoryStart: "▶ Режим защиты: 6 шагов исследования",
btnStoryStop: "⏸ Остановить тур",
btnSplit: "⇔ Сплит 1926 / 1939",
hintStory: "StoryMap проводит через шесть шагов исследования: от степи 1926 года до методологического вывода о MAUP.",
zoomInTitle: "Приблизить",
zoomOutTitle: "Отдалить",
zoomReset: "Сброс",
mapWheelHint: "Ctrl (⌘) + колесо: масштаб карты",
mapTouchHint: "Двумя пальцами можно двигать карту",
mapBasis_c26: "перепись 1926 г.",
mapBasis_c39: "перепись 1939 г.",
mapBasis_c2: "переписи 1926 и 1939 гг.",
mapBasis_model: "модель: площадная интерполяция",
mapUnits1926: "8 единиц",
mapUnits1939: "12 единиц",
mapProjKz: "Проекция: равновеликая коническая Альберса, центральный меридиан 68° в. д., стандартные параллели 45° и 53° с. ш.",
mapSrcData: "Данные: рабочий набор атласа по переписям 1926 и 1939 гг., сверка с опубликованными итогами ведётся. Границы: реконструкция на геометрии geoBoundaries.",
mapSrcModel: "Расчёт: площадная интерполяция по сеткам 1926 и 1939 гг., матрица 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения. Границы: реконструкция на геометрии geoBoundaries.",
lvl_census: "перепись",
lvl_model: "модель",
lvl_hist: "оценка историографии",
lvlTip_census: "Уровень: данные переписи 1926/1939 гг. (рабочий набор атласа; сверка с опубликованными итогами по областям ведётся).",
lvlTip_model: "Уровень: расчётное значение модели, полученное площадной интерполяцией между сетками 1926 и 1939 гг.",
lvlTip_hist: "Уровень: оценка историков. Это диапазон с указанием автора, а не результат подсчёта.",
introOpenTitle: "Об исследовании: вход для жюри",
introKicker: "Исследовательская работа · историческая ГИС",
introTitle: "Картография распада — картирование демографического наследия советской коллективизации в Казахстане с использованием GIS и открытых исторических данных",
introQLabel: "Исследовательский вопрос",
introQ: "Насколько выводы о географии катастрофы зависят от административной сетки, по которой сгруппированы данные?",
introHLabel: "Гипотеза",
introH: "Гипотеза состоит в том, что наиболее тяжелые потери приходились на районы традиционного скотоводства, тогда как статистический прирост в промышленных центрах мог быть следствием принудительной и организованной миграции.",
introResultsLabel: "Три главных результата",
introR1: "Доля казахов в населении республики: ≈58,5 % по переписи 1926 г. → ≈38 % по переписи 1939 г.",
introR2: "Убыль казахского населения республики между переписями: ≈36 % (≈3,63 → ≈2,33 млн человек).",
introR3: "Наложение сеток 1926 и 1939 гг. дало матрицу 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения: от выбора сетки зависит, где на карте окажется эпицентр катастрофы (MAUP).",
introSrc: "Республиканские итоги: перепись 1926 г. (Асылбек М. Х., Асылбекова Ж. М., 2014); перепись 1939 г. (Тольц, Демоскоп Weekly, 2006). Областные показатели атласа ещё сверяются с опубликованными итогами.",
introAuthorsLabel: "Авторы",
introAuthors: "Жагиппаров Ализар, Утесеитов Али · 11F · НИШ Астана",
introSupLabel: "Научный руководитель",
introSup: "Ғазиз Ақтоты Ғазизқызы",
introStart: "▶ Начать защиту (6 шагов)",
introExplore: "Исследовать самостоятельно",
introClose: "Закрыть",
btnDefenseShort: "▶ Режим защиты",
methNote: "Методологическая помета: границы представляют опорную реконструкцию на современной геометрии; карта служит для сравнительного анализа и не является архивным кадастром",
methNoteMore: "Контуры округов 1926 г. и областей 1939 г. собраны из современной административной геометрии (geoBoundaries) под исторические единицы; реальные границы отличались. Демографические показатели хранятся отдельно от геометрии; областные значения взяты из рабочего набора атласа, сверка с опубликованными итогами переписей ведётся.",
infoLabel: "Источник и способ расчёта",
info_livestock: "Оценка историографии: около 40 млн голов скота до коллективизации, к 1933 г. осталось около одной десятой (С. Кэмерон, «The Hungry Steppe», 2018).",
info_flowsDest: "Сумма диапазонов оценок по направлениям откочёвок на карте. Разбивка по странам остаётся дискуссионной оценкой: С. Кэмерон называет точный подсчёт открытым исследовательским вопросом.",
info_returned: "454 тыс. вернувшихся из ≈1,13 млн откочевавших (архивные данные АПРК; С. Кэмерон).",
info_relLoss: "Оценка историографии: погибло ≈38 % казахов (С. Кэмерон, «The Hungry Steppe», 2018).",
info_absMax: "Украинская ССР: ≈3,3–3,9 млн погибших («between 3.3 and 3.9 million died in Ukraine»; Wikipedia, «Soviet famine of 1930–1933» (Э15 списка литературы работы).",
info_deathEst: "Безвозвратные потери казахского населения ≈1,3–2,3 млн: диапазон оценок разных авторов (по тексту работы); А. Н. Алексеенко (2000): 1,5–1,84 млн.",
info_shareRep: "Перепись 1926 г.: 3 627,6 тыс. казахов из 6 198,5 тыс. жителей, 58,5 % (Демоскоп: Казакская АССР за вычетом Каракалпакской АО; Асылбек, Асылбекова, 2014); перепись 1939 г.: 2,33 млн из 6,15 млн, 37,8 % (Тольц, Демоскоп Weekly, 2006).",
kazakhLossRep: "Убыль казахов в республике",
kazakhLossRepSub: "≈3,63 → ≈2,33 млн · переписи 1926 и 1939 гг.",
info_kazLossRep: "Перепись 1926 г.: ≈3,63 млн казахов (Асылбек, Асылбекова, 2014); перепись 1939 г.: 2,33 млн (Тольц, Демоскоп Weekly, 2006). Убыль: (2,33 − 3,63) ÷ 3,63 ≈ −36 %.",
popRep1926: "Население республики",
popRep1926Sub: "перепись 1926 г.",
kazRep1926: "Казахов в республике",
kazRep1926Sub: "≈58,5 % населения",
info_popRep1926: "Перепись 1926 г.: ≈6,2 млн жителей, точнее 6 198,5 тыс. (Демоскоп: Казакская АССР за вычетом Каракалпакской АО; совпадает с 6,198 млн в Wikipedia). Суммы по 8 округам рабочего набора атласа приведены в таблице и карточках округов (сверка ведётся).",
info_kazRep1926: "Перепись 1926 г.: 3 627,6 тыс. казахов, 58,5 % населения республики (Демоскоп: Казакская АССР за вычетом Каракалпакской АО; Асылбек М. Х., Асылбекова Ж. М., 2014).",
oblastDataLabel: "Областные показатели",
oblastDataVal: "сверка ведётся",
oblastDataSub: "проценты по областям см. в карточках областей (рабочий набор атласа)",
regionCheckTag: "сверка ведётся",
regionCheckTip: "Значение из рабочего набора атласа; сверка с опубликованными итогами переписей по областям ведётся.",
prelimNote: "предв., сверка ведётся",
markTypeCamp: "Лагерь",
markTypeSite: "Стройка, промышленный объект",
markTypeRevolt: "Восстание",
markYear: "Год",
markSource: "Источник",
markSrcPending: "источник уточняется",
markNoDesc: "Подробное описание пока не добавлено.",
markOpenHint: "Открыть карточку",
info_maupCalc: "Собственный расчёт: ареальная интерполяция казахского населения 1926 г. с сетки 8 округов на сетку 12 областей; индекс несходства равен половине суммы модулей сдвигов долей.",
info_inter96: "Собственный расчёт: матрица 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения. Для каждой пары «округ 1926 г. — область 1939 г.» вычислена площадь пересечения в GeoPandas/Shapely.",
info_coverage: "Сумма площадей 8 округов совпадает с суммой площадей 12 областей (расхождение 0,05 %): обе сетки описывают одну территорию.",
aprobHeading: "Апробация: опрос",
aprobMeta: "N = 32 респондента · 11 вопросов",
aprob1: "воспринимали Ашаршылык как одну республиканскую цифру",
aprob2: "не знали о смене административных сеток между переписями",
aprob3: "считают интерактивные слои понятнее учебника",
aprob4: "впервые осознали, почему в переписи 1939 г. по Карагандинскому и Балхашскому районам зафиксирован общий прирост населения",
aprobLink: "Таблица ответов (Google Таблицы) ↗",
aprobLimit: "Ограничение выборки: N = 32, выборка небольшая и нерепрезентативная; результаты описывают восприятие материалов атласа, а не исторические факты.",
contribHeading: "Вклад авторов",
contribAlizar: "историография, сведение таблиц переписей, сопоставление оценок потерь, опросник.",
contribAli: "пространственная часть, веб-архитектура атласа, наложение сеток в GeoPandas/Shapely, матрица 8 × 12 (96 пар «округ — область», из них 37 с ненулевой площадью пересечения).",
contribJointLabel: "Совместно",
contribJoint: "формулировка гипотезы и разграничение «оценка / модель».",
contribNameAlizar: "Жагиппаров Ализар",
contribNameAli: "Утесеитов Али",
sidelblL: "1926 · округа",
sidelblR: "1939 · области",
splitTitle: "Доля казахов · 1926 (округа) и 1939 (области)",
splitLegend: "Доля казахов, %: одна шкала для 1926 и 1939 гг.",
noDataLegend: "нет данных",
ariaMapKz: "Карта Казахстана",
ariaMapWorld: "Карта мира",
ariaMapSchools: "Карта историографических линз",
disclaimer1926: "Границы округов 1926 года представляют опорную реконструкцию: современная административная геометрия (geoBoundaries), объединённая под исторические единицы. Это не архивный кадастровый shapefile. Демографические атрибуты хранятся отдельно от геометрии. Областные показатели взяты из рабочего набора данных атласа; сверка с опубликованными итогами переписей по областям ведётся, см. журнал изменений данных.",
disclaimer1939: "Границы областей 1939 года представляют опорную реконструкцию на современной геометрии. Атрибуты 1926 и 1939 годов происходят из разных источников с разными базовыми итогами, поэтому корректнее сравнивать доли, а не абсолютные суммы. Областные показатели взяты из рабочего набора данных атласа; сверка с опубликованными итогами переписей по областям ведётся, см. журнал изменений данных.",
secWorldLayer: "Слой карты мира",
segFlows: "Откочёвки",
segFamines: "Голод 1930-х",
secDirections: "Направления",
dirAbroad: "За границу",
dirSoviet: "В республики СССР",
hintFlows: "Толщина линии показывает оценочный масштаб потока. Наведите на линию или точку, чтобы увидеть диапазон и пояснение.",
hintFamines: "Размер круга показывает долю погибших от численности населения региона. Казахстан даёт наибольшую относительную потерю среди народов СССР.",
secFlowSummary: "Итог откочёвок",
kvLeft: "Покинули республику",
kvReturned: "Вернулись позднее",
kvPermanent: "Безвозвратно",
kvAbroadStayed: "Остались за границей",
noteFlowsDiscuss: "Разбивка по конкретным направлениям остаётся дискуссионной оценкой. С. Кэмерон прямо называет точный подсчёт по странам открытым исследовательским вопросом.",
noteProjection: "Региональный вид: равновеликая коническая проекция Альберса, центральный меридиан 65° в. д., стандартные параллели 28° и 58° с. ш. Вид «Весь мир»: равновеликая проекция Equal Earth с тем же центральным меридианом. Обе проекции сохраняют соотношение площадей, поэтому территории на карте можно сравнивать. Границы стран современные (Natural Earth 1:50m, для всего мира 1:110m) и служат географической привязкой, а не политической картой 1930-х годов. Контур Казахстана (Казахская АССР, с 1936 г. Казахская ССР) получен объединением 12 областей нашей сетки 1939 г. и, как и сама сетка, является реконструкцией. Пунктиром обведена Республика Каракалпакстан в современных границах (geoBoundaries): это приблизительная привязка. Арал показан в границах до 1960-х гг., Каспий в современных границах.",
schoolsHeading: "Три линзы на одну катастрофу",
schoolsIntro: "Историки расходятся не в том, был ли голод, а в том, что считать его механизмом. Выберите школу, и карта подсветит регионы, которые оказываются в центре именно её объяснения. Это и есть смысл историографического раздела: одни и те же данные, разные вопросы к ним, разная география ответа.",
chooseSchool: "Выберите школу",
chooseSchoolHint: "Нажмите на карточку выше, чтобы увидеть развёрнутый тезис и подсветку на карте.",
focusRegions: "Регионы в фокусе этой линзы",
askAssistantSchool: "Спросить ассистента об этой школе",
schoolCaptionDefault: "Карта потерь казахского населения по областям 1939 года. Выберите школу выше.",
biblioHeading: "Библиография и источники",
biblioIntro: "Список литературы научной работы «Картография распада»: 15 основных и 35 электронных источников, оформленных по APA 7, и отдельно 3 источника, привлечённых после подачи работы. Названия даны на языке оригинала.",
biblioCopy: "Скопировать ссылку APA",
biblioCopied: "Ссылка APA скопирована",
biblioCopyFail: "Не удалось скопировать. Выделите ссылку вручную",
biblioGroup_primary: "Первичные источники и статистика",
biblioGroup_works: "Монографии и статьи",
biblioGroup_geo: "Геоданные и методы",
biblioGroup_extra: "Дополнительные источники (после подачи работы)",
biblioApaNote: "Список оформлен по APA 7th edition. Внутри разделов: сначала источники на кириллице, затем на латинице, по алфавиту фамилии первого автора (или названия, если автора нет). Дата обращения к электронным ресурсам: 4 мая 2026 г.",
biblioPrint: "Печатное издание",
dataHeading: "Главный результат: сетка меняет вывод",
statShiftSum: "Суммарный сдвиг долей",
statShiftUnit: "процентных пункта",
statDissim: "Индекс несходства",
statDissimSub: "пятая часть распределения",
statIntersections: "Пары «округ — область» (8 × 12)",
statIntersectionsSub: "из них 37 с ненулевой площадью пересечения",
statCoverage: "Сетки покрывают одну и ту же территорию",
statCoverageSub: "площадь 8 округов = площадь 12 областей",
dataIntro: "Одна территория, одни люди, две административные сетки. При переносе казахского населения 1926 года с сетки 8 округов на сетку 12 областей суммарный сдвиг долей составляет 42,46 п.п., а индекс несходства равен 21,2 %. Практический смысл: если бы исследователь работал только с сеткой 1939 года, он получил бы другую карту эпицентра катастрофы, чем работая с сеткой 1926 года. Граница определяет вывод: это и есть Modifiable Areal Unit Problem.",
calcHeading: "Калькулятор ареальной интерполяции",
calcSrcLabel: "Округ 1926 года (источник)",
calcTgtLabel: "Область 1939 года (приёмник)",
calcBtn: "Рассчитать",
exportHeading: "Экспорт данных",
exportCsv: "CSV · таблица показателей",
exportGeo: "GeoJSON · границы и атрибуты",
exportMaup: "CSV · матрица пересечений",
exportHint: "Все данные открыты. GeoJSON открывается в QGIS, ArcGIS и geojson.io.",
tableHeading: "Таблица показателей",
tableHint: "Нажмите на заголовок столбца для сортировки, на строку, чтобы открыть карточку региона.",
logHeading: "Журнал изменений данных",
logIntro: "Все правки чисел и формулировок, влияющих на данные атласа: что изменено, почему и по какому источнику.",
logWhat: "Что изменено",
logWhy: "Почему",
logSource: "Источник",
quizTag: "Для школьников",
quizHeading: "Проверьте, что вы поняли",
quizIntro: "Квиз по материалам сайта: карта, данные переписей, историография и методология HGIS. После каждого ответа даётся объяснение со ссылкой на источник, а в конце показан разбор ошибок.",
quizStatQuestions: "Вопросов",
quizStatFormat: "Формат",
quizStatFormatSub: "один верный",
quizStatFormatVal: "4 варианта",
quizStatTime: "Время",
quizStatTimeVal: "Без лимита",
quizGo: "Начать квиз",
quizShuffle: "Перемешать вопросы",
quizShuffleOn: "Порядок вопросов будет перемешан (варианты ответов перемешиваются всегда)",
quizShuffleOff: "Порядок вопросов как в банке",
quizNext: "Далее ›",
quizFinish: "Результат",
quizAgain: "Пройти заново",
quizBack: "К материалам",
quizCorrect: "✓ Верно",
quizWrong: "✕ Неверно",
quizReview: "Разбор ошибок",
quizYourAnswer: "Ваш ответ:",
quizCorrectAnswer: "Верно:",
quizMsg100: "Безупречно. Материал усвоен полностью.",
quizMsg80: "Отличный результат: основное вы поняли верно.",
quizMsg50: "Неплохо. Разберите ошибки ниже и попробуйте снова.",
quizMsgLow: "Стоит вернуться к разделам «Историография» и «Данные и MAUP».",
aiHeading: "ИИ-ассистент по материалам сайта",
aiSub: "Модель работает прямо в браузере: данные никуда не отправляются",
aiOffline: "Офлайн-режим",
exportPngTitle: "Скачать карту (PNG)",
pngCredit: "Картография коллапса · HGIS-атлас Ашаршылыка, 1926–1939",
pngSrcWorld: "Карта региона, проекция Альберса (равновеликая коническая), центральный меридиан 65° в. д. Подложка: Natural Earth 1:50m; Арал в границах до 1960-х гг., Каспий в современных границах; контур Казахстана по 12 областям 1939 г. Направления и масштабы откочёвок: оценки историографии (дискуссионные); масштабы голодов: оценки разных авторов.",
pngSrcWorldWhole: "Карта мира, проекция Equal Earth, центральный меридиан 65° в. д. Подложка: Natural Earth 1:110m; Каспий в современных границах; контур Казахстана по 12 областям 1939 г. Направления и масштабы откочёвок: оценки историографии (дискуссионные); масштабы голодов: оценки разных авторов.",
toastPngFailed: "Не удалось сохранить карту в PNG",
mapPhoneHint: "Для полной работы с картой удобнее ноутбук или планшет",
aiDisclaimer: "Ответы справочные, основаны на материалах атласа; сверяйтесь с первоисточниками.",
aiLoadNoGpu: "Модель недоступна: в этом браузере нет WebGPU. Ответы строятся офлайн-поиском по базе знаний атласа.",
aiReady: "Модель готова",
aiLoading: "Загрузка модели…",
aiModelLabel: "Модель",
aiLoadBtn: "Загрузить модель",
aiNotLoaded: "Модель не загружена",
aiLoadedNote: "Модель загружена и работает локально",
aiPlaceholder: "Спросите про регион, цифру, историка или метод…",
aiSend: "Спросить",
aiNoteGpu: "Модель скачивается один раз и кэшируется браузером, дальше работает без интернета. Пока она не загружена, ассистент отвечает выдержками из встроенной базы знаний. Ответы всегда строятся только по материалам этого сайта, поэтому проверяйте их по разделу «Данные и MAUP».",
aiNoteNoGpu: "В этом браузере нет поддержки WebGPU, поэтому языковая модель не запустится. Работает встроенный офлайн-поиск по базе знаний сайта. Для полноценной модели откройте сайт в свежей версии Chrome, Edge или Firefox на компьютере.",
aiGreeting: "Здравствуйте! Я отвечаю по материалам этого исследования: карты, переписи 1926 и 1939 годов, откочёвки, историография и метод HGIS. Задайте вопрос или выберите подсказку ниже.\n\nЧтобы ответы генерировала языковая модель прямо в вашем браузере, нажмите «Загрузить модель». Без неё я отвечаю точными выдержками из базы знаний.",
aiSourceLabel: "Источник в материалах сайта: ",
aiNoHits: "В базе знаний атласа нет ответа на этот вопрос. Попробуйте спросить про регион (например, «Акмолинская область»), про оценки потерь или про метод MAUP.",
aiIdentity: "Я ИИ-ассистент проекта «Картография коллапса»: языковая модель, которая работает прямо в вашем браузере (данные никуда не отправляются) и отвечает на вопросы по материалам этого сайта: картам, переписям 1926 и 1939 годов, откочёвкам, историографии Ашаршылыка и методу HGIS. Спросите про регион, историка, цифру или метод.",
toastWebgpuMissing: "WebGPU недоступен в этом браузере: включён офлайн-режим",
toastModelLoaded: "Модель загружена: ответы теперь генерируются в вашем браузере",
toastModelFailed: "Модель не загрузилась. Ассистент отвечает выдержками из базы знаний.",
aiAsk: "Расскажи про: ",
storyPrev: "‹ Назад",
storyNext: "Далее ›",
storyFinish: "Завершить",
storyExit: "Выйти",
storyStep: "Шаг",
storyOf: "из",
toastSplitHint: "Доля казахов на одной шкале: слева 8 округов 1926 г., справа 12 областей 1939 г. Тяните разделитель.",
toastThemeDark: "Тёмная тема",
toastThemeLight: "Светлая тема",
toastDownloaded: "Файл {n} сохранён",
toastDownloadFailed: "Не удалось сохранить файл",
toastExportUnavailableHere: "Экспорт файлов недоступен в этом окне просмотра. Скачайте полный файл сайта, присланный в чате: там экспорт работает.",
toastLangChanged: "Язык интерфейса: Русский",
aboutTitle: "О проекте",
aboutSub: "Пространственно-демографический анализ Ашаршылыка средствами исторической ГИС",
gridUnitOkrug: "округ",
gridUnitOblast: "область",
printGenerated: "Сформировано",
okrugsCount: "Округов",
totalPopulation: "Население всего",
kazakhsWord: "Казахов",
livestockCount: "Поголовье скота",
oblastsCount: "Областей",
kazakhLoss: "Потеря казахов",
byOkrugsGrid: "сетка 1926 года",
byOblastsGrid: "сетка 1939 года",
toThousandKm: "к 1933 г. около 1/10",
abroadDest: "Зарубежных направлений",
sovietDest: "Внутрисоюзных",
biggestDest: "Крупнейшее направление",
returnedShare: "Доля вернувшихся",
relLoss: "Относительная потеря",
absMax: "Абсолютный максимум",
deathEstimates: "Безвозвратные потери казахов",
deathEstimatesSub: "оценки разных авторов; А. Н. Алексеенко: 1,5–1,84 млн",
kazakhShareRepublic: "Доля казахов в республике",
regionGridLabel: "Сетка",
regionOf: "года",
lossOfKazPop: "потеря казахского населения 1926 → 1939",
kazakhs1926: "Казахи, 1926",
kazakhs1939: "Казахи, 1939",
total1926: "Всего, 1926",
total1939: "Всего, 1939",
generalPopChange: "Изменение общего населения",
kazShareChange: "Доля казахов 1926 → 1939",
maupShift: "MAUP-сдвиг доли",
shareKazPop: "доля казахов в населении округа, 1926",
totalPop: "Всего населения",
kazakhPop: "Казахское население",
otherPop: "Иное население",
formedFrom: "Из каких округов 1926 года сложилась область",
ofArea: "% площади",
maupNote: "Ареальная интерполяция даёт для этой области {a} казахов в 1926 г. вместо {b} по атрибуту, расхождение {c} %. Это прямая иллюстрация MAUP.",
savePdf: "🖨 Сохранить в PDF",
askAssistant: "Спросить у ассистента",
tagNomadic: "Кочевое скотоводство",
tagGulag: "Лагеря и стройки",
tagUnrest: "Очаг восстаний",
chartHint: "Нажмите, чтобы открыть карточку",
flowRange: "тыс.",
flowAbroadLabel: "Зарубежное",
flowSovietLabel: "Внутрисоюзное",
flowEstimate: "направление · оценка",
legendFlowsAbroad: "за границу",
legendFlowsSoviet: "в республики СССР",
legendFlowsThickness: "толщина показывает оценочный масштаб потока",
legendFamineKz: "Казахская АССР",
legendFamineOther: "другие регионы СССР",
legendFamineNon: "вне СССР, иные причины",
famineDeathShare: "погибших от населения региона",
famineVictims: "Жертвы:",
faminePop: "население",
kzAssrLabel: "Казахская АССР",
legendKzOutline: "Казахстан: контур 12 областей 1939 г.",
legendKarakalpak: "Каракалпакстан (совр. границы, приблизительно)",
legendAral: "Арал в границах до 1960-х гг.",
tipUprising: "восстание",
tipUprisingYear: "год. Одно из более чем 370 выступлений 1929–1931 гг. (Т. Омарбеков).",
worldToRegion: "К региону",
worldWhole: "Весь мир"
},
en: {
pageTitle: "Cartography of Collapse · Kazakhstan 1926–1939",
pageDesc: "An interactive historical-geographic analysis of the Asharshylyk famine of 1930–1933 using HGIS: the 1926 and 1939 censuses, the MAUP problem, a map of migrations, and historiographic lenses.",
brandTitle: "Cartography of Collapse",
brandSub: "Asharshylyk · HGIS · 1926–1939",
tabKz: "Map of Kazakhstan",
tabWorld: "World Map",
tabSchools: "Historiography",
tabBiblio: "Bibliography",
tabData: "Data & MAUP",
tabQuiz: "Quiz",
tabAi: "AI Assistant",
btnAboutTitle: "About the project and methodology",
themeToLight: "Switch to light theme",
themeToDark: "Switch to dark theme",
btnLangTitle: "Interface language",
secGrid: "Administrative grid",
seg1926: "1926 · 8 okrugs",
seg1939: "1939 · 12 oblasts",
hintGrid1926: "The 1926 census: 8 large okrugs of the Kazak ASSR. Larger units average more strongly, which is the scale effect within MAUP.",
hintGrid1939: "The 1939 census: 12 oblasts. A finer grid reveals contrasts invisible on the 1926 grid.",
secMetric: "Metric",
secLayers: "Additional layers",
layerCamps: "Camps & construction sites",
layerRevolts: "Uprisings 1929–1931",
layerLabels: "Region labels",
secModes: "Modes",
btnStoryStart: "▶ Defense mode: 6 research steps",
btnStoryStop: "⏸ Stop the tour",
btnSplit: "⇔ Split 1926 / 1939",
hintStory: "StoryMap walks through six steps of the research: from the 1926 steppe to the methodological conclusion about MAUP.",
zoomInTitle: "Zoom in",
zoomOutTitle: "Zoom out",
zoomReset: "Reset",
mapWheelHint: "Ctrl (⌘) + scroll to zoom the map",
mapTouchHint: "Use two fingers to move the map",
mapBasis_c26: "1926 census",
mapBasis_c39: "1939 census",
mapBasis_c2: "1926 and 1939 censuses",
mapBasis_model: "model: areal interpolation",
mapUnits1926: "8 units",
mapUnits1939: "12 units",
mapProjKz: "Projection: Albers equal-area conic, central meridian 68°E, standard parallels 45°N and 53°N.",
mapSrcData: "Data: the atlas’s working dataset based on the 1926 and 1939 censuses; cross-checking against the published results is in progress. Boundaries: reconstruction on geoBoundaries geometry.",
mapSrcModel: "Calculation: areal interpolation between the 1926 and 1939 grids, an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area. Boundaries: reconstruction on geoBoundaries geometry.",
lvl_census: "census",
lvl_model: "model",
lvl_hist: "historiographic estimate",
lvlTip_census: "Level: 1926/1939 census data (the atlas’s working dataset; cross-checking against the published oblast results is in progress).",
lvlTip_model: "Level: a model value obtained by areal interpolation between the 1926 and 1939 grids.",
lvlTip_hist: "Level: historians’ estimate, that is, a range attributed to its authors, not a count.",
introOpenTitle: "About the study: jury entry",
introKicker: "Research paper · historical GIS",
introTitle: "Cartography of Disintegration — mapping the demographic legacy of Soviet collectivization in Kazakhstan using GIS and open historical data",
introQLabel: "Research question",
introQ: "How far do conclusions about the geography of the catastrophe depend on the administrative grid by which the data are grouped?",
introHLabel: "Hypothesis",
introH: "The hypothesis is that the heaviest losses fell on areas of traditional pastoralism, while the statistical growth of industrial centres may have resulted from forced and organised migration.",
introResultsLabel: "Three main results",
introR1: "Kazakh share of the republic’s population: ≈58.5% in the 1926 census → ≈38% in the 1939 census.",
introR2: "Decline of the republic’s Kazakh population between the censuses: ≈36% (≈3.63 → ≈2.33 million people).",
introR3: "Overlaying the 1926 and 1939 grids gives an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area: the choice of grid determines where the epicenter of the catastrophe appears on the map (MAUP).",
introSrc: "Republic totals: 1926 census from Asylbek, M. Kh., & Asylbekova, Zh. M. (2014); 1939 census from Tolts (Demoscope Weekly, 2006). The atlas’s oblast figures are still being cross-checked against the published results.",
introAuthorsLabel: "Authors",
introAuthors: "Alizar Zhagipparov, Ali Uteseitov · 11F · NIS Astana",
introSupLabel: "Supervisor",
introSup: "Ғазиз Ақтоты Ғазизқызы",
introStart: "▶ Start the defense (6 steps)",
introExplore: "Explore on my own",
introClose: "Close",
btnDefenseShort: "▶ Defense mode",
methNote: "Methodological note: boundaries are a reference reconstruction on modern geometry; the map is for comparative analysis, not an archival cadastre",
methNoteMore: "The 1926 okrug and 1939 oblast outlines are assembled from modern administrative geometry (geoBoundaries) under the historical units; the real boundaries differed. Demographic figures are stored separately from the geometry; oblast values are the atlas’s working dataset, and cross-checking against the published census results is in progress.",
infoLabel: "Source and method",
info_livestock: "Historiographic estimate: about 40 million head of livestock before collectivization, about one-tenth by 1933 (S. Cameron, “The Hungry Steppe”, 2018).",
info_flowsDest: "Sum of the estimate ranges for the migration destinations on the map. The breakdown by country is a debated estimate: S. Cameron calls an exact count an open research question.",
info_returned: "454 thousand returnees out of ≈1.13 million who left (archival data, APRK; S. Cameron).",
info_relLoss: "Historiographic estimate: ≈38% of Kazakhs died (S. Cameron, “The Hungry Steppe”, 2018).",
info_absMax: "Ukrainian SSR: ≈3.3–3.9 million deaths (“between 3.3 and 3.9 million died in Ukraine”; Wikipedia, “Soviet famine of 1930–1933” (E15 in the paper’s reference list).",
info_deathEst: "Irrecoverable losses of the Kazakh population ≈1.3–2.3 million: the range of estimates by different authors (per the paper); A. N. Alekseenko (2000): 1.5–1.84 million.",
info_shareRep: "1926 census: 3,627.6 thousand Kazakhs of 6,198.5 thousand inhabitants, 58.5% (Demoscope: Kazak ASSR minus the Kara-Kalpak AO; Asylbek & Asylbekova, 2014); 1939 census: 2.33 million of 6.15 million, 37.8% (Tolts, Demoscope Weekly, 2006).",
kazakhLossRep: "Kazakh decline in the republic",
kazakhLossRepSub: "≈3.63 → ≈2.33 million · 1926 and 1939 censuses",
info_kazLossRep: "1926 census: ≈3.63 million Kazakhs (Asylbek & Asylbekova, 2014); 1939 census: 2.33 million (Tolts, Demoscope Weekly, 2006). Decline: (2.33 − 3.63) ÷ 3.63 ≈ −36%.",
popRep1926: "Population of the republic",
popRep1926Sub: "1926 census",
kazRep1926: "Kazakhs in the republic",
kazRep1926Sub: "≈58.5% of the population",
info_popRep1926: "1926 census: ≈6.2 million inhabitants, or 6,198.5 thousand (Demoscope: Kazak ASSR minus the Kara-Kalpak AO; matches Wikipedia’s 6.198 million). Sums over the 8 okrugs of the atlas’s working dataset are in the table and okrug cards (cross-check in progress).",
info_kazRep1926: "1926 census: 3,627.6 thousand Kazakhs, 58.5% of the republic’s population (Demoscope: Kazak ASSR minus the Kara-Kalpak AO; Asylbek, M. Kh., & Asylbekova, Zh. M., 2014).",
oblastDataLabel: "Oblast figures",
oblastDataVal: "cross-check in progress",
oblastDataSub: "oblast percentages are in the oblast cards (atlas working dataset)",
regionCheckTag: "cross-check in progress",
regionCheckTip: "A value from the atlas’s working dataset; cross-checking against the published oblast census results is in progress.",
prelimNote: "prelim., cross-check in progress",
markTypeCamp: "Camp",
markTypeSite: "Construction site, industrial facility",
markTypeRevolt: "Uprising",
markYear: "Year",
markSource: "Source",
markSrcPending: "source to be specified",
markNoDesc: "A detailed description has not been added yet.",
markOpenHint: "Open the card",
info_maupCalc: "Own calculation: areal interpolation of the 1926 Kazakh population from the 8-okrug grid to the 12-oblast grid; the dissimilarity index is half the sum of absolute share shifts.",
info_inter96: "Own calculation: an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area. The intersection area is computed for each pair of a 1926 okrug and a 1939 oblast in GeoPandas/Shapely.",
info_coverage: "The total area of the 8 okrugs equals that of the 12 oblasts (0.05% difference): both grids describe the same territory.",
aprobHeading: "Approbation: survey",
aprobMeta: "N = 32 respondents · 11 questions",
aprob1: "perceived Asharshylyk as a single republic-wide figure",
aprob2: "did not know that the administrative grids changed between the censuses",
aprob3: "find the interactive layers clearer than a textbook",
aprob4: "realised for the first time why the 1939 census recorded overall population growth in the Karaganda and Balkhash districts",
aprobLink: "Response table (Google Sheets) ↗",
aprobLimit: "Sample limitation: N = 32, a small and non-representative sample; the results describe how the atlas materials were perceived, not historical facts.",
contribHeading: "Author contributions",
contribAlizar: "historiography, compiling the census tables, comparing loss estimates, the questionnaire.",
contribAli: "the spatial part, the atlas web architecture, overlaying the grids in GeoPandas/Shapely, the 8 × 12 matrix (96 okrug–oblast pairs, 37 of them with a non-zero intersection area).",
contribJointLabel: "Jointly",
contribJoint: "formulating the hypothesis and separating “estimate / model”.",
contribNameAlizar: "Alizar Zhagipparov",
contribNameAli: "Ali Uteseitov",
sidelblL: "1926 · okrugs",
sidelblR: "1939 · oblasts",
splitTitle: "Kazakh share · 1926 (okrugs) and 1939 (oblasts)",
splitLegend: "Kazakh share, %: one scale for 1926 and 1939",
noDataLegend: "no data",
ariaMapKz: "Map of Kazakhstan",
ariaMapWorld: "World map",
ariaMapSchools: "Map of historiographic lenses",
disclaimer1926: "The 1926 okrug boundaries are a reference reconstruction: modern administrative geometry (geoBoundaries), merged under the 1926 historical units. This is not an archival cadastral shapefile. Demographic attributes are stored separately from the geometry. Oblast-level figures are the atlas’s working dataset; cross-checking against the published census results by oblast is in progress, see the data changelog.",
disclaimer1939: "The 1939 oblast boundaries are a reference reconstruction on modern geometry. The 1926 and 1939 attribute sets come from different sources with different base totals, so comparing shares rather than absolute sums is more accurate. Oblast-level figures are the atlas’s working dataset; cross-checking against the published census results by oblast is in progress, see the data changelog.",
secWorldLayer: "World map layer",
segFlows: "Migrations",
segFamines: "1930s famines",
secDirections: "Directions",
dirAbroad: "Abroad",
dirSoviet: "To Soviet republics",
hintFlows: "Line thickness is the estimated scale of the flow. Hover a line or point to see the range and a note.",
hintFamines: "Circle size is the share of deaths relative to the region’s population. Kazakhstan shows the largest relative loss among the peoples of the USSR.",
secFlowSummary: "Migration totals",
kvLeft: "Left the republic",
kvReturned: "Returned later",
kvPermanent: "Never returned",
kvAbroadStayed: "Stayed abroad",
noteFlowsDiscuss: "The breakdown by specific destination is a debated estimate. S. Cameron explicitly calls an exact count by country an open research question.",
noteProjection: "Regional view: Albers equal-area conic projection, central meridian 65°E, standard parallels 28°N and 58°N. Whole-world view: Equal Earth equal-area projection with the same central meridian. Both projections preserve area ratios, so territories on the map can be compared. Country borders are modern (Natural Earth 1:50m; 1:110m for the whole world) and serve as a geographic reference, not as a political map of the 1930s. The outline of Kazakhstan (the Kazak ASSR, the Kazakh SSR from 1936) is the union of the 12 oblasts of our 1939 grid and, like the grid itself, is a reconstruction. The dashed line marks the Republic of Karakalpakstan within its modern borders (geoBoundaries), as an approximate reference. The Aral Sea is shown within its shoreline before the 1960s; the Caspian Sea is shown with its modern shoreline.",
schoolsHeading: "Three lenses on one catastrophe",
schoolsIntro: "Historians disagree not about whether the famine happened, but about what should count as its mechanism. Choose a school, and the map will highlight the regions central to that particular explanation. That is the point of this section: the same data, different questions asked of it, a different geography of the answer.",
chooseSchool: "Choose a school",
chooseSchoolHint: "Click a card above to see the full thesis and the corresponding highlight on the map.",
focusRegions: "Regions in focus for this lens",
askAssistantSchool: "Ask the assistant about this school",
schoolCaptionDefault: "Map of Kazakh population loss by 1939 oblast. Choose a school above.",
biblioHeading: "Bibliography and sources",
biblioIntro: "The bibliography of the research paper “Cartography of Collapse”: 15 main and 35 electronic sources in APA 7 style, plus 3 sources added after the paper was submitted, listed separately. Cyrillic-script titles and names are transliterated, with English translations of titles in square brackets.",
biblioCopy: "Copy APA reference",
biblioCopied: "APA reference copied",
biblioCopyFail: "Could not copy. Select the reference manually",
biblioGroup_primary: "Primary sources and statistics",
biblioGroup_works: "Monographs and articles",
biblioGroup_geo: "Geodata and methods",
biblioGroup_extra: "Additional sources (after the paper was submitted)",
biblioApaNote: "References follow APA 7th edition. Cyrillic-script references are transliterated (Russian: simplified BGN/PCGN; Kazakh letters ә ғ қ ң ө ұ ү һ і as a, gh, q, ng, o, u, u, h, i), with English translations of titles in square brackets. Within each section, entries are alphabetical by the first author’s surname, or by title when there is no author. Online sources were accessed on 4 May 2026.",
biblioPrint: "Print publication",
dataHeading: "The main result: the grid changes the conclusion",
statShiftSum: "Total share shift",
statShiftUnit: "percentage points",
statDissim: "Dissimilarity index",
statDissimSub: "a fifth of the distribution",
statIntersections: "Okrug–oblast pairs (8 × 12)",
statIntersectionsSub: "37 of them with a non-zero intersection area",
statCoverage: "Both grids cover the same territory",
statCoverageSub: "area of 8 okrugs = area of 12 oblasts",
dataIntro: "One territory, the same people, two administrative grids. Reallocating the 1926 Kazakh population from the 8-okrug grid onto the 12-oblast grid produces a total share shift of 42.46 points, and a dissimilarity index of 21.2%. In practice: a researcher working only with the 1939 grid would get a different map of the catastrophe’s epicenter than one working with the 1926 grid. The boundary determines the conclusion: that is the Modifiable Areal Unit Problem.",
calcHeading: "Areal interpolation calculator",
calcSrcLabel: "1926 okrug (source)",
calcTgtLabel: "1939 oblast (target)",
calcBtn: "Calculate",
exportHeading: "Data export",
exportCsv: "CSV · indicator table",
exportGeo: "GeoJSON · boundaries and attributes",
exportMaup: "CSV · intersection matrix",
exportHint: "All data is open. The GeoJSON opens in QGIS, ArcGIS, and geojson.io.",
tableHeading: "Indicator table",
tableHint: "Click a column header to sort, click a row to open the region card.",
logHeading: "Data changelog",
logIntro: "Every change to figures and wording that affects the atlas data: what changed, why, and on what source.",
logWhat: "What changed",
logWhy: "Why",
logSource: "Source",
quizTag: "For students",
quizHeading: "Check what you understood",
quizIntro: "A quiz on the site’s material: the map, census data, historiography, and HGIS methodology. Each answer comes with an explanation and a source, and the end brings a review of mistakes.",
quizStatQuestions: "Questions",
quizStatFormat: "Format",
quizStatFormatSub: "one correct",
quizStatFormatVal: "4 options",
quizStatTime: "Time",
quizStatTimeVal: "No limit",
quizGo: "Start the quiz",
quizShuffle: "Shuffle questions",
quizShuffleOn: "The question order will be shuffled (answer options are always shuffled)",
quizShuffleOff: "Question order matches the question bank",
quizNext: "Next ›",
quizFinish: "Result",
quizAgain: "Retake",
quizBack: "Back to materials",
quizCorrect: "✓ Correct",
quizWrong: "✕ Incorrect",
quizReview: "Review of mistakes",
quizYourAnswer: "Your answer:",
quizCorrectAnswer: "Correct:",
quizMsg100: "Flawless. You’ve fully absorbed the material.",
quizMsg80: "A great result: you understood the essentials correctly.",
quizMsg50: "Not bad. Review the mistakes below and try again.",
quizMsgLow: "It’s worth revisiting the “Historiography” and “Data & MAUP” sections.",
aiHeading: "AI assistant on the site’s material",
aiSub: "The model runs right in your browser: nothing is sent anywhere",
aiOffline: "Offline mode",
exportPngTitle: "Download map (PNG)",
pngCredit: "Cartography of Collapse · an HGIS atlas of Asharshylyk, 1926–1939",
pngSrcWorld: "Regional map, Albers equal-area conic projection, central meridian 65°E. Basemap: Natural Earth 1:50m; the Aral Sea within its shoreline before the 1960s, the Caspian Sea with its modern shoreline; the outline of Kazakhstan from the 12 oblasts of 1939. Migration destinations and sizes are historiographic estimates (debated); famine figures are estimates by different authors.",
pngSrcWorldWhole: "World map, Equal Earth projection, central meridian 65°E. Basemap: Natural Earth 1:110m; the Caspian Sea with its modern shoreline; the outline of Kazakhstan from the 12 oblasts of 1939. Migration destinations and sizes are historiographic estimates (debated); famine figures are estimates by different authors.",
toastPngFailed: "Could not save the map as PNG",
mapPhoneHint: "The map is easier to work with on a laptop or tablet",
aiDisclaimer: "Answers are for reference, based on the atlas materials; check them against the primary sources.",
aiLoadNoGpu: "The model is unavailable: this browser has no WebGPU. Answers come from the offline search over the atlas knowledge base.",
aiReady: "Model ready",
aiLoading: "Loading the model…",
aiModelLabel: "Model",
aiLoadBtn: "Load model",
aiNotLoaded: "Model not loaded",
aiLoadedNote: "Model loaded and running locally",
aiPlaceholder: "Ask about a region, a figure, a historian, or a method…",
aiSend: "Ask",
aiNoteGpu: "The model downloads once and is cached by the browser, then works without internet. Until it’s loaded, the assistant answers with excerpts from the built-in knowledge base. Answers are always built only from this site’s material, so verify them against the “Data & MAUP” section.",
aiNoteNoGpu: "This browser doesn’t support WebGPU, so the language model can’t run. The built-in offline search over the site’s knowledge base is active instead. For the full model, open the site in a recent version of Chrome, Edge, or Firefox on a computer.",
aiGreeting: "Hello! I answer using this research’s material: the maps, the 1926 and 1939 censuses, the migrations, the historiography, and the HGIS method. Ask a question or pick a suggestion below.\n\nTo have a language model generate answers right in your browser, click “Load model”. Without it I answer with precise excerpts from the knowledge base.",
aiSourceLabel: "Source in the site’s material: ",
aiNoHits: "The atlas knowledge base has no answer to this question. Try asking about a region (e.g. “Akmola Oblast”), about loss estimates, or about the MAUP method.",
aiIdentity: "I'm the AI assistant for \"Cartography of Collapse\": a language model that runs right in your browser (nothing is sent anywhere) and answers questions using this site's material: the maps, the 1926 and 1939 censuses, the migrations, the historiography of Asharshylyk, and the HGIS method. Ask about a region, a historian, a figure, or a method.",
toastWebgpuMissing: "WebGPU is unavailable in this browser: offline mode is active",
toastModelLoaded: "Model loaded: answers are now generated in your browser",
toastModelFailed: "The model failed to load. The assistant is answering with excerpts from the knowledge base.",
aiAsk: "Tell me about: ",
storyPrev: "‹ Back",
storyNext: "Next ›",
storyFinish: "Finish",
storyExit: "Exit",
storyStep: "Step",
storyOf: "of",
toastSplitHint: "Kazakh share on one scale: left, the 1926 grid of 8 okrugs; right, the 1939 grid of 12 oblasts. Drag the divider.",
toastThemeDark: "Dark theme",
toastThemeLight: "Light theme",
toastDownloaded: "File {n} saved",
toastDownloadFailed: "Could not save the file",
toastExportUnavailableHere: "File export isn't available in this shared view. Download the full site file from the chat instead: export works there.",
toastLangChanged: "Interface language: English",
aboutTitle: "About the project",
aboutSub: "A spatial-demographic analysis of the Asharshylyk famine using historical GIS",
gridUnitOkrug: "okrug",
gridUnitOblast: "oblast",
printGenerated: "Generated",
okrugsCount: "Okrugs",
totalPopulation: "Total population",
kazakhsWord: "Kazakhs",
livestockCount: "Livestock head",
oblastsCount: "Oblasts",
kazakhLoss: "Kazakh population loss",
byOkrugsGrid: "1926 grid",
byOblastsGrid: "1939 grid",
toThousandKm: "by 1933, about one-tenth remained",
abroadDest: "Foreign destinations",
sovietDest: "Within the USSR",
biggestDest: "Largest destination",
returnedShare: "Share who returned",
relLoss: "Relative loss",
absMax: "Absolute maximum",
deathEstimates: "Irrecoverable Kazakh losses",
deathEstimatesSub: "estimates by different authors; A. N. Alekseenko: 1.5–1.84 million",
kazakhShareRepublic: "Kazakh share of the republic",
regionGridLabel: "Grid",
regionOf: "",
lossOfKazPop: "loss of Kazakh population, 1926 → 1939",
kazakhs1926: "Kazakhs, 1926",
kazakhs1939: "Kazakhs, 1939",
total1926: "Total, 1926",
total1939: "Total, 1939",
generalPopChange: "Change in total population",
kazShareChange: "Kazakh share 1926 → 1939",
maupShift: "MAUP share shift",
shareKazPop: "share of Kazakhs in the okrug’s population, 1926",
totalPop: "Total population",
kazakhPop: "Kazakh population",
otherPop: "Other population",
formedFrom: "Which 1926 okrugs formed this oblast",
ofArea: "% of area",
maupNote: "Areal interpolation gives {a} Kazakhs for this oblast in 1926, versus {b} from the attribute data, a discrepancy of {c}%. This is a direct illustration of MAUP.",
savePdf: "🖨 Save as PDF",
askAssistant: "Ask the assistant",
tagNomadic: "Nomadic pastoralism",
tagGulag: "Camps & construction",
tagUnrest: "Uprising site",
chartHint: "Click to open the card",
flowRange: "thousand",
flowAbroadLabel: "Foreign",
flowSovietLabel: "Within the USSR",
flowEstimate: "destination · estimate",
legendFlowsAbroad: "abroad",
legendFlowsSoviet: "to Soviet republics",
legendFlowsThickness: "thickness shows the estimated scale of the flow",
legendFamineKz: "Kazak ASSR",
legendFamineOther: "other USSR regions",
legendFamineNon: "outside the USSR, other causes",
famineDeathShare: "of the region’s population died",
famineVictims: "Deaths:",
faminePop: "population",
kzAssrLabel: "Kazak ASSR",
legendKzOutline: "Kazakhstan: outline of the 12 oblasts of 1939",
legendKarakalpak: "Karakalpakstan (modern borders, approximate)",
legendAral: "Aral Sea before the 1960s",
tipUprising: "uprising",
tipUprisingYear: ". One of more than 370 uprisings of 1929–1931 (T. Omarbekov).",
worldToRegion: "To region",
worldWhole: "Whole world"
},
kz: {
pageTitle: "Күйреу картографиясы · Қазақстан 1926–1939",
pageDesc: "Ашаршылықтың (1930–1933 жж.) HGIS құралдарымен жасалған интерактивті тарихи-географиялық талдауы: 1926 және 1939 жылдардағы санақтар, MAUP мәселесі, көші-қон картасы, тарихнамалық көзқарастар.",
brandTitle: "Күйреу картографиясы",
brandSub: "Ашаршылық · HGIS · 1926–1939",
tabKz: "Қазақстан картасы",
tabWorld: "Әлем картасы",
tabSchools: "Тарихнама",
tabBiblio: "Библиография",
tabData: "Деректер және MAUP",
tabQuiz: "Викторина",
tabAi: "ЖИ-көмекші",
btnAboutTitle: "Жоба және әдіснама туралы",
themeToLight: "Ашық тақырыпқа ауысу",
themeToDark: "Қараңғы тақырыпқа ауысу",
btnLangTitle: "Интерфейс тілі",
secGrid: "Әкімшілік бөліну торы",
seg1926: "1926 · 8 округ",
seg1939: "1939 · 12 облыс",
hintGrid1926: "1926 жылғы санақ: Қазақ АКСР-інің 8 ірі округі. Ірі бірліктер деректерді көбірек орташалайды: бұл MAUP-тағы масштаб әсері.",
hintGrid1939: "1939 жылғы санақ: 12 облыс. Ұсақтау тор 1926 жылғы торда көрінбейтін қайшылықтарды көрсетеді.",
secMetric: "Көрсеткіш",
secLayers: "Қосымша қабаттар",
layerCamps: "Лагерьлер мен құрылыстар",
layerRevolts: "1929–1931 көтерілістері",
layerLabels: "Аймақ атаулары",
secModes: "Режимдер",
btnStoryStart: "▶ Қорғау режимі: зерттеудің 6 қадамы",
btnStoryStop: "⏸ Турды тоқтату",
btnSplit: "⇔ Салыстыру 1926 / 1939",
hintStory: "StoryMap зерттеудің алты қадамынан өткізеді: 1926 жылғы даладан бастап MAUP туралы әдіснамалық қорытындыға дейін.",
zoomInTitle: "Жақындату",
zoomOutTitle: "Алыстату",
zoomReset: "Бастапқы қалып",
mapWheelHint: "Ctrl (⌘) + дөңгелек: картаны масштабтау",
mapTouchHint: "Картаны екі саусақпен жылжытыңыз",
mapBasis_c26: "1926 ж. санақ",
mapBasis_c39: "1939 ж. санақ",
mapBasis_c2: "1926 және 1939 жж. санақтар",
mapBasis_model: "модель: ареалдық интерполяция",
mapUnits1926: "8 бірлік",
mapUnits1939: "12 бірлік",
mapProjKz: "Проекция: Альберстің тең аумақты конустық проекциясы, орталық меридиан 68° ш. б., стандартты параллельдер 45° және 53° с. е.",
mapSrcData: "Деректер: 1926 және 1939 жж. санақтар бойынша атластың жұмыс деректер жиынтығы, жарияланған қорытындылармен салыстыру жүргізілуде. Шекаралар: geoBoundaries геометриясына негізделген реконструкция.",
mapSrcModel: "Есептеу: 1926 және 1939 жж. торлары бойынша ареалдық интерполяция, 8 × 12 матрицасы: «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен. Шекаралар: geoBoundaries геометриясына негізделген реконструкция.",
lvl_census: "санақ",
lvl_model: "модель",
lvl_hist: "тарихнамалық баға",
lvlTip_census: "Деңгей: 1926/1939 жж. санақ деректері (атластың жұмыс деректер жиынтығы; облыстар бойынша жарияланған қорытындылармен салыстыру жүргізілуде).",
lvlTip_model: "Деңгей: 1926 және 1939 жж. торлары арасындағы ареалдық интерполяция арқылы алынған модельдің есептік мәні.",
lvlTip_hist: "Деңгей: тарихшылардың бағасы. Бұл есеп нәтижесі емес, авторы көрсетілген диапазон.",
introOpenTitle: "Зерттеу туралы: қазылар алқасына кіріспе",
introKicker: "Зерттеу жұмысы · тарихи ГАЖ",
introTitle: "Ыдырау картографиясы — ГАЖ және ашық тарихи деректер арқылы Қазақстандағы кеңестік ұжымдастырудың демографиялық мұрасын картаға түсіру",
introQLabel: "Зерттеу сұрағы",
introQ: "Апат географиясы туралы қорытындылар деректер топтастырылған әкімшілік торға қаншалықты тәуелді?",
introHLabel: "Гипотеза",
introH: "Гипотеза бойынша ең ауыр шығындар дәстүрлі мал шаруашылығы аудандарына келді, ал өнеркәсіп орталықтарындағы статистикалық өсім мәжбүрлі және ұйымдастырылған көші-қонның салдары болуы мүмкін.",
introResultsLabel: "Үш басты нәтиже",
introR1: "Республика халқындағы қазақтар үлесі: 1926 ж. санақ бойынша ≈58,5 % → 1939 ж. санақ бойынша ≈38 %.",
introR2: "Санақтар арасында республикадағы қазақ халқының кемуі: ≈36 % (≈3,63 → ≈2,33 млн адам).",
introR3: "1926 және 1939 жж. торларын қабаттастыру нәтижесі: 8 × 12 матрицасы, «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен: апат эпицентрінің картада қай жерде шығатыны тордың таңдауына байланысты (MAUP).",
introSrc: "Республикалық қорытындылар: 1926 ж. санақ (Асылбек М. Х., Асылбекова Ж. М., 2014); 1939 ж. санақ (Тольц, Демоскоп Weekly, 2006). Атластың облыстық көрсеткіштері жарияланған қорытындылармен әлі салыстырылуда.",
introAuthorsLabel: "Авторлар",
introAuthors: "Жагиппаров Ализар, Утесеитов Али · 11F · НЗМ Астана",
introSupLabel: "Ғылыми жетекші",
introSup: "Ғазиз Ақтоты Ғазизқызы",
introStart: "▶ Қорғауды бастау (6 қадам)",
introExplore: "Өз бетімше зерттеу",
introClose: "Жабу",
btnDefenseShort: "▶ Қорғау режимі",
methNote: "Әдіснамалық ескерту: шекаралар қазіргі геометриядағы тірек реконструкция болып табылады; карта салыстырмалы талдауға арналған, мұрағаттық кадастр емес",
methNoteMore: "1926 ж. округтер мен 1939 ж. облыстардың контурлары қазіргі әкімшілік геометриядан (geoBoundaries) тарихи бірліктерге сәйкес құрастырылған; нақты шекаралар өзгеше болған. Демографиялық көрсеткіштер геометриядан бөлек сақталады; облыстық мәндер атластың жұмыс деректер жиынтығынан алынған, жарияланған санақ қорытындыларымен салыстыру жүргізілуде.",
infoLabel: "Дереккөз және есептеу тәсілі",
info_livestock: "Тарихнамалық баға: ұжымдастыруға дейін шамамен 40 млн бас мал, 1933 ж. қарай шамамен оннан бірі қалды (С. Кэмерон, «The Hungry Steppe», 2018).",
info_flowsDest: "Картадағы көші-қон бағыттары бойынша бағалау диапазондарының қосындысы. Елдер бойынша бөліну пікірталастық баға болып қала береді: С. Кэмерон нақты есепті ашық зерттеу мәселесі деп атайды.",
info_returned: "≈1,13 млн көшіп кеткендердің 454 мыңы оралды (ҚР ПМА мұрағат деректері; С. Кэмерон).",
info_relLoss: "Тарихнамалық баға: қазақтардың ≈38 %-ы қаза тапты (С. Кэмерон, «The Hungry Steppe», 2018).",
info_absMax: "Украин КСР-і: ≈3,3–3,9 млн қаза тапқан («between 3.3 and 3.9 million died in Ukraine»; Wikipedia, «Soviet famine of 1930–1933» (жұмыстың әдебиеттер тізіміндегі Э15).",
info_deathEst: "Қазақ халқының қайтарымсыз шығыны ≈1,3–2,3 млн: әртүрлі авторлар бағаларының диапазоны (жұмыс мәтіні бойынша); А. Н. Алексеенко (2000): 1,5–1,84 млн.",
info_shareRep: "1926 ж. санақ: 6 198,5 мың тұрғынның 3 627,6 мыңы қазақ, 58,5 % (Демоскоп: Қарақалпақ АО-сыз Қазақ АКСР-і; Асылбек, Асылбекова, 2014); 1939 ж. санақ: 6,15 млн-ның 2,33 млн-ы, 37,8 % (Тольц, Демоскоп Weekly, 2006).",
kazakhLossRep: "Республикадағы қазақтардың кемуі",
kazakhLossRepSub: "≈3,63 → ≈2,33 млн · 1926 және 1939 жж. санақтар",
info_kazLossRep: "1926 ж. санақ: ≈3,63 млн қазақ (Асылбек, Асылбекова, 2014); 1939 ж. санақ: 2,33 млн (Тольц, Демоскоп Weekly, 2006). Кему: (2,33 − 3,63) ÷ 3,63 ≈ −36 %.",
popRep1926: "Республика халқы",
popRep1926Sub: "1926 ж. санақ",
kazRep1926: "Республикадағы қазақтар",
kazRep1926Sub: "халықтың ≈58,5 %-ы",
info_popRep1926: "1926 ж. санақ: ≈6,2 млн тұрғын, дәлірек 6 198,5 мың (Демоскоп: Қарақалпақ АО-сыз Қазақ АКСР-і; Wikipedia-дағы 6,198 млн-мен сәйкес). Атлас жұмыс жиынтығының 8 округі бойынша қосындылар кестеде және округ карточкаларында берілген (салыстыру жүргізілуде).",
info_kazRep1926: "1926 ж. санақ: 3 627,6 мың қазақ, республика халқының 58,5 %-ы (Демоскоп: Қарақалпақ АО-сыз Қазақ АКСР-і; Асылбек М. Х., Асылбекова Ж. М., 2014).",
oblastDataLabel: "Облыстық көрсеткіштер",
oblastDataVal: "салыстыру жүргізілуде",
oblastDataSub: "облыстар бойынша пайыздар облыс карточкаларында (атластың жұмыс жиынтығы)",
regionCheckTag: "салыстыру жүргізілуде",
regionCheckTip: "Атластың жұмыс деректер жиынтығындағы мән; облыстар бойынша жарияланған санақ қорытындыларымен салыстыру жүргізілуде.",
prelimNote: "алдын ала, салыстыру жүргізілуде",
markTypeCamp: "Лагерь",
markTypeSite: "Құрылыс, өнеркәсіп нысаны",
markTypeRevolt: "Көтеріліс",
markYear: "Жыл",
markSource: "Дереккөз",
markSrcPending: "дереккөзі нақтылануда",
markNoDesc: "Толық сипаттама әлі қосылмаған.",
markOpenHint: "Карточканы ашу",
info_maupCalc: "Меншікті есептеу: 1926 ж. қазақ халқын 8 округ торынан 12 облыс торына ареалдық интерполяциялау; ұқсамау индексі үлес ығысулары модульдерінің жартысына тең.",
info_inter96: "Меншікті есептеу: 8 × 12 матрицасы: «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен. 1926 ж. әр округ пен 1939 ж. әр облыс жұбы үшін қиылысу ауданы GeoPandas/Shapely-де есептелген.",
info_coverage: "8 округтің аудандарының қосындысы 12 облыстың аудандарының қосындысына тең (айырмашылық 0,05 %): екі тор бір аумақты сипаттайды.",
aprobHeading: "Апробация: сауалнама",
aprobMeta: "N = 32 респондент · 11 сұрақ",
aprob1: "Ашаршылықты бір республикалық сан ретінде қабылдаған",
aprob2: "санақтар арасында әкімшілік торлардың ауысқанын білмеген",
aprob3: "интерактивті қабаттарды оқулықтан түсініктірек деп санайды",
aprob4: "1939 ж. санақта Қарағанды және Балқаш аудандары бойынша неге жалпы халық өсімі тіркелгенін алғаш рет түсінген",
aprobLink: "Жауаптар кестесі (Google Кестелер) ↗",
aprobLimit: "Іріктеме шектеуі: N = 32, іріктеме шағын және репрезентативті емес; нәтижелер тарихи фактілерді емес, атлас материалдарының қабылдануын сипаттайды.",
contribHeading: "Авторлардың үлесі",
contribAlizar: "тарихнама, санақ кестелерін жинақтау, шығын бағаларын салыстыру, сауалнама.",
contribAli: "кеңістіктік бөлім, атластың веб-архитектурасы, GeoPandas/Shapely-де торларды қабаттастыру, 8 × 12 матрицасы («округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен).",
contribJointLabel: "Бірлесіп",
contribJoint: "гипотезаны тұжырымдау және «баға / модель» деп ажырату.",
contribNameAlizar: "Жагиппаров Ализар",
contribNameAli: "Утесеитов Али",
sidelblL: "1926 · округтер",
sidelblR: "1939 · облыстар",
splitTitle: "Қазақтар үлесі · 1926 (округтер) және 1939 (облыстар)",
splitLegend: "Қазақтар үлесі, %: 1926 және 1939 жж. үшін бір шкала",
noDataLegend: "дерек жоқ",
ariaMapKz: "Қазақстан картасы",
ariaMapWorld: "Әлем картасы",
ariaMapSchools: "Тарихнамалық көзқарастар картасы",
disclaimer1926: "1926 жылғы округ шекаралары тірек реконструкция болып табылады: тарихи бірліктерге сәйкес біріктірілген қазіргі әкімшілік геометрия (geoBoundaries). Бұл мұрағаттық кадастрлық shapefile емес. Демографиялық атрибуттар геометриядан бөлек сақталады. Облыстық көрсеткіштер атластың жұмыс деректер жиынтығынан алынған; облыстар бойынша жарияланған санақ қорытындыларымен салыстыру жүргізілуде, деректер өзгерістері журналын қараңыз.",
disclaimer1939: "1939 жылғы облыс шекаралары қазіргі геометрияға негізделген тірек реконструкция болып табылады. 1926 және 1939 жылдардың атрибуттары әртүрлі көздерден алынған әрі базалық қорытындылары бөлек, сондықтан абсолютті сандарды емес, үлестерді салыстырған дұрысырақ. Облыстық көрсеткіштер атластың жұмыс деректер жиынтығынан алынған; облыстар бойынша жарияланған санақ қорытындыларымен салыстыру жүргізілуде, деректер өзгерістері журналын қараңыз.",
secWorldLayer: "Әлем картасының қабаты",
segFlows: "Көші-қон",
segFamines: "1930 жж. ашаршылық",
secDirections: "Бағыттар",
dirAbroad: "Шетелге",
dirSoviet: "КСРО республикаларына",
hintFlows: "Сызық қалыңдығы ағынның болжамды көлемін көрсетеді. Диапазон мен түсініктемені көру үшін сызыққа немесе нүктеге тінтуірді апарыңыз.",
hintFamines: "Шеңбер өлшемі аймақ халқына шаққандағы қаза болғандар үлесін көрсетеді. Қазақстан КСРО халықтары арасында ең үлкен салыстырмалы шығынды көрсетеді.",
secFlowSummary: "Көші-қон қорытындысы",
kvLeft: "Республикадан кеткендер",
kvReturned: "Кейін оралғандар",
kvPermanent: "Қайтпай кеткендер",
kvAbroadStayed: "Шетелде қалғандар",
noteFlowsDiscuss: "Нақты бағыттар бойынша бөліну пікірталастық баға болып қала береді. С. Кэмерон елдер бойынша дәл санақты ашық зерттеу мәселесі деп тікелей атайды.",
noteProjection: "Аймақтық көрініс: Альберстің тең аумақты конустық проекциясы, орталық меридиан 65° ш. б., стандартты параллельдер 28° және 58° с. е. «Бүкіл әлем» көрінісі: орталық меридианы сондай Equal Earth тең аумақты проекциясы. Екі проекция да аудандар арақатынасын сақтайды, сондықтан картадағы аумақтарды салыстыруға болады. Мемлекет шекаралары қазіргі (Natural Earth 1:50m, бүкіл әлем үшін 1:110m), олар 1930-жылдардың саяси картасы емес, географиялық бағдар ғана. Қазақстан контуры (Қазақ АКСР-і, 1936 жылдан Қазақ КСР-і) біздің 1939 жылғы торымыздағы 12 облысты біріктіру арқылы алынды және тордың өзі сияқты реконструкция болып табылады. Пунктирмен Қарақалпақстан Республикасы қазіргі шекарасында (geoBoundaries) белгіленген: бұл шамамен алынған бағдар. Арал теңізі 1960-жылдарға дейінгі шекарасында, Каспий теңізі қазіргі шекарасында көрсетілген.",
schoolsHeading: "Бір апатқа үш көзқарас",
schoolsIntro: "Тарихшылардың пікірі ашаршылық болды ма деген мәселеде емес, оның механизмі не деген мәселеде алшақтайды. Мектепті таңдаңыз, карта сол түсініктеменің орталығындағы аймақтарды бөліп көрсетеді. Тарихнама бөлімінің мәні осында: бірдей деректер, оларға қойылған әртүрлі сұрақтар, жауаптың әртүрлі географиясы.",
chooseSchool: "Мектепті таңдаңыз",
chooseSchoolHint: "Толық тезис пен картадағы белгілеуді көру үшін жоғарыдағы карточканы басыңыз.",
focusRegions: "Осы көзқарас назардағы аймақтар",
askAssistantSchool: "Осы мектеп туралы көмекшіден сұрау",
schoolCaptionDefault: "1939 жылғы облыстар бойынша қазақ халқының шығын картасы. Жоғарыдан мектепті таңдаңыз.",
biblioHeading: "Библиография және дереккөздер",
biblioIntro: "«Күйреу картографиясы» ғылыми жұмысының әдебиеттер тізімі: APA 7 бойынша рәсімделген 15 негізгі және 35 электрондық дереккөз, сондай-ақ жұмыс тапсырылғаннан кейін тартылған 3 дереккөз бөлек берілген. Атаулар түпнұсқа тілінде берілген.",
biblioCopy: "APA сілтемесін көшіру",
biblioCopied: "APA сілтемесі көшірілді",
biblioCopyFail: "Көшіру мүмкін болмады. Сілтемені қолмен белгілеңіз",
biblioGroup_primary: "Бастапқы дереккөздер мен статистика",
biblioGroup_works: "Монографиялар мен мақалалар",
biblioGroup_geo: "Геодеректер мен әдістер",
biblioGroup_extra: "Қосымша дереккөздер (жұмыс тапсырылғаннан кейін)",
biblioApaNote: "Тізім APA 7th edition бойынша рәсімделген. Бөлімдер ішінде алдымен кириллицадағы, содан кейін латиницадағы дереккөздер бірінші автордың тегі (автор болмаса, атауы) бойынша әліпби ретімен берілген. Электрондық ресурстарға жүгінген күн: 2026 ж. 4 мамыр.",
biblioPrint: "Баспа басылымы",
dataHeading: "Басты нәтиже: тор қорытындыны өзгертеді",
statShiftSum: "Үлестердің жиынтық ауытқуы",
statShiftUnit: "пайыздық тармақ",
statDissim: "Ұқсамау индексі",
statDissimSub: "үлестірімнің бестен бірі",
statIntersections: "«Округ — облыс» жұптары (8 × 12)",
statIntersectionsSub: "оның 37-сінде қиылысу ауданы нөлден үлкен",
statCoverage: "Екі тор бір аумақты қамтиды",
statCoverageSub: "8 округтің ауданы = 12 облыстың ауданы",
dataIntro: "Бір аумақ, бір халық, екі әкімшілік тор. 1926 жылғы қазақ халқын 8 округтік тордан 12 облыстық торға ауыстырғанда, үлестердің жиынтық ауытқуы 42,46 п.т. құрайды, ал ұқсамау индексі 21,2 % құрайды. Практикалық мәні: егер зерттеуші тек 1939 жылғы тормен жұмыс істесе, ол 1926 жылғы тормен жұмыс істегеннен өзгеше апат эпицентрі картасын алар еді. Шекара қорытындыны анықтайды: бұл дәл Modifiable Areal Unit Problem.",
calcHeading: "Ареалдық интерполяция калькуляторы",
calcSrcLabel: "1926 жылғы округ (көз)",
calcTgtLabel: "1939 жылғы облыс (қабылдаушы)",
calcBtn: "Есептеу",
exportHeading: "Деректерді экспорттау",
exportCsv: "CSV · көрсеткіштер кестесі",
exportGeo: "GeoJSON · шекаралар мен атрибуттар",
exportMaup: "CSV · қиылысу матрицасы",
exportHint: "Барлық деректер ашық. GeoJSON файлы QGIS, ArcGIS және geojson.io бағдарламаларында ашылады.",
tableHeading: "Көрсеткіштер кестесі",
tableHint: "Сұрыптау үшін баған тақырыбын, аймақ карточкасын ашу үшін жолды басыңыз.",
logHeading: "Деректер өзгерістерінің журналы",
logIntro: "Атлас деректеріне әсер ететін сандар мен тұжырымдардағы барлық түзетулер: не өзгерді, неге және қандай дереккөз бойынша.",
logWhat: "Не өзгерді",
logWhy: "Неге",
logSource: "Дереккөз",
quizTag: "Оқушыларға арналған",
quizHeading: "Түсінгеніңізді тексеріңіз",
quizIntro: "Сайт материалдары бойынша викторина: карта, санақ деректері, тарихнама және HGIS әдіснамасы. Әр жауаптан кейін дереккөзге сілтемесі бар түсініктеме беріледі, ал соңында қателерге талдау жасалады.",
quizStatQuestions: "Сұрақтар",
quizStatFormat: "Формат",
quizStatFormatSub: "бір дұрыс жауап",
quizStatFormatVal: "4 нұсқа",
quizStatTime: "Уақыт",
quizStatTimeVal: "Шектеусіз",
quizGo: "Викторинаны бастау",
quizShuffle: "Сұрақтарды араластыру",
quizShuffleOn: "Сұрақтар реті араластырылады (жауап нұсқалары әрдайым араластырылады)",
quizShuffleOff: "Сұрақтар реті банктегідей",
quizNext: "Келесі ›",
quizFinish: "Нәтиже",
quizAgain: "Қайта тапсыру",
quizBack: "Материалдарға оралу",
quizCorrect: "✓ Дұрыс",
quizWrong: "✕ Дұрыс емес",
quizReview: "Қателерге талдау",
quizYourAnswer: "Сіздің жауабыңыз:",
quizCorrectAnswer: "Дұрысы:",
quizMsg100: "Мінсіз. Материал толық меңгерілді.",
quizMsg80: "Тамаша нәтиже: негізгісін дұрыс түсіндіңіз.",
quizMsg50: "Жаман емес. Төмендегі қателерді талдап, қайта көріңіз.",
quizMsgLow: "«Тарихнама» және «Деректер және MAUP» бөлімдеріне қайта оралған жөн.",
aiHeading: "Сайт материалдары бойынша ЖИ-көмекші",
aiSub: "Модель тікелей браузерде жұмыс істейді: деректер еш жерге жіберілмейді",
aiOffline: "Офлайн режим",
exportPngTitle: "Картаны жүктеу (PNG)",
pngCredit: "Күйреу картографиясы · Ашаршылықтың HGIS-атласы, 1926–1939",
pngSrcWorld: "Аймақ картасы, Альберс проекциясы (тең аумақты конустық), орталық меридиан 65° ш. б. Негіз: Natural Earth 1:50m; Арал 1960-жылдарға дейінгі шекарасында, Каспий қазіргі шекарасында; Қазақстан контуры 1939 жылғы 12 облыс бойынша. Көші-қон бағыттары мен ауқымы: тарихнамалық бағалар (пікірталастық); ашаршылықтар ауқымы: әртүрлі авторлардың бағалары.",
pngSrcWorldWhole: "Әлем картасы, Equal Earth проекциясы, орталық меридиан 65° ш. б. Негіз: Natural Earth 1:110m; Каспий қазіргі шекарасында; Қазақстан контуры 1939 жылғы 12 облыс бойынша. Көші-қон бағыттары мен ауқымы: тарихнамалық бағалар (пікірталастық); ашаршылықтар ауқымы: әртүрлі авторлардың бағалары.",
toastPngFailed: "Картаны PNG ретінде сақтау мүмкін болмады",
mapPhoneHint: "Картамен толық жұмыс істеу үшін ноутбук немесе планшет ыңғайлырақ",
aiDisclaimer: "Жауаптар анықтамалық, атлас материалдарына негізделген; бастапқы дереккөздермен салыстырыңыз.",
aiLoadNoGpu: "Модель қолжетімсіз: бұл браузерде WebGPU жоқ. Жауаптар атлас білім қоры бойынша офлайн іздеу арқылы құрылады.",
aiReady: "Модель дайын",
aiLoading: "Модель жүктелуде…",
aiModelLabel: "Модель",
aiLoadBtn: "Модельді жүктеу",
aiNotLoaded: "Модель жүктелмеген",
aiLoadedNote: "Модель жүктелді және жергілікті жұмыс істейді",
aiPlaceholder: "Аймақ, сан, тарихшы немесе әдіс туралы сұраңыз…",
aiSend: "Сұрау",
aiNoteGpu: "Модель бір рет жүктеледі және браузерде кэштеледі, содан кейін интернетсіз жұмыс істейді. Ол жүктелгенге дейін көмекші кірістірілген білім қорынан үзінділермен жауап береді. Жауаптар әрқашан тек осы сайттың материалдарына негізделеді, сондықтан оларды «Деректер және MAUP» бөлімі бойынша тексеріңіз.",
aiNoteNoGpu: "Бұл браузерде WebGPU қолдауы жоқ, сондықтан тілдік модель іске қосылмайды. Сайттың білім қоры бойынша кірістірілген офлайн іздеу жұмыс істейді. Толық модель үшін сайтты компьютердегі Chrome, Edge немесе Firefox-тың жаңа нұсқасында ашыңыз.",
aiGreeting: "Сәлеметсіз бе! Мен осы зерттеудің материалдары бойынша жауап беремін: карталар, 1926 және 1939 жылдардағы санақтар, көші-қон, тарихнама және HGIS әдісі. Сұрақ қойыңыз немесе төмендегі ұсыныстардың бірін таңдаңыз.\n\nЖауаптарды тілдік модель тікелей сіздің браузеріңізде жасауы үшін «Модельді жүктеу» түймесін басыңыз. Ол болмаса, мен білім қорынан дәл үзінділермен жауап беремін.",
aiSourceLabel: "Сайт материалдарындағы дереккөз: ",
aiNoHits: "Атлас білім қорында бұл сұраққа жауап жоқ. Аймақ (мысалы, «Ақмола облысы»), шығын бағалары немесе MAUP әдісі туралы сұрап көріңіз.",
aiIdentity: "Мен «Күйреу картографиясы» жобасының ЖИ-көмекшісімін: сіздің браузеріңізде тікелей жұмыс істейтін (деректер еш жерге жіберілмейді) тілдік модельмін және осы сайттың материалдары (карталар, 1926 және 1939 жылдардағы санақтар, көші-қон, Ашаршылық тарихнамасы және HGIS әдісі) бойынша сұрақтарға жауап беремін. Аймақ, тарихшы, сан немесе әдіс туралы сұраңыз.",
toastWebgpuMissing: "Бұл браузерде WebGPU қолжетімсіз: офлайн режим қосылды",
toastModelLoaded: "Модель жүктелді: жауаптар енді сіздің браузеріңізде жасалады",
toastModelFailed: "Модель жүктелмеді. Көмекші білім қорынан үзінділермен жауап береді.",
aiAsk: "Мынаны айтып бер: ",
storyPrev: "‹ Артқа",
storyNext: "Келесі ›",
storyFinish: "Аяқтау",
storyExit: "Шығу",
storyStep: "Қадам",
storyOf: "/",
toastSplitHint: "Қазақтар үлесі бір шкалада: сол жақта 1926 ж. 8 округтік тор, оң жақта 1939 ж. 12 облыс. Бөлгішті сүйреңіз.",
toastThemeDark: "Қараңғы тақырып",
toastThemeLight: "Ашық тақырып",
toastDownloaded: "{n} файлы сақталды",
toastDownloadFailed: "Файлды сақтау мүмкін болмады",
toastExportUnavailableHere: "Файлдарды экспорттау осы қарау терезесінде қолжетімсіз. Чатта жіберілген сайттың толық файлын жүктеп алыңыз: онда экспорт жұмыс істейді.",
toastLangChanged: "Интерфейс тілі: Қазақша",
aboutTitle: "Жоба туралы",
aboutSub: "Тарихи ГАЖ құралдарымен жасалған Ашаршылықтың кеңістіктік-демографиялық талдауы",
gridUnitOkrug: "округ",
gridUnitOblast: "облыс",
printGenerated: "Жасалған уақыты",
okrugsCount: "Округтер",
totalPopulation: "Жалпы халық",
kazakhsWord: "Қазақтар",
livestockCount: "Мал басы",
oblastsCount: "Облыстар",
kazakhLoss: "Қазақтардың шығыны",
byOkrugsGrid: "1926 жылғы тор",
byOblastsGrid: "1939 жылғы тор",
toThousandKm: "1933 жылға қарай шамамен 1/10",
abroadDest: "Шетелдік бағыттар",
sovietDest: "Одақ ішіндегі",
biggestDest: "Ең үлкен бағыт",
returnedShare: "Оралғандар үлесі",
relLoss: "Салыстырмалы шығын",
absMax: "Абсолютті максимум",
deathEstimates: "Қазақтардың қайтарымсыз шығыны",
deathEstimatesSub: "әртүрлі авторлардың бағалары; А. Н. Алексеенко: 1,5–1,84 млн",
kazakhShareRepublic: "Республикадағы қазақтар үлесі",
regionGridLabel: "Тор",
regionOf: "ж.",
lossOfKazPop: "қазақ халқының 1926 → 1939 жж. шығыны",
kazakhs1926: "Қазақтар, 1926",
kazakhs1939: "Қазақтар, 1939",
total1926: "Барлығы, 1926",
total1939: "Барлығы, 1939",
generalPopChange: "Жалпы халық санының өзгеруі",
kazShareChange: "Қазақтар үлесі 1926 → 1939",
maupShift: "MAUP бойынша үлес ауытқуы",
shareKazPop: "округ халқындағы қазақтар үлесі, 1926",
totalPop: "Жалпы халық саны",
kazakhPop: "Қазақ халқы",
otherPop: "Басқа халық",
formedFrom: "Облыс қай округтерден құралды (1926)",
ofArea: "% аумақ",
maupNote: "Ареалдық интерполяция бұл облыс үшін 1926 ж. {a} қазақ береді, ал атрибут бойынша {b}, алшақтық {c} %. Бұл MAUP-тың тікелей мысалы.",
savePdf: "🖨 PDF етіп сақтау",
askAssistant: "Көмекшіден сұрау",
tagNomadic: "Көшпелі мал шаруашылығы",
tagGulag: "Лагерьлер мен құрылыстар",
tagUnrest: "Көтеріліс ошағы",
chartHint: "Карточканы ашу үшін басыңыз",
flowRange: "мың",
flowAbroadLabel: "Шетелдік",
flowSovietLabel: "Одақ ішіндегі",
flowEstimate: "бағыт · баға",
legendFlowsAbroad: "шетелге",
legendFlowsSoviet: "КСРО республикаларына",
legendFlowsThickness: "қалыңдық ағынның болжамды көлемін көрсетеді",
legendFamineKz: "Қазақ АКСР-і",
legendFamineOther: "КСРО-ның басқа аймақтары",
legendFamineNon: "КСРО сыртында, басқа себептер",
famineDeathShare: "аймақ халқынан қаза болғандар",
famineVictims: "Құрбандар:",
faminePop: "халық",
kzAssrLabel: "Қазақ АКСР-і",
legendKzOutline: "Қазақстан: 1939 жылғы 12 облыс контуры",
legendKarakalpak: "Қарақалпақстан (қазіргі шекара, шамамен)",
legendAral: "Арал 1960-жылдарға дейін",
tipUprising: "көтеріліс",
tipUprisingYear: " жыл. 1929–1931 жж. 370-тен астам толқулардың бірі (Т. Омарбеков).",
worldToRegion: "Аймаққа",
worldWhole: "Бүкіл әлем"
}
};

function t(key) {
const d = I18N[LANG] || I18N.ru;
return key in d ? d[key] : null != I18N.ru[key] ? I18N.ru[key] : key;
}

function tf(key, params) {
let s = t(key);
for (const k in params) s = s.split("{" + k + "}").join(params[k]);
return s;
}

function tr(obj) {
return obj && (obj[LANG] || obj.ru) || obj;
}

function pName(p) {
return p["name_" + LANG] || p.name;
}

function pDesc(p) {
return p["desc_" + LANG] || p.desc;
}

function pType(p) {
return p["type_" + LANG] || p.type;
}

function applyStaticI18n() {
document.documentElement.lang = "kz" === LANG ? "kk" : LANG, document.title = t("pageTitle");
const md = document.querySelector('meta[name="description"]');
md && md.setAttribute("content", t("pageDesc")), document.querySelectorAll("[data-i18n]").forEach(n => {
n.textContent = t(n.dataset.i18n);
}), document.querySelectorAll("[data-num]").forEach(n => {
n.textContent = fmtD(+n.dataset.num, +(n.dataset.dec || 0)) + (n.dataset.suffix || "");
}), document.querySelectorAll("[data-i18n-title]").forEach(n => {
n.setAttribute("title", t(n.dataset.i18nTitle));
}), document.querySelectorAll("[data-i18n-placeholder]").forEach(n => {
n.setAttribute("placeholder", t(n.dataset.i18nPlaceholder));
}), document.querySelectorAll("[data-i18n-aria]").forEach(n => {
n.setAttribute("aria-label", t(n.dataset.i18nAria));
}), $$(".langopt").forEach(b => b.classList.toggle("on", b.dataset.lang === LANG)), "function" == typeof syncThemeBtn && syncThemeBtn(), "function" == typeof renderIntro && renderIntro(), "function" == typeof quizRelang && quizRelang(), $("#chat [data-greeting]") && ($("#chat [data-greeting]").textContent = t("aiGreeting")), navigator.gpu || !$("#aiProgTxt") || ($("#aiProgTxt").textContent = t("aiLoadNoGpu"));
const lb = $("#bLangLabel");
lb && (lb.textContent = LANG.toUpperCase());
const sp = $("#stPrev");
sp && (sp.textContent = t("storyPrev"));
const ss = $("#stStop");
ss && (ss.textContent = t("storyExit"));
const sn = $("#stNext");
sn && void 0 !== S && (sn.textContent = S.story === STORY.length - 1 ? t("storyFinish") : t("storyNext"));
const bs = $("#bStory");
bs && void 0 !== S && (bs.textContent = S.story >= 0 ? t("btnStoryStop") : t("btnStoryStart"));
}

function setLang(l) {
if (l !== LANG) {
LANG = l;
try {
localStorage.setItem("agln_lang", l);
} catch (e) {}
if (applyStaticI18n(), syncPeriodUI(), renderKz(), renderMarks(), renderSplit(), 
worldMap.ready) {
renderWorld();
const wr = $("#wRst");
wr && (wr.textContent = "region" === WS.scope ? t("worldWhole") : t("worldToRegion"));
}
schoolsMap.ready && (renderSchoolCards(), selectSchool(S.school)), renderBiblio(), 
"function" == typeof renderAbout && renderAbout(), buildTable(), renderDataLog(), renderAprob(), function() {
const i = $("#mSrc"), j = $("#mTgt");
i && j && (populateMaupSelects(), calcMaup());
}(), rebuildAiModels(), void 0 !== AI && setAiState(AI.engine ? t("aiReady") : t("aiOffline"), AI.engine ? "ok" : ""), 
toast(t("toastLangChanged"));
}
}

const KZ = window.__KZ_HIST__, WORLD = window.__WORLD__, MAUP = window.__MAUP__, SCHOOLS = [ {
id: "cameron",
metric: "nomadic",
color: PALETTE.lens.cameron,
ru: {
name: "Сара Кэмерон",
work: "«The Hungry Steppe» (2018)",
thesis: "Голод стал результатом насильственной седентаризации: уничтожение кочевого хозяйства как способа жизни, а не только изъятие зерна.",
lens: "Максимальные потери пришлись на районы, где доля кочевого и полукочевого скотоводства была наибольшей.",
detail: "Кэмерон показывает, что казахи гибли не из-за неурожая зерна, а из-за уничтожения скота, основы кочевой экономики. Государство требовало мясо-заготовки с республики, где скот был не товаром, а условием выживания. Поэтому эпицентром катастрофы стали скотоводческие районы, а не земледельческие."
},
en: {
name: "Sarah Cameron",
work: '"The Hungry Steppe" (2018)',
thesis: "The famine is the result of violent sedentarization: the destruction of nomadic husbandry as a way of life, not merely grain requisitioning.",
lens: "Maximum losses occurred where the share of nomadic and semi-nomadic pastoralism was highest.",
detail: "Cameron shows that Kazakhs died not from a grain shortfall, but from the destruction of livestock, the foundation of the nomadic economy. The state demanded meat-procurement quotas from a republic where livestock was not a commodity but a condition of survival. That is why the epicenter of the catastrophe lies in the pastoral districts, not the farming ones."
},
kz: {
name: "Сара Кэмерон",
work: "«The Hungry Steppe» (2018)",
thesis: "Ашаршылық күштеп отырықшыландырудың нәтижесі болды: тек астық тәркілеу емес, көшпелі шаруашылықтың өмір салты ретінде құрып кетуі.",
lens: "Ең үлкен шығындар көшпелі және жартылай көшпелі мал шаруашылығының үлесі ең жоғары жерлерде болды.",
detail: "Кэмерон қазақтардың астық тапшылығынан емес, көшпелі экономиканың негізі болған малдың жойылуынан қырылғанын көрсетеді. Мемлекет мал үшін тауар емес, өмір сүру шарты болған республикадан ет дайындау нормасын талап етті. Сондықтан апаттың эпицентрі егіншілік аудандары емес, мал шаруашылығы аудандары болды."
}
}, {
id: "pianciola",
metric: "anomaly",
color: PALETTE.lens.pianciola,
ru: {
name: "Никколо Пьянчола",
work: "Работы о колониальной иерархии (2001–2020)",
thesis: "Голод стал следствием имперской иерархии приоритетов: ресурсы изымались с периферии в пользу индустриальных центров.",
lens: "Смотрит на контраст: районы с ГУЛАГом и промышленным строительством растут по общему населению, теряя коренное.",
detail: "Пьянчола объясняет «аномальный рост»: Караганда, Балхаш, Риддер получают приток спецпереселенцев и рабочих, и общая численность населения области растёт (Асылбек, Асылбекова, 2014: +41,8 % за 1926–1939). Эта цифра не показывает, что происходило с казахским населением: по оценке А. Н. Алексеенко (2003), потери казахов в Центральном Казахстане (Карагандинская область) составили 15,6 %, это наименьшие потери в республике. Административная статистика по общему населению скрывает этнический разрез."
},
en: {
name: "Niccolò Pianciola",
work: "Studies on the colonial hierarchy (2001–2020)",
thesis: "The famine is a consequence of an imperial hierarchy of priorities: resources were extracted from the periphery to benefit industrial centers.",
lens: "Looks at the contrast: districts with GULAG camps and industrial construction grow in total population while losing their indigenous population.",
detail: 'Pianciola explains the "anomalous growth": Karaganda, Balkhash, and Ridder receive an influx of special settlers and workers, so the oblast’s total population grows (Asylbek & Asylbekova, 2014: +41.8% in 1926–1939). That figure does not show what happened to the Kazakh population: according to A. N. Alekseenko (2003), Kazakh losses in Central Kazakhstan (Karaganda Oblast) were 15.6%, the smallest in the republic. Administrative statistics on total population hide the ethnic breakdown.'
},
kz: {
name: "Никколо Пьянчола",
work: "Отарлық иерархия туралы еңбектер (2001–2020)",
thesis: "Ашаршылық империялық басымдықтар иерархиясының салдары болды: ресурстар шет аймақтардан өнеркәсіп орталықтарының пайдасына тартып алынды.",
lens: "Қарама-қайшылыққа назар аударады: ГУЛАГ пен өнеркәсіп құрылысы бар аудандарда жалпы халық саны өседі, ал байырғы халық азаяды.",
detail: "Пьянчола «аномальды өсімді» түсіндіреді: Қарағанды, Балқаш, Риддерге арнайы қоныс аударушылар мен жұмысшылар легі келеді, сондықтан облыстың жалпы халық саны өседі (Асылбек, Асылбекова, 2014: 1926–1939 жж. +41,8 %). Бұл сан қазақ халқымен не болғанын көрсетпейді: А. Н. Алексеенконың (2003) бағасы бойынша Орталық Қазақстанда (Қарағанды облысы) қазақтардың шығыны 15,6 % болды, бұл республикадағы ең аз шығын. Жалпы халық бойынша әкімшілік статистика этникалық бөліністі жасырады."
}
}, {
id: "omarbekov",
metric: "unrest",
color: PALETTE.lens.omarbekov,
ru: {
name: "Талас Омарбеков",
work: "Казахстанская национальная школа",
thesis: "Голод рассматривается как целенаправленная политика против казахского народа; акцент на сопротивлении и его подавлении.",
lens: "Картирует связь между очагами восстаний 1929–1931 гг. и последующей глубиной потерь.",
detail: "Омарбеков и казахстанская историография ставят в центр субъектность казахов: более 370 выступлений 1929–1931 гг. (Т. Омарбеков): Сузак, Иргиз, Батпаккара, Адай. Подавление восстаний и карательные откочёвочные заслоны усиливали смертность в тех же районах."
},
en: {
name: "Talas Omarbekov",
work: "The Kazakhstani national school",
thesis: "The famine was a deliberate policy against the Kazakh people; the emphasis is on resistance and its suppression.",
lens: "Maps the connection between the centers of the 1929–1931 uprisings and the subsequent depth of losses.",
detail: "Omarbekov and the Kazakhstani historiography place Kazakh agency at the center: more than 370 uprisings in 1929–1931 (T. Omarbekov): Suzak, Irgiz, Batpakkara, Adai. The suppression of the uprisings and punitive cordons on migration routes intensified mortality in the same districts."
},
kz: {
name: "Талас Омарбеков",
work: "Қазақстандық ұлттық мектеп",
thesis: "Ашаршылық қазақ халқына қарсы бағытталған мақсатты саясат ретінде қаралады; басты назар қарсылық пен оны басып-жаншуда.",
lens: "1929–1931 жж. көтеріліс ошақтары мен кейінгі шығын тереңдігі арасындағы байланысты көрсетеді.",
detail: "Омарбеков және қазақстандық тарихнама қазақтардың субъектілігін орталыққа қояды: 1929–1931 жж. 370-тен астам көтеріліс пен толқу болды (Т. Омарбеков): Созақ, Ырғыз, Батпаққара, Адай. Көтерілістерді басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті."
}
} ], LENS_TAGS = {
west_kz: {
nomadic: 1,
gulag: 0,
unrest: 1
},
guryev: {
nomadic: 1,
gulag: 0,
unrest: 1
},
actyubinsk: {
nomadic: 1,
gulag: 0,
unrest: 1
},
kustanai: {
nomadic: 0,
gulag: 0,
unrest: 1
},
north_kz: {
nomadic: 0,
gulag: 0,
unrest: 0
},
akmola: {
nomadic: 1,
gulag: 1,
unrest: 0
},
karaganda: {
nomadic: 1,
gulag: 1,
unrest: 1
},
semipalatinsk: {
nomadic: 1,
gulag: 0,
unrest: 1
},
east_kz: {
nomadic: 1,
gulag: 1,
unrest: 0
},
almaty: {
nomadic: 1,
gulag: 1,
unrest: 1
},
south_kz: {
nomadic: 0,
gulag: 0,
unrest: 1
},
kzyl_orda: {
nomadic: 0,
gulag: 0,
unrest: 0
}
}, CAMPS = [ {
lon: 72.9,
lat: 49.4,
kind: "camp",
ru: {
n: "Карлаг",
t: "Карагандинский ИТЛ, один из крупнейших в СССР"
},
en: {
n: "Karlag",
t: "Karaganda corrective labor camp, one of the largest in the USSR"
},
kz: {
n: "Карлаг",
t: "Қарағанды түзеу-еңбек лагері, КСРО-дағы ең ірілерінің бірі"
}
}, {
lon: 67.7,
lat: 47.8,
kind: "camp",
ru: {
n: "Степлаг",
t: "Особый лагерь, Джезказган"
},
en: {
n: "Steplag",
t: "Special camp, Dzhezkazgan"
},
kz: {
n: "Степлаг",
t: "Арнайы лагерь, Жезқазған"
}
}, {
lon: 71,
lat: 51.1,
kind: "camp",
ru: {
n: "АЛЖИР",
t: "Акмолинский лагерь жён «изменников родины»"
},
en: {
n: "ALZHIR",
t: 'Akmola camp for wives of "traitors to the motherland"'
},
kz: {
n: "АЛЖИР",
t: "«Отан сатқындарының» әйелдеріне арналған Ақмола лагері"
}
}, {
lon: 74.9,
lat: 46.8,
kind: "site",
ru: {
n: "Балхашстрой",
t: "Медеплавильный комбинат, труд спецпереселенцев"
},
en: {
n: "Balkhashstroy",
t: "Copper-smelting plant, built with special-settler labor"
},
kz: {
n: "Балқашстрой",
t: "Мыс қорыту комбинаты, арнайы қоныс аударушылардың еңбегімен салынған"
}
}, {
lon: 83.5,
lat: 50.3,
kind: "site",
ru: {
n: "Риддер",
t: "Полиметаллический комбинат, Рудный Алтай"
},
en: {
n: "Ridder",
t: "Polymetallic plant, Rudny Altai"
},
kz: {
n: "Риддер",
t: "Полиметалл комбинаты, Кенді Алтай"
}
} ], REVOLTS = [ {
lon: 68.6,
lat: 44.2,
y: 1930,
ru: {
n: "Сузакское"
},
en: {
n: "Suzak"
},
kz: {
n: "Созақ"
}
}, {
lon: 61.3,
lat: 48.6,
y: 1930,
ru: {
n: "Иргизское"
},
en: {
n: "Irgiz"
},
kz: {
n: "Ырғыз"
}
}, {
lon: 64.3,
lat: 51.6,
y: 1930,
ru: {
n: "Батпаккаринское"
},
en: {
n: "Batpakkara"
},
kz: {
n: "Батпаққара"
}
}, {
lon: 54,
lat: 44,
y: 1931,
ru: {
n: "Адаевское"
},
en: {
n: "Adai"
},
kz: {
n: "Адай"
}
}, {
lon: 65.5,
lat: 46.5,
y: 1930,
ru: {
n: "Каракумское"
},
en: {
n: "Karakum"
},
kz: {
n: "Қарақұм"
}
}, {
lon: 77.5,
lat: 49.3,
y: 1930,
ru: {
n: "Абралинское"
},
en: {
n: "Abralin"
},
kz: {
n: "Абыралы"
}
} ], FLOWS = [ {
id: "xinjiang",
lon: 84,
lat: 43.8,
from: [ 78, 46 ],
kind: "abroad",
lo: 100,
hi: 200,
ru: {
to: "Синьцзян (Китай)",
short: "Синьцзян",
note: "Крупнейшее зарубежное направление. Переход через Джунгарские ворота и Тарбагатай. Часть потомков вернулась только в 1955–1962 гг."
},
en: {
to: "Xinjiang (China)",
short: "Xinjiang",
note: "The largest foreign destination. Crossing via the Dzungarian Gate and Tarbagatai. Some descendants returned only in 1955–1962."
},
kz: {
to: "Шыңжаң (Қытай)",
short: "Шыңжаң",
note: "Ең ірі шетелдік бағыт. Жоңғар қақпасы мен Тарбағатай арқылы өту. Ұрпақтарының бір бөлігі тек 1955–1962 жж. оралды."
}
}, {
id: "mongolia",
lon: 91.5,
lat: 47.5,
from: [ 83, 48 ],
kind: "abroad",
lo: 15,
hi: 25,
ru: {
to: "Монголия",
short: "Монголия",
note: "В Баян-Улгийском аймаке сформировалась постоянная казахская община, существующая доныне."
},
en: {
to: "Mongolia",
short: "Mongolia",
note: "In Bayan-Ölgii aimag, a permanent Kazakh community formed and still exists today."
},
kz: {
to: "Моңғолия",
short: "Моңғолия",
note: "Баян-Өлгий аймағында тұрақты қазақ қауымдастығы қалыптасты, ол бүгінге дейін бар."
}
}, {
id: "afghanistan",
lon: 66.5,
lat: 36.2,
from: [ 63, 42 ],
kind: "abroad",
lo: 5,
hi: 20,
ru: {
to: "Афганистан",
short: "Афганистан",
note: "Через Туркмению и Узбекистан. К 1935 г. фиксируются казахские общины на севере страны."
},
en: {
to: "Afghanistan",
short: "Afghanistan",
note: "Via Turkmenistan and Uzbekistan. By 1935, Kazakh communities are recorded in the north of the country."
},
kz: {
to: "Ауғанстан",
short: "Ауғанстан",
note: "Түрікменстан мен Өзбекстан арқылы. 1935 жылға қарай елдің солтүстігінде қазақ қауымдастықтары тіркелген."
}
}, {
id: "iran",
lon: 57.5,
lat: 36.5,
from: [ 56, 41 ],
kind: "abroad",
lo: 3,
hi: 10,
ru: {
to: "Иран",
short: "Иран",
note: "Небольшие группы, преимущественно из Мангистау и Прикаспия."
},
en: {
to: "Iran",
short: "Iran",
note: "Small groups, mostly from Mangystau and the Caspian coast."
},
kz: {
to: "Иран",
short: "Иран",
note: "Шағын топтар, негізінен Маңғыстау мен Каспий жағалауынан."
}
}, {
id: "turkey",
lon: 33.5,
lat: 39.2,
from: [ 52, 44 ],
kind: "abroad",
dashed: !0,
lo: 2,
hi: 8,
ru: {
to: "Турция",
short: "Турция",
note: "Вторичная миграция 1950–60-х гг. из Синьцзяна, уже после голода."
},
en: {
to: "Turkey",
short: "Turkey",
note: "Secondary migration of the 1950s–60s from Xinjiang, already after the famine."
},
kz: {
to: "Түркия",
short: "Түркия",
note: "1950–60 жж. Шыңжаңнан қайталама көші-қон, ашаршылықтан кейін болған."
}
}, {
id: "westsib",
lon: 82.5,
lat: 55,
from: [ 72, 53 ],
kind: "soviet",
lo: 100,
hi: 250,
ru: {
to: "Западно-Сибирский край",
short: "Зап. Сибирь",
note: "Омская область, Новосибирск, Барнаул. Основное внутрисоюзное направление с севера республики."
},
en: {
to: "West Siberian Krai",
short: "W. Siberia",
note: "Omsk Oblast, Novosibirsk, Barnaul. The main destination within the union from the north of the republic."
},
kz: {
to: "Батыс Сібір өлкесі",
short: "Батыс Сібір",
note: "Омбы облысы, Новосібір, Барнаул. Республиканың солтүстігінен одақ ішіндегі негізгі бағыт."
}
}, {
id: "volga",
lon: 46.5,
lat: 51.5,
from: [ 51, 50 ],
kind: "soviet",
lo: 80,
hi: 200,
ru: {
to: "Средняя Волга, Саратов, Сталинград",
short: "Ср. Волга",
note: "Через Уральск и Оренбург. Здесь же стояли заградительные заслоны на дорогах."
},
en: {
to: "Middle Volga, Saratov, Stalingrad",
short: "Middle Volga",
note: "Via Uralsk and Orenburg. Blocking cordons on the roads were also placed here."
},
kz: {
to: "Орта Еділ, Саратов, Сталинград",
short: "Орта Еділ",
note: "Орал мен Орынбор арқылы. Жолдарда жазалау бекеттері де осында орналасқан."
}
}, {
id: "uzbek",
lon: 66.5,
lat: 40.2,
from: [ 67, 43 ],
kind: "soviet",
lo: 100,
hi: 250,
ru: {
to: "Узбекская ССР",
short: "Узбекистан",
note: "Ташкент и Ферганская долина. Крупнейшее направление на юг."
},
en: {
to: "Uzbek SSR",
short: "Uzbekistan",
note: "Tashkent and the Fergana Valley. The largest southern destination."
},
kz: {
to: "Өзбек КСР-і",
short: "Өзбекстан",
note: "Ташкент пен Ферғана аңғары. Ең үлкен оңтүстік бағыт."
}
}, {
id: "kirghiz",
lon: 74.6,
lat: 42.4,
from: [ 75, 44 ],
kind: "soviet",
lo: 50,
hi: 120,
ru: {
to: "Киргизская АССР",
short: "Киргизия",
note: "Чуйская долина и Иссык-Куль были географически ближайшим убежищем для Жетысу."
},
en: {
to: "Kirghiz ASSR",
short: "Kirghizia",
note: "The Chuy Valley and Issyk-Kul were the geographically nearest refuge for Jetysu."
},
kz: {
to: "Қырғыз АКСР-і",
short: "Қырғызстан",
note: "Шу аңғары мен Ыстықкөл Жетісу үшін географиялық жағынан ең жақын пана болды."
}
}, {
id: "turkmen",
lon: 59,
lat: 39.5,
from: [ 55, 43 ],
kind: "soviet",
lo: 30,
hi: 80,
ru: {
to: "Туркменская ССР",
short: "Туркмения",
note: "Адаевские откочёвки с Мангистау и Устюрта."
},
en: {
to: "Turkmen SSR",
short: "Turkmenia",
note: "Adai migrations from Mangystau and the Ustyurt plateau."
},
kz: {
to: "Түрікмен КСР-і",
short: "Түрікменстан",
note: "Маңғыстау мен Үстірттен Адай қазақтарының көшуі."
}
}, {
id: "karakalpak",
lon: 59.5,
lat: 43,
from: [ 60, 45 ],
kind: "soviet",
lo: 20,
hi: 60,
ru: {
to: "Каракалпакская АССР",
short: "Каракалпакия",
note: "Приаралье, дельта Амударьи."
},
en: {
to: "Karakalpak ASSR",
short: "Karakalpakia",
note: "The Aral Sea region, the Amu Darya delta."
},
kz: {
to: "Қарақалпақ АКСР-і",
short: "Қарақалпақстан",
note: "Арал маңы, Амудария атырауы."
}
}, {
id: "urals",
lon: 58.5,
lat: 54.2,
from: [ 62, 52 ],
kind: "soviet",
lo: 30,
hi: 90,
ru: {
to: "Урал: Челябинск, Оренбург, Башкирия",
short: "Урал",
note: "В Башкирии зафиксировано 2,7 тыс. казахских хозяйств (Р. Киндлер, 2017)."
},
en: {
to: "Urals: Chelyabinsk, Orenburg, Bashkiria",
short: "Urals",
note: "2,700 Kazakh households are recorded in Bashkiria (R. Kindler, 2017)."
},
kz: {
to: "Орал: Челябі, Орынбор, Башқұртстан",
short: "Орал",
note: "Башқұртстанда 2,7 мың қазақ шаруашылығы тіркелген (Р. Киндлер, 2017)."
}
} ], FAMINES = [ {
lon: 68,
lat: 48,
loss: 38,
hero: !0,
ru: {
n: "Казахская АССР",
deaths: "1,3–2,3 млн",
pop: "≈6,2 млн",
t: "Наибольшая ОТНОСИТЕЛЬНАЯ потеря среди народов СССР: погибло ≈38 % казахов (Cameron, 2018)."
},
en: {
n: "Kazak ASSR",
deaths: "1.3–2.3 million",
pop: "≈6.2 million",
t: "The largest RELATIVE loss among the peoples of the USSR: ≈38% of Kazakhs died (Cameron, 2018)."
},
kz: {
n: "Қазақ АКСР-і",
deaths: "1,3–2,3 млн",
pop: "≈6,2 млн",
t: "КСРО халықтары арасында ең үлкен САЛЫСТЫРМАЛЫ шығын: қазақтардың ≈38 %-ы қаза тапты (Cameron, 2018)."
}
}, {
lon: 31,
lat: 49,
loss: null,
ru: {
n: "Украинская ССР",
deaths: "3,3–3,9 млн",
pop: "",
t: "Голодомор 1932–33. Наибольшее АБСОЛЮТНОЕ число жертв в СССР."
},
en: {
n: "Ukrainian SSR",
deaths: "3.3–3.9 million",
pop: "",
t: "The Holodomor of 1932–33. The largest ABSOLUTE number of victims in the USSR."
},
kz: {
n: "Украин КСР-і",
deaths: "3,3–3,9 млн",
pop: "",
t: "1932–33 жж. Голодомор. КСРО-дағы ең үлкен АБСОЛЮТТІ құрбандар саны."
}
}, {
lon: 47,
lat: 52,
loss: 6,
ru: {
n: "Поволжье (РСФСР)",
deaths: "0,4–1 млн",
pop: "≈11 млн",
t: "Нижняя и Средняя Волга, зерновые районы, охваченные хлебозаготовками."
},
en: {
n: "Volga region (RSFSR)",
deaths: "0.4–1 million",
pop: "≈11 million",
t: "The Lower and Middle Volga, grain-growing districts subject to procurement quotas."
},
kz: {
n: "Еділ бойы (РКФСР)",
deaths: "0,4–1 млн",
pop: "≈11 млн",
t: "Төменгі және Орта Еділ, астық дайындау нормасына жататын егіншілік аудандары."
}
}, {
lon: 40,
lat: 45,
loss: 8,
ru: {
n: "Северный Кавказ, Кубань",
deaths: "0,3–0,5 млн",
pop: "≈9 млн",
t: "Кубанские станицы, режим «чёрных досок»."
},
en: {
n: "North Caucasus, Kuban",
deaths: "0.3–0.5 million",
pop: "≈9 million",
t: 'Kuban stanitsas, the "black board" blacklist regime.'
},
kz: {
n: "Солтүстік Кавказ, Кубань",
deaths: "0,3–0,5 млн",
pop: "≈9 млн",
t: "Кубань станицалары, «қара тақта» тізім режимі."
}
}, {
lon: 75,
lat: 56,
loss: 3,
ru: {
n: "Западная Сибирь, Урал",
deaths: "0,1–0,3 млн",
pop: "≈13 млн",
t: "Одновременно это регион ссылки и приёма спецпереселенцев."
},
en: {
n: "Western Siberia, Urals",
deaths: "0.1–0.3 million",
pop: "≈13 million",
t: "Simultaneously a region of exile and a destination for special settlers."
},
kz: {
n: "Батыс Сібір, Орал",
deaths: "0,1–0,3 млн",
pop: "≈13 млн",
t: "Сонымен бірге жер аудару және арнайы қоныс аударушыларды қабылдау аймағы."
}
}, {
lon: 106,
lat: 35,
loss: 15,
other: !0,
ru: {
n: "Китай: Ганьсу, Шэньси",
deaths: "3–10 млн",
pop: "≈40 млн",
t: "Голод 1928–1930 гг. Иные причины (засуха, война милитаристов), приведён для масштаба."
},
en: {
n: "China: Gansu, Shaanxi",
deaths: "3–10 million",
pop: "≈40 million",
t: "The famine of 1928–1930. Different causes (drought, warlord conflict), included for scale."
},
kz: {
n: "Қытай: Ганьсу, Шэньси",
deaths: "3–10 млн",
pop: "≈40 млн",
t: "1928–1930 жж. ашаршылық. Себептері басқа (құрғақшылық, милитаристер соғысы), масштабты көрсету үшін берілген."
}
} ], STORY = [ {
p: "1926",
focus: [ "uralsk_1926", "akmola_1926", "semipalatinsk_1926", "jetisu_1926", "syr_darya_1926" ],
metric: "kazShare",
ru: {
t: "Степь до катастрофы",
text: "Перепись 1926 года. Казахская АССР разделена на 8 крупных округов. Казахи составляют большинство почти везде: от 62 % в Кустанайском до 77 % в Семипалатинском округе. Основа хозяйства: кочевое и полукочевое скотоводство, около 40 млн голов скота.",
cite: "Всесоюзная перепись населения 1926 г."
},
en: {
t: "The steppe before the catastrophe",
text: "The 1926 census. The Kazak ASSR is divided into 8 large okrugs. Kazakhs form the majority almost everywhere: from 62% in Kustanai Okrug to 77% in Semipalatinsk Okrug. The economy is nomadic and semi-nomadic pastoralism, with around 40 million head of livestock.",
cite: "All-Union Census of 1926"
},
kz: {
t: "Апатқа дейінгі дала",
text: "1926 жылғы санақ. Қазақ АКСР-і 8 ірі округке бөлінген. Қазақтар барлық жерде дерлік басым: Қостанай округінде 62 %-дан Семей округінде 77 %-ға дейін. Шаруашылықтың негізі: көшпелі және жартылай көшпелі мал шаруашылығы, шамамен 40 млн бас мал.",
cite: "1926 жылғы Бүкілодақтық халық санағы"
}
}, {
p: "1939",
focus: [ "actyubinsk", "guryev", "west_kz" ],
metric: "loss",
ru: {
t: "Слом: коллективизация и седентаризация",
text: "С 1929 года идут принудительное оседание и мясозаготовки. Скот изымается в республике, где он не товар, а условие выживания. К 1933 году от 40 млн голов остаётся около одной десятой. Именно скотоводческий запад и центр дают наибольшие относительные потери.",
cite: "С. Кэмерон, «The Hungry Steppe» (2018)"
},
en: {
t: "Rupture: collectivization and sedentarization",
text: "From 1929 come forced settlement and meat-procurement quotas. Livestock is seized in a republic where it is not a commodity but a condition of survival. By 1933, of 40 million head, about one-tenth remains. It is precisely the pastoral west and center that show the largest relative losses.",
cite: 'S. Cameron, "The Hungry Steppe" (2018)'
},
kz: {
t: "Күйреу: ұжымдастыру және отырықшыландыру",
text: "1929 жылдан бастап мәжбүрлі отырықшыландыру және ет дайындау нормасы енгізіледі. Мал тауар емес, өмір сүру шарты болған республикада тәркіленеді. 1933 жылға қарай 40 млн бастан шамамен оннан бір бөлігі қалады. Дәл мал шаруашылығы басым батыс пен орталық ең үлкен салыстырмалы шығынды береді.",
cite: "С. Кэмерон, «The Hungry Steppe» (2018)"
}
}, {
p: "1939",
focus: [ "south_kz", "actyubinsk", "kustanai" ],
metric: "loss",
layer: "revolts",
ru: {
t: "Сопротивление",
text: "Более 370 выступлений 1929–1931 гг. (Т. Омарбеков): Сузак, Иргиз, Батпаккара, Адай, Каракумы. Подавление и заградительные заслоны на путях откочёвок усиливают смертность в тех же районах.",
cite: "Т. Омарбеков, казахстанская национальная школа"
},
en: {
t: "Resistance",
text: "More than 370 uprisings in 1929–1931 (T. Omarbekov): Suzak, Irgiz, Batpakkara, Adai, Karakum. Suppression and blocking cordons along migration routes increased mortality in the same districts.",
cite: "T. Omarbekov, the Kazakhstani national school"
},
kz: {
t: "Қарсылық",
text: "1929–1931 жж. 370-тен астам көтеріліс пен толқу (Т. Омарбеков): Созақ, Ырғыз, Батпаққара, Адай, Қарақұм. Оларды басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті.",
cite: "Т. Омарбеков, қазақстандық ұлттық мектеп"
}
}, {
p: "1939",
focus: [ "karaganda", "east_kz", "akmola" ],
metric: "loss",
layer: "camps",
ru: {
t: "Аномальный рост",
text: "По опубликованным данным (Асылбек, Асылбекова, 2014) общая численность Карагандинской области выросла сильнее всех, а казахское население сократилось; в рабочем наборе атласа это ещё не отражено, сверка ведётся.",
cite: "Асылбек М. Х., Асылбекова Ж. М. (2014); Н. Пьянчола: колониальная иерархия приоритетов"
},
en: {
t: "Anomalous growth",
text: "According to published data (Asylbek & Asylbekova, 2014), Karaganda Oblast’s total population grew more than any other oblast’s, while its Kazakh population declined; the atlas’s working dataset does not reflect this yet; cross-checking is in progress.",
cite: "Asylbek, M. Kh., & Asylbekova, Zh. M. (2014); N. Pianciola: an imperial hierarchy of priorities"
},
kz: {
t: "Аномальды өсім",
text: "Жарияланған деректер бойынша (Асылбек, Асылбекова, 2014) Қарағанды облысының жалпы халқы барлық облыстан көп өсті, ал қазақ халқы азайды; атластың жұмыс деректер жиынтығында бұл әлі көрсетілмеген, салыстыру жүргізілуде.",
cite: "Асылбек М. Х., Асылбекова Ж. М. (2014); Н. Пьянчола: империялық басымдықтар иерархиясы"
}
}, {
p: "1939",
focus: [],
metric: "loss",
world: !0,
ru: {
t: "Исход",
text: "Республику покидают около 1,13 млн человек. Позднее возвращаются 454 тыс.; примерно 200 тыс. остаются за границей навсегда: в Синьцзяне, Монголии, Афганистане, Иране, позже в Турции. Так формируется современная казахская диаспора.",
cite: "Архивные данные АПРК; С. Кэмерон"
},
en: {
t: "Exodus",
text: "About 1.13 million people leave the republic. Later, 454,000 return; about 200,000 remain abroad permanently: in Xinjiang, Mongolia, Afghanistan, Iran, and later Turkey. This is how the modern Kazakh diaspora forms.",
cite: "Archival data, APRK; S. Cameron"
},
kz: {
t: "Көш",
text: "Республикадан шамамен 1,13 млн адам кетеді. Кейін 454 мың адам оралады; шамамен 200 мың адам шетелде мәңгілікке қалады: Шыңжаңда, Моңғолияда, Ауғанстанда, Иранда, кейінірек Түркияда. Осылайша қазіргі қазақ диаспорасы қалыптасады.",
cite: "ҚР ПМА мұрағат деректері; С. Кэмерон"
}
}, {
p: "1939",
focus: [],
metric: "resid",
maup: !0,
ru: {
t: "Проблема масштаба: MAUP",
text: "Главный методологический вывод исследования. Одна и та же территория, одни и те же люди, но при переходе с сетки 8 округов 1926 г. на сетку 12 областей 1939 г. пространственное распределение казахского населения смещается на 42,5 процентных пункта суммарно. Индекс несходства равен 21,2 %. Это и есть Modifiable Areal Unit Problem: граница определяет вывод.",
cite: "Собственный расчёт: ареальная интерполяция; матрица 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения"
},
en: {
t: "The problem of scale: MAUP",
text: "The study’s central methodological conclusion. The same territory and the same people, but moving from the 8-okrug grid of 1926 to the 12-oblast grid of 1939 shifts the spatial distribution of the Kazakh population by a total of 42.5 percentage points. The dissimilarity index is 21.2%. This is the Modifiable Areal Unit Problem: the boundary determines the conclusion.",
cite: "Original calculation: areal interpolation; an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area"
},
kz: {
t: "Масштаб мәселесі: MAUP",
text: "Зерттеудің басты әдіснамалық қорытындысы. Аумақ бір, адамдар бір, бірақ 1926 жылғы 8 округтік тордан 1939 жылғы 12 облыстық торға көшкенде қазақ халқының кеңістіктік үлестірімі жиынтығында 42,5 пайыздық тармаққа ауысады. Ұқсамау индексі 21,2 % құрайды. Бұл Modifiable Areal Unit Problem: шекара қорытындыны анықтайды.",
cite: "Меншікті есептеу: ареалдық интерполяция; 8 × 12 матрицасы: «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен"
}
} ], QUIZ = [ {
c: 0,
ru: {
q: "Сколько округов было в Казахской АССР по данным переписи 1926 года на карте этого исследования?",
a: [ "8", "10", "12", "14" ],
e: "Восемь округов: Уральский, Актюбинский, Кустанайский, Петропавловский, Акмолинский, Семипалатинский, Сыр-Дарьинский и Жетысуский. К 1939 году территория делится уже на 12 областей, и именно это различие и порождает MAUP.",
tag: "Карта"
},
en: {
q: "How many okrugs did the Kazak ASSR have according to the 1926 census, on this study’s map?",
a: [ "8", "10", "12", "14" ],
e: "Eight okrugs: Uralsk, Aktyubinsk, Kustanai, Petropavlovsk, Akmola, Semipalatinsk, Syr-Darya, and Jetisu. By 1939 the territory is already divided into 12 oblasts, and this very difference is what creates MAUP.",
tag: "Map"
},
kz: {
q: "Осы зерттеудің картасында 1926 жылғы санақ бойынша Қазақ АКСР-інде неше округ болды?",
a: [ "8", "10", "12", "14" ],
e: "Сегіз округ: Орал, Ақтөбе, Қостанай, Петропавл, Ақмола, Семей, Сырдария және Жетісу. 1939 жылға қарай аумақ 12 облысқа бөлінеді, және дәл осы айырмашылық MAUP-ты тудырады.",
tag: "Карта"
}
}, {
c: 0,
ru: {
q: "Что означает аббревиатура MAUP?",
a: [ "Проблема модифицируемых пространственных единиц", "Модель анализа урбанизации и плотности", "Метод архивной унификации переписей", "Международный атлас установленных периодов" ],
e: "Modifiable Areal Unit Problem (проблема модифицируемых пространственных единиц): результат статистического анализа меняется в зависимости от того, по каким границам сгруппированы данные.",
tag: "Методология"
},
en: {
q: "What does the acronym MAUP stand for?",
a: [ "Modifiable Areal Unit Problem", "Model of Urbanization and Density Analysis", "Method of Archival Census Unification", "International Atlas of Established Periods" ],
e: "Modifiable Areal Unit Problem: the result of a statistical analysis changes depending on which boundaries the data is grouped by.",
tag: "Methodology"
},
kz: {
q: "MAUP аббревиатурасы нені білдіреді?",
a: [ "Модификацияланатын аумақтық бірліктер мәселесі", "Урбанизация мен тығыздықты талдау моделі", "Санақтарды мұрағаттық біріздендіру әдісі", "Белгіленген кезеңдердің халықаралық атласы" ],
e: "Modifiable Areal Unit Problem (модификацияланатын аумақтық бірліктер мәселесі): статистикалық талдау нәтижесі деректер қандай шекаралар бойынша топтастырылғанына байланысты өзгереді.",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Какой регион служит в исследовании главным примером «аномального роста»?",
a: [ "Кзыл-Ординская область", "Карагандинская область", "Уральский округ", "Южно-Казахстанская область" ],
e: "В Карагандинской области общее население росло (Асылбек, Асылбекова, 2014: +41,8 % за 1926–1939) за счёт спецпереселенцев, заключённых Карлага и рабочих индустриальных строек. Сводная цифра по области ничего не говорит о казахском населении: его нужно смотреть отдельно (по оценке А. Н. Алексеенко, 2003, потери казахов в Центральном Казахстане составили 15,6 %).",
tag: "Историография"
},
en: {
q: "Which region in the study is the main example of “anomalous growth”?",
a: [ "Kzyl-Orda Oblast", "Karaganda Oblast", "Uralsk Okrug", "South Kazakhstan Oblast" ],
e: "In Karaganda Oblast the total population grew (Asylbek & Asylbekova, 2014: +41.8% in 1926–1939) due to special settlers, Karlag prisoners, and workers on industrial construction sites. The oblast’s aggregate figure says nothing about the Kazakh population, which has to be examined separately (according to A. N. Alekseenko, 2003, Kazakh losses in Central Kazakhstan were 15.6%).",
tag: "Historiography"
},
kz: {
q: "Зерттеуде қай аймақ «аномальды өсімнің» басты мысалы болып табылады?",
a: [ "Қызылорда облысы", "Қарағанды облысы", "Орал округі", "Оңтүстік Қазақстан облысы" ],
e: "Қарағанды облысында жалпы халық саны арнайы қоныс аударушылар, Карлаг тұтқындары және өнеркәсіп құрылысындағы жұмысшылар есебінен өсті (Асылбек, Асылбекова, 2014: 1926–1939 жж. +41,8 %). Облыс бойынша жиынтық сан қазақ халқы туралы ештеңе айтпайды, оны бөлек қарау керек (А. Н. Алексеенконың, 2003, бағасы бойынша Орталық Қазақстанда қазақтардың шығыны 15,6 % болды).",
tag: "Тарихнама"
}
}, {
c: 3,
ru: {
q: "Почему именно скотоводческие районы пострадали сильнее земледельческих?",
a: [ "Там была засуха, а в земледельческих районах её не было", "Скотоводческие районы были дальше от железных дорог", "В скотоводческих районах было меньше врачей", "Скот изымался государством, а для кочевого хозяйства он был не товаром, а условием выживания" ],
e: "Тезис Сары Кэмерон: республика выполняла мясозаготовки, но для кочевого и полукочевого хозяйства скот был основой всей системы жизнеобеспечения. Его изъятие означало не потерю дохода, а потерю средств к существованию.",
tag: "Историография"
},
en: {
q: "Why did pastoral districts suffer more than farming ones?",
a: [ "There was a drought there, but not in farming districts", "Pastoral districts were farther from railways", "Pastoral districts had fewer doctors", "Livestock was seized by the state, and for the nomadic economy it was not a commodity but a condition of survival" ],
e: "Sarah Cameron’s thesis: the republic fulfilled meat-procurement quotas, but for the nomadic and semi-nomadic economy livestock was the foundation of the entire subsistence system. Its seizure meant not a loss of income, but a loss of the means of survival.",
tag: "Historiography"
},
kz: {
q: "Неге мал шаруашылығы аудандары егіншілік аудандарынан көбірек зардап шекті?",
a: [ "Онда құрғақшылық болды, ал егіншілік аудандарда болмады", "Мал шаруашылығы аудандары теміржолдан алыс болды", "Мал шаруашылығы аудандарында дәрігер аз болды", "Малды мемлекет тәркіледі, ал көшпелі шаруашылық үшін ол тауар емес, өмір сүру шарты болды" ],
e: "Сара Кэмерон тезисі: республика ет дайындау нормасын орындады, бірақ көшпелі және жартылай көшпелі шаруашылық үшін мал бүкіл өмір сүру жүйесінің негізі болды. Оны тәркілеу кіріс жоғалту емес, күнкөріс құралын жоғалту дегенді білдірді.",
tag: "Тарихнама"
}
}, {
c: 3,
ru: {
q: "Сколько примерно человек покинуло Казахстан в ходе откочёвок?",
a: [ "около 300 тысяч", "около 500 тысяч", "около 800 тысяч", "около 1,13 миллиона" ],
e: "Около 1,13 млн человек. Позднее вернулись примерно 454 тыс.; около 200 тыс. остались за границей навсегда: в Синьцзяне, Монголии, Афганистане, Иране, позже в Турции.",
tag: "Данные"
},
en: {
q: "Roughly how many people left Kazakhstan during the migrations?",
a: [ "about 300 thousand", "about 500 thousand", "about 800 thousand", "about 1.13 million" ],
e: "About 1.13 million people. Later, about 454,000 returned; about 200,000 remained abroad permanently: in Xinjiang, Mongolia, Afghanistan, Iran, and later Turkey.",
tag: "Data"
},
kz: {
q: "Көші-қон кезінде Қазақстаннан шамамен қанша адам кетті?",
a: [ "шамамен 300 мың", "шамамен 500 мың", "шамамен 800 мың", "шамамен 1,13 миллион" ],
e: "Шамамен 1,13 млн адам. Кейін шамамен 454 мың адам оралды; шамамен 200 мың адам шетелде мәңгілікке қалды: Шыңжаңда, Моңғолияда, Ауғанстанда, Иранда, кейінірек Түркияда.",
tag: "Деректер"
}
}, {
c: 2,
ru: {
q: "Какое зарубежное направление откочёвок было крупнейшим?",
a: [ "Турция", "Иран", "Синьцзян (Китай)", "Афганистан" ],
e: "Синьцзян: переход через Джунгарские ворота и Тарбагатай. Оценки составляют порядка 100–200 тыс. человек, но точная разбивка по направлениям остаётся дискуссионной: С. Кэмерон называет её открытым исследовательским вопросом.",
tag: "Карта мира"
},
en: {
q: "Which foreign destination of the migrations was the largest?",
a: [ "Turkey", "Iran", "Xinjiang (China)", "Afghanistan" ],
e: "Xinjiang: crossing via the Dzungarian Gate and Tarbagatai. Estimates run around 100,000–200,000 people, but the exact breakdown by destination remains debated: S. Cameron calls it an open research question.",
tag: "World map"
},
kz: {
q: "Көші-қонның қай шетелдік бағыты ең ірісі болды?",
a: [ "Түркия", "Иран", "Шыңжаң (Қытай)", "Ауғанстан" ],
e: "Шыңжаң: Жоңғар қақпасы мен Тарбағатай арқылы өту. Бағалар шамамен 100–200 мың адамды құрайды, бірақ бағыттар бойынша дәл бөлу пікірталастық болып қалады: С. Кэмерон оны ашық зерттеу мәселесі деп атайды.",
tag: "Әлем картасы"
}
}, {
c: 1,
ru: {
q: "В чём отличие казахского голода от Голодомора по демографическим показателям?",
a: [ "В Казахстане было больше жертв в абсолютных числах", "В Казахстане была наибольшая ОТНОСИТЕЛЬНАЯ потеря, то есть доля погибших от численности народа", "В Казахстане голод длился один год", "Между ними нет статистических отличий" ],
e: "В абсолютных числах больше всего жертв дала Украинская ССР (≈3,3–3,9 млн). Но по доле погибших от численности собственного народа казахи понесли наибольшие потери среди народов СССР: ≈38 % (Cameron, 2018).",
tag: "Карта мира"
},
en: {
q: "How does the Kazakh famine differ from the Holodomor in demographic terms?",
a: [ "Kazakhstan had more victims in absolute numbers", "Kazakhstan had the largest RELATIVE loss, that is, the share of deaths relative to the size of the people", "The famine in Kazakhstan lasted one year", "There is no statistical difference between them" ],
e: "In absolute numbers, the Ukrainian SSR saw the most victims (≈3.3–3.9 million). But by the share of deaths relative to their own population, Kazakhs suffered the greatest loss among the peoples of the USSR: ≈38% (Cameron, 2018).",
tag: "World map"
},
kz: {
q: "Қазақ ашаршылығы демографиялық көрсеткіштер бойынша Голодомордан немен ерекшеленеді?",
a: [ "Қазақстанда абсолютті сандар бойынша құрбандар көп болды", "Қазақстанда халық санына қатысты САЛЫСТЫРМАЛЫ шығын ең үлкен болды", "Қазақстанда ашаршылық бір жыл ғана болды", "Олардың арасында статистикалық айырмашылық жоқ" ],
e: "Абсолютті сандар бойынша ең көп құрбан Украин КСР-інде болды (≈3,3–3,9 млн). Бірақ өз халқына қатысты шығын үлесі бойынша қазақтар КСРО халықтары арасында ең үлкен шығынды көрді: ≈38 % (Cameron, 2018).",
tag: "Әлем картасы"
}
}, {
c: 0,
ru: {
q: "Что произошло с поголовьем скота между 1928 и 1933 годами?",
a: [ "От 40 млн голов осталось около одной десятой", "Сократилось примерно на четверть", "Сократилось примерно вдвое", "Осталось почти без изменений" ],
e: "От примерно 40 млн голов к 1933 году осталось около 4,5 млн, порядка одной десятой. Это разрушило материальную основу кочевого хозяйства.",
tag: "Данные"
},
en: {
q: "What happened to the livestock herd between 1928 and 1933?",
a: [ "Of 40 million head, about one-tenth remained", "It shrank by roughly a quarter", "It shrank by roughly half", "It remained almost unchanged" ],
e: "Of roughly 40 million head, by 1933 about 4.5 million remained, around one-tenth. This destroyed the material foundation of the nomadic economy.",
tag: "Data"
},
kz: {
q: "1928–1933 жж. аралығында мал басына не болды?",
a: [ "40 млн бастан шамамен оннан бір бөлігі қалды", "Шамамен төрттен бірге азайды", "Шамамен екі есе азайды", "Дерлік өзгеріссіз қалды" ],
e: "Шамамен 40 млн бастан 1933 жылға қарай шамамен 4,5 млн қалды, яғни оннан бір бөлігі шамасында. Бұл көшпелі шаруашылықтың материалдық негізін құртты.",
tag: "Деректер"
}
}, {
c: 3,
ru: {
q: "Как работает ареальная интерполяция, применённая в этом исследовании?",
a: [ "Население округа делится поровну между всеми областями", "Берётся население ближайшего города", "Данные копируются из переписи 1939 года", "Население округа распределяется пропорционально площади пересечения с каждой областью" ],
e: "Формула: P_фрагмент = P_1926 × (Площадь пересечения ÷ Площадь округа 1926). Допущение: равномерная плотность внутри округа. Это упрощение, и именно оно даёт часть погрешности.",
tag: "Методология"
},
en: {
q: "How does the areal interpolation used in this study work?",
a: [ "The okrug’s population is split evenly among all oblasts", "The population of the nearest city is used", "The data is copied from the 1939 census", "The okrug’s population is distributed in proportion to the area of intersection with each oblast" ],
e: "The formula: P_fragment = P_1926 × (intersection area ÷ 1926 okrug area). The assumption is uniform population density within the okrug. This is a simplification, and it is itself a source of part of the error.",
tag: "Methodology"
},
kz: {
q: "Осы зерттеуде қолданылған ареалдық интерполяция қалай жұмыс істейді?",
a: [ "Округ халқы барлық облыстар арасында тең бөлінеді", "Ең жақын қаланың халық саны алынады", "Деректер 1939 жылғы санақтан көшіріледі", "Округ халқы әр облыспен қиылысу ауданына пропорционал бөлінеді" ],
e: "Формула: P_фрагмент = P_1926 × (Қиылысу ауданы ÷ 1926 округ ауданы). Болжам: округ ішінде тығыздық бірдей. Бұл жеңілдету, және дәл осы қателіктің бір бөлігін береді.",
tag: "Әдіснама"
}
}, {
c: 2,
ru: {
q: "Индекс несходства между сеткой 1926 и сеткой 1939 года в этом исследовании составил:",
a: [ "2,1 %", "10,6 %", "21,2 %", "42,5 %" ],
e: "Суммарный сдвиг долей равен 42,46 процентных пункта, индекс несходства составляет половину от этого, то есть 21,2 %. Иначе говоря, при смене сетки «переезжает» пятая часть всего пространственного распределения населения.",
tag: "Методология"
},
en: {
q: "The dissimilarity index between the 1926 grid and the 1939 grid in this study is:",
a: [ "2.1%", "10.6%", "21.2%", "42.5%" ],
e: "The total share shift is 42.46 percentage points; the dissimilarity index is half of that, i.e. 21.2%. In other words, changing the grid “relocates” a fifth of the entire spatial distribution of the population.",
tag: "Methodology"
},
kz: {
q: "Осы зерттеуде 1926 жылғы тор мен 1939 жылғы тор арасындағы ұқсамау индексі неге тең болды?",
a: [ "2,1 %", "10,6 %", "21,2 %", "42,5 %" ],
e: "Үлестердің жиынтық ауытқуы 42,46 пайыздық тармақ, ұқсамау индексі осының жартысына, яғни 21,2 %-ға тең. Басқаша айтқанда, тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің бестен бірі «көшіп кетеді».",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Восстания 1929–1931 годов (Сузак, Иргиз, Батпаккара, Адай) в интерпретации Т. Омарбекова прежде всего:",
a: [ "Стихийные грабежи без политического содержания", "Проявление субъектности и организованного сопротивления казахов", "Операции внешних государств", "Конфликты между самими кочевыми родами" ],
e: "Казахстанская национальная школа ставит в центр субъектность казахов: более 370 выступлений 1929–1931 гг. (Т. Омарбеков), а их подавление и заслоны на путях откочёвок усиливали смертность в тех же районах.",
tag: "Историография"
},
en: {
q: "In T. Omarbekov’s interpretation, the uprisings of 1929–1931 (Suzak, Irgiz, Batpakkara, Adai) are, above all:",
a: [ "Spontaneous looting with no political content", "An expression of Kazakh agency and organized resistance", "Operations by foreign states", "Conflicts among the nomadic clans themselves" ],
e: "The Kazakhstani national school places Kazakh agency at the center: more than 370 uprisings in 1929–1931 (T. Omarbekov), whose suppression and the cordons placed on migration routes increased mortality in the same districts.",
tag: "Historiography"
},
kz: {
q: "Т. Омарбековтың түсіндірмесінде 1929–1931 жж. көтерілістер (Созақ, Ырғыз, Батпаққара, Адай) ең алдымен нені білдіреді?",
a: [ "Саяси мазмұны жоқ стихиялық тонаушылық", "Қазақтардың субъектілігі мен ұйымдасқан қарсылығының көрінісі", "Сыртқы мемлекеттердің операциялары", "Көшпелі рулардың өзара қақтығысы" ],
e: "Қазақстандық ұлттық мектеп қазақтардың субъектілігін орталыққа қояды: 1929–1931 жж. 370-тен астам көтеріліс пен толқу (Т. Омарбеков), оларды басу және көші-қон жолдарындағы бекеттер сол аудандардағы өлім-жітімді күшейтті.",
tag: "Тарихнама"
}
}, {
c: 2,
ru: {
q: "Почему сводная статистика по общему населению области может ввести в заблуждение?",
a: [ "Переписи вообще не проводились", "Общее население всегда считали точнее", "Приток спецпереселенцев и рабочих может скрыть убыль коренного населения", "Области были слишком маленькими" ],
e: "Это ключевой тезис Н. Пьянчолы. Общее население Карагандинской области росло (Асылбек, Асылбекова, 2014: +41,8 % за 1926–1939) за счёт приезжих, и эта цифра ничего не говорит о казахском населении. Смотреть нужно на этнический разрез, а не на итоговую строку.",
tag: "Историография"
},
en: {
q: "Why can aggregate statistics on an oblast’s total population be misleading?",
a: [ "No censuses were conducted at all", "Total population was always counted more accurately", "An influx of special settlers and workers can conceal the decline of the indigenous population", "The oblasts were too small" ],
e: "This is N. Pianciola’s key thesis. Karaganda Oblast’s total population grew (Asylbek & Asylbekova, 2014: +41.8% in 1926–1939) through newcomers, and that figure says nothing about the Kazakh population. One must look at the ethnic breakdown, not the bottom-line total.",
tag: "Historiography"
},
kz: {
q: "Неге облыстың жалпы халқы бойынша жиынтық статистика адастыруы мүмкін?",
a: [ "Санақ мүлде жүргізілмеген", "Жалпы халық әрқашан дәлірек саналған", "Арнайы қоныс аударушылар мен жұмысшылар легі байырғы халықтың азаюын жасыруы мүмкін", "Облыстар тым кіші болған" ],
e: "Бұл Н. Пьянчоланың басты тезисі. Қарағанды облысының жалпы халқы өсті (Асылбек, Асылбекова, 2014: 1926–1939 жж. +41,8 %) келгендер есебінен өсті, және бұл сан қазақ халқы туралы ештеңе айтпайды. Түпкі жолды емес, этникалық бөліністі қарау керек.",
tag: "Тарихнама"
}
}, {
c: 0,
ru: {
q: "Границы на картах этого сайта представляют собой:",
a: [ "Опорная реконструкция на современной геометрии, а не архивный кадастр", "Точные архивные кадастровые границы 1926 и 1939 годов", "Случайно сгенерированные полигоны", "Границы современных областей Казахстана без изменений" ],
e: "Честная оговорка проекта: геометрия построена как опорная реконструкция на основе современных административных контуров (geoBoundaries), объединённых под исторические единицы. Это не архивный кадастровый shapefile, и на защите об этом нужно говорить прямо.",
tag: "Методология"
},
en: {
q: "The boundaries on this site’s maps are:",
a: [ "A reference reconstruction on modern geometry, not an archival cadastre", "Exact archival cadastral boundaries from 1926 and 1939", "Randomly generated polygons", "The boundaries of Kazakhstan’s modern oblasts, unchanged" ],
e: "The project’s honest caveat: the geometry is built as a reference reconstruction based on modern administrative outlines (geoBoundaries), merged under the historical units. It is not an archival cadastral shapefile, and this should be stated plainly in a defense.",
tag: "Methodology"
},
kz: {
q: "Осы сайттың карталарындағы шекаралар:",
a: [ "Қазіргі геометрияға негізделген тірек реконструкция, мұрағаттық кадастр емес", "1926 және 1939 жылдардың дәл мұрағаттық кадастрлық шекаралары", "Кездейсоқ жасалған полигондар", "Қазақстанның қазіргі облыстарының өзгеріссіз шекаралары" ],
e: "Жобаның адал ескертуі: геометрия тарихи бірліктерге сәйкес біріктірілген қазіргі әкімшілік контурлар (geoBoundaries) негізінде тірек реконструкция ретінде құрылған. Бұл мұрағаттық кадастрлық shapefile емес, және қорғауда бұл туралы тікелей айту керек.",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Безвозвратные потери казахского населения разные авторы оценивают по-разному: ≈1,3–2,3 млн, а отдельные авторы называют и более высокие цифры. Что это означает для исследователя?",
a: [ "Что тема ненаучна и данными пользоваться нельзя", "Что нужно указывать диапазон и атрибуцию оценок, а не одну «правильную» цифру", "Что надо выбрать среднее арифметическое", "Что верна всегда самая большая оценка" ],
e: "Разброс отражает разные методики и источники. Безвозвратные потери казахского населения ≈1,3–2,3 млн (оценки разных авторов); А. Н. Алексеенко: 1,5–1,84 млн. Отдельные авторские оценки выше этого диапазона: Ж. Абылхожин, М. Козыбаев, М. Татимов: 3,25 млн; Х. М. Абжанов: до 4 млн. Корректная научная практика требует приводить диапазон с указанием, кому принадлежит оценка.",
tag: "Методология"
},
en: {
q: "Authors estimate the irrecoverable losses of the Kazakh population differently: ≈1.3–2.3 million, and some authors give higher figures. What does this mean for a researcher?",
a: [ "That the topic is unscientific and the data cannot be used", "That one should state the range and attribute each estimate, rather than giving one \"correct\" figure", "That one should take the arithmetic mean", "That the largest estimate is always correct" ],
e: "The spread reflects different methods and sources. Irrecoverable losses of the Kazakh population are ≈1.3–2.3 million (estimates by different authors); A. N. Alekseenko: 1.5–1.84 million. Individual authors’ estimates above this range: Zh. Abylkhozhin, M. Kozybaev, M. Tatimov: 3.25 million; Kh. M. Abzhanov: up to 4 million. Correct scholarly practice is to give the range with attribution, not to pick one figure.",
tag: "Methodology"
},
kz: {
q: "Қазақ халқының қайтарымсыз шығынын әр автор әртүрлі бағалайды: ≈1,3–2,3 млн, ал кейбір авторлар одан да жоғары сандарды атайды. Бұл зерттеуші үшін нені білдіреді?",
a: [ "Тақырып ғылыми емес және деректерді пайдалануға болмайды", "Диапазон мен бағалардың атрибуциясын көрсету керек, бір «дұрыс» санды емес", "Арифметикалық ортаны алу керек", "Әрқашан ең үлкен баға дұрыс" ],
e: "Алшақтық әртүрлі әдістер мен көздерді көрсетеді. Қазақ халқының қайтарымсыз шығыны ≈1,3–2,3 млн (әртүрлі авторлардың бағалары); А. Н. Алексеенко: 1,5–1,84 млн. Осы диапазоннан жоғары жекелеген авторлық бағалар: Ж. Әбілхожин, М. Қозыбаев, М. Тәтімов: 3,25 млн; Х. М. Әбжанов: 4 млн-ға дейін. Дұрыс ғылыми тәжірибе бойынша диапазон кімге тиесілі екені көрсетіліп беріледі.",
tag: "Әдіснама"
}
}, {
c: 2,
ru: {
q: "Какая доля казахского населения погибла в 1930–1933 годах по наиболее распространённым оценкам?",
a: [ "около 10 %", "около 20 %", "около 38 %", "около 70 %" ],
e: "Погибло около 38 % казахов (Cameron, 2018). Это наибольшая относительная потеря среди этнических групп СССР в период советских голодов.",
tag: "Данные"
},
en: {
q: "According to the most common estimates, what share of the Kazakh population died in 1930–1933?",
a: [ "about 10%", "about 20%", "about 38%", "about 70%" ],
e: "About 38% of Kazakhs died (Cameron, 2018), the largest relative loss among the ethnic groups of the USSR during the period of Soviet famines.",
tag: "Data"
},
kz: {
q: "Ең кең таралған бағалар бойынша 1930–1933 жж. қазақ халқының қанша үлесі қаза тапты?",
a: [ "шамамен 10 %", "шамамен 20 %", "шамамен 38 %", "шамамен 70 %" ],
e: "Қазақтардың шамамен 38 %-ы қаза тапты (Cameron, 2018). Бұл КСРО-дағы кеңестік ашаршылықтар кезеңінде этникалық топтар арасындағы ең үлкен салыстырмалы шығын.",
tag: "Деректер"
}
} ], KB_RU = [], KB_EN = [], KB_KZ = [], kbRu = (title, text, tag) => KB_RU.push({
title: title,
text: text,
tag: tag
}), kbEn = (title, text, tag) => KB_EN.push({
title: title,
text: text,
tag: tag
}), kbKz = (title, text, tag) => KB_KZ.push({
title: title,
text: text,
tag: tag
});

function KBcur() {
return "kz" === LANG ? KB_KZ : "en" === LANG ? KB_EN : KB_RU;
}

kbRu("Для кого атлас", "Атлас является практической частью школьной исследовательской работы «Картография распада», которую подготовили ученики 11F НИШ Астана. Он рассчитан на всех, кто изучает историю Казахстана и голод 1930–1933 годов: на учеников и учителей, а также на жюри конкурса. Конкретные классы или возраст читателей в работе не указаны. Апробация: опрос N = 32 (11 вопросов); 75 % участников сочли интерактивные слои понятнее учебника.", "о проекте"), kbEn("Who the atlas is for", "The atlas is the practical part of the school research paper “Cartography of Disintegration” by students of class 11F, NIS Astana. It is meant for anyone studying the history of Kazakhstan and the 1930–1933 famine: students and teachers, and the competition jury. The paper does not name specific grades or ages. Approbation: a survey, N = 32 (11 questions); 75% of respondents found the interactive layers clearer than a textbook.", "about"), kbKz("Атлас кімге арналған", "Атлас НЗМ Астана 11F сынып оқушылары дайындаған «Ыдырау картографиясы» мектептік зерттеу жұмысының практикалық бөлігі болып табылады. Ол Қазақстан тарихы мен 1930–1933 жылдардағы ашаршылықты зерттейтін барлық адамға арналған: оқушылар мен мұғалімдерге, сондай-ақ байқаудың қазылар алқасына. Жұмыста нақты сыныптар немесе оқырман жасы көрсетілмеген. Апробация: сауалнама, N = 32 (11 сұрақ); қатысушылардың 75 %-ы интерактивті қабаттарды оқулықтан түсініктірек деп санады.", "жоба туралы");
kbRu("Авторы и научный руководитель", "Авторы атласа и научной работы: Жагиппаров Ализар и Утесеитов Али (11F, НИШ Астана). Научный руководитель: Ғазиз Ақтоты Ғазизқызы. Вклад авторов: Ализар отвечал за историографию, сведение таблиц переписей, сопоставление оценок потерь и опросник; Али отвечал за пространственную часть, веб-архитектуру атласа, наложение сеток в GeoPandas/Shapely и матрицу 8 × 12. Совместно сформулирована гипотеза и разграничены уровни «оценка / модель».", "о проекте"), kbEn("Authors and supervisor", "Authors of the atlas and the research paper: Alizar Zhagipparov and Ali Uteseitov (11F, NIS Astana). Supervisor: Ғазиз Ақтоты Ғазизқызы. Contributions: Alizar did the historiography, compiled the census tables, compared the loss estimates and wrote the questionnaire; Ali did the spatial part, the atlas web architecture, overlaying the grids in GeoPandas/Shapely and the 8 × 12 matrix. Together they formulated the hypothesis and separated the “estimate / model” levels.", "about"), kbKz("Авторлар және ғылыми жетекші", "Атлас пен ғылыми жұмыстың авторлары: Жагиппаров Ализар және Утесеитов Али (11F, НЗМ Астана). Ғылыми жетекші: Ғазиз Ақтоты Ғазизқызы. Авторлардың үлесі: Ализар тарихнамаға, санақ кестелерін жинақтауға, шығын бағаларын салыстыруға және сауалнамаға жауап берді; Али кеңістіктік бөлімге, атластың веб-архитектурасына, GeoPandas/Shapely-де торларды қабаттастыруға және 8 × 12 матрицасына жауап берді. Гипотеза бірлесіп тұжырымдалды және «баға / модель» деңгейлері ажыратылды.", "жоба туралы");
kbRu("Как цитировать атлас", "Ссылка на атлас в стиле APA 7: Жагиппаров, А., & Утесеитов, А. (2026). Картография коллапса: HGIS-атлас Ашаршылыка, 1926–1939 [Веб-атлас]. https://asharshylyk-full.vercel.app. Отдельные цифры лучше цитировать по первоисточникам, которые указаны во вкладке «Библиография».", "о проекте"), kbEn("How to cite the atlas", "To cite the atlas in APA 7 style: Zhagipparov, A., & Uteseitov, A. (2026). Cartography of Collapse: An HGIS atlas of Asharshylyk, 1926–1939 [Web atlas]. https://asharshylyk-full.vercel.app. Individual figures are better cited from the primary sources listed in the Bibliography tab.", "about"), kbKz("Атласқа қалай сілтеме жасау керек", "APA 7 стиліндегі сілтеме: Жагиппаров, А., & Утесеитов, А. (2026). Күйреу картографиясы: Ашаршылықтың HGIS-атласы, 1926–1939 [Веб-атлас]. https://asharshylyk-full.vercel.app. Жекелеген сандарды «Библиография» бөлімінде көрсетілген бастапқы дереккөздер бойынша келтірген дұрыс.", "жоба туралы");
kbRu("Предварительные областные данные", "Значения по 8 округам 1926 г. и 12 областям 1939 г. составляют рабочий набор данных атласа. Их сверка с опубликованными итогами переписей ведётся, поэтому в подсказках карты, в легенде, в таблице и в карточках они помечены «предв., сверка ведётся». Республиканские итоги уже сверены с первоисточниками: в 1926 г. 6 198,5 тыс. жителей и 3 627,6 тыс. казахов (58,5 %), в 1939 г. 6 151,1 тыс. и 2 327,6 тыс. (37,8 %).", "данные"), kbEn("Preliminary oblast data", "Values for the 8 okrugs of 1926 and the 12 oblasts of 1939 are the atlas’s working dataset. They are still being cross-checked against the published census results, so map tooltips, the legend, the table and the cards mark them “prelim., cross-check in progress”. The republic totals have been checked against the primary sources: in 1926, 6,198.5 thousand inhabitants and 3,627.6 thousand Kazakhs (58.5%); in 1939, 6,151.1 and 2,327.6 thousand (37.8%).", "data"), kbKz("Алдын ала облыстық деректер", "1926 ж. 8 округ пен 1939 ж. 12 облыс бойынша мәндер атластың жұмыс деректер жиынтығын құрайды. Олар жарияланған санақ қорытындыларымен әлі салыстырылуда, сондықтан карта кеңестерінде, шартты белгілерде, кестеде және карточкаларда «алдын ала, салыстыру жүргізілуде» деп белгіленген. Республикалық қорытындылар бастапқы дереккөздермен тексерілген: 1926 ж. 6 198,5 мың тұрғын және 3 627,6 мың қазақ (58,5 %), 1939 ж. 6 151,1 және 2 327,6 мың (37,8 %).", "деректер");
kbRu("Факт, модель и гипотеза", "В работе и на сайте различаются три уровня утверждений. Факт означает опубликованное значение с источником (итоги переписей, оценки историков с указанием автора); на плашках он отмечен меткой «перепись» или «оценка историографии». Модель означает расчётное значение, полученное методом (ареальная интерполяция, MAUP-сдвиг, индекс несходства); метка «модель». Гипотеза означает предположение, которое проверяется: «наиболее тяжелые потери приходились на районы традиционного скотоводства, тогда как статистический прирост в промышленных центрах мог быть следствием принудительной и организованной миграции».", "методология"), kbEn("Fact, model and hypothesis", "The paper and the site distinguish three levels of claims. A fact is a published value with a source (census results, historians’ estimates attributed to their authors); plaques mark it “census” or “historiographic estimate”. A model value is calculated by a method (areal interpolation, the MAUP shift, the dissimilarity index); it is marked “model”. A hypothesis is an assumption being tested: “the heaviest losses fell on areas of traditional pastoralism, while the statistical growth of industrial centres may have resulted from forced and organised migration”.", "methodology"), kbKz("Факт, модель және гипотеза", "Жұмыс пен сайтта тұжырымдардың үш деңгейі ажыратылады. Факт дегеніміз дереккөзі бар жарияланған мән (санақ қорытындылары, авторы көрсетілген тарихшылардың бағалары); тақташаларда ол «санақ» немесе «тарихнамалық баға» белгісімен белгіленеді. Модель дегеніміз әдіспен алынған есептік мән (ареалдық интерполяция, MAUP ығысуы, ұқсамау индексі); белгісі «модель». Гипотеза дегеніміз тексерілетін болжам: ең ауыр шығындар дәстүрлі мал шаруашылығы аудандарына келді, ал өнеркәсіп орталықтарындағы статистикалық өсім мәжбүрлі және ұйымдастырылған көші-қонның салдары болуы мүмкін.", "әдіснама");

kbRu("Что такое Ашаршылык", "Ашаршылык: голод в Казахстане 1930–1933 годов, вызванный насильственной коллективизацией, седентаризацией (принудительным оседанием кочевников) и мясозаготовками. Безвозвратные потери казахского населения ≈1,3–2,3 млн (оценки разных авторов); А. Н. Алексеенко: 1,5–1,84 млн. Доля погибших от численности казахского народа составляет ≈38 % (Cameron, 2018), наибольшая относительная потеря среди народов СССР. Оценки разных авторов: Институт демографии им. Птухи НАН Украины: 1,258 млн; Р. Конквест: 2,3 млн. Отдельные авторские оценки выше общего диапазона: Ж. Абылхожин, М. Козыбаев, М. Татимов: 3,25 млн; проф. Х. М. Абжанов: до 4 млн.", "основное"), 
kbEn("What Asharshylyk is", "Asharshylyk is the 1930–1933 famine in Kazakhstan, caused by forced collectivization, sedentarization (the forced settlement of nomads), and meat-procurement quotas. Irrecoverable losses of the Kazakh population are ≈1.3–2.3 million (estimates by different authors); A. N. Alekseenko: 1.5–1.84 million. The share of deaths relative to the Kazakh population was ≈38% (Cameron, 2018), the largest relative loss among the peoples of the USSR. Estimates by different authors: the Ptukha Institute of Demography of the National Academy of Sciences of Ukraine: 1.258 million; R. Conquest: 2.3 million. Individual authors’ estimates above the overall range: Zh. Abylkhozhin, M. Kozybaev, M. Tatimov: 3.25 million; Prof. Kh. M. Abzhanov: up to 4 million.", "core"), 
kbKz("Ашаршылық деген не", "Ашаршылық: 1930–1933 жылдары Қазақстанда болған, күштеп ұжымдастыру, отырықшыландыру (көшпенділерді мәжбүрлеп қоныстандыру) және ет дайындау нормалары тудырған ашаршылық. Қазақ халқының қайтарымсыз шығыны ≈1,3–2,3 млн (әртүрлі авторлардың бағалары); А. Н. Алексеенко: 1,5–1,84 млн. Қазақ халқы санынан қаза болғандар үлесі ≈38 % (Cameron, 2018), бұл КСРО халықтары арасындағы ең үлкен салыстырмалы шығын. Әртүрлі авторлардың бағалары: Украина ҰҒА Птуха атындағы Демография институты: 1,258 млн; Р. Конквест: 2,3 млн. Жалпы диапазоннан жоғары жекелеген авторлық бағалар: Ж. Абылхожин, М. Қозыбаев, М. Тәтімов: 3,25 млн; проф. Х. М. Әбжанов: 4 млн-ға дейін.", "негізгі"), 
kbRu("Тема и цель исследования", "Проект «Картография коллапса» представляет пространственно-демографический анализ Ашаршылыка средствами исторической ГИС (HGIS). Данные переписей 1926 и 1939 годов накладываются на разные административные сетки: 8 округов 1926 года и 12 областей 1939 года. Цель состоит в том, чтобы показать, что вывод о географии катастрофы зависит от выбранной сетки агрегирования, то есть продемонстрировать Modifiable Areal Unit Problem на историческом материале.", "основное"), 
kbEn("The topic and goal of the study", '"Cartography of Collapse" is a spatial-demographic analysis of Asharshylyk using historical GIS (HGIS). Data from the 1926 and 1939 censuses is overlaid on different administrative grids: 8 okrugs in 1926 and 12 oblasts in 1939. The goal is to show that a conclusion about the geography of the catastrophe depends on the chosen aggregation grid, that is, to demonstrate the Modifiable Areal Unit Problem on historical material.', "core"), 
kbKz("Зерттеудің тақырыбы мен мақсаты", "«Күйреу картографиясы» жобасы Ашаршылықтың тарихи ГАЖ (HGIS) құралдарымен жасалған кеңістіктік-демографиялық талдауы болып табылады. 1926 және 1939 жылдардың санақ деректері әртүрлі әкімшілік торларға салынады: 1926 жылғы 8 округ және 1939 жылғы 12 облыс. Мақсат: апат географиясы туралы қорытынды таңдалған топтастыру торына тәуелді екенін көрсету, яғни тарихи материалда Modifiable Areal Unit Problem-ды көрсету.", "негізгі"), 
kbRu("MAUP: проблема модифицируемых пространственных единиц", "MAUP (Modifiable Areal Unit Problem) означает эффект, при котором результат статистического анализа меняется в зависимости от того, по каким территориальным единицам сгруппированы данные. У MAUP два аспекта: эффект масштаба (меняется размер единиц) и эффект зонирования (меняется нарезка при том же числе единиц). В этом исследовании проявлены оба: 8 округов против 12 областей на одной и той же территории.", "методология"), 
kbEn("MAUP: the Modifiable Areal Unit Problem", "MAUP (Modifiable Areal Unit Problem) is an effect in which the result of a statistical analysis changes depending on which territorial units the data is grouped by. MAUP has two aspects: the scale effect (the size of the units changes) and the zoning effect (the layout changes while the number of units stays the same). Both appear in this study: 8 okrugs versus 12 oblasts on the same territory.", "methodology"), 
kbKz("MAUP: модификацияланатын аумақтық бірліктер мәселесі", "MAUP (Modifiable Areal Unit Problem) деп статистикалық талдау нәтижесі деректер қандай аумақтық бірліктер бойынша топтастырылғанына байланысты өзгеретін эффектіні айтады. MAUP-тың екі аспектісі бар: масштаб эффектісі (бірліктер өлшемі өзгереді) және аймақтандыру эффектісі (бірліктер саны бірдей болғанда бөліну өзгереді). Бұл зерттеуде екеуі де көрінеді: бір аумақтағы 8 округ пен 12 облыс.", "әдіснама"), 
kbRu("Ареальная интерполяция: формула", "Чтобы перенести данные с сетки 1926 года на сетку 1939 года, применяется ареальная интерполяция: P_фрагмент = P_1926 × (Площадь пересечения ÷ Площадь округа 1926). Население округа распределяется между областями пропорционально площади геометрического пересечения. Ключевое допущение: равномерная плотность населения внутри округа. Для кочевого населения это упрощение, и оно само по себе вносит погрешность. Всего в проекте рассчитана матрица 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения.", "методология"), 
kbEn("Areal interpolation: the formula", "To carry data from the 1926 grid onto the 1939 grid, areal interpolation is used: P_fragment = P_1926 × (intersection area ÷ 1926 okrug area). The okrug’s population is distributed among the oblasts in proportion to the area of geometric intersection. The key assumption is uniform population density within the okrug. For a nomadic population this is a simplification, and it introduces error on its own. In total, the project computed an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area.", "methodology"), 
kbKz("Ареалдық интерполяция: формула", "1926 жылғы тордағы деректерді 1939 жылғы торға көшіру үшін ареалдық интерполяция қолданылады: P_фрагмент = P_1926 × (Қиылысу ауданы ÷ 1926 округ ауданы). Округ халқы облыстар арасында геометриялық қиылысу ауданына пропорционал бөлінеді. Негізгі болжам: округ ішінде халық тығыздығы бірдей. Көшпелі халық үшін бұл жеңілдету, және ол өзі қателік тудырады. Жобада барлығы есептелді: 8 × 12 матрицасы: «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен.", "әдіснама"), 
kbRu("Главный количественный результат", "При переносе казахского населения 1926 года с сетки 8 округов на сетку 12 областей суммарный сдвиг долей составил 42,46 процентных пункта, индекс несходства (половина суммы модулей сдвигов) равен 21,2 %. Это означает, что при смене административной сетки «переезжает» примерно пятая часть всего пространственного распределения населения. Наибольший сдвиг вверх даёт Восточно-Казахстанская область (+165 % относительно исходной доли), наибольший сдвиг вниз даёт Акмолинская область (−60 %).", "результаты"), 
kbEn("The main quantitative result", 'When the 1926 Kazakh population is reallocated from the 8-okrug grid onto the 12-oblast grid, the total share shift is 42.46 percentage points, and the dissimilarity index (half the sum of the absolute shifts) is 21.2%. This means that changing the administrative grid "relocates" roughly a fifth of the entire spatial distribution of the population. The largest upward shift is East Kazakhstan Oblast (+165% relative to its original share); the largest downward shift is Akmola Oblast (−60%).', "results"), 
kbKz("Басты сандық нәтиже", "1926 жылғы қазақ халқын 8 округтік тордан 12 облыстық торға ауыстырғанда, үлестердің жиынтық ауытқуы 42,46 пайыздық тармақты, ал ұқсамау индексі (ауытқулар модульдерінің қосындысының жартысы) 21,2 %-ды құрады. Бұл әкімшілік тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің шамамен бестен бірі «көшетінін» білдіреді. Ең үлкен жоғары ауытқу Шығыс Қазақстан облысында (бастапқы үлеске қатысты +165 %), ең үлкен төмен ауытқу Ақмола облысында (−60 %).", "нәтижелер"), 
kbRu("Аномальный рост населения", "Аномальным ростом называют ситуацию, когда общее население области растёт, а коренное (казахское) население той же области резко сокращается. Классический пример: Карагандинская область (Асылбек, Асылбекова, 2014: +41,8 % за 1926–1939); приток спецпереселенцев, заключённых Карлага и рабочих индустриальных строек увеличивал общую численность. Данные о казахском населении области в рабочем наборе атласа ещё сверяются; по оценке А. Н. Алексеенко (2003), в Центральном Казахстане (Карагандинская область) потери казахского этноса были наименьшими в республике: 22,5 тыс. человек, или 15,6 %. Поэтому общая численность области сама по себе ничего не говорит о судьбе её казахского населения, и анализировать нужно этнический разрез.", "результаты"), 
kbEn("Anomalous population growth", "Anomalous growth is a situation where an oblast’s total population grows while its indigenous (Kazakh) population sharply declines. The classic example is Karaganda Oblast (Asylbek & Asylbekova, 2014: +41.8% in 1926–1939): an influx of special settlers, Karlag prisoners, and industrial-construction workers increased the total count. The Kazakh figures for this oblast in the atlas’s working dataset are still being cross-checked; according to A. N. Alekseenko (2003), Kazakh losses in Central Kazakhstan (Karaganda Oblast) were the smallest in the republic: 22.5 thousand people, or 15.6%. So the oblast’s total population on its own says nothing about the fate of its Kazakh population, and one needs to analyze the ethnic breakdown.", "results"), 
kbKz("Халық санының аномальды өсуі", "Аномальды өсім деп облыстың жалпы халқы өсіп жатқанда, сол облыстың байырғы (қазақ) халқы күрт азаятын жағдайды айтады. Классикалық мысал: Қарағанды облысы (Асылбек, Асылбекова, 2014: 1926–1939 жж. +41,8 %); арнайы қоныс аударушылар, Карлаг тұтқындары және өнеркәсіп құрылысы жұмысшыларының легі жалпы санды арттырды. Атластың жұмыс жиынтығындағы облыстың қазақ халқы туралы деректері әлі салыстырылуда; А. Н. Алексеенконың (2003) бағасы бойынша Орталық Қазақстанда (Қарағанды облысы) қазақ этносының шығыны республикадағы ең аз болды: 22,5 мың адам, немесе 15,6 %. Сондықтан облыстың жалпы халқы өз алдына оның қазақ халқының тағдыры туралы ештеңе айтпайды, этникалық бөліністі талдау керек.", "нәтижелер"), 
kbRu("Откочёвки: масштаб и направления", "Республику покинули около 1,13 млн человек. Безвозвратно около 676 тыс.; вернулись впоследствии около 454 тыс.; порядка 200 тыс. остались за границей навсегда. Зарубежные направления: Синьцзян (Китай, крупнейшее направление), Монголия (Баян-Улгий), Афганистан, Иран, позже Турция (уже вторичная миграция 1950–60-х из Синьцзяна). Внутрисоюзные направления: Западно-Сибирский край, Средняя Волга и Сталинград, Узбекская ССР, Киргизская АССР, Туркменская ССР, Каракалпакская АССР, Урал и Башкирия. ВАЖНО: разбивка по конкретным направлениям остаётся дискуссионной оценкой. Сара Кэмерон прямо называет точный подсчёт по направлениям открытым исследовательским вопросом, требующим работы с архивами других республик и Синьцзяна.", "откочёвки"), 
kbEn("Migrations: scale and destinations", "About 1.13 million people left the republic. Permanently: about 676,000; about 454,000 later returned; around 200,000 remained abroad for good. Foreign destinations: Xinjiang (China, the largest), Mongolia (Bayan-Ölgii), Afghanistan, Iran, and later Turkey (a secondary migration of the 1950s–60s from Xinjiang). Destinations within the union: West Siberian Krai, the Middle Volga and Stalingrad, the Uzbek SSR, the Kirghiz ASSR, the Turkmen SSR, the Karakalpak ASSR, the Urals and Bashkiria. IMPORTANT: the breakdown by specific destination is a debated estimate. Sarah Cameron explicitly calls an exact count by destination an open research question requiring work with the archives of other republics and Xinjiang.", "migrations"), 
kbKz("Көші-қон: ауқымы мен бағыттары", "Республикадан шамамен 1,13 млн адам кетті. Қайтпай кеткендер шамамен 676 мың; кейін шамамен 454 мың адам оралды; шамамен 200 мың адам шетелде мәңгілікке қалды. Шетелдік бағыттар: Шыңжаң (Қытай, ең ірі бағыт), Моңғолия (Баян-Өлгий), Ауғанстан, Иран, кейінірек Түркия (1950–60 жж. Шыңжаңнан қайталама көші-қон). Одақ ішіндегі бағыттар: Батыс Сібір өлкесі, Орта Еділ мен Сталинград, Өзбек КСР-і, Қырғыз АКСР-і, Түрікмен КСР-і, Қарақалпақ АКСР-і, Орал мен Башқұртстан. МАҢЫЗДЫ: нақты бағыттар бойынша бөліну пікірталастық баға болып қала береді. Сара Кэмерон бағыттар бойынша дәл санақты басқа республикалар мен Шыңжаң мұрағаттарымен жұмысты талап ететін ашық зерттеу мәселесі деп тікелей атайды.", "көші-қон"), 
kbRu("Потери скота", "Скот был не товаром, а основой всей системы жизнеобеспечения кочевого и полукочевого хозяйства. От примерно 40 млн голов в 1928 году к 1933 году осталось около 4,5 млн, порядка одной десятой. Разрушение поголовья означало разрушение самой возможности вести привычный образ жизни, и именно поэтому скотоводческие районы пострадали сильнее земледельческих.", "данные"), 
kbEn("Livestock losses", "Livestock was not a commodity but the foundation of the entire subsistence system of the nomadic and semi-nomadic economy. Of roughly 40 million head in 1928, by 1933 about 4.5 million remained, around one-tenth. The destruction of the herd meant the destruction of the very possibility of the customary way of life, and that is exactly why pastoral districts suffered more than farming ones.", "data"), 
kbKz("Мал шығыны", "Мал тауар емес, көшпелі және жартылай көшпелі шаруашылықтың бүкіл өмір сүру жүйесінің негізі болды. 1928 жылы шамамен 40 млн бастан 1933 жылға қарай шамамен 4,5 млн қалды, яғни оннан бір бөлігі шамасында. Мал басының құрып кетуі әдеттегі өмір салтын жүргізу мүмкіндігінің құрып кетуін білдірді, дәл сондықтан мал шаруашылығы аудандары егіншілік аудандарынан көбірек зардап шекті.", "деректер"), 
kbRu("Сара Кэмерон: тезис", "Сара Кэмерон, «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan» (2018). Тезис: голод стал результатом насильственной седентаризации и уничтожения кочевого хозяйства как способа жизни, а не только следствие зерновых изъятий. Казахи гибли из-за уничтожения скота. Картографическая линза Кэмерон: максимальные потери там, где доля кочевого и полукочевого скотоводства была наибольшей.", "историография"), 
kbEn("Sarah Cameron: thesis", 'Sarah Cameron, "The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan" (2018). Thesis: the famine is the result of violent sedentarization and the destruction of nomadic husbandry as a way of life, not merely a consequence of grain requisitioning. Kazakhs died from the destruction of livestock. Cameron’s cartographic lens: maximum losses where the share of nomadic and semi-nomadic pastoralism was highest.', "historiography"), 
kbKz("Сара Кэмерон: тезисі", "Сара Кэмерон, «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan» (2018). Тезис: ашаршылық тек астық тәркілеудің салдары ғана емес, көшпелі шаруашылықтың өмір салты ретінде күштеп отырықшыландыру мен құрып кетуінің нәтижесі. Қазақтар малдың жойылуынан қырылды. Кэмеронның картографиялық көзқарасы: ең үлкен шығындар көшпелі және жартылай көшпелі мал шаруашылығының үлесі ең жоғары жерлерде.", "тарихнама"), 
kbRu("Никколо Пьянчола: тезис", "Никколо Пьянчола объясняет голод через имперскую иерархию приоритетов: ресурсы изымались с периферии в пользу индустриальных центров. Его линза объясняет феномен аномального роста: районы с ГУЛАГом и промышленным строительством (Караганда, Балхаш, Риддер) прибавляют в общем населении (для Карагандинской области: Асылбек, Асылбекова, 2014, +41,8 % за 1926–1939), теряя коренное. Административная статистика по общему населению при этом маскирует этнодемографический коллапс.", "историография"), 
kbEn("Niccolò Pianciola: thesis", "Niccolò Pianciola explains the famine through an imperial hierarchy of priorities: resources were extracted from the periphery to benefit industrial centers. His lens explains the phenomenon of anomalous growth: districts with GULAG camps and industrial construction (Karaganda, Balkhash, Ridder) gain in total population (for Karaganda Oblast, Asylbek & Asylbekova, 2014: +41.8% in 1926–1939) while losing their indigenous population. Administrative statistics on total population mask the ethno-demographic collapse.", "historiography"), 
kbKz("Никколо Пьянчола: тезисі", "Никколо Пьянчола ашаршылықты империялық басымдықтар иерархиясы арқылы түсіндіреді: ресурстар шет аймақтардан өнеркәсіп орталықтарының пайдасына тартып алынды. Оның көзқарасы аномальды өсім құбылысын түсіндіреді: ГУЛАГ пен өнеркәсіп құрылысы бар аудандар (Қарағанды, Балқаш, Риддер) жалпы халық санында ұтады (Қарағанды облысы үшін: Асылбек, Асылбекова, 2014, 1926–1939 жж. +41,8 %), ал байырғы халқын жоғалтады. Жалпы халық бойынша әкімшілік статистика бұл кезде этнодемографиялық күйреуді жасырады.", "тарихнама"), 
kbRu("Талас Омарбеков: тезис", "Талас Омарбеков и казахстанская национальная историографическая школа ставят в центр субъектность казахов и трактуют голод как целенаправленную политику против народа. Акцент на сопротивлении: более 370 выступлений 1929–1931 гг. (Т. Омарбеков), среди них Сузакское, Иргизское, Батпаккаринское, Адаевское, Каракумское, Абралинское. Подавление восстаний и заградительные заслоны на путях откочёвок усиливали смертность в тех же районах.", "историография"), 
kbEn("Talas Omarbekov: thesis", "Talas Omarbekov and the Kazakhstani national historiographic school place Kazakh agency at the center and treat the famine as a deliberate policy against the people. The emphasis is on resistance: more than 370 uprisings in 1929–1931 (T. Omarbekov), including Suzak, Irgiz, Batpakkara, Adai, Karakum, Abralin. The suppression of the uprisings and blocking cordons on migration routes intensified mortality in the same districts.", "historiography"), 
kbKz("Талас Омарбеков: тезисі", "Талас Омарбеков және қазақстандық ұлттық тарихнамалық мектеп қазақтардың субъектілігін орталыққа қояды және ашаршылықты халыққа қарсы бағытталған мақсатты саясат ретінде түсіндіреді. Басты назар қарсылықта: 1929–1931 жж. 370-тен астам көтеріліс пен толқу болды (Т. Омарбеков), солардың ішінде Созақ, Ырғыз, Батпаққара, Адай, Қарақұм, Абыралы. Көтерілістерді басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті.", "тарихнама"), 
kbRu("Сравнение с другими голодами 1930-х", "По абсолютному числу жертв наибольшие потери дала Украинская ССР: Голодомор 1932–33 гг., ≈3,3–3,9 млн погибших (Wikipedia, «Soviet famine of 1930–1933»). По ОТНОСИТЕЛЬНОЙ потере лидирует Казахская АССР: погибло ≈38 % казахов (Cameron, 2018). Также пострадали Поволжье, Северный Кавказ и Кубань, Западная Сибирь и Урал. Для масштаба на карте приведён голод в Китае (Ганьсу, Шэньси) 1928–1930 гг., 3–10 млн погибших, но у него иные причины: засуха и война милитаристов.", "сравнение"), 
kbEn("Comparison with other 1930s famines", "By absolute number of victims, the Ukrainian SSR saw the greatest losses: the Holodomor of 1932–33, ≈3.3–3.9 million deaths (Wikipedia, “Soviet famine of 1930–1933”). By RELATIVE loss, the Kazak ASSR leads: ≈38% of Kazakhs died (Cameron, 2018). The Volga region, the North Caucasus and Kuban, and Western Siberia and the Urals also suffered. For scale, the map includes the famine in China (Gansu, Shaanxi) of 1928–1930, with 3–10 million deaths, but it had different causes: drought and warlord conflict.", "comparison"), 
kbKz("1930 жж. басқа ашаршылықтармен салыстыру", "Абсолютті құрбандар саны бойынша ең үлкен шығынды Украин КСР-і берді: 1932–33 жж. Голодомор, ≈3,3–3,9 млн қаза тапқан (Wikipedia, «Soviet famine of 1930–1933»). САЛЫСТЫРМАЛЫ шығын бойынша Қазақ АКСР-і алда: қазақтардың ≈38 %-ы қаза тапты (Cameron, 2018). Сондай-ақ Еділ бойы, Солтүстік Кавказ бен Кубань, Батыс Сібір мен Орал да зардап шекті. Масштабты көрсету үшін картада 1928–1930 жж. Қытайдағы (Ганьсу, Шэньси) ашаршылық (3–10 млн қаза тапқан) берілген, бірақ оның себептері басқа: құрғақшылық пен милитаристер соғысы.", "салыстыру"), 
kbRu("Переписи 1926 и 1939 годов", "Казахи во всём СССР по переписям 1926 и 1939 гг.: около 3,968 млн и около 3,1 млн соответственно (это итоги по всему Союзу, а не по республике). Убыль между переписями по СССР составила порядка 867 тыс. человек. Но прямое вычитание занижает потери: перепись 1937 года (2,18 млн казахов) была объявлена «вредительской» и засекречена, а перепись 1939 года проводилась с политическим давлением на итоговые цифры. Кроме того, между переписями действуют одновременно смертность, откочёвки и возвращение части откочевников, поэтому разложить убыль на компоненты по одним лишь итогам переписей невозможно.", "данные"), 
kbEn("The 1926 and 1939 censuses", 'Kazakhs in the whole USSR according to the 1926 and 1939 censuses: about 3.968 million and about 3.1 million respectively (these are Union-wide totals, not figures for the republic). The USSR-wide decline between the censuses is about 867,000 people. But simple subtraction understates the losses: the 1937 census (2.18 million Kazakhs) was declared "sabotage" and suppressed, and the 1939 census was conducted under political pressure on the final figures. Moreover, mortality, migration, and the return of some migrants all occur simultaneously between censuses, so the decline cannot be decomposed into components from census totals alone.', "data"), 
kbKz("1926 және 1939 жылдардағы санақтар", "1926 және 1939 жж. санақтары бойынша бүкіл КСРО-дағы қазақтар: тиісінше шамамен 3,968 млн және шамамен 3,1 млн (бұл республика емес, бүкіл Одақ бойынша қорытынды). КСРО бойынша санақтар арасындағы кему шамамен 867 мың адамды құрады. Бірақ жай ғана азайту шығынды төмендетіп көрсетеді: 1937 жылғы санақ (2,18 млн қазақ) «зиянкестік» деп жарияланып, құпияланды, ал 1939 жылғы санақ түпкі сандарға саяси қысым астында жүргізілді. Сонымен қатар, санақтар арасында өлім, көші-қон және кейбір көшкендердің оралуы бір мезгілде жүреді, сондықтан кемуді тек санақ қорытындылары бойынша құрамдас бөліктерге жіктеу мүмкін емес.", "деректер"), 
kbRu("Ограничения проекта: честные оговорки", "Границы на картах представляют опорную реконструкцию: современная административная геометрия (geoBoundaries), объединённая под исторические единицы 1926 и 1939 годов. Это НЕ архивный кадастровый shapefile, и реальные исторические границы отличались. Демографические атрибуты хранятся отдельно от геометрии. Наборы атрибутов 1926 и 1939 годов происходят из разных источников и имеют разные базовые итоги, поэтому сравнивать корректнее доли, а не абсолютные суммы. Ареальная интерполяция предполагает равномерную плотность внутри единицы, что для кочевого населения является упрощением. Областные показатели взяты из рабочего набора данных атласа; сверка с опубликованными итогами переписей по областям ведётся, см. журнал изменений данных. Всё это нужно прямо проговаривать на защите: это не слабость работы, а часть её методологической рефлексии.", "методология"), 
kbEn("Project limitations: honest caveats", "The boundaries on the maps are a reference reconstruction: modern administrative geometry (geoBoundaries) merged under the 1926 and 1939 historical units. This is NOT an archival cadastral shapefile, and the real historical boundaries differed. Demographic attributes are stored separately from the geometry. The 1926 and 1939 attribute sets come from different sources and have different base totals, so it is more accurate to compare shares rather than absolute sums. Areal interpolation assumes uniform density within a unit, which is a simplification for a nomadic population. Oblast-level figures are the atlas’s working dataset; cross-checking against the published census results by oblast is in progress, see the data changelog. All of this should be stated plainly in a defense: it is not a weakness of the work but part of its methodological reflection.", "methodology"), 
kbKz("Жобаның шектеулері: адал ескертулер", "Карталардағы шекаралар тірек реконструкция болып табылады: 1926 және 1939 жылдардың тарихи бірліктеріне сәйкес біріктірілген қазіргі әкімшілік геометрия (geoBoundaries). Бұл мұрағаттық кадастрлық shapefile ЕМЕС, нақты тарихи шекаралар өзгеше болған. Демографиялық атрибуттар геометриядан бөлек сақталады. 1926 және 1939 жылдардың атрибут жиынтықтары әртүрлі көздерден алынған және базалық қорытындылары бөлек, сондықтан абсолютті сомаларды емес, үлестерді салыстырған дұрысырақ. Ареалдық интерполяция бірлік ішінде тығыздықтың бірдей болуын болжайды, бұл көшпелі халық үшін жеңілдету. Облыстық көрсеткіштер атластың жұмыс деректер жиынтығынан алынған; облыстар бойынша жарияланған санақ қорытындыларымен салыстыру жүргізілуде, деректер өзгерістері журналын қараңыз. Мұның бәрін қорғауда тікелей айту керек: бұл жұмыстың кемшілігі емес, оның әдіснамалық рефлексиясының бөлігі.", "әдіснама"), 
kbRu("Как пользоваться сайтом", "Разделы: «Карта Казахстана» показывает хороплет по сеткам 1926 и 1939 годов с переключением метрик, слоями лагерей и восстаний, сплит-сравнением и режимом StoryMap. «Карта мира»: потоки откочёвок и сравнительный слой голода 1930-х. «Историография»: три исследовательские линзы с подсветкой соответствующих регионов. «Библиография»: научные источники, на которых основан атлас. «Данные и MAUP»: таблица, калькулятор ареальной интерполяции и экспорт GeoJSON/CSV. «Квиз»: проверка знаний. Клик по региону открывает карточку с графиком и экспортом в PDF.", "навигация"), 
kbEn("How to use the site", 'Sections: "Map of Kazakhstan": a choropleth over the 1926 and 1939 grids with switchable metrics, camp and uprising layers, a split comparison, and a StoryMap mode. "World Map": migration flows and a comparative layer of 1930s famines. "Historiography": three research lenses that highlight the corresponding regions. "Bibliography": the scholarly sources underlying the atlas. "Data & MAUP": a table, an areal-interpolation calculator, and GeoJSON/CSV export. "Quiz": a knowledge check. Clicking a region opens a card with a chart and PDF export.', "navigation"), 
kbKz("Сайтты қалай пайдалану керек", "Бөлімдер: «Қазақстан картасы»: 1926 және 1939 жылдардың торлары бойынша хороплет, көрсеткіштерді ауыстыру, лагерь мен көтеріліс қабаттары, сплит-салыстыру және StoryMap режимі. «Әлем картасы»: көші-қон ағындары және 1930 жж. ашаршылықтардың салыстырмалы қабаты. «Тарихнама»: сәйкес аймақтарды бөліп көрсететін үш зерттеу көзқарасы. «Библиография»: атластың негізіндегі ғылыми дереккөздер. «Деректер және MAUP»: кесте, ареалдық интерполяция калькуляторы және GeoJSON/CSV экспорты. «Викторина»: білімді тексеру. Аймаққа басу графигі мен PDF экспорты бар карточканы ашады.", "навигация"), 
KZ[1939].forEach(f => {
const p = f.p;
kbRu("Область: " + p.name, `${p.name} (сетка 1939 г.). Казахское население: в 1926 г. ${p.kazakh_1926.toLocaleString("ru")}, в 1939 г. ${p.kazakh_1939.toLocaleString("ru")}. Общее население: в 1926 г. ${p.total_1926.toLocaleString("ru")}, в 1939 г. ${p.total_1939.toLocaleString("ru")}. Потеря казахского населения: ${p.loss_percent} %. (Областные значения взяты из рабочего набора атласа; сверка с опубликованными итогами ведётся.) ${p.desc}`, "регион"), 
kbEn("Oblast: " + (p.name_en || p.name), `${p.name_en || p.name} (1939 grid). Kazakh population: ${p.kazakh_1926.toLocaleString("en-US")} in 1926, ${p.kazakh_1939.toLocaleString("en-US")} in 1939. Total population: ${p.total_1926.toLocaleString("en-US")} in 1926, ${p.total_1939.toLocaleString("en-US")} in 1939. Kazakh population loss: ${p.loss_percent}%. (Oblast values are the atlas’s working dataset; cross-checking against the published results is in progress.) ${p.desc_en || p.desc}`, "region"),
kbKz("Облыс: " + (p.name_kz || p.name), `${p.name_kz || p.name} (1939 торы). Қазақ халқы: 1926 ж. ${p.kazakh_1926.toLocaleString("ru-RU")}, 1939 ж. ${p.kazakh_1939.toLocaleString("ru-RU")}. Жалпы халық: 1926 ж. ${p.total_1926.toLocaleString("ru-RU")}, 1939 ж. ${p.total_1939.toLocaleString("ru-RU")}. Қазақ халқының шығыны: ${p.loss_percent} %. (Облыстық мәндер атластың жұмыс жиынтығынан алынған; жарияланған қорытындылармен салыстыру жүргізілуде.) ${p.desc_kz || p.desc}`, "аймақ");
}), KZ[1926].forEach(f => {
const p = f.p;
kbRu("Округ: " + p.name, `${p.name} (сетка 1926 г.). Всего населения: ${p.population_total.toLocaleString("ru")}. Доля казахов: ${p.kazakh_percent} %. (Значения по округам взяты из рабочего набора атласа; сверка с опубликованными итогами ведётся.) ${p.desc}`, "регион"),
kbEn("Okrug: " + (p.name_en || p.name), `${p.name_en || p.name} (1926 grid). Total population: ${p.population_total.toLocaleString("en-US")}. Kazakh share: ${p.kazakh_percent}%. (Okrug values are the atlas’s working dataset; cross-checking against the published results is in progress.) ${p.desc_en || p.desc}`, "region"),
kbKz("Округ: " + (p.name_kz || p.name), `${p.name_kz || p.name} (1926 торы). Жалпы халық: ${p.population_total.toLocaleString("ru-RU")}. Қазақтар үлесі: ${p.kazakh_percent} %. (Округтік мәндер атластың жұмыс жиынтығынан алынған; жарияланған қорытындылармен салыстыру жүргізілуде.) ${p.desc_kz || p.desc}`, "аймақ");
}), FLOWS.forEach(fl => {
kbRu("Направление откочёвки: " + fl.ru.to, `${fl.ru.to}: ${"abroad" === fl.kind ? "зарубежное" : "внутрисоюзное"} направление откочёвок. Оценочный диапазон: ${fl.lo}–${fl.hi} тыс. человек (дискуссионная оценка). ${fl.ru.note}`, "откочёвки"),
kbEn("Migration destination: " + fl.en.to, `${fl.en.to}: a ${"abroad" === fl.kind ? "foreign" : "within-USSR"} migration destination. Estimated range: ${fl.lo}–${fl.hi} thousand people (a debated estimate). ${fl.en.note}`, "migrations"),
kbKz("Көші-қон бағыты: " + fl.kz.to, `${fl.kz.to}: ${"abroad" === fl.kind ? "шетелдік" : "одақ ішіндегі"} көші-қон бағыты. Бағалау аралығы: ${fl.lo}–${fl.hi} мың адам (пікірталастық баға). ${fl.kz.note}`, "көші-қон");
});

const D2R = Math.PI / 180, ALB = (() => {
const p1 = 45 * D2R, p2 = 53 * D2R, p0 = 48 * D2R, l0 = 68 * D2R, n = (Math.sin(p1) + Math.sin(p2)) / 2, C = Math.cos(p1) ** 2 + 2 * n * Math.sin(p1);
return {
n: n,
C: C,
r0: Math.sqrt(C - 2 * n * Math.sin(p0)) / n,
l0: l0
};
})();

// Albers equal-area conic for given parameters (degrees); the world map's regional view uses the parameters
// stored with its basemap (scripts/build_world.js projects the basemap with the same formula).
function albersFor({lon0: lon0, p1: p1, p2: p2, p0: p0}) {
const n = (Math.sin(p1 * D2R) + Math.sin(p2 * D2R)) / 2, C = Math.cos(p1 * D2R) ** 2 + 2 * n * Math.sin(p1 * D2R), r0 = Math.sqrt(C - 2 * n * Math.sin(p0 * D2R)) / n;
return (lon, lat) => {
const r = Math.sqrt(Math.max(0, C - 2 * n * Math.sin(lat * D2R))) / n, th = n * (lon - lon0) * D2R;
return [ r * Math.sin(th), -(r0 - r * Math.cos(th)) ];
};
}

const ALBW = albersFor(WORLD.region.proj);

function albers(lon, lat) {
const {n: n, C: C, r0: r0, l0: l0} = ALB, r = Math.sqrt(Math.max(0, C - 2 * n * Math.sin(lat * D2R))) / n, th = n * (lon * D2R - l0);
return [ r * Math.sin(th), -(r0 - r * Math.cos(th)) ];
}

const EE = {
A1: 1.340264,
A2: -.081106,
A3: 893e-6,
A4: .003796,
R3: Math.sqrt(3),
lon0: 65
};

function equalEarth(lon, lat) {
const {A1: A1, A2: A2, A3: A3, A4: A4, R3: R3, lon0: lon0} = EE;
let dl = lon - lon0;
for (;dl > 180; ) dl -= 360;
for (;dl < -180; ) dl += 360;
const lam = dl * D2R, phi = lat * D2R, th = Math.asin(Math.max(-1, Math.min(1, R3 / 2 * Math.sin(phi)))), t2 = th * th, t3 = t2 * th, t6 = t3 * t3, t7 = t6 * th, t8 = t7 * th, t9 = t8 * th, den = 3 * (9 * A4 * t8 + 7 * A3 * t6 + 3 * A2 * t2 + A1);
return [ 2 * R3 * lam * Math.cos(th) / den, -(A1 * th + A2 * t3 + A3 * t7 + A4 * t9) ];
}

function eachRing(geom, fn) {
("MultiPolygon" === geom.type ? geom.coordinates : [ geom.coordinates ]).forEach(poly => poly.forEach((ring, i) => fn(ring, 0 === i)));
}

function geomToPath(geom, proj) {
let d = "";
return eachRing(geom, ring => {
for (let i = 0; i < ring.length; i++) {
const [x, y] = proj(ring[i][0], ring[i][1]);
d += (i ? "L" : "M") + x.toFixed(4) + " " + y.toFixed(4);
}
d += "Z";
}), d;
}

function polyArea(ring) {
let a = 0;
for (let i = 0, n = ring.length; i < n; i++) {
const [x1, y1] = ring[i], [x2, y2] = ring[(i + 1) % n];
a += x1 * y2 - x2 * y1;
}
return a / 2;
}

function geomCentroid(geom, proj) {
let cx = 0, cy = 0, A = 0;
return eachRing(geom, (ring, outer) => {
if (!outer) return;
const pts = ring.map(c => proj(c[0], c[1]));
let a = 0, x = 0, y = 0;
for (let i = 0, n = pts.length; i < n; i++) {
const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % n], f = x1 * y2 - x2 * y1;
a += f, x += (x1 + x2) * f, y += (y1 + y2) * f;
}
a /= 2, Math.abs(a) < 1e-9 || Math.abs(a) > Math.abs(A) && (A = a, cx = x / (6 * a), 
cy = y / (6 * a));
}), [ cx, cy ];
}

function geomBBox(geom, proj) {
let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
return eachRing(geom, ring => ring.forEach(c => {
const [x, y] = proj(c[0], c[1]);
x < x0 && (x0 = x), x > x1 && (x1 = x), y < y0 && (y0 = y), y > y1 && (y1 = y);
})), [ x0, y0, x1, y1 ];
}

[ "1926", "1939" ].forEach(per => {
KZ[per].forEach(f => {
f.d = geomToPath(f.g, albers), f.c = geomCentroid(f.g, albers), f.b = geomBBox(f.g, albers);
});
});

const KZ_BBOX = (() => {
let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
return [ "1926", "1939" ].forEach(p => KZ[p].forEach(f => {
x0 = Math.min(x0, f.b[0]), y0 = Math.min(y0, f.b[1]), x1 = Math.max(x1, f.b[2]), 
y1 = Math.max(y1, f.b[3]);
})), [ x0, y0, x1, y1 ];
})();

KZ[1939].forEach((f, i) => {
const p = f.p;
p.loss = p.loss_percent, p.growth = (p.total_1939 - p.total_1926) / p.total_1926 * 100, 
p.kazLoss = (p.kazakh_1926 - p.kazakh_1939) / p.kazakh_1926 * 100, p.anomaly = p.growth - -p.kazLoss, 
p.share1926 = p.kazakh_1926 / p.total_1926 * 100, p.share1939 = p.kazakh_1939 / p.total_1939 * 100, 
p.interpKaz = MAUP.interpKaz[i], p.resid = MAUP.resid[i], p.shareShift = MAUP.shareShift[i], 
p.idx = i;
}), KZ[1926].forEach((f, i) => {
const p = f.p;
p.kazShare = p.kazakh_percent, p.pop = p.population_total, p.kazAbs = Math.round(p.population_total * p.kazakh_percent / 100), 
p.idx = i;
});


function quantileBreaks(vals, k) {
const s = vals.slice().sort((a, b) => a - b), br = [];
for (let i = 1; i < k; i++) br.push(s[Math.floor(i * s.length / k)]);
return br;
}

// Hatch pattern for "no data" in a map's <defs> (recreated on theme change: the line colour is per theme).
function ensureNoData(svg) {
if (!svg) return;
const old = svg.querySelector("#noData");
old && old.remove();
const N = pal().noData, p = el("pattern", {
id: "noData",
patternUnits: "userSpaceOnUse",
width: 6,
height: 6,
patternTransform: "rotate(45)"
});
p.appendChild(el("rect", {
width: 6,
height: 6,
fill: N.bg
})), p.appendChild(el("line", {
x1: 0,
y1: 0,
x2: 0,
y2: 6,
stroke: N.line,
"stroke-width": 2
}));
let defs = svg.querySelector("defs");
defs || (defs = el("defs"), svg.insertBefore(defs, svg.firstChild)), defs.appendChild(p);
}

// Marker colours as CSS variables, so CSS rules, legend dots and SVG marks read the same PALETTE values.
function applyPaletteVars() {
const r = document.documentElement.style;
r.setProperty("--mark-camp", PALETTE.marks.camp), r.setProperty("--mark-revolt", PALETTE.marks.revolt);
const w = pal().world;
r.setProperty("--flow-abroad", w.abroad), r.setProperty("--flow-soviet", w.soviet),
r.setProperty("--famine-kz", w.famineKz), r.setProperty("--famine-other", w.famineOther),
r.setProperty("--famine-non", w.famineNon), r.setProperty("--nodata-line", pal().noData.line),
r.setProperty("--ocean", w.sea), r.setProperty("--land", w.land), r.setProperty("--land-line", w.landLine),
r.setProperty("--grat", w.grat), r.setProperty("--kz-fill", w.kzFill), r.setProperty("--kz-line", w.kzLine);
}

// "no data" is a hatch pattern (defs from ensureNoData), never a scale or background colour
function rampColor(v, breaks, ramp) {
if (null == v || isNaN(v)) return "url(#noData)";
let i = 0;
for (;i < breaks.length && v >= breaks[i]; ) i++;
return ramp[Math.min(i, ramp.length - 1)];
}

function divergeColor(v, max) {
if (null == v || isNaN(v)) return "url(#noData)";
const t = Math.max(-1, Math.min(1, v / max)), D = diverge();
if (Math.abs(t) < .06) return D.mid;
const arr = t < 0 ? D.neg : D.pos, i = Math.min(arr.length - 1, Math.floor(Math.abs(t) * arr.length));
return t < 0 ? arr[arr.length - 1 - i] : arr[i];
}

const numLoc = () => "en" === LANG ? "en-US" : "ru-RU", fmtN = n => Math.round(n).toLocaleString(numLoc()), fmtD = (n, d = 1) => Number(n).toLocaleString(numLoc(), {
minimumFractionDigits: d,
maximumFractionDigits: d
}).replace(/^-/, "−"), fmtP = (n, d = 1) => (n > 0 ? "+" : "") + fmtD(n, d), METRICS_DEF = {
1939: [ {
id: "loss",
basis: "c2",
ramp: "orange",
get: p => p.loss,
fmt: v => fmtD(v) + " %",
ru: {
label: "Потеря казахского населения",
unit: "%",
hint: "Убыль казахского населения между переписями 1926 и 1939 гг. по каждой области."
},
en: {
label: "Kazakh population loss",
unit: "%",
hint: "The decline in Kazakh population between the 1926 and 1939 censuses, by oblast."
},
kz: {
label: "Қазақ халқының шығыны",
unit: "%",
hint: "1926 және 1939 жылдардағы санақтар арасында әр облыс бойынша қазақ халқының кемуі."
}
}, {
id: "growth",
basis: "c2",
diverge: 30,
get: p => p.growth,
fmt: v => fmtP(v) + " %",
ru: {
label: "Изменение общего населения",
unit: "%",
hint: "Красный цвет означает, что общее население области сократилось, синий означает рост. Рост при массовой гибели казахов и есть «аномалия» Пьянчолы."
},
en: {
label: "Change in total population",
unit: "%",
hint: 'Red: the oblast’s total population shrank; blue: it grew. Growth alongside mass Kazakh death is Pianciola’s "anomaly".'
},
kz: {
label: "Жалпы халық санының өзгерісі",
unit: "%",
hint: "Қызыл түс облыстың жалпы халқы азайғанын, көк түс өскенін білдіреді. Қазақтардың жаппай қырылуы кезіндегі өсім Пьянчоланың «аномалиясы» болып табылады."
}
}, {
id: "gap",
basis: "c2",
ramp: "violet",
get: p => p.growth + p.kazLoss,
fmt: v => fmtD(v, 0) + ("en" === LANG ? " pp" : "kz" === LANG ? " п.т." : " п.п."),
ru: {
label: "Разрыв: общее и казахское",
unit: "п.п.",
hint: "На сколько пунктов динамика общего населения «лучше» динамики казахского. Чем темнее, тем сильнее сводная цифра маскирует катастрофу."
},
en: {
label: "Gap: total vs. Kazakh",
unit: "pp",
hint: 'By how many points the total-population trend is "better" than the Kazakh-population trend. The darker the color, the more the aggregate figure masks the catastrophe.'
},
kz: {
label: "Алшақтық: жалпы және қазақ халқы",
unit: "п.т.",
hint: "Жалпы халық динамикасы қазақ халқы динамикасынан неше пунктке «жақсы». Түсі неғұрлым қою болса, жиынтық сан апатты соғұрлым жасырады."
}
}, {
id: "share1939",
basis: "c39",
ramp: "blue",
get: p => p.share1939,
fmt: v => fmtD(v) + " %",
ru: {
label: "Доля казахов в 1939 г.",
unit: "%",
hint: "Доля казахов в населении области по переписи 1939 года."
},
en: {
label: "Kazakh share in 1939",
unit: "%",
hint: "The share of Kazakhs in the oblast’s population per the 1939 census."
},
kz: {
label: "1939 ж. қазақтар үлесі",
unit: "%",
hint: "1939 жылғы санақ бойынша облыс халқындағы қазақтар үлесі."
}
}, {
id: "shareShift",
basis: "model",
diverge: 9,
get: p => p.shareShift,
fmt: v => fmtP(v, 2) + ("en" === LANG ? " pp" : "kz" === LANG ? " п.т." : " п.п."),
ru: {
label: "MAUP-сдвиг доли",
unit: "п.п.",
hint: "На сколько меняется доля области в общем распределении казахов 1926 г., если считать её по сетке округов, а не по сетке областей. Это и есть эффект MAUP."
},
en: {
label: "MAUP share shift",
unit: "pp",
hint: "How much the oblast’s share of the overall 1926 Kazakh distribution changes when computed on the okrug grid instead of the oblast grid. This is the MAUP effect."
},
kz: {
label: "MAUP үлес ығысуы",
unit: "п.т.",
hint: "Облыстың 1926 ж. қазақтардың жалпы бөлінісіндегі үлесі облыстар торы емес, округтер торы бойынша есептелгенде қаншаға өзгереді. Бұл MAUP әсері."
}
} ],
1926: [ {
id: "kazShare",
basis: "c26",
ramp: "blue",
get: p => p.kazShare,
fmt: v => fmtD(v) + " %",
ru: {
label: "Доля казахов",
unit: "%",
hint: "Доля казахов в населении округа по переписи 1926 года."
},
en: {
label: "Kazakh share",
unit: "%",
hint: "The share of Kazakhs in the okrug’s population per the 1926 census."
},
kz: {
label: "Қазақтар үлесі",
unit: "%",
hint: "1926 жылғы санақ бойынша округ халқындағы қазақтар үлесі."
}
}, {
id: "kazAbs",
basis: "c26",
ramp: "blue",
get: p => p.kazAbs,
fmt: v => fmtN(v),
ru: {
label: "Казахское население",
unit: "чел.",
hint: "Абсолютная численность казахов в округе по переписи 1926 года."
},
en: {
label: "Kazakh population",
unit: "people",
hint: "The absolute number of Kazakhs in the okrug per the 1926 census."
},
kz: {
label: "Қазақ халқы",
unit: "адам",
hint: "1926 жылғы санақ бойынша округтегі қазақтардың абсолюттік саны."
}
}, {
id: "pop",
basis: "c26",
ramp: "blue",
get: p => p.pop,
fmt: v => fmtN(v),
ru: {
label: "Всего населения",
unit: "чел.",
hint: "Общая численность населения округа по переписи 1926 года."
},
en: {
label: "Total population",
unit: "people",
hint: "The okrug’s total population per the 1926 census."
},
kz: {
label: "Жалпы халық саны",
unit: "адам",
hint: "1926 жылғы санақ бойынша округтің жалпы халық саны."
}
} ]
};

function metricDef(period, id) {
const list = METRICS_DEF[period], base = list.find(m => m.id === id) || list[0], L = base[LANG] || base.ru;
return {
...base,
label: L.label,
unit: L.unit,
hint: L.hint
};
}

// breaks: optional shared class breaks (compare mode uses one scale for 1926 and 1939)
function metricColor(period, m, p, breaks) {
const v = m.get(p);
return m.diverge ? divergeColor(v, m.diverge) : rampColor(v, breaks || quantileBreaks(KZ[period].map(f => m.get(f.p)), ramp(m.ramp).length), ramp(m.ramp));
}

const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s)), SVG_TAGS = new Set([ "svg", "g", "path", "circle", "ellipse", "text", "tspan", "line", "rect", "polygon", "polyline", "defs", "clipPath", "marker", "use", "linearGradient", "radialGradient", "stop", "pattern", "mask", "filter", "image", "foreignObject" ]), el = (t, a = {}, kids = []) => {
const n = document.createElementNS(SVG_TAGS.has(t) ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", t);
for (const k in a) null != a[k] && n.setAttribute(k, a[k]);
return kids.forEach(c => n.appendChild(c)), n;
}, esc = s => String(s).replace(/[&<>"]/g, c => ({
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}[c]));

let toastT, currentView = "kz";

function showView(v) {
currentView = v, $$(".tab").forEach(t => t.classList.toggle("on", t.dataset.v === v)), (() => {
const a = $(".tab.on"), nav = $("#tabs");
a && nav && nav.scrollWidth > nav.clientWidth && nav.scrollTo({
left: a.offsetLeft - nav.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2,
behavior: "smooth"
});
})(), 
$$("section.view").forEach(s => s.classList.toggle("on", s.id === "v-" + v)), window.scrollTo({
top: 0,
behavior: "smooth"
}), "world" === v && worldMap.ensure(), "schools" === v && schoolsMap.ensure(), 
"data" === v && (buildTable(), renderDataLog(), renderAprob()), "biblio" === v && renderBiblio();
}

function toast(msg) {
const t = $("#toast");
t.textContent = msg, t.classList.add("on"), clearTimeout(toastT), toastT = setTimeout(() => t.classList.remove("on"), 2600);
}

const ICON_SUN = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>', ICON_MOON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.5 14.6A8.5 8.5 0 1 1 9.4 3.5a6.8 6.8 0 0 0 11.1 11.1z"/></svg>';

// The button shows what a click does: a sun in dark mode, a moon in light mode.
function syncThemeBtn() {
const b = $("#bTheme");
if (!b) return;
const light = "light" === document.documentElement.getAttribute("data-theme"), label = t(light ? "themeToDark" : "themeToLight");
b.innerHTML = light ? ICON_MOON : ICON_SUN, b.setAttribute("title", label), b.setAttribute("aria-label", label);
}

$("#tabs").addEventListener("click", e => {
const t = e.target.closest(".tab");
t && showView(t.dataset.v);
}), $("#bTheme").addEventListener("click", () => {
const light = "light" === document.documentElement.getAttribute("data-theme");
document.documentElement.setAttribute("data-theme", light ? "dark" : "light"), syncThemeBtn(), toast(t(light ? "toastThemeDark" : "toastThemeLight"));
try {
localStorage.setItem("agln_theme", light ? "dark" : "light");
} catch (e) {}

"function" == typeof refreshCharts && refreshCharts(), applyTheme();
});

// Scales are per theme: re-colour the maps (and the hatch pattern) after a theme change.
function applyTheme() {
applyPaletteVars(), renderKz(), S.split && renderSplit(), "undefined" != typeof zS && zS && renderSchoolMap(),
worldMap.ready && (drawWorldBase(), renderWorld(!0));
}

const tipEl = $("#tip");

function tipShow(html) {
tipEl.innerHTML = html, tipEl.classList.add("on");
}

function tipMove(e) {
const w = tipEl.offsetWidth, h = tipEl.offsetHeight;
let x = e.clientX + 16, y = e.clientY + 16;
x + w > innerWidth - 8 && (x = e.clientX - w - 16), y + h > innerHeight - 8 && (y = e.clientY - h - 16), 
tipEl.style.left = Math.max(6, x) + "px", tipEl.style.top = Math.max(6, y) + "px";
}

function tipHide() {
tipEl.classList.remove("on");
}

function modalOpen(id) {
$("#" + id).classList.add("on");
}

function modalClose(id) {
$("#" + id).classList.remove("on");
}

function drawerOpen(html) {
// the header is taller than 60px when it wraps to two rows (phones): start the drawer right below it
const h = $(".hdr");
h && ($("#drawer").style.top = Math.max(0, Math.round(h.getBoundingClientRect().bottom)) + "px"),
$("#drawerBody").innerHTML = html, $("#drawer").classList.add("on"), $("#ov").classList.add("on"), $("#drawer").scrollTop = 0;
}

function drawerClose() {
$("#drawer").classList.remove("on"), $("#ov").classList.remove("on");
}

const NARROW = matchMedia("(max-width:700px)");

function makeZoom(svgSel, gSel, fitBox, vbW, vbH, pad = 26) {
const svg = $(svgSel), g = $(gSel), base = {}, box = [], st = {
k: 1,
x: 0,
y: 0
}, K_MIN = 1, K_MAX = 8, DRAG_PX = 4;
// fit a map bbox into the viewBox (also when the world map switches between its two projections)
function fit([x0, y0, x1, y1]) {
const s = Math.min((vbW - 2 * pad) / (x1 - x0), (vbH - 2 * pad) / (y1 - y0));
base.s = s, base.tx = (vbW - (x1 - x0) * s) / 2 - x0 * s, base.ty = (vbH - (y1 - y0) * s) / 2 - y0 * s,
box.splice(0, 4, base.tx + x0 * s, base.ty + y0 * s, base.tx + x1 * s, base.ty + y1 * s);
}
fit(fitBox);
let onChange = null, live = !1, raf = 0, settle = null;
const stage = svg.closest(".stage") || svg.parentNode;
// A gesture step (wheel, drag, pinch) only moves the group; the change handler then runs at most once per frame
// in "live" mode (label and marker size only, no layout reads), and the full refit (label collisions, hit areas)
// runs once, 150 ms after the last step. While the gesture lasts (CSS .gesturing) the map does not take pointer
// events (no hit-testing, no hover, no tooltips), and transitions, hover filters and blur over it are off.
function gesture() {
live || (live = !0, "function" == typeof tipHide && tipHide(), stage.classList.add("gesturing"), document.documentElement.classList.add("map-gesture")),
clearTimeout(settle), settle = setTimeout(() => {
live = !1, cancelAnimationFrame(raf), raf = 0, stage.classList.remove("gesturing"), document.documentElement.classList.remove("map-gesture"),
onChange && onChange(st.k, base.s);
}, 150);
}
// Keep at least half of the map (or half of the view, when zoomed in) inside the viewBox.
function clampPan() {
const fit = (lo, hi, view, k, off) => {
const w = (hi - lo) * k, m = .5 * Math.min(w, view);
return Math.max(-w + m - lo * k, Math.min(view - m - lo * k, off));
};
st.x = fit(box[0], box[2], vbW, st.k, st.x), st.y = fit(box[1], box[3], vbH, st.k, st.y);
}
function apply(anim) {
clampPan(), g.style.transition = anim ? `transform ${!0 === anim ? ".55s" : anim} cubic-bezier(.4,0,.2,1)` : "none",
g.setAttribute("transform", `translate(${st.x} ${st.y}) scale(${st.k}) translate(${base.tx} ${base.ty}) scale(${base.s})`),
live ? raf || (raf = requestAnimationFrame(() => {
raf = 0, onChange && onChange(st.k, base.s, !0);
})) : onChange && onChange(st.k, base.s);
}
// Client (screen) point -> viewBox coordinates, respecting preserveAspectRatio letterboxing.
// During a gesture the page does not scroll and the SVG box does not move, so the inverse matrix is read once
// (reading it after each transform change would force a layout on every step).
let inv = null;
function toVb(cx, cy) {
if (!live || !inv) {
const m = svg.getScreenCTM();
if (!m) return [ vbW / 2, vbH / 2 ];
inv = m.inverse();
}
const p = new DOMPoint(cx, cy).matrixTransform(inv);
return [ p.x, p.y ];
}
// Scale to k around viewBox point (px, py): the map point under it stays put.
function zoomAt(k, px, py, anim) {
k = Math.max(K_MIN, Math.min(K_MAX, k));
const r = k / st.k;
st.x = px - (px - st.x) * r, st.y = py - (py - st.y) * r, st.k = k, apply(anim);
}
apply();
// Narrow screens: the SVG box takes exactly the aspect ratio of the map's own bbox plus padding, so at the
// initial view the map fills the width with no empty bands ("slice" only trims the empty viewBox margins).
let AR = (box[2] - box[0] + 2 * pad) / (box[3] - box[1] + 2 * pad);
function fitSvgBox() {
NARROW.matches ? (svg.style.height = "auto", svg.style.aspectRatio = String(AR), svg.setAttribute("preserveAspectRatio", "xMidYMid slice")) : (svg.style.height = svg.style.aspectRatio = "",
svg.removeAttribute("preserveAspectRatio"));
}
fitSvgBox(), NARROW.addEventListener("change", fitSvgBox), window.addEventListener("resize", fitSvgBox);
const api = {
base: base,
state: st,
apply: apply,
aspect: AR,
onReset: null,
setOnChange(f) {
onChange = f, f(st.k, base.s);
},
refit(b) {
fit(b), AR = api.aspect = (box[2] - box[0] + 2 * pad) / (box[3] - box[1] + 2 * pad), fitSvgBox(), st.k = 1, st.x = 0, st.y = 0, apply();
},
proj: (x, y) => [ base.tx + x * base.s, base.ty + y * base.s ],
reset(anim = !0) {
st.k = 1, st.x = 0, st.y = 0, apply(anim);
},
zoom(f) {
zoomAt(st.k * f, vbW / 2, vbH / 2, ".25s");
},
focus(box, anim = !0, margin = 1.5) {
if (!box) return api.reset(anim);
const [a, b, c, d] = box, [px0, py0] = api.proj(a, b), [px1, py1] = api.proj(c, d), w = Math.max(px1 - px0, 1), h = Math.max(py1 - py0, 1), k = Math.max(K_MIN, Math.min(6, Math.min(vbW / (w * margin), vbH / (h * margin))));
st.k = k, st.x = vbW / 2 - k * (px0 + px1) / 2, st.y = vbH / 2 - k * (py0 + py1) / 2,
apply(anim);
}
};
// Wheel zooms only with Ctrl/⌘ (also trackpad pinch) or after a click on the map; otherwise the page scrolls.
let armed = !1, hintTimer = null;
const hint = document.createElement("div");
hint.className = "maphint", hint.setAttribute("aria-hidden", "true"), svg.parentNode.appendChild(hint);
const showHint = (key = "mapWheelHint") => {
hint.textContent = t(key), hint.classList.add("on"), clearTimeout(hintTimer),
hintTimer = setTimeout(() => hint.classList.remove("on"), 1200);
};
// Listened on the map's wrapper, not the SVG: in compare mode the divider and the side labels lie over the map,
// and a pinch (Ctrl+wheel) starting on them used to zoom the whole page instead of the map.
const wrap = svg.parentNode;
wrap.addEventListener("wheel", e => {
if (!(e.ctrlKey || e.metaKey || armed)) return void showHint("mapWheelHint");
e.preventDefault();
const dy = e.deltaY * (1 === e.deltaMode ? 16 : 2 === e.deltaMode ? vbH : 1), [px, py] = toVb(e.clientX, e.clientY);
gesture(), zoomAt(st.k * Math.max(.5, Math.min(2, Math.exp(-dy * .002))), px, py);
}, {
passive: !1
}), [ "gesturestart", "gesturechange" ].forEach(ty => wrap.addEventListener(ty, e => e.preventDefault())), // Safari trackpad pinch
svg.addEventListener("pointerleave", e => {
"mouse" === e.pointerType && (armed = !1);
}), document.addEventListener("pointerdown", e => {
svg.contains(e.target) || (armed = !1);
});
// Mouse/pen: drag after a 4 px threshold. Touch: one finger scrolls the page (touch-action: pan-x pan-y),
// two fingers pan and pinch-zoom the map, like web maps do.
let drag = null, pinch = null, moved = !1, swipe = null;
svg.addEventListener("pointerdown", e => {
armed = !0, "touch" === e.pointerType || "mouse" === e.pointerType && 0 !== e.button || (moved = !1,
drag = {
id: e.pointerId,
cx: e.clientX,
cy: e.clientY,
p: toVb(e.clientX, e.clientY),
sx: st.x,
sy: st.y,
on: !1
});
}), svg.addEventListener("pointermove", e => {
if (!drag || drag.id !== e.pointerId) return;
if (!drag.on) {
if (Math.hypot(e.clientX - drag.cx, e.clientY - drag.cy) < DRAG_PX) return;
drag.on = !0, moved = !0, svg.setPointerCapture(e.pointerId), svg.style.cursor = "grabbing";
}
const [px, py] = toVb(e.clientX, e.clientY);
st.x = drag.sx + px - drag.p[0], st.y = drag.sy + py - drag.p[1], gesture(), apply();
});
const up = e => {
drag && drag.id === e.pointerId && (drag = null), svg.style.cursor = "";
};
svg.addEventListener("pointerup", up), svg.addEventListener("pointercancel", up);
const mid = tl => toVb((tl[0].clientX + tl[1].clientX) / 2, (tl[0].clientY + tl[1].clientY) / 2), dist = tl => Math.hypot(tl[0].clientX - tl[1].clientX, tl[0].clientY - tl[1].clientY) || 1;
svg.addEventListener("touchstart", e => {
if (e.touches.length >= 2) {
e.preventDefault();
const [mx, my] = mid(e.touches);
pinch = {
d: dist(e.touches),
k: st.k,
cx: (mx - st.x) / st.k,
cy: (my - st.y) / st.k
}, moved = !0, swipe = null;
} else pinch || (moved = !1, swipe = {
x: e.touches[0].clientX,
y: e.touches[0].clientY,
shown: !1
});
}, {
passive: !1
}), svg.addEventListener("touchmove", e => {
if (pinch && e.touches.length >= 2) {
e.preventDefault();
const [mx, my] = mid(e.touches), k = Math.max(K_MIN, Math.min(K_MAX, pinch.k * dist(e.touches) / pinch.d));
return st.k = k, st.x = mx - pinch.cx * k, st.y = my - pinch.cy * k, gesture(), void apply();
}
swipe && !swipe.shown && 1 === e.touches.length && Math.hypot(e.touches[0].clientX - swipe.x, e.touches[0].clientY - swipe.y) > 12 && (swipe.shown = !0,
showHint("mapTouchHint"));
}, {
passive: !1
});
const touchEnd = e => {
e.touches.length < 2 && (pinch = null), e.touches.length || (swipe = null);
};
svg.addEventListener("touchend", touchEnd), svg.addEventListener("touchcancel", touchEnd),
svg.addEventListener("click", e => {
moved && (e.stopPropagation(), e.preventDefault(), moved = !1);
}, !0), svg.addEventListener("dblclick", e => {
e.preventDefault();
const [px, py] = toVb(e.clientX, e.clientY);
zoomAt(2 * st.k, px, py, ".25s");
});
// Keyboard when the map has focus: + / − / 0.
svg.hasAttribute("tabindex") || svg.setAttribute("tabindex", "0"), svg.addEventListener("keydown", e => {
let k = e.key;
"+" === k || "=" === k ? api.zoom(1.25) : "-" === k || "_" === k || "−" === k ? api.zoom(1 / 1.25) : "0" === k ? (api.reset(),
api.onReset && api.onReset()) : k = null, k && e.preventDefault();
});
return api;
}

document.addEventListener("click", e => {
const c = e.target.closest("[data-close]");
c && modalClose(c.dataset.close), e.target.classList.contains("modal") && e.target.classList.remove("on");
}), document.addEventListener("keydown", e => {
"Escape" === e.key && ($$(".modal.on").forEach(m => m.classList.remove("on")), drawerClose());
}), $("#ov").addEventListener("click", drawerClose);

let _downloadsCapPromise = null;

function getDownloadsCap() {
return void 0 === window.claude || "function" != typeof window.claude.use ? Promise.resolve(null) : (_downloadsCapPromise || (_downloadsCapPromise = window.claude.use("downloads").catch(() => null)), 
_downloadsCapPromise);
}

async function download(name, content, mime) {
const inHostFrame = void 0 !== window.claude && "function" == typeof window.claude.use, cap = inHostFrame ? await getDownloadsCap() : null;
if (cap) try {
await cap.save({
filename: name,
data: content
}), toast(tf("toastDownloaded", {
n: name
}));
} catch (err) {
const code = err && err.code;
let alt = null;
if ("rejected_extension" !== code && "extension_not_enabled" !== code || (alt = name.replace(/\.geojson$/i, ".json").replace(/\.csv$/i, ".txt")), 
alt && alt !== name) try {
return await cap.save({
filename: alt,
data: content
}), void toast(tf("toastDownloaded", {
n: alt
}));
} catch (err2) {}
"declined" !== code && toast(t("toastDownloadFailed"));
} else inHostFrame ? toast(t("toastExportUnavailableHere")) : "function" != typeof _legacyBlobDownload ? toast(t("toastDownloadFailed")) : _legacyBlobDownload(name, content, mime);
}

function _legacyBlobDownload(name, content, mime) {
const b = new Blob([ content ], {
type: mime
}), u = URL.createObjectURL(b), a = document.createElement("a");
a.href = u, a.download = name, document.body.appendChild(a), a.click(), a.remove(), 
setTimeout(() => URL.revokeObjectURL(u), 1200), toast(tf("toastDownloaded", {
n: name
}));
}

const VB = {
w: 1e3,
h: 560
}, S = {
period: "1926",
metric: "kazShare",
layers: {
camps: !1,
revolts: !1,
labels: !0
},
split: !1,
story: -1,
school: null,
selected: null
}, zKz = makeZoom("#svgKz", "#gKz", KZ_BBOX, VB.w, VB.h);

// Labels live inside the zoom group, so their size is set in inner units: px / (zoom scale × base scale × screen px per viewBox unit).
// Greedy collision pass in screen space: labels with higher data-pri win, the rest get .lbl-hide
// (world map: foreign destinations before within-USSR ones, then by flow size; famines in list order).
function fitLabels(z, svgSel, nodes, px, collide = !0, halo = .3) {
const svg = $(svgSel), m = svg && svg.getScreenCTM();
if (!m || !m.a) return;
const ppu = z.ppu = m.a, scale = z.base.s * z.state.k * ppu, fs = px / scale, sw = halo * px / scale, kept = [];
nodes.forEach(n => {
n.style.fontSize = fs + "px", n.style.strokeWidth = sw + "px";
}), collide && nodes.map((n, i) => ({
n: n,
pri: +(n.dataset.pri || 0) - 1e-6 * i
})).sort((a, b) => b.pri - a.pri).forEach(({n: n}) => {
if (n.classList.remove("lbl-hide"), "none" === n.style.display || n.closest(".off")) return;
const bb = n.getBBox();
n._hw = bb.width / 2;
const sx = v => (z.state.x + z.state.k * (z.base.tx + z.base.s * v)) * ppu, sy = v => (z.state.y + z.state.k * (z.base.ty + z.base.s * v)) * ppu, r = {
x0: sx(bb.x),
x1: sx(bb.x + bb.width),
y0: sy(bb.y),
y1: sy(bb.y + bb.height)
};
kept.some(q => r.x0 < q.x1 + 3 && q.x0 < r.x1 + 3 && r.y0 < q.y1 + 1 && q.y0 < r.y1 + 1) ? n.classList.add("lbl-hide") : kept.push(r);
});
}

// During a gesture (live): label size only, from the screen scale cached by the last fitLabels. No layout reads.
// Keeping the labels' on-screen size constant is also what keeps layout cheap: measured with CPU ×4, hiding the
// labels instead (no resize) made layout ~7× more expensive (1.9 s vs 0.24 s per 60-step wheel gesture).
function sizeLabels(z, nodes, px, halo = .3) {
if (!z.ppu) return;
const scale = z.base.s * z.state.k * z.ppu, fs = px / scale + "px", sw = halo * px / scale + "px";
nodes.forEach(n => {
n.style.fontSize = fs, n.style.strokeWidth = sw;
});
}

function syncKzScale(live) {
// pan without zoom: labels and markers keep their size, only the split clip follows
if (live && zKz.liveK === zKz.state.k) return void (S.split && $("#clipRect") && setSplit(splitPos));
zKz.liveK = live ? zKz.state.k : null;
const u = zKz.base.s * zKz.state.k;
live ? sizeLabels(zKz, $$("#lLabels text,#lSplit text"), 11.5) : (fitLabels(zKz, "#svgKz", $$("#lLabels text"), 11.5),
fitLabels(zKz, "#svgKz", $$("#lSplit text"), 11.5));
const ms = 1 / u;
$$("#lCamps g,#lRevolts g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${ms})`);
}), live || fitHits("#svgKz", "#lCamps .mhit,#lRevolts .mhit"), S.split && $("#clipRect") && setSplit(splitPos);
}

function periodName(p) {
return t("1926" === p ? "gridUnitOkrug" : "gridUnitOblast");
}

zKz.setOnChange((k, b, live) => syncKzScale(live));

// Refit labels whenever a map changes size: window resize, or a hidden tab becoming visible.
"function" == typeof ResizeObserver && [ [ "#svgKz", () => syncKzScale() ], [ "#svgW", () => worldMap.ready && syncWScale() ], [ "#svgS", () => schoolsMap.ready && syncSScale() ] ].forEach(([sel, f]) => {
const n = $(sel);
n && new ResizeObserver(() => n.getBoundingClientRect().width > 0 && f()).observe(n);
});

const SHORT_KZ = {
west_kz: "Западно-Каз.",
north_kz: "Северо-Каз.",
east_kz: "Восточно-Каз.",
south_kz: "Южно-Каз.",
semipalatinsk: "Семипалатинская",
kzyl_orda: "Кзыл-Ординская",
petropavlovsk_1926: "Петропавловский",
semipalatinsk_1926: "Семипалатинский"
}, SHORT_KZ_EN = {
west_kz: "West Kz.",
north_kz: "North Kz.",
east_kz: "East Kz.",
south_kz: "South Kz.",
semipalatinsk: "Semipalatinsk",
kzyl_orda: "Kzyl-Orda",
petropavlovsk_1926: "Petropavlovsk",
semipalatinsk_1926: "Semipalatinsk"
}, SHORT_KZ_KZ = {
west_kz: "Батыс Қаз.",
north_kz: "Солт. Қаз.",
east_kz: "Шығ. Қаз.",
south_kz: "Оңт. Қаз.",
semipalatinsk: "Семей",
kzyl_orda: "Қызылорда",
petropavlovsk_1926: "Петропавл",
semipalatinsk_1926: "Семей"
};

function shortName(f) {
return "kz" === LANG ? SHORT_KZ_KZ[f.p.id] || pName(f.p).replace(/\s*(округі|облысы)$/i, "") : "en" === LANG ? SHORT_KZ_EN[f.p.id] || pName(f.p).replace(/\s*(Okrug|Oblast)$/i, "") : SHORT_KZ[f.p.id] || f.p.name.replace(/\s*(округ|область)$/i, "");
}

function renderKz() {
ensureNoData($("#svgKz"));
const per = S.period, m = metricDef(per, S.metric), base = $("#lBase"), lbl = $("#lLabels");
const br = S.split ? splitBreaks() : null;
base.innerHTML = "", lbl.innerHTML = "", KZ[per].forEach(f => {
const p = el("path", {
d: f.d,
class: "region",
fill: metricColor(per, m, f.p, br),
"data-id": f.p.id,
"data-nodrag": "1"
});
p.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span><span class="prelim">${esc(t("prelimNote"))}</span>\n        <div class="s">${esc(m.label)}<br>${esc(t("chartHint"))}</div>`), 
tipMove(e);
}), p.addEventListener("mousemove", tipMove), p.addEventListener("mouseleave", tipHide), 
p.addEventListener("click", () => {
tipHide(), openRegion(per, f);
}), base.appendChild(p);
}), KZ[per].forEach(f => {
const t2 = el("text", {
x: f.c[0].toFixed(2),
y: f.c[1].toFixed(2),
class: "lbl",
"data-pri": ((f.b[2] - f.b[0]) * (f.b[3] - f.b[1])).toFixed(1)
});
t2.textContent = shortName(f), lbl.appendChild(t2);
}), lbl.classList.toggle("off", !S.layers.labels), S.split ? renderSplitLegend() : renderLegend(per, m), renderStats(per, m), 
$("#metricHint").textContent = m.hint, syncKzScale();
}

function renderLegend(per, m) {
const L = $("#legend");
L.innerHTML = "";
const add = h => L.insertAdjacentHTML("beforeend", h);
if (m.diverge) add(`<b>−${m.diverge}</b>`), diverge().neg.forEach(c => add(`<i style="background:${c}"></i>`)), 
add(`<i style="background:${diverge().mid}"></i>`), diverge().pos.forEach(c => add(`<i style="background:${c}"></i>`)), 
add(`<b>+${m.diverge} ${m.unit}</b>`); else {
const vals = KZ[per].map(f => m.get(f.p));
add(`<b>${m.fmt(Math.min(...vals))}</b>`), 
ramp(m.ramp).forEach(c => add(`<i style="background:${c}"></i>`)), add(`<b>${m.fmt(Math.max(...vals))}</b>`);
}
KZ[per].some(f => {
const v = m.get(f.p);
return null == v || isNaN(v);
}) && add(`<i class="nodata-sw"></i><b>${esc(t("noDataLegend"))}</b>`), add(`<b style="margin-left:12px;color:var(--ink-soft)">${esc(m.label)}, ${esc(m.unit)}</b>`), add(`<b class="legend-prelim">(${esc(t("prelimNote"))})</b>`);
const ti = $("#kzTitle"), sr = $("#kzSrc");
ti && (ti.innerHTML = `<b>${esc(m.label)}</b> · ${esc(t("mapBasis_" + m.basis))} · ${esc(t("mapUnits" + per))}`), sr && (sr.textContent = t("model" === m.basis ? "mapSrcModel" : "mapSrcData") + " " + t("mapProjKz"));
}

// Evidence level of a figure, as in the paper: census fact / model value / historiographic estimate.
// When every badge in a group of plaques has the same level, it is shown once, as a caption over the group.
function groupLvl(box) {
const b = [ ...box.querySelectorAll(":scope > .stat .lvl") ];
if (b.length < 2 || new Set(b.map(x => x.className)).size > 1) return;
const cap = document.createElement("p");
cap.className = "stats-lvl", cap.appendChild(b[0].cloneNode(!0)), b.forEach(x => x.remove()), box.prepend(cap);
}
const lvl = kind => `<span class="lvl lvl-${kind}" tabindex="0" title="${esc(t("lvlTip_" + kind))}">${esc(t("lvl_" + kind))}</span>`, info = key => `<button class="info-i" type="button" data-info="${key}" aria-label="${esc(t("infoLabel"))}" title="${esc(t("infoLabel"))}">i</button>`;

function renderStats(per, m) {
const box = $("#statsKz");
renderStatsHtml(box, per), groupLvl(box);
}

function renderStatsHtml(box, per) {
if ("1926" === per) {
// Republic-level 1926 census totals; okrug sums of the working dataset stay in the table and okrug cards.
box.innerHTML = `\n      <div class="stat"><u>${esc(t("okrugsCount"))}</u><b>8</b><s>${esc(t("byOkrugsGrid"))}</s></div>\n      <div class="stat"><u>${esc(t("popRep1926"))}${lvl("census")}${info("info_popRep1926")}</u><b>≈${fmtD(6.2, 1)} ${"en" === LANG ? "million" : "млн"}</b><s>${esc(t("popRep1926Sub"))}</s></div>\n      <div class="stat"><u>${esc(t("kazRep1926"))}${lvl("census")}${info("info_kazRep1926")}</u><b>≈${fmtD(3.63, 2)} ${"en" === LANG ? "million" : "млн"}</b><s>${esc(t("kazRep1926Sub"))}</s></div>\n      <div class="stat"><u>${esc(t("livestockCount"))}${lvl("hist")}${info("info_livestock")}</u><b>≈ 40 ${"kz" === LANG ? "млн" : "en" === LANG ? "million" : "млн"}</b><s>${esc(t("toThousandKm"))}</s></div>`;
} else {
// Republic-level census totals only: the oblast figures of the working dataset are not verified yet.
box.innerHTML = `\n      <div class="stat"><u>${esc(t("oblastsCount"))}</u><b>12</b><s>${esc(t("byOblastsGrid"))}</s></div>\n      <div class="stat"><u>${esc(t("kazakhLossRep"))}${lvl("census")}${info("info_kazLossRep")}</u><b style="color:var(--carmine2)">≈ −${fmtD(36, 0)} %</b><s>${esc(t("kazakhLossRepSub"))}</s></div>\n      <div class="stat"><u>${esc(t("kazakhShareRepublic"))}${lvl("census")}${info("info_shareRep")}</u><b>≈${fmtD(58.5)} % → ≈38 %</b><s>1926 → 1939</s></div>\n      <div class="stat"><u>${esc(t("oblastDataLabel"))}</u><b style="font-size:15px">${esc(t("oblastDataVal"))}</b><s>${esc(t("oblastDataSub"))}</s></div>`;
}
}

// ---------- cards for camps, construction sites and uprisings (both maps) ----------
// Uprisings: the site cites T. Omarbekov for this layer (bibliography no. 8). Camps and sites: no source yet.
const MARK_HIT_R = 11;
// On touch screens the invisible hit circle is 22 screen px (a 44 px target). Called from the zoom handlers,
// which already run at start-up before this point, so no module-level constants are used inside.
function fitHits(svgSel, sel) {
const m = matchMedia("(pointer: coarse)").matches && $(svgSel).getScreenCTM();
m && m.a && $$(sel).forEach(c => c.setAttribute("r", Math.max(11, 22 / m.a)));
}
function markCardHTML(kind, item) {
const L = tr(item), isRevolt = "revolt" === kind, type = t(isRevolt ? "markTypeRevolt" : "site" === item.kind ? "markTypeSite" : "markTypeCamp"), title = isRevolt ? `${L.n} ${t("tipUprising")}` : L.n, desc = isRevolt ? t("tipUprisingYear").replace(/^[^.]*\.\s*/, "") : L.t || t("markNoDesc"), bib = isRevolt ? BIBLIOGRAPHY.find(b => "8" === b.src) : null;
return `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
    <div><p class="sec-t" style="margin:0 0 4px">${esc(type)}</p><h3 style="font-size:18px">${esc(title)}</h3></div>
    <button class="btn ico ghost" onclick="drawerClose()" aria-label="${esc(t("introClose"))}">✕</button></div>
    ${isRevolt ? `<div class="kv" style="margin-top:12px"><span>${esc(t("markYear"))}</span><b>${item.y}</b></div>` : ""}
    <p class="prose" style="margin-top:12px">${esc(desc)}</p>
    <p class="hint" style="margin-top:12px"><b>${esc(t("markSource"))}:</b> ${bib ? `<a href="#" data-bib="${bib.src}">${esc(bib.authors.map(a => ("en" === LANG ? a.map(translit) : a).join(" ")).join(", "))} (${bib.year})</a>` : esc(t("markSrcPending"))}</p>`;
}
function openMarkCard(kind, item) {
tipHide(), drawerOpen(markCardHTML(kind, item));
const x = $("#drawer .btn.ico");
x && x.focus();
}
// Makes a marker group clickable, tappable and keyboard-accessible.
function wireMark(g, kind, item, label) {
g.setAttribute("tabindex", "0"), g.setAttribute("role", "button"), g.setAttribute("aria-label", `${label} · ${t("markOpenHint")}`), 
g.addEventListener("click", e => {
e.stopPropagation(), openMarkCard(kind, item);
}), g.addEventListener("keydown", e => {
"Enter" !== e.key && " " !== e.key || (e.preventDefault(), openMarkCard(kind, item));
});
}
// Link from a card to the bibliography entry.
document.addEventListener("click", e => {
const a = e.target.closest("[data-bib]");
if (!a) return;
e.preventDefault(), drawerClose(), showView("biblio");
const n = $(`#bib-${a.dataset.bib}`);
n && (n.scrollIntoView({
block: "center"
}), n.classList.add("bib-flash"), setTimeout(() => n.classList.remove("bib-flash"), 1800));
});

function renderMarks() {
const cg = $("#lCamps"), rg = $("#lRevolts");
cg.innerHTML = "", rg.innerHTML = "", CAMPS.forEach(c => {
const L = tr(c), [x, y] = albers(c.lon, c.lat), g = el("g", {
"data-at": `${x},${y}`,
"data-nodrag": "1",
class: "node"
});
g.appendChild(el("path", {
class: "camp",
d: "M-4.5,-4.5 L4.5,4.5 M4.5,-4.5 L-4.5,4.5"
})), g.appendChild(el("circle", {
class: "camp",
r: 6.5,
cx: 0,
cy: 0
}));
const hit = el("circle", {
r: MARK_HIT_R,
class: "mhit",
cx: 0,
cy: 0,
fill: "transparent"
});
g.appendChild(hit), g.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(L.n)}</b><div class="s">${esc(L.t)}</div>`), tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
wireMark(g, "camp", c, L.n), cg.appendChild(g);
}), REVOLTS.forEach(r => {
const L = tr(r), [x, y] = albers(r.lon, r.lat), g = el("g", {
"data-at": `${x},${y}`,
"data-nodrag": "1",
class: "node"
});
g.appendChild(el("path", {
class: "revolt",
d: star(6.5, 2.9, 5)
})), g.appendChild(el("circle", {
r: MARK_HIT_R,
class: "mhit",
cx: 0,
cy: 0,
fill: "transparent"
})), g.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(L.n)} ${esc(t("tipUprising"))}</b><div class="s">${r.y} ${esc(t("tipUprisingYear"))}</div>`),
tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
wireMark(g, "revolt", r, `${L.n} ${t("tipUprising")}`), rg.appendChild(g);
}), "undefined" != typeof zKz && syncKzScale();
}

function star(R, r, n) {
let d = "";
for (let i = 0; i < 2 * n; i++) {
const a = Math.PI / n * i - Math.PI / 2, rad = i % 2 ? r : R;
d += (i ? "L" : "M") + (Math.cos(a) * rad).toFixed(2) + " " + (Math.sin(a) * rad).toFixed(2);
}
return d + "Z";
}

let splitPos = .5;

function renderSplit() {
const sp = $("#lSplit");
if (sp.innerHTML = "", !S.split) return void $$("#lLabels text").forEach(t => t.style.opacity = 1);
let cp = $("#clipSplit");
if (!cp) {
const defs = el("defs");
cp = el("clipPath", {
id: "clipSplit",
clipPathUnits: "userSpaceOnUse"
});
const H = KZ_BBOX[3] - KZ_BBOX[1];
cp.appendChild(el("rect", {
id: "clipRect",
x: KZ_BBOX[0],
y: KZ_BBOX[1] - H,
width: 0,
height: 3 * H
})), defs.appendChild(cp), $("#svgKz").appendChild(defs);
}
const m = metricDef("1939", "share1939"), br = splitBreaks(), g = el("g", {
"clip-path": "url(#clipSplit)"
});
KZ[1939].forEach(f => {
const p = el("path", {
d: f.d,
class: "region",
fill: metricColor("1939", m, f.p, br),
"data-nodrag": "1"
});
p.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span><span class="prelim">${esc(t("prelimNote"))}</span>\n        <div class="s">${esc(m.label)} · ${"kz" === LANG ? "1939 ж. торы" : "en" === LANG ? "1939 grid" : "сетка 1939 г."}</div>`),
tipMove(e);
}), p.addEventListener("mousemove", tipMove), p.addEventListener("mouseleave", tipHide), 
p.addEventListener("click", () => {
tipHide(), openRegion("1939", f);
}), g.appendChild(p);
}), KZ[1939].forEach(f => {
const t2 = el("text", {
x: f.c[0].toFixed(2),
y: f.c[1].toFixed(2),
class: "lbl split-lbl"
});
t2.textContent = shortName(f), g.appendChild(t2);
}), sp.appendChild(g), syncKzScale(), setSplit(splitPos), renderSplitLegend();
}

// one legend for both halves: the same indicator, the same classes
function renderSplitLegend() {
const vals = splitValues(), m26 = metricDef("1926", "kazShare");
$("#legend").innerHTML = `<b>${m26.fmt(Math.min(...vals))}</b>${ramp("blue").map(c => `<i style="background:${c}"></i>`).join("")}<b>${m26.fmt(Math.max(...vals))}</b>
    <b style="margin-left:12px;color:var(--ink-soft)">${esc(t("splitLegend"))}</b><b class="legend-prelim">(${esc(t("prelimNote"))})</b>`;
const ti = $("#kzTitle");
ti && (ti.innerHTML = `<b>${esc(t("splitTitle"))}</b>`);
}

// Compare mode: Kazakh share in 1926 (okrugs, left) and 1939 (oblasts, right) on one scale, so the halves compare.
function splitValues() {
return [ ...KZ[1926].map(f => f.p.kazShare), ...KZ[1939].map(f => f.p.share1939) ].filter(v => null != v && !isNaN(v));
}

function splitBreaks() {
return quantileBreaks(splitValues(), ramp("blue").length);
}

function setSplitMode(on) {
S.split = on, $("#bSplit").classList.toggle("gold", on), $("#divider").classList.toggle("on", on), $("#splitBar").classList.toggle("on", on),
on && (S.period = "1926", S.metric = "kazShare", syncPeriodUI(), toast(t("toastSplitHint"))), renderKz(), renderSplit();
}

function setSplit(frac) {
splitPos = Math.max(.04, Math.min(.96, frac)), $("#wrapKz"), $("#divider").style.left = 100 * splitPos + "%";
const r = $("#clipRect");
if (r) {
const st = zKz.state, b = zKz.base, local = ((splitPos * VB.w - st.x) / st.k - b.tx) / b.s, W = KZ_BBOX[2] - KZ_BBOX[0];
r.setAttribute("x", local), r.setAttribute("width", Math.max(0, KZ_BBOX[2] + W - local)), 
// a label shows only if it fits entirely on its own side of the divider (half-width cached by fitLabels)
$$("#lLabels text").forEach(t => {
t.style.opacity = +t.getAttribute("x") + (t._hw || 0) > local - .012 ? 0 : 1;
}), $$("#lSplit text").forEach(t => {
t.style.opacity = +t.getAttribute("x") - (t._hw || 0) < local + .012 ? 0 : 1;
});
}
}

function openRegion(per, f) {
const p = f.p;
S.selected = p.id;
let html = `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">\n    <div><h3 style="font-size:18px">${esc(pName(p))}</h3>\n    <p style="color:var(--ink-mute);font-size:11.5px;margin:3px 0 0">${esc(t("regionGridLabel"))} ${per} ${esc(t("regionOf"))} · ${esc(pType(p))}</p></div>\n    <button class="btn ico ghost" onclick="drawerClose()">✕</button></div>`;
if ("1939" === per) {
const tags = LENS_TAGS[p.id] || {};
html += `<div style="margin:13px 0">\n      ${tags.nomadic ? `<span class="badge">${esc(t("tagNomadic"))}</span>` : ""}\n      ${tags.gulag ? `<span class="badge">${esc(t("tagGulag"))}</span>` : ""}\n      ${tags.unrest ? `<span class="badge">${esc(t("tagUnrest"))}</span>` : ""}</div>\n    <div style="background:var(--panel2);border-radius:11px;padding:15px;text-align:center;margin-bottom:13px">\n      <div style="font-size:42px;font-weight:700;color:var(--carmine2);line-height:1">−${fmtD(p.loss)}<span style="font-size:20px"> %</span></div>\n      <div style="font-size:11.5px;color:var(--ink-mute);margin-top:3px">${esc(t("lossOfKazPop"))}${lvl("census")}<span class="lvl lvl-check" tabindex="0" title="${esc(t("regionCheckTip"))}">${esc(t("regionCheckTag"))}</span></div>\n    </div>\n    <div class="kv"><span>${esc(t("kazakhs1926"))}${lvl("census")}</span><b>${fmtN(p.kazakh_1926)}</b></div>\n    <div class="kv"><span>${esc(t("kazakhs1939"))}</span><b>${fmtN(p.kazakh_1939)}</b></div>\n    <div class="kv"><span>${esc(t("total1926"))}</span><b>${fmtN(p.total_1926)}</b></div>\n    <div class="kv"><span>${esc(t("total1939"))}</span><b>${fmtN(p.total_1939)}</b></div>\n    <div class="kv"><span>${esc(t("generalPopChange"))}</span><b style="color:${p.growth >= 0 ? "var(--good)" : "var(--carmine2)"}">${fmtP(p.growth)} %</b></div>\n    <div class="kv"><span>${esc(t("kazShareChange"))}</span><b>${fmtD(p.share1926)} % → ${fmtD(p.share1939)} %</b></div>\n    <div class="kv"><span>${esc(t("maupShift"))}${lvl("model")}</span><b>${fmtP(p.shareShift, 2)} ${"kz" === LANG ? "п.т." : "en" === LANG ? "pp" : "п.п."}</b></div>`;
} else html += `<div style="background:var(--panel2);border-radius:11px;padding:15px;text-align:center;margin:13px 0">\n      <div style="font-size:42px;font-weight:700;color:var(--s26);line-height:1">${fmtD(p.kazShare)}<span style="font-size:20px"> %</span></div>\n      <div style="font-size:11.5px;color:var(--ink-mute);margin-top:3px">${esc(t("shareKazPop"))}${lvl("census")}<span class="lvl lvl-check" tabindex="0" title="${esc(t("regionCheckTip"))}">${esc(t("regionCheckTag"))}</span></div>\n    </div>\n    <div class="kv"><span>${esc(t("totalPop"))}${lvl("census")}</span><b>${fmtN(p.pop)}</b></div>\n    <div class="kv"><span>${esc(t("kazakhPop"))}</span><b>${fmtN(p.kazAbs)}</b></div>\n    <div class="kv"><span>${esc(t("otherPop"))}</span><b>${fmtN(p.pop - p.kazAbs)}</b></div>`;
if (html += `<div style="margin:15px 0 0"><canvas id="rChart" height="150"></canvas></div>\n    <p class="prose" style="margin-top:13px">${esc(pDesc(p))}</p>`, 
"1939" === per) {
const parts = MAUP.m.map((row, i) => ({
i: i,
v: row[p.idx]
})).filter(o => o.v > .02).sort((a, b) => b.v - a.v);
parts.length && (html += `<p class="sec-t" style="margin-top:17px">${esc(t("formedFrom"))}${lvl("model")}</p>`, 
parts.forEach(o => {
const src = KZ[1926][o.i];
html += `<div class="kv"><span>${esc(pName(src.p))}</span><b>${fmtD(o.v / MAUP.a39[p.idx] * 100)} ${esc(t("ofArea"))}</b></div>`;
}), html += `<p class="note" style="margin-top:10px">${esc(tf("maupNote", {
a: fmtN(p.interpKaz),
b: fmtN(p.kazakh_1926),
c: fmtP(p.resid)
}))}</p>`);
}
html += `<div style="margin-top:17px;display:flex;gap:7px;flex-wrap:wrap">\n    <button class="btn sm" onclick="printRegion('${per}','${p.id}')">${esc(t("savePdf"))}</button>\n    <button class="btn sm" onclick="askAbout('${esc(pName(p)).replace(/'/g, "")}')">${esc(t("askAssistant"))}</button></div>`, 
drawerOpen(html), drawChart(per, p);
}

$("#bSplit").addEventListener("click", () => setSplitMode(!S.split)), (() => {
const d = $("#divider");
let dragging = !1;
d.addEventListener("pointerdown", e => {
dragging = !0, d.setPointerCapture(e.pointerId), e.stopPropagation();
}), d.addEventListener("pointermove", e => {
if (!dragging) return;
const r = $("#wrapKz").getBoundingClientRect();
setSplit((e.clientX - r.left) / r.width);
});
const up = () => dragging = !1;
d.addEventListener("pointerup", up), d.addEventListener("pointercancel", up);
})();

let rChart = null;

function drawChart(per, p) {
const cv = document.getElementById("rChart");
if (!cv) return;
if (!window.Chart) return;
rChart && (rChart.destroy(), rChart = null);
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim(), cfg = "1939" === per ? {
labels: [ t("total1926").replace(", 1926", ""), t("kazakhs1926").replace(", 1926", "") ],
ds: [ {
label: "1926",
data: [ p.total_1926, p.kazakh_1926 ],
backgroundColor: css("--s26")
}, {
label: "1939",
data: [ p.total_1939, p.kazakh_1939 ],
backgroundColor: css("--s39")
} ]
} : {
labels: [ t("kazakhPop"), t("otherPop") ],
ds: [ {
label: "1926",
data: [ p.kazAbs, p.pop - p.kazAbs ],
backgroundColor: [ css("--s26"), css("--no-data") ]
} ]
};
Chart.defaults.font.family = '"PT Sans", system-ui, sans-serif', rChart = new Chart(cv.getContext("2d"), {
type: "bar",
data: {
labels: cfg.labels,
datasets: cfg.ds.map(d => ({
...d,
borderRadius: 4
}))
},
options: {
locale: numLoc(),
responsive: !0,
maintainAspectRatio: !1,
plugins: {
legend: {
labels: {
color: css("--ink-soft"),
boxWidth: 12,
font: {
size: 11
}
}
}
},
scales: {
x: {
ticks: {
color: css("--ink-soft"),
font: {
size: 10
}
},
grid: {
display: !1
}
},
y: {
ticks: {
color: css("--ink-mute"),
font: {
size: 10
}
},
grid: {
color: css("--line")
}
}
}
}
});
}

function refreshCharts() {
rChart && (rChart.destroy(), rChart = null);
}

function printRegion(per, id) {
const f = KZ[per].find(x => x.p.id === id);
if (!f) return;
const p = f.p, rows = "1939" === per ? [ [ t("kazakhs1926"), fmtN(p.kazakh_1926) ], [ t("kazakhs1939"), fmtN(p.kazakh_1939) ], [ t("total1926"), fmtN(p.total_1926) ], [ t("total1939"), fmtN(p.total_1939) ], [ t("kazakhLoss"), fmtD(p.loss) + " %" ], [ t("generalPopChange"), fmtP(p.growth) + " %" ], [ t("maupShift"), fmtP(p.shareShift, 2) + " " + ("kz" === LANG ? "п.т." : "en" === LANG ? "pp" : "п.п.") ] ] : [ [ t("totalPop"), fmtN(p.pop) ], [ t("kazakhPop"), fmtN(p.kazAbs) ], [ t("shareKazPop").replace(/^./, c => c.toUpperCase()), fmtD(p.kazShare) + " %" ] ], locale = numLoc();
$("#print").innerHTML = `<h1>${esc(pName(p))}</h1>\n    <div class="m">${t("brandTitle")} · Asharshylyk 1930–1933 · ${esc(t("regionGridLabel"))} ${per} ${esc(t("regionOf"))}</div>\n    <table>${rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table>\n    <p style="margin-top:14px">${esc(pDesc(p))}</p>\n    <div class="f">${esc(t("disclaimer1939"))} ${t("printGenerated")} ${(new Date).toLocaleDateString(locale)}.</div>`, 
window.print();
}

function syncPeriodUI() {
$$("#segPeriod button").forEach(b => b.classList.toggle("on", b.dataset.p === S.period)), 
$('#segPeriod button[data-p="1926"]').textContent = t("seg1926"), $('#segPeriod button[data-p="1939"]').textContent = t("seg1939");
const box = $("#metrics");
box.innerHTML = "", METRICS_DEF[S.period].forEach(m => {
const label = metricDef(S.period, m.id).label, lab = el("label", {
class: "chip" + (m.id === S.metric ? " on" : ""),
"data-m": m.id
});
lab.innerHTML = `<input type="radio" name="mtr" ${m.id === S.metric ? "checked" : ""}><span>${esc(label)}</span>`, 
box.appendChild(lab);
}), $("#periodHint").textContent = "1926" === S.period ? t("hintGrid1926") : t("hintGrid1939"), 
$("#disclaimer").textContent = "1926" === S.period ? t("disclaimer1926") : t("disclaimer1939");
}

$("#segPeriod").addEventListener("click", e => {
const b = e.target.closest("button[data-p]");
b && (S.period = b.dataset.p, S.metric = METRICS_DEF[S.period][0].id, syncPeriodUI(), 
S.split ? setSplitMode(!1) : renderKz());
}), $("#metrics").addEventListener("click", e => {
const c = e.target.closest(".chip[data-m]");
c && (S.metric = c.dataset.m, $$("#metrics .chip").forEach(x => {
const on = x === c;
x.classList.toggle("on", on), x.querySelector("input").checked = on;
}), S.split ? setSplitMode(!1) : renderKz());
}), $$(".chip[data-l] input").forEach(inp => {
inp.addEventListener("change", () => {
const chip = inp.closest(".chip"), k = chip.dataset.l;
S.layers[k] = inp.checked, chip.classList.toggle("on", inp.checked), "labels" === k ? $("#lLabels").classList.toggle("off", !inp.checked) : $("#l" + k[0].toUpperCase() + k.slice(1)).classList.toggle("off", !inp.checked);
});
}), zKz.onReset = () => setSplit(splitPos), $("#zIn").addEventListener("click", () => zKz.zoom(1.25)), $("#zOut").addEventListener("click", () => zKz.zoom(1 / 1.25)), 
$("#zRst").addEventListener("click", () => {
zKz.reset(), setSplit(splitPos);
});

let storyTimer = null;

const STORY_MS = 11e3;

function storyStart() {
S.story = 0, $("#story").classList.add("on"), $("#bStory").textContent = t("btnStoryStop"), 
S.split && $("#bSplit").click(), storyStep(0);
}

function storyStop() {
S.story = -1, clearTimeout(storyTimer), $("#story").classList.remove("on"), $("#bStory").textContent = t("btnStoryStart"), 
$$(".region").forEach(p => p.classList.remove("dim", "hi")), zKz.reset();
}

function storyStep(i) {
if (i < 0 || i >= STORY.length) return storyStop();
S.story = i;
const s = STORY[i], L = tr(s);
clearTimeout(storyTimer), $("#stN").textContent = `${t("storyStep")} ${i + 1} ${t("storyOf")} ${STORY.length}`, 
$("#stT").textContent = L.t, $("#stP").textContent = L.text, $("#stC").textContent = L.cite, 
$("#stPrev").disabled = 0 === i, $("#stPrev").textContent = t("storyPrev"), $("#stNext").textContent = i === STORY.length - 1 ? t("storyFinish") : t("storyNext"), 
$("#stStop").textContent = t("storyExit");
const bar = $("#stBar");
if (bar.style.transition = "none", bar.style.width = "0%", requestAnimationFrame(() => {
bar.style.transition = "width 11000ms linear", bar.style.width = "100%";
}), s.world) showView("world"); else if (s.maup) showView("data"); else {
"kz" !== currentView && showView("kz"), S.period === s.p && S.metric === s.metric || (S.period = s.p, 
S.metric = s.metric, syncPeriodUI(), renderKz()), [ "camps", "revolts" ].forEach(l => {
const want = s.layer === l, inp = document.querySelector(`.chip[data-l="${l}"] input`);
inp && inp.checked !== want && (inp.checked = want, inp.dispatchEvent(new Event("change", {
bubbles: !0
})));
});
const keys = s.focus || [];
if ($$("#lBase .region").forEach(p => {
p.classList.toggle("dim", keys.length > 0 && !keys.includes(p.dataset.id)), p.classList.toggle("hi", keys.includes(p.dataset.id));
}), keys.length) {
const b = KZ[s.p].filter(f => keys.includes(f.p.id)).reduce((a, f) => [ Math.min(a[0], f.b[0]), Math.min(a[1], f.b[1]), Math.max(a[2], f.b[2]), Math.max(a[3], f.b[3]) ], [ 1 / 0, 1 / 0, -1 / 0, -1 / 0 ]);
zKz.focus(b);
} else zKz.reset();
}
storyTimer = setTimeout(() => storyStep(i + 1), 11e3);
}

$("#bStory").addEventListener("click", () => S.story >= 0 ? storyStop() : storyStart()), document.addEventListener("click", e => {
const b = e.target.closest("[data-png]");
b && exportMapPng(b.dataset.png);
}), $("#bDefense").addEventListener("click", () => S.story >= 0 ? storyStop() : storyStart()), 
$("#stPrev").addEventListener("click", () => storyStep(S.story - 1)), $("#stNext").addEventListener("click", () => storyStep(S.story + 1)), 
$("#stStop").addEventListener("click", storyStop);

const VBW = {
w: 1e3,
h: 470
}, WS = {
layer: "flows",
scope: "region",
kinds: {
abroad: !0,
soviet: !0
}
};

let zW = null;

// Two views, each with its own basemap and projection (scripts/build_world.js): the region in Albers (1:50m) and
// the whole world in Equal Earth (1:110m). wProj() puts flow and famine points into the current view.
const wView = () => WORLD[WS.scope], wProj = (lon, lat) => "world" === WS.scope ? equalEarth(lon, lat) : ALBW(lon, lat);

const worldMap = {
ready: !1,
ensure() {
this.ready || (this.ready = !0, zW = makeZoom("#svgW", "#gW", wView().bbox, VBW.w, VBW.h, 12), 
zW.setOnChange((k, b, live) => syncWScale(live)), drawWorldBase(), renderWorld(), $("#wIn").addEventListener("click", () => zW.zoom(1.25)), 
$("#wOut").addEventListener("click", () => zW.zoom(1 / 1.25)), $("#wRst").addEventListener("click", () => {
WS.scope = "region" === WS.scope ? "world" : "region", $("#wRst").textContent = "region" === WS.scope ? t("worldWhole") : t("worldToRegion"), 
zW.refit(wView().bbox), drawWorldBase(), renderWorld();
}), $("#wRst").textContent = t("worldWhole"));
}
};

function syncWScale(live) {
if (live && zW.liveK === zW.state.k) return;
zW.liveK = live ? zW.state.k : null;
const u = zW.base.s * zW.state.k;
$$("#wNode g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${1 / u})`);
});
const hideLbl = "flows" === WS.layer && "world" === WS.scope;
$$("#wLbl text").forEach(t => {
t.style.display = hideLbl && "1" !== t.dataset.keep ? "none" : "", "1" === t.dataset.keep && (t.dataset.pri = 1e9);
}), live ? sizeLabels(zW, $$("#wLbl text"), 9, .2) : fitLabels(zW, "#svgW", $$("#wLbl text"), 9, !0, .2);
}

// Basemap paths are relative integer coordinates (q units per projection unit), drawn in groups scaled by 1/q.
function drawWorldBase() {
const V = wView(), w = pal().world, gr = $("#wGrat"), ct = $("#wCtry"), kz = $("#wKz"), lk = $("#wLake");
[ gr, ct, kz, lk ].forEach(g => {
g.innerHTML = "", g.setAttribute("transform", `scale(${1 / V.q})`);
}), $("#wDefs") && $("#wDefs").remove();
const defs = el("defs", {
id: "wDefs"
});
[ [ "arrA", w.abroad ], [ "arrS", w.soviet ] ].forEach(([id, col]) => {
const mk = el("marker", {
id: id,
viewBox: "0 0 10 10",
refX: 8,
refY: 5,
markerWidth: NARROW.matches ? 3 : 4.2,
markerHeight: NARROW.matches ? 3 : 4.2,
orient: "auto-start-reverse",
markerUnits: "strokeWidth"
});
mk.appendChild(el("path", {
d: "M0 1 L9 5 L0 9 Z",
fill: col
})), defs.appendChild(mk);
}), $("#svgW").appendChild(defs), $("#wOcean").style.display = V.sphere ? "none" : "", V.sphere && gr.appendChild(el("path", {
d: V.sphere,
class: "ocean"
})), gr.appendChild(el("path", {
d: V.grat,
class: "grat"
})), V.countries.forEach(c => ct.appendChild(el("path", {
d: c.d,
class: "ctry",
"data-n": c.n,
"data-nodrag": "1"
}))), kz.appendChild(el("path", {
d: V.kz,
class: "kzassr",
"data-nodrag": "1"
})), V.lakes.forEach(l => lk.appendChild(el("path", {
d: l.d,
class: "lake",
"data-n": l.n
}))), V.kk && lk.appendChild(el("path", {
d: V.kk,
class: "kkalp"
}));
}

function renderWorld(keepView) {
const fl = $("#wFlow"), nd = $("#wNode"), lb = $("#wLbl");
fl.innerHTML = "", nd.innerHTML = "", lb.innerHTML = "", $("#worldCtl").style.display = "flows" === WS.layer ? "" : "none";
const pts = "flows" === WS.layer ? renderFlows(fl, nd, lb) : renderFamines(fl, nd, lb);
$("#wTitle").innerHTML = `<b>${esc(t("flows" === WS.layer ? "segFlows" : "segFamines"))}</b> · ${esc(t("lvl_hist"))}`,
$("#wSrc").textContent = t("world" === WS.scope ? "pngSrcWorldWhole" : "pngSrcWorld");
if (syncWScale(), renderWorldLegend(), renderWorldStats(), !keepView) if ("region" === WS.scope && pts && pts.length) {
const b = pts.reduce((a, p) => [ Math.min(a[0], p[0]), Math.min(a[1], p[1]), Math.max(a[2], p[0]), Math.max(a[3], p[1]) ], [ 1 / 0, 1 / 0, -1 / 0, -1 / 0 ]);
zW.focus(b, !0, NARROW.matches ? 1.75 : 1.5);
} else zW.reset();
}

function renderFlows(fl, nd, lb) {
$("#worldHint").textContent = t("hintFlows");
const kzC = wProj(68, 48), pts = [ kzC ], wc = pal().world, shown = FLOWS.filter(f => WS.kinds[f.kind]), maxV = Math.max(...FLOWS.map(f => f.hi));
shown.forEach((f, i) => {
const L = tr(f), a = wProj(f.from[0], f.from[1]), b = wProj(f.lon, f.lat);
pts.push(a, b);
const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1, cx = mx - dy / len * len * .18, cy = my + dx / len * len * .18, d = `M${a[0].toFixed(4)} ${a[1].toFixed(4)} Q${cx.toFixed(4)} ${cy.toFixed(4)} ${b[0].toFixed(4)} ${b[1].toFixed(4)}`, col = "abroad" === f.kind ? wc.abroad : wc.soviet, w = 1.6 + f.hi / maxV * 6.4, path = el("path", {
d: d,
class: "flow",
stroke: col,
"stroke-opacity": .85,
"stroke-width": w,
"data-w": w,
"marker-end": `url(#${"abroad" === f.kind ? "arrA" : "arrS"})`,
"stroke-dasharray": f.dashed ? "6 5" : null
});
fl.appendChild(el("path", {
d: d,
class: "flowhalo",
"stroke-width": w + 3,
"stroke-dasharray": f.dashed ? "6 5" : null
})), fl.appendChild(path);
const hit = el("path", {
d: d,
class: "flowhit",
"data-nodrag": "1"
}), show = e => {
tipShow(`<b>${esc(L.to)}</b><span class="v">${f.lo}–${f.hi} ${esc(t("flowRange"))}</span>\n        <div class="s">${"abroad" === f.kind ? esc(t("flowAbroadLabel")) : esc(t("flowSovietLabel"))} ${esc(t("flowEstimate"))}<br>${esc(L.note)}</div>`), 
tipMove(e), path.setAttribute("stroke-opacity", 1);
};
hit.addEventListener("mouseenter", show), hit.addEventListener("mousemove", tipMove), 
hit.addEventListener("mouseleave", () => {
tipHide(), path.setAttribute("stroke-opacity", .85);
}), fl.appendChild(hit);
const g = el("g", {
"data-at": `${b[0]},${b[1]}`,
class: "node",
"data-nodrag": "1"
}), r = 2.6 + f.hi / maxV * 4.2;
g.appendChild(el("circle", {
r: r + 2.6,
fill: col,
"fill-opacity": .2
})), g.appendChild(el("circle", {
r: r,
fill: col,
stroke: "var(--panel)",
"stroke-width": .9
})), g.appendChild(el("circle", {
r: 10,
fill: "transparent"
})), g.addEventListener("mouseenter", show), g.addEventListener("mousemove", tipMove), 
g.addEventListener("mouseleave", tipHide), nd.appendChild(g);
const vx = b[0] - kzC[0], vy = b[1] - kzC[1], vl = Math.hypot(vx, vy) || 1, off = r / 70 + .016, tt = el("text", {
x: (b[0] + vx / vl * off).toFixed(4),
y: (b[1] + vy / vl * off + .012).toFixed(4),
class: "lbl",
"data-pri": ("abroad" === f.kind ? 1e3 : 0) + f.hi,
"text-anchor": Math.abs(vx / vl) < .35 ? "middle" : vx > 0 ? "start" : "end"
});
tt.textContent = L.short || L.to, lb.appendChild(tt);
});
const g0 = el("g", {
"data-at": `${kzC[0]},${kzC[1]}`,
class: "node",
"data-nodrag": "1"
});
g0.appendChild(el("circle", {
r: 8,
fill: "var(--carmine2)",
"fill-opacity": .25
})), g0.appendChild(el("circle", {
r: 4,
fill: "var(--carmine2)",
stroke: PALETTE.marks.outline,
"stroke-width": 1
})), nd.appendChild(g0);
const t0 = el("text", {
x: kzC[0],
y: kzC[1] + .055,
class: "lbl",
"data-keep": "1"
});
return t0.textContent = t("kzAssrLabel"), lb.appendChild(t0), pts;
}

function renderFamines(fl, nd, lb) {
$("#worldHint").textContent = t("hintFamines");
const maxL = Math.max(...FAMINES.filter(f => null != f.loss).map(f => f.loss)), pts = [];
return FAMINES.forEach((f, i) => {
const L = tr(f), [x, y] = wProj(f.lon, f.lat);
pts.push([ x, y ]);
const r = null == f.loss ? 8 : 3 + 13 * Math.sqrt(f.loss / maxL), col = f.hero ? pal().world.famineKz : f.other ? pal().world.famineNon : pal().world.famineOther, g = el("g", {
"data-at": `${x},${y}`,
class: "node",
"data-nodrag": "1"
});
g.appendChild(el("circle", {
r: r + 3,
fill: col,
"fill-opacity": .16
})), g.appendChild(el("circle", {
r: r,
fill: col,
"fill-opacity": .62,
stroke: col,
"stroke-width": 1.1
})), g.appendChild(el("circle", {
r: Math.max(r, 11),
fill: "transparent"
})), g.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(L.n)}</b>${null == f.loss ? "" : `<span class="v">≈ ${f.loss} %</span>`}\n        <div class="s">${null == f.loss ? "" : esc(t("famineDeathShare")) + "<br>"}${esc(t("famineVictims"))} ${esc(L.deaths)}${L.pop ? ` · ${esc(t("faminePop"))} ${esc(L.pop)}` : ""}<br>${esc(L.t)}</div>`), 
tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
nd.appendChild(g);
const t2 = el("text", {
x: x,
y: y - r / 60 - .04,
class: "lbl",
"data-pri": FAMINES.length - i
});
t2.textContent = L.n.replace(" (РСФСР)", "").replace(" (RSFSR)", "").replace("Китай: Ганьсу, Шэньси", "Китай").replace("China: Gansu, Shaanxi", "China"), 
lb.appendChild(t2);
}), pts;
}

function renderWorldLegend() {
const base = `<span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:16px;height:11px;background:var(--kz-fill);border:1.5px solid var(--kz-line);border-radius:2px"></i>${esc(t("legendKzOutline"))}</span>` + ("region" === WS.scope ? `\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:16px;height:0;border-top:1.5px dashed var(--kz-line)"></i>${esc(t("legendKarakalpak"))}</span>\n       <span style="margin-left:14px;color:var(--ink-mute)">${esc(t("legendAral"))}</span>` : "");
$("#wLegend").innerHTML = ("flows" === WS.layer ? `<span style="display:inline-flex;align-items:center;gap:6px"><i style="width:22px;height:3px;background:var(--flow-abroad);border-radius:2px"></i>${esc(t("legendFlowsAbroad"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:22px;height:3px;background:var(--flow-soviet);border-radius:2px"></i>${esc(t("legendFlowsSoviet"))}</span>\n       <span style="margin-left:14px;color:var(--ink-mute)">${esc(t("legendFlowsThickness"))}</span>` : `<span style="display:inline-flex;align-items:center;gap:6px"><i style="width:11px;height:11px;border-radius:50%;background:var(--famine-kz)"></i>${esc(t("legendFamineKz"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:11px;height:11px;border-radius:50%;background:var(--famine-other)"></i>${esc(t("legendFamineOther"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:11px;height:11px;border-radius:50%;background:var(--famine-non)"></i>${esc(t("legendFamineNon"))}</span>`) + base;
}

function renderWorldStats() {
const box = $("#statsW");
renderWorldStatsHtml(box), groupLvl(box);
}

function renderWorldStatsHtml(box) {
if ("flows" === WS.layer) {
const ab = FLOWS.filter(f => "abroad" === f.kind), sv = FLOWS.filter(f => "soviet" === f.kind), rng = a => `${a.reduce((s, f) => s + f.lo, 0)}–${a.reduce((s, f) => s + f.hi, 0)} ${t("flowRange")}`;
box.innerHTML = `\n      <div class="stat"><u>${esc(t("abroadDest"))}${lvl("hist")}${info("info_flowsDest")}</u><b>${ab.length}</b><s>≈${rng(ab)}</s></div>\n      <div class="stat"><u>${esc(t("sovietDest"))}${lvl("hist")}${info("info_flowsDest")}</u><b>${sv.length}</b><s>≈${rng(sv)}</s></div>\n      <div class="stat"><u>${esc(t("biggestDest"))}${lvl("hist")}${info("info_flowsDest")}</u><b style="font-size:15px">${esc(tr(FLOWS[0]).short)}</b><s>≈100–200 ${t("flowRange")}</s></div>\n      <div class="stat"><u>${esc(t("returnedShare"))}${lvl("hist")}${info("info_returned")}</u><b>≈40 %</b><s>454 / 1130 ${t("flowRange")}</s></div>`;
} else box.innerHTML = `\n      <div class="stat"><u>${esc(t("relLoss"))}${lvl("hist")}${info("info_relLoss")}</u><b style="color:var(--carmine2)">≈38 %</b><s>${esc(tr(FAMINES[0]).n)}</s></div>\n      <div class="stat"><u>${esc(t("absMax"))}${lvl("hist")}${info("info_absMax")}</u><b style="font-size:15px">${esc(tr(FAMINES[1]).n)}</b><s>≈${esc(tr(FAMINES[1]).deaths)}</s></div>\n      <div class="stat"><u>${esc(t("deathEstimates"))}${lvl("hist")}${info("info_deathEst")}</u><b>≈${"en" === LANG ? "1.3–2.3 million" : "1,3–2,3 млн"}</b><s>${esc(t("deathEstimatesSub"))}</s></div>\n      <div class="stat"><u>${esc(t("kazakhShareRepublic"))}${lvl("census")}${info("info_shareRep")}</u><b>≈${fmtD(58.5)} % → ≈38 %</b><s>1926 → 1939</s></div>`;
}

$("#segWorld").addEventListener("click", e => {
const b = e.target.closest("button[data-w]");
b && (WS.layer = b.dataset.w, $$("#segWorld button").forEach(x => x.classList.toggle("on", x === b)), 
renderWorld());
}), $$(".chip[data-f] input").forEach(inp => {
inp.addEventListener("change", () => {
const chip = inp.closest(".chip");
WS.kinds[chip.dataset.f] = inp.checked, chip.classList.toggle("on", inp.checked), 
renderWorld();
});
});

const VBS = {
w: 1e3,
h: 520
};

let zS = null;

const schoolsMap = {
ready: !1,
ensure() {
this.ready || (this.ready = !0, zS = makeZoom("#svgS", "#gS", KZ_BBOX, VBS.w, VBS.h), 
zS.setOnChange((k, b, live) => syncSScale(live)), $("#sIn").addEventListener("click", () => zS.zoom(1.25)), $("#sOut").addEventListener("click", () => zS.zoom(1 / 1.25)), $("#sRst").addEventListener("click", () => zS.reset()), renderSchoolCards(), renderSchoolMap());
}
};

function syncSScale(live) {
if (live && zS.liveK === zS.state.k) return;
zS.liveK = live ? zS.state.k : null;
const u = zS.base.s * zS.state.k;
live ? sizeLabels(zS, $$("#sLbl text"), 11) : fitLabels(zS, "#svgS", $$("#sLbl text"), 11), $$("#sMark g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${1 / u})`);
}), live || fitHits("#svgS", "#sMark .mhit");
}

function renderSchoolCards() {
const box = $("#schools");
box.innerHTML = "", SCHOOLS.forEach(s => {
const L = tr(s), c = el("div", {
class: "card school" + (S.school === s.id ? " on" : ""),
"data-s": s.id,
style: `--sc:${s.color}`
});
c.innerHTML = `<h4 style="color:${s.color}">${esc(L.name)}</h4>\n      <div class="w">${esc(L.work)}</div>\n      <div class="th">${esc(L.thesis)}</div>\n      <div class="ln">${esc(L.lens)}</div>`, 
c.addEventListener("click", () => selectSchool(s.id)), box.appendChild(c);
});
}

function selectSchool(id) {
S.school = S.school === id ? null : id, $$(".school").forEach(c => c.classList.toggle("on", c.dataset.s === S.school));
const s = SCHOOLS.find(x => x.id === S.school), d = $("#schoolDetail");
if (s) {
const L = tr(s), keys = lensKeys(s.metric);
d.innerHTML = `<p class="sec-t" style="color:${s.color}">${esc(L.name)}</p>\n      <p class="prose" style="margin:0 0 11px">${esc(L.detail)}</p>\n      <p class="sec-t">${esc(t("focusRegions"))}</p>\n      ${keys.map(k => {
const f = KZ[1939].find(x => x.p.id === k);
return `<div class="kv"><span>${esc(pName(f.p))}</span><b>−${fmtD(f.p.loss)} %</b></div>`;
}).join("")}\n      <button class="btn sm" style="margin-top:12px;width:100%;justify-content:center"\n        onclick="askAbout('${esc(L.name).replace(/'/g, "")}')">${esc(t("askAssistantSchool"))}</button>`;
} else d.innerHTML = `<p class="sec-t">${esc(t("chooseSchool"))}</p><p class="hint">${esc(t("chooseSchoolHint"))}</p>`;
renderSchoolMap();
}

function lensKeys(metric) {
return "nomadic" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].nomadic) : "anomaly" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].gulag) : "unrest" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].unrest) : [];
}

function renderSchoolMap() {
ensureNoData($("#svgS"));
const base = $("#sBase"), mark = $("#sMark"), lbl = $("#sLbl");
base.innerHTML = "", mark.innerHTML = "", lbl.innerHTML = "";
const s = SCHOOLS.find(x => x.id === S.school), keys = s ? lensKeys(s.metric) : [], m = metricDef("1939", s && "anomaly" === s.metric ? "gap" : "loss");
KZ[1939].forEach(f => {
const inLens = !s || keys.includes(f.p.id), p = el("path", {
d: f.d,
class: "region" + (s && !inLens ? " dim" : "") + (s && inLens ? " hi" : ""),
fill: metricColor("1939", m, f.p),
"data-nodrag": "1"
});
p.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span><span class="prelim">${esc(t("prelimNote"))}</span>\n        <div class="s">${esc(m.label)}</div>`), 
tipMove(e);
}), p.addEventListener("mousemove", tipMove), p.addEventListener("mouseleave", tipHide), 
p.addEventListener("click", () => {
tipHide(), openRegion("1939", f);
}), base.appendChild(p);
}), KZ[1939].forEach(f => {
const t2 = el("text", {
x: f.c[0].toFixed(2),
y: f.c[1].toFixed(2),
class: "lbl",
"data-pri": ((f.b[2] - f.b[0]) * (f.b[3] - f.b[1])).toFixed(1)
});
t2.textContent = shortName(f), lbl.appendChild(t2);
}), s && "anomaly" === s.metric && CAMPS.forEach(c => {
const L = tr(c);
addSMark(mark, c.lon, c.lat, PALETTE.marks.camp, L.n, L.t, "camp", c);
}), s && "unrest" === s.metric && REVOLTS.forEach(r => {
const L = tr(r);
addSMark(mark, r.lon, r.lat, PALETTE.marks.revolt, L.n + " " + t("tipUprising"), r.y + " " + t("tipUprisingYear").split(".")[0], "star", r);
}), $("#sCaption").textContent = s ? `${tr(s).name}: ${m.label.toLowerCase()} · ${t("focusRegions").toLowerCase()}` : t("schoolCaptionDefault"), 
syncSScale();
}

function addSMark(g, lon, lat, col, title, sub, kind, item) {
const [x, y] = albers(lon, lat), n = el("g", {
"data-at": `${x},${y}`,
class: "node",
"data-nodrag": "1"
});
"star" === kind ? n.appendChild(el("path", {
d: star(6.5, 2.9, 5),
fill: col,
stroke: PALETTE.marks.outline,
"stroke-width": .4
})) : (n.appendChild(el("circle", {
r: 6.5,
fill: "none",
stroke: col,
"stroke-width": 1.4
})), n.appendChild(el("path", {
d: "M-4.5,-4.5 L4.5,4.5 M4.5,-4.5 L-4.5,4.5",
stroke: col,
"stroke-width": 1.4,
fill: "none"
}))), n.appendChild(el("circle", {
r: MARK_HIT_R,
class: "mhit",
fill: "transparent"
})), n.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(title)}</b><div class="s">${esc(sub)}</div>`), tipMove(e);
}), n.addEventListener("mousemove", tipMove), n.addEventListener("mouseleave", tipHide), 
item && wireMark(n, "star" === kind ? "revolt" : "camp", item, title), g.appendChild(n);
}

// Bibliography of the research paper (docs/bibliography-source.md), stored as structured fields; apa() builds APA 7 strings.
// src: number in the paper ("1".."15" — main list, "Э1".."Э35" — electronic sources). Fields absent in the paper are left empty.
// DOI values were checked against Crossref (api.crossref.org).
const ACCESSED = "2026-05-04", BIB_CAT = {
monograph: {
ru: "Монография",
en: "Monograph",
kz: "Монография"
},
chapter: {
ru: "Статья в сборнике",
en: "Book chapter",
kz: "Жинақтағы мақала"
},
article: {
ru: "Статья",
en: "Journal article",
kz: "Мақала"
},
census: {
ru: "Перепись",
en: "Census",
kz: "Санақ"
},
handbook: {
ru: "Статистический справочник",
en: "Statistical handbook",
kz: "Статистикалық анықтамалық"
},
dataset: {
ru: "Набор данных",
en: "Dataset",
kz: "Деректер жиынтығы"
},
report: {
ru: "Рабочий доклад",
en: "Working paper",
kz: "Жұмыс баяндамасы"
},
webpage: {
ru: "Веб-страница",
en: "Web page",
kz: "Веб-парақ"
},
video: {
ru: "Видео",
en: "Video",
kz: "Бейне"
}
}, BIBLIOGRAPHY = [ {
src: "1",
group: "works",
type: "book",
cat: "monograph",
lang: "en",
authors: [ [ "Cameron", "S." ] ],
year: "2018",
title: "The hungry steppe: Famine, violence, and the making of Soviet Kazakhstan",
publisher: "Cornell University Press",
doi: "10.7591/cornell/9781501730436.001.0001",
role: {
ru: "Ключевая монография о голоде и становлении советского Казахстана, основной источник историографической линзы Кэмерон.",
en: "The key monograph on the famine and the making of Soviet Kazakhstan, the main source for Cameron’s historiographic lens.",
kz: "Ашаршылық пен кеңестік Қазақстанның қалыптасуы туралы негізгі монография, Кэмерон көзқарасының басты дереккөзі."
}
}, {
src: "2",
group: "works",
type: "chapter",
cat: "chapter",
lang: "ru",
authors: [ [ "Алексеенко", "А. Н." ] ],
year: "2000",
title: "Население Казахстана в 1926–1939 годах",
tr: "The population of Kazakhstan in 1926–1939",
editors: [ [ "Владимиров", "В. Н." ] ],
container: "Компьютер и историческая демография",
pages: "9–25",
role: {
ru: "Демографическая реконструкция 1926–1939 гг.; оценка безвозвратных потерь казахского населения 1,5–1,84 млн.",
en: "Demographic reconstruction for 1926–1939; estimate of irrecoverable Kazakh losses of 1.5–1.84 million.",
kz: "1926–1939 жж. демографиялық реконструкция; қазақ халқының қайтарымсыз шығынының бағасы 1,5–1,84 млн."
}
}, {
src: "3",
group: "primary",
type: "book",
cat: "census",
lang: "ru",
authors: [ [ "ЦСУ СССР" ] ],
year: "1928",
title: "Всесоюзная перепись населения 1926 года. Том VIII. Казакская АССР. Отдел I: Народность, родной язык, возраст, грамотность",
tr: "All-Union population census of 1926. Vol. VIII. Kazak ASSR. Section I: Nationality, native language, age, literacy",
role: {
ru: "Первичный источник данных 1926 г. по Казакской АССР (электронная версия в Демоскопе).",
en: "Primary source of the 1926 data for the Kazak ASSR (electronic version on Demoscope).",
kz: "Қазақ АКСР-і бойынша 1926 ж. деректердің бастапқы дереккөзі (электрондық нұсқасы Демоскопта)."
}
}, {
src: "4",
group: "primary",
type: "book",
cat: "census",
lang: "ru",
year: "1992",
title: "Всесоюзная перепись населения 1939 года. Основные итоги: данные по Казахской ССР и областям",
tr: "All-Union population census of 1939. Main results: Data for the Kazakh SSR and its oblasts",
publisher: "Наука",
role: {
ru: "Первичный источник данных 1939 г. по Казахской ССР и областям (электронная версия в Демоскопе).",
en: "Primary source of the 1939 data for the Kazakh SSR and its oblasts (electronic version on Demoscope).",
kz: "Қазақ КСР-і мен облыстары бойынша 1939 ж. деректердің бастапқы дереккөзі (электрондық нұсқасы Демоскопта)."
}
}, {
src: "5",
group: "geo",
type: "book",
cat: "monograph",
lang: "en",
authors: [ [ "Gregory", "I. N." ], [ "Ell", "P. S." ] ],
year: "2007",
title: "Historical GIS: Technologies, methodologies, and scholarship",
publisher: "Cambridge University Press",
doi: "10.1017/CBO9780511493645",
role: {
ru: "Методологическая основа исторической ГИС: базы данных, время, интерполяция между единицами.",
en: "Methodological basis of historical GIS: databases, time, interpolation between units.",
kz: "Тарихи ГАЖ-дың әдіснамалық негізі: деректер базасы, уақыт, бірліктер арасындағы интерполяция."
}
}, {
src: "6",
group: "works",
type: "article",
cat: "article",
lang: "en",
authors: [ [ "Pianciola", "N." ] ],
year: "2004",
title: "Famine in the steppe: The collectivization of agriculture and the Kazak herdsmen, 1928–1934",
container: "Cahiers du Monde russe",
volume: "45",
issue: "1–2",
pages: "137–192",
doi: "10.4000/monderusse.8681",
role: {
ru: "Источник линзы Пьянчолы: колониальная иерархия приоритетов и судьба казахских скотоводов.",
en: "Source of Pianciola’s lens: the colonial hierarchy of priorities and the fate of Kazakh herders.",
kz: "Пьянчола көзқарасының дереккөзі: басымдықтардың отарлық иерархиясы және қазақ малшыларының тағдыры."
}
}, {
src: "7",
group: "works",
type: "book",
cat: "monograph",
lang: "fr",
authors: [ [ "Ohayon", "I." ] ],
year: "2006",
title: "La sédentarisation des Kazakhs dans l’URSS de Staline: Collectivisation et changement social (1928–1945)",
publisher: "Maisonneuve et Larose",
role: {
ru: "Исследование седентаризации казахов и социальных изменений 1928–1945 гг.",
en: "A study of Kazakh sedentarization and social change in 1928–1945.",
kz: "1928–1945 жж. қазақтарды отырықшыландыру мен әлеуметтік өзгерістер туралы зерттеу."
}
}, {
src: "8",
group: "works",
type: "book",
cat: "monograph",
lang: "kk",
authors: [ [ "Омарбеков", "Т. О." ] ],
year: "1997",
title: "20–30 жылдардағы Қазақстан қасіреті",
tr: "The tragedy of Kazakhstan in the 1920s–1930s",
publisher: "Санат",
role: {
ru: "Национальная историографическая школа; оценка «более 370 выступлений» 1929–1931 гг.",
en: "National historiographic school; the estimate of “more than 370 uprisings” in 1929–1931.",
kz: "Ұлттық тарихнамалық мектеп; 1929–1931 жж. «370-тен астам көтеріліс» бағасы."
}
}, {
src: "9",
group: "works",
type: "article",
cat: "article",
lang: "ru",
authors: [ [ "Абылхожин", "Ж. Б." ], [ "Козыбаев", "М. К." ], [ "Татимов", "М. Б." ] ],
year: "1989",
title: "Казахстанская трагедия",
tr: "The Kazakhstan tragedy",
container: "Вопросы истории",
issue: "7",
pages: "53–71",
role: {
ru: "Первая публикация о масштабах голода в советской научной печати; отдельная авторская оценка потерь.",
en: "The first publication on the scale of the famine in the Soviet academic press; a separately attributed loss estimate.",
kz: "Кеңестік ғылыми баспасөзде ашаршылық ауқымы туралы алғашқы жарияланым; жеке авторлық шығын бағасы."
}
}, {
src: "10",
group: "works",
type: "book",
cat: "monograph",
lang: "kk",
authors: [ [ "Омарбеков", "Т. О." ] ],
year: "2003",
title: "Қазақстан тарихының ХХ ғасырдағы өзекті мәселелері",
tr: "Topical problems of the history of Kazakhstan in the 20th century",
publisher: "Өнер",
role: {
ru: "Национальная школа: сопротивление, откочёвки и их подавление.",
en: "National school: resistance, migrations and their suppression.",
kz: "Ұлттық мектеп: қарсылық, көші-қон және оларды басу."
}
}, {
src: "11",
group: "works",
type: "book",
cat: "monograph",
lang: "ru",
authors: [ [ "Акимбеков", "С. М." ] ],
year: "2021",
title: "Казахи между революцией и голодом",
tr: "Kazakhs between revolution and famine",
publisher: "Институт азиатских исследований",
role: {
ru: "Современная казахстанская работа о периоде от революции до голода.",
en: "A recent Kazakhstani work on the period from the revolution to the famine.",
kz: "Революциядан ашаршылыққа дейінгі кезең туралы заманауи қазақстандық еңбек."
}
}, {
src: "12",
group: "primary",
type: "book",
cat: "handbook",
lang: "ru",
year: "1936",
title: "Социалистическое строительство КазАССР: экономико-статистический справочник за 1920–1935 гг.",
tr: "Socialist construction of the Kazak ASSR: An economic and statistical handbook for 1920–1935",
role: {
ru: "Статистика 1920–1935 гг., в том числе поголовье скота.",
en: "Statistics for 1920–1935, including livestock numbers.",
kz: "1920–1935 жж. статистика, соның ішінде мал басы."
}
}, {
src: "13",
group: "geo",
type: "web",
cat: "dataset",
lang: "en",
title: "Kazakhstan – Subnational administrative boundaries",
format: "dataset",
site: "Humanitarian Data Exchange (HDX)",
url: "https://data.humdata.org/dataset/cod-ab-kaz",
role: {
ru: "Современная административная геометрия, на которой реконструированы границы 1926 и 1939 гг.",
en: "Modern administrative geometry on which the 1926 and 1939 boundaries are reconstructed.",
kz: "1926 және 1939 жж. шекаралары қайта құрылған қазіргі әкімшілік геометрия."
}
}, {
src: "14",
group: "geo",
type: "report",
cat: "report",
lang: "en",
authors: [ [ "Eckert", "F." ], [ "Gvirtz", "A." ], [ "Liang", "J." ], [ "Peters", "M." ] ],
year: "2020",
title: "A method to construct geographical crosswalks with an application to US counties since 1790",
series: "NBER Working Paper No. 26770",
publisher: "National Bureau of Economic Research",
doi: "10.3386/w26770",
url: "https://www.nber.org/papers/w26770",
role: {
ru: "Метод площадных «кросс-таблиц» между сетками лежит в основе расчёта матрицы 8 × 12 (96 пар «округ — область»).",
en: "The areal crosswalk method between grids, the basis for the 8 × 12 matrix (96 okrug–oblast pairs).",
kz: "Торлар арасындағы ареалдық сәйкестендіру әдісі 8 × 12 матрицасының («округ — облыс» 96 жұбы) есебінің негізінде жатыр."
}
}, {
src: "15",
group: "geo",
type: "web",
cat: "webpage",
lang: "en",
title: "Interpolating point data (QGIS3)",
site: "QGIS Tutorials and Tips",
url: "https://www.qgistutorials.com/en/docs/3/interpolating_point_data.html",
role: {
ru: "Практическое руководство по интерполяции в QGIS.",
en: "A practical guide to interpolation in QGIS.",
kz: "QGIS-тегі интерполяция бойынша практикалық нұсқаулық."
}
}, ...[ [ "Э1", "works", "Kazakh famine of 1930–1933", "Wikipedia", "https://en.wikipedia.org/wiki/Kazakh_famine_of_1930%E2%80%931933", "Обзорная статья энциклопедии о голоде.", "Encyclopedia overview of the famine.", "Ашаршылық туралы энциклопедиялық шолу." ], [ "Э2", "works", "“The hungry steppe: Famine, violence, and the making of Soviet Kazakhstan” by Sarah Cameron", "Asian Review of Books", "https://asianreviewofbooks.com/the-hungry-steppe-famine-violence-and-the-making-of-soviet-kazakhstan-by-sarah-cameron/", "Рецензия на монографию С. Кэмерон.", "A review of S. Cameron’s monograph.", "С. Кэмерон монографиясына рецензия." ], [ "Э3", "geo", "Методические рекомендации по подготовке исследовательских и проектн[…]", "spb.hse.ru", "https://spb.hse.ru/mirror/pubs/share/993176122", "Методические требования к исследовательской работе.", "Methodological requirements for a research paper.", "Зерттеу жұмысына қойылатын әдістемелік талаптар.", "Methodological recommendations for preparing research and project […]" ], [ "Э4", "works", "25 for 25: “The hungry steppe: Famine, violence, and the making of Soviet Kazakhstan” by Sarah Cameron", "Library of Congress Blogs", "https://blogs.loc.gov/kluge/2025/09/25-25-cameron/", "Материал Библиотеки Конгресса о монографии С. Кэмерон.", "Library of Congress post on S. Cameron’s monograph.", "Конгресс кітапханасының С. Кэмерон монографиясы туралы материалы." ], [ "Э5", "geo", "Population estimation methods in GIS and remote sensing: A review", "University at Buffalo, personal websites", "https://www.acsu.buffalo.edu/~lewang/pdf/lewang_sample4.pdf", "Обзор методов оценки населения в ГИС, обоснование площадной интерполяции.", "Review of population-estimation methods in GIS, the rationale for areal interpolation.", "ГАЖ-дағы халық санын бағалау әдістеріне шолу, ареалдық интерполяцияның негіздемесі." ], [ "Э6", "geo", "A method to construct geographical crosswalks with an application to US counties since 1790", "Fabian Eckert", "https://www.fpeckert.me/eglp.pdf", "Авторская PDF-версия работы о кросс-таблицах между сетками.", "Author’s PDF of the paper on crosswalks between grids.", "Торлар арасындағы сәйкестендіру туралы еңбектің авторлық PDF нұсқасы." ], [ "Э7", "works", "Genocide or not? The 1931–1933 famine in the collective memories of Kazakhstan’s post-independence generations", "Taylor & Francis", "https://doi.org/10.1080/14623528.2025.2561440", "Исследование памяти о голоде (аннотация).", "A study of the memory of the famine (abstract).", "Ашаршылық туралы жадыны зерттеу (аңдатпа)." ], [ "Э8", "works", "The collectivization famine in Kazakhstan, 1931–1933", "ResearchGate", "https://www.researchgate.net/publication/40773328_The_collectivization_famine_in_Kazakhstan_1931-1933", "Статья о коллективизационном голоде в Казахстане.", "An article on the collectivization famine in Kazakhstan.", "Қазақстандағы ұжымдастыру ашаршылығы туралы мақала." ], [ "Э9", "works", "The Kazakh famine of 1930–1933 and Stalinist collectivization: The limitation of legal frameworks for genocide in communist studies", "yris.yira.org", "https://yris.yira.org/spring-issue/the-kazakh-famine-of-1930-1933-and-stalinist-collectivization-the-limitation-of-legal-frameworks-for-genocide-in-communist-studies/", "Правовые рамки квалификации голода.", "Legal frameworks for classifying the famine.", "Ашаршылықты саралаудың құқықтық шеңбері." ], [ "Э10", "works", "The Kazakh famine of 1930–33: Current research and new directions", "ewjus.com", "https://ewjus.com/index.php/ewjus/article/download/220/88/525", "Обзор современных исследований голода.", "A survey of current famine research.", "Ашаршылық туралы заманауи зерттеулерге шолу." ], [ "Э11", "works", "Kazakh famine (Asharshylyq): Interview with Sarah Cameron", "zaurebatayeva.blog", "https://www.zaurebatayeva.blog/post/kazakh-famine-asharshylyq-interview-with-sarah-cameron", "Интервью с С. Кэмерон.", "An interview with S. Cameron.", "С. Кэмерон сұхбаты." ], [ "Э12", "works", "The hungry steppe: Famine, violence, and the making of Soviet Kazakhstan. By Sarah Cameron. Ithaca, N.Y.: Cornell University Press, 2018. xiv, 277 pp. Appendix. Notes. Bibliography. Glossary. Index. Photographs. Tables. Maps. $45.95, hard bound", "Slavic Review, Cambridge Core", "https://www.cambridge.org/core/journals/slavic-review/article/hungry-steppe-famine-violence-and-the-making-of-soviet-kazakhstan-by-sarah-cameron-ithaca-ny-cornell-university-press-2018-xiv-277-pp-appendix-notes-bibliography-glossary-index-photographs-tables-maps-4595-hard-bound/6512FCA4FD6866951B8CA792C1739114", "Рецензия в Slavic Review на монографию С. Кэмерон.", "A Slavic Review review of S. Cameron’s monograph.", "Slavic Review журналындағы С. Кэмерон монографиясына рецензия." ], [ "Э13", "works", "The famine in Soviet Kazakhstan (Chapter 8)", "The Cambridge World History of Genocide, Cambridge Core", "https://www.cambridge.org/core/books/cambridge-world-history-of-genocide/famine-in-soviet-kazakhstan/7DD5501C3BB06317450E155A216D1305", "Глава о голоде в Казахстане в кембриджской истории геноцидов.", "A chapter on the Kazakh famine in the Cambridge history of genocide.", "Кембридж геноцид тарихындағы Қазақстандағы ашаршылық туралы тарау." ], [ "Э14", "works", "Famine in the steppe", "OpenEdition Journals", "https://doi.org/10.4000/monderusse.8681", "Открытая электронная версия статьи Н. Пьянчолы.", "Open electronic version of N. Pianciola’s article.", "Н. Пьянчола мақаласының ашық электрондық нұсқасы." ], [ "Э15", "works", "Soviet famine of 1930–1933", "Wikipedia", "https://en.wikipedia.org/wiki/Soviet_famine_of_1930%E2%80%931933", "Обзор голода 1930–1933 гг. в СССР для сравнения.", "Overview of the 1930–1933 Soviet famine for comparison.", "Салыстыру үшін КСРО-дағы 1930–1933 жж. ашаршылыққа шолу." ], [ "Э16", "works", "Genocide or not? The 1931–1933 famine in the collective memories of Kazakhstan’s post-independence generations (full article)", "Taylor & Francis", "https://doi.org/10.1080/14623528.2025.2561440", "Исследование памяти о голоде (полный текст).", "A study of the memory of the famine (full text).", "Ашаршылық туралы жадыны зерттеу (толық мәтін)." ], [ "Э17", "works", "От голода 1932–1933 гг. погибло более 4 млн. казахов!", "Qazaquni.kz", "https://qazaquni.kz/alash/36654-ot-goloda-1932-1933-gg-pogiblo-bolee-4-mln-kazah", "Публицистическая максимальная оценка потерь (до 4 млн); на сайте приводится только как отдельная авторская оценка.", "A journalistic maximum loss estimate (up to 4 million), cited on the site only as a separately attributed estimate.", "Публицистикалық ең жоғары шығын бағасы (4 млн-ға дейін); сайтта тек жеке авторлық баға ретінде келтіріледі.", "More than 4 million Kazakhs died in the famine of 1932–1933!" ], [ "Э18", "works", "Talas Omarbekov (1948–2021)", "Taylor & Francis", "https://doi.org/10.1080/02634937.2022.2104491", "Биографический очерк о Т. Омарбекове.", "A biographical essay on T. Omarbekov.", "Т. Омарбеков туралы өмірбаяндық очерк." ], [ "Э19", "works", "ҚР Тәуелсіздігінің 30 жылдығына арналған «Қазақстандағы аштық: жаңа деректер мен пайымдаулар» халықаралық ғылыми-тәжірибелік конференциясының […]", "Алматинский университет энергетики и связи", "https://libr.aues.kz/facultet/104_FIT/101_Kafedra_sistem_informatsionnoy_bezopasnosti/699_KR_Taiuelsizdiginin_30_zhildighina_arnalghan_%C2%ABKazakstandaghi_ashtik:_zhana_derekter_men_payimdaular%C2%BB/K3WQsGRqwyJ1cA7jdfHk6mlbCUTOBL.pdf", "Материалы конференции о новых данных по голоду.", "Conference materials on new data about the famine.", "Ашаршылық туралы жаңа деректер бойынша конференция материалдары.", "… of the international research-to-practice conference “Famine in Kazakhstan: New data and interpretations” dedicated to the 30th anniversary of the independence of the Republic of Kazakhstan" ] ].map(([src, group, title, site, url, ru, en, kz, tr]) => ({
src: src,
group: group,
type: "web",
cat: "webpage",
lang: /[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі]/.test(title) ? /[ӘәҒғҚқҢңӨөҰұҮүҺһІі]/.test(title) ? "kk" : "ru" : "en",
title: title,
tr: tr,
site: site,
url: url,
role: {
ru: ru,
en: en,
kz: kz
}
})), ...[ [ "Э20", "primary", "Данные Всесоюзной переписи населения 1926 года", "Demoscope.ru", "https://www.demoscope.ru/weekly/ssp/rus_nac_26.php", "Электронная публикация итогов переписи 1926 г.: выберите в списке Казакскую АССР.", "Electronic publication of the 1926 census results: select the Kazak ASSR in the list.", "1926 ж. санақ қорытындыларының электрондық жарияланымы: тізімнен Қазақ АКСР-ін таңдаңыз.", "Data of the 1926 All-Union population census" ], [ "Э21", "primary", "Данные Всесоюзной переписи населения 1939 года", "Demoscope.ru", "https://www.demoscope.ru/weekly/ssp/sng_nac_39.php", "Электронная публикация итогов переписи 1939 г. по республикам СССР: выберите в списке Казахскую ССР.", "Electronic publication of the 1939 census results by Soviet republic: select the Kazakh SSR in the list.", "КСРО республикалары бойынша 1939 ж. санақ қорытындыларының электрондық жарияланымы: тізімнен Қазақ КСР-ін таңдаңыз.", "Data of the 1939 All-Union population census" ], [ "Э22", "geo", "Mapping the peoples of Kazakhstan", "ArcGIS StoryMaps", "https://storymaps.arcgis.com/stories/4f0e4059f2184bc481c3df64477497bf", "Пример картографического рассказа об этническом составе.", "An example of a story map on ethnic composition.", "Этникалық құрам туралы картографиялық әңгіме мысалы." ], [ "Э23", "works", "The population history of Kazakhstan", "European Population Conference 2012 (epc2012)", "https://epc2012.eaps.nl/papers/120586", "Демографическая история Казахстана: долгосрочный контекст.", "Population history of Kazakhstan: long-term context.", "Қазақстанның демографиялық тарихы: ұзақ мерзімді контекст." ], [ "Э24", "geo", "Geocoding historical data using QGIS", "Programming Historian", "https://programminghistorian.org/en/lessons/geocoding-qgis", "Урок по геокодированию исторических данных в QGIS.", "A lesson on geocoding historical data in QGIS.", "QGIS-те тарихи деректерді геокодтау сабағы." ], [ "Э25", "geo", "Chapter 7: Spatial analysis with US Census data", "walker-data.com", "https://walker-data.com/census-r/spatial-analysis-with-us-census-data.html", "Пространственный анализ переписных данных: методический пример.", "Spatial analysis of census data: a methodological example.", "Санақ деректерін кеңістіктік талдау: әдістемелік мысал." ], [ "Э26", "geo", "Historical GIS datafiles", "Census Mosaic (IPUMS)", "https://mosaic.ipums.org/historical-gis-datafiles", "Пример открытых исторических ГИС-данных.", "An example of open historical GIS data.", "Ашық тарихи ГАЖ деректерінің мысалы." ], [ "Э27", "geo", "SUNGEO historical GIS boundaries", "SUNGEO", "https://www.sungeo.org/sungeo-historical-gis-boundaries", "Исторические границы для ГИС: сравнение подходов.", "Historical boundaries for GIS: comparing approaches.", "ГАЖ-ға арналған тарихи шекаралар: тәсілдерді салыстыру." ], [ "Э29", "geo", "Historical maps of Kazakhstan", "EtoMesto", "https://etomesto.com/kazakhstan/maps.php?start=0", "Исторические карты Казахстана для сверки границ.", "Historical maps of Kazakhstan for checking boundaries.", "Шекараларды тексеруге арналған Қазақстанның тарихи карталары." ], [ "Э30", "geo", "Interpolating within a boundary using QGIS", "GIS StackExchange", "https://gis.stackexchange.com/questions/281519/interpolating-within-a-boundary-using-qgis", "Обсуждение интерполяции в пределах границы.", "A discussion of interpolation within a boundary.", "Шекара ішіндегі интерполяцияны талқылау." ], [ "Э32", "geo", "Spatial interpolation masking out areas based on population density", "Reddit, r/gis", "https://www.reddit.com/r/gis/comments/1evqmar/spatial_interpolation_masking_out_areas_based_on/", "Обсуждение маскирования при интерполяции по плотности населения.", "A discussion of masking in population-density interpolation.", "Халық тығыздығы бойынша интерполяциядағы маскалауды талқылау." ], [ "Э33", "geo", "What’s the best way to produce a density map from weighted points in QGIS?", "GIS StackExchange", "https://gis.stackexchange.com/questions/39074/whats-the-best-way-to-produce-a-density-map-from-weighted-points-in-qgis", "Обсуждение построения карты плотности по взвешенным точкам.", "A discussion of building a density map from weighted points.", "Салмақталған нүктелер бойынша тығыздық картасын құруды талқылау." ], [ "Э34", "works", "The hungry steppe: Famine, violence, and the making of Soviet Kazakhstan with author Sarah Cameron (video and transcript)", "Voices on Central Asia", "https://voicesoncentralasia.org/the-hungry-steppe-famine-violence-and-the-making-of-soviet-kazakhstan-with-author-sarah-cameron-video-and-transcript/", "Выступление С. Кэмерон о монографии (видео и стенограмма).", "S. Cameron’s talk on the monograph (video and transcript).", "С. Кэмерон монография туралы сөзі (бейне және стенограмма)." ], [ "Э35", "geo", "A place in history: A guide to using GIS in historical research", "ResearchGate", "https://www.researchgate.net/publication/263441890_A_Place_in_History_A_Guide_to_Using_GIS_in_Historical_Research", "Руководство по использованию ГИС в исторических исследованиях.", "A guide to using GIS in historical research.", "Тарихи зерттеулерде ГАЖ қолдану жөніндегі нұсқаулық." ] ].map(([src, group, title, site, url, ru, en, kz, tr]) => ({
src: src,
group: group,
type: "web",
cat: "webpage",
lang: /[А-Яа-яЁё]/.test(title) ? "ru" : "en",
title: title,
tr: tr,
site: site,
url: url,
role: {
ru: ru,
en: en,
kz: kz
}
})), ...[ [ "Э28", "Georeferencing historical maps with QGIS", "https://www.youtube.com/watch?v=UddhBhCvF0A", "Видеоурок по привязке исторических карт в QGIS.", "A video lesson on georeferencing historical maps in QGIS.", "QGIS-те тарихи карталарды байланыстыру бойынша бейнесабақ." ], [ "Э31", "Spatial interpolation techniques in QGIS", "https://www.youtube.com/watch?v=IRMupikjXng", "Видеоурок по методам пространственной интерполяции в QGIS.", "A video lesson on spatial interpolation techniques in QGIS.", "QGIS-тегі кеңістіктік интерполяция әдістері бойынша бейнесабақ." ] ].map(([src, title, url, ru, en, kz]) => ({
src: src,
group: "geo",
type: "web",
cat: "video",
format: "video",
lang: "en",
title: title,
site: "YouTube",
url: url,
role: {
ru: ru,
en: en,
kz: kz
}
})), {
src: "Д1",
group: "extra",
type: "article",
cat: "article",
lang: "ru",
authors: [ [ "Тольц", "М." ] ],
year: "2006",
title: "Этнический состав населения Казахстана накануне второй мировой войны (реконструкция действительных результатов переписи 1939 года)",
tr: "The ethnic composition of Kazakhstan’s population on the eve of the Second World War (a reconstruction of the actual results of the 1939 census)",
container: "Демоскоп Weekly",
issue: "245–246",
url: "https://www.demoscope.ru/weekly/2006/0245/analit02.php",
role: {
ru: "Опубликованные и реконструированные итоги переписи 1939 г. по Казахской ССР: 6 151,1 тыс. жителей, 2 327,6 тыс. казахов (37,8 %).",
en: "Published and reconstructed 1939 census results for the Kazakh SSR: 6,151.1 thousand inhabitants, 2,327.6 thousand Kazakhs (37.8%).",
kz: "Қазақ КСР-і бойынша 1939 ж. санақтың жарияланған және қайта құрылған қорытындылары: 6 151,1 мың тұрғын, 2 327,6 мың қазақ (37,8 %)."
}
}, {
src: "Д2",
group: "extra",
type: "web",
cat: "webpage",
lang: "ru",
authors: [ [ "Асылбек", "М. Х." ], [ "Асылбекова", "Ж. М." ] ],
year: "2014",
date: {
ru: "2014, 31 декабря",
en: "2014, December 31"
},
title: "Население Казахстана между Всесоюзными переписями населения 1926 г. и 1939 г.",
tr: "The population of Kazakhstan between the All-Union population censuses of 1926 and 1939",
site: "Институт истории и этнологии им. Ч. Ч. Валиханова",
url: "https://iie.kz/?p=4615",
role: {
ru: "Итоги переписи 1926 г. по республике (3 627,6 тыс. казахов, 58,5 % населения) и изменения численности областей 1926–1939 гг.",
en: "1926 census totals for the republic (3,627.6 thousand Kazakhs, 58.5% of the population) and oblast population change in 1926–1939.",
kz: "Республика бойынша 1926 ж. санақ қорытындылары (3 627,6 мың қазақ, халықтың 58,5 %-ы) және 1926–1939 жж. облыстар халқының өзгерісі."
}
}, {
src: "Д3",
group: "extra",
type: "article",
cat: "article",
lang: "ru",
authors: [ [ "Алексеенко", "А. Н." ] ],
year: "2003",
title: "Демографические последствия голода в Казахстане начала 30-х годов (оценка потерь казахского этноса)",
tr: "Demographic consequences of the famine in Kazakhstan in the early 1930s (an estimate of the losses of the Kazakh ethnos)",
container: "Демоскоп Weekly",
issue: "101–102",
url: "https://www.demoscope.ru/weekly/2003/0101/analit02.php",
role: {
ru: "Региональные оценки потерь казахов: наименьшие потери в Центральном Казахстане (Карагандинская область), 22,5 тыс., или 15,6 %.",
en: "Regional estimates of Kazakh losses: the smallest in Central Kazakhstan (Karaganda Oblast), 22.5 thousand, or 15.6%.",
kz: "Қазақтар шығынының аймақтық бағалары: ең азы Орталық Қазақстанда (Қарағанды облысы), 22,5 мың, немесе 15,6 %."
}
} ];

// English version (APA 7): Cyrillic references are transliterated. Russian: simplified BGN/PCGN (ъ and ь dropped);
// Kazakh letters: ә a, ғ gh, қ q, ң ng, ө o, ұ u, ү u, һ h, і i; Roman numerals typed with Cyrillic Х (ХХ ғасыр) become X.
// Titles keep the English translation in brackets.
const TL = {
а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
ә: "a", ғ: "gh", қ: "q", ң: "ng", ө: "o", ұ: "u", ү: "u", һ: "h", і: "i"
}, translit = s => s.replace(/(?<!\p{L})[ХIV]*Х[ХIV]*(?!\p{L})/gu, m => m.length > 1 ? m.replace(/Х/g, "X") : m).replace(/[а-яёәғқңөұүһі]/gi, c => {
const l = c.toLowerCase(), r = TL[l];
return c === l ? r : r.charAt(0).toUpperCase() + r.slice(1);
}), bibLatin = e => {
const T = v => "string" == typeof v ? translit(v) : v, A = l => l && l.map(a => a.map(translit));
return Object.assign({}, e, {
authors: A(e.authors),
editors: A(e.editors),
title: T(e.title),
container: T(e.container),
publisher: T(e.publisher),
site: T(e.site)
});
}, bibAuthor = a => a.length > 1 ? `${a[0]}, ${a[1]}` : a[0];

// APA 7 reference for one entry. Connective words follow the interface: Russian forms for ru and kz
// (the list belongs to a Russian-language paper), English forms for en. Titles stay in the original language;
// the English interface adds a translation in square brackets for Cyrillic titles.
function apa(e) {
const en = "en" === LANG;
en && (e = bibLatin(e));
const W = en ? {
nd: "n.d.",
in: "In",
ed: "Ed.",
eds: "Eds.",
pp: "pp.",
dataset: "Data set",
video: "Video",
retrieved: u => `Retrieved May 4, 2026, from ${u}`
} : {
nd: "б. д.",
in: "В",
ed: "Ред.",
eds: "Ред.",
pp: "с.",
dataset: "Набор данных",
video: "Видео",
retrieved: u => `Получено 4 мая 2026 г. с ${u}`
}, names = list => {
const n = list.map(bibAuthor);
return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + ", & " + n[n.length - 1];
}, edNames = list => {
const n = list.map(([f, g]) => `${g} ${f}`);
return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + ", & " + n[n.length - 1];
}, tr = en && e.tr ? ` [${e.tr}]` : "", link = e.doi ? "https://doi.org/" + e.doi : e.url || "", dot = s => /[.!?…]$/.test(s) ? s : s + ".", I = s => `<i>${esc(s)}</i>`;
let h;
if ("web" === e.type && e.authors) {
const d = e.date ? e.date[en ? "en" : "ru"] : e.year;
h = `${esc(dot(names(e.authors)))} (${esc(d)}). ${I(e.title)}${esc(tr)}${!tr && /[.!?…]$/.test(e.title) ? "" : "."} ${esc(dot(e.site))} <a href="${esc(link)}" target="_blank" rel="noopener noreferrer">${esc(link)}</a>`;
return {
html: h,
link: link
};
}
if ("web" === e.type) {
const desc = e.format ? ` [${"video" === e.format ? W.video : W.dataset}]` : "";
const sep = /[?!]$/.test(e.title) && !tr && !desc ? "" : ".";
// a DOI is a stable link: no retrieval date
h = `${I(e.title)}${esc(tr)}${desc}${sep} (${W.nd}). ${esc(dot(e.site))} ${esc(/^https:\/\/doi\.org\//.test(link) ? link : W.retrieved(link))}`;
return {
html: h.replace(esc(link), `<a href="${esc(link)}" target="_blank" rel="noopener noreferrer">${esc(link)}</a>`),
link: link
};
}
const who = e.authors ? `${esc(dot(names(e.authors)))} (${e.year}).` : "", end = !tr && /[.!?…]$/.test(e.title) ? "" : ".";
if ("article" === e.type) h = `${who} ${esc(dot(e.title + tr))} ${I(e.container)}${e.volume ? ", " + I(e.volume) : ","}${e.issue ? (e.volume ? "" : " ") + `(${esc(e.issue)})` : ""}${e.pages ? ", " + esc(e.pages) : ""}.`; else if ("chapter" === e.type) h = `${who} ${esc(dot(e.title + tr))} ${W.in} ${esc(edNames(e.editors))} (${e.editors.length > 1 ? W.eds : W.ed}), ${I(e.container)} (${W.pp} ${esc(e.pages)}).${e.publisher ? " " + esc(dot(e.publisher)) : ""}`; else if ("report" === e.type) h = `${who} ${I(e.title)}${esc(tr)} (${esc(e.series)}). ${esc(dot(e.publisher))}`; else h = e.authors ? `${who} ${I(e.title)}${esc(tr)}${end}${e.publisher ? " " + esc(dot(e.publisher)) : ""}` : `${I(e.title)}${esc(tr)}${end} (${e.year}).${e.publisher ? " " + esc(dot(e.publisher)) : ""}`;
return link && (h += ` <a href="${esc(link)}" target="_blank" rel="noopener noreferrer">${esc(link)}</a>`), {
html: h.trim(),
link: link
};
}

// Order inside a group: Cyrillic block first, then Latin (as in Russian bibliographies, GOST 7.80), each alphabetical
// by the first author's surname, or by title when there is no author (APA moves the title into the author position;
// a leading A/An/The is ignored). In English all entries are in Latin script (transliterated), so the list is one run.
function bibSortKey(e) {
"en" === LANG && (e = bibLatin(e));
const k = (e.authors ? e.authors[0][0] : e.title).replace(/^[«“"'\[(]+/, "").replace(/^(the|an|a)\s+/i, "");
return [ /^[A-Za-z0-9]/.test(k) ? 1 : 0, k.toLowerCase(), e.year || "" ];
}

function renderBiblio() {
const box = $("#biblio");
if (!box) return;
const groups = [ "primary", "works", "geo", "extra" ], cmp = (a, b) => {
const x = bibSortKey(a), y = bibSortKey(b);
return x[0] - y[0] || x[1].localeCompare(y[1], 0 === x[0] ? "ru" : "en") || x[2].localeCompare(y[2]);
};
box.innerHTML = groups.map(g => {
const items = BIBLIOGRAPHY.filter(e => e.group === g).sort(cmp);
return `<section class="card pad bib-group">\n      <h3>${esc(t("biblioGroup_" + g))} <span class="bib-count">${items.length}</span></h3>\n      ${items.map(e => {
const r = apa(e), C = BIB_CAT[e.cat];
return `<div class="bib-entry" id="bib-${esc(e.src)}">\n        <p class="apa" lang="${"kk" === e.lang ? "kk" : e.lang}">${r.html}</p>\n        <div class="bib-meta"><span class="bib-cat">${esc(C[LANG] || C.ru)}</span><span>${esc(e.role[LANG] || e.role.ru)}</span>${r.link ? "" : `<span class="bib-print">${esc(t("biblioPrint"))}</span>`}\n        <button class="btn sm bib-copy" data-src="${esc(e.src)}">${esc(t("biblioCopy"))}</button></div>\n      </div>`;
}).join("")}\n    </section>`;
}).join("") + `<p class="hint bib-note">${esc(t("biblioApaNote"))}</p>`;
}

document.addEventListener("click", e => {
const b = e.target.closest(".bib-copy");
if (!b) return;
const entry = BIBLIOGRAPHY.find(x => x.src === b.dataset.src);
if (!entry) return;
const tmp = document.createElement("div");
tmp.innerHTML = apa(entry).html;
const text = tmp.textContent.replace(/\s+/g, " ").trim(), done = ok => toast(t(ok ? "biblioCopied" : "biblioCopyFail"));
try {
navigator.clipboard.writeText(text).then(() => done(!0), () => done(fallbackCopy(text)));
} catch (err) {
done(fallbackCopy(text));
}
});

function fallbackCopy(text) {
try {
const ta = document.createElement("textarea");
ta.value = text, ta.setAttribute("readonly", ""), ta.style.position = "fixed", ta.style.opacity = "0", document.body.appendChild(ta),
ta.select();
const ok = document.execCommand("copy");
return ta.remove(), ok;
} catch (e) {
return !1;
}
}

const TS = {
period: "1926",
sort: null,
dir: 1
};

function columns(period) {
return "1926" === period ? [ {
k: "name",
t: "kz" === LANG ? "Округ" : "en" === LANG ? "Okrug" : "Округ",
get: p => pName(p),
txt: 1
}, {
k: "pop",
t: t("totalPopulation"),
get: p => p.pop,
f: fmtN
}, {
k: "kazAbs",
t: t("kazakhsWord"),
get: p => p.kazAbs,
f: fmtN
}, {
k: "kazShare",
t: metricDef("1926", "kazShare").label,
get: p => p.kazShare,
f: v => fmtD(v) + " %"
} ] : [ {
k: "name",
t: "kz" === LANG ? "Облыс" : "en" === LANG ? "Oblast" : "Область",
get: p => pName(p),
txt: 1
}, {
k: "kazakh_1926",
t: t("kazakhs1926"),
get: p => p.kazakh_1926,
f: fmtN
}, {
k: "kazakh_1939",
t: t("kazakhs1939"),
get: p => p.kazakh_1939,
f: fmtN
}, {
k: "loss",
t: t("kazakhLoss"),
get: p => p.loss,
f: v => "−" + fmtD(v) + " %",
cls: () => "neg"
}, {
k: "growth",
t: "kz" === LANG ? "Жалпы халық" : "en" === LANG ? "Total pop." : "Общее нас.",
get: p => p.growth,
f: v => fmtP(v) + " %",
cls: v => v >= 0 ? "pos" : "neg"
}, {
k: "interpKaz",
t: "kz" === LANG ? "MAUP-баға 1926" : "en" === LANG ? "MAUP est. 1926" : "MAUP-оценка 1926",
get: p => p.interpKaz,
f: fmtN
}, {
k: "shareShift",
t: t("maupShift"),
get: p => p.shareShift,
f: v => fmtP(v, 2),
cls: v => v >= 0 ? "pos" : "neg"
} ];
}

const DATA_LOG = [ {
date: "2026-10-21",
ru: {
what: "Диапазон потерь: «от 1,26 до 4 млн» и «1,3–4 млн» заменены на «безвозвратные потери казахского населения ≈1,3–2,3 млн (оценки разных авторов); А. Н. Алексеенко: 1,5–1,84 млн». Оценки 3,25 млн (Ж. Абылхожин, М. Козыбаев, М. Татимов) и до 4 млн (Х. М. Абжанов) оставлены как отдельно подписанные авторские оценки.",
why: "Приведение к тексту научной работы: общий диапазон не должен включать единичные максимальные оценки.",
source: "Текст научной работы; Алексеенко А. Н. Население Казахстана в 1926–1939 годах // Компьютер и историческая демография. Барнаул, 2000. С. 9–25."
},
en: {
what: "Loss range: “1.26 to 4 million” and “1.3–4 million” replaced with “irrecoverable losses of the Kazakh population ≈1.3–2.3 million (estimates by different authors); A. N. Alekseenko: 1.5–1.84 million”. The estimates of 3.25 million (Zh. Abylkhozhin, M. Kozybaev, M. Tatimov) and up to 4 million (Kh. M. Abzhanov) are kept as separately attributed individual estimates.",
why: "Alignment with the text of the research paper: the overall range should not include single maximum estimates.",
source: "Text of the research paper; Алексеенко А. Н. Население Казахстана в 1926–1939 годах // Компьютер и историческая демография. Барнаул, 2000. С. 9–25."
},
kz: {
what: "Шығын диапазоны: «1,26-дан 4 млн-ға дейін» және «1,3–4 млн» орнына «қазақ халқының қайтарымсыз шығыны ≈1,3–2,3 млн (әртүрлі авторлардың бағалары); А. Н. Алексеенко: 1,5–1,84 млн». 3,25 млн (Ж. Әбілхожин, М. Қозыбаев, М. Тәтімов) және 4 млн-ға дейін (Х. М. Әбжанов) бағалары жеке авторлық бағалар ретінде қалдырылды.",
why: "Ғылыми жұмыс мәтініне сәйкестендіру: жалпы диапазонға жекелеген ең жоғары бағалар кірмеуі керек.",
source: "Ғылыми жұмыс мәтіні; Алексеенко А. Н. Население Казахстана в 1926–1939 годах // Компьютер и историческая демография. Барнаул, 2000. С. 9–25."
}
}, {
date: "2026-10-21",
ru: {
what: "«Более 380 восстаний и волнений» заменено на «более 370 выступлений 1929–1931 гг. (Т. Омарбеков)» во всех текстах.",
why: "Расхождение с текстом научной работы.",
source: "Т. Омарбеков (по тексту научной работы)."
},
en: {
what: "“More than 380 uprisings and disturbances” replaced with “more than 370 uprisings of 1929–1931 (T. Omarbekov)” in all texts.",
why: "Discrepancy with the text of the research paper.",
source: "T. Omarbekov (as cited in the research paper)."
},
kz: {
what: "«380-нен астам көтеріліс пен толқу» барлық мәтіндерде «1929–1931 жж. 370-тен астам көтеріліс (Т. Омарбеков)» деп өзгертілді.",
why: "Ғылыми жұмыс мәтінімен алшақтық.",
source: "Т. Омарбеков (ғылыми жұмыс мәтіні бойынша)."
}
}, {
date: "2026-10-21",
ru: {
what: "Числа 3,968 млн и 3,1 млн подписаны как «казахи во всём СССР по переписям 1926 и 1939 гг.»; убыль ≈867 тыс. относится к СССР. Значения не менялись.",
why: "Это итоги по всему Союзу, а не по республике; формулировку можно было прочитать как республиканскую.",
source: "Всесоюзные переписи 1926 и 1939 гг., итоги по СССР."
},
en: {
what: "The figures 3.968 million and 3.1 million are labelled “Kazakhs in the whole USSR according to the 1926 and 1939 censuses”; the ≈867,000 decline is USSR-wide. The values did not change.",
why: "These are Union-wide totals, not figures for the republic; the wording could be read as republic-level.",
source: "All-Union censuses of 1926 and 1939, USSR totals."
},
kz: {
what: "3,968 млн және 3,1 млн сандары «1926 және 1939 жж. санақтары бойынша бүкіл КСРО-дағы қазақтар» деп белгіленді; ≈867 мың кему КСРО бойынша берілген. Мәндер өзгермеді.",
why: "Бұл республика емес, бүкіл Одақ бойынша қорытынды; тұжырымды республикалық деп түсінуге болатын еді.",
source: "1926 және 1939 жж. Бүкілодақтық санақтар, КСРО бойынша қорытынды."
}
}, {
date: "2026-10-21",
ru: {
what: "Шаг StoryMap «Аномальный рост» показывает метрику «Изменение общего населения»; раньше из-за несуществующей метрики карта показывала потерю казахского населения.",
why: "Карта на этом шаге не соответствовала тексту.",
source: "Исправление отображения; данные не менялись."
},
en: {
what: "The StoryMap step “Anomalous growth” now shows the “Change in total population” metric; previously, because of a non-existent metric, the map showed Kazakh population loss.",
why: "The map on this step did not match the text.",
source: "Display fix; the data did not change."
},
kz: {
what: "StoryMap-тың «Аномальды өсім» қадамы «Жалпы халық санының өзгерісі» көрсеткішін көрсетеді; бұрын жоқ көрсеткіш салдарынан карта қазақ халқының шығынын көрсететін.",
why: "Бұл қадамдағы карта мәтінге сәйкес келмеді.",
source: "Көрсетуді түзету; деректер өзгермеді."
}
}, {
date: "2026-10-21",
ru: {
what: "Областные и окружные показатели 1926 и 1939 гг. не изменены. Начата сверка с опубликованными итогами переписей по областям.",
why: "Подготовка к замене рабочего набора данных атласа опубликованными итогами.",
source: "Перепись 1926 г. по Казакской АССР и перепись 1939 г. по областям Казахской ССР (Демоскоп): сверка ведётся."
},
en: {
what: "The oblast and okrug figures for 1926 and 1939 are unchanged. A cross-check against the published census results by oblast has begun.",
why: "Preparing to replace the atlas’s working dataset with the published results.",
source: "1926 census for the Kazak ASSR and 1939 census by oblast of the Kazakh SSR (Demoscope): cross-check in progress."
},
kz: {
what: "1926 және 1939 жж. облыстық және округтік көрсеткіштер өзгертілген жоқ. Облыстар бойынша жарияланған санақ қорытындыларымен салыстыру басталды.",
why: "Атластың жұмыс деректер жиынтығын жарияланған қорытындылармен ауыстыруға дайындық.",
source: "Қазақ АКСР-і бойынша 1926 ж. санақ және Қазақ КСР-і облыстары бойынша 1939 ж. санақ (Демоскоп): салыстыру жүргізілуде."
}
}, {
date: "2026-10-22",
ru: {
what: "В библиографии заменены ссылки на Демоскоп (Э20, Э21): для 1926 г. http://www.demoscope.ru/weekly/ssp/rus_nac_26.php, для 1939 г. https://www.demoscope.ru/weekly/ssp/sng_nac_39.php (республики СССР); в аннотации добавлено «выберите в списке Казакскую АССР / Казахскую ССР».",
why: "Расхождение со списком литературы работы: указанная в работе страница rus_nac_39.php?reg=77 относится к региону РСФСР, а не к Казахской ССР, страница rus_nac_26.php?reg=753 открывается пустой.",
source: "Демоскоп Weekly: итоги переписей 1926 и 1939 гг."
},
en: {
what: "Bibliography links to Demoscope replaced (E20, E21): for 1926, http://www.demoscope.ru/weekly/ssp/rus_nac_26.php; for 1939, https://www.demoscope.ru/weekly/ssp/sng_nac_39.php (Soviet republics); the annotation now says “select the Kazak ASSR / Kazakh SSR in the list”.",
why: "A discrepancy with the paper’s reference list: the page cited in the paper, rus_nac_39.php?reg=77, belongs to an RSFSR region rather than the Kazakh SSR, and rus_nac_26.php?reg=753 opens an empty page.",
source: "Demoscope Weekly: results of the 1926 and 1939 censuses."
},
kz: {
what: "Библиографиядағы Демоскоп сілтемелері ауыстырылды (Э20, Э21): 1926 ж. үшін http://www.demoscope.ru/weekly/ssp/rus_nac_26.php, 1939 ж. үшін https://www.demoscope.ru/weekly/ssp/sng_nac_39.php (КСРО республикалары); аңдатпаға «тізімнен Қазақ АКСР-ін / Қазақ КСР-ін таңдаңыз» деп қосылды.",
why: "Жұмыстың әдебиеттер тізімімен алшақтық: жұмыста көрсетілген rus_nac_39.php?reg=77 парағы Қазақ КСР-іне емес, РКФСР аймағына жатады, ал rus_nac_26.php?reg=753 парағы бос ашылады.",
source: "Демоскоп Weekly: 1926 және 1939 жж. санақ қорытындылары."
}
}, {
date: "2026-10-22",
ru: {
what: "В библиографию добавлена отдельная группа «Дополнительные источники (после подачи работы)»: М. Тольц (2006) и М. Х. Асылбек, Ж. М. Асылбекова (2014), оформление по APA 7.",
why: "На эти работы опираются республиканские итоги переписей на панели «вход для жюри», на плашках и в шаге 4 StoryMap; в списке литературы работы их нет.",
source: "Тольц М. Этнический состав населения Казахстана накануне второй мировой войны // Демоскоп Weekly. 2006. № 245–246; Асылбек М. Х., Асылбекова Ж. М. Население Казахстана между Всесоюзными переписями населения 1926 г. и 1939 г. (iie.kz, 2014)."
},
en: {
what: "A separate bibliography group “Additional sources (after the paper was submitted)” was added: M. Tolts (2006) and M. Kh. Asylbek & Zh. M. Asylbekova (2014), in APA 7 style.",
why: "The republic-level census totals on the jury panel, the plaques and StoryMap step 4 rely on these works; they are not in the paper’s reference list.",
source: "Tolts, M. (2006), Demoscope Weekly, no. 245–246; Asylbek, M. Kh., & Asylbekova, Zh. M. (2014), iie.kz."
},
kz: {
what: "Библиографияға «Қосымша дереккөздер (жұмыс тапсырылғаннан кейін)» деген бөлек топ қосылды: М. Тольц (2006) және М. Х. Асылбек, Ж. М. Асылбекова (2014), APA 7 бойынша.",
why: "«Қазылар алқасына кіріспе» панеліндегі, тақташалардағы және StoryMap-тің 4-қадамындағы республикалық санақ қорытындылары осы еңбектерге сүйенеді; олар жұмыстың әдебиеттер тізімінде жоқ.",
source: "Тольц М. (2006), Демоскоп Weekly, № 245–246; Асылбек М. Х., Асылбекова Ж. М. (2014), iie.kz."
}
}, {
date: "2026-10-22",
ru: {
what: "Цифры на сайте: относительная потеря казахов ≈38 % (Cameron, 2018) вместо 38–42 %; потери Украинской ССР ≈3,3–3,9 млн (Э15) вместо 3,5–5 млн; на плашке периода 1939 г. убыль казахов в республике ≈ −36 % (переписи 1926 и 1939 гг.) вместо −51,4 % по сумме областей; областные проценты оставлены только в карточках областей с пометкой «сверка ведётся».",
why: "Приведение к источникам; областные показатели рабочего набора ещё не сверены с опубликованными итогами переписей.",
source: "Cameron S. (2018); Soviet famine of 1930–1933, Wikipedia (Э15); Асылбек, Асылбекова (2014); Тольц (2006)."
},
en: {
what: "Figures on the site: relative Kazakh loss ≈38% (Cameron, 2018) instead of 38–42%; Ukrainian SSR losses ≈3.3–3.9 million (E15) instead of 3.5–5 million; the 1939 plaque shows the republic-level Kazakh decline ≈ −36% (1926 and 1939 censuses) instead of −51.4% summed over oblasts; oblast percentages remain only in the oblast cards, marked “cross-check in progress”.",
why: "Alignment with the sources; the oblast figures of the working dataset have not yet been cross-checked against the published census results.",
source: "Cameron, S. (2018); Soviet famine of 1930–1933, Wikipedia (E15); Asylbek & Asylbekova (2014); Tolts (2006)."
},
kz: {
what: "Сайттағы сандар: қазақтардың салыстырмалы шығыны 38–42 % орнына ≈38 % (Cameron, 2018); Украин КСР-інің шығыны 3,5–5 млн орнына ≈3,3–3,9 млн (Э15); 1939 ж. тақташасында облыстар қосындысы бойынша −51,4 % орнына республикадағы қазақтардың кемуі ≈ −36 % (1926 және 1939 жж. санақтар); облыстық пайыздар тек облыс карточкаларында «салыстыру жүргізілуде» белгісімен қалдырылды.",
why: "Дереккөздерге сәйкестендіру; жұмыс жиынтығының облыстық көрсеткіштері жарияланған санақ қорытындыларымен әлі салыстырылған жоқ.",
source: "Cameron S. (2018); Soviet famine of 1930–1933, Wikipedia (Э15); Асылбек, Асылбекова (2014); Тольц (2006)."
}
}, {
date: "2026-10-23",
ru: {
what: "Плашки периода 1926 г.: вместо сумм по 8 округам рабочего набора (3 880 000 жителей, 2 666 640 казахов) показаны итоги переписи по республике: ≈6,07 млн жителей, ≈3,63 млн казахов (≈60 %). Суммы по округам остаются в таблице и карточках с пометкой «сверка ведётся». Для Украинской ССР убраны доля погибших и население ≈31 млн, у которых нет источника.",
why: "Окружные значения рабочего набора ещё не сверены с опубликованными итогами переписи 1926 г.",
source: "Асылбек М. Х., Асылбекова Ж. М. (2014)."
},
en: {
what: "1926 plaques: instead of the sums over the 8 okrugs of the working dataset (3,880,000 inhabitants, 2,666,640 Kazakhs), the republic-level census totals: ≈6.07 million inhabitants, ≈3.63 million Kazakhs (≈60%). The okrug sums remain in the table and cards, marked “cross-check in progress”. For the Ukrainian SSR, the death share and the ≈31 million population, which have no source, were removed.",
why: "The okrug values of the working dataset have not yet been cross-checked against the published 1926 census results.",
source: "Asylbek, M. Kh., & Asylbekova, Zh. M. (2014)."
},
kz: {
what: "1926 ж. тақташалары: жұмыс жиынтығының 8 округі бойынша қосындылардың (3 880 000 тұрғын, 2 666 640 қазақ) орнына республика бойынша санақ қорытындылары берілді: ≈6,07 млн тұрғын, ≈3,63 млн қазақ (≈60 %). Округтер бойынша қосындылар кестеде және карточкаларда «салыстыру жүргізілуде» белгісімен қалды. Украин КСР-і үшін дереккөзі жоқ қаза болғандар үлесі мен ≈31 млн халық алынып тасталды.",
why: "Жұмыс жиынтығының округтік мәндері 1926 ж. санақтың жарияланған қорытындыларымен әлі салыстырылған жоқ.",
source: "Асылбек М. Х., Асылбекова Ж. М. (2014)."
}
}, {
date: "2026-10-23",
ru: {
what: "Итоги переписи 1926 г. по республике: доля казахов ≈58,5 % вместо ≈60 %, население ≈6,2 млн (6 198,5 тыс.) вместо ≈6,07 млн; 1926 → 1939 общая численность почти не изменилась (≈6,2 → 6,15 млн, ≈ −1 %). В подсказках карт и в легенде областные и окружные значения помечены «предв., сверка ведётся».",
why: "Значение 58,5 % прямо указано у Асылбек и Асылбековой (2014); ≈6,07 млн в источнике не напечатано. Обе величины сверены по таблицам Демоскопа: Казакская АССР с Каракалпакской АО: 6 503,0 тыс., в т. ч. 3 713,4 тыс. казахов; Каракалпакская АО: 304,5 тыс. и 85,8 тыс.; разность: 6 198,5 тыс. и 3 627,6 тыс. (58,5 %).",
source: "Всесоюзная перепись населения 1926 г., Демоскоп Weekly: rus_nac_26.php?reg=1476 и reg=1572; Асылбек М. Х., Асылбекова Ж. М. (2014)."
},
en: {
what: "1926 republic totals: Kazakh share ≈58.5% instead of ≈60%, population ≈6.2 million (6,198.5 thousand) instead of ≈6.07 million; between 1926 and 1939 the total barely changed (≈6.2 → 6.15 million, ≈ −1%). Oblast and okrug values in map tooltips and the legend are marked “prelim., cross-check in progress”.",
why: "The 58.5% figure is stated by Asylbek & Asylbekova (2014); ≈6.07 million is not printed there. Both values were checked against the Demoscope tables: Kazak ASSR incl. the Kara-Kalpak AO: 6,503.0 thousand, of whom 3,713.4 thousand Kazakhs; Kara-Kalpak AO: 304.5 and 85.8 thousand; difference: 6,198.5 and 3,627.6 thousand (58.5%).",
source: "All-Union census of 1926, Demoscope Weekly: rus_nac_26.php?reg=1476 and reg=1572; Asylbek, M. Kh., & Asylbekova, Zh. M. (2014)."
},
kz: {
what: "Республика бойынша 1926 ж. санақ қорытындылары: қазақтар үлесі ≈60 % орнына ≈58,5 %, халық ≈6,07 млн орнына ≈6,2 млн (6 198,5 мың); 1926 → 1939 жалпы халық саны іс жүзінде өзгермеді (≈6,2 → 6,15 млн, ≈ −1 %). Карта кеңестері мен шартты белгілерде облыстық және округтік мәндер «алдын ала, салыстыру жүргізілуде» деп белгіленді.",
why: "58,5 % мәні Асылбек пен Асылбекованың (2014) еңбегінде тікелей көрсетілген; ≈6,07 млн онда жоқ. Екі шама да Демоскоп кестелерімен тексерілді: Қарақалпақ АО-мен бірге Қазақ АКСР-і: 6 503,0 мың, оның ішінде 3 713,4 мың қазақ; Қарақалпақ АО: 304,5 және 85,8 мың; айырмасы: 6 198,5 және 3 627,6 мың (58,5 %).",
source: "1926 ж. Бүкілодақтық санақ, Демоскоп Weekly: rus_nac_26.php?reg=1476 және reg=1572; Асылбек М. Х., Асылбекова Ж. М. (2014)."
}
}, {
date: "2026-10-23",
ru: {
what: "База знаний ИИ-ассистента, фрагмент «Аномальный рост населения»: убрано утверждение, что казахское население Карагандинской области «упало более чем вдвое». Рост общей численности (+41,8 %, Асылбек, Асылбекова, 2014) сохранён; добавлена оценка А. Н. Алексеенко (2003): в Центральном Казахстане (Карагандинская область) потери казахов были наименьшими, 22,5 тыс., или 15,6 %. Алексеенко (2003) добавлен в библиографию. Та же правка внесена в описание линзы Пьянчолы и в пояснения двух вопросов квиза.",
why: "Источника для «более чем вдвое» нет (это следствие несверенных областных данных), а опубликованная оценка Алексеенко говорит о наименьших потерях в этом районе.",
source: "Алексеенко А. Н. Демографические последствия голода в Казахстане начала 30-х годов // Демоскоп Weekly. 2003. № 101–102."
},
en: {
what: "AI assistant knowledge base, “Anomalous population growth”: the claim that the Kazakh population of Karaganda Oblast “fell by more than half” was removed. The total growth (+41.8%, Asylbek & Asylbekova, 2014) is kept; A. N. Alekseenko’s (2003) estimate was added: Kazakh losses in Central Kazakhstan (Karaganda Oblast) were the smallest, 22.5 thousand, or 15.6%. Alekseenko (2003) was added to the bibliography. The same correction was made in Pianciola’s lens description and in the explanations of two quiz questions.",
why: "There is no source for “more than half” (it came from the unverified oblast data), and Alekseenko’s published estimate gives the smallest losses for this region.",
source: "Alekseenko, A. N. (2003). Demoscope Weekly, no. 101–102."
},
kz: {
what: "ЖИ-көмекшінің білім қоры, «Халық санының аномальды өсуі» фрагменті: Қарағанды облысының қазақ халқы «екі еседен астам азайды» деген тұжырым алынып тасталды. Жалпы халықтың өсуі (+41,8 %, Асылбек, Асылбекова, 2014) сақталды; А. Н. Алексеенконың (2003) бағасы қосылды: Орталық Қазақстанда (Қарағанды облысы) қазақтардың шығыны ең аз болды, 22,5 мың, немесе 15,6 %. Алексеенко (2003) библиографияға қосылды. Дәл осы түзету Пьянчола көзқарасының сипаттамасына және викторинаның екі сұрағының түсіндірмесіне енгізілді.",
why: "«Екі еседен астам» деген тұжырымның дереккөзі жоқ (ол салыстырылмаған облыстық деректерден шыққан), ал Алексеенконың жарияланған бағасы бұл аудандағы шығынды ең аз деп көрсетеді.",
source: "Алексеенко А. Н. (2003), Демоскоп Weekly, № 101–102."
}
}, {
date: "2026-10-25",
ru: {
what: "Подложка карты мира пересобрана скриптом scripts/build_world.js: Natural Earth 1:50m (регион, проекция Альберса) и 1:110m (весь мир, Equal Earth), Арал в границах до 1960-х гг. (Natural Earth, lakes_historic), Каракалпакстан пунктиром по современным границам (geoBoundaries). Контур Казахстана теперь объединение 12 областей нашей сетки 1939 г. вместо грубого многоугольника. Демографические значения не менялись.",
why: "Прежняя подложка (1:110m) давала «осколки» и полосу через антимеридиан; контур Казахской АССР не был связан с сеткой атласа.",
source: "Natural Earth (admin_0_countries 1:50m и 1:110m, lakes, lakes_historic); geoBoundaries gbOpen UZB ADM1."
},
en: {
what: "The world map basemap was rebuilt by scripts/build_world.js: Natural Earth 1:50m (region, Albers projection) and 1:110m (whole world, Equal Earth), the Aral Sea within its pre-1960s shoreline (Natural Earth, lakes_historic), Karakalpakstan dashed along modern borders (geoBoundaries). The outline of Kazakhstan is now the union of the 12 oblasts of our 1939 grid instead of a rough polygon. No demographic values changed.",
why: "The previous basemap (1:110m) showed broken shapes and a stripe across the antimeridian; the Kazak ASSR outline was not tied to the atlas grid.",
source: "Natural Earth (admin_0_countries 1:50m and 1:110m, lakes, lakes_historic); geoBoundaries gbOpen UZB ADM1."
},
kz: {
what: "Әлем картасының негізі scripts/build_world.js скриптімен қайта жиналды: Natural Earth 1:50m (аймақ, Альберс проекциясы) және 1:110m (бүкіл әлем, Equal Earth), Арал 1960-жылдарға дейінгі шекарасында (Natural Earth, lakes_historic), Қарақалпақстан қазіргі шекарасы бойынша пунктирмен (geoBoundaries). Қазақстан контуры енді өрескел көпбұрыш емес, біздің 1939 жылғы торымыздағы 12 облыстың бірігуі. Демографиялық мәндер өзгерген жоқ.",
why: "Бұрынғы негіз (1:110m) «сынықтар» мен антимеридиан арқылы өтетін жолақ беретін; Қазақ АКСР-інің контуры атлас торымен байланыспаған.",
source: "Natural Earth (admin_0_countries 1:50m және 1:110m, lakes, lakes_historic); geoBoundaries gbOpen UZB ADM1."
}
}, {
date: "2026-10-25",
ru: {
what: "Библиография по APA 7: ЦСУ СССР указано групповым автором переписи 1926 г.; ссылки Демоскопа и ещё двух сайтов переведены на https; для статей с DOI ссылка дана в виде https://doi.org/…; дата обращения: «Получено 4 мая 2026 г. с URL». В английской версии кириллические ссылки транслитерированы (в том числе источник слоя восстаний: Omarbekov, T. O., 1997).",
why: "Единое оформление по APA 7 и один протокол ссылок; все новые адреса проверены, они открываются.",
source: "APA Publication Manual, 7th ed."
},
en: {
what: "Bibliography to APA 7: the USSR Central Statistical Administration (TsSU SSSR) is the group author of the 1926 census; links to Demoscope and two other sites now use https; articles with a DOI link through https://doi.org/…; retrieval dates read “Retrieved May 4, 2026, from URL”. In English, Cyrillic references are transliterated (including the source of the uprisings layer: Omarbekov, T. O., 1997).",
why: "One APA 7 style and one link protocol; every new address was checked and opens.",
source: "APA Publication Manual, 7th ed."
},
kz: {
what: "APA 7 бойынша библиография: 1926 ж. санақтың топтық авторы ретінде КСРО ОСБ (ЦСУ СССР) көрсетілді; Демоскоп пен тағы екі сайттың сілтемелері https-ке ауыстырылды; DOI бар мақалалар үшін сілтеме https://doi.org/… түрінде берілді; жүгінген күн: «Получено 4 мая 2026 г. с URL». Ағылшын нұсқасында кирилл жазуындағы сілтемелер транслитерацияланды (көтерілістер қабатының дереккөзі де: Omarbekov, T. O., 1997).",
why: "APA 7 бойынша бірыңғай рәсімдеу және бір протокол; барлық жаңа мекенжайлар тексерілді, олар ашылады.",
source: "APA Publication Manual, 7th ed."
}
} ];

// "i" buttons on plaques: one shared popover with the source and method of the figure.
const infoPop = document.createElement("div");
infoPop.className = "info-pop", infoPop.setAttribute("role", "tooltip"), document.body.appendChild(infoPop);
document.addEventListener("click", e => {
const b = e.target.closest(".info-i");
if (!b) return void (e.target.closest(".info-pop") || infoPop.classList.remove("on"));
e.preventDefault(), e.stopPropagation();
if (infoPop.classList.contains("on") && infoPop.dataset.key === b.dataset.info) return void infoPop.classList.remove("on");
infoPop.textContent = t(b.dataset.info), infoPop.dataset.key = b.dataset.info, infoPop.classList.add("on");
const r = b.getBoundingClientRect(), w = Math.min(320, innerWidth - 24), x = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - w / 2));
infoPop.style.width = w + "px", infoPop.style.left = x + "px", infoPop.style.top = r.bottom + 8 + scrollY + "px";
}, !0), document.addEventListener("keydown", e => {
"Escape" === e.key && infoPop.classList.remove("on");
}), window.addEventListener("scroll", () => infoPop.classList.remove("on"), {
passive: !0
});

// Jury entry overlay: shown once on the first visit (remembered in localStorage), reopened from the header.
const INTRO_KEY = "agln_intro_seen";
function renderIntro() {
const box = $("#introBody");
box && (box.innerHTML = `<p class="intro-kicker">${esc(t("introKicker"))}</p>
    <h2 id="introTitle">${esc(t("introTitle"))}</h2>
    <p class="intro-q"><b>${esc(t("introQLabel"))}.</b> ${esc(t("introQ"))}</p>
    <p class="intro-q"><b>${esc(t("introHLabel"))}.</b> ${esc(t("introH"))}</p>
    <p class="sec-t">${esc(t("introResultsLabel"))}</p>
    <ol class="intro-results"><li>${esc(t("introR1"))} ${lvl("census")}</li><li>${esc(t("introR2"))} ${lvl("census")}</li><li>${esc(t("introR3"))} ${lvl("model")}</li></ol>
    <p class="hint">${esc(t("introSrc"))}</p>
    <div class="intro-people"><div><span>${esc(t("introAuthorsLabel"))}</span>${esc(t("introAuthors"))}</div><div><span>${esc(t("introSupLabel"))}</span>${esc(t("introSup"))}</div></div>
    <div class="intro-actions"><button class="btn gold" id="introStart">${esc(t("introStart"))}</button><button class="btn" id="introExplore">${esc(t("introExplore"))}</button></div>`);
}
function openIntro() {
renderIntro(), $("#intro").classList.add("on"), document.body.classList.add("intro-open");
const b = $("#introStart");
b && b.focus();
}
function closeIntro() {
$("#intro").classList.remove("on"), document.body.classList.remove("intro-open");
try {
localStorage.setItem(INTRO_KEY, "1");
} catch (e) {}
}
document.addEventListener("click", e => {
const id = e.target.closest("button") && e.target.closest("button").id;
"introStart" === id ? (closeIntro(), "kz" !== currentView && showView("kz"), S.story >= 0 || storyStart()) : "introExplore" === id || "introClose" === id ? closeIntro() : "bIntro" === id && openIntro(),
e.target.id === "intro" && closeIntro();
}), document.addEventListener("keydown", e => {
"Escape" === e.key && $("#intro").classList.contains("on") && closeIntro();
});

// Approbation (survey) block in the Data & MAUP tab.
const APROB_SHEET = "https://docs.google.com/spreadsheets/d/19Gms0ieTLFT1fN0-udISmtWncfZ_dJgMv88tDOljKH4/edit?usp=sharing";
function renderAprob() {
const box = $("#aprob");
box && (box.innerHTML = `<h3>${esc(t("aprobHeading"))}</h3>
    <p class="hint" style="margin:0 0 10px">${esc(t("aprobMeta"))}</p>
    <div class="aprob-grid">${[ [ 71.9, "aprob1" ], [ 78.1, "aprob2" ], [ 75, "aprob3" ], [ 75, "aprob4" ] ].map(([v, k]) => `<div class="stat"><b>${fmtD(v, v % 1 ? 1 : 0)} %</b><s>${esc(t(k))}</s></div>`).join("")}</div>
    <p class="note" style="margin-top:12px">${esc(t("aprobLimit"))}</p>
    <a class="btn sm" href="${APROB_SHEET}" target="_blank" rel="noopener noreferrer">${esc(t("aprobLink"))}</a>`);
}

// Author contributions, appended to "About the project" (as recorded in the research diary).
const contribHTML = () => `<h4>${esc(t("contribHeading"))}</h4>\n<ul>\n<li><b>${esc(t("contribNameAlizar"))}:</b> ${esc(t("contribAlizar"))}</li>\n<li><b>${esc(t("contribNameAli"))}:</b> ${esc(t("contribAli"))}</li>\n<li><b>${esc(t("contribJointLabel"))}:</b> ${esc(t("contribJoint"))}</li>\n</ul>`;

// ---------- PNG export of a map ----------
// The SVG is cloned with its computed styles inlined (CSS variables of the current theme resolve to real colours),
// drawn on a canvas, and the title, legend and source line are drawn from their on-screen layout, so the PNG
// matches what is on screen in both themes. Fonts: the page uses the system UI stack, available to the canvas too.
const PNG_STYLE_PROPS = [ "fill", "fill-opacity", "stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "stroke-linejoin", "stroke-linecap", "opacity", "paint-order", "font-size", "font-family", "font-weight", "font-style", "text-anchor", "dominant-baseline", "display", "visibility", "letter-spacing", "vector-effect" ];
function svgWithInlineStyles(svg) {
const r = svg.getBoundingClientRect(), clone = svg.cloneNode(!0), src = [ svg, ...svg.querySelectorAll("*") ], dst = [ clone, ...clone.querySelectorAll("*") ];
src.forEach((n, i) => {
const cs = getComputedStyle(n), d = dst[i];
d.removeAttribute("class"), PNG_STYLE_PROPS.forEach(p => {
const v = cs.getPropertyValue(p);
v && d.style.setProperty(p, v);
});
}), clone.setAttribute("xmlns", "http://www.w3.org/2000/svg"), clone.setAttribute("width", Math.round(r.width)), clone.setAttribute("height", Math.round(r.height)),
clone.style.transition = "none", clone.removeAttribute("tabindex");
const g = clone.querySelector("g");
return g && (g.style.transition = "none"), {
text: new XMLSerializer().serializeToString(clone),
w: r.width,
h: r.height
};
}
function wrapText(ctx, text, maxW) {
const words = text.split(/\s+/), lines = [];
let line = "";
return words.forEach(w => {
const tryLine = line ? line + " " + w : w;
ctx.measureText(tryLine).width > maxW && line ? (lines.push(line), line = w) : line = tryLine;
}), line && lines.push(line), lines;
}
// Draw an inline HTML block (the legend) at its on-screen positions: coloured boxes as rectangles, text runs as text.
function drawHtmlBlock(ctx, el, ox, oy) {
const base = el.getBoundingClientRect(), walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
for (let n = walker.currentNode; n; n = walker.nextNode()) if (n.nodeType === 1) {
const cs = getComputedStyle(n), bg = cs.backgroundColor;
if (bg && "rgba(0, 0, 0, 0)" !== bg && "transparent" !== bg) {
const b = n.getBoundingClientRect();
ctx.fillStyle = bg, ctx.fillRect(ox + b.left - base.left, oy + b.top - base.top, b.width, b.height);
}
// borders of legend swatches (outlined area, dashed line)
if ("I" === n.tagName) {
const b = n.getBoundingClientRect(), x = ox + b.left - base.left, y = oy + b.top - base.top, X = x + b.width, Y = y + b.height;
[ [ "Top", x, y, X, y ], [ "Bottom", x, Y, X, Y ], [ "Left", x, y, x, Y ], [ "Right", X, y, X, Y ] ].forEach(([side, x1, y1, x2, y2]) => {
const w = parseFloat(cs[`border${side}Width`]), st = cs[`border${side}Style`];
!w || "none" === st || (ctx.strokeStyle = cs[`border${side}Color`], ctx.lineWidth = w, ctx.setLineDash("dashed" === st ? [ 4, 3 ] : []),
ctx.beginPath(), ctx.moveTo(x1, y1), ctx.lineTo(x2, y2), ctx.stroke());
}), ctx.setLineDash([]);
}
} else if (n.textContent.trim()) {
const p = n.parentElement, cs = getComputedStyle(p), rg = document.createRange();
rg.selectNodeContents(n);
const b = rg.getBoundingClientRect();
ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, ctx.fillStyle = cs.color, ctx.textBaseline = "middle",
ctx.fillText(n.textContent.replace(/\s+/g, " ").trim(), ox + b.left - base.left, oy + b.top - base.top + b.height / 2);
}
}
const PNG_FONTS = {};

async function svgFontStyle() {
const out = [];
for (const w of [ 400, 700 ]) for (const sub of [ "latin", "cyrillic", "cyrillic-ext" ]) {
const url = `/fonts/pt-sans-${sub}-${w}-normal.woff2`;
if (!PNG_FONTS[url]) try {
const b = new Uint8Array(await (await fetch(url)).arrayBuffer());
let bin = "";
for (let i = 0; i < b.length; i += 32768) bin += String.fromCharCode.apply(null, b.subarray(i, i + 32768));
PNG_FONTS[url] = btoa(bin);
} catch (e) {
continue;
}
out.push(`@font-face{font-family:"PT Sans";font-weight:${w};src:url(data:font/woff2;base64,${PNG_FONTS[url]}) format("woff2")}`);
}
return out.join("");
}

async function exportMapPng(kind) {
try {
const isKz = "kz" === kind, svg = $(isKz ? "#svgKz" : "#svgW"), legend = $(isKz ? "#legend" : "#wLegend"), stage = svg.closest(".stage"), sc = getComputedStyle(stage), body = getComputedStyle(document.body), m = svgWithInlineStyles(svg), W = Math.round(m.w), pad = 14, scale = Math.min(2, Math.max(1, window.devicePixelRatio || 1)), font = body.fontFamily, title = isKz ? $("#kzTitle").textContent.trim() : `${t("tabWorld")} · ${($("#segWorld .on") || {}).textContent || ""}`.trim(), source = isKz ? $("#kzSrc").textContent.trim() : t("world" === WS.scope ? "pngSrcWorldWhole" : "pngSrcWorld"), meas = document.createElement("canvas").getContext("2d");
meas.font = `12px ${font}`;
const srcLines = wrapText(meas, source, W - 2 * pad), lb = legend.getBoundingClientRect(), titleH = 34, legendH = Math.ceil(lb.height) + 16, srcH = 16 * srcLines.length + 8, creditH = 22, H = titleH + Math.round(m.h) + legendH + srcH + creditH, cv = document.createElement("canvas");
cv.width = W * scale, cv.height = H * scale;
const ctx = cv.getContext("2d");
ctx.scale(scale, scale), ctx.fillStyle = sc.backgroundColor || body.backgroundColor, ctx.fillRect(0, 0, W, H),
ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#000", ctx.font = `600 14px ${font}`, ctx.textBaseline = "middle",
ctx.fillText(title, pad, titleH / 2);
const img = new Image(), fontCss = await svgFontStyle();
await new Promise((ok, fail) => {
img.onload = ok, img.onerror = fail, img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(m.text.replace(/^(<svg[^>]*>)/, `$1<style>${fontCss}</style>`));
}), ctx.drawImage(img, 0, titleH, m.w, m.h), drawHtmlBlock(ctx, legend, pad, titleH + m.h + 8);
const mute = getComputedStyle(document.documentElement).getPropertyValue("--ink-mute").trim() || "#777";
ctx.fillStyle = mute, ctx.font = `12px ${font}`, ctx.textBaseline = "top", srcLines.forEach((l, i) => ctx.fillText(l, pad, titleH + m.h + legendH + 16 * i)),
ctx.font = `11px ${font}`, ctx.fillText(t("pngCredit") + " · asharshylyk-full.vercel.app", pad, H - creditH + 4);
const blob = await new Promise(ok => cv.toBlob(ok, "image/png")), name = isKz ? `map-kazakhstan-${S.split ? "compare-1926-1939-kazShare" : S.period + "-" + S.metric}.png` : `map-world-${WS.layer}.png`;
await download(name, blob, "image/png");
} catch (err) {
toast(t("toastPngFailed"));
}
}

// One-time hint on phones, on the first touch on a map.
(() => {
const KEY = "agln_map_hint_seen";
let seen = !1;
try {
seen = "1" === localStorage.getItem(KEY);
} catch (e) {}
seen || [ "#svgKz", "#svgW", "#svgS" ].forEach(sel => {
const n = $(sel);
n && n.addEventListener("touchstart", function once() {
if (!matchMedia("(max-width:700px)").matches) return;
[ "#svgKz", "#svgW", "#svgS" ].forEach(s => $(s) && $(s).removeEventListener("touchstart", once));
if (seen) return;
seen = !0, setTimeout(() => toast(t("mapPhoneHint")), 1600);
try {
localStorage.setItem(KEY, "1");
} catch (e) {}
}, {
passive: !0
});
});
})();

function renderDataLog() {
const box = $("#dataLog");
if (!box) return;
const locale = numLoc();
box.innerHTML = DATA_LOG.map(e => {
const L = tr(e), d = new Date(e.date + "T00:00:00").toLocaleDateString(locale);
return `<div style="border-top:1px solid var(--line);padding:10px 0">\n      <p class="sec-t" style="margin:0 0 5px">${esc(d)}</p>\n      <p style="margin:0 0 4px;font-size:13px"><b>${esc(t("logWhat"))}:</b> ${esc(L.what)}</p>\n      <p style="margin:0 0 4px;font-size:12.5px;color:var(--ink-soft)"><b>${esc(t("logWhy"))}:</b> ${esc(L.why)}</p>\n      <p class="hint" style="margin:0"><b>${esc(t("logSource"))}:</b> ${esc(L.source)}</p>\n    </div>`;
}).join("");
}

function buildTable() {
const per = TS.period, cols = columns(per), thead = $("#tbl thead"), tb = $("#tbl tbody");
thead.innerHTML = "<tr>" + cols.map(c => `<th data-k="${c.k}">${esc(c.t)}${TS.sort === c.k ? TS.dir > 0 ? " ▲" : " ▼" : ""}</th>`).join("") + "</tr>";
let rows = KZ[per].slice();
if (TS.sort) {
const c = cols.find(x => x.k === TS.sort);
rows.sort((a, b) => {
const va = c.get(a.p), vb = c.get(b.p);
return (c.txt ? String(va).localeCompare(String(vb), "kz" === LANG ? "kk" : "en" === LANG ? "en" : "ru") : va - vb) * TS.dir;
});
}
tb.innerHTML = rows.map(f => '<tr data-id="' + f.p.id + '">' + cols.map(c => {
const v = c.get(f.p);
return `<td class="${c.cls ? c.cls(v) : ""}">${c.txt ? esc(v) : c.f(v)}</td>`;
}).join("") + "</tr>").join(""), thead.onclick = e => {
const th = e.target.closest("th");
th && (TS.sort === th.dataset.k ? TS.dir *= -1 : (TS.sort = th.dataset.k, TS.dir = 1), 
buildTable());
}, tb.onclick = e => {
const tr2 = e.target.closest("tr");
if (!tr2) return;
const f = KZ[per].find(x => x.p.id === tr2.dataset.id);
f && openRegion(per, f);
};
}

function populateMaupSelects() {
const src = $("#mSrc"), tgt = $("#mTgt"), curSrc = src.value, curTgt = tgt.value;
src.innerHTML = "", tgt.innerHTML = "", KZ[1926].forEach((f, i) => src.appendChild(new Option(pName(f.p), i))), 
KZ[1939].forEach((f, i) => tgt.appendChild(new Option(pName(f.p), i))), "" !== curSrc && null != curSrc && (src.value = curSrc), 
"" !== curTgt && null != curTgt && (tgt.value = curTgt);
}

function calcMaup() {
const i = +$("#mSrc").value, j = +$("#mTgt").value, a = KZ[1926][i], b = KZ[1939][j], inter = MAUP.m[i][j], areaSrc = MAUP.a26[i], w = inter / areaSrc, pop = a.p.kazAbs, frag = pop * w, out = $("#mOut"), sqDeg = "kz" === LANG ? "шаршы °" : "en" === LANG ? "sq.°" : "кв.°";
out.innerHTML = inter <= 1e-4 ? "kz" === LANG ? `<p class="note">«${esc(pName(a.p))}» мен «${esc(pName(b.p))}» қиылыспайды: округ бұл облысқа халық қоспаған. Басқа жұпты таңдаңыз: аймақ карточкасында облыс қай округтерден құралғаны көрсетілген.</p>` : "en" === LANG ? `<p class="note">“${esc(pName(a.p))}” and “${esc(pName(b.p))}” do not intersect: the okrug contributed no population to this oblast. Choose another pair: the region card shows which okrugs formed each oblast.</p>` : `<p class="note">«${esc(pName(a.p))}» и «${esc(pName(b.p))}» не пересекаются: округ не внёс населения в эту область. Выберите другую пару: в карточке области указано, из каких округов она сложилась.</p>` : `\n    <div class="kv"><span>${"kz" === LANG ? "1926 ж. округ аумағы" : "en" === LANG ? "1926 okrug area" : "Площадь округа 1926"}</span><b>${fmtD(areaSrc, 2)} ${sqDeg}</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "Қиылысу аумағы" : "en" === LANG ? "Intersection area" : "Площадь пересечения"}</span><b>${fmtD(inter, 2)} ${sqDeg}</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "Салмақ коэффициенті" : "en" === LANG ? "Weight coefficient" : "Весовой коэффициент"}</span><b>${fmtD(100 * w)} %</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "1926 ж. округтегі қазақтар" : "en" === LANG ? "Kazakhs in the 1926 okrug" : "Казахи в округе 1926"}</span><b>${fmtN(pop)}</b></div>\n    <div style="margin-top:11px;padding:12px;background:var(--panel2);border-radius:9px;text-align:center">\n      <div style="font-size:10.5px;color:var(--ink-mute);letter-spacing:.05em">P<sub>${"kz" === LANG ? "фрагмент" : "en" === LANG ? "fragment" : "фрагмент"}</sub> = P<sub>1926</sub> × (S<sub>${"kz" === LANG ? "қиыл." : "en" === LANG ? "inter." : "пересеч."}</sub> ÷ S<sub>${"kz" === LANG ? "округ" : "en" === LANG ? "okrug" : "округа"}</sub>)</div>\n      <div style="font-size:12px;color:var(--ink-soft);margin:6px 0">${fmtN(pop)} × ${fmtD(w, 4)} =</div>\n      <div style="font-size:27px;font-weight:700;color:var(--gold2);line-height:1.1">${fmtN(frag)}</div>\n      <div style="font-size:10.8px;color:var(--ink-mute);margin-top:3px">${"kz" === LANG ? "қазақтар «" + pName(b.p) + "» облысына ауыстырылады" : "en" === LANG ? "Kazakhs allocated to “" + pName(b.p) + "”" : "казахов переносится в «" + pName(b.p) + "»"}</div>\n    </div>\n    <p class="note" style="margin-top:11px">${"kz" === LANG ? "Болжам: округ ішінде халық тығыздығы бірдей деп есептеледі. Көшпелі халық үшін бұл жеңілдету, және қателіктің бір бөлігі дәл осыдан туындайды. Барлық 96 жұп бойынша қосындыланғанда, бұл процедура үлестірімді 42,46 пайыздық тармаққа ауыстырады." : "en" === LANG ? "The assumption is uniform population density within the okrug. For a nomadic population this is a simplification, and part of the error comes from exactly this. Summed over all 96 pairs, this procedure shifts the distribution by 42.46 percentage points." : "Допущение: равномерная плотность населения внутри округа. Для кочевого населения это упрощение, и часть погрешности берётся именно отсюда. Суммарно по всем 96 парам эта процедура даёт сдвиг распределения на 42,46 п.п."}</p>`;
}

$("#segTable").addEventListener("click", e => {
const b = e.target.closest("button[data-p]");
b && (TS.period = b.dataset.p, TS.sort = null, $$("#segTable button").forEach(x => x.classList.toggle("on", x === b)), 
buildTable());
}), function() {
populateMaupSelects();
const src = $("#mSrc"), tgt = $("#mTgt");
let bi = 0, bj = 0, bv = -1;
MAUP.m.forEach((row, i) => row.forEach((v, j) => {
v > bv && (bv = v, bi = i, bj = j);
})), src.value = bi, tgt.value = bj, $("#mCalc").addEventListener("click", calcMaup), 
calcMaup();
}(), $("#eCsv").addEventListener("click", () => {
let csv = "en" === LANG ? "\ufeffGrid year;Unit;Type;Total population;Kazakhs;Kazakh share %;Kazakhs 1939;Loss %;Total pop. change %;MAUP estimate 1926;Share shift pp\n" : "kz" === LANG ? "﻿Тор жылы;Бірлік;Түрі;Жалпы халық;Қазақтар;Қазақтар үлесі %;Қазақтар 1939;Шығын %;Жалпы өзгеріс %;MAUP-баға 1926;Үлес ауытқысы п.т.\n" : "\ufeffГод сетки;Единица;Тип;Население всего;Казахи;Доля казахов %;Казахи 1939;Потеря %;Изм. общего %;MAUP-оценка 1926;Сдвиг доли п.п.\n";
KZ[1926].forEach(f => {
const p = f.p;
csv += `1926;${pName(p)};${pType(p)};${p.pop};${p.kazAbs};${p.kazShare};;;;;\n`;
}), KZ[1939].forEach(f => {
const p = f.p;
csv += `1939;${pName(p)};${pType(p)};${p.total_1939};${p.kazakh_1926};${p.share1926.toFixed(1)};${p.kazakh_1939};${p.loss};${p.growth.toFixed(1)};${p.interpKaz};${p.shareShift}\n`;
}), download("ashargylyq_" + ("kz" === LANG ? "korsetkishter" : "en" === LANG ? "indicators" : "pokazateli") + ".csv", csv, "text/csv;charset=utf-8");
}), $("#eGeo").addEventListener("click", () => {
const feats = [];
[ "1926", "1939" ].forEach(per => KZ[per].forEach(f => {
feats.push({
type: "Feature",
properties: {
...f.p,
grid: per,
geometry_status: "kz" === LANG ? "қазіргі әкімшілік геометрияға негізделген тірек реконструкция, мұрағаттық кадастр емес" : "en" === LANG ? "a reference reconstruction on modern administrative geometry, not an archival cadastre" : "опорная реконструкция на современной административной геометрии, не архивный кадастр",
source: "Cartography of Collapse · HGIS Asharshylyk"
},
geometry: f.g
});
})), download("ashargylyq_" + ("kz" === LANG ? "shekaralar" : "en" === LANG ? "boundaries" : "granicy") + ".geojson", JSON.stringify({
type: "FeatureCollection",
features: feats
}), "application/geo+json");
}), $("#eMaup").addEventListener("click", () => {
let csv = "\ufeff" + ("kz" === LANG ? "1926 ж. округ \\ 1939 ж. облыс" : "en" === LANG ? "1926 okrug \\ 1939 oblast" : "Округ 1926 \\ Область 1939") + ";" + KZ[1939].map(f => pName(f.p)).join(";") + ";" + ("kz" === LANG ? "Округ аумағы" : "en" === LANG ? "Okrug area" : "Площадь округа") + "\n";
MAUP.m.forEach((row, i) => {
csv += pName(KZ[1926][i].p) + ";" + row.join(";") + ";" + MAUP.a26[i] + "\n";
}), csv += ("kz" === LANG ? "Облыс аумағы" : "en" === LANG ? "Oblast area" : "Площадь области") + ";" + MAUP.a39.join(";") + ";\n",
download("ashargylyq_" + ("kz" === LANG ? "qiylysu_matricasy" : "en" === LANG ? "intersection_matrix" : "matrica_peresechenij") + ".csv", csv, "text/csv;charset=utf-8");
});

const Q = {
list: [],
i: 0,
score: 0,
wrong: [],
answered: !1,
picked: null,
shuffle: !1
};

const shuffled = a => {
for (let i = a.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [ a[j], a[i] ];
}
return a;
};

// Q.list holds { src: index in QUIZ, order: option order }; the text is built in the current language on demand.
function quizItem(it) {
const raw = QUIZ[it.src], L = tr(raw), opts = it.order.map(o => ({
text: L.a[o],
ok: o === raw.c
}));
return {
q: L.q,
e: L.e,
tag: L.tag,
opts: opts,
correct: opts.findIndex(p => p.ok)
};
}

function quizPrepare() {
// Options are shuffled every time, except a natural numeric series (every option has a number): it stays ascending.
Q.list = QUIZ.map((q, idx) => {
const ids = q.ru.a.map((_, i) => i);
return {
src: idx,
order: q.ru.a.every(x => /\d/.test(x)) ? ids : shuffled(ids)
};
}), Q.shuffle && shuffled(Q.list), Q.i = 0, Q.score = 0, Q.wrong = [], Q.answered = !1, Q.picked = null;
}

function quizStart() {
quizPrepare(), $("#qStart").style.display = "none", $("#qDone").style.display = "none",
$("#qPlay").style.display = "", quizRender();
}

const OPT_LETTERS = {
ru: "АБВГ",
en: "ABCD",
kz: "АБВГ"
};

function quizRender() {
const q = quizItem(Q.list[Q.i]);
$("#qPos").textContent = `${"kz" === LANG ? "Сұрақ" : "en" === LANG ? "Question" : "Вопрос"} ${Q.i + 1} ${"kz" === LANG ? "/" : "en" === LANG ? "of" : "из"} ${Q.list.length}`,
$("#qScore").textContent = `${"kz" === LANG ? "Дұрыс:" : "en" === LANG ? "Correct:" : "Верных:"} ${Q.score}`,
$("#qBar").style.width = Q.i / Q.list.length * 100 + "%", $("#qTag").textContent = q.tag,
$("#qQ").textContent = q.q, $("#qExpl").classList.remove("on"), $("#qNext").style.display = "none";
const letters = OPT_LETTERS[LANG] || OPT_LETTERS.ru, box = $("#qOpts");
box.innerHTML = "", q.opts.forEach((o, i) => {
const b = el("button", {
class: "opt",
"data-i": i
});
b.innerHTML = `<span class="k">${letters[i]}</span><span>${esc(o.text)}</span>`,
b.addEventListener("click", () => quizAnswer(i)), box.appendChild(b);
}), Q.answered && quizShowAnswer(q);
}

// Marks the picked and the correct option and shows the explanation (also used when re-rendering in another language).
function quizShowAnswer(q) {
const ok = Q.picked === q.correct;
$$("#qOpts .opt").forEach((b, idx) => {
b.disabled = !0, idx === q.correct ? b.classList.add("ok") : idx === Q.picked && b.classList.add("no");
});
const ex = $("#qExpl");
ex.innerHTML = `<b style="color:${ok ? "var(--good)" : "var(--carmine2)"}">${esc(t(ok ? "quizCorrect" : "quizWrong"))}.</b> ${esc(q.e)}`,
ex.classList.add("on"), $("#qNext").style.display = "", $("#qNext").textContent = Q.i === Q.list.length - 1 ? t("quizFinish") : t("quizNext");
}

function quizAnswer(i) {
if (Q.answered) return;
Q.answered = !0, Q.picked = i;
const q = quizItem(Q.list[Q.i]), ok = i === q.correct;
ok ? Q.score++ : Q.wrong.push({
k: Q.i,
picked: i
}), quizShowAnswer(q), $("#qScore").textContent = `${"kz" === LANG ? "Дұрыс:" : "en" === LANG ? "Correct:" : "Верных:"} ${Q.score}`,
ok && window.confetti && Q.i === Q.list.length - 1 && 0 === Q.wrong.length && confetti({
particleCount: 90,
spread: 68,
origin: {
y: .7
}
});
}

function quizNext() {
Q.i < Q.list.length - 1 ? (Q.i++, Q.answered = !1, Q.picked = null, quizRender()) : quizFinish();
}

function quizFinish(silent = !1) {
$("#qPlay").style.display = "none", $("#qDone").style.display = "";
const pct = Math.round(Q.score / Q.list.length * 100);
$("#qBig").textContent = `${Q.score} / ${Q.list.length}`, $("#qBig").style.color = pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--gold2)" : "var(--carmine2)",
$("#qMsg").textContent = t(100 === pct ? "quizMsg100" : pct >= 80 ? "quizMsg80" : pct >= 50 ? "quizMsg50" : "quizMsgLow");
const rv = $("#qReview");
Q.wrong.length ? rv.innerHTML = `<p class="sec-t">${esc(t("quizReview"))}</p>` + Q.wrong.map(w => {
const q = quizItem(Q.list[w.k]);
return `<div class="rv"><b>${esc(q.q)}</b>\n        ${esc(t("quizYourAnswer"))} <span style="color:var(--carmine2)">${esc(q.opts[w.picked].text)}</span><br>\n        ${esc(t("quizCorrectAnswer"))} <span style="color:var(--good)">${esc(q.opts[q.correct].text)}</span>\n        <s>${esc(q.e)}</s></div>`;
}).join("") : rv.innerHTML = "", !silent && pct >= 80 && window.confetti && confetti({
particleCount: 130,
spread: 78,
origin: {
y: .6
}
});
}

// Language switch: redraw whichever quiz screen is open, keeping the progress.
function quizRelang() {
Q.list.length && ("none" !== $("#qPlay").style.display ? quizRender() : "none" !== $("#qDone").style.display && quizFinish(!0));
}
$("#qGo").addEventListener("click", quizStart), $("#qAgain").addEventListener("click", quizStart), 
$("#qNext").addEventListener("click", quizNext), $("#qBack").addEventListener("click", () => showView("kz")), 
$("#qShuffle").addEventListener("click", () => {
Q.shuffle = !Q.shuffle, $("#qShuffle").classList.toggle("gold", Q.shuffle), toast(Q.shuffle ? t("quizShuffleOn") : t("quizShuffleOff"));
}), $("#qCount").textContent = QUIZ.length;

const MODELS = [ {
id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
ru: "Qwen 2.5 · 1.5B, быстрая (~1,1 ГБ)",
en: "Qwen 2.5 · 1.5B, fast (~1.1 GB)",
kz: "Qwen 2.5 · 1.5B, жылдам (~1,1 ГБ)"
}, {
id: "Qwen2.5-3B-Instruct-q4f16_1-MLC",
ru: "Qwen 2.5 · 3B, точнее (~2,0 ГБ)",
en: "Qwen 2.5 · 3B, more accurate (~2.0 GB)",
kz: "Qwen 2.5 · 3B, дәлірек (~2,0 ГБ)"
}, {
id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
ru: "Llama 3.2 · 3B (~2,3 ГБ)",
en: "Llama 3.2 · 3B (~2.3 GB)",
kz: "Llama 3.2 · 3B (~2,3 ГБ)"
} ], AI = {
engine: null,
loading: !1,
model: MODELS[0].id,
busy: !1,
history: []
}, stem = w => w.toLowerCase().replace(/[ёë]/g, "е").slice(0, "kz" === LANG ? 4 : 5), tokens = s => (s.toLowerCase().match(/[a-zа-яёәғқңөұүһі0-9]{3,}/gi) || []).map(stem), STOP_RU = new Set([ "что", "как", "это", "для", "при", "все", "был", "быть", "esc", "ктo", "где", "поче", "какой", "кака", "какие", "скол", "расс", "why", "the" ]), STOP_EN = new Set([ "what", "how", "this", "that", "for", "with", "are", "was", "were", "the", "and", "who", "why", "which", "about", "does", "did", "when", "where" ]), STOP_KZ = new Set([ "деген", "қалай", "үшін", "бірақ", "кезде", "арқылы", "туралы", "барлық", "болды", "және", "немесе", "қанша", "қандай", "неге", "мынау", "сонда", "дейін", "бұл", "сол" ]);

// Nearly every fragment is about Kazakhs, so this stem does not tell fragments apart.
[ "казах", "kazak", "қазақ" ].forEach(w => [ STOP_RU, STOP_EN, STOP_KZ ].forEach(S => S.add(w)));

[ "қайда", "неге", "кім", "қандай", "қай", "не" ].forEach(w => STOP_KZ.add(w));

const _stopCache = {};
function stopwords() {
return _stopCache[LANG] || (_stopCache[LANG] = new Set([ ...("kz" === LANG ? STOP_KZ : "en" === LANG ? STOP_EN : STOP_RU) ].map(stem)));
}

// Scores every KB fragment: tf-idf over title (x3) and body, plus coverage = share of the query's meaningful words found.
// A fragment counts as relevant only if it covers at least half of those words or its score passes AI_MIN_SCORE
// (both tuned on scripts/ai_eval.js); the ranking also rewards coverage, so a fragment matching one common word loses.
const AI_MIN_COVER = .5, AI_MIN_SCORE = 8, AI_CLOSE = .75;
function retrieveScored(query) {
const KB = KBcur(), stop = stopwords(), q = [ ...new Set(tokens(query).filter(t => !stop.has(t))) ];
if (!q.length) return [];
const df = {};
KB.forEach(p => {
const seen = new Set(tokens(p.title + " " + p.text));
q.forEach(t => {
seen.has(t) && (df[t] = (df[t] || 0) + 1);
});
});
return KB.map(p => {
const tt = tokens(p.title), bt = tokens(p.text);
let s = 0, hit = 0;
return q.forEach(t => {
const idf = Math.log(1 + KB.length / (1 + (df[t] || 0))), inT = tt.filter(x => x === t).length, inB = bt.filter(x => x === t).length;
(inT || inB) && (hit++, s += idf * (3 * inT + Math.min(inB, 4)));
}), {
p: p,
s: s,
cover: hit / q.length,
rank: s * (.5 + hit / q.length)
};
}).filter(o => o.s > 0 && (o.cover >= AI_MIN_COVER || o.s >= AI_MIN_SCORE)).sort((a, b) => b.rank - a.rank);
}

function retrieve(query, k = 4) {
return retrieveScored(query).slice(0, k).map(o => o.p);
}

// One best fragment; the second and third only if their rank is close to the first.
function offlineAnswer(query) {
const all = retrieveScored(query), hits = all.filter((o, i) => 0 === i || i < 3 && o.rank >= AI_CLOSE * all[0].rank).map(o => o.p);
return hits.length ? {
text: hits.map(h => `▸ ${h.title}\n${h.text}`).join("\n\n"),
src: hits.map(h => h.title)
} : {
text: t("aiNoHits"),
src: []
};
}

function chatAdd(role, text, src) {
const m = el("div", {
class: "msg " + ("user" === role ? "u" : "a")
});
if (m.textContent = text, src && src.length) {
const s = el("div", {
class: "src"
});
s.textContent = t("aiSourceLabel") + src.join(" · "), m.appendChild(s);
}
return $("#chat").appendChild(m), $("#chat").scrollTop = $("#chat").scrollHeight, 
m;
}

function setAiState(txt, cls) {
$("#aiState").textContent = txt, $("#aiPill").className = "pill" + (cls ? " " + cls : "");
}

async function ensureEngine() {
if (AI.engine || AI.loading) return AI.engine;
if (!navigator.gpu) return toast(t("toastWebgpuMissing")), null;
AI.loading = !0, $("#aiLoad").disabled = !0, setAiState(t("aiLoading"), "load");
try {
const webllm = await (import("https://esm.run/@mlc-ai/web-llm"));
AI.engine = await webllm.CreateMLCEngine(AI.model, {
initProgressCallback: r => {
const pct = Math.round(100 * (r.progress || 0));
$("#aiBar").style.width = pct + "%", $("#aiProgTxt").textContent = r.text || `${t("aiLoading")} ${pct}%`;
}
}), setAiState(t("aiReady"), "ok"), $("#aiProgTxt").textContent = t("aiLoadedNote"), 
$("#aiBar").style.width = "100%", toast(t("toastModelLoaded"));
} catch (err) {
console.warn("WebLLM unavailable:", err), setAiState(t("aiOffline"), ""), $("#aiProgTxt").textContent = t("toastModelFailed"), 
$("#aiBar").style.width = "0%", toast(t("toastModelFailed"));
}
return AI.loading = !1, $("#aiLoad").disabled = !1, AI.engine;
}

const SYS_RU = "Ты научный ассистент школьного исследовательского проекта «Картография коллапса»: историко-географический анализ Ашаршылыка (голода в Казахстане 1930–1933 гг.) средствами HGIS. Ты программа, языковая модель, работающая в браузере, а не человек: у тебя нет возраста, имени, тела или личной биографии, никогда не выдумывай и не сообщай такие детали о себе.\n\nПравила:\n1. Если приведённый ниже КОНТЕКСТ отвечает на вопрос, отвечай строго на его основе и никогда не выдумывай цифры, имена и даты, которых там нет.\n2. Если контекста нет или он не по вопросу, но вопрос по смыслу связан с темой (казахи, история Казахстана, СССР 1920–1930-х годов, кочевники, коллективизация, голод, историография), ответь кратко из общих исторических знаний и прямо отметь, что это общие сведения, а не данные сайта.\n3. Если вопрос совсем не по теме проекта, вежливо скажи об этом и предложи спросить про регион, историка, цифру или метод.\n4. Если оценка дискуссионная, назови диапазон и скажи, что он дискуссионный.\n5. Отвечай по-русски, кратко и по существу: 2–5 предложений связным текстом, не более 90 слов всего, БЕЗ нумерованных и маркированных списков (если явно не просят список) и без вступлений вроде «Возможно, вы имеете в виду…»: сразу отвечай по делу и заканчивай мысль до конца.\n6. Тема тяжёлая, поэтому пиши уважительно и без сенсационности.", SYS_EN = "You are the research assistant for \"Cartography of Collapse\": a historical-geographic analysis of Asharshylyk (the 1930–1933 famine in Kazakhstan) using HGIS. You are a piece of software, a language model running in the browser, not a human: you have no age, name, body, or personal biography; never invent or state such details about yourself.\n\nRules:\n1. If the CONTEXT below answers the question, base your answer strictly on it and never invent numbers, names, or dates that aren't there.\n2. If there is no context, or it doesn't address the question, but the question is meaningfully related to the topic (Kazakhs, the history of Kazakhstan, the 1920s–1930s USSR, nomadic life, collectivization, famine, historiography), answer briefly using general historical knowledge and clearly note that this is general background, not data from the site.\n3. If the question is entirely unrelated to the project's topic, say so politely and suggest asking about a region, a historian, a figure, or a method instead.\n4. If an estimate is debated, state the range and say that it is debated.\n5. Answer in English, briefly and to the point: 2–5 sentences as flowing prose, no more than 90 words total, with NO numbered or bulleted lists (unless a list is explicitly requested) and no preambles like \"You might mean...\"; get straight to the point and finish the thought.\n6. This is a heavy topic, so write respectfully and without sensationalism.", SYS_KZ = "Сен «Күйреу картографиясы» атты ғылыми-зерттеу жобасының ассистентісің: бұл Ашаршылықтың (1930–1933 жж. Қазақстандағы ашаршылық) HGIS құралдарымен жасалған тарихи-географиялық талдауы. Сен браузерде жұмыс істейтін бағдарлама, тілдік модельсің, адам емессің: сенің жасың, атың, денең немесе жеке өмірбаяның жоқ, мұндай мәліметтерді өзің туралы ешқашан ойдан шығарма және айтпа.\n\nЕрежелер:\n1. Егер төмендегі КОНТЕКСТ сұраққа жауап беретін болса, тек соған сүйеніп жауап бер, онда жоқ сандарды, есімдерді, күндерді ешқашан ойдан шығарма.\n2. Егер контекст жоқ болса немесе сұраққа сәйкес келмесе, бірақ сұрақ тақырыпқа мағыналық жағынан қатысты болса (қазақтар, Қазақстан тарихы, 1920–1930 жж. КСРО, көшпенділер, ұжымдастыру, ашаршылық, тарихнама), жалпы тарихи білім негізінде қысқаша жауап бер және мұның сайт деректері емес, жалпы мәлімет екенін тікелей айт.\n3. Егер сұрақ жобаның тақырыбына мүлде қатысы жоқ болса, сыпайы түрде осыны айт және аймақ, тарихшы, сан немесе әдіс туралы сұрауды ұсын.\n4. Егер баға пікірталастық болса, диапазонды атап, оның пікірталастық екенін айт.\n5. Қазақ тілінде, қысқа әрі нақты жауап бер: 2–5 сөйлем үзіліссіз мәтін түрінде, барлығы 90 сөзден аспасын, нөмірленген немесе таңбаланған тізімдерсіз (тізім арнайы сұралмаса) және «Мүмкін, сіз мынаны айтқыңыз келді...» деген кіріспелерсіз; бірден мәселеге көш және ойды толық аяқта.\n6. Тақырып ауыр, сондықтан құрметпен және сенсацияға салынбай жаз.";

const IDENTITY_RE = /^[\s?!.]*(кто\s+ты|ты\s+кто|что\s+ты(\s+такое|\s+знаешь|\s+умеешь)?|ты\s+что\s+такое|представьс[яи]|расскажи(\s+мне)?\s+о\s+себе|расскажи[,]?\s+что\s+ты(\s+в\s+целом)?\s+знаешь|who\s+are\s+you|what\s+are\s+you|what\s+do\s+you\s+know(\s+about\s+yourself)?|introduce\s+yourself)[\s?!.]*$/i, SELF_BIO_RE = [ /\bмне\s+\d{1,3}\s*(лет|года?)\b[.,;]?\s*/gi, /\bя\s+(являюсь\s+)?[а-яё]*\s*\d{1,3}[-\s]?(летн\w*)\b[.,;]?\s*/gi, /\b(i'?m|i\s+am)\s+\d{1,3}\s*(years?\s*old)\b[.,;]?\s*/gi ];

async function ask(query) {
if (AI.busy || !query.trim()) return;
AI.busy = !0, $("#aiSend").disabled = !0, chatAdd("user", query), $("#aiIn").value = "";
if (IDENTITY_RE.test(query.trim())) {
return chatAdd("bot", t("aiIdentity")), AI.busy = !1, void ($("#aiSend").disabled = !1);
}
const hits = retrieve(query, 4), ctx = hits.map(h => `[${h.title}]\n${h.text}`).join("\n\n");
const hasRealWords = tokens(query).length > 0;
if (!AI.engine || (!hits.length && !hasRealWords)) {
const a = offlineAnswer(query);
return chatAdd("bot", a.text, a.src), AI.busy = !1, void ($("#aiSend").disabled = !1);
}
const node = chatAdd("bot", "…");
try {
const noCtxNote = "kz" === LANG ? "Бұл сұрақ бойынша сайттан сәйкес материалдар табылмады. Жоғарыдағы 2 немесе 3-ережені орында және осы ескертпені өзін айтпа немесе келтірме." : "en" === LANG ? "No matching excerpts were found on the site for this question. Follow rule 2 or 3 above and do not mention or quote this note itself." : "По этому вопросу на сайте не нашлось подходящих материалов. Следуй правилу 2 или 3 выше и не упоминай и не цитируй саму эту пометку.", userMsg = ctx ? ("kz" === LANG ? `ЖОБА МАТЕРИАЛДАРЫНАН АЛЫНҒАН КОНТЕКСТ:\n${ctx}\n\nСҰРАҚ: ${query}` : "en" === LANG ? `CONTEXT FROM THE PROJECT'S MATERIAL:\n${ctx}\n\nQUESTION: ${query}` : `КОНТЕКСТ ИЗ МАТЕРИАЛОВ ПРОЕКТА:\n${ctx}\n\nВОПРОС: ${query}`) : ("kz" === LANG ? `${noCtxNote}\n\nСҰРАҚ: ${query}` : "en" === LANG ? `${noCtxNote}\n\nQUESTION: ${query}` : `${noCtxNote}\n\nВОПРОС: ${query}`), stream = await AI.engine.chat.completions.create({
messages: [ {
role: "system",
content: "kz" === LANG ? SYS_KZ : "en" === LANG ? SYS_EN : SYS_RU
}, {
role: "user",
content: userMsg
} ],
temperature: .3,
max_tokens: 320,
stream: !0
});
let out = "", truncated = !1;
for await (const chunk of stream) {
out += chunk.choices?.[0]?.delta?.content || "";
"length" === chunk.choices?.[0]?.finish_reason && (truncated = !0);
node.textContent = out, $("#chat").scrollTop = $("#chat").scrollHeight;
}
SELF_BIO_RE.forEach(re => out = out.replace(re, "")), out = out.trim(), node.textContent = out;
if (truncated && out && (node.textContent = out + " …"), out || (node.textContent = offlineAnswer(query).text), hits.length) {
const s = el("div", {
class: "src"
});
s.textContent = t("aiSourceLabel") + hits.map(h => h.title).join(" · "), node.appendChild(s);
}
} catch (err) {
console.warn(err);
const a = offlineAnswer(query);
node.textContent = a.text;
}
AI.busy = !1, $("#aiSend").disabled = !1;
}

function askAbout(topic) {
showView("ai"), $("#aiIn").value = t("aiAsk") + topic, setTimeout(() => ask(t("aiAsk") + topic), 120);
}

function rebuildAiModels() {
const sel = $("#aiModel");
if (!sel) return;
const cur = sel.value;
sel.innerHTML = "", MODELS.forEach(m => sel.appendChild(new Option(m[LANG] || m.ru, m.id))), 
cur && (sel.value = cur);
const box = $("#sugg");
box && (box.innerHTML = "", aiSuggestions().forEach(q => {
const b = el("button");
b.textContent = q, b.addEventListener("click", () => ask(q)), box.appendChild(b);
})), $("#aiNote").textContent = navigator.gpu ? t("aiNoteGpu") : t("aiNoteNoGpu"), navigator.gpu || ($("#aiLoad").disabled = !0, $("#aiLoad").title = t("aiLoadNoGpu"), $("#aiProgTxt").textContent = t("aiLoadNoGpu"));
}

function aiSuggestions() {
return "kz" === LANG ? [ "MAUP деген не, қарапайым тілмен айтқанда?", "Неге Қарағанды облысында халық саны өсті?", "Қазақтар қайда көшіп кетті?", "Кэмерон мен Омарбеков пікірлері неімен ерекшеленеді?", "Қанша адам қаза тапты және неге бағалар әртүрлі?" ] : "en" === LANG ? [ "What is MAUP in simple terms?", "Why did the population grow in Karaganda Oblast?", "Where did Kazakhs migrate to?", "How does Cameron differ from Omarbekov?", "How many died, and why do estimates differ?" ] : [ "Что такое MAUP простыми словами?", "Почему в Карагандинской области росло население?", "Куда откочёвывали казахи?", "Чем Кэмерон расходится с Омарбековым?", "Сколько погибло и почему оценки разные?" ];
}

function renderAbout() {
$("#aboutBody").innerHTML = "kz" === LANG ? '\n<p>«Күйреу картографиясы»: Ашаршылықтың (1930–1933 жылдардағы Қазақстандағы ашаршылықтың) тарихи ГАЖ (HGIS) құралдарымен жасалған кеңістіктік-демографиялық талдауы. Жұмыс бір әдіснамалық сұраққа жауап береді: <b>апат географиясы туралы қорытындылар деректер топтастырылған әкімшілік торға қаншалықты тәуелді?</b></p>\n\n<h4>Зерттеу нені көрсетеді</h4>\n<p>1926 жылғы санақ Қазақ АКСР-ін 8 округ арқылы, ал 1939 жылғы санақ 12 облыс арқылы сипаттайды. Аумақ бір, адамдар бір, бірақ бөліну әртүрлі. 1926 жылғы деректерді ареалдық интерполяция әдісімен (8 × 12 матрицасы: «округ — облыс» 96 жұбы, оның 37-сінде қиылысу ауданы нөлден үлкен) 1939 жылғы торға көшіргенде, біз үлестердің жиынтық ауытқуын <b>42,46 пайыздық тармақ</b> және ұқсамау индексін <b>21,2 %</b> алдық. Басқаша айтқанда, тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің бестен бірі «көшіп кетеді». Бұл тарихи материалдағы Modifiable Areal Unit Problem дәл өзі.</p>\n\n<h4>Үш тарихнамалық көзқарас</h4>\n<ul>\n<li><b>Сара Кэмерон:</b> ашаршылық көшпелі шаруашылықтың құрып кетуінің салдары; эпицентр мал шаруашылығының үлесі жоғары жерде.</li>\n<li><b>Никколо Пьянчола:</b> империялық басымдықтар иерархиясы; сондықтан өнеркәсіп пен лагерь аудандарында «аномальды өсім» байқалады.</li>\n<li><b>Талас Омарбеков:</b> қазақтардың субъектілігі мен қарсылығы; 1929–1931 жж. көтеріліс ошақтарының шығын тереңдігімен байланысы.</li>\n</ul>\n\n<h4>Қорғауда тікелей айту керек адал ескертулер</h4>\n<ul>\n<li><b>Шекаралар: мұрағаттық кадастр емес.</b> Геометрия тірек реконструкция ретінде құрылған: 1926 және 1939 жылдардың тарихи бірліктеріне сәйкес біріктірілген қазіргі әкімшілік контурлар (geoBoundaries). Нақты тарихи шекаралар өзгеше болған.</li>\n<li><b>Атрибуттар мен геометрия бөлек.</b> Демографиялық көрсеткіштер контурлардан бөлек сақталады, шекара реконструкциясы сандардың дереккөзі ретінде қабылданбауы үшін.</li>\n<li><b>Әртүрлі базалық қорытындылар.</b> 1926 және 1939 жылдардың атрибут жиынтықтары әртүрлі көздерден алынған, сондықтан абсолютті сомаларды емес, үлестерді салыстырған дұрысырақ.</li>\n<li><b>Интерполяция болжамы.</b> Ареалдық интерполяция бірлік ішінде тығыздықтың бірдей болуын болжайды. Көшпелі халық үшін бұл жеңілдету, және қателіктің бір бөлігі дәл осыдан туындайды.</li>\n<li><b>Көші-қонның елдер бойынша бөлінуі: пікірталастық баға.</b> С. Кэмерон бағыттар бойынша дәл санақты ашық зерттеу мәселесі деп тікелей атайды.</li>\n<li><b>Шығын бағалары алшақтайды.</b> Қазақ халқының қайтарымсыз шығыны ≈1,3–2,3 млн (әртүрлі авторлардың бағалары); А. Н. Алексеенко: 1,5–1,84 млн. Жоғарырақ сандар жекелеген авторларға тиесілі (Ж. Әбілхожин, М. Қозыбаев, М. Тәтімов: 3,25 млн; Х. М. Әбжанов: 4 млн-ға дейін). Біз бір «дұрыс» санды емес, атрибуциясы бар диапазонды береміз.</li>\n<li><b>Облыстық деректер.</b> Облыстық көрсеткіштер атластың жұмыс деректер жиынтығынан алынған; облыстар бойынша жарияланған санақ қорытындыларымен салыстыру жүргізілуде, деректер өзгерістері журналын қараңыз.</li>\n</ul>\n\n<h4>Деректер мен технологиялар</h4>\n<ul>\n<li>Шекаралар: geoBoundaries (тірек геометрия), әлем картасы үшін Natural Earth 1:50m («Бүкіл әлем» көрінісі үшін 1:110m).</li>\n<li>Проекциялар: Қазақстан мен әлем картасының аймақтық көрінісі үшін Альберстің тең аумақты конустық проекциясы, «Бүкіл әлем» көрінісі үшін Equal Earth. Барлығы тең аумақты, сондықтан аудандарды салыстыру дұрыс.</li>\n<li>Есептеулер: ареалдық интерполяция, ұқсамау индексі, квантильдік жіктеу.</li>\n<li>Қолданба: бір дербес HTML-файл. Көмекшінің тілдік моделі браузерде WebGPU арқылы жұмыс істейді, сондықтан деректер еш жерге жіберілмейді.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">Жобаның барлық деректері ашық: «Деректер және MAUP» бөлімі көрсеткіштерді CSV форматында, шекараларды GeoJSON форматында және полигон қиылысу матрицасын жүктеп алуға мүмкіндік береді.</p>' : "en" === LANG ? '\n<p>"Cartography of Collapse" is a spatial-demographic analysis of Asharshylyk, the 1930–1933 famine in Kazakhstan, carried out using historical GIS (HGIS). The work answers one methodological question: <b>how much do conclusions about the geography of the catastrophe depend on the administrative grid the data is grouped by?</b></p>\n\n<h4>What the study shows</h4>\n<p>The 1926 census describes the Kazak ASSR through 8 okrugs; the 1939 census, through 12 oblasts. The territory is the same, the people are the same, but the layout differs. Carrying the 1926 data onto the 1939 grid by areal interpolation (an 8 × 12 matrix: 96 okrug–oblast pairs, 37 of them with a non-zero intersection area) produces a total share shift of <b>42.46 percentage points</b> and a dissimilarity index of <b>21.2%</b>. In other words, changing the grid "relocates" a fifth of the entire spatial distribution of the population. This is the Modifiable Areal Unit Problem on historical material.</p>\n\n<h4>Three historiographic lenses</h4>\n<ul>\n<li><b>Sarah Cameron:</b> the famine as a consequence of the destruction of the nomadic economy; the epicenter is where the share of pastoralism was highest.</li>\n<li><b>Niccolò Pianciola:</b> an imperial hierarchy of priorities; hence the "anomalous growth" in industrial and camp districts.</li>\n<li><b>Talas Omarbekov:</b> Kazakh agency and resistance; the link between the centers of the 1929–1931 uprisings and the depth of the losses.</li>\n</ul>\n\n<h4>Honest limitations worth stating in a defense</h4>\n<ul>\n<li><b>The boundaries are not an archival cadastre.</b> The geometry is built as a reference reconstruction: modern administrative outlines (geoBoundaries), merged under the historical units of 1926 and 1939. The real historical boundaries differed.</li>\n<li><b>Attributes and geometry are kept separate.</b> Demographic figures are stored apart from the outlines, so the boundary reconstruction is never mistaken for the source of the numbers.</li>\n<li><b>Different base totals.</b> The 1926 and 1939 attribute sets come from different sources, so it is more accurate to compare shares rather than absolute sums.</li>\n<li><b>The interpolation assumption.</b> Areal interpolation assumes uniform density within a unit. For a nomadic population this is a simplification, and part of the error comes from exactly this.</li>\n<li><b>The breakdown of migrations by country is a debated estimate.</b> S. Cameron explicitly calls an exact count by destination an open research question.</li>\n<li><b>Loss estimates diverge.</b> Irrecoverable losses of the Kazakh population are ≈1.3–2.3 million (estimates by different authors); A. N. Alekseenko: 1.5–1.84 million. Higher figures are individual authors’ estimates (Zh. Abylkhozhin, M. Kozybaev, M. Tatimov: 3.25 million; Kh. M. Abzhanov: up to 4 million). We give the range with attribution, not a single "correct" figure.</li>\n<li><b>Oblast data.</b> Oblast-level figures are the atlas’s working dataset; cross-checking against the published census results by oblast is in progress, see the data changelog.</li>\n</ul>\n\n<h4>Data and technology</h4>\n<ul>\n<li>Boundaries: geoBoundaries (reference geometry), Natural Earth 1:50m for the world map (1:110m for the whole-world view).</li>\n<li>Projections: the Albers equal-area conic for Kazakhstan and for the regional world map, Equal Earth for the whole-world view. All of them are equal-area, so comparing areas is valid.</li>\n<li>Calculations: areal interpolation, dissimilarity index, quantile classification.</li>\n<li>Application: a single self-contained HTML file. The assistant\'s language model runs in the browser via WebGPU, so no data is sent anywhere.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">All of the project\'s data is open: the "Data & MAUP" section lets you export the indicators as CSV, the boundaries as GeoJSON, and the polygon-intersection matrix.</p>' : '\n<p>«Картография коллапса»: пространственно-демографический анализ Ашаршылыка, голода в Казахстане 1930–1933 годов, выполненный средствами исторической ГИС (HGIS). Работа отвечает на один методологический вопрос: <b>насколько выводы о географии катастрофы зависят от административной сетки, по которой сгруппированы данные?</b></p>\n\n<h4>Что показывает исследование</h4>\n<p>Перепись 1926 года описывает Казакскую АССР через 8 округов, перепись 1939 года через 12 областей. Территория одна, люди одни, но нарезка разная. Перенеся данные 1926 года на сетку 1939 года методом ареальной интерполяции (матрица 8 × 12: 96 пар «округ — область», из них 37 с ненулевой площадью пересечения), мы получили суммарный сдвиг долей в <b>42,46 процентных пункта</b> и индекс несходства <b>21,2 %</b>. Иными словами, при смене сетки «переезжает» пятая часть всего пространственного распределения населения. Это и есть Modifiable Areal Unit Problem на историческом материале.</p>\n\n<h4>Три историографические линзы</h4>\n<ul>\n<li><b>Сара Кэмерон:</b> голод как следствие уничтожения кочевого хозяйства; эпицентр там, где выше доля скотоводства.</li>\n<li><b>Никколо Пьянчола:</b> имперская иерархия приоритетов; отсюда «аномальный рост» в промышленных и лагерных районах.</li>\n<li><b>Талас Омарбеков:</b> субъектность казахов и сопротивление; связь очагов восстаний 1929–1931 гг. с глубиной потерь.</li>\n</ul>\n\n<h4>Честные ограничения, которые нужно называть на защите</h4>\n<ul>\n<li><b>Границы: не архивный кадастр.</b> Геометрия построена как опорная реконструкция: современные административные контуры (geoBoundaries), объединённые под исторические единицы 1926 и 1939 годов. Реальные исторические границы отличались.</li>\n<li><b>Атрибуты и геометрия разделены.</b> Демографические показатели хранятся отдельно от контуров, чтобы реконструкция границ не выдавалась за источник цифр.</li>\n<li><b>Разные базовые итоги.</b> Наборы атрибутов 1926 и 1939 годов происходят из разных источников, поэтому корректнее сравнивать доли, а не абсолютные суммы.</li>\n<li><b>Допущение интерполяции.</b> Ареальная интерполяция предполагает равномерную плотность внутри единицы. Для кочевого населения это упрощение, и часть погрешности берётся именно отсюда.</li>\n<li><b>Разбивка откочёвок по странам: дискуссионная оценка.</b> С. Кэмерон прямо называет точный подсчёт по направлениям открытым исследовательским вопросом.</li>\n<li><b>Оценки потерь расходятся.</b> Безвозвратные потери казахского населения ≈1,3–2,3 млн (оценки разных авторов); А. Н. Алексеенко: 1,5–1,84 млн. Более высокие цифры принадлежат отдельным авторам (Ж. Абылхожин, М. Козыбаев, М. Татимов: 3,25 млн; Х. М. Абжанов: до 4 млн). Мы приводим диапазон с атрибуцией, а не одну «правильную» цифру.</li>\n<li><b>Областные данные.</b> Областные показатели взяты из рабочего набора данных атласа; сверка с опубликованными итогами переписей по областям ведётся, см. журнал изменений данных.</li>\n</ul>\n\n<h4>Данные и технологии</h4>\n<ul>\n<li>Границы: geoBoundaries (опорная геометрия), Natural Earth 1:50m для карты мира (1:110m для вида «Весь мир»).</li>\n<li>Проекции: равновеликая коническая проекция Альберса для Казахстана и для региональной карты мира, Equal Earth для вида «Весь мир». Все они равновеликие, поэтому сравнение площадей корректно.</li>\n<li>Расчёты: ареальная интерполяция, индекс несходства, квантильная классификация.</li>\n<li>Приложение: один самодостаточный HTML-файл. Языковая модель ассистента работает в браузере через WebGPU, поэтому данные никуда не отправляются.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">Все данные проекта открыты: раздел «Данные и MAUP» позволяет выгрузить показатели в CSV, границы в GeoJSON и матрицу пересечений полигонов.</p>';
$("#aboutBody").insertAdjacentHTML("beforeend", contribHTML());
}

rebuildAiModels(), $("#aiModel").addEventListener("change", () => {
AI.model = $("#aiModel").value, AI.engine = null, $("#aiBar").style.width = "0%", 
$("#aiProgTxt").textContent = t(navigator.gpu ? "aiNotLoaded" : "aiLoadNoGpu"), setAiState(t("aiOffline"), "");
}), $("#aiLoad").addEventListener("click", ensureEngine), $("#aiSend").addEventListener("click", () => ask($("#aiIn").value)), 
$("#aiIn").addEventListener("keydown", e => {
"Enter" === e.key && ask($("#aiIn").value);
}), chatAdd("bot", t("aiGreeting")), $("#chat .msg") && $("#chat .msg").setAttribute("data-greeting", "1"), renderAbout(), $("#bAbout").addEventListener("click", () => modalOpen("mAbout")), 
$("#langMenu").addEventListener("click", e => {
const b = e.target.closest(".langopt");
b && (setLang(b.dataset.lang), $("#langMenu").classList.remove("on"));
}), $("#bLang").addEventListener("click", e => {
e.stopPropagation(), $("#langMenu").classList.toggle("on");
}), document.addEventListener("click", e => {
e.target.closest(".langwrap") || $("#langMenu").classList.remove("on");
}), applyPaletteVars(), applyStaticI18n(), syncPeriodUI(), renderMarks(), renderKz();

// First visit: show the jury entry overlay once.
(() => {
let seen = !1;
try {
seen = "1" === localStorage.getItem(INTRO_KEY);
} catch (e) {}
seen || openIntro();
})();
