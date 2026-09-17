let LANG = "ru";

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
btnThemeTitle: "Светлая / тёмная тема",
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
btnStoryStart: "▶ StoryMap: сценарий защиты",
btnStoryStop: "⏸ Остановить тур",
btnSplit: "⇔ Сплит 1926 / 1939",
hintStory: "StoryMap проводит через шесть шагов исследования: от степи 1926 года до методологического вывода о MAUP.",
zoomInTitle: "Приблизить",
zoomOutTitle: "Отдалить",
zoomReset: "Сброс",
sidelblL: "1926 · округа",
sidelblR: "1939 · области",
ariaMapKz: "Карта Казахстана",
ariaMapWorld: "Карта мира",
ariaMapSchools: "Карта историографических линз",
disclaimer1926: "Границы округов 1926 года — опорная реконструкция: современная административная геометрия (geoBoundaries), объединённая под исторические единицы. Это не архивный кадастровый shapefile. Демографические атрибуты хранятся отдельно от геометрии.",
disclaimer1939: "Границы областей 1939 года — опорная реконструкция на современной геометрии. Атрибуты 1926 и 1939 годов происходят из разных источников с разными базовыми итогами, поэтому корректнее сравнивать доли, а не абсолютные суммы.",
secWorldLayer: "Слой карты мира",
segFlows: "Откочёвки",
segFamines: "Голод 1930-х",
secDirections: "Направления",
dirAbroad: "За границу",
dirSoviet: "В республики СССР",
hintFlows: "Толщина линии — оценочный масштаб потока. Наведите на линию или точку, чтобы увидеть диапазон и пояснение.",
hintFamines: "Размер круга — доля погибших от численности населения региона. Казахстан даёт наибольшую относительную потерю среди народов СССР.",
secFlowSummary: "Итог откочёвок",
kvLeft: "Покинули республику",
kvReturned: "Вернулись позднее",
kvPermanent: "Безвозвратно",
kvAbroadStayed: "Остались за границей",
noteFlowsDiscuss: "Разбивка по конкретным направлениям — дискуссионная оценка. С. Кэмерон прямо называет точный подсчёт по странам открытым исследовательским вопросом.",
noteProjection: "Проекция Equal Earth (равновеликая), центральный меридиан 65° в.д. Равновеликая проекция выбрана намеренно: она не искажает соотношение площадей, поэтому сравнение территорий на карте корректно. Границы стран — современные (Natural Earth, 110 м), приведены как географическая привязка, а не как политическая карта 1930-х годов.",
schoolsHeading: "Три линзы на одну катастрофу",
schoolsIntro: "Историки расходятся не в том, был ли голод, а в том, что считать его механизмом. Выберите школу, и карта подсветит регионы, которые оказываются в центре именно её объяснения. Это и есть смысл историографического раздела: одни и те же данные, разные вопросы к ним, разная география ответа.",
chooseSchool: "Выберите школу",
chooseSchoolHint: "Нажмите на карточку выше, чтобы увидеть развёрнутый тезис и подсветку на карте.",
focusRegions: "Регионы в фокусе этой линзы",
askAssistantSchool: "Спросить ассистента об этой школе",
schoolCaptionDefault: "Карта потерь казахского населения по областям 1939 года. Выберите школу выше.",
biblioHeading: "Библиография и источники",
biblioIntro: "Подборка работ, на которых основаны историографические интерпретации, демографический контекст и методологические решения атласа. Ссылки открываются в новой вкладке.",
biblioOpen: "Открыть источник ↗",
biblioAccessNote: "Может потребовать доступ через библиотеку или институциональную подписку.",
dataHeading: "Главный результат: сетка меняет вывод",
statShiftSum: "Суммарный сдвиг долей",
statShiftUnit: "процентных пункта",
statDissim: "Индекс несходства",
statDissimSub: "пятая часть распределения",
statIntersections: "Пересечений полигонов",
statIntersectionsSub: "8 округов × 12 областей",
statCoverage: "Покрытие площади",
statCoverageSub: "сетки совпадают по территории",
dataIntro: "Одна территория, одни люди, две административные сетки. При переносе казахского населения 1926 года с сетки 8 округов на сетку 12 областей суммарный сдвиг долей составляет 42,46 п.п., а индекс несходства — 21,2 %. Практический смысл: если бы исследователь работал только с сеткой 1939 года, он получил бы другую карту эпицентра катастрофы, чем работая с сеткой 1926 года. Граница определяет вывод — это и есть Modifiable Areal Unit Problem.",
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
quizTag: "Для школьников",
quizHeading: "Проверьте, что вы поняли",
quizIntro: "Квиз по материалам сайта: карта, данные переписей, историография и методология HGIS. После каждого ответа даётся объяснение со ссылкой на источник, а в конце — разбор ошибок.",
quizStatQuestions: "Вопросов",
quizStatFormat: "Формат",
quizStatFormatSub: "один верный",
quizStatFormatVal: "4 варианта",
quizStatTime: "Время",
quizStatTimeVal: "Без лимита",
quizGo: "Начать квиз",
quizShuffle: "Перемешать вопросы",
quizShuffleOn: "Вопросы и варианты будут перемешаны",
quizShuffleOff: "Порядок вопросов — как в банке",
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
aiGreeting: "Здравствуйте! Я отвечаю по материалам этого исследования: карты, переписи 1926 и 1939 годов, откочёвки, историография и метод HGIS. Задайте вопрос или выберите подсказку ниже.\n\nЧтобы ответы генерировала языковая модель прямо в вашем браузере — нажмите «Загрузить модель». Без неё я отвечаю точными выдержками из базы знаний.",
aiSourceLabel: "Источник в материалах сайта: ",
aiNoHits: "Не нашёл в материалах сайта ничего по этому запросу. Попробуйте спросить про конкретный регион (например, «Карагандинская область»), про цифру (потери, откочёвки, скот), про историка (Кэмерон, Пьянчола, Омарбеков) или про метод (MAUP, ареальная интерполяция).",
aiIdentity: "Я — ИИ-ассистент проекта «Картография коллапса»: языковая модель, которая работает прямо в вашем браузере (данные никуда не отправляются) и отвечает на вопросы по материалам этого сайта — картам, переписям 1926 и 1939 годов, откочёвкам, историографии Ашаршылыка и методу HGIS. Спросите про регион, историка, цифру или метод.",
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
toastSplitHint: "Слева — сетка 8 округов 1926 г., справа — 12 областей 1939 г. Тяните разделитель.",
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
maxLoss: "Максимум потерь",
anomalyGrowth: "Аномальный рост",
ofOblasts: "из 12",
grewOverall: "областей выросли по общему населению",
byOkrugsGrid: "сетка 1926 года",
byOblastsGrid: "сетка 1939 года",
toKazakhsShare: "% населения",
toThousandKm: "к 1933 г. — около 1/10",
abroadDest: "Зарубежных направлений",
sovietDest: "Внутрисоюзных",
biggestDest: "Крупнейшее направление",
returnedShare: "Доля вернувшихся",
relLoss: "Относительная потеря",
absMax: "Абсолютный максимум",
deathEstimates: "Оценки жертв в КазАССР",
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
maupNote: "Ареальная интерполяция даёт для этой области {a} казахов в 1926 г. вместо {b} по атрибуту — расхождение {c} %. Это прямая иллюстрация MAUP.",
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
legendFlowsThickness: "толщина — оценочный масштаб потока",
legendFamineKz: "Казахская АССР",
legendFamineOther: "другие регионы СССР",
legendFamineNon: "вне СССР, иные причины",
famineDeathShare: "погибших от населения региона",
famineVictims: "Жертвы:",
faminePop: "население",
kzAssrLabel: "Казахская АССР",
tipUprising: "восстание",
tipUprisingYear: "год. Одно из более чем 380 выступлений 1929–1931 гг.",
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
btnThemeTitle: "Light / dark theme",
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
btnStoryStart: "▶ StoryMap: defense scenario",
btnStoryStop: "⏸ Stop the tour",
btnSplit: "⇔ Split 1926 / 1939",
hintStory: "StoryMap walks through six steps of the research: from the 1926 steppe to the methodological conclusion about MAUP.",
zoomInTitle: "Zoom in",
zoomOutTitle: "Zoom out",
zoomReset: "Reset",
sidelblL: "1926 · okrugs",
sidelblR: "1939 · oblasts",
ariaMapKz: "Map of Kazakhstan",
ariaMapWorld: "World map",
ariaMapSchools: "Map of historiographic lenses",
disclaimer1926: "The 1926 okrug boundaries are a reference reconstruction: modern administrative geometry (geoBoundaries), merged under the 1926 historical units. This is not an archival cadastral shapefile. Demographic attributes are stored separately from the geometry.",
disclaimer1939: "The 1939 oblast boundaries are a reference reconstruction on modern geometry. The 1926 and 1939 attribute sets come from different sources with different base totals, so comparing shares rather than absolute sums is more accurate.",
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
noteProjection: "Equal Earth projection (equal-area), central meridian 65°E. An equal-area projection was chosen deliberately: it does not distort area ratios, so comparing territories on the map is valid. Country borders are modern (Natural Earth, 110m) and serve as geographic reference, not a political map of the 1930s.",
schoolsHeading: "Three lenses on one catastrophe",
schoolsIntro: "Historians disagree not about whether the famine happened, but about what should count as its mechanism. Choose a school, and the map will highlight the regions central to that particular explanation. That is the point of this section: the same data, different questions asked of it, a different geography of the answer.",
chooseSchool: "Choose a school",
chooseSchoolHint: "Click a card above to see the full thesis and the corresponding highlight on the map.",
focusRegions: "Regions in focus for this lens",
askAssistantSchool: "Ask the assistant about this school",
schoolCaptionDefault: "Map of Kazakh population loss by 1939 oblast. Choose a school above.",
biblioHeading: "Bibliography and sources",
biblioIntro: "A selection of works underlying the atlas’s historiographic interpretations, demographic context, and methodological choices. Links open in a new tab.",
biblioOpen: "Open source ↗",
biblioAccessNote: "May require library or institutional access.",
dataHeading: "The main result: the grid changes the conclusion",
statShiftSum: "Total share shift",
statShiftUnit: "percentage points",
statDissim: "Dissimilarity index",
statDissimSub: "a fifth of the distribution",
statIntersections: "Polygon intersections",
statIntersectionsSub: "8 okrugs × 12 oblasts",
statCoverage: "Area coverage",
statCoverageSub: "the grids match by territory",
dataIntro: "One territory, the same people, two administrative grids. Reallocating the 1926 Kazakh population from the 8-okrug grid onto the 12-oblast grid produces a total share shift of 42.46 points, and a dissimilarity index of 21.2%. In practice: a researcher working only with the 1939 grid would get a different map of the catastrophe’s epicenter than one working with the 1926 grid. The boundary determines the conclusion — that is the Modifiable Areal Unit Problem.",
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
quizShuffleOn: "Questions and options will be shuffled",
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
aiGreeting: "Hello! I answer using this research’s material: the maps, the 1926 and 1939 censuses, the migrations, the historiography, and the HGIS method. Ask a question or pick a suggestion below.\n\nTo have a language model generate answers right in your browser — click “Load model”. Without it I answer with precise excerpts from the knowledge base.",
aiSourceLabel: "Source in the site’s material: ",
aiNoHits: "I couldn’t find anything on the site about this. Try asking about a specific region (e.g. “Karaganda Oblast”), a figure (losses, migrations, livestock), a historian (Cameron, Pianciola, Omarbekov), or a method (MAUP, areal interpolation).",
aiIdentity: "I'm the AI assistant for \"Cartography of Collapse\": a language model that runs right in your browser (nothing is sent anywhere) and answers questions using this site's material — the maps, the 1926 and 1939 censuses, the migrations, the historiography of Asharshylyk, and the HGIS method. Ask about a region, a historian, a figure, or a method.",
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
toastSplitHint: "Left — the 1926 grid of 8 okrugs, right — the 1939 grid of 12 oblasts. Drag the divider.",
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
maxLoss: "Largest loss",
anomalyGrowth: "Anomalous growth",
ofOblasts: "of 12",
grewOverall: "oblasts grew in total population",
byOkrugsGrid: "1926 grid",
byOblastsGrid: "1939 grid",
toKazakhsShare: "% of population",
toThousandKm: "by 1933 — about one-tenth remained",
abroadDest: "Foreign destinations",
sovietDest: "Within the USSR",
biggestDest: "Largest destination",
returnedShare: "Share who returned",
relLoss: "Relative loss",
absMax: "Absolute maximum",
deathEstimates: "Death toll estimates for the Kazak ASSR",
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
maupNote: "Areal interpolation gives {a} Kazakhs for this oblast in 1926, versus {b} from the attribute data — a discrepancy of {c}%. This is a direct illustration of MAUP.",
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
legendFlowsThickness: "thickness — estimated scale of the flow",
legendFamineKz: "Kazak ASSR",
legendFamineOther: "other USSR regions",
legendFamineNon: "outside the USSR, other causes",
famineDeathShare: "of the region’s population died",
famineVictims: "Deaths:",
faminePop: "population",
kzAssrLabel: "Kazak ASSR",
tipUprising: "uprising",
tipUprisingYear: ". One of more than 380 uprisings of 1929–1931.",
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
btnThemeTitle: "Ашық / қара тақырып",
btnLangTitle: "Интерфейс тілі",
secGrid: "Әкімшілік бөліну торы",
seg1926: "1926 · 8 округ",
seg1939: "1939 · 12 облыс",
hintGrid1926: "1926 жылғы санақ: Қазақ АКСР-інің 8 ірі округі. Ірі бірліктер деректерді көбірек орташалайды — бұл MAUP-тағы масштаб әсері.",
hintGrid1939: "1939 жылғы санақ: 12 облыс. Ұсақтау тор 1926 жылғы торда көрінбейтін қайшылықтарды көрсетеді.",
secMetric: "Көрсеткіш",
secLayers: "Қосымша қабаттар",
layerCamps: "Лагерьлер мен құрылыстар",
layerRevolts: "1929–1931 көтерілістері",
layerLabels: "Аймақ атаулары",
secModes: "Режимдер",
btnStoryStart: "▶ StoryMap: қорғау сценарийі",
btnStoryStop: "⏸ Турды тоқтату",
btnSplit: "⇔ Салыстыру 1926 / 1939",
hintStory: "StoryMap зерттеудің алты қадамынан өткізеді: 1926 жылғы даладан бастап MAUP туралы әдіснамалық қорытындыға дейін.",
zoomInTitle: "Жақындату",
zoomOutTitle: "Алыстату",
zoomReset: "Бастапқы қалып",
sidelblL: "1926 · округтер",
sidelblR: "1939 · облыстар",
ariaMapKz: "Қазақстан картасы",
ariaMapWorld: "Әлем картасы",
ariaMapSchools: "Тарихнамалық көзқарастар картасы",
disclaimer1926: "1926 жылғы округ шекаралары — тірек реконструкция: тарихи бірліктерге сәйкес біріктірілген қазіргі әкімшілік геометрия (geoBoundaries). Бұл мұрағаттық кадастрлық shapefile емес. Демографиялық атрибуттар геометриядан бөлек сақталады.",
disclaimer1939: "1939 жылғы облыс шекаралары — қазіргі геометрияға негізделген тірек реконструкция. 1926 және 1939 жылдардың атрибуттары әртүрлі көздерден алынған әрі базалық қорытындылары бөлек, сондықтан абсолютті сандарды емес, үлестерді салыстырған дұрысырақ.",
secWorldLayer: "Әлем картасының қабаты",
segFlows: "Көші-қон",
segFamines: "1930 жж. ашаршылық",
secDirections: "Бағыттар",
dirAbroad: "Шетелге",
dirSoviet: "КСРО республикаларына",
hintFlows: "Сызық қалыңдығы — ағынның болжамды көлемі. Диапазон мен түсініктемені көру үшін сызыққа немесе нүктеге тінтуірді апарыңыз.",
hintFamines: "Шеңбер өлшемі — аймақ халқына шаққандағы қаза болғандар үлесі. Қазақстан КСРО халықтары арасында ең үлкен салыстырмалы шығынды көрсетеді.",
secFlowSummary: "Көші-қон қорытындысы",
kvLeft: "Республикадан кеткендер",
kvReturned: "Кейін оралғандар",
kvPermanent: "Қайтпай кеткендер",
kvAbroadStayed: "Шетелде қалғандар",
noteFlowsDiscuss: "Нақты бағыттар бойынша бөліну — пікірталастық баға. С. Кэмерон елдер бойынша дәл санақты ашық зерттеу мәселесі деп тікелей атайды.",
noteProjection: "Equal Earth проекциясы (тең аумақты), орталық меридиан 65° ш.б. Тең аумақты проекция әдейі таңдалды: ол аудандар арақатынасын бұрмаламайды, сондықтан картадағы аумақтарды салыстыру дұрыс болады. Мемлекет шекаралары — қазіргі заманғы (Natural Earth, 110 м), олар саяси карта емес, тек географиялық бағдар ретінде берілген.",
schoolsHeading: "Бір апатқа үш көзқарас",
schoolsIntro: "Тарихшылардың пікірі ашаршылық болды ма деген мәселеде емес, оның механизмі не деген мәселеде алшақтайды. Мектепті таңдаңыз, карта сол түсініктеменің орталығындағы аймақтарды бөліп көрсетеді. Тарихнама бөлімінің мәні осында: бірдей деректер, оларға қойылған әртүрлі сұрақтар, жауаптың әртүрлі географиясы.",
chooseSchool: "Мектепті таңдаңыз",
chooseSchoolHint: "Толық тезис пен картадағы белгілеуді көру үшін жоғарыдағы карточканы басыңыз.",
focusRegions: "Осы көзқарас назардағы аймақтар",
askAssistantSchool: "Осы мектеп туралы көмекшіден сұрау",
schoolCaptionDefault: "1939 жылғы облыстар бойынша қазақ халқының шығын картасы. Жоғарыдан мектепті таңдаңыз.",
biblioHeading: "Библиография және дереккөздер",
biblioIntro: "Атластың тарихнамалық түсіндірмелері, демографиялық контексі және әдіснамалық шешімдері негізделген еңбектер жинағы. Сілтемелер жаңа қойындыда ашылады.",
biblioOpen: "Дереккөзді ашу ↗",
biblioAccessNote: "Кітапхана немесе институционалдық жазылым арқылы қолжетімділік қажет болуы мүмкін.",
dataHeading: "Басты нәтиже: тор қорытындыны өзгертеді",
statShiftSum: "Үлестердің жиынтық ауытқуы",
statShiftUnit: "пайыздық тармақ",
statDissim: "Ұқсамау индексі",
statDissimSub: "үлестірімнің бестен бірі",
statIntersections: "Полигон қиылыстары",
statIntersectionsSub: "8 округ × 12 облыс",
statCoverage: "Аумақ қамтуы",
statCoverageSub: "торлар аумақ бойынша сәйкес келеді",
dataIntro: "Бір аумақ, бір халық, екі әкімшілік тор. 1926 жылғы қазақ халқын 8 округтік тордан 12 облыстық торға ауыстырғанда, үлестердің жиынтық ауытқуы 42,46 п.т. құрайды, ал ұқсамау индексі — 21,2 %. Практикалық мәні: егер зерттеуші тек 1939 жылғы тормен жұмыс істесе, ол 1926 жылғы тормен жұмыс істегеннен өзгеше апат эпицентрі картасын алар еді. Шекара қорытындыны анықтайды — бұл дәл Modifiable Areal Unit Problem.",
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
quizShuffleOn: "Сұрақтар мен нұсқалар араластырылады",
quizShuffleOff: "Сұрақтар реті — банктегідей",
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
aiNoHits: "Бұл сұрау бойынша сайт материалдарынан ештеңе таппадым. Нақты аймақ туралы (мысалы, «Қарағанды облысы»), сан туралы (шығындар, көші-қон, мал басы), тарихшы туралы (Кэмерон, Пьянчола, Омарбеков) немесе әдіс туралы (MAUP, ареалдық интерполяция) сұрап көріңіз.",
aiIdentity: "Мен — «Күйреу картографиясы» жобасының ЖИ-көмекшісімін: сіздің браузеріңізде тікелей жұмыс істейтін (деректер еш жерге жіберілмейді) тілдік модельмін және осы сайттың материалдары — карталар, 1926 және 1939 жылдардағы санақтар, көші-қон, Ашаршылық тарихнамасы және HGIS әдісі бойынша сұрақтарға жауап беремін. Аймақ, тарихшы, сан немесе әдіс туралы сұраңыз.",
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
toastSplitHint: "Сол жақта — 1926 ж. 8 округтік тор, оң жақта — 1939 ж. 12 облыс. Бөлгішті сүйреңіз.",
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
maxLoss: "Ең үлкен шығын",
anomalyGrowth: "Аномальды өсім",
ofOblasts: "12-нің",
grewOverall: "облыс жалпы халық саны бойынша өсті",
byOkrugsGrid: "1926 жылғы тор",
byOblastsGrid: "1939 жылғы тор",
toKazakhsShare: "% халық",
toThousandKm: "1933 ж. — шамамен 1/10",
abroadDest: "Шетелдік бағыттар",
sovietDest: "Одақ ішіндегі",
biggestDest: "Ең үлкен бағыт",
returnedShare: "Оралғандар үлесі",
relLoss: "Салыстырмалы шығын",
absMax: "Абсолютті максимум",
deathEstimates: "ҚазАКСР-дегі құрбандар саны бағасы",
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
maupNote: "Ареалдық интерполяция бұл облыс үшін 1926 ж. {a} қазақ береді, ал атрибут бойынша {b} — алшақтық {c} %. Бұл MAUP-тың тікелей мысалы.",
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
legendFlowsThickness: "қалыңдық — ағынның болжамды көлемі",
legendFamineKz: "Қазақ АКСР-і",
legendFamineOther: "КСРО-ның басқа аймақтары",
legendFamineNon: "КСРО сыртында, басқа себептер",
famineDeathShare: "аймақ халқынан қаза болғандар",
famineVictims: "Құрбандар:",
faminePop: "халық",
kzAssrLabel: "Қазақ АКСР-і",
tipUprising: "көтеріліс",
tipUprisingYear: " жыл. 1929–1931 жж. 380-нен астам толқулардың бірі.",
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
document.documentElement.lang = LANG, document.title = t("pageTitle");
const md = document.querySelector('meta[name="description"]');
md && md.setAttribute("content", t("pageDesc")), document.querySelectorAll("[data-i18n]").forEach(n => {
n.textContent = t(n.dataset.i18n);
}), document.querySelectorAll("[data-i18n-title]").forEach(n => {
n.setAttribute("title", t(n.dataset.i18nTitle));
}), document.querySelectorAll("[data-i18n-placeholder]").forEach(n => {
n.setAttribute("placeholder", t(n.dataset.i18nPlaceholder));
}), document.querySelectorAll("[data-i18n-aria]").forEach(n => {
n.setAttribute("aria-label", t(n.dataset.i18nAria));
}), $$(".langopt").forEach(b => b.classList.toggle("on", b.dataset.lang === LANG));
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
"function" == typeof renderAbout && renderAbout(), buildTable(), function() {
const i = $("#mSrc"), j = $("#mTgt");
i && j && (populateMaupSelects(), calcMaup());
}(), rebuildAiModels(), void 0 !== AI && setAiState(AI.engine ? t("aiReady") : t("aiOffline"), AI.engine ? "ok" : ""), 
toast(t("toastLangChanged"));
}
}

