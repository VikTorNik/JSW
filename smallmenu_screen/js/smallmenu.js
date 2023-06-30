import { ROOT, SMALLMENU_SCREEN } from "../../index.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { creationMainMenu } from "../../smallmenu_screen/js/small_creation_first.js";
import { creationSubMenu, clickButtonSubMenu, correctionCSSButtonSubMenu }
  from "../../smallmenu_screen/js/small_creation_second.js";

import { getFilteredAssortedProduct_00, getCreationButtonProduct_00, getReferenceInformationProduct_00 }
  from "../../smallmenu_screen/js/small_creation_third_00.js";
import { getFilteredAssortedProduct_01, getCreationButtonProduct_01, getReferenceInformationProduct_01 }
  from "../../smallmenu_screen/js/small_creation_third_01.js";
import { getFilteredAssortedProduct_02, getCreationButtonProduct_02, getReferenceInformationProduct_02 }
  from "../../smallmenu_screen/js/small_creation_third_02.js";
import { getFilteredAssortedProduct_03, getCreationButtonProduct_03, getReferenceInformationProduct_03 }
  from "../../smallmenu_screen/js/small_creation_third_03.js";
import { getFilteredAssortedProduct_04, getCreationButtonProduct_04, getReferenceInformationProduct_04 }
  from "../../smallmenu_screen/js/small_creation_third_04.js";
import { getFilteredAssortedProduct_05, getCreationButtonProduct_05, getReferenceInformationProduct_05 }
  from "../../smallmenu_screen/js/small_creation_third_05.js";
import { getFilteredAssortedProduct_06, getCreationButtonProduct_06, getReferenceInformationProduct_06 }
  from "../../smallmenu_screen/js/small_creation_third_06.js";
import { getFilteredAssortedProduct_07, getCreationButtonProduct_07, getReferenceInformationProduct_07 }
  from "../../smallmenu_screen/js/small_creation_third_07.js";
import { getFilteredAssortedProduct_08, getCreationButtonProduct_08, getReferenceInformationProduct_08 }
  from "../../smallmenu_screen/js/small_creation_third_08.js";
import {getReferenceInformationProduct_09 }
  from "../../smallmenu_screen/js/small_creation_third_09.js";
import { getReferenceInformationProduct_10 }
  from "../../smallmenu_screen/js/small_creation_third_10.js";
import { getReferenceInformationProduct_11 }
  from "../../smallmenu_screen/js/small_creation_third_11.js";

const BIG_MENU = 1;
const SUB_MENU = 2;
const PRODUCT_LIST = 3;

// об'єкт функцій для кожного пункту меню
export const functionsForButtonMenu = {
  "button_big_0": [getFilteredAssortedProduct_00, getCreationButtonProduct_00, getReferenceInformationProduct_00,
    "middle_button_000", "middle_button_001"],
  "button_big_1": [getFilteredAssortedProduct_01, getCreationButtonProduct_01, getReferenceInformationProduct_01,
    "middle_button_100", "middle_button_101"],
  "button_big_2": [getFilteredAssortedProduct_02, getCreationButtonProduct_02, getReferenceInformationProduct_02,
    "middle_button_200", "middle_button_201"],
  "button_big_3": [getFilteredAssortedProduct_03, getCreationButtonProduct_03, getReferenceInformationProduct_03,
    "middle_button_300", "middle_button_301"],
  "button_big_4": [getFilteredAssortedProduct_04, getCreationButtonProduct_04, getReferenceInformationProduct_04,
    "middle_button_400", "middle_button_401"],
  "button_big_5": [getFilteredAssortedProduct_05, getCreationButtonProduct_05, getReferenceInformationProduct_05,
    "middle_button_500", "middle_button_501"],
  "button_big_6": [getFilteredAssortedProduct_06, getCreationButtonProduct_06, getReferenceInformationProduct_06,
    "middle_button_600", "middle_button_601"],
  "button_big_7": [getFilteredAssortedProduct_07, getCreationButtonProduct_07, getReferenceInformationProduct_07,
    "middle_button_700", "middle_button_701"],
  "button_big_8": [getFilteredAssortedProduct_08, getCreationButtonProduct_08, getReferenceInformationProduct_08,
    "middle_button_800", "middle_button_801"],
  "button_big_9": [null, null, getReferenceInformationProduct_09],  
  "button_big_10": [null, null, getReferenceInformationProduct_10],
  "button_big_11": [null, null, getReferenceInformationProduct_11],
}

