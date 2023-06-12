import { ROOT, screenDispatcher } from "../../index.js";

export const bigMenuText = [
  ["Пускові дроти", "Пускові (стартові) дроти для «прикурювання»"],
  ["Дроти для ПЗП", "Дроти для пуско-зарядних пристроїв"],
  ["Зварювальні дроти", "Дроти з мідного кабеля для зварювальних апаратів (інверторів)"],
  ["Перемички гнучкі", "Перемички з гумовою ізоляцією для під’єднання інверторів до акумуляторів "],
  ["Дроти для 220В", "Дроти для підключення інверторів до мережі змінного струму 220В"],
  ["Шина мідна плетена", "Гнучкі перемички (шини) на базі мідної плетінки "],
  ["Провід маси", "Для з'єднання мінуса акумулятора з корпусом в автотранспортних засобах"],
  ["Гнучка шина", "Набірні шини з ізоляцією виготовлені з тонких мідних полос"],
  ["Тверда шина", "Тверді перемички (шини) на базі мідної полоси"],
  ["«Крокодили»", "Зажими типу «Крокодил» для пускових та зварювальних дротів"],
  ["Як купити?", "інформація щодо оформлення замовлення"],
  ["Контакти", "контактна інформація виробника"],
];

export const showBigmenuScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", "2"); // поточний екран
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
      screenDispatcher("3", false);
    }), { once: 1 }
  });
};