const KZ = window.__KZ_HIST__, WORLD = window.__WORLD__, MAUP = window.__MAUP__, FACTS = {
kaz1926: 3968e3,
kaz1939: 31e5,
deathsLow: 1258e3,
deathsHigh: 23e5,
fledTotal: 113e4,
fledPermanent: 676e3,
returned: 454e3,
abroadStayed: 2e5,
cattle1928: 4e7,
cattle1933: 45e5,
shareLoss: 38,
dissimilarity: 21.2,
shiftSum: 42.46
}, SCHOOLS = [ {
id: "cameron",
metric: "nomadic",
color: "#e05252",
ru: {
name: "Сара Кэмерон",
work: "«The Hungry Steppe» (2018)",
thesis: "Голод — результат насильственной седентаризации: уничтожение кочевого хозяйства как способа жизни, а не только изъятие зерна.",
lens: "Максимальные потери — там, где доля кочевого и полукочевого скотоводства была наибольшей.",
detail: "Кэмерон показывает, что казахи гибли не из-за неурожая зерна, а из-за уничтожения скота — основы кочевой экономики. Государство требовало мясо-заготовки с республики, где скот был не товаром, а условием выживания. Поэтому эпицентр катастрофы — скотоводческие районы, а не земледельческие."
},
en: {
name: "Sarah Cameron",
work: '"The Hungry Steppe" (2018)',
thesis: "The famine is the result of violent sedentarization: the destruction of nomadic husbandry as a way of life, not merely grain requisitioning.",
lens: "Maximum losses occurred where the share of nomadic and semi-nomadic pastoralism was highest.",
detail: "Cameron shows that Kazakhs died not from a grain shortfall, but from the destruction of livestock — the foundation of the nomadic economy. The state demanded meat-procurement quotas from a republic where livestock was not a commodity but a condition of survival. That is why the epicenter of the catastrophe lies in the pastoral districts, not the farming ones."
},
kz: {
name: "Сара Кэмерон",
work: "«The Hungry Steppe» (2018)",
thesis: "Ашаршылық — күштеп отырықшыландырудың нәтижесі: тек астық тәркілеу емес, көшпелі шаруашылықтың өмір салты ретінде құрып кетуі.",
lens: "Ең үлкен шығындар көшпелі және жартылай көшпелі мал шаруашылығының үлесі ең жоғары жерлерде болды.",
detail: "Кэмерон қазақтардың астық тапшылығынан емес, көшпелі экономиканың негізі болған малдың жойылуынан қырылғанын көрсетеді. Мемлекет мал үшін тауар емес, өмір сүру шарты болған республикадан ет дайындау нормасын талап етті. Сондықтан апаттың эпицентрі — егіншілік аудандары емес, мал шаруашылығы аудандары."
}
}, {
id: "pianciola",
metric: "anomaly",
color: "#8b7cf0",
ru: {
name: "Никколо Пьянчола",
work: "Работы о колониальной иерархии (2001–2020)",
thesis: "Голод — следствие имперской иерархии приоритетов: ресурсы изымались с периферии в пользу индустриальных центров.",
lens: "Смотрит на контраст: районы с ГУЛАГом и промышленным строительством растут по общему населению, теряя коренное.",
detail: "Пьянчола объясняет «аномальный рост»: Караганда, Балхаш, Риддер получают приток спецпереселенцев и рабочих, и общая численность населения области растёт — при этом казахское население той же области падает вдвое. Административная статистика по общему населению маскирует этнодемографический коллапс."
},
en: {
name: "Niccolò Pianciola",
work: "Studies on the colonial hierarchy (2001–2020)",
thesis: "The famine is a consequence of an imperial hierarchy of priorities: resources were extracted from the periphery to benefit industrial centers.",
lens: "Looks at the contrast: districts with GULAG camps and industrial construction grow in total population while losing their indigenous population.",
detail: 'Pianciola explains the "anomalous growth": Karaganda, Balkhash, and Ridder receive an influx of special settlers and workers, so the oblast’s total population grows — while its Kazakh population falls by half in the same oblast. Administrative statistics on total population mask the ethno-demographic collapse.'
},
kz: {
name: "Никколо Пьянчола",
work: "Отарлық иерархия туралы еңбектер (2001–2020)",
thesis: "Ашаршылық — империялық басымдықтар иерархиясының салдары: ресурстар шет аймақтардан өнеркәсіп орталықтарының пайдасына тартып алынды.",
lens: "Қарама-қайшылыққа назар аударады: ГУЛАГ пен өнеркәсіп құрылысы бар аудандарда жалпы халық саны өседі, ал байырғы халық азаяды.",
detail: "Пьянчола «аномальды өсімді» түсіндіреді: Қарағанды, Балқаш, Риддерге арнайы қоныс аударушылар мен жұмысшылар легі келеді, сондықтан облыстың жалпы халық саны өседі — сол уақытта сол облыстағы қазақ халқы екі есе азаяды. Жалпы халық бойынша әкімшілік статистика этнодемографиялық күйреуді жасырады."
}
}, {
id: "omarbekov",
metric: "unrest",
color: "#d97706",
ru: {
name: "Талас Омарбеков",
work: "Казахстанская национальная школа",
thesis: "Голод — целенаправленная политика против казахского народа; акцент на сопротивлении и его подавлении.",
lens: "Картирует связь между очагами восстаний 1929–1931 гг. и последующей глубиной потерь.",
detail: "Омарбеков и казахстанская историография ставят в центр субъектность казахов: более 380 восстаний и волнений в 1929–1931 гг. (Сузак, Иргиз, Батпаккара, Адай). Подавление восстаний и карательные откочёвочные заслоны усиливали смертность в тех же районах."
},
en: {
name: "Talas Omarbekov",
work: "The Kazakhstani national school",
thesis: "The famine was a deliberate policy against the Kazakh people; the emphasis is on resistance and its suppression.",
lens: "Maps the connection between the centers of the 1929–1931 uprisings and the subsequent depth of losses.",
detail: "Omarbekov and the Kazakhstani historiography place Kazakh agency at the center: more than 380 uprisings and disturbances in 1929–1931 (Suzak, Irgiz, Batpakkara, Adai). The suppression of the uprisings and punitive cordons on migration routes intensified mortality in the same districts."
},
kz: {
name: "Талас Омарбеков",
work: "Қазақстандық ұлттық мектеп",
thesis: "Ашаршылық — қазақ халқына қарсы бағытталған мақсатты саясат; басты назар қарсылық пен оны басып-жаншуда.",
lens: "1929–1931 жж. көтеріліс ошақтары мен кейінгі шығын тереңдігі арасындағы байланысты көрсетеді.",
detail: "Омарбеков және қазақстандық тарихнама қазақтардың субъектілігін орталыққа қояды: 1929–1931 жж. 380-нен астам көтеріліс пен толқу болды (Созақ, Ырғыз, Батпаққара, Адай). Көтерілістерді басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті."
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
note: "Баян-Улгийский аймак — сформировалась постоянная казахская община, существующая доныне."
},
en: {
to: "Mongolia",
short: "Mongolia",
note: "Bayan-Ölgii aimag — a permanent Kazakh community formed there and still exists today."
},
kz: {
to: "Моңғолия",
short: "Моңғолия",
note: "Баян-Өлгий аймағы — тұрақты қазақ қауымдастығы қалыптасты, ол бүгінге дейін бар."
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
note: "Через Уральск и Оренбург. Здесь же — заградительные заслоны на дорогах."
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
note: "Чуйская долина и Иссык-Куль — географически ближайшее убежище для Жетысу."
},
en: {
to: "Kirghiz ASSR",
short: "Kirghizia",
note: "The Chuy Valley and Issyk-Kul — the geographically nearest refuge for Jetysu."
},
kz: {
to: "Қырғыз АКСР-і",
short: "Қырғызстан",
note: "Шу аңғары мен Ыстықкөл — Жетісу үшін географиялық жағынан ең жақын пана."
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
t: "Наибольшая ОТНОСИТЕЛЬНАЯ потеря среди народов СССР: погибло 38–42 % всех казахов."
},
en: {
n: "Kazak ASSR",
deaths: "1.3–2.3 million",
pop: "≈6.2 million",
t: "The largest RELATIVE loss among the peoples of the USSR: 38–42% of all Kazakhs died."
},
kz: {
n: "Қазақ АКСР-і",
deaths: "1,3–2,3 млн",
pop: "≈6,2 млн",
t: "КСРО халықтары арасында ең үлкен САЛЫСТЫРМАЛЫ шығын: барлық қазақтардың 38–42 %-ы қаза тапты."
}
}, {
lon: 31,
lat: 49,
loss: 13,
ru: {
n: "Украинская ССР",
deaths: "3,5–5 млн",
pop: "≈31 млн",
t: "Голодомор 1932–33. Наибольшее АБСОЛЮТНОЕ число жертв в СССР."
},
en: {
n: "Ukrainian SSR",
deaths: "3.5–5 million",
pop: "≈31 million",
t: "The Holodomor of 1932–33. The largest ABSOLUTE number of victims in the USSR."
},
kz: {
n: "Украин КСР-і",
deaths: "3,5–5 млн",
pop: "≈31 млн",
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
t: "Одновременно — регион ссылки и приёма спецпереселенцев."
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
text: "Перепись 1926 года. Казахская АССР разделена на 8 крупных округов. Казахи составляют большинство почти везде: от 62 % в Кустанайском до 77 % в Семипалатинском округе. Хозяйство — кочевое и полукочевое скотоводство, около 40 млн голов скота.",
cite: "Всесоюзная перепись населения 1926 г."
},
en: {
t: "The steppe before the catastrophe",
text: "The 1926 census. The Kazak ASSR is divided into 8 large okrugs. Kazakhs form the majority almost everywhere: from 62% in Kustanai Okrug to 77% in Semipalatinsk Okrug. The economy is nomadic and semi-nomadic pastoralism, with around 40 million head of livestock.",
cite: "All-Union Census of 1926"
},
kz: {
t: "Апатқа дейінгі дала",
text: "1926 жылғы санақ. Қазақ АКСР-і 8 ірі округке бөлінген. Қазақтар барлық жерде дерлік басым: Қостанай округінде 62 %-дан Семей округінде 77 %-ға дейін. Шаруашылық — көшпелі және жартылай көшпелі мал шаруашылығы, шамамен 40 млн бас мал.",
cite: "1926 жылғы Бүкілодақтық халық санағы"
}
}, {
p: "1939",
focus: [ "actyubinsk", "guryev", "west_kz" ],
metric: "loss",
ru: {
t: "Слом: коллективизация и седентаризация",
text: "С 1929 года — принудительное оседание и мясозаготовки. Скот изымается в республике, где он не товар, а условие выживания. К 1933 году от 40 млн голов остаётся около одной десятой. Именно скотоводческий запад и центр дают наибольшие относительные потери.",
cite: "С. Кэмерон, «The Hungry Steppe» (2018)"
},
en: {
t: "Rupture: collectivization and sedentarization",
text: "From 1929 — forced settlement and meat-procurement quotas. Livestock is seized in a republic where it is not a commodity but a condition of survival. By 1933, of 40 million head, about one-tenth remains. It is precisely the pastoral west and center that show the largest relative losses.",
cite: 'S. Cameron, "The Hungry Steppe" (2018)'
},
kz: {
t: "Күйреу: ұжымдастыру және отырықшыландыру",
text: "1929 жылдан бастап — мәжбүрлі отырықшыландыру және ет дайындау нормасы. Мал тауар емес, өмір сүру шарты болған республикада тәркіленеді. 1933 жылға қарай 40 млн бастан шамамен оннан бір бөлігі қалады. Дәл мал шаруашылығы басым батыс пен орталық ең үлкен салыстырмалы шығынды береді.",
cite: "С. Кэмерон, «The Hungry Steppe» (2018)"
}
}, {
p: "1939",
focus: [ "south_kz", "actyubinsk", "kustanai" ],
metric: "loss",
layer: "revolts",
ru: {
t: "Сопротивление",
text: "В 1929–1931 гг. — свыше 380 восстаний и волнений: Сузак, Иргиз, Батпаккара, Адай, Каракумы. Подавление и заградительные заслоны на путях откочёвок усиливают смертность в тех же районах.",
cite: "Т. Омарбеков, казахстанская национальная школа"
},
en: {
t: "Resistance",
text: "In 1929–1931 — more than 380 uprisings and disturbances: Suzak, Irgiz, Batpakkara, Adai, Karakum. Suppression and blocking cordons along migration routes increased mortality in the same districts.",
cite: "T. Omarbekov, the Kazakhstani national school"
},
kz: {
t: "Қарсылық",
text: "1929–1931 жж. — 380-нен астам көтеріліс пен толқу: Созақ, Ырғыз, Батпаққара, Адай, Қарақұм. Оларды басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті.",
cite: "Т. Омарбеков, қазақстандық ұлттық мектеп"
}
}, {
p: "1939",
focus: [ "karaganda", "east_kz", "akmola" ],
metric: "anomaly",
layer: "camps",
ru: {
t: "Аномальный рост",
text: "Парадокс, который не виден в сводной статистике: в Карагандинской области общее население РАСТЁТ, потому что прибывают спецпереселенцы, заключённые Карлага и рабочие. При этом казахское население той же области падает более чем вдвое. Сводная цифра маскирует этнодемографический коллапс.",
cite: "Н. Пьянчола: колониальная иерархия приоритетов"
},
en: {
t: "Anomalous growth",
text: "A paradox invisible in aggregate statistics: in Karaganda Oblast the total population GROWS, because special settlers, Karlag prisoners, and workers arrive. Yet the Kazakh population of that same oblast falls by more than half. The aggregate figure masks the ethno-demographic collapse.",
cite: "N. Pianciola: an imperial hierarchy of priorities"
},
kz: {
t: "Аномальды өсім",
text: "Жиынтық статистикада көрінбейтін парадокс: Қарағанды облысында жалпы халық саны ӨСЕДІ, себебі арнайы қоныс аударушылар, Карлаг тұтқындары және жұмысшылар келеді. Ал сол облыстың қазақ халқы екі еседен астам азаяды. Жиынтық сан этнодемографиялық күйреуді жасырады.",
cite: "Н. Пьянчола: империялық басымдықтар иерархиясы"
}
}, {
p: "1939",
focus: [],
metric: "loss",
world: !0,
ru: {
t: "Исход",
text: "Республику покидают около 1,13 млн человек. Позднее возвращаются 454 тыс.; примерно 200 тыс. остаются за границей навсегда — в Синьцзяне, Монголии, Афганистане, Иране, позже в Турции. Так формируется современная казахская диаспора.",
cite: "Архивные данные АПРК; С. Кэмерон"
},
en: {
t: "Exodus",
text: "About 1.13 million people leave the republic. Later, 454,000 return; about 200,000 remain abroad permanently — in Xinjiang, Mongolia, Afghanistan, Iran, and later Turkey. This is how the modern Kazakh diaspora forms.",
cite: "Archival data, APRK; S. Cameron"
},
kz: {
t: "Көш",
text: "Республикадан шамамен 1,13 млн адам кетеді. Кейін 454 мың адам оралады; шамамен 200 мың адам шетелде мәңгілікке қалады — Шыңжаңда, Моңғолияда, Ауғанстанда, Иранда, кейінірек Түркияда. Осылайша қазіргі қазақ диаспорасы қалыптасады.",
cite: "ҚР ПМА мұрағат деректері; С. Кэмерон"
}
}, {
p: "1939",
focus: [],
metric: "resid",
maup: !0,
ru: {
t: "Проблема масштаба: MAUP",
text: "Главный методологический вывод исследования. Одна и та же территория, одни и те же люди — но при переходе с сетки 8 округов 1926 г. на сетку 12 областей 1939 г. пространственное распределение казахского населения смещается на 42,5 процентных пункта суммарно. Индекс несходства — 21,2 %. Это и есть Modifiable Areal Unit Problem: граница определяет вывод.",
cite: "Собственный расчёт: ареальная интерполяция по 96 пересечениям полигонов"
},
en: {
t: "The problem of scale: MAUP",
text: "The study’s central methodological conclusion. The same territory, the same people — but moving from the 8-okrug grid of 1926 to the 12-oblast grid of 1939 shifts the spatial distribution of the Kazakh population by a total of 42.5 percentage points. The dissimilarity index is 21.2%. This is the Modifiable Areal Unit Problem: the boundary determines the conclusion.",
cite: "Original calculation: areal interpolation across 96 polygon intersections"
},
kz: {
t: "Масштаб мәселесі: MAUP",
text: "Зерттеудің басты әдіснамалық қорытындысы. Аумақ бір, адамдар бір — бірақ 1926 жылғы 8 округтік тордан 1939 жылғы 12 облыстық торға көшкенде қазақ халқының кеңістіктік үлестірімі жиынтығында 42,5 пайыздық тармаққа ауысады. Ұқсамау индексі — 21,2 %. Бұл — Modifiable Areal Unit Problem: шекара қорытындыны анықтайды.",
cite: "Меншікті есептеу: 96 полигон қиылысы бойынша ареалдық интерполяция"
}
} ], QUIZ = [ {
c: 1,
ru: {
q: "Сколько округов было в Казахской АССР по данным переписи 1926 года на карте этого исследования?",
a: [ "6", "8", "12", "14" ],
e: "Восемь округов: Уральский, Актюбинский, Кустанайский, Петропавловский, Акмолинский, Семипалатинский, Сыр-Дарьинский и Жетысуский. К 1939 году территория делится уже на 12 областей — именно это различие и порождает MAUP.",
tag: "Карта"
},
en: {
q: "How many okrugs did the Kazak ASSR have according to the 1926 census, on this study’s map?",
a: [ "6", "8", "12", "14" ],
e: "Eight okrugs: Uralsk, Aktyubinsk, Kustanai, Petropavlovsk, Akmola, Semipalatinsk, Syr-Darya, and Jetisu. By 1939 the territory is already divided into 12 oblasts — and this very difference is what creates MAUP.",
tag: "Map"
},
kz: {
q: "Осы зерттеудің картасында 1926 жылғы санақ бойынша Қазақ АКСР-інде неше округ болды?",
a: [ "6", "8", "12", "14" ],
e: "Сегіз округ: Орал, Ақтөбе, Қостанай, Петропавл, Ақмола, Семей, Сырдария және Жетісу. 1939 жылға қарай аумақ 12 облысқа бөлінеді — дәл осы айырмашылық MAUP-ты тудырады.",
tag: "Карта"
}
}, {
c: 1,
ru: {
q: "Что означает аббревиатура MAUP?",
a: [ "Модель анализа урбанизации и плотности", "Проблема модифицируемых пространственных единиц", "Метод архивной унификации переписей", "Международный атлас установленных периодов" ],
e: "Modifiable Areal Unit Problem — проблема модифицируемых пространственных единиц: результат статистического анализа меняется в зависимости от того, по каким границам сгруппированы данные.",
tag: "Методология"
},
en: {
q: "What does the acronym MAUP stand for?",
a: [ "Model of Urbanization and Density Analysis", "Modifiable Areal Unit Problem", "Method of Archival Census Unification", "International Atlas of Established Periods" ],
e: "Modifiable Areal Unit Problem: the result of a statistical analysis changes depending on which boundaries the data is grouped by.",
tag: "Methodology"
},
kz: {
q: "MAUP аббревиатурасы нені білдіреді?",
a: [ "Урбанизация мен тығыздықты талдау моделі", "Модификацияланатын аумақтық бірліктер мәселесі", "Санақтарды мұрағаттық біріздендіру әдісі", "Белгіленген кезеңдердің халықаралық атласы" ],
e: "Modifiable Areal Unit Problem — модификацияланатын аумақтық бірліктер мәселесі: статистикалық талдау нәтижесі деректер қандай шекаралар бойынша топтастырылғанына байланысты өзгереді.",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Какой регион в исследовании — главный пример «аномального роста»?",
a: [ "Кзыл-Ординская область", "Карагандинская область", "Уральский округ", "Южно-Казахстанская область" ],
e: "В Карагандинской области общее население росло за счёт спецпереселенцев, заключённых Карлага и рабочих индустриальных строек, тогда как казахское население сократилось более чем вдвое. Сводная цифра по области маскирует катастрофу.",
tag: "Историография"
},
en: {
q: "Which region in the study is the main example of “anomalous growth”?",
a: [ "Kzyl-Orda Oblast", "Karaganda Oblast", "Uralsk Okrug", "South Kazakhstan Oblast" ],
e: "In Karaganda Oblast the total population grew due to special settlers, Karlag prisoners, and workers on industrial construction sites, while the Kazakh population fell by more than half. The oblast’s aggregate figure masks the catastrophe.",
tag: "Historiography"
},
kz: {
q: "Зерттеуде қай аймақ «аномальды өсімнің» басты мысалы болып табылады?",
a: [ "Қызылорда облысы", "Қарағанды облысы", "Орал округі", "Оңтүстік Қазақстан облысы" ],
e: "Қарағанды облысында жалпы халық саны арнайы қоныс аударушылар, Карлаг тұтқындары және өнеркәсіп құрылысындағы жұмысшылар есебінен өсті, ал қазақ халқы екі еседен астам азайды. Облыс бойынша жиынтық сан апатты жасырады.",
tag: "Тарихнама"
}
}, {
c: 1,
ru: {
q: "Почему именно скотоводческие районы пострадали сильнее земледельческих?",
a: [ "Там была засуха, а в земледельческих — нет", "Скот изымался государством, а для кочевого хозяйства он был не товаром, а условием выживания", "Скотоводческие районы были дальше от железных дорог", "В скотоводческих районах было меньше врачей" ],
e: "Тезис Сары Кэмерон: республика выполняла мясозаготовки, но для кочевого и полукочевого хозяйства скот был основой всей системы жизнеобеспечения. Его изъятие означало не потерю дохода, а потерю средств к существованию.",
tag: "Историография"
},
en: {
q: "Why did pastoral districts suffer more than farming ones?",
a: [ "There was a drought there, but not in farming districts", "Livestock was seized by the state, and for the nomadic economy it was not a commodity but a condition of survival", "Pastoral districts were farther from railways", "Pastoral districts had fewer doctors" ],
e: "Sarah Cameron’s thesis: the republic fulfilled meat-procurement quotas, but for the nomadic and semi-nomadic economy livestock was the foundation of the entire subsistence system. Its seizure meant not a loss of income, but a loss of the means of survival.",
tag: "Historiography"
},
kz: {
q: "Неге мал шаруашылығы аудандары егіншілік аудандарынан көбірек зардап шекті?",
a: [ "Онда құрғақшылық болды, ал егіншілік аудандарда болмады", "Малды мемлекет тәркіледі, ал көшпелі шаруашылық үшін ол тауар емес, өмір сүру шарты болды", "Мал шаруашылығы аудандары теміржолдан алыс болды", "Мал шаруашылығы аудандарында дәрігер аз болды" ],
e: "Сара Кэмерон тезисі: республика ет дайындау нормасын орындады, бірақ көшпелі және жартылай көшпелі шаруашылық үшін мал бүкіл өмір сүру жүйесінің негізі болды. Оны тәркілеу кіріс жоғалту емес, күнкөріс құралын жоғалту дегенді білдірді.",
tag: "Тарихнама"
}
}, {
c: 1,
ru: {
q: "Сколько примерно человек покинуло Казахстан в ходе откочёвок?",
a: [ "около 300 тысяч", "около 1,13 миллиона", "около 3 миллионов", "около 5 миллионов" ],
e: "Около 1,13 млн человек. Позднее вернулись примерно 454 тыс.; около 200 тыс. остались за границей навсегда — в Синьцзяне, Монголии, Афганистане, Иране, позже в Турции.",
tag: "Данные"
},
en: {
q: "Roughly how many people left Kazakhstan during the migrations?",
a: [ "about 300 thousand", "about 1.13 million", "about 3 million", "about 5 million" ],
e: "About 1.13 million people. Later, about 454,000 returned; about 200,000 remained abroad permanently — in Xinjiang, Mongolia, Afghanistan, Iran, and later Turkey.",
tag: "Data"
},
kz: {
q: "Көші-қон кезінде Қазақстаннан шамамен қанша адам кетті?",
a: [ "шамамен 300 мың", "шамамен 1,13 миллион", "шамамен 3 миллион", "шамамен 5 миллион" ],
e: "Шамамен 1,13 млн адам. Кейін шамамен 454 мың адам оралды; шамамен 200 мың адам шетелде мәңгілікке қалды — Шыңжаңда, Моңғолияда, Ауғанстанда, Иранда, кейінірек Түркияда.",
tag: "Деректер"
}
}, {
c: 1,
ru: {
q: "Какое зарубежное направление откочёвок было крупнейшим?",
a: [ "Турция", "Синьцзян (Китай)", "Иран", "Афганистан" ],
e: "Синьцзян: переход через Джунгарские ворота и Тарбагатай. Оценки — порядка 100–200 тыс. человек, но точная разбивка по направлениям остаётся дискуссионной: С. Кэмерон называет её открытым исследовательским вопросом.",
tag: "Карта мира"
},
en: {
q: "Which foreign destination of the migrations was the largest?",
a: [ "Turkey", "Xinjiang (China)", "Iran", "Afghanistan" ],
e: "Xinjiang: crossing via the Dzungarian Gate and Tarbagatai. Estimates run around 100,000–200,000 people, but the exact breakdown by destination remains debated: S. Cameron calls it an open research question.",
tag: "World map"
},
kz: {
q: "Көші-қонның қай шетелдік бағыты ең ірісі болды?",
a: [ "Түркия", "Шыңжаң (Қытай)", "Иран", "Ауғанстан" ],
e: "Шыңжаң: Жоңғар қақпасы мен Тарбағатай арқылы өту. Бағалар шамамен 100–200 мың адамды құрайды, бірақ бағыттар бойынша дәл бөлу пікірталастық болып қалады: С. Кэмерон оны ашық зерттеу мәселесі деп атайды.",
tag: "Әлем картасы"
}
}, {
c: 1,
ru: {
q: "В чём отличие казахского голода от Голодомора по демографическим показателям?",
a: [ "В Казахстане было больше жертв в абсолютных числах", "В Казахстане была наибольшая ОТНОСИТЕЛЬНАЯ потеря — доля погибших от численности народа", "В Казахстане голод длился один год", "Между ними нет статистических отличий" ],
e: "В абсолютных числах больше всего жертв дала Украинская ССР (3,5–5 млн). Но по доле погибших от численности собственного народа казахи понесли наибольшие потери среди народов СССР: 38–42 %.",
tag: "Карта мира"
},
en: {
q: "How does the Kazakh famine differ from the Holodomor in demographic terms?",
a: [ "Kazakhstan had more victims in absolute numbers", "Kazakhstan had the largest RELATIVE loss — the share of deaths relative to the size of the people", "The famine in Kazakhstan lasted one year", "There is no statistical difference between them" ],
e: "In absolute numbers, the Ukrainian SSR saw the most victims (3.5–5 million). But by the share of deaths relative to their own population, Kazakhs suffered the greatest loss among the peoples of the USSR: 38–42%.",
tag: "World map"
},
kz: {
q: "Қазақ ашаршылығы демографиялық көрсеткіштер бойынша Голодомордан немен ерекшеленеді?",
a: [ "Қазақстанда абсолютті сандар бойынша құрбандар көп болды", "Қазақстанда халық санына қатысты САЛЫСТЫРМАЛЫ шығын ең үлкен болды", "Қазақстанда ашаршылық бір жыл ғана болды", "Олардың арасында статистикалық айырмашылық жоқ" ],
e: "Абсолютті сандар бойынша ең көп құрбан Украин КСР-інде болды (3,5–5 млн). Бірақ өз халқына қатысты шығын үлесі бойынша қазақтар КСРО халықтары арасында ең үлкен шығынды көрді: 38–42 %.",
tag: "Әлем картасы"
}
}, {
c: 2,
ru: {
q: "Что произошло с поголовьем скота между 1928 и 1933 годами?",
a: [ "Сократилось примерно на четверть", "Сократилось примерно вдвое", "От 40 млн голов осталось около одной десятой", "Осталось почти без изменений" ],
e: "От примерно 40 млн голов к 1933 году осталось около 4,5 млн — порядка одной десятой. Это разрушило материальную основу кочевого хозяйства.",
tag: "Данные"
},
en: {
q: "What happened to the livestock herd between 1928 and 1933?",
a: [ "It shrank by roughly a quarter", "It shrank by roughly half", "Of 40 million head, about one-tenth remained", "It remained almost unchanged" ],
e: "Of roughly 40 million head, by 1933 about 4.5 million remained — around one-tenth. This destroyed the material foundation of the nomadic economy.",
tag: "Data"
},
kz: {
q: "1928–1933 жж. аралығында мал басына не болды?",
a: [ "Шамамен төрттен бірге азайды", "Шамамен екі есе азайды", "40 млн бастан шамамен оннан бір бөлігі қалды", "Дерлік өзгеріссіз қалды" ],
e: "Шамамен 40 млн бастан 1933 жылға қарай шамамен 4,5 млн қалды — оннан бір бөлігі шамасында. Бұл көшпелі шаруашылықтың материалдық негізін құртты.",
tag: "Деректер"
}
}, {
c: 1,
ru: {
q: "Как работает ареальная интерполяция, применённая в этом исследовании?",
a: [ "Население округа делится поровну между всеми областями", "Население округа распределяется пропорционально площади пересечения с каждой областью", "Берётся население ближайшего города", "Данные копируются из переписи 1939 года" ],
e: "Формула: P_фрагмент = P_1926 × (Площадь пересечения ÷ Площадь округа 1926). Допущение — равномерная плотность внутри округа. Это упрощение, и именно оно даёт часть погрешности.",
tag: "Методология"
},
en: {
q: "How does the areal interpolation used in this study work?",
a: [ "The okrug’s population is split evenly among all oblasts", "The okrug’s population is distributed in proportion to the area of intersection with each oblast", "The population of the nearest city is used", "The data is copied from the 1939 census" ],
e: "The formula: P_fragment = P_1926 × (intersection area ÷ 1926 okrug area). The assumption is uniform population density within the okrug. This is a simplification, and it is itself a source of part of the error.",
tag: "Methodology"
},
kz: {
q: "Осы зерттеуде қолданылған ареалдық интерполяция қалай жұмыс істейді?",
a: [ "Округ халқы барлық облыстар арасында тең бөлінеді", "Округ халқы әр облыспен қиылысу ауданына пропорционал бөлінеді", "Ең жақын қаланың халық саны алынады", "Деректер 1939 жылғы санақтан көшіріледі" ],
e: "Формула: P_фрагмент = P_1926 × (Қиылысу ауданы ÷ 1926 округ ауданы). Болжам — округ ішінде тығыздық бірдей. Бұл жеңілдету, және дәл осы қателіктің бір бөлігін береді.",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Индекс несходства между сеткой 1926 и сеткой 1939 года в этом исследовании составил:",
a: [ "2,1 %", "21,2 %", "42,5 %", "68,0 %" ],
e: "Суммарный сдвиг долей — 42,46 процентных пункта, индекс несходства — половина от этого, то есть 21,2 %. Иначе говоря, при смене сетки «переезжает» пятая часть всего пространственного распределения населения.",
tag: "Методология"
},
en: {
q: "The dissimilarity index between the 1926 grid and the 1939 grid in this study is:",
a: [ "2.1%", "21.2%", "42.5%", "68.0%" ],
e: "The total share shift is 42.46 percentage points; the dissimilarity index is half of that, i.e. 21.2%. In other words, changing the grid “relocates” a fifth of the entire spatial distribution of the population.",
tag: "Methodology"
},
kz: {
q: "Осы зерттеуде 1926 жылғы тор мен 1939 жылғы тор арасындағы ұқсамау индексі неге тең болды?",
a: [ "2,1 %", "21,2 %", "42,5 %", "68,0 %" ],
e: "Үлестердің жиынтық ауытқуы — 42,46 пайыздық тармақ, ұқсамау индексі — осының жартысы, яғни 21,2 %. Басқаша айтқанда, тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің бестен бірі «көшіп кетеді».",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Восстания 1929–1931 годов (Сузак, Иргиз, Батпаккара, Адай) в интерпретации Т. Омарбекова — это прежде всего:",
a: [ "Стихийные грабежи без политического содержания", "Проявление субъектности и организованного сопротивления казахов", "Операции внешних государств", "Конфликты между самими кочевыми родами" ],
e: "Казахстанская национальная школа ставит в центр субъектность казахов: свыше 380 восстаний и волнений, а их подавление и заслоны на путях откочёвок усиливали смертность в тех же районах.",
tag: "Историография"
},
en: {
q: "In T. Omarbekov’s interpretation, the uprisings of 1929–1931 (Suzak, Irgiz, Batpakkara, Adai) are, above all:",
a: [ "Spontaneous looting with no political content", "An expression of Kazakh agency and organized resistance", "Operations by foreign states", "Conflicts among the nomadic clans themselves" ],
e: "The Kazakhstani national school places Kazakh agency at the center: more than 380 uprisings and disturbances, whose suppression and the cordons placed on migration routes increased mortality in the same districts.",
tag: "Historiography"
},
kz: {
q: "Т. Омарбековтың түсіндірмесінде 1929–1931 жж. көтерілістер (Созақ, Ырғыз, Батпаққара, Адай) ең алдымен нені білдіреді?",
a: [ "Саяси мазмұны жоқ стихиялық тонаушылық", "Қазақтардың субъектілігі мен ұйымдасқан қарсылығының көрінісі", "Сыртқы мемлекеттердің операциялары", "Көшпелі рулардың өзара қақтығысы" ],
e: "Қазақстандық ұлттық мектеп қазақтардың субъектілігін орталыққа қояды: 380-нен астам көтеріліс пен толқу, оларды басу және көші-қон жолдарындағы бекеттер сол аудандардағы өлім-жітімді күшейтті.",
tag: "Тарихнама"
}
}, {
c: 1,
ru: {
q: "Почему сводная статистика по общему населению области может ввести в заблуждение?",
a: [ "Переписи вообще не проводились", "Приток спецпереселенцев и рабочих может скрыть убыль коренного населения", "Общее население всегда считали точнее", "Области были слишком маленькими" ],
e: "Это ключевой тезис Н. Пьянчолы. Общее население Карагандинской области росло, тогда как казахское падало вдвое. Смотреть нужно на этнический разрез, а не на итоговую строку.",
tag: "Историография"
},
en: {
q: "Why can aggregate statistics on an oblast’s total population be misleading?",
a: [ "No censuses were conducted at all", "An influx of special settlers and workers can conceal the decline of the indigenous population", "Total population was always counted more accurately", "The oblasts were too small" ],
e: "This is N. Pianciola’s key thesis. Karaganda Oblast’s total population grew while its Kazakh population fell by half. One must look at the ethnic breakdown, not the bottom-line total.",
tag: "Historiography"
},
kz: {
q: "Неге облыстың жалпы халқы бойынша жиынтық статистика адастыруы мүмкін?",
a: [ "Санақ мүлде жүргізілмеген", "Арнайы қоныс аударушылар мен жұмысшылар легі байырғы халықтың азаюын жасыруы мүмкін", "Жалпы халық әрқашан дәлірек саналған", "Облыстар тым кіші болған" ],
e: "Бұл Н. Пьянчоланың басты тезисі. Қарағанды облысының жалпы халқы өсті, ал қазақ халқы екі есе азайды. Түпкі жолды емес, этникалық бөліністі қарау керек.",
tag: "Тарихнама"
}
}, {
c: 1,
ru: {
q: "Границы на картах этого сайта — это:",
a: [ "Точные архивные кадастровые границы 1926 и 1939 годов", "Опорная реконструкция на современной геометрии, а не архивный кадастр", "Случайно сгенерированные полигоны", "Границы современных областей Казахстана без изменений" ],
e: "Честная оговорка проекта: геометрия построена как опорная реконструкция на основе современных административных контуров (geoBoundaries), объединённых под исторические единицы. Это не архивный кадастровый shapefile, и на защите об этом нужно говорить прямо.",
tag: "Методология"
},
en: {
q: "The boundaries on this site’s maps are:",
a: [ "Exact archival cadastral boundaries from 1926 and 1939", "A reference reconstruction on modern geometry, not an archival cadastre", "Randomly generated polygons", "The boundaries of Kazakhstan’s modern oblasts, unchanged" ],
e: "The project’s honest caveat: the geometry is built as a reference reconstruction based on modern administrative outlines (geoBoundaries), merged under the historical units. It is not an archival cadastral shapefile, and this should be stated plainly in a defense.",
tag: "Methodology"
},
kz: {
q: "Осы сайттың карталарындағы шекаралар — бұл:",
a: [ "1926 және 1939 жылдардың дәл мұрағаттық кадастрлық шекаралары", "Қазіргі геометрияға негізделген тірек реконструкция, мұрағаттық кадастр емес", "Кездейсоқ жасалған полигондар", "Қазақстанның қазіргі облыстарының өзгеріссіз шекаралары" ],
e: "Жобаның адал ескертуі: геометрия тарихи бірліктерге сәйкес біріктірілген қазіргі әкімшілік контурлар (geoBoundaries) негізінде тірек реконструкция ретінде құрылған. Бұл мұрағаттық кадастрлық shapefile емес, және қорғауда бұл туралы тікелей айту керек.",
tag: "Әдіснама"
}
}, {
c: 1,
ru: {
q: "Оценки числа погибших в казахском голоде расходятся от 1,26 до 4 млн. Что это означает для исследователя?",
a: [ "Что тема ненаучна и данными пользоваться нельзя", "Что нужно указывать диапазон и атрибуцию оценок, а не одну «правильную» цифру", "Что надо выбрать среднее арифметическое", "Что верна всегда самая большая оценка" ],
e: "Разброс отражает разные методики и источники: Институт Птухи — 1,258 млн; Абылхожин, Козыбаев, Татимов — 3,25 млн; Конквест — 2,3 млн. Корректная научная практика — приводить диапазон с указанием, кому принадлежит оценка.",
tag: "Методология"
},
en: {
q: "Estimates of the death toll in the Kazakh famine range from 1.26 to 4 million. What does this mean for a researcher?",
a: [ "That the topic is unscientific and the data cannot be used", 'That one should state the range and attribute each estimate, rather than giving one "correct" figure', "That one should take the arithmetic mean", "That the largest estimate is always correct" ],
e: "The spread reflects different methods and sources: the Ptukha Institute — 1.258 million; Abylkhozhin, Kozybaev, Tatimov — 3.25 million; Conquest — 2.3 million. Correct scholarly practice is to give the range with attribution, not to pick one figure.",
tag: "Methodology"
},
kz: {
q: "Қазақ ашаршылығындағы қаза болғандар саны бағасы 1,26-дан 4 млн-ға дейін алшақтайды. Бұл зерттеуші үшін нені білдіреді?",
a: [ "Тақырып ғылыми емес және деректерді пайдалануға болмайды", "Диапазон мен бағалардың атрибуциясын көрсету керек, бір «дұрыс» санды емес", "Арифметикалық ортаны алу керек", "Әрқашан ең үлкен баға дұрыс" ],
e: "Алшақтық әртүрлі әдістер мен көздерді көрсетеді: Птуха институты — 1,258 млн; Әбілхожин, Қозыбаев, Тәтімов — 3,25 млн; Конквест — 2,3 млн. Дұрыс ғылыми тәжірибе — кімге тиесілі екенін көрсетіп, диапазонды беру.",
tag: "Әдіснама"
}
}, {
c: 2,
ru: {
q: "Какая доля казахского населения погибла в 1930–1933 годах по наиболее распространённым оценкам?",
a: [ "около 10 %", "около 20 %", "около 38–42 %", "около 70 %" ],
e: "Погибло порядка 38–42 % всех казахов — наибольшая относительная потеря среди этнических групп СССР в период советских голодов.",
tag: "Данные"
},
en: {
q: "According to the most common estimates, what share of the Kazakh population died in 1930–1933?",
a: [ "about 10%", "about 20%", "about 38–42%", "about 70%" ],
e: "About 38–42% of all Kazakhs died — the largest relative loss among the ethnic groups of the USSR during the period of Soviet famines.",
tag: "Data"
},
kz: {
q: "Ең кең таралған бағалар бойынша 1930–1933 жж. қазақ халқының қанша үлесі қаза тапты?",
a: [ "шамамен 10 %", "шамамен 20 %", "шамамен 38–42 %", "шамамен 70 %" ],
e: "Барлық қазақтардың шамамен 38–42 %-ы қаза тапты — бұл КСРО-дағы кеңестік ашаршылықтар кезеңінде этникалық топтар арасындағы ең үлкен салыстырмалы шығын.",
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

kbRu("Что такое Ашаршылык", "Ашаршылык — голод в Казахстане 1930–1933 годов, вызванный насильственной коллективизацией, седентаризацией (принудительным оседанием кочевников) и мясозаготовками. Погибло по разным оценкам от 1,26 до 4 млн человек. Доля погибших от численности казахского народа — около 38–42 %, наибольшая относительная потеря среди народов СССР. Оценки числа жертв: Институт демографии им. Птухи НАН Украины — 1,258 млн; Р. Конквест — 2,3 млн; Ж. Абылхожин, М. Козыбаев, М. Татимов — 3,25 млн; проф. Х. М. Абжанов — до 4 млн.", "основное"), 
kbEn("What Asharshylyk is", "Asharshylyk is the 1930–1933 famine in Kazakhstan, caused by forced collectivization, sedentarization (the forced settlement of nomads), and meat-procurement quotas. Estimates of the death toll range from 1.26 to 4 million people. The share of deaths relative to the Kazakh population was about 38–42%, the largest relative loss among the peoples of the USSR. Estimates of victims: the Ptukha Institute of Demography of the National Academy of Sciences of Ukraine — 1.258 million; R. Conquest — 2.3 million; Zh. Abylkhozhin, M. Kozybaev, M. Tatimov — 3.25 million; Prof. Kh. M. Abzhanov — up to 4 million.", "core"), 
kbKz("Ашаршылық деген не", "Ашаршылық — 1930–1933 жылдары Қазақстанда болған, күштеп ұжымдастыру, отырықшыландыру (көшпенділерді мәжбүрлеп қоныстандыру) және ет дайындау нормалары тудырған ашаршылық. Әртүрлі бағалар бойынша 1,26-дан 4 млн-ға дейін адам қаза тапты. Қазақ халқы санынан қаза болғандар үлесі — шамамен 38–42 %, бұл КСРО халықтары арасындағы ең үлкен салыстырмалы шығын. Құрбандар саны бағалары: Украина ҰҒА Птуха атындағы Демография институты — 1,258 млн; Р. Конквест — 2,3 млн; Ж. Абылхожин, М. Қозыбаев, М. Тәтімов — 3,25 млн; проф. Х. М. Әбжанов — 4 млн-ға дейін.", "негізгі"), 
kbRu("Тема и цель исследования", "Проект «Картография коллапса» — пространственно-демографический анализ Ашаршылыка средствами исторической ГИС (HGIS). Данные переписей 1926 и 1939 годов накладываются на разные административные сетки: 8 округов 1926 года и 12 областей 1939 года. Цель — показать, что вывод о географии катастрофы зависит от выбранной сетки агрегирования, то есть продемонстрировать Modifiable Areal Unit Problem на историческом материале.", "основное"), 
kbEn("The topic and goal of the study", '"Cartography of Collapse" is a spatial-demographic analysis of Asharshylyk using historical GIS (HGIS). Data from the 1926 and 1939 censuses is overlaid on different administrative grids: 8 okrugs in 1926 and 12 oblasts in 1939. The goal is to show that a conclusion about the geography of the catastrophe depends on the chosen aggregation grid — that is, to demonstrate the Modifiable Areal Unit Problem on historical material.', "core"), 
kbKz("Зерттеудің тақырыбы мен мақсаты", "«Күйреу картографиясы» жобасы — Ашаршылықтың тарихи ГАЖ (HGIS) құралдарымен жасалған кеңістіктік-демографиялық талдауы. 1926 және 1939 жылдардың санақ деректері әртүрлі әкімшілік торларға салынады: 1926 жылғы 8 округ және 1939 жылғы 12 облыс. Мақсат — апат географиясы туралы қорытынды таңдалған топтастыру торына тәуелді екенін көрсету, яғни тарихи материалда Modifiable Areal Unit Problem-ды көрсету.", "негізгі"), 
kbRu("MAUP: проблема модифицируемых пространственных единиц", "MAUP (Modifiable Areal Unit Problem) — эффект, при котором результат статистического анализа меняется в зависимости от того, по каким территориальным единицам сгруппированы данные. У MAUP два аспекта: эффект масштаба (меняется размер единиц) и эффект зонирования (меняется нарезка при том же числе единиц). В этом исследовании проявлены оба: 8 округов против 12 областей на одной и той же территории.", "методология"), 
kbEn("MAUP: the Modifiable Areal Unit Problem", "MAUP (Modifiable Areal Unit Problem) is an effect in which the result of a statistical analysis changes depending on which territorial units the data is grouped by. MAUP has two aspects: the scale effect (the size of the units changes) and the zoning effect (the layout changes while the number of units stays the same). Both appear in this study: 8 okrugs versus 12 oblasts on the same territory.", "methodology"), 
kbKz("MAUP: модификацияланатын аумақтық бірліктер мәселесі", "MAUP (Modifiable Areal Unit Problem) — статистикалық талдау нәтижесі деректер қандай аумақтық бірліктер бойынша топтастырылғанына байланысты өзгеретін эффект. MAUP-тың екі аспектісі бар: масштаб эффектісі (бірліктер өлшемі өзгереді) және аймақтандыру эффектісі (бірліктер саны бірдей болғанда бөліну өзгереді). Бұл зерттеуде екеуі де көрінеді: бір аумақтағы 8 округ пен 12 облыс.", "әдіснама"), 
kbRu("Ареальная интерполяция: формула", "Чтобы перенести данные с сетки 1926 года на сетку 1939 года, применяется ареальная интерполяция: P_фрагмент = P_1926 × (Площадь пересечения ÷ Площадь округа 1926). Население округа распределяется между областями пропорционально площади геометрического пересечения. Ключевое допущение — равномерная плотность населения внутри округа. Для кочевого населения это упрощение, и оно само по себе вносит погрешность. Всего в проекте рассчитано 96 пересечений (8 округов × 12 областей).", "методология"), 
kbEn("Areal interpolation: the formula", "To carry data from the 1926 grid onto the 1939 grid, areal interpolation is used: P_fragment = P_1926 × (intersection area ÷ 1926 okrug area). The okrug’s population is distributed among the oblasts in proportion to the area of geometric intersection. The key assumption is uniform population density within the okrug. For a nomadic population this is a simplification, and it introduces error on its own. In total, the project computed 96 intersections (8 okrugs × 12 oblasts).", "methodology"), 
kbKz("Ареалдық интерполяция: формула", "1926 жылғы тордағы деректерді 1939 жылғы торға көшіру үшін ареалдық интерполяция қолданылады: P_фрагмент = P_1926 × (Қиылысу ауданы ÷ 1926 округ ауданы). Округ халқы облыстар арасында геометриялық қиылысу ауданына пропорционал бөлінеді. Негізгі болжам — округ ішінде халық тығыздығы бірдей. Көшпелі халық үшін бұл жеңілдету, және ол өзі қателік тудырады. Жобада барлығы 96 қиылысу есептелді (8 округ × 12 облыс).", "әдіснама"), 
kbRu("Главный количественный результат", "При переносе казахского населения 1926 года с сетки 8 округов на сетку 12 областей суммарный сдвиг долей составил 42,46 процентных пункта, индекс несходства (половина суммы модулей сдвигов) — 21,2 %. Это означает, что при смене административной сетки «переезжает» примерно пятая часть всего пространственного распределения населения. Наибольший сдвиг вверх — Восточно-Казахстанская область (+165 % относительно исходной доли), наибольший сдвиг вниз — Акмолинская область (−60 %).", "результаты"), 
kbEn("The main quantitative result", 'When the 1926 Kazakh population is reallocated from the 8-okrug grid onto the 12-oblast grid, the total share shift is 42.46 percentage points, and the dissimilarity index (half the sum of the absolute shifts) is 21.2%. This means that changing the administrative grid "relocates" roughly a fifth of the entire spatial distribution of the population. The largest upward shift is East Kazakhstan Oblast (+165% relative to its original share); the largest downward shift is Akmola Oblast (−60%).', "results"), 
kbKz("Басты сандық нәтиже", "1926 жылғы қазақ халқын 8 округтік тордан 12 облыстық торға ауыстырғанда, үлестердің жиынтық ауытқуы 42,46 пайыздық тармақты, ал ұқсамау индексі (ауытқулар модульдерінің қосындысының жартысы) — 21,2 %-ды құрады. Бұл әкімшілік тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің шамамен бестен бірі «көшетінін» білдіреді. Ең үлкен жоғары ауытқу — Шығыс Қазақстан облысы (бастапқы үлеске қатысты +165 %), ең үлкен төмен ауытқу — Ақмола облысы (−60 %).", "нәтижелер"), 
kbRu("Аномальный рост населения", "Аномальный рост — ситуация, когда общее население области растёт, а коренное (казахское) население той же области резко сокращается. Классический пример — Карагандинская область: приток спецпереселенцев, заключённых Карлага и рабочих индустриальных строек увеличивал общую численность, тогда как казахское население упало более чем вдвое. Поэтому сводная статистика по общему населению маскирует этнодемографический коллапс, и анализировать нужно этнический разрез.", "результаты"), 
kbEn("Anomalous population growth", "Anomalous growth is a situation where an oblast’s total population grows while its indigenous (Kazakh) population sharply declines. The classic example is Karaganda Oblast: an influx of special settlers, Karlag prisoners, and industrial-construction workers increased the total count, while the Kazakh population fell by more than half. So aggregate statistics on total population mask the ethno-demographic collapse, and one needs to analyze the ethnic breakdown.", "results"), 
kbKz("Халық санының аномальды өсуі", "Аномальды өсім — облыстың жалпы халқы өсіп жатқанда, сол облыстың байырғы (қазақ) халқы күрт азаятын жағдай. Классикалық мысал — Қарағанды облысы: арнайы қоныс аударушылар, Карлаг тұтқындары және өнеркәсіп құрылысы жұмысшыларының легі жалпы санды арттырды, ал қазақ халқы екі еседен астам азайды. Сондықтан жалпы халық бойынша жиынтық статистика этнодемографиялық күйреуді жасырады, этникалық бөліністі талдау керек.", "нәтижелер"), 
kbRu("Откочёвки: масштаб и направления", "Республику покинули около 1,13 млн человек. Безвозвратно — около 676 тыс.; вернулись впоследствии около 454 тыс.; порядка 200 тыс. остались за границей навсегда. Зарубежные направления: Синьцзян (Китай) — крупнейшее, Монголия (Баян-Улгий), Афганистан, Иран, позже Турция (уже вторичная миграция 1950–60-х из Синьцзяна). Внутрисоюзные направления: Западно-Сибирский край, Средняя Волга и Сталинград, Узбекская ССР, Киргизская АССР, Туркменская ССР, Каракалпакская АССР, Урал и Башкирия. ВАЖНО: разбивка по конкретным направлениям — дискуссионная оценка. Сара Кэмерон прямо называет точный подсчёт по направлениям открытым исследовательским вопросом, требующим работы с архивами других республик и Синьцзяна.", "откочёвки"), 
kbEn("Migrations: scale and destinations", "About 1.13 million people left the republic. Permanently — about 676,000; about 454,000 later returned; around 200,000 remained abroad for good. Foreign destinations: Xinjiang (China) — the largest, Mongolia (Bayan-Ölgii), Afghanistan, Iran, and later Turkey (a secondary migration of the 1950s–60s from Xinjiang). Destinations within the union: West Siberian Krai, the Middle Volga and Stalingrad, the Uzbek SSR, the Kirghiz ASSR, the Turkmen SSR, the Karakalpak ASSR, the Urals and Bashkiria. IMPORTANT: the breakdown by specific destination is a debated estimate. Sarah Cameron explicitly calls an exact count by destination an open research question requiring work with the archives of other republics and Xinjiang.", "migrations"), 
kbKz("Көші-қон: ауқымы мен бағыттары", "Республикадан шамамен 1,13 млн адам кетті. Қайтпай кеткендер — шамамен 676 мың; кейін шамамен 454 мың адам оралды; шамамен 200 мың адам шетелде мәңгілікке қалды. Шетелдік бағыттар: Шыңжаң (Қытай) — ең ірісі, Моңғолия (Баян-Өлгий), Ауғанстан, Иран, кейінірек Түркия (1950–60 жж. Шыңжаңнан қайталама көші-қон). Одақ ішіндегі бағыттар: Батыс Сібір өлкесі, Орта Еділ мен Сталинград, Өзбек КСР-і, Қырғыз АКСР-і, Түрікмен КСР-і, Қарақалпақ АКСР-і, Орал мен Башқұртстан. МАҢЫЗДЫ: нақты бағыттар бойынша бөліну — пікірталастық баға. Сара Кэмерон бағыттар бойынша дәл санақты басқа республикалар мен Шыңжаң мұрағаттарымен жұмысты талап ететін ашық зерттеу мәселесі деп тікелей атайды.", "көші-қон"), 
kbRu("Потери скота", "Скот был не товаром, а основой всей системы жизнеобеспечения кочевого и полукочевого хозяйства. От примерно 40 млн голов в 1928 году к 1933 году осталось около 4,5 млн — порядка одной десятой. Разрушение поголовья означало разрушение самой возможности вести привычный образ жизни, и именно поэтому скотоводческие районы пострадали сильнее земледельческих.", "данные"), 
kbEn("Livestock losses", "Livestock was not a commodity but the foundation of the entire subsistence system of the nomadic and semi-nomadic economy. Of roughly 40 million head in 1928, by 1933 about 4.5 million remained — around one-tenth. The destruction of the herd meant the destruction of the very possibility of the customary way of life, and that is exactly why pastoral districts suffered more than farming ones.", "data"), 
kbKz("Мал шығыны", "Мал тауар емес, көшпелі және жартылай көшпелі шаруашылықтың бүкіл өмір сүру жүйесінің негізі болды. 1928 жылы шамамен 40 млн бастан 1933 жылға қарай шамамен 4,5 млн қалды — оннан бір бөлігі шамасында. Мал басының құрып кетуі әдеттегі өмір салтын жүргізу мүмкіндігінің құрып кетуін білдірді, дәл сондықтан мал шаруашылығы аудандары егіншілік аудандарынан көбірек зардап шекті.", "деректер"), 
kbRu("Сара Кэмерон: тезис", "Сара Кэмерон, «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan» (2018). Тезис: голод — результат насильственной седентаризации и уничтожения кочевого хозяйства как способа жизни, а не только следствие зерновых изъятий. Казахи гибли из-за уничтожения скота. Картографическая линза Кэмерон: максимальные потери там, где доля кочевого и полукочевого скотоводства была наибольшей.", "историография"), 
kbEn("Sarah Cameron: thesis", 'Sarah Cameron, "The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan" (2018). Thesis: the famine is the result of violent sedentarization and the destruction of nomadic husbandry as a way of life, not merely a consequence of grain requisitioning. Kazakhs died from the destruction of livestock. Cameron’s cartographic lens: maximum losses where the share of nomadic and semi-nomadic pastoralism was highest.', "historiography"), 
kbKz("Сара Кэмерон: тезисі", "Сара Кэмерон, «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan» (2018). Тезис: ашаршылық — тек астық тәркілеудің салдары ғана емес, көшпелі шаруашылықтың өмір салты ретінде күштеп отырықшыландыру мен құрып кетуінің нәтижесі. Қазақтар малдың жойылуынан қырылды. Кэмеронның картографиялық көзқарасы: ең үлкен шығындар көшпелі және жартылай көшпелі мал шаруашылығының үлесі ең жоғары жерлерде.", "тарихнама"), 
kbRu("Никколо Пьянчола: тезис", "Никколо Пьянчола объясняет голод через имперскую иерархию приоритетов: ресурсы изымались с периферии в пользу индустриальных центров. Его линза объясняет феномен аномального роста — районы с ГУЛАГом и промышленным строительством (Караганда, Балхаш, Риддер) прибавляют в общем населении, теряя коренное. Административная статистика по общему населению при этом маскирует этнодемографический коллапс.", "историография"), 
kbEn("Niccolò Pianciola: thesis", "Niccolò Pianciola explains the famine through an imperial hierarchy of priorities: resources were extracted from the periphery to benefit industrial centers. His lens explains the phenomenon of anomalous growth — districts with GULAG camps and industrial construction (Karaganda, Balkhash, Ridder) gain in total population while losing their indigenous population. Administrative statistics on total population mask the ethno-demographic collapse.", "historiography"), 
kbKz("Никколо Пьянчола: тезисі", "Никколо Пьянчола ашаршылықты империялық басымдықтар иерархиясы арқылы түсіндіреді: ресурстар шет аймақтардан өнеркәсіп орталықтарының пайдасына тартып алынды. Оның көзқарасы аномальды өсім құбылысын түсіндіреді — ГУЛАГ пен өнеркәсіп құрылысы бар аудандар (Қарағанды, Балқаш, Риддер) жалпы халық санында ұтады, ал байырғы халқын жоғалтады. Жалпы халық бойынша әкімшілік статистика бұл кезде этнодемографиялық күйреуді жасырады.", "тарихнама"), 
kbRu("Талас Омарбеков: тезис", "Талас Омарбеков и казахстанская национальная историографическая школа ставят в центр субъектность казахов и трактуют голод как целенаправленную политику против народа. Акцент на сопротивлении: свыше 380 восстаний и волнений в 1929–1931 годах — Сузакское, Иргизское, Батпаккаринское, Адаевское, Каракумское, Абралинское. Подавление восстаний и заградительные заслоны на путях откочёвок усиливали смертность в тех же районах.", "историография"), 
kbEn("Talas Omarbekov: thesis", "Talas Omarbekov and the Kazakhstani national historiographic school place Kazakh agency at the center and treat the famine as a deliberate policy against the people. The emphasis is on resistance: more than 380 uprisings and disturbances in 1929–1931 — Suzak, Irgiz, Batpakkara, Adai, Karakum, Abralin. The suppression of the uprisings and blocking cordons on migration routes intensified mortality in the same districts.", "historiography"), 
kbKz("Талас Омарбеков: тезисі", "Талас Омарбеков және қазақстандық ұлттық тарихнамалық мектеп қазақтардың субъектілігін орталыққа қояды және ашаршылықты халыққа қарсы бағытталған мақсатты саясат ретінде түсіндіреді. Басты назар қарсылықта: 1929–1931 жж. 380-нен астам көтеріліс пен толқу болды — Созақ, Ырғыз, Батпаққара, Адай, Қарақұм, Абыралы. Көтерілістерді басу және көші-қон жолдарындағы жазалау бекеттері сол аудандардағы өлім-жітімді күшейтті.", "тарихнама"), 
kbRu("Сравнение с другими голодами 1930-х", "По абсолютному числу жертв наибольшие потери дала Украинская ССР — Голодомор 1932–33 гг., 3,5–5 млн при населении около 31 млн, то есть порядка 13 %. По ОТНОСИТЕЛЬНОЙ потере лидирует Казахская АССР: 38–42 % численности казахского народа. Также пострадали Поволжье, Северный Кавказ и Кубань, Западная Сибирь и Урал. Для масштаба на карте приведён голод в Китае (Ганьсу, Шэньси) 1928–1930 гг. — 3–10 млн, но у него иные причины: засуха и война милитаристов.", "сравнение"), 
kbEn("Comparison with other 1930s famines", "By absolute number of victims, the Ukrainian SSR saw the greatest losses — the Holodomor of 1932–33, 3.5–5 million out of a population of about 31 million, i.e. around 13%. By RELATIVE loss, the Kazak ASSR leads: 38–42% of the Kazakh people. The Volga region, the North Caucasus and Kuban, and Western Siberia and the Urals also suffered. For scale, the map includes the famine in China (Gansu, Shaanxi) of 1928–1930 — 3–10 million — but it had different causes: drought and warlord conflict.", "comparison"), 
kbKz("1930 жж. басқа ашаршылықтармен салыстыру", "Абсолютті құрбандар саны бойынша ең үлкен шығынды Украин КСР-і берді — 1932–33 жж. Голодомор, халқы шамамен 31 млн болғанда 3,5–5 млн, яғни шамамен 13 %. САЛЫСТЫРМАЛЫ шығын бойынша Қазақ АКСР-і алда: қазақ халқының 38–42 %-ы. Сондай-ақ Еділ бойы, Солтүстік Кавказ бен Кубань, Батыс Сібір мен Орал да зардап шекті. Масштабты көрсету үшін картада 1928–1930 жж. Қытайдағы (Ганьсу, Шэньси) ашаршылық — 3–10 млн берілген, бірақ оның себептері басқа: құрғақшылық пен милитаристер соғысы.", "салыстыру"), 
kbRu("Переписи 1926 и 1939 годов", "По Всесоюзной переписи 1926 года казахов насчитывалось около 3,968 млн, по переписи 1939 года — около 3,1 млн. Убыль между переписями — порядка 867 тыс. человек. Но прямое вычитание занижает потери: перепись 1937 года (2,18 млн казахов) была объявлена «вредительской» и засекречена, а перепись 1939 года проводилась с политическим давлением на итоговые цифры. Кроме того, между переписями действуют одновременно смертность, откочёвки и возвращение части откочевников, поэтому разложить убыль на компоненты по одним лишь итогам переписей невозможно.", "данные"), 
kbEn("The 1926 and 1939 censuses", 'The 1926 All-Union Census counted about 3.968 million Kazakhs; the 1939 census counted about 3.1 million. The decline between the censuses is about 867,000 people. But simple subtraction understates the losses: the 1937 census (2.18 million Kazakhs) was declared "sabotage" and suppressed, and the 1939 census was conducted under political pressure on the final figures. Moreover, mortality, migration, and the return of some migrants all occur simultaneously between censuses, so the decline cannot be decomposed into components from census totals alone.', "data"), 
kbKz("1926 және 1939 жылдардағы санақтар", "1926 жылғы Бүкілодақтық санақ бойынша шамамен 3,968 млн қазақ, ал 1939 жылғы санақ бойынша шамамен 3,1 млн қазақ саналды. Санақтар арасындағы кему — шамамен 867 мың адам. Бірақ жай ғана азайту шығынды төмендетіп көрсетеді: 1937 жылғы санақ (2,18 млн қазақ) «зиянкестік» деп жарияланып, құпияланды, ал 1939 жылғы санақ түпкі сандарға саяси қысым астында жүргізілді. Сонымен қатар, санақтар арасында өлім, көші-қон және кейбір көшкендердің оралуы бір мезгілде жүреді, сондықтан кемуді тек санақ қорытындылары бойынша құрамдас бөліктерге жіктеу мүмкін емес.", "деректер"), 
kbRu("Ограничения проекта: честные оговорки", "Границы на картах — опорная реконструкция: современная административная геометрия (geoBoundaries), объединённая под исторические единицы 1926 и 1939 годов. Это НЕ архивный кадастровый shapefile, и реальные исторические границы отличались. Демографические атрибуты хранятся отдельно от геометрии. Наборы атрибутов 1926 и 1939 годов происходят из разных источников и имеют разные базовые итоги, поэтому сравнивать корректнее доли, а не абсолютные суммы. Ареальная интерполяция предполагает равномерную плотность внутри единицы, что для кочевого населения является упрощением. Всё это нужно проговаривать на защите прямо — это не слабость работы, а часть её методологической рефлексии.", "методология"), 
kbEn("Project limitations: honest caveats", "The boundaries on the maps are a reference reconstruction: modern administrative geometry (geoBoundaries) merged under the 1926 and 1939 historical units. This is NOT an archival cadastral shapefile, and the real historical boundaries differed. Demographic attributes are stored separately from the geometry. The 1926 and 1939 attribute sets come from different sources and have different base totals, so it is more accurate to compare shares rather than absolute sums. Areal interpolation assumes uniform density within a unit, which is a simplification for a nomadic population. All of this should be stated plainly in a defense — it is not a weakness of the work but part of its methodological reflection.", "methodology"), 
kbKz("Жобаның шектеулері: адал ескертулер", "Карталардағы шекаралар — тірек реконструкция: 1926 және 1939 жылдардың тарихи бірліктеріне сәйкес біріктірілген қазіргі әкімшілік геометрия (geoBoundaries). Бұл мұрағаттық кадастрлық shapefile ЕМЕС, нақты тарихи шекаралар өзгеше болған. Демографиялық атрибуттар геометриядан бөлек сақталады. 1926 және 1939 жылдардың атрибут жиынтықтары әртүрлі көздерден алынған және базалық қорытындылары бөлек, сондықтан абсолютті сомаларды емес, үлестерді салыстырған дұрысырақ. Ареалдық интерполяция бірлік ішінде тығыздықтың бірдей болуын болжайды, бұл көшпелі халық үшін жеңілдету. Мұның бәрін қорғауда тікелей айту керек — бұл жұмыстың кемшілігі емес, оның әдіснамалық рефлексиясының бөлігі.", "әдіснама"), 
kbRu("Как пользоваться сайтом", "Разделы: «Карта Казахстана» — хороплет по сеткам 1926 и 1939 годов с переключением метрик, слоями лагерей и восстаний, сплит-сравнением и режимом StoryMap. «Карта мира» — потоки откочёвок и сравнительный слой голода 1930-х. «Историография» — три исследовательские линзы с подсветкой соответствующих регионов. «Библиография» — научные источники, на которых основан атлас. «Данные и MAUP» — таблица, калькулятор ареальной интерполяции и экспорт GeoJSON/CSV. «Квиз» — проверка знаний. Клик по региону открывает карточку с графиком и экспортом в PDF.", "навигация"), 
kbEn("How to use the site", 'Sections: "Map of Kazakhstan" — a choropleth over the 1926 and 1939 grids with switchable metrics, camp and uprising layers, a split comparison, and a StoryMap mode. "World Map" — migration flows and a comparative layer of 1930s famines. "Historiography" — three research lenses that highlight the corresponding regions. "Bibliography" — the scholarly sources underlying the atlas. "Data & MAUP" — a table, an areal-interpolation calculator, and GeoJSON/CSV export. "Quiz" — a knowledge check. Clicking a region opens a card with a chart and PDF export.', "navigation"), 
kbKz("Сайтты қалай пайдалану керек", "Бөлімдер: «Қазақстан картасы» — 1926 және 1939 жылдардың торлары бойынша хороплет, көрсеткіштерді ауыстыру, лагерь мен көтеріліс қабаттары, сплит-салыстыру және StoryMap режимі. «Әлем картасы» — көші-қон ағындары және 1930 жж. ашаршылықтардың салыстырмалы қабаты. «Тарихнама» — сәйкес аймақтарды бөліп көрсететін үш зерттеу көзқарасы. «Библиография» — атластың негізіндегі ғылыми дереккөздер. «Деректер және MAUP» — кесте, ареалдық интерполяция калькуляторы және GeoJSON/CSV экспорты. «Викторина» — білімді тексеру. Аймаққа басу графигі мен PDF экспорты бар карточканы ашады.", "навигация"), 
KZ[1939].forEach(f => {
const p = f.p;
kbRu("Область: " + p.name, `${p.name} (сетка 1939 г.). Казахское население: 1926 г. — ${p.kazakh_1926.toLocaleString("ru")}, 1939 г. — ${p.kazakh_1939.toLocaleString("ru")}. Общее население: 1926 г. — ${p.total_1926.toLocaleString("ru")}, 1939 г. — ${p.total_1939.toLocaleString("ru")}. Потеря казахского населения: ${p.loss_percent} %. ${p.desc}`, "регион"), 
kbEn("Oblast: " + (p.name_en || p.name), `${p.name_en || p.name} (1939 grid). Kazakh population: 1926 — ${p.kazakh_1926.toLocaleString("en-US")}, 1939 — ${p.kazakh_1939.toLocaleString("en-US")}. Total population: 1926 — ${p.total_1926.toLocaleString("en-US")}, 1939 — ${p.total_1939.toLocaleString("en-US")}. Kazakh population loss: ${p.loss_percent}%. ${p.desc_en || p.desc}`, "region"),
kbKz("Облыс: " + (p.name_kz || p.name), `${p.name_kz || p.name} (1939 торы). Қазақ халқы: 1926 ж. — ${p.kazakh_1926.toLocaleString("kk")}, 1939 ж. — ${p.kazakh_1939.toLocaleString("kk")}. Жалпы халық: 1926 ж. — ${p.total_1926.toLocaleString("kk")}, 1939 ж. — ${p.total_1939.toLocaleString("kk")}. Қазақ халқының шығыны: ${p.loss_percent} %. ${p.desc_kz || p.desc}`, "аймақ");
}), KZ[1926].forEach(f => {
const p = f.p;
kbRu("Округ: " + p.name, `${p.name} (сетка 1926 г.). Всего населения: ${p.population_total.toLocaleString("ru")}. Доля казахов: ${p.kazakh_percent} %. ${p.desc}`, "регион"),
kbEn("Okrug: " + (p.name_en || p.name), `${p.name_en || p.name} (1926 grid). Total population: ${p.population_total.toLocaleString("en-US")}. Kazakh share: ${p.kazakh_percent}%. ${p.desc_en || p.desc}`, "region"),
kbKz("Округ: " + (p.name_kz || p.name), `${p.name_kz || p.name} (1926 торы). Жалпы халық: ${p.population_total.toLocaleString("kk")}. Қазақтар үлесі: ${p.kazakh_percent} %. ${p.desc_kz || p.desc}`, "аймақ");
}), FLOWS.forEach(fl => {
kbRu("Направление откочёвки: " + fl.ru.to, `${fl.ru.to} — ${"abroad" === fl.kind ? "зарубежное" : "внутрисоюзное"} направление откочёвок. Оценочный диапазон: ${fl.lo}–${fl.hi} тыс. человек (дискуссионная оценка). ${fl.ru.note}`, "откочёвки"),
kbEn("Migration destination: " + fl.en.to, `${fl.en.to} — a ${"abroad" === fl.kind ? "foreign" : "within-USSR"} migration destination. Estimated range: ${fl.lo}–${fl.hi} thousand people (a debated estimate). ${fl.en.note}`, "migrations"),
kbKz("Көші-қон бағыты: " + fl.kz.to, `${fl.kz.to} — ${"abroad" === fl.kind ? "шетелдік" : "одақ ішіндегі"} көші-қон бағыты. Бағалау аралығы: ${fl.lo}–${fl.hi} мың адам (пікірталастық баға). ${fl.kz.note}`, "көші-қон");
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

function ringsToPath(rings) {
let d = "";
for (const ring of rings) {
for (let i = 0; i < ring.length; i++) d += (i ? "L" : "M") + ring[i][0] + " " + ring[i][1];
d += "Z";
}
return d;
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

const RAMPS = {
blue: [ "#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95", "#0d366b" ],
orange: [ "#fde3d4", "#f8bb9a", "#f28c5e", "#eb6834", "#d95926", "#a34018", "#6b290f" ],
violet: [ "#e6e2fa", "#c7bff2", "#a89ae9", "#8b7cf0", "#6a58c9", "#4a3aa7", "#332878" ]
}, DIVERGE = {
neg: [ "#8c1f1f", "#b53232", "#d03b3b", "#e58080", "#f2c0c0" ],
mid: "#e9e7e2",
pos: [ "#c9dff8", "#9ec5f4", "#5598e7", "#2a78d6", "#184f95" ]
};

function quantileBreaks(vals, k) {
const s = vals.slice().sort((a, b) => a - b), br = [];
for (let i = 1; i < k; i++) br.push(s[Math.floor(i * s.length / k)]);
return br;
}

function rampColor(v, breaks, ramp) {
if (null == v || isNaN(v)) return "var(--no-data)";
let i = 0;
for (;i < breaks.length && v >= breaks[i]; ) i++;
return ramp[Math.min(i, ramp.length - 1)];
}

function divergeColor(v, max) {
if (null == v || isNaN(v)) return "var(--no-data)";
const t = Math.max(-1, Math.min(1, v / max));
if (Math.abs(t) < .06) return DIVERGE.mid;
const arr = t < 0 ? DIVERGE.neg : DIVERGE.pos, i = Math.min(arr.length - 1, Math.floor(Math.abs(t) * arr.length));
return t < 0 ? arr[arr.length - 1 - i] : arr[i];
}

const fmtN = n => Math.round(n).toLocaleString("kz" === LANG ? "kk-KZ" : "en" === LANG ? "en-US" : "ru-RU"), fmtP = (n, d = 1) => (n > 0 ? "+" : "") + n.toFixed(d), METRICS_DEF = {
1939: [ {
id: "loss",
ramp: "orange",
get: p => p.loss,
fmt: v => v.toFixed(1) + " %",
ru: {
label: "Потеря казахского населения",
unit: "%",
hint: "Убыль казахского населения между переписями 1926 и 1939 гг. по каждой области."
},
en: {
label: "Kazakh population loss",
unit: "%",
hint: "The decline in Kazakh population between the 1926 and 1939 censuses, by oblast."
}
}, {
id: "growth",
diverge: 30,
get: p => p.growth,
fmt: v => fmtP(v) + " %",
ru: {
label: "Изменение общего населения",
unit: "%",
hint: "Красное — общее население области сократилось, синее — выросло. Рост при массовой гибели казахов и есть «аномалия» Пьянчолы."
},
en: {
label: "Change in total population",
unit: "%",
hint: 'Red — the oblast’s total population shrank; blue — it grew. Growth alongside mass Kazakh death is Pianciola’s "anomaly".'
}
}, {
id: "gap",
ramp: "violet",
get: p => p.growth + p.kazLoss,
fmt: v => v.toFixed(0) + " п.п.",
ru: {
label: "Разрыв: общее и казахское",
unit: "п.п.",
hint: "На сколько пунктов динамика общего населения «лучше» динамики казахского. Чем темнее, тем сильнее сводная цифра маскирует катастрофу."
},
en: {
label: "Gap: total vs. Kazakh",
unit: "pp",
hint: 'By how many points the total-population trend is "better" than the Kazakh-population trend. The darker the color, the more the aggregate figure masks the catastrophe.'
}
}, {
id: "share1939",
ramp: "blue",
get: p => p.share1939,
fmt: v => v.toFixed(1) + " %",
ru: {
label: "Доля казахов в 1939 г.",
unit: "%",
hint: "Доля казахов в населении области по переписи 1939 года."
},
en: {
label: "Kazakh share in 1939",
unit: "%",
hint: "The share of Kazakhs in the oblast’s population per the 1939 census."
}
}, {
id: "shareShift",
diverge: 9,
get: p => p.shareShift,
fmt: v => fmtP(v, 2) + " п.п.",
ru: {
label: "MAUP-сдвиг доли",
unit: "п.п.",
hint: "На сколько меняется доля области в общем распределении казахов 1926 г., если считать её по сетке округов, а не по сетке областей. Это и есть эффект MAUP."
},
en: {
label: "MAUP share shift",
unit: "pp",
hint: "How much the oblast’s share of the overall 1926 Kazakh distribution changes when computed on the okrug grid instead of the oblast grid. This is the MAUP effect."
}
} ],
1926: [ {
id: "kazShare",
ramp: "blue",
get: p => p.kazShare,
fmt: v => v.toFixed(1) + " %",
ru: {
label: "Доля казахов",
unit: "%",
hint: "Доля казахов в населении округа по переписи 1926 года."
},
en: {
label: "Kazakh share",
unit: "%",
hint: "The share of Kazakhs in the okrug’s population per the 1926 census."
}
}, {
id: "kazAbs",
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
}
}, {
id: "pop",
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

function metricColor(period, m, p) {
const v = m.get(p);
return m.diverge ? divergeColor(v, m.diverge) : rampColor(v, quantileBreaks(KZ[period].map(f => m.get(f.p)), RAMPS[m.ramp].length), RAMPS[m.ramp]);
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
currentView = v, $$(".tab").forEach(t => t.classList.toggle("on", t.dataset.v === v)), 
$$("section.view").forEach(s => s.classList.toggle("on", s.id === "v-" + v)), window.scrollTo({
top: 0,
behavior: "smooth"
}), "world" === v && worldMap.ensure(), "schools" === v && schoolsMap.ensure(), 
"data" === v && buildTable(), "biblio" === v && renderBiblio();
}

function toast(msg) {
const t = $("#toast");
t.textContent = msg, t.classList.add("on"), clearTimeout(toastT), toastT = setTimeout(() => t.classList.remove("on"), 2600);
}

$("#tabs").addEventListener("click", e => {
const t = e.target.closest(".tab");
t && showView(t.dataset.v);
}), $("#bTheme").addEventListener("click", () => {
const light = "light" === document.documentElement.getAttribute("data-theme");
document.documentElement.setAttribute("data-theme", light ? "dark" : "light"), toast(t(light ? "toastThemeDark" : "toastThemeLight")), 
"function" == typeof refreshCharts && refreshCharts();
});

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
$("#drawerBody").innerHTML = html, $("#drawer").classList.add("on"), $("#ov").classList.add("on");
}

function drawerClose() {
$("#drawer").classList.remove("on"), $("#ov").classList.remove("on");
}

function makeZoom(svgSel, gSel, fitBox, vbW, vbH, pad = 26) {
const svg = $(svgSel), g = $(gSel), [x0, y0, x1, y1] = fitBox, s = Math.min((vbW - 2 * pad) / (x1 - x0), (vbH - 2 * pad) / (y1 - y0)), base = {
s: s,
tx: (vbW - (x1 - x0) * s) / 2 - x0 * s,
ty: (vbH - (y1 - y0) * s) / 2 - y0 * s
}, st = {
k: 1,
x: 0,
y: 0
};
let onChange = null;
function apply(anim) {
g.style.transition = anim ? "transform .55s cubic-bezier(.4,0,.2,1)" : "none", g.setAttribute("transform", `translate(${st.x} ${st.y}) scale(${st.k}) translate(${base.tx} ${base.ty}) scale(${base.s})`), 
onChange && onChange(st.k, base.s);
}
apply();
const api = {
base: base,
state: st,
apply: apply,
setOnChange(f) {
onChange = f, f(st.k, base.s);
},
proj: (x, y) => [ base.tx + x * base.s, base.ty + y * base.s ],
reset(anim = !0) {
st.k = 1, st.x = 0, st.y = 0, apply(anim);
},
zoom(f) {
st.k = Math.max(.6, Math.min(9, st.k * f)), apply(!0);
},
focus(box, anim = !0, margin = 1.5) {
if (!box) return api.reset(anim);
const [a, b, c, d] = box, [px0, py0] = api.proj(a, b), [px1, py1] = api.proj(c, d), w = Math.max(px1 - px0, 1), h = Math.max(py1 - py0, 1), k = Math.max(.7, Math.min(6, Math.min(vbW / (w * margin), vbH / (h * margin))));
st.k = k, st.x = vbW / 2 - k * (px0 + px1) / 2, st.y = vbH / 2 - k * (py0 + py1) / 2, 
apply(anim);
}
};
svg.addEventListener("wheel", e => {
e.preventDefault(), api.zoom(e.deltaY < 0 ? 1.16 : 1 / 1.16);
}, {
passive: !1
});
let drag = null;
svg.addEventListener("pointerdown", e => {
e.target.closest("[data-nodrag]") || (drag = {
x: e.clientX,
y: e.clientY,
sx: st.x,
sy: st.y
}, svg.setPointerCapture(e.pointerId), svg.style.cursor = "grabbing");
}), svg.addEventListener("pointermove", e => {
if (!drag) return;
const r = svg.getBoundingClientRect(), sc = vbW / r.width;
st.x = drag.sx + (e.clientX - drag.x) * sc, st.y = drag.sy + (e.clientY - drag.y) * sc, 
apply();
});
const up = () => {
drag = null, svg.style.cursor = "";
};
return svg.addEventListener("pointerup", up), svg.addEventListener("pointercancel", up), 
api;
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

function syncKzScale() {
const k = zKz.state.k, u = zKz.base.s * k, fs = (8 / u).toFixed(3), sw = (2.4 / u).toFixed(3);
$$("#lLabels text, #lSplit text").forEach(t => {
t.style.fontSize = fs + "px", t.style.strokeWidth = sw + "px";
});
const ms = 1 / u;
$$("#lCamps g,#lRevolts g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${ms})`);
}), S.split && $("#clipRect") && setSplit(splitPos);
}

function periodName(p) {
return t("1926" === p ? "gridUnitOkrug" : "gridUnitOblast");
}

zKz.setOnChange(() => syncKzScale());

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
const per = S.period, m = metricDef(per, S.metric), base = $("#lBase"), lbl = $("#lLabels");
base.innerHTML = "", lbl.innerHTML = "", KZ[per].forEach(f => {
const p = el("path", {
d: f.d,
class: "region",
fill: metricColor(per, m, f.p),
"data-id": f.p.id,
"data-nodrag": "1"
});
p.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span>\n        <div class="s">${esc(m.label)}<br>${esc(t("chartHint"))}</div>`), 
tipMove(e);
}), p.addEventListener("mousemove", tipMove), p.addEventListener("mouseleave", tipHide), 
p.addEventListener("click", () => {
tipHide(), openRegion(per, f);
}), base.appendChild(p);
}), KZ[per].forEach(f => {
const t2 = el("text", {
x: f.c[0].toFixed(2),
y: f.c[1].toFixed(2),
class: "lbl"
});
t2.textContent = shortName(f), lbl.appendChild(t2);
}), lbl.classList.toggle("off", !S.layers.labels), renderLegend(per, m), renderStats(per, m), 
$("#metricHint").textContent = m.hint, syncKzScale();
}

function renderLegend(per, m) {
const L = $("#legend");
L.innerHTML = "";
const add = h => L.insertAdjacentHTML("beforeend", h);
if (m.diverge) add(`<b>−${m.diverge}</b>`), [ ...DIVERGE.neg ].reverse().forEach(c => add(`<i style="background:${c}"></i>`)), 
add(`<i style="background:${DIVERGE.mid}"></i>`), DIVERGE.pos.forEach(c => add(`<i style="background:${c}"></i>`)), 
add(`<b>+${m.diverge} ${m.unit}</b>`); else {
const vals = KZ[per].map(f => m.get(f.p));
quantileBreaks(vals, RAMPS[m.ramp].length), add(`<b>${m.fmt(Math.min(...vals))}</b>`), 
RAMPS[m.ramp].forEach(c => add(`<i style="background:${c}"></i>`)), add(`<b>${m.fmt(Math.max(...vals))}</b>`);
}
add(`<b style="margin-left:12px;color:var(--ink-soft)">${esc(m.label)}</b>`);
}

function renderStats(per, m) {
const box = $("#statsKz");
if ("1926" === per) {
const tot = KZ[1926].reduce((s, f) => s + f.p.pop, 0), kaz = KZ[1926].reduce((s, f) => s + f.p.kazAbs, 0);
box.innerHTML = `\n      <div class="stat"><u>${esc(t("okrugsCount"))}</u><b>8</b><s>${esc(t("byOkrugsGrid"))}</s></div>\n      <div class="stat"><u>${esc(t("totalPopulation"))}</u><b>${fmtN(tot)}</b><s>${esc(t("byOkrugsGrid"))}</s></div>\n      <div class="stat"><u>${esc(t("kazakhsWord"))}</u><b>${fmtN(kaz)}</b><s>${(kaz / tot * 100).toFixed(1)} ${esc(t("toKazakhsShare"))}</s></div>\n      <div class="stat"><u>${esc(t("livestockCount"))}</u><b>≈ 40 ${"kz" === LANG ? "млн" : "en" === LANG ? "million" : "млн"}</b><s>${esc(t("toThousandKm"))}</s></div>`;
} else {
const k26 = KZ[1939].reduce((s, f) => s + f.p.kazakh_1926, 0), k39 = KZ[1939].reduce((s, f) => s + f.p.kazakh_1939, 0), worst = KZ[1939].slice().sort((a, b) => b.p.loss - a.p.loss)[0], grew = KZ[1939].filter(f => f.p.growth > 0).length;
box.innerHTML = `\n      <div class="stat"><u>${esc(t("oblastsCount"))}</u><b>12</b><s>${esc(t("byOblastsGrid"))}</s></div>\n      <div class="stat"><u>${esc(t("kazakhLoss"))}</u><b style="color:var(--carmine2)">−${((k26 - k39) / k26 * 100).toFixed(1)} %</b><s>${fmtN(k26 - k39)} ${"kz" === LANG ? "адам" : "en" === LANG ? "people" : "человек"}</s></div>\n      <div class="stat"><u>${esc(t("maxLoss"))}</u><b style="font-size:15px">${esc(shortName(worst))}</b><s>${worst.p.loss.toFixed(1)} %</s></div>\n      <div class="stat"><u>${esc(t("anomalyGrowth"))}</u><b>${grew} ${esc(t("ofOblasts"))}</b><s>${esc(t("grewOverall"))}</s></div>`;
}
}

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
r: 9,
cx: 0,
cy: 0,
fill: "transparent"
});
g.appendChild(hit), g.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(L.n)}</b><div class="s">${esc(L.t)}</div>`), tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
cg.appendChild(g);
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
r: 8,
cx: 0,
cy: 0,
fill: "transparent"
})), g.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(L.n)} ${esc(t("tipUprising"))}</b><div class="s">${r.y} ${esc(t("tipUprisingYear"))}</div>`), 
tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
rg.appendChild(g);
});
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
const m = metricDef("1939", "loss"), g = el("g", {
"clip-path": "url(#clipSplit)"
});
KZ[1939].forEach(f => {
const p = el("path", {
d: f.d,
class: "region",
fill: metricColor("1939", m, f.p),
"data-nodrag": "1"
});
p.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span>\n        <div class="s">${esc(m.label)} · ${"kz" === LANG ? "1939 ж. торы" : "en" === LANG ? "1939 grid" : "сетка 1939 г."}</div>`),
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
}), sp.appendChild(g), syncKzScale(), setSplit(splitPos);
const ramp = r => RAMPS[r].map(c => `<i style="background:${c}"></i>`).join("");
$("#legend").innerHTML = `<b>1926 · ${esc(metricDef("1926", "kazShare").label.toLowerCase())}</b>${ramp("blue")}\n    <b style="margin-left:16px">1939 · ${esc(metricDef("1939", "loss").label.toLowerCase())}</b>${ramp("orange")}`;
}

