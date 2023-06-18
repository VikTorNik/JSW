import { ROOT, SMALLMENU_SCREEN } from "../../index.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { creationMainMenu } from "../../smallmenu_screen/js/small_creation_first.js";
import { creationWindowProduct } from "../../smallmenu_screen/js/small_creation_third.js";
import { creationSubMenu, clickButtonSubMenu } from "../../smallmenu_screen/js/small_creation_second.js";

const BIG_MENU = 1;
const SUB_MENU = 2;
const PRODUCT_LIST = 3;

export const showSmallmenuScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", SMALLMENU_SCREEN); // поточна сторінка  
  if (orientationScreenLandscape) {
    showSubMenu("main-small-landscape", 'smallmenu-landscape-bg', 'smallmenu-land-div', ".smallmenu-land-div", BIG_MENU, SUB_MENU, PRODUCT_LIST, "smallmenu-left-bg", "smallmenu-left-div", "smallmenu-right-bg", "smallmenu-right-div");
  }
  else {
    showSubMenu("main-small-portrait", 'smallmenu-portrait-bg', 'smallmenu-port-div', ".smallmenu-port-div", PRODUCT_LIST, BIG_MENU, SUB_MENU, "smallmenu-top-bg", "smallmenu-top-div", "smallmenu-bottom-bg", "smallmenu-bottom-div");
  }
}

const showSubMenu = (mainSmall, menuBG, menuDiv, classMenuDiv, subScreen1, subScreen2, subScreen3, firstBG, firstDiv, thirdBG, thirdDiv) => {
  // локальна змінна для фіксації поточного меню
  let currentMenu = ROOT.style.getPropertyValue("--currentMenu");

  // формуємо фон сторінки
  const parentDiv = document.createElement("main");
  parentDiv.className = mainSmall;
  document.querySelector("main").replaceWith(parentDiv);
  const introTextHTML = [`<div class=${menuBG}>`];
  introTextHTML.push(`<div class=${menuDiv}>`);
  introTextHTML.push("</div></div>");
  parentDiv.innerHTML = introTextHTML.join("");
  document.body.appendChild(parentDiv);

  // послідовність відображення підекранів (меню / підменю / товар) в залежності від орієнтації
  const smallmenuDiv = document.querySelector(classMenuDiv);
  let bigMenuDiv, subMenuDiv, productMenuDiv;
  if (subScreen1 === BIG_MENU) { bigMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen1 === PRODUCT_LIST) { productMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  
  if (subScreen2 === SUB_MENU) { subMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen2 === BIG_MENU) { bigMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  
  if (subScreen3 === PRODUCT_LIST) { productMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen3 === SUB_MENU) { subMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }  

  // формуємо колонку з пунктами меню  
  const fragmentLeft = creationMainMenu(firstBG, firstDiv);
  smallmenuDiv.replaceChild(fragmentLeft, bigMenuDiv);
  // підсвічуємо поточний вибраний пункт
  document.querySelector(`#${currentMenu}`).className = 'selected-button';

  // формуємо колонку з субменю
  const fragmentMiddle = creationSubMenu(buttonSubMenu[currentMenu]);
  smallmenuDiv.replaceChild(fragmentMiddle, subMenuDiv);
  // обробка натискання кнопок у субменю
  clickButtonSubMenu();

  // формуємо колонку з товаром
  const fragmentRight = creationWindowProduct(thirdBG, thirdDiv);
  smallmenuDiv.replaceChild(fragmentRight, productMenuDiv);

  // реалізація вибіру і підсвітки вибраного пункта меню
  [...document.querySelectorAll('.smallmenu-button'), ...document.querySelectorAll('.selected-button')].forEach(indexSmallMenu => {
    indexSmallMenu.addEventListener('click', () => {
      // попередньому пункту повертаємо стандартні кольори
      document.querySelector(`#${currentMenu}`).className = 'smallmenu-button';
      // новий вибраний пункт підсвічуємо 
      currentMenu = indexSmallMenu.id; // вибране меню - локальна змінна
      ROOT.style.setProperty("--currentMenu", indexSmallMenu.id); // вибране меню  - глобальна змінна
      document.querySelector(`#${currentMenu}`).className = 'selected-button';

      // оновлюємо колонку з субменю
      const fragmentMiddle = creationSubMenu(buttonSubMenu[currentMenu]);
      document.querySelector(".smallmenu-middle-bg").replaceWith(fragmentMiddle);
      // обробка натискання кнопок у середній колонці
      clickButtonSubMenu();

      // оновлюємо колонку з товаром
      const fragmentRight = creationWindowProduct(thirdBG, thirdDiv);
      document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
    })
  });
};
