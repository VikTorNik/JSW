import { ROOT } from "../../index.js";
// import { bigMenuText } from "/bigmenu_screen/js/bigmenu.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { creationLeftCollumn } from "../../smallmenu_screen/js/land_left_collumn.js";
import { creationMiddleCollumn, clickButtonMiddleCollumn } from "../../smallmenu_screen/js/land_middle_collumn.js";
import { creationRightCollumn } from "../../smallmenu_screen/js/land_right_collumn.js";

import { creationTopRow } from "../../smallmenu_screen/js/port_top_row.js"; 
import { creationMiddleRow, clickButtonMiddleRow } from "../../smallmenu_screen/js/port_middle_row.js";
import { creationBottomRow } from "../../smallmenu_screen/js/port_bottom_row.js";

export const showSmallmenuScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", "3"); // поточна сторінка
  if (orientationScreenLandscape) { showSmallmenuScreenLandscape(); }
  else { showSmallmenuScreenPortrait(); }
}

const showSmallmenuScreenLandscape = () => {
  // локальна змінна для фіксації поточного меню
  let currentMenu = ROOT.style.getPropertyValue("--currentMenu");

  // формуємо фон сторінки
  const parentDiv = document.createElement("main");
  parentDiv.className = "main-small-landscape";
  document.querySelector("main").replaceWith(parentDiv);
  const introTextHTML = ["<div class='smallmenu-landscape-bg'>"];
  introTextHTML.push("<div class='smallmenu-land-div'>");
  introTextHTML.push("</div></div>");
  parentDiv.innerHTML = introTextHTML.join("");
  document.body.appendChild(parentDiv);

  // формуємо ліву колонку з пунктами меню
  const fragmentLeft = creationLeftCollumn();
  document.querySelector(".smallmenu-land-div").appendChild(fragmentLeft);
  // підсвічуємо поточний вибраний пункт
  document.querySelector(`#${currentMenu}`).className = 'selected-button';

  // формуємо середню колонку
  const fragmentMiddle = creationMiddleCollumn(buttonSubMenu[currentMenu]);
  document.querySelector(".smallmenu-land-div").appendChild(fragmentMiddle);  
  // обробка натискання кнопок у середній колонці
  clickButtonMiddleCollumn();

  // формуємо праву колонку
  const fragmentRight = creationRightCollumn();
  document.querySelector(".smallmenu-land-div").appendChild(fragmentRight);

  // реалізація вибіру і підсвітки вибраного пункта меню
  [...document.querySelectorAll('.smallmenu-button'), ...document.querySelectorAll('.selected-button')].forEach(indexSmallMenu => {
    indexSmallMenu.addEventListener('click', () => {
      // попередньому пункту повертаємо стандартні кольори
      document.querySelector(`#${currentMenu}`).className = 'smallmenu-button';
      // новий вибраний пункт підсвічуємо 
      currentMenu = indexSmallMenu.id; // вибране меню - локальна змінна
      ROOT.style.setProperty("--currentMenu", indexSmallMenu.id); // вибране меню  - глобальна змінна
      document.querySelector(`#${currentMenu}`).className = 'selected-button';

      // оновлюємо середню колонку
      const fragmentMiddle = creationMiddleCollumn(buttonSubMenu[currentMenu]);
      document.querySelector(".smallmenu-middle-bg").replaceWith(fragmentMiddle);      
      // обробка натискання кнопок у середній колонці
      clickButtonMiddleCollumn();
      
      // оновлюємо праву колонку
      const fragmentRight = creationRightCollumn();
      document.querySelector(".smallmenu-right-bg").replaceWith(fragmentRight);
    })
  });
};

const showSmallmenuScreenPortrait = () => {
  // локальна змінна для фіксації поточного меню
  let currentMenu = ROOT.style.getPropertyValue("--currentMenu");

  // формуємо фон сторінки
  const parentDiv = document.createElement("main");
  parentDiv.className = "main-small-portrait";
  document.querySelector("main").replaceWith(parentDiv);
  const introTextHTML = ["<div class='smallmenu-portrait-bg'>"];
  introTextHTML.push("<div class='smallmenu-port-div'>");
  introTextHTML.push("</div></div>");
  parentDiv.innerHTML = introTextHTML.join("");
  document.body.appendChild(parentDiv);

  // формуємо нижній рядок
  const fragmentBottom = creationBottomRow();
  document.querySelector(".smallmenu-port-div").appendChild(fragmentBottom);
  
  // формуємо верхній рядок з пунктами меню
  const fragmentTop = creationTopRow();
  document.querySelector(".smallmenu-port-div").appendChild(fragmentTop);
  // підсвічуємо поточний вибраний пункт
  document.querySelector(`#${currentMenu}`).className = 'selected-button';

  // формуємо середній рядок
  const fragmentMiddle = creationMiddleRow(buttonSubMenu[currentMenu]);
  document.querySelector(".smallmenu-port-div").appendChild(fragmentMiddle);
  // обробка натискання кнопок у середній колонці
  clickButtonMiddleRow(); 

  // реалізація вибіру і підсвітки вибраного пункта меню
  [...document.querySelectorAll('.smallmenu-button'), ...document.querySelectorAll('.selected-button')].forEach(indexSmallMenu => {
    indexSmallMenu.addEventListener('click', () => {
      // попередньому пункту повертаємо стандартні кольори
      document.querySelector(`#${currentMenu}`).className = 'smallmenu-button';
      // новий вибраний пункт підсвічуємо 
      currentMenu = indexSmallMenu.id; // вибране меню - локальна змінна
      ROOT.style.setProperty("--currentMenu", indexSmallMenu.id); // вибране меню  - глобальна змінна
      document.querySelector(`#${currentMenu}`).className = 'selected-button';

      // оновлюємо середній рядок
      const fragmentMiddle = creationMiddleRow(buttonSubMenu[currentMenu]);
      document.querySelector(".smallmenu-middle-bg").replaceWith(fragmentMiddle);
      // обробка натискання кнопок у середній колонці
      clickButtonMiddleRow();

      // оновлюємо нижній рядок
      const fragmentBottom = creationBottomRow();
      document.querySelector(".smallmenu-bottom-bg").replaceWith(fragmentBottom);
    })
  });
};
