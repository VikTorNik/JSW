/* Структура об'єкту зберігання кнопок і їх стану
"button_big_0" - група кнопок до 0-го пункта меню
["p", "Сортування за ціною"] - заголовок групи кнопок і хідер
["button", "Вибрати", true] - кнопка, хидер кнопки, стан кнопки (нажата/віджата) */

export const buttonSubMenu = {
  button_big_0: {
    middle_button_000: { selector: "button", header: "Вибрати", status: true },
    middle_button_001: { selector: "button", header: "Читати", status: false },
    p_header_002: { selector: "p", header: "Сортування за ціною" },
    middle_button_002: { selector: "button", header: "найнижча", status: true },
    middle_button_003: { selector: "button", header: "найвища", status: false },
    p_header_004: { selector: "p", header: "Довжина, м." },
    middle_button_004: { selector: "button", header: "2,5", status: true },
    middle_button_005: { selector: "button", header: "2,8", status: true },
    middle_button_006: { selector: "button", header: "3,0", status: true },
    middle_button_007: { selector: "button", header: "4,0", status: true },
    middle_button_008: { selector: "button", header: "5,0", status: false },
    middle_button_009: { selector: "button", header: "6,0", status: false },
    middle_button_010: { selector: "button", header: "7,0", status: false },
    middle_button_011: { selector: "button", header: "8,0", status: false },
    middle_button_012: { selector: "button", header: "всі", status: false },
    p_header_013: { selector: "p", header: "Переріз кабеля, кв.мм" },
    middle_button_013: { selector: "button", header: "10", status: true },
    middle_button_014: { selector: "button", header: "16", status: true },
    middle_button_015: { selector: "button", header: "25", status: true },
    middle_button_016: { selector: "button", header: "35", status: false },
    middle_button_017: { selector: "button", header: "всі", status: false },
    p_header_018: { selector: "p", header: "Матеріал «крокодилів»" },
    middle_button_018: { selector: "button", header: "залізо", status: false },
    middle_button_019: { selector: "button", header: "пластик", status: false },
    middle_button_020: { selector: "button", header: "всі", status: true },
    p_header_021: { selector: "p", header: "Термін готовності, днів" },
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
    middle_button_100: { selector: "button", header: "Вибрати", status: true },
    middle_button_101: { selector: "button", header: "Читати", status: false },
    p_header_102: { selector: "p", header: "Сортування за ціною" },
    middle_button_102: { selector: "button", header: "найнижча", status: true },
    middle_button_103: { selector: "button", header: "найвища", status: false },
    p_header_105: { selector: "p", header: "Довжина, метри" },
    middle_button_104: { selector: "button", header: "2,5", status: true },
    middle_button_105: { selector: "button", header: "2,8", status: true },
    middle_button_106: { selector: "button", header: "3,0", status: true },
    middle_button_107: { selector: "button", header: "4,0", status: true },
    middle_button_108: { selector: "button", header: "5,0", status: false },
    middle_button_109: { selector: "button", header: "6,0", status: false },
    middle_button_110: { selector: "button", header: "7,0", status: false },
    middle_button_111: { selector: "button", header: "8,0", status: false },
    middle_button_112: { selector: "button", header: "всі", status: false },    
  },

  "button_big_1_structure": [
    ["button_boolean", ["middle_button_100", "middle_button_101"]],
    ["button_boolean", ["middle_button_102", "middle_button_103"]],
    ["button_group", ["middle_button_104", "middle_button_105", "middle_button_106", "middle_button_107", "middle_button_108", "middle_button_109", "middle_button_110", "middle_button_111"], "middle_button_112"],    
  ],



  
  
};
