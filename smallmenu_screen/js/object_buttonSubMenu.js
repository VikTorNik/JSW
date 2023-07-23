/* Структура об'єкту зберігання кнопок і їх стану
"button_big_0" - група кнопок до 0-го пункта меню
status_submenu: "select production" / "information" - підменю з вибору продукції, чи інформаційне підменю
p_header_*** ["p", "Сортування за ціною"] - заголовок групи кнопок і хідер
middle_button_*** ["button", "Вибрати", true] - кнопка, хидер кнопки, стан кнопки (нажата/віджата) 
*/

export const buttonSubMenu = {
  button_big_0: {
    status_submenu: "select production", // тип під меню - продуктове, чи інформаційне
    status_select_product: false, // селектор вибру товару в цей момент для деактивації кнопок
    ID_select_product: "", // id вибраного продукту
    middle_button_000: { selector: "button", header: "Вибрати", status: true },
    middle_button_001: { selector: "button", header: "Читати", status: false },
    p_header_002: { selector: "p", header: "Сортування за ціною" },
    middle_button_002: { selector: "button", header: "найнижча", status: true },
    middle_button_003: { selector: "button", header: "найвища", status: false },
    p_header_004: { selector: "p", header: "Довжина, м." },
    middle_button_004: { selector: "button", header: "2.5", status: true },
    middle_button_005: { selector: "button", header: "2.8", status: true },
    middle_button_006: { selector: "button", header: "3.0", status: true },
    middle_button_007: { selector: "button", header: "4.0", status: true },
    middle_button_008: { selector: "button", header: "5.0", status: false },
    middle_button_009: { selector: "button", header: "6.0", status: false },
    middle_button_010: { selector: "button", header: "7.0", status: false },
    middle_button_011: { selector: "button", header: "8.0", status: false },
    middle_button_012: { selector: "button", header: "всі", status: false },
    p_header_013: { selector: "p", header: "Площа перерізу кабеля, кв.мм" },
    middle_button_013: { selector: "button", header: "10", status: true },
    middle_button_014: { selector: "button", header: "16", status: true },
    middle_button_015: { selector: "button", header: "25", status: true },
    middle_button_016: { selector: "button", header: "35", status: false },
    middle_button_017: { selector: "button", header: "всі", status: false },
    p_header_018: { selector: "p", header: "Матеріал крокодилів" },
    middle_button_018: { selector: "button", header: "залізо", status: false },
    middle_button_019: { selector: "button", header: "пластик", status: false },
    middle_button_020: { selector: "button", header: "всі", status: true },
    p_header_021: { selector: "p", header: "Термін виготовлення, днів" },
    middle_button_021: { selector: "button", header: "готове", status: true },
    middle_button_022: { selector: "button", header: "1 д.", status: true },
    middle_button_023: { selector: "button", header: "2 д.", status: false },
    middle_button_024: { selector: "button", header: "4 д.", status: false },
    middle_button_025: { selector: "button", header: "всі", status: false }
  },

  /* Структура логіки кнопок в залежності від стану
  "button_boolean" - може бути нажатою тільки одна кнопка з групи ["middle_button_0", "middle_button_1"]
  "button_group" - може бути нажата будь яка кількість, але не меньше 1 кнопки
  "middle_button_10" - це кнопка, яка натискає/відтискає всі кнопки у групі  */

  "button_big_0_structure": [
    ["button_boolean", ["middle_button_000", "middle_button_001"]],
    ["button_boolean", ["middle_button_002", "middle_button_003"]],
    ["button_group", ["middle_button_004", "middle_button_005", "middle_button_006", "middle_button_007", "middle_button_008", "middle_button_009", "middle_button_010", "middle_button_011"], "middle_button_012"],
    ["button_group", ["middle_button_013", "middle_button_014", "middle_button_015", "middle_button_016"], "middle_button_017"],
    ["button_group", ["middle_button_018", "middle_button_019"], "middle_button_020"],
    ["button_group", ["middle_button_021", "middle_button_022", "middle_button_023", "middle_button_024"], "middle_button_025"],
  ],

  button_big_1: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    status_select_pruduct: false,
    middle_button_100: { selector: "button", header: "Вибрати", status: true },
    middle_button_101: { selector: "button", header: "Читати", status: false },
    p_header_102: { selector: "p", header: "Сортування за ціною" },
    middle_button_102: { selector: "button", header: "найнижча", status: true },
    middle_button_103: { selector: "button", header: "найвища", status: false },
    p_header_104: { selector: "p", header: "Довжина, м." },
    middle_button_104: { selector: "button", header: "1.5", status: true },
    middle_button_105: { selector: "button", header: "2.0", status: true },
    middle_button_106: { selector: "button", header: "2.5", status: true },
    middle_button_107: { selector: "button", header: "3.0", status: true },
    middle_button_108: { selector: "button", header: "4.0", status: false },
    middle_button_109: { selector: "button", header: "5.0", status: false },
    middle_button_110: { selector: "button", header: "6.0", status: false },
    middle_button_111: { selector: "button", header: "всі", status: false },
    p_header_112: { selector: "p", header: "Площа перерізу кабеля, кв.мм" },
    middle_button_112: { selector: "button", header: "10", status: true },
    middle_button_113: { selector: "button", header: "16", status: true },
    middle_button_114: { selector: "button", header: "25", status: true },
    middle_button_115: { selector: "button", header: "35", status: false },
    middle_button_116: { selector: "button", header: "50", status: false },
    middle_button_117: { selector: "button", header: "всі", status: false },
    p_header_118: { selector: "p", header: "Матеріал крокодилів" },
    middle_button_118: { selector: "button", header: "залізо", status: false },
    middle_button_119: { selector: "button", header: "пластик", status: false },
    middle_button_120: { selector: "button", header: "всі", status: true },
    p_header_121: { selector: "p", header: "Термін виготовлення, днів" },
    middle_button_121: { selector: "button", header: "готове", status: true },
    middle_button_122: { selector: "button", header: "1 д.", status: true },
    middle_button_123: { selector: "button", header: "2 д.", status: false },
    middle_button_124: { selector: "button", header: "4 д.", status: false },
    middle_button_125: { selector: "button", header: "всі", status: false }
  },

  "button_big_1_structure": [
    ["button_boolean", ["middle_button_100", "middle_button_101"]],
    ["button_boolean", ["middle_button_102", "middle_button_103"]],
    ["button_group", ["middle_button_104", "middle_button_105", "middle_button_106", "middle_button_107", "middle_button_108", "middle_button_109", "middle_button_110"], "middle_button_111"],
    ["button_group", ["middle_button_112", "middle_button_113", "middle_button_114", "middle_button_115", "middle_button_116"], "middle_button_117"],
    ["button_group", ["middle_button_118", "middle_button_119"], "middle_button_120"],
    ["button_group", ["middle_button_121", "middle_button_122", "middle_button_123", "middle_button_124"], "middle_button_125"],
  ],

  button_big_2: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_200: { selector: "button", header: "Вибрати", status: true },
    middle_button_201: { selector: "button", header: "Читати", status: false },
    p_header_202: { selector: "p", header: "Сортування за ціною" },
    middle_button_202: { selector: "button", header: "найнижча", status: true },
    middle_button_203: { selector: "button", header: "найвища", status: false },
    p_header_204: { selector: "p", header: "Довжина, метри" },
    middle_button_204: { selector: "button", header: "2.0", status: true },
    middle_button_205: { selector: "button", header: "3.0", status: true },
    middle_button_206: { selector: "button", header: "4.0", status: true },
    middle_button_207: { selector: "button", header: "5.0", status: true },
    middle_button_208: { selector: "button", header: "6.0", status: false },
    middle_button_209: { selector: "button", header: "7.0", status: false },
    middle_button_210: { selector: "button", header: "8.0", status: false },
    middle_button_211: { selector: "button", header: "всі", status: false },
    p_header_212: { selector: "p", header: "Площа кабеля, кв.мм" },
    middle_button_212: { selector: "button", header: "10", status: true },
    middle_button_213: { selector: "button", header: "16", status: true },
    middle_button_214: { selector: "button", header: "25", status: true },
    middle_button_215: { selector: "button", header: "35", status: false },
    middle_button_216: { selector: "button", header: "50", status: false },
    middle_button_217: { selector: "button", header: "всі", status: false },
    p_header_218: { selector: "p", header: "Штекер" },
    middle_button_218: { selector: "button", header: "10-25", status: true },
    middle_button_219: { selector: "button", header: "35-50", status: false },
    middle_button_220: { selector: "button", header: "всі", status: false },
    p_header_221: { selector: "p", header: "Тримач, клема маси" },
    middle_button_221: { selector: "button", header: "трим. 200А", status: true },
    middle_button_222: { selector: "button", header: "трим. 300А", status: false },
    middle_button_223: { selector: "button", header: "маса 200А", status: true },
    middle_button_224: { selector: "button", header: "маса 300А", status: true },
    middle_button_225: { selector: "button", header: "наконечник", status: true },
    middle_button_226: { selector: "button", header: "всі", status: false },
    p_header_227: { selector: "p", header: "Термін виготовлення" },
    middle_button_227: { selector: "button", header: "2 д.", status: false },
    middle_button_228: { selector: "button", header: "4 д.", status: false },
    middle_button_229: { selector: "button", header: "всі", status: true }
  },

  "button_big_2_structure": [
    ["button_boolean", ["middle_button_200", "middle_button_201"]],
    ["button_boolean", ["middle_button_202", "middle_button_203"]],
    ["button_group", ["middle_button_204", "middle_button_205", "middle_button_206", "middle_button_207", "middle_button_208", "middle_button_209", "middle_button_210"], "middle_button_211"],
    ["button_group", ["middle_button_212", "middle_button_213", "middle_button_214", "middle_button_215", "middle_button_216"], "middle_button_217"],
    ["button_group", ["middle_button_218", "middle_button_219"], "middle_button_220"],
    ["button_group", ["middle_button_221", "middle_button_222", "middle_button_223", "middle_button_224", "middle_button_225"], "middle_button_226"],
    ["button_group", ["middle_button_227", "middle_button_228"], "middle_button_229"],
  ],

  button_big_3: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_300: { selector: "button", header: "Вибрати", status: true },
    middle_button_301: { selector: "button", header: "Читати", status: false },
    p_header_302: { selector: "p", header: "Сортування за ціною" },
    middle_button_302: { selector: "button", header: "найнижча", status: true },
    middle_button_303: { selector: "button", header: "найвища", status: false },
    p_header_304: { selector: "p", header: "Довжина, метри" },
    middle_button_304: { selector: "button", header: "0.5", status: true },
    middle_button_305: { selector: "button", header: "1.0", status: true },
    middle_button_306: { selector: "button", header: "1.5", status: true },
    middle_button_307: { selector: "button", header: "2.0", status: true },
    middle_button_308: { selector: "button", header: "3.0", status: false },
    middle_button_309: { selector: "button", header: "4.0", status: false },
    middle_button_310: { selector: "button", header: "5.0", status: false },
    middle_button_311: { selector: "button", header: "всі", status: false },
    p_header_312: { selector: "p", header: "Площа кабеля, кв.мм" },
    middle_button_312: { selector: "button", header: "10", status: true },
    middle_button_313: { selector: "button", header: "16", status: true },
    middle_button_314: { selector: "button", header: "25", status: true },
    middle_button_315: { selector: "button", header: "35", status: false },
    middle_button_316: { selector: "button", header: "50", status: false },
    middle_button_317: { selector: "button", header: "всі", status: false },
    p_header_318: { selector: "p", header: "Ліворуч" },
    middle_button_318: { selector: "button", header: "10-25 папа", status: true },
    middle_button_319: { selector: "button", header: "10-25 мама", status: true },
    middle_button_320: { selector: "button", header: "35-50 папа", status: false },
    middle_button_321: { selector: "button", header: "35-50 мама", status: false },
    middle_button_322: { selector: "button", header: "всі", status: false },
    p_header_323: { selector: "p", header: "Праворуч" },
    middle_button_323: { selector: "button", header: "10-25 папа", status: true },
    middle_button_324: { selector: "button", header: "10-25 мама", status: true },
    middle_button_325: { selector: "button", header: "35-50 папа", status: false },
    middle_button_326: { selector: "button", header: "35-50 мама", status: false },
    middle_button_327: { selector: "button", header: "всі", status: false },
    p_header_328: { selector: "p", header: "Термін виготовлення" },
    middle_button_328: { selector: "button", header: "2 д.", status: false },
    middle_button_329: { selector: "button", header: "4 д.", status: false },
    middle_button_330: { selector: "button", header: "всі", status: true }
  },

  "button_big_3_structure": [
    ["button_boolean", ["middle_button_300", "middle_button_301"]],
    ["button_boolean", ["middle_button_302", "middle_button_303"]],
    ["button_group", ["middle_button_304", "middle_button_305", "middle_button_306", "middle_button_307", "middle_button_308", "middle_button_309", "middle_button_310"], "middle_button_311"],
    ["button_group", ["middle_button_312", "middle_button_313", "middle_button_314", "middle_button_315", "middle_button_316"], "middle_button_317"],
    ["button_group", ["middle_button_318", "middle_button_319", "middle_button_320", "middle_button_321"], "middle_button_322"],
    ["button_group", ["middle_button_323", "middle_button_324", "middle_button_325", "middle_button_326"], "middle_button_327"],
    ["button_group", ["middle_button_328", "middle_button_329"], "middle_button_330"],
  ],

  button_big_4: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_400: { selector: "button", header: "Вибрати", status: true },
    middle_button_401: { selector: "button", header: "Читати", status: false },
    p_header_402: { selector: "p", header: "Сортування за ціною" },
    middle_button_402: { selector: "button", header: "найнижча", status: true },
    middle_button_403: { selector: "button", header: "найвища", status: false },
    p_header_404: { selector: "p", header: "Крокодили для прикурювання" },
    middle_button_404: { selector: "button", header: "1 штука", status: true },
    middle_button_405: { selector: "button", header: "2 штуки", status: false },
    middle_button_406: { selector: "button", header: "4 штуки", status: true },
    middle_button_407: { selector: "button", header: "всі", status: false },
    p_header_408: { selector: "p", header: "Клеми маси для зварювання" },
    middle_button_408: { selector: "button", header: "латунь 200А", status: false },
    middle_button_409: { selector: "button", header: "латунь 250А", status: false },
    middle_button_410: { selector: "button", header: "всі", status: true },
    p_header_411: { selector: "p", header: "Термін виготовлення" },
    middle_button_411: { selector: "button", header: "готове", status: false },
    middle_button_412: { selector: "button", header: "1 д.", status: false },
    middle_button_413: { selector: "button", header: "2 д.", status: false },
    middle_button_414: { selector: "button", header: "4 д.", status: false },
    middle_button_415: { selector: "button", header: "всі", status: true }
  },

  "button_big_4_structure": [
    ["button_boolean", ["middle_button_400", "middle_button_401"]],
    ["button_boolean", ["middle_button_402", "middle_button_403"]],
    ["button_group", ["middle_button_404", "middle_button_405", "middle_button_406"], "middle_button_407"],
    ["button_group", ["middle_button_408", "middle_button_409"], "middle_button_410"],
    ["button_group", ["middle_button_411", "middle_button_412", "middle_button_413", "middle_button_414"], "middle_button_415"],
  ],

  button_big_5: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_500: { selector: "button", header: "Вибрати", status: true },
    middle_button_501: { selector: "button", header: "Читати", status: false },
    p_header_502: { selector: "p", header: "Сортування за ціною" },
    middle_button_502: { selector: "button", header: "найнижча", status: true },
    middle_button_503: { selector: "button", header: "найвища", status: false },
    p_header_504: { selector: "p", header: "Довжина, см" },
    middle_button_504: { selector: "button", header: "10", status: false },
    middle_button_505: { selector: "button", header: "15", status: false },
    middle_button_506: { selector: "button", header: "20", status: true },
    middle_button_507: { selector: "button", header: "25", status: false },
    middle_button_508: { selector: "button", header: "30", status: true },
    middle_button_509: { selector: "button", header: "35", status: false },
    middle_button_510: { selector: "button", header: "40", status: true },
    middle_button_511: { selector: "button", header: "50", status: false },
    middle_button_512: { selector: "button", header: "60", status: true },
    middle_button_513: { selector: "button", header: "70", status: false },
    middle_button_514: { selector: "button", header: "80", status: true },
    middle_button_515: { selector: "button", header: "90", status: false },
    middle_button_516: { selector: "button", header: "100", status: true },
    middle_button_517: { selector: "button", header: "110", status: false },
    middle_button_518: { selector: "button", header: "120", status: false },
    middle_button_519: { selector: "button", header: "140", status: false },
    middle_button_520: { selector: "button", header: "160", status: false },
    middle_button_521: { selector: "button", header: "180", status: false },
    middle_button_522: { selector: "button", header: "200", status: false },
    middle_button_523: { selector: "button", header: "всі", status: false },
    p_header_524: { selector: "p", header: "Площа кабеля, кв.мм" },
    middle_button_524: { selector: "button", header: "10", status: true },
    middle_button_525: { selector: "button", header: "16", status: true },
    middle_button_526: { selector: "button", header: "25", status: true },
    middle_button_527: { selector: "button", header: "35", status: false },
    middle_button_528: { selector: "button", header: "50", status: false },
    middle_button_529: { selector: "button", header: "всі", status: false },
    p_header_530: { selector: "p", header: "Ліворуч" },
    middle_button_530: { selector: "button", header: "наконечник", status: true },
    middle_button_531: { selector: "button", header: "штирь", status: false },
    middle_button_532: { selector: "button", header: "автоклема", status: false },
    p_header_533: { selector: "p", header: "Праворуч" },
    middle_button_533: { selector: "button", header: "наконечник", status: true },
    middle_button_534: { selector: "button", header: "штирь", status: false },
    middle_button_535: { selector: "button", header: "автоклема", status: false },
    p_header_536: { selector: "p", header: "Термін виготовлення" },
    middle_button_536: { selector: "button", header: "готове", status: false },
    middle_button_537: { selector: "button", header: "1 д.", status: false },
    middle_button_538: { selector: "button", header: "всі", status: true }
  },

  "button_big_5_structure": [
    ["button_boolean", ["middle_button_500", "middle_button_501"]],
    ["button_boolean", ["middle_button_502", "middle_button_503"]],
    ["button_group", ["middle_button_504", "middle_button_505", "middle_button_506", "middle_button_507", "middle_button_508", "middle_button_509", "middle_button_510", "middle_button_511", "middle_button_512", "middle_button_513", "middle_button_514", "middle_button_515", "middle_button_516", "middle_button_517", "middle_button_518", "middle_button_519", "middle_button_520", "middle_button_521", "middle_button_522"], "middle_button_523"],
    ["button_group", ["middle_button_524", "middle_button_525", "middle_button_526", "middle_button_527", "middle_button_528"], "middle_button_529"],
    ["button_boolean", ["middle_button_530", "middle_button_531", "middle_button_532"]],
    ["button_boolean", ["middle_button_533", "middle_button_534", "middle_button_535"]],
    ["button_group", ["middle_button_536", "middle_button_537"], "middle_button_538"]
  ],

  button_big_6: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_600: { selector: "button", header: "Вибрати", status: true },
    middle_button_601: { selector: "button", header: "Читати", status: false },
    p_header_602: { selector: "p", header: "Сортування за ціною" },
    middle_button_602: { selector: "button", header: "найнижча", status: true },
    middle_button_603: { selector: "button", header: "найвища", status: false },
    p_header_604: { selector: "p", header: "Довжина, см" },
    middle_button_604: { selector: "button", header: "5", status: false },
    middle_button_605: { selector: "button", header: "10", status: false },
    middle_button_606: { selector: "button", header: "15", status: true },
    middle_button_607: { selector: "button", header: "20", status: true },
    middle_button_608: { selector: "button", header: "25", status: false },
    middle_button_609: { selector: "button", header: "30", status: true },
    middle_button_610: { selector: "button", header: "35", status: false },
    middle_button_611: { selector: "button", header: "40", status: true },
    middle_button_612: { selector: "button", header: "50", status: false },
    middle_button_613: { selector: "button", header: "60", status: false },
    middle_button_614: { selector: "button", header: "70", status: false },
    middle_button_615: { selector: "button", header: "всі", status: false },
    p_header_616: { selector: "p", header: "Переріз, кв.мм" },
    middle_button_616: { selector: "button", header: "10", status: true },
    middle_button_617: { selector: "button", header: "16", status: true },
    middle_button_618: { selector: "button", header: "25", status: true },
    middle_button_619: { selector: "button", header: "35", status: false },
    middle_button_620: { selector: "button", header: "50", status: false },
    middle_button_621: { selector: "button", header: "70", status: false },
    middle_button_622: { selector: "button", header: "95", status: false },
    middle_button_623: { selector: "button", header: "всі", status: false },
    p_header_624: { selector: "p", header: "Тип плетінки" },
    middle_button_624: { selector: "button", header: "лужена", status: false },
    middle_button_625: { selector: "button", header: "не лужена", status: false },
    middle_button_626: { selector: "button", header: "всі", status: true },
    p_header_627: { selector: "p", header: "Опресовка" },
    middle_button_627: { selector: "button", header: "стандарт", status: true },
    middle_button_628: { selector: "button", header: "плоский", status: false },
    middle_button_629: { selector: "button", header: "всі", status: false },
    p_header_630: { selector: "p", header: "Термін виготовлення" },
    middle_button_630: { selector: "button", header: "2 д.", status: false },
    middle_button_631: { selector: "button", header: "4 д.", status: false },
    middle_button_632: { selector: "button", header: "всі", status: true },
  },

  "button_big_6_structure": [
    ["button_boolean", ["middle_button_600", "middle_button_601"]],
    ["button_boolean", ["middle_button_602", "middle_button_603"]],
    ["button_group", ["middle_button_604", "middle_button_605", "middle_button_606", "middle_button_607", "middle_button_608", "middle_button_609", "middle_button_610", "middle_button_611", "middle_button_612", "middle_button_613", "middle_button_614"], "middle_button_615"],
    ["button_group", ["middle_button_616", "middle_button_617", "middle_button_618", "middle_button_619", "middle_button_620", "middle_button_621", "middle_button_622"], "middle_button_623"],
    ["button_group", ["middle_button_624", "middle_button_625"], "middle_button_626"],
    ["button_group", ["middle_button_627", "middle_button_628"], "middle_button_629"],
    ["button_group", ["middle_button_630", "middle_button_631"], "middle_button_632"]
  ],

  button_big_7: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_700: { selector: "button", header: "Вибрати", status: true },
    middle_button_701: { selector: "button", header: "Читати", status: false },
    p_header_702: { selector: "p", header: "Сортування за ціною" },
    middle_button_702: { selector: "button", header: "найнижча", status: true },
    middle_button_703: { selector: "button", header: "найвища", status: false },
    p_header_704: { selector: "p", header: "Матеріал" },
    middle_button_704: { selector: "button", header: "мідь", status: true },
    middle_button_705: { selector: "button", header: "алюміній", status: false },
    middle_button_706: { selector: "button", header: "всі", status: false },
    p_header_707: { selector: "p", header: "Довжина, см" },
    middle_button_707: { selector: "button", header: "5", status: false },
    middle_button_708: { selector: "button", header: "10", status: false },
    middle_button_709: { selector: "button", header: "15", status: true },
    middle_button_710: { selector: "button", header: "20", status: true },
    middle_button_711: { selector: "button", header: "25", status: false },
    middle_button_712: { selector: "button", header: "30", status: true },
    middle_button_713: { selector: "button", header: "35", status: false },
    middle_button_714: { selector: "button", header: "40", status: true },
    middle_button_715: { selector: "button", header: "45", status: false },
    middle_button_716: { selector: "button", header: "50", status: false },
    middle_button_717: { selector: "button", header: "всі", status: false },
    p_header_718: { selector: "p", header: "Товщина, мм" },
    middle_button_718: { selector: "button", header: "2", status: true },
    middle_button_719: { selector: "button", header: "3", status: true },
    middle_button_720: { selector: "button", header: "4", status: true },
    middle_button_721: { selector: "button", header: "5", status: false },
    middle_button_722: { selector: "button", header: "всі", status: false },
    p_header_723: { selector: "p", header: "Ширина, мм" },
    middle_button_723: { selector: "button", header: "15", status: true },
    middle_button_724: { selector: "button", header: "16", status: true },
    middle_button_725: { selector: "button", header: "20", status: true },
    middle_button_726: { selector: "button", header: "25", status: false },
    middle_button_727: { selector: "button", header: "30", status: true },
    middle_button_728: { selector: "button", header: "40", status: true },
    middle_button_729: { selector: "button", header: "50", status: true },
    middle_button_730: { selector: "button", header: "всі", status: false },
    p_header_731: { selector: "p", header: "Термін виготовлення" },
    middle_button_731: { selector: "button", header: "1 д.", status: false },
    middle_button_732: { selector: "button", header: "2 д.", status: false },
    middle_button_733: { selector: "button", header: "4 д.", status: false },
    middle_button_734: { selector: "button", header: "всі", status: true },
  },

  "button_big_7_structure": [
    ["button_boolean", ["middle_button_700", "middle_button_701"]],
    ["button_boolean", ["middle_button_702", "middle_button_703"]],
    ["button_group", ["middle_button_704", "middle_button_705"], "middle_button_706"],
    ["button_group", ["middle_button_707", "middle_button_708", "middle_button_709", "middle_button_710", "middle_button_711", "middle_button_712", "middle_button_713", "middle_button_714", "middle_button_715", "middle_button_716"], "middle_button_717"],
    ["button_group", ["middle_button_718", "middle_button_719", "middle_button_720", "middle_button_721"], "middle_button_722"],
    ["button_group", ["middle_button_723", "middle_button_724", "middle_button_725", "middle_button_726", "middle_button_727", "middle_button_728", "middle_button_729"], "middle_button_730"],
    ["button_group", ["middle_button_731", "middle_button_732", "middle_button_733"], "middle_button_734"]
  ],

  button_big_8: {
    status_submenu: "select production",
    status_select_product: false,
    ID_select_product: "",
    middle_button_800: { selector: "button", header: "Вибрати", status: true },
    middle_button_801: { selector: "button", header: "Читати", status: false },
    p_header_802: { selector: "p", header: "Сортування за ціною" },
    middle_button_802: { selector: "button", header: "найнижча", status: true },
    middle_button_803: { selector: "button", header: "найвища", status: false },
    p_header_804: { selector: "p", header: "Довжина вхідного, м." },
    middle_button_804: { selector: "button", header: "0.5", status: false },
    middle_button_805: { selector: "button", header: "1.0", status: true },
    middle_button_806: { selector: "button", header: "1.5", status: false },
    middle_button_807: { selector: "button", header: "2.0", status: true },
    middle_button_808: { selector: "button", header: "3.0", status: true },
    middle_button_809: { selector: "button", header: "4.0", status: true },
    middle_button_810: { selector: "button", header: "5.0", status: false },
    middle_button_811: { selector: "button", header: "всі", status: false },
    p_header_812: { selector: "p", header: "Кількість розеток" },
    middle_button_812: { selector: "button", header: "1", status: false },
    middle_button_813: { selector: "button", header: "2", status: false },
    middle_button_814: { selector: "button", header: "3", status: true },
    middle_button_815: { selector: "button", header: "4", status: true },
    middle_button_816: { selector: "button", header: "5", status: false },
    middle_button_817: { selector: "button", header: "всі", status: false },
    p_header_818: { selector: "p", header: "Довжина вихід., м." },
    middle_button_818: { selector: "button", header: "1.0", status: true },
    middle_button_819: { selector: "button", header: "2.0", status: true },
    middle_button_820: { selector: "button", header: "3.0", status: true },
    middle_button_821: { selector: "button", header: "4.0", status: true },
    middle_button_822: { selector: "button", header: "5.0", status: false },
    middle_button_823: { selector: "button", header: "всі", status: false },
    p_header_824: { selector: "p", header: "Перетин кабеля, кв.мм" },
    middle_button_824: { selector: "button", header: "3 * 2.5", status: true },
    middle_button_825: { selector: "button", header: "3 * 4.0", status: true },
    middle_button_826: { selector: "button", header: "3 * 6.0", status: false },
    middle_button_827: { selector: "button", header: "всі", status: false },
    p_header_828: { selector: "p", header: "Термін виготовлення" },
    middle_button_828: { selector: "button", header: "2 д.", status: false },
    middle_button_829: { selector: "button", header: "4 д.", status: false },
    middle_button_830: { selector: "button", header: "всі", status: true },
  },

  "button_big_8_structure": [
    ["button_boolean", ["middle_button_800", "middle_button_801"]],
    ["button_boolean", ["middle_button_802", "middle_button_803"]],
    ["button_group", ["middle_button_804", "middle_button_805", "middle_button_806", "middle_button_807", "middle_button_808", "middle_button_809", "middle_button_810"], "middle_button_811"],
    ["button_group", ["middle_button_812", "middle_button_813", "middle_button_814", "middle_button_815", "middle_button_816"], "middle_button_817"],
    ["button_group", ["middle_button_818", "middle_button_819", "middle_button_820", "middle_button_821", "middle_button_822"], "middle_button_823"],
    ["button_group", ["middle_button_824", "middle_button_825", "middle_button_826"], "middle_button_827"],
    ["button_group", ["middle_button_828", "middle_button_829"], "middle_button_830"],
  ],

  button_big_9: {
    status_submenu: "information",    
    middle_button_900: { selector: "button", header: "Пускові дроти", status: true },    
    middle_button_901: { selector: "button", header: "Зварювальні дроти", status: false },    
    middle_button_902: { selector: "button", header: "Перемички АКБ", status: false },    
    middle_button_903: { selector: "button", header: "Тверда шина", status: false },
  },

  "button_big_9_structure": [
    ["button_boolean", ["middle_button_900", "middle_button_901", "middle_button_902", "middle_button_903"]],
  ],

  button_big_10: {
    status_submenu: "information",
    middle_button_1000: { selector: "button", header: "Телефон, пошта", status: true },    
    middle_button_1001: { selector: "button", header: "Навігація по сайту", status: false },
    middle_button_1002: { selector: "button", header: "Терміни виготовлення", status: false },    
    middle_button_1003: { selector: "button", header: "Гарантійні зобов'язання", status: false },
    middle_button_1004: { selector: "button", header: "Оформлення покупки", status: false },    
    middle_button_1005: { selector: "button", header: "Згода на обробку персональних даних", status: false },    
    middle_button_1006: { selector: "button", header: "Політика конфіденційності<br>та умови<br>використання сайту", status: false },        
  },

  "button_big_10_structure": [
    ["button_boolean", ["middle_button_1000", "middle_button_1001", "middle_button_1002", "middle_button_1003", "middle_button_1004", "middle_button_1005", "middle_button_1006"]],
  ],

  button_big_11: {
    status_submenu: "information",
    middle_button_1100: { selector: "button", header: "Товар у кошику", status: true },
    middle_button_1101: { selector: "button", header: "Список вподобань", status: false },
    middle_button_1102: { selector: "button", header: "Оформлення замовлення", status: false },
  },

  "button_big_11_structure": [
    ["button_boolean", ["middle_button_1100", "middle_button_1101", "middle_button_1102"]],
  ],
};