function setSplit(frac) {
splitPos = Math.max(.04, Math.min(.96, frac)), $("#wrapKz"), $("#divider").style.left = 100 * splitPos + "%";
const r = $("#clipRect");
if (r) {
const st = zKz.state, b = zKz.base, local = ((splitPos * VB.w - st.x) / st.k - b.tx) / b.s, W = KZ_BBOX[2] - KZ_BBOX[0];
r.setAttribute("x", local), r.setAttribute("width", Math.max(0, KZ_BBOX[2] + W - local)), 
$$("#lLabels text").forEach(t => {
t.style.opacity = +t.getAttribute("x") > local - .012 ? 0 : 1;
}), $$("#lSplit text").forEach(t => {
t.style.opacity = +t.getAttribute("x") < local + .012 ? 0 : 1;
});
}
}

function openRegion(per, f) {
const p = f.p;
S.selected = p.id;
let html = `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">\n    <div><h3 style="font-size:18px">${esc(pName(p))}</h3>\n    <p style="color:var(--ink-mute);font-size:11.5px;margin:3px 0 0">${esc(t("regionGridLabel"))} ${per} ${esc(t("regionOf"))} · ${esc(pType(p))}</p></div>\n    <button class="btn ico ghost" onclick="drawerClose()">✕</button></div>`;
if ("1939" === per) {
const tags = LENS_TAGS[p.id] || {};
html += `<div style="margin:13px 0">\n      ${tags.nomadic ? `<span class="badge">${esc(t("tagNomadic"))}</span>` : ""}\n      ${tags.gulag ? `<span class="badge">${esc(t("tagGulag"))}</span>` : ""}\n      ${tags.unrest ? `<span class="badge">${esc(t("tagUnrest"))}</span>` : ""}</div>\n    <div style="background:var(--panel2);border-radius:11px;padding:15px;text-align:center;margin-bottom:13px">\n      <div style="font-size:42px;font-weight:700;color:var(--carmine2);line-height:1">−${p.loss.toFixed(1)}<span style="font-size:20px"> %</span></div>\n      <div style="font-size:11.5px;color:var(--ink-mute);margin-top:3px">${esc(t("lossOfKazPop"))}</div>\n    </div>\n    <div class="kv"><span>${esc(t("kazakhs1926"))}</span><b>${fmtN(p.kazakh_1926)}</b></div>\n    <div class="kv"><span>${esc(t("kazakhs1939"))}</span><b>${fmtN(p.kazakh_1939)}</b></div>\n    <div class="kv"><span>${esc(t("total1926"))}</span><b>${fmtN(p.total_1926)}</b></div>\n    <div class="kv"><span>${esc(t("total1939"))}</span><b>${fmtN(p.total_1939)}</b></div>\n    <div class="kv"><span>${esc(t("generalPopChange"))}</span><b style="color:${p.growth >= 0 ? "var(--good)" : "var(--carmine2)"}">${fmtP(p.growth)} %</b></div>\n    <div class="kv"><span>${esc(t("kazShareChange"))}</span><b>${p.share1926.toFixed(1)} % → ${p.share1939.toFixed(1)} %</b></div>\n    <div class="kv"><span>${esc(t("maupShift"))}</span><b>${fmtP(p.shareShift, 2)} ${"kz" === LANG ? "п.т." : "en" === LANG ? "pp" : "п.п."}</b></div>`;
} else html += `<div style="background:var(--panel2);border-radius:11px;padding:15px;text-align:center;margin:13px 0">\n      <div style="font-size:42px;font-weight:700;color:var(--s26);line-height:1">${p.kazShare.toFixed(1)}<span style="font-size:20px"> %</span></div>\n      <div style="font-size:11.5px;color:var(--ink-mute);margin-top:3px">${esc(t("shareKazPop"))}</div>\n    </div>\n    <div class="kv"><span>${esc(t("totalPop"))}</span><b>${fmtN(p.pop)}</b></div>\n    <div class="kv"><span>${esc(t("kazakhPop"))}</span><b>${fmtN(p.kazAbs)}</b></div>\n    <div class="kv"><span>${esc(t("otherPop"))}</span><b>${fmtN(p.pop - p.kazAbs)}</b></div>`;
if (html += `<div style="margin:15px 0 0"><canvas id="rChart" height="150"></canvas></div>\n    <p class="prose" style="margin-top:13px">${esc(pDesc(p))}</p>`, 
"1939" === per) {
const parts = MAUP.m.map((row, i) => ({
i: i,
v: row[p.idx]
})).filter(o => o.v > .02).sort((a, b) => b.v - a.v);
parts.length && (html += `<p class="sec-t" style="margin-top:17px">${esc(t("formedFrom"))}</p>`, 
parts.forEach(o => {
const src = KZ[1926][o.i];
html += `<div class="kv"><span>${esc(pName(src.p))}</span><b>${(o.v / MAUP.a39[p.idx] * 100).toFixed(1)} ${esc(t("ofArea"))}</b></div>`;
}), html += `<p class="note" style="margin-top:10px">${esc(tf("maupNote", {
a: fmtN(p.interpKaz),
b: fmtN(p.kazakh_1926),
c: fmtP(p.resid)
}))}</p>`);
}
html += `<div style="margin-top:17px;display:flex;gap:7px;flex-wrap:wrap">\n    <button class="btn sm" onclick="printRegion('${per}','${p.id}')">${esc(t("savePdf"))}</button>\n    <button class="btn sm" onclick="askAbout('${esc(pName(p)).replace(/'/g, "")}')">${esc(t("askAssistant"))}</button></div>`, 
drawerOpen(html), drawChart(per, p);
}