export const showSmallmenuScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", SMALLMENU_SCREEN); // поточна сторінка  
  if (orientationScreenLandscape) {
    showSubMenu("main-small-landscape", 'smallmenu-landscape-bg', 'smallmenu-land-div', ".smallmenu-land-div", BIG_MENU, SUB_MENU, PRODUCT_LIST, "smallmenu-first-land-bg", "smallmenu-first-land-div", "smallmenu-third-land-bg", "smallmenu-third-land-div");
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
  // обробка натискання кнопок у субменю та відображення колонки з товаром
  clickButtonSubMenu();
  // забеспечення кольору конопок субменю при зміні орієнтації  
  correctionCSSButtonSubMenu(currentMenu);
  // формуємо колонку з товаром
  const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
    functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
  smallmenuDiv.replaceChild(fragmentRight, productMenuDiv);
  // оновлення колонки з товаром після натискання кнопки субменю - 
  [...document.querySelectorAll('.second-button'), ...document.querySelectorAll('.second-button-selected')].forEach(indexMiddlelMenu => {
    indexMiddlelMenu.addEventListener('click', () => {
      const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
        functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
      document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
    })
  });

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
      //* - ВИПРАВИТИ ПОСИЛАННЯ НА - ЗРОБИТИ РІЗНИМ ДЛЯ АЛЬБОМУ І ПОРТРЕТУ
      document.querySelector(".smallmenu-second-bg").replaceWith(fragmentMiddle);
      // обробка натискання кнопок у середній колонці
      clickButtonSubMenu();
      correctionCSSButtonSubMenu(currentMenu);
      // оновлюємо колонку з товаром
      const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
        functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
      document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
      // оновлення колонки з товаром після натискання кнопки субменю
      [...document.querySelectorAll('.second-button'), ...document.querySelectorAll('.second-button-selected')].forEach(indexMiddlelMenu => {
        indexMiddlelMenu.addEventListener('click', () => {
          const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
            functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
          document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
        })
      });
    })
  });
};

const creationWindowProduct = (classNameBG, classNameDiv, currentButtonBig, getFilteredAssortedProduct, getCreationButtonProduct, getReferenceInformationProduct) => {
  // getFilteredAssortedProduct - повертає об'єкт с продуктами для відображення
  // getCreationButtonProduct - повертає html-код з цього об'єкту
  // getReferenceInformationProduct - повертає html-код інформаційно-довідкової сторінки
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = classNameBG;
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class=${classNameDiv}>`);
  // buttonSubMenu[currentButtonBig] - це всі кнопки зі статусами
  // [functionsForButtonMenu[currentButtonBig][3]].status - це ми отримали статус обраної кнопки ВИБРАТИ  
  // якщо меню для вибору продукції, то формуємо вивід продуктів, чи довідкову інформацію
  if (buttonSubMenu[currentButtonBig]["status_submenu"] === "select production") {
    if (buttonSubMenu[currentButtonBig][functionsForButtonMenu[currentButtonBig][3]].status) {
      // взяли сформований масив з продуктами  
      let objectProductItem = getFilteredAssortedProduct();
      // перебираємо весь об'єкт з товаром і формуємо html-код
      for (const indexSubMenu in objectProductItem) {
        const currentProduct = objectProductItem[indexSubMenu];
        nodeTextHTML.push(...getCreationButtonProduct(currentProduct));
      }
    } else {
      nodeTextHTML.push(...getReferenceInformationProduct());
    }
  }
  // якщо меню інформаційне - 
  if (buttonSubMenu[currentButtonBig]["status_submenu"] === "information") {
    // Знаходимо нажату кнопку і отрумуємо по ній інформаційну сторінку    
    for (const indexSubMenu in buttonSubMenu[currentButtonBig]) {
      const currentElement = buttonSubMenu[currentButtonBig][indexSubMenu];
      if (currentElement.selector === 'button') {        
        if (currentElement.status) {
          nodeTextHTML.push(...getReferenceInformationProduct(currentElement.header));
        }
      }
    }
  }

  nodeTextHTML.push("</div>");
  fragmentDiv.innerHTML = nodeTextHTML.join("");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}
