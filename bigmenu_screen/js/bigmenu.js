import { ROOT, screenDispatcher, BIGMENU_SCREEN, SMALLMENU_SCREEN } from "../../index.js";

export const bigMenuText = [
  ["Пускові дроти", "Пускові (стартові) дроти для «прикурювання»"],
  ["Дроти для ПЗП", "Дроти для пуско-зарядних пристроїв"],
  ["Зварювальні дроти", "Дроти з мідного кабеля для зварювальних апаратів (інверторів)"],
  ["Подовжувачі зварні", "Перехідники та подовжувачі з мідного кабеля для зварювальних апаратів"],
  ["Крокодили та клеми", "Зажими для пускових дротів, пуско-зарядних пристроїв та зварювальних дротів"],  
  ["Перемички для АКБ", "Кабелі маси та перемички з гумовою ізоляцією для під’єднання акумуляторів"],
  ["Шина мідна плетена", "Гнучкі перемички (шини) на базі мідної плетінки"],  
  ["Тверда шина", "Тверді перемички (шини) на базі мідної полоси"],
  ["Дроти для 220В", "Дроти для підключення інверторів до мережі змінного струму 220В"],  
  ["Як купити?", "Інформація щодо оформлення замовлення"],
  ["Контакти", "Контактна інформація виробника"],
  ["Корзина", "Вибраний товар для оформлення замовлення"],
];

export const showBigmenuScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", BIGMENU_SCREEN); // поточний екран
  if (orientationScreenLandscape) { createDOMBigmenu("main-bigmenu-landscape", "<div class='bigmenu-land-bg'><div class='bigmenu-land-div'>"); }
  else { createDOMBigmenu("main-bigmenu-portrait", "<div class='bigmenu-port-bg'><div class='bigmenu-port-div'>"); }
}

const createDOMBigmenu = (mainOrientation, openDiv) => {
  const parentDiv = document.createElement("main");
  parentDiv.className = mainOrientation;
  document.querySelector("main").replaceWith(parentDiv);
  const introTextHTML = [openDiv];

  bigMenuText.forEach((buttonMenu, numberButton) => { introTextHTML.push(`<button class='bigmenu-button' id=button_big_${numberButton}><p class='bigmenu-header'>${buttonMenu[0]}</p><p class='bigmenu-description'>${buttonMenu[1]}</p></button>`); });
  introTextHTML.push("</div></div>");
  parentDiv.innerHTML = introTextHTML.join("");
  document.body.appendChild(parentDiv);

  [...document.querySelectorAll('.bigmenu-button')].forEach(indexSmallMenu => {
    indexSmallMenu.addEventListener('click', () => {
      ROOT.style.setProperty("--currentMenu", indexSmallMenu.id); // вибране меню      
      screenDispatcher(SMALLMENU_SCREEN, false);
    }), { once: 1 }
  });
};