$("#bSplit").addEventListener("click", () => {
S.split = !S.split, $("#bSplit").classList.toggle("gold", S.split), $("#divider").classList.toggle("on", S.split), 
$("#lblL").classList.toggle("on", S.split), $("#lblR").classList.toggle("on", S.split), 
S.split ? (S.period = "1926", S.metric = "kazShare", syncPeriodUI(), renderKz(), 
toast(t("toastSplitHint"))) : renderKz(), renderSplit();
}), (() => {
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
rChart = new Chart(cv.getContext("2d"), {
type: "bar",
data: {
labels: cfg.labels,
datasets: cfg.ds.map(d => ({
...d,
borderRadius: 4
}))
},
options: {
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
const p = f.p, rows = "1939" === per ? [ [ t("kazakhs1926"), fmtN(p.kazakh_1926) ], [ t("kazakhs1939"), fmtN(p.kazakh_1939) ], [ t("total1926"), fmtN(p.total_1926) ], [ t("total1939"), fmtN(p.total_1939) ], [ t("kazakhLoss"), p.loss.toFixed(1) + " %" ], [ t("generalPopChange"), fmtP(p.growth) + " %" ], [ t("maupShift"), fmtP(p.shareShift, 2) + " " + ("kz" === LANG ? "п.т." : "en" === LANG ? "pp" : "п.п.") ] ] : [ [ t("totalPop"), fmtN(p.pop) ], [ t("kazakhPop"), fmtN(p.kazAbs) ], [ t("shareKazPop").replace(/^./, c => c.toUpperCase()), p.kazShare.toFixed(1) + " %" ] ], locale = "kz" === LANG ? "kk-KZ" : "en" === LANG ? "en-US" : "ru-RU";
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
renderKz());
}), $("#metrics").addEventListener("click", e => {
const c = e.target.closest(".chip[data-m]");
c && (S.metric = c.dataset.m, $$("#metrics .chip").forEach(x => {
const on = x === c;
x.classList.toggle("on", on), x.querySelector("input").checked = on;
}), renderKz());
}), $$(".chip[data-l] input").forEach(inp => {
inp.addEventListener("change", () => {
const chip = inp.closest(".chip"), k = chip.dataset.l;
S.layers[k] = inp.checked, chip.classList.toggle("on", inp.checked), "labels" === k ? $("#lLabels").classList.toggle("off", !inp.checked) : $("#l" + k[0].toUpperCase() + k.slice(1)).classList.toggle("off", !inp.checked);
});
}), $("#zIn").addEventListener("click", () => zKz.zoom(1.35)), $("#zOut").addEventListener("click", () => zKz.zoom(1 / 1.35)), 
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

$("#bStory").addEventListener("click", () => S.story >= 0 ? storyStop() : storyStart()), 
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

const worldMap = {
ready: !1,
ensure() {
if (this.ready) return;
this.ready = !0;
const M = WORLD.meta;
zW = makeZoom("#svgW", "#gW", [ M.minx, M.miny, M.maxx, M.maxy ], VBW.w, VBW.h, 12), 
zW.setOnChange(() => syncWScale()), drawWorldBase(), renderWorld(), $("#wIn").addEventListener("click", () => zW.zoom(1.35)), 
$("#wOut").addEventListener("click", () => zW.zoom(1 / 1.35)), $("#wRst").addEventListener("click", () => {
WS.scope = "region" === WS.scope ? "world" : "region", $("#wRst").textContent = "region" === WS.scope ? t("worldWhole") : t("worldToRegion"), 
renderWorld();
}), $("#wRst").textContent = t("worldWhole");
}
};

function syncWScale() {
const u = zW.base.s * zW.state.k;
$$("#wNode g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${1 / u})`);
});
const hideLbl = "flows" === WS.layer && "world" === WS.scope;
$$("#wLbl text").forEach(t => {
t.style.fontSize = 9 / u + "px", t.style.strokeWidth = 2.6 / u + "px", t.style.display = hideLbl && "1" !== t.dataset.keep ? "none" : "";
});
}

function drawWorldBase() {
const gr = $("#wGrat"), ct = $("#wCtry");
gr.innerHTML = "", ct.innerHTML = "";
const defs = el("defs");
[ [ "arrA", "#eb6834" ], [ "arrS", "#38bdf8" ] ].forEach(([id, col]) => {
const mk = el("marker", {
id: id,
viewBox: "0 0 10 10",
refX: 8,
refY: 5,
markerWidth: 4.2,
markerHeight: 4.2,
orient: "auto-start-reverse",
markerUnits: "strokeWidth"
});
mk.appendChild(el("path", {
d: "M0 1 L9 5 L0 9 Z",
fill: col
})), defs.appendChild(mk);
}), $("#svgW").appendChild(defs), WORLD.graticule.forEach(line => {
let d = "";
line.forEach((p, i) => d += (i ? "L" : "M") + p[0] + " " + p[1]), gr.appendChild(el("path", {
d: d,
class: "grat"
}));
}), WORLD.countries.forEach(c => {
const p = el("path", {
d: ringsToPath(c.r),
class: "ctry",
"data-n": c.n,
"data-nodrag": "1"
});
ct.appendChild(p);
});
}

const CTRY_ALIAS = {
xinjiang: "China",
mongolia: "Mongolia",
afghanistan: "Afghanistan",
iran: "Iran",
turkey: "Turkey",
uzbek: "Uzbekistan",
kirghiz: "Kyrgyzstan",
turkmen: "Turkmenistan",
karakalpak: "Uzbekistan",
westsib: "Russia",
volga: "Russia",
urals: "Russia"
};

function renderWorld() {
const fl = $("#wFlow"), nd = $("#wNode"), lb = $("#wLbl");
fl.innerHTML = "", nd.innerHTML = "", lb.innerHTML = "", $$("#wCtry .ctry").forEach(p => p.style.fill = ""), 
$("#worldCtl").style.display = "flows" === WS.layer ? "" : "none";
const pts = "flows" === WS.layer ? renderFlows(fl, nd, lb) : renderFamines(fl, nd, lb);
if (syncWScale(), renderWorldLegend(), renderWorldStats(), "region" === WS.scope && pts && pts.length) {
const b = pts.reduce((a, p) => [ Math.min(a[0], p[0]), Math.min(a[1], p[1]), Math.max(a[2], p[0]), Math.max(a[3], p[1]) ], [ 1 / 0, 1 / 0, -1 / 0, -1 / 0 ]);
zW.focus(b, !0, 1.5);
} else zW.reset();
}

function renderFlows(fl, nd, lb) {
$("#worldHint").textContent = t("hintFlows");
const kzC = equalEarth(68, 48), pts = [ kzC ], kzPath = $$("#wCtry .ctry").find(p => "Kazakhstan" === p.dataset.n);
kzPath && (kzPath.style.fill = "var(--carmine)");
const shown = FLOWS.filter(f => WS.kinds[f.kind]), maxV = Math.max(...FLOWS.map(f => f.hi));
shown.forEach((f, i) => {
const L = tr(f), a = equalEarth(f.from[0], f.from[1]), b = equalEarth(f.lon, f.lat);
pts.push(a, b);
const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1, cx = mx - dy / len * len * .18, cy = my + dx / len * len * .18, d = `M${a[0].toFixed(4)} ${a[1].toFixed(4)} Q${cx.toFixed(4)} ${cy.toFixed(4)} ${b[0].toFixed(4)} ${b[1].toFixed(4)}`, col = "abroad" === f.kind ? "#eb6834" : "#38bdf8", w = 1.6 + f.hi / maxV * 6.4, path = el("path", {
d: d,
class: "flow",
stroke: col,
"stroke-opacity": .85,
"stroke-width": w,
"data-w": w,
"marker-end": `url(#${"abroad" === f.kind ? "arrA" : "arrS"})`,
"stroke-dasharray": f.dashed ? "6 5" : null
});
fl.appendChild(path);
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
stroke: "#fff",
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
const maxL = Math.max(...FAMINES.map(f => f.loss)), pts = [];
return FAMINES.forEach(f => {
const L = tr(f), [x, y] = equalEarth(f.lon, f.lat);
pts.push([ x, y ]);
const r = 3 + 13 * Math.sqrt(f.loss / maxL), col = f.hero ? "#c9403f" : f.other ? "#7d8598" : "#d97706", g = el("g", {
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
tipShow(`<b>${esc(L.n)}</b><span class="v">≈ ${f.loss} %</span>\n        <div class="s">${esc(t("famineDeathShare"))}<br>${esc(t("famineVictims"))} ${esc(L.deaths)} · ${esc(t("faminePop"))} ${esc(L.pop)}<br>${esc(L.t)}</div>`), 
tipMove(e);
}), g.addEventListener("mousemove", tipMove), g.addEventListener("mouseleave", tipHide), 
nd.appendChild(g);
const t2 = el("text", {
x: x,
y: y - r / 60 - .04,
class: "lbl"
});
t2.textContent = L.n.replace(" (РСФСР)", "").replace(" (RSFSR)", "").replace("Китай: Ганьсу, Шэньси", "Китай").replace("China: Gansu, Shaanxi", "China"), 
lb.appendChild(t2);
}), pts;
}

function renderWorldLegend() {
$("#wLegend").innerHTML = "flows" === WS.layer ? `<span style="display:inline-flex;align-items:center;gap:6px"><i style="width:22px;height:3px;background:#eb6834;border-radius:2px"></i>${esc(t("legendFlowsAbroad"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:22px;height:3px;background:#38bdf8;border-radius:2px"></i>${esc(t("legendFlowsSoviet"))}</span>\n       <span style="margin-left:14px;color:var(--ink-mute)">${esc(t("legendFlowsThickness"))}</span>` : `<span style="display:inline-flex;align-items:center;gap:6px"><i style="width:11px;height:11px;border-radius:50%;background:#c9403f"></i>${esc(t("legendFamineKz"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:11px;height:11px;border-radius:50%;background:#d97706"></i>${esc(t("legendFamineOther"))}</span>\n       <span style="display:inline-flex;align-items:center;gap:6px;margin-left:14px"><i style="width:11px;height:11px;border-radius:50%;background:#7d8598"></i>${esc(t("legendFamineNon"))}</span>`;
}

function renderWorldStats() {
const box = $("#statsW");
if ("flows" === WS.layer) {
const ab = FLOWS.filter(f => "abroad" === f.kind), sv = FLOWS.filter(f => "soviet" === f.kind), rng = a => `${a.reduce((s, f) => s + f.lo, 0)}–${a.reduce((s, f) => s + f.hi, 0)} ${t("flowRange")}`;
box.innerHTML = `\n      <div class="stat"><u>${esc(t("abroadDest"))}</u><b>${ab.length}</b><s>${rng(ab)}</s></div>\n      <div class="stat"><u>${esc(t("sovietDest"))}</u><b>${sv.length}</b><s>${rng(sv)}</s></div>\n      <div class="stat"><u>${esc(t("biggestDest"))}</u><b style="font-size:15px">${esc(tr(FLOWS[0]).short)}</b><s>100–200 ${t("flowRange")}</s></div>\n      <div class="stat"><u>${esc(t("returnedShare"))}</u><b>40 %</b><s>454 / 1130 ${t("flowRange")}</s></div>`;
} else box.innerHTML = `\n      <div class="stat"><u>${esc(t("relLoss"))}</u><b style="color:var(--carmine2)">38–42 %</b><s>${esc(tr(FAMINES[0]).n)}</s></div>\n      <div class="stat"><u>${esc(t("absMax"))}</u><b style="font-size:15px">${esc(tr(FAMINES[1]).n)}</b><s>${esc(tr(FAMINES[1]).deaths)}</s></div>\n      <div class="stat"><u>${esc(t("deathEstimates"))}</u><b>1,3–4 ${"kz" === LANG ? "млн" : "en" === LANG ? "million" : "млн"}</b></div>\n      <div class="stat"><u>${esc(t("kazakhShareRepublic"))}</u><b>60 % → 38 %</b><s>1926 → 1939</s></div>`;
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
zS.setOnChange(() => syncSScale()), renderSchoolCards(), renderSchoolMap());
}
};

function syncSScale() {
const u = zS.base.s * zS.state.k;
$$("#sLbl text").forEach(t => {
t.style.fontSize = 8 / u + "px", t.style.strokeWidth = 2.4 / u + "px";
}), $$("#sMark g").forEach(n => {
const [x, y] = n.dataset.at.split(",");
n.setAttribute("transform", `translate(${x} ${y}) scale(${1 / u})`);
});
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
return `<div class="kv"><span>${esc(pName(f.p))}</span><b>−${f.p.loss.toFixed(1)} %</b></div>`;
}).join("")}\n      <button class="btn sm" style="margin-top:12px;width:100%;justify-content:center"\n        onclick="askAbout('${esc(L.name).replace(/'/g, "")}')">${esc(t("askAssistantSchool"))}</button>`;
} else d.innerHTML = `<p class="sec-t">${esc(t("chooseSchool"))}</p><p class="hint">${esc(t("chooseSchoolHint"))}</p>`;
renderSchoolMap();
}

function lensKeys(metric) {
return "nomadic" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].nomadic) : "anomaly" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].gulag) : "unrest" === metric ? Object.keys(LENS_TAGS).filter(k => LENS_TAGS[k].unrest) : [];
}

function renderSchoolMap() {
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
tipShow(`<b>${esc(pName(f.p))}</b><span class="v">${m.fmt(m.get(f.p))}</span>\n        <div class="s">${esc(m.label)}</div>`), 
tipMove(e);
}), p.addEventListener("mousemove", tipMove), p.addEventListener("mouseleave", tipHide), 
p.addEventListener("click", () => {
tipHide(), openRegion("1939", f);
}), base.appendChild(p);
}), KZ[1939].forEach(f => {
const t2 = el("text", {
x: f.c[0].toFixed(2),
y: f.c[1].toFixed(2),
class: "lbl"
});
t2.textContent = shortName(f), lbl.appendChild(t2);
}), s && "anomaly" === s.metric && CAMPS.forEach(c => {
const L = tr(c);
addSMark(mark, c.lon, c.lat, "#f0b429", L.n, L.t, "camp");
}), s && "unrest" === s.metric && REVOLTS.forEach(r => {
const L = tr(r);
addSMark(mark, r.lon, r.lat, "#e34948", L.n + " " + t("tipUprising"), r.y + " " + t("tipUprisingYear").split(".")[0], "star");
}), $("#sCaption").textContent = s ? `${tr(s).name}: ${m.label.toLowerCase()} · ${t("focusRegions").toLowerCase()}` : t("schoolCaptionDefault"), 
syncSScale();
}

function addSMark(g, lon, lat, col, title, sub, kind) {
const [x, y] = albers(lon, lat), n = el("g", {
"data-at": `${x},${y}`,
class: "node",
"data-nodrag": "1"
});
"star" === kind ? n.appendChild(el("path", {
d: star(6.5, 2.9, 5),
fill: col,
stroke: "#fff",
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
r: 10,
fill: "transparent"
})), n.addEventListener("mouseenter", e => {
tipShow(`<b>${esc(title)}</b><div class="s">${esc(sub)}</div>`), tipMove(e);
}), n.addEventListener("mousemove", tipMove), n.addEventListener("mouseleave", tipHide), 
g.appendChild(n);
}

const BIBLIOGRAPHY = [ {
url: "https://ewjus.com/index.php/ewjus/en/article/view/220",
ru: {
cat: "Статья",
title: "Сара Кэмерон — «The Kazakh Famine of 1930–33: Current Research and New Directions»",
role: "Современный обзор исследований и историографический контекст."
},
en: {
cat: "Article",
title: 'Sarah Cameron — "The Kazakh Famine of 1930–33: Current Research and New Directions"',
role: "A contemporary survey of research and historiographic context."
},
kz: {
cat: "Мақала",
title: "Сара Кэмерон — «The Kazakh Famine of 1930–33: Current Research and New Directions»",
role: "Зерттеулердің заманауи шолуы және тарихнамалық контекст."
}
}, {
url: "https://books.google.kz/books?hl=en&lr=&id=mEVQDwAAQBAJ&oi=fnd&pg=PT6&redir_esc=y",
ru: {
cat: "Монография",
title: "Сара Кэмерон — «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan»",
role: "Ключевая монография о голоде и становлении советского Казахстана — основной источник историографической линзы Кэмерон на этом сайте."
},
en: {
cat: "Monograph",
title: 'Sarah Cameron — "The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan"',
role: "The key monograph on the famine and the making of Soviet Kazakhstan — the primary source for Cameron’s historiographic lens on this site."
},
kz: {
cat: "Монография",
title: "Сара Кэмерон — «The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan»",
role: "Ашаршылық және кеңестік Қазақстанның қалыптасуы туралы негізгі монография — осы сайттағы Кэмерон көзқарасының басты дереккөзі."
}
}, {
url: "https://journals.openedition.org/monderusse/8681",
ru: {
cat: "Статья",
title: "Никколо Пьянчола — «Famine in the Steppe: The Collectivization of Agriculture and the Kazak Herdsmen, 1928–1934»",
role: "Коллективизация, скотоводство и политика государства в степи."
},
en: {
cat: "Article",
title: 'Niccolò Pianciola — "Famine in the Steppe: The Collectivization of Agriculture and the Kazak Herdsmen, 1928–1934"',
role: "Collectivization, pastoralism, and state policy in the steppe."
},
kz: {
cat: "Мақала",
title: "Никколо Пьянчола — «Famine in the Steppe: The Collectivization of Agriculture and the Kazak Herdsmen, 1928–1934»",
role: "Далада ұжымдастыру, мал шаруашылығы және мемлекет саясаты."
}
}, {
url: "https://www.jstor.org/stable/41036834",
ru: {
cat: "Статья",
title: "Никколо Пьянчола — «The Collectivization Famine in Kazakhstan, 1931–1933»",
role: "Механизмы коллективизации и региональная специфика казахстанского голода."
},
en: {
cat: "Article",
title: 'Niccolò Pianciola — "The Collectivization Famine in Kazakhstan, 1931–1933"',
role: "The mechanisms of collectivization and the regional specifics of the Kazakh famine."
},
kz: {
cat: "Мақала",
title: "Никколо Пьянчола — «The Collectivization Famine in Kazakhstan, 1931–1933»",
role: "Ұжымдастыру механизмдері және қазақ ашаршылығының өңірлік ерекшеліктері."
}
}, {
url: "https://karolinum.cz/data/clanek/26/96643.pdf",
ru: {
cat: "Демография",
title: "A. Saparbekova, J. Kocourková, T. Kučera — «Sweeping Ethno-Demographic Changes in Kazakhstan During the 20th Century»",
role: "Демографические изменения и миграционные волны XX века."
},
en: {
cat: "Demography",
title: 'A. Saparbekova, J. Kocourková, T. Kučera — "Sweeping Ethno-Demographic Changes in Kazakhstan During the 20th Century"',
role: "Demographic change and migration waves across the 20th century."
},
kz: {
cat: "Демография",
title: "A. Saparbekova, J. Kocourková, T. Kučera — «Sweeping Ethno-Demographic Changes in Kazakhstan During the 20th Century»",
role: "XX ғасырдағы демографиялық өзгерістер мен көші-қон толқындары."
}
}, {
url: "https://ieres.elliott.gwu.edu/project/remembering-kazakhstans-great-famine-of-the-1930s/",
ru: {
cat: "Публичная история",
title: "GWU IERES — «Remembering Kazakhstan's Great Famine of the 1930s»",
role: "Образовательный ресурс с документами, свидетельствами и контекстом памяти."
},
en: {
cat: "Public history",
title: 'GWU IERES — "Remembering Kazakhstan\'s Great Famine of the 1930s"',
role: "An educational resource with documents, testimonies, and the context of memory."
},
kz: {
cat: "Қоғамдық тарих",
title: "GWU IERES — «Remembering Kazakhstan's Great Famine of the 1930s»",
role: "Құжаттары, куәліктері және есте сақтау контексі бар білім беру ресурсы."
}
} ];

function renderBiblio() {
const box = $("#biblio");
box && (box.innerHTML = BIBLIOGRAPHY.map(b => {
const L = tr(b), domain = (() => {
try {
return new URL(b.url).hostname.replace(/^www\./, "");
} catch (e) {
return "";
}
})();
return `<div class="card pad biblio-card">\n      <p class="sec-t">${esc(L.cat)}</p>\n      <h4 style="font-size:14.5px;line-height:1.4;margin-bottom:7px">${esc(L.title)}</h4>\n      <p style="font-size:12px;color:var(--ink-soft);margin:0 0 3px"><b style="color:var(--ink-mute);font-weight:600">${"kz" === LANG ? "Атластағы рөлі:" : "en" === LANG ? "Role in the atlas:" : "Роль в атласе:"}</b> ${esc(L.role)}</p>\n      <p class="hint" style="margin:2px 0 10px">${esc(domain)} · ${esc(t("biblioAccessNote"))}</p>\n      <a class="btn sm" href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">${esc(t("biblioOpen"))}</a>\n    </div>`;
}).join(""));
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
f: v => v.toFixed(1) + " %"
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
f: v => "−" + v.toFixed(1) + " %",
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
out.innerHTML = inter <= 1e-4 ? "kz" === LANG ? `<p class="note">«${esc(pName(a.p))}» мен «${esc(pName(b.p))}» қиылыспайды: округ бұл облысқа халық қоспаған. Басқа жұпты таңдаңыз — аймақ карточкасында облыс қай округтерден құралғаны көрсетілген.</p>` : "en" === LANG ? `<p class="note">“${esc(pName(a.p))}” and “${esc(pName(b.p))}” do not intersect: the okrug contributed no population to this oblast. Choose another pair — the region card shows which okrugs formed each oblast.</p>` : `<p class="note">«${esc(pName(a.p))}» и «${esc(pName(b.p))}» не пересекаются: округ не внёс населения в эту область. Выберите другую пару — в карточке области указано, из каких округов она сложилась.</p>` : `\n    <div class="kv"><span>${"kz" === LANG ? "1926 ж. округ аумағы" : "en" === LANG ? "1926 okrug area" : "Площадь округа 1926"}</span><b>${areaSrc.toFixed(2)} ${sqDeg}</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "Қиылысу аумағы" : "en" === LANG ? "Intersection area" : "Площадь пересечения"}</span><b>${inter.toFixed(2)} ${sqDeg}</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "Салмақ коэффициенті" : "en" === LANG ? "Weight coefficient" : "Весовой коэффициент"}</span><b>${(100 * w).toFixed(1)} %</b></div>\n    <div class="kv"><span>${"kz" === LANG ? "1926 ж. округтегі қазақтар" : "en" === LANG ? "Kazakhs in the 1926 okrug" : "Казахи в округе 1926"}</span><b>${fmtN(pop)}</b></div>\n    <div style="margin-top:11px;padding:12px;background:var(--panel2);border-radius:9px;text-align:center">\n      <div style="font-size:10.5px;color:var(--ink-mute);letter-spacing:.05em">P<sub>${"kz" === LANG ? "фрагмент" : "en" === LANG ? "fragment" : "фрагмент"}</sub> = P<sub>1926</sub> × (S<sub>${"kz" === LANG ? "қиыл." : "en" === LANG ? "inter." : "пересеч."}</sub> ÷ S<sub>${"kz" === LANG ? "округ" : "en" === LANG ? "okrug" : "округа"}</sub>)</div>\n      <div style="font-size:12px;color:var(--ink-soft);margin:6px 0">${fmtN(pop)} × ${w.toFixed(4)} =</div>\n      <div style="font-size:27px;font-weight:700;color:var(--gold2);line-height:1.1">${fmtN(frag)}</div>\n      <div style="font-size:10.8px;color:var(--ink-mute);margin-top:3px">${"kz" === LANG ? "қазақтар «" + pName(b.p) + "» облысына ауыстырылады" : "en" === LANG ? "Kazakhs allocated to “" + pName(b.p) + "”" : "казахов переносится в «" + pName(b.p) + "»"}</div>\n    </div>\n    <p class="note" style="margin-top:11px">${"kz" === LANG ? "Допущение: округ ішінде халық тығыздығы бірдей деп есептеледі. Көшпелі халық үшін бұл жеңілдету, және қателіктің бір бөлігі дәл осыдан туындайды. Барлық 96 жұп бойынша қосындыланғанда, бұл процедура үлестірімді 42,46 пайыздық тармаққа ауыстырады." : "en" === LANG ? "The assumption is uniform population density within the okrug. For a nomadic population this is a simplification, and part of the error comes from exactly this. Summed over all 96 pairs, this procedure shifts the distribution by 42.46 percentage points." : "Допущение — равномерная плотность населения внутри округа. Для кочевого населения это упрощение, и часть погрешности берётся именно отсюда. Суммарно по всем 96 парам эта процедура даёт сдвиг распределения на 42,46 п.п."}</p>`;
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
shuffle: !1
};

function quizPrepare() {
if (Q.list = QUIZ.map((q, idx) => {
const L = tr(q), pairs = L.a.map((text, i) => ({
text: text,
ok: i === q.c
}));
if (Q.shuffle) for (let i = pairs.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[pairs[i], pairs[j]] = [ pairs[j], pairs[i] ];
}
return {
q: L.q,
e: L.e,
tag: L.tag,
opts: pairs,
correct: pairs.findIndex(p => p.ok),
src: idx
};
}), Q.shuffle) for (let i = Q.list.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[Q.list[i], Q.list[j]] = [ Q.list[j], Q.list[i] ];
}
Q.i = 0, Q.score = 0, Q.wrong = [], Q.answered = !1;
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
const q = Q.list[Q.i];
Q.answered = !1, $("#qPos").textContent = `${"kz" === LANG ? "Сұрақ" : "en" === LANG ? "Question" : "Вопрос"} ${Q.i + 1} ${"kz" === LANG ? "/" : "en" === LANG ? "of" : "из"} ${Q.list.length}`,
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
});
}

function quizAnswer(i) {
if (Q.answered) return;
Q.answered = !0;
const q = Q.list[Q.i], ok = i === q.correct;
ok ? Q.score++ : Q.wrong.push({
q: q,
picked: i
}), $$("#qOpts .opt").forEach((b, idx) => {
b.disabled = !0, idx === q.correct ? b.classList.add("ok") : idx === i && b.classList.add("no");
});
const ex = $("#qExpl");
ex.innerHTML = `<b style="color:${ok ? "var(--good)" : "var(--carmine2)"}">${esc(t(ok ? "quizCorrect" : "quizWrong"))}.</b> ${esc(q.e)}`, 
ex.classList.add("on"), $("#qScore").textContent = `${"kz" === LANG ? "Дұрыс:" : "en" === LANG ? "Correct:" : "Верных:"} ${Q.score}`,
$("#qNext").style.display = "", $("#qNext").textContent = Q.i === Q.list.length - 1 ? t("quizFinish") : t("quizNext"), 
ok && window.confetti && Q.i === Q.list.length - 1 && 0 === Q.wrong.length && confetti({
particleCount: 90,
spread: 68,
origin: {
y: .7
}
});
}

function quizNext() {
Q.i < Q.list.length - 1 ? (Q.i++, quizRender()) : quizFinish();
}

function quizFinish() {
$("#qPlay").style.display = "none", $("#qDone").style.display = "";
const pct = Math.round(Q.score / Q.list.length * 100);
$("#qBig").textContent = `${Q.score} / ${Q.list.length}`, $("#qBig").style.color = pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--gold2)" : "var(--carmine2)", 
$("#qMsg").textContent = t(100 === pct ? "quizMsg100" : pct >= 80 ? "quizMsg80" : pct >= 50 ? "quizMsg50" : "quizMsgLow");
const rv = $("#qReview");
Q.wrong.length ? rv.innerHTML = `<p class="sec-t">${esc(t("quizReview"))}</p>` + Q.wrong.map(w => `<div class="rv"><b>${esc(w.q.q)}</b>\n        ${esc(t("quizYourAnswer"))} <span style="color:var(--carmine2)">${esc(w.q.opts[w.picked].text)}</span><br>\n        ${esc(t("quizCorrectAnswer"))} <span style="color:var(--good)">${esc(w.q.opts[w.q.correct].text)}</span>\n        <s>${esc(w.q.e)}</s></div>`).join("") : rv.innerHTML = "", 
pct >= 80 && window.confetti && confetti({
particleCount: 130,
spread: 78,
origin: {
y: .6
}
});
}

$("#qGo").addEventListener("click", quizStart), $("#qAgain").addEventListener("click", quizStart), 
$("#qNext").addEventListener("click", quizNext), $("#qBack").addEventListener("click", () => showView("kz")), 
$("#qShuffle").addEventListener("click", () => {
Q.shuffle = !Q.shuffle, $("#qShuffle").classList.toggle("gold", Q.shuffle), toast(Q.shuffle ? t("quizShuffleOn") : t("quizShuffleOff"));
}), $("#qCount").textContent = QUIZ.length;

const MODELS = [ {
id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
ru: "Qwen 2.5 · 1.5B — быстрая (~1,1 ГБ)",
en: "Qwen 2.5 · 1.5B — fast (~1.1 GB)",
kz: "Qwen 2.5 · 1.5B — жылдам (~1,1 ГБ)"
}, {
id: "Qwen2.5-3B-Instruct-q4f16_1-MLC",
ru: "Qwen 2.5 · 3B — точнее (~2,0 ГБ)",
en: "Qwen 2.5 · 3B — more accurate (~2.0 GB)",
kz: "Qwen 2.5 · 3B — дәлірек (~2,0 ГБ)"
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
}, stem = w => w.toLowerCase().replace(/[ёë]/g, "е").slice(0, 5), tokens = s => (s.toLowerCase().match(/[a-zа-яёәғқңөұүһі0-9]{3,}/gi) || []).map(stem), STOP_RU = new Set([ "что", "как", "это", "для", "при", "все", "был", "быть", "esc", "ктo", "где", "поче", "какой", "кака", "какие", "скол", "расс", "why", "the" ]), STOP_EN = new Set([ "what", "how", "this", "that", "for", "with", "are", "was", "were", "the", "and", "who", "why", "which", "about", "does", "did", "when", "where" ]), STOP_KZ = new Set([ "деген", "қалай", "үшін", "бірақ", "кезде", "арқылы", "туралы", "барлық", "болды", "және", "немесе", "қанша", "қандай", "неге", "мынау", "сонда", "дейін", "бұл", "сол" ]);

function stopwords() {
return "kz" === LANG ? STOP_KZ : "en" === LANG ? STOP_EN : STOP_RU;
}

function retrieve(query, k = 4) {
const KB = KBcur(), stop = stopwords(), q = tokens(query).filter(t => !stop.has(t));
if (!q.length) return [];
const df = {};
KB.forEach(p => {
const seen = new Set(tokens(p.title + " " + p.text));
q.forEach(t => {
seen.has(t) && (df[t] = (df[t] || 0) + 1);
});
});
const scored = KB.map(p => {
const tt = tokens(p.title), bt = tokens(p.text);
let s = 0;
return q.forEach(t => {
const idf = Math.log(1 + KB.length / (1 + (df[t] || 0))), inT = tt.filter(x => x === t).length, inB = bt.filter(x => x === t).length;
(inT || inB) && (s += idf * (3 * inT + Math.min(inB, 4)));
}), {
p: p,
s: s
};
}).filter(o => o.s > 0).sort((a, b) => b.s - a.s);
return scored.slice(0, k).map(o => o.p);
}

function offlineAnswer(query) {
const hits = retrieve(query, 3);
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

const SYS_RU = "Ты — научный ассистент школьного исследовательского проекта «Картография коллапса»: историко-географический анализ Ашаршылыка (голода в Казахстане 1930–1933 гг.) средствами HGIS. Ты — программа, языковая модель, работающая в браузере, а не человек: у тебя нет возраста, имени, тела или личной биографии, никогда не выдумывай и не сообщай такие детали о себе.\n\nПравила:\n1. Если приведённый ниже КОНТЕКСТ отвечает на вопрос — отвечай строго на его основе и никогда не выдумывай цифры, имена и даты, которых там нет.\n2. Если контекста нет или он не по вопросу, но вопрос по смыслу связан с темой (казахи, история Казахстана, СССР 1920–1930-х годов, кочевники, коллективизация, голод, историография) — ответь кратко из общих исторических знаний и прямо отметь, что это общие сведения, а не данные сайта.\n3. Если вопрос совсем не по теме проекта — вежливо скажи об этом и предложи спросить про регион, историка, цифру или метод.\n4. Если оценка дискуссионная — назови диапазон и скажи, что он дискуссионный.\n5. Отвечай по-русски, кратко и по существу: 2–5 предложений связным текстом, не более 90 слов всего, БЕЗ нумерованных и маркированных списков (если явно не просят список) и без вступлений вроде «Возможно, вы имеете в виду…» — сразу отвечай по делу и заканчивай мысль до конца.\n6. Тема тяжёлая — пиши уважительно и без сенсационности.", SYS_EN = "You are the research assistant for \"Cartography of Collapse\": a historical-geographic analysis of Asharshylyk (the 1930–1933 famine in Kazakhstan) using HGIS. You are a piece of software, a language model running in the browser, not a human: you have no age, name, body, or personal biography — never invent or state such details about yourself.\n\nRules:\n1. If the CONTEXT below answers the question, base your answer strictly on it and never invent numbers, names, or dates that aren't there.\n2. If there is no context, or it doesn't address the question, but the question is meaningfully related to the topic (Kazakhs, the history of Kazakhstan, the 1920s–1930s USSR, nomadic life, collectivization, famine, historiography), answer briefly using general historical knowledge and clearly note that this is general background, not data from the site.\n3. If the question is entirely unrelated to the project's topic, say so politely and suggest asking about a region, a historian, a figure, or a method instead.\n4. If an estimate is debated, state the range and say that it is debated.\n5. Answer in English, briefly and to the point: 2–5 sentences as flowing prose, no more than 90 words total, with NO numbered or bulleted lists (unless a list is explicitly requested) and no preambles like \"You might mean...\" — get straight to the point and finish the thought.\n6. This is a heavy topic — write respectfully and without sensationalism.", SYS_KZ = "Сен — «Күйреу картографиясы» атты ғылыми-зерттеу жобасының ассистентісің: бұл Ашаршылықтың (1930–1933 жж. Қазақстандағы ашаршылық) HGIS құралдарымен жасалған тарихи-географиялық талдауы. Сен — браузерде жұмыс істейтін бағдарлама, тілдік модельсің, адам емессің: сенің жасың, атың, денең немесе жеке өмірбаяның жоқ, мұндай мәліметтерді өзің туралы ешқашан ойдан шығарма және айтпа.\n\nЕрежелер:\n1. Егер төмендегі КОНТЕКСТ сұраққа жауап беретін болса — тек соған сүйеніп жауап бер, онда жоқ сандарды, есімдерді, күндерді ешқашан ойдан шығарма.\n2. Егер контекст жоқ болса немесе сұраққа сәйкес келмесе, бірақ сұрақ тақырыпқа мағыналық жағынан қатысты болса (қазақтар, Қазақстан тарихы, 1920–1930 жж. КСРО, көшпенділер, ұжымдастыру, ашаршылық, тарихнама) — жалпы тарихи білім негізінде қысқаша жауап бер және мұның сайт деректері емес, жалпы мәлімет екенін тікелей айт.\n3. Егер сұрақ жобаның тақырыбына мүлде қатысы жоқ болса — сыпайы түрде осыны айт және аймақ, тарихшы, сан немесе әдіс туралы сұрауды ұсын.\n4. Егер баға пікірталастық болса — диапазонды атап, оның пікірталастық екенін айт.\n5. Қазақ тілінде, қысқа әрі нақты жауап бер: 2–5 сөйлем үзіліссіз мәтін түрінде, барлығы 90 сөзден аспасын, нөмірленген немесе таңбаланған тізімдерсіз (тізім арнайы сұралмаса) және «Мүмкін, сіз мынаны айтқыңыз келді...» деген кіріспелерсіз — бірден мәселеге көш және ойды толық аяқта.\n6. Тақырып ауыр — құрметпен және сенсацияға салынбай жаз.";

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
const noCtxNote = "kz" === LANG ? "Бұл сұрақ бойынша сайттан сәйкес материалдар табылмады. Жоғарыдағы 2 немесе 3-ережені орында — осы ескертпені өзін айтпа немесе келтірме." : "en" === LANG ? "No matching excerpts were found on the site for this question. Follow rule 2 or 3 above — do not mention or quote this note itself." : "По этому вопросу на сайте не нашлось подходящих материалов. Следуй правилу 2 или 3 выше — не упоминай и не цитируй саму эту пометку.", userMsg = ctx ? ("kz" === LANG ? `ЖОБА МАТЕРИАЛДАРЫНАН АЛЫНҒАН КОНТЕКСТ:\n${ctx}\n\nСҰРАҚ: ${query}` : "en" === LANG ? `CONTEXT FROM THE PROJECT'S MATERIAL:\n${ctx}\n\nQUESTION: ${query}` : `КОНТЕКСТ ИЗ МАТЕРИАЛОВ ПРОЕКТА:\n${ctx}\n\nВОПРОС: ${query}`) : ("kz" === LANG ? `${noCtxNote}\n\nСҰРАҚ: ${query}` : "en" === LANG ? `${noCtxNote}\n\nQUESTION: ${query}` : `${noCtxNote}\n\nВОПРОС: ${query}`), stream = await AI.engine.chat.completions.create({
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
})), $("#aiNote").textContent = navigator.gpu ? t("aiNoteGpu") : t("aiNoteNoGpu");
}

function aiSuggestions() {
return "kz" === LANG ? [ "MAUP деген не, қарапайым тілмен айтқанда?", "Неге Қарағанды облысында халық саны өсті?", "Қазақтар қайда көшіп кетті?", "Кэмерон мен Омарбеков пікірлері неімен ерекшеленеді?", "Қанша адам қаза тапты және неге бағалар әртүрлі?" ] : "en" === LANG ? [ "What is MAUP in simple terms?", "Why did the population grow in Karaganda Oblast?", "Where did Kazakhs migrate to?", "How does Cameron differ from Omarbekov?", "How many died, and why do estimates differ?" ] : [ "Что такое MAUP простыми словами?", "Почему в Карагандинской области росло население?", "Куда откочёвывали казахи?", "Чем Кэмерон расходится с Омарбековым?", "Сколько погибло и почему оценки разные?" ];
}

function renderAbout() {
$("#aboutBody").innerHTML = "kz" === LANG ? '\n<p>«Күйреу картографиясы»: Ашаршылықтың — 1930–1933 жылдардағы Қазақстандағы ашаршылықтың — тарихи ГАЖ (HGIS) құралдарымен жасалған кеңістіктік-демографиялық талдауы. Жұмыс бір әдіснамалық сұраққа жауап береді: <b>апат географиясы туралы қорытындылар деректер топтастырылған әкімшілік торға қаншалықты тәуелді?</b></p>\n\n<h4>Зерттеу нені көрсетеді</h4>\n<p>1926 жылғы санақ Қазақ АКСР-ін 8 округ арқылы, ал 1939 жылғы санақ 12 облыс арқылы сипаттайды. Аумақ бір, адамдар бір, бірақ бөліну әртүрлі. 1926 жылғы деректерді 96 полигон қиылысы бойынша ареалдық интерполяция әдісімен 1939 жылғы торға көшіргенде, біз үлестердің жиынтық ауытқуын <b>42,46 пайыздық тармақ</b> және ұқсамау индексін <b>21,2 %</b> алдық. Басқаша айтқанда, тор өзгергенде халықтың бүкіл кеңістіктік үлестірімінің бестен бірі «көшіп кетеді». Бұл тарихи материалдағы Modifiable Areal Unit Problem дәл өзі.</p>\n\n<h4>Үш тарихнамалық көзқарас</h4>\n<ul>\n<li><b>Сара Кэмерон:</b> ашаршылық — көшпелі шаруашылықтың құрып кетуінің салдары; эпицентр мал шаруашылығының үлесі жоғары жерде.</li>\n<li><b>Никколо Пьянчола:</b> империялық басымдықтар иерархиясы; сондықтан өнеркәсіп пен лагерь аудандарында «аномальды өсім» байқалады.</li>\n<li><b>Талас Омарбеков:</b> қазақтардың субъектілігі мен қарсылығы; 1929–1931 жж. көтеріліс ошақтарының шығын тереңдігімен байланысы.</li>\n</ul>\n\n<h4>Қорғауда тікелей айту керек адал ескертулер</h4>\n<ul>\n<li><b>Шекаралар: мұрағаттық кадастр емес.</b> Геометрия тірек реконструкция ретінде құрылған: 1926 және 1939 жылдардың тарихи бірліктеріне сәйкес біріктірілген қазіргі әкімшілік контурлар (geoBoundaries). Нақты тарихи шекаралар өзгеше болған.</li>\n<li><b>Атрибуттар мен геометрия бөлек.</b> Демографиялық көрсеткіштер контурлардан бөлек сақталады, шекара реконструкциясы сандардың дереккөзі ретінде қабылданбауы үшін.</li>\n<li><b>Әртүрлі базалық қорытындылар.</b> 1926 және 1939 жылдардың атрибут жиынтықтары әртүрлі көздерден алынған, сондықтан абсолютті сомаларды емес, үлестерді салыстырған дұрысырақ.</li>\n<li><b>Интерполяция болжамы.</b> Ареалдық интерполяция бірлік ішінде тығыздықтың бірдей болуын болжайды. Көшпелі халық үшін бұл жеңілдету, және қателіктің бір бөлігі дәл осыдан туындайды.</li>\n<li><b>Көші-қонның елдер бойынша бөлінуі: пікірталастық баға.</b> С. Кэмерон бағыттар бойынша дәл санақты ашық зерттеу мәселесі деп тікелей атайды.</li>\n<li><b>Құрбандар саны бағасы алшақтайды</b> 1,258 млн-нан (Птуха институты) 4 млн-ға дейін (Х. М. Әбжанов). Біз бір «дұрыс» санды емес, атрибуциясы бар диапазонды береміз.</li>\n</ul>\n\n<h4>Деректер мен технологиялар</h4>\n<ul>\n<li>Шекаралар: geoBoundaries (тірек геометрия), әлем картасы үшін Natural Earth 110 м.</li>\n<li>Проекциялар: Қазақстан үшін Альберстің тең аумақты конустық проекциясы, әлем картасы үшін Equal Earth, екеуі де тең аумақты, сондықтан аудандарды салыстыру дұрыс.</li>\n<li>Есептеулер: ареалдық интерполяция, ұқсамау индексі, квантильдік жіктеу.</li>\n<li>Қолданба: бір дербес HTML-файл. Көмекшінің тілдік моделі браузерде WebGPU арқылы жұмыс істейді, сондықтан деректер еш жерге жіберілмейді.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">Жобаның барлық деректері ашық: «Деректер және MAUP» бөлімі көрсеткіштерді CSV форматында, шекараларды GeoJSON форматында және полигон қиылысу матрицасын жүктеп алуға мүмкіндік береді.</p>' : "en" === LANG ? '\n<p>"Cartography of Collapse" is a spatial-demographic analysis of Asharshylyk, the 1930–1933 famine in Kazakhstan, carried out using historical GIS (HGIS). The work answers one methodological question: <b>how much do conclusions about the geography of the catastrophe depend on the administrative grid the data is grouped by?</b></p>\n\n<h4>What the study shows</h4>\n<p>The 1926 census describes the Kazak ASSR through 8 okrugs; the 1939 census, through 12 oblasts. The territory is the same, the people are the same, but the layout differs. Carrying the 1926 data onto the 1939 grid by areal interpolation across 96 polygon intersections produces a total share shift of <b>42.46 percentage points</b> and a dissimilarity index of <b>21.2%</b>. In other words, changing the grid "relocates" a fifth of the entire spatial distribution of the population. This is the Modifiable Areal Unit Problem on historical material.</p>\n\n<h4>Three historiographic lenses</h4>\n<ul>\n<li><b>Sarah Cameron:</b> the famine as a consequence of the destruction of the nomadic economy; the epicenter is where the share of pastoralism was highest.</li>\n<li><b>Niccolò Pianciola:</b> an imperial hierarchy of priorities; hence the "anomalous growth" in industrial and camp districts.</li>\n<li><b>Talas Omarbekov:</b> Kazakh agency and resistance; the link between the centers of the 1929–1931 uprisings and the depth of the losses.</li>\n</ul>\n\n<h4>Honest limitations worth stating in a defense</h4>\n<ul>\n<li><b>The boundaries are not an archival cadastre.</b> The geometry is built as a reference reconstruction: modern administrative outlines (geoBoundaries), merged under the historical units of 1926 and 1939. The real historical boundaries differed.</li>\n<li><b>Attributes and geometry are kept separate.</b> Demographic figures are stored apart from the outlines, so the boundary reconstruction is never mistaken for the source of the numbers.</li>\n<li><b>Different base totals.</b> The 1926 and 1939 attribute sets come from different sources, so it is more accurate to compare shares rather than absolute sums.</li>\n<li><b>The interpolation assumption.</b> Areal interpolation assumes uniform density within a unit. For a nomadic population this is a simplification, and part of the error comes from exactly this.</li>\n<li><b>The breakdown of migrations by country is a debated estimate.</b> S. Cameron explicitly calls an exact count by destination an open research question.</li>\n<li><b>Death-toll estimates diverge</b> from 1.258 million (the Ptukha Institute) to 4 million (Kh. M. Abzhanov). We give the range with attribution, not a single "correct" figure.</li>\n</ul>\n\n<h4>Data and technology</h4>\n<ul>\n<li>Boundaries: geoBoundaries (reference geometry), Natural Earth 110m for the world map.</li>\n<li>Projections: the Albers equal-area conic for Kazakhstan, Equal Earth for the world map, both equal-area, so comparing areas is valid.</li>\n<li>Calculations: areal interpolation, dissimilarity index, quantile classification.</li>\n<li>Application: a single self-contained HTML file. The assistant\'s language model runs in the browser via WebGPU, so no data is sent anywhere.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">All of the project\'s data is open: the "Data & MAUP" section lets you export the indicators as CSV, the boundaries as GeoJSON, and the polygon-intersection matrix.</p>' : '\n<p>«Картография коллапса»: пространственно-демографический анализ Ашаршылыка, голода в Казахстане 1930–1933 годов, выполненный средствами исторической ГИС (HGIS). Работа отвечает на один методологический вопрос: <b>насколько выводы о географии катастрофы зависят от административной сетки, по которой сгруппированы данные?</b></p>\n\n<h4>Что показывает исследование</h4>\n<p>Перепись 1926 года описывает Казакскую АССР через 8 округов, перепись 1939 года — через 12 областей. Территория одна, люди одни, но нарезка разная. Перенеся данные 1926 года на сетку 1939 года методом ареальной интерполяции по 96 пересечениям полигонов, мы получили суммарный сдвиг долей в <b>42,46 процентных пункта</b> и индекс несходства <b>21,2 %</b>. Иными словами, при смене сетки «переезжает» пятая часть всего пространственного распределения населения. Это и есть Modifiable Areal Unit Problem на историческом материале.</p>\n\n<h4>Три историографические линзы</h4>\n<ul>\n<li><b>Сара Кэмерон:</b> голод как следствие уничтожения кочевого хозяйства; эпицентр там, где выше доля скотоводства.</li>\n<li><b>Никколо Пьянчола:</b> имперская иерархия приоритетов; отсюда «аномальный рост» в промышленных и лагерных районах.</li>\n<li><b>Талас Омарбеков:</b> субъектность казахов и сопротивление; связь очагов восстаний 1929–1931 гг. с глубиной потерь.</li>\n</ul>\n\n<h4>Честные ограничения, которые нужно называть на защите</h4>\n<ul>\n<li><b>Границы: не архивный кадастр.</b> Геометрия построена как опорная реконструкция: современные административные контуры (geoBoundaries), объединённые под исторические единицы 1926 и 1939 годов. Реальные исторические границы отличались.</li>\n<li><b>Атрибуты и геометрия разделены.</b> Демографические показатели хранятся отдельно от контуров, чтобы реконструкция границ не выдавалась за источник цифр.</li>\n<li><b>Разные базовые итоги.</b> Наборы атрибутов 1926 и 1939 годов происходят из разных источников, поэтому корректнее сравнивать доли, а не абсолютные суммы.</li>\n<li><b>Допущение интерполяции.</b> Ареальная интерполяция предполагает равномерную плотность внутри единицы. Для кочевого населения это упрощение, и часть погрешности берётся именно отсюда.</li>\n<li><b>Разбивка откочёвок по странам: дискуссионная оценка.</b> С. Кэмерон прямо называет точный подсчёт по направлениям открытым исследовательским вопросом.</li>\n<li><b>Оценки числа жертв расходятся</b> от 1,258 млн (Институт им. Птухи) до 4 млн (Х. М. Абжанов). Мы приводим диапазон с атрибуцией, а не одну «правильную» цифру.</li>\n</ul>\n\n<h4>Данные и технологии</h4>\n<ul>\n<li>Границы: geoBoundaries (опорная геометрия), Natural Earth 110 м для карты мира.</li>\n<li>Проекции: Альберс равновеликая коническая для Казахстана, Equal Earth для карты мира, обе равновеликие, поэтому сравнение площадей корректно.</li>\n<li>Расчёты: ареальная интерполяция, индекс несходства, квантильная классификация.</li>\n<li>Приложение: один самодостаточный HTML-файл. Языковая модель ассистента работает в браузере через WebGPU, поэтому данные никуда не отправляются.</li>\n</ul>\n\n<p style="margin-top:14px;color:var(--ink-mute);font-size:12px">Все данные проекта открыты: раздел «Данные и MAUP» позволяет выгрузить показатели в CSV, границы в GeoJSON и матрицу пересечений полигонов.</p>';
}

rebuildAiModels(), $("#aiModel").addEventListener("change", () => {
AI.model = $("#aiModel").value, AI.engine = null, $("#aiBar").style.width = "0%", 
$("#aiProgTxt").textContent = t("aiNotLoaded"), setAiState(t("aiOffline"), "");
}), $("#aiLoad").addEventListener("click", ensureEngine), $("#aiSend").addEventListener("click", () => ask($("#aiIn").value)), 
$("#aiIn").addEventListener("keydown", e => {
"Enter" === e.key && ask($("#aiIn").value);
}), chatAdd("bot", t("aiGreeting")), renderAbout(), $("#bAbout").addEventListener("click", () => modalOpen("mAbout")), 
$("#langMenu").addEventListener("click", e => {
const b = e.target.closest(".langopt");
b && (setLang(b.dataset.lang), $("#langMenu").classList.remove("on"));
}), $("#bLang").addEventListener("click", e => {
e.stopPropagation(), $("#langMenu").classList.toggle("on");
}), document.addEventListener("click", e => {
e.target.closest(".langwrap") || $("#langMenu").classList.remove("on");
}), applyStaticI18n(), syncPeriodUI(), renderMarks(), renderKz();