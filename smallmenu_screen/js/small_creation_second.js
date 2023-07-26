import { ROOT } from "../../index.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { functionsForButtonMenu } from "../../smallmenu_screen/js/smallmenu.js";

// формуємо субменю з кнопками
export const creationSubMenu = (objectButtonMiddleMenu) => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-second-bg";
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-second-div'>");
  // перебираємо весь об'єкт і формуємо html-код
  for (const indexSubMenu in objectButtonMiddleMenu) {
    const currentElement = objectButtonMiddleMenu[indexSubMenu];
    if (currentElement.selector === 'button') {
      if (currentElement.status) {
        nodeTextHTML.push(`<${currentElement.selector} class='second-button-selected' id=${indexSubMenu}><p class='second-button-header-selected'>${currentElement.header}</p></${currentElement.selector}>`);
      } else {
        nodeTextHTML.push(`<${currentElement.selector} class='second-button' id=${indexSubMenu}><p class='second-button-header'>${currentElement.header}</p></${currentElement.selector}>`);
      }
    }
    if (currentElement.selector === 'p') {
      nodeTextHTML.push(`<${currentElement.selector} class='second-header' id=${indexSubMenu}>${currentElement.header}</${currentElement.selector}>`);
    }
    if (currentElement.selector === 'alphabet') {
      if (currentElement.status) {
        nodeTextHTML.push(`<button class='alphabet-selected' id=${indexSubMenu}><p class='alphabet-header-selected'>${currentElement.header}</p></button>`);
      } else {
        nodeTextHTML.push(`<button class='alphabet' id=${indexSubMenu}><p class='alphabet-header'>${currentElement.header}</p></button>`);
      }
    }
  }
  nodeTextHTML.push("</div>");
  fragmentDiv.innerHTML = nodeTextHTML.join("");
  return fragmentDiv;
}

// фіксація і відтискання кнопки
export const clickButtonSubMenu = () => {
  [...document.querySelectorAll('.second-button'), ...document.querySelectorAll('.second-button-selected')].forEach(indexMiddlelMenu => {
    indexMiddlelMenu.addEventListener('click', () => {
      // формування ліквідного вибору після натискання
      correctionButtonSubMenu(ROOT.style.getPropertyValue("--currentMenu"), indexMiddlelMenu.id);
      // корегування (оновлення) CSS згідно з вибором
      correctionCSSButtonSubMenu(ROOT.style.getPropertyValue("--currentMenu"));
    })
  });
};

// формування ліквідного вибору після натискання
const correctionButtonSubMenu = (objectButton /* "button_big_0" */, pressButton /* "second-button-1" */) => {

  // СТВОРЮЄМО ДВОМІРНИЙ МАСИВ для збегірання статусів

  const currentArrayStatusButton = [...Array(buttonSubMenu[`${objectButton}_structure`].length)].map((_, i) => []);
  // йдемо по всій структурі і формуємо масив статусів  
  buttonSubMenu[`${objectButton}_structure`].forEach((stringStructure, numberString) => {
    // перший елемент true це "button_boolean" / false це "button_group"
    // якщо false ("button_group"), то останній елемент масиву - це статус сумарної кнопки
    if (stringStructure[0] === "button_boolean") {
      currentArrayStatusButton[numberString][0] = true;
      stringStructure[1].forEach((groupStructure, numberElementInGroup) => {
        currentArrayStatusButton[numberString][numberElementInGroup + 1] = buttonSubMenu[objectButton][groupStructure].status;
      })
    }
    if (stringStructure[0] === "button_group") {
      currentArrayStatusButton[numberString][0] = false;
      stringStructure[1].forEach((groupStructure, numberElementInGroup) => {
        currentArrayStatusButton[numberString][numberElementInGroup + 1] = buttonSubMenu[objectButton][groupStructure].status;
      })
      currentArrayStatusButton[numberString].push(buttonSubMenu[objectButton][stringStructure[2]].status);
    }
  })

  // поточний статус нажатої кнопки
  const statusPressButton = buttonSubMenu[objectButton][pressButton].status;

  // знаходимо групу с якій знаходиться натиснута кнопка
  buttonSubMenu[`${objectButton}_structure`].forEach((stringStructure, numberString) => {
    if (stringStructure[1].includes(pressButton) || (stringStructure[2] === pressButton)) {
      // знаходимо номер кнопки у рядку
      let numberButtonInString;
      stringStructure[1].forEach((elementButton, numberElementInGroup) => {
        if (elementButton === pressButton) { numberButtonInString = numberElementInGroup + 1 };
      })

      // КОРЕГУВАННЯ СТАТУСУ "button_boolean"
      // якщо було 0, то всі кнопки робимо 0, а поточну робимо 1
      // якщо було 1, то поточну кнопку робимо 0, а першу по списку робимо 1

      // координати і статус нажатої кнопки - currentArrayStatusButton[numberString][numberButtonInString]
      if (stringStructure[0] === "button_boolean") {
        // якщо кнопка була віджатою, то всі кнопки обнюляємо, а поточну робимо нажатою
        if (!statusPressButton) {
          currentArrayStatusButton[numberString].forEach((_, numberElementInGroup) => {
            if (numberElementInGroup !== 0) {
              currentArrayStatusButton[numberString][numberElementInGroup] = false;
            }
          })
          currentArrayStatusButton[numberString][numberButtonInString] = true;
        } else {// якщо кнопка була нажатою, то поточну робимо 0, а одну з інших робимо 1
          let currentFlag = false;
          currentArrayStatusButton[numberString].forEach((_, numberElementInGroup) => {
            // нажимаємо нову кнопку окрім старої і окрім 0-ї так як це код групи
            if ((numberElementInGroup !== numberButtonInString) && (numberElementInGroup !== 0)) {
              if (!currentFlag) {
                currentArrayStatusButton[numberString][numberElementInGroup] = true;
                currentFlag = true;
              }
              else { currentArrayStatusButton[numberString][numberElementInGroup] = false; }
            }
          })
          currentArrayStatusButton[numberString][numberButtonInString] = false;
        }
      }

      // КОРЕГУВАННЯ СТАТУСУ "button_group"

      if (stringStructure[0] === "button_group") {
        // змінюємо статус кнопки на протилежний
        if (!statusPressButton) {
          currentArrayStatusButton[numberString][numberButtonInString] = true;
        } else {
          currentArrayStatusButton[numberString][numberButtonInString] = false;
        }

        // Натискання на сумарну кнопку
        if (stringStructure[2] === pressButton) {
          if (currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1]) {
            // 	Якщо включена - 1 , то виключаємо її - 0 і включаємо тільки першу звичайну кнопку у цій групі - 1
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = false;
            for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
              currentArrayStatusButton[numberString][i] = false;
            }
            currentArrayStatusButton[numberString][1] = true;

          } else {// 	Якщо виключена - 0 , то включаємо її - 1 і відключаємо всі прості кнопки - 0
            //! Якщо виключена - 0 , то включаємо її - 1 і включаємо всі прості кнопки - 1
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
            for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
              currentArrayStatusButton[numberString][i] = true;
            }
          }
        } else { //! якщо нажали звичайну кнопку

          // Якщо серед простих кнопок всі 1, то всі кнопки робимо 0 і робимо 1 для "включено все"
          //! Якщо серед простих кнопок всі 1, то робимо 1 для "включено все"
          let sum = true;
          for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
            sum = sum && currentArrayStatusButton[numberString][i];
          }
          if (sum) {
            // for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
            //   currentArrayStatusButton[numberString][i] = false;
            // }
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
          }

          // Якщо серед простих кнопок всі 0, то робимо 1 - для "включено все"
          //!  Якщо серед простих кнопок всі 0, то робимо включаємо всі кнопки і кнопку "включено все"
          sum = true;
          for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
            sum = sum && !currentArrayStatusButton[numberString][i];
          }
          if (sum) {
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
            //! включили всі кнопки
            for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
              currentArrayStatusButton[numberString][i] = true;
            }
          }

          //!  Якщо серед простих кнопок є 1 і 0, то робимо включаємо всі кнопки і кнопку "включено все"
          sum = true;
          for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
            sum = sum && currentArrayStatusButton[numberString][i];
          }
          if (!sum) {
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = false;
          }
        }
      }
    }
  });

  // ПОВЕРТАЄМО ВСІ ПРАВКИ НАЗАД У buttonSubMenu

  // йдемо по всій структурі і формуємо масив статусів  
  buttonSubMenu[`${objectButton}_structure`].forEach((stringStructure, numberString) => {
    if (stringStructure[0] === "button_boolean") {
      stringStructure[1].forEach((groupStructure, numberElementInGroup) => {
        buttonSubMenu[objectButton][groupStructure].status = currentArrayStatusButton[numberString][numberElementInGroup + 1];
      })
    }
    if (stringStructure[0] === "button_group") {
      stringStructure[1].forEach((groupStructure, numberElementInGroup) => {
        buttonSubMenu[objectButton][groupStructure].status = currentArrayStatusButton[numberString][numberElementInGroup + 1];
      })
      buttonSubMenu[objectButton][stringStructure[2]].status = currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1];
    }
  })
};

// корегування (оновлення) CSS згідно з вибором
export const correctionCSSButtonSubMenu = (objectButton /* "button_big_0" */) => {
  // якщо меню для вибору продукції, то формуємо вивід продуктів, чи довідкову інформацію
  if (buttonSubMenu[objectButton]["status_submenu"] === "select production") {
    if (buttonSubMenu[objectButton][functionsForButtonMenu[objectButton][3]].status) {
      for (const indexSubMenu in buttonSubMenu[objectButton]) {
        const currentElement = buttonSubMenu[objectButton][indexSubMenu];
        if (currentElement.selector === 'button') {
          // знімаємо фокус з елемента бо йде баг при зміні класів в дереві DOM
          document.querySelector(`#${indexSubMenu}`).blur();
          if (currentElement.status) { document.querySelector(`#${indexSubMenu}`).className = 'second-button-selected'; }
          else { document.querySelector(`#${indexSubMenu}`).className = 'second-button'; }
        }
      }
    }
    // якщо кнопка "читати"
    if (buttonSubMenu[objectButton][functionsForButtonMenu[objectButton][4]].status) {
      for (const indexSubMenu in buttonSubMenu[objectButton]) {
        const currentElement = buttonSubMenu[objectButton][indexSubMenu];
        if (currentElement.selector === 'button') {
          // знімаємо фокус з елемента бо йде баг при зміні класів в дереві DOM
          document.querySelector(`#${indexSubMenu}`).blur();
          document.querySelector(`#${indexSubMenu}`).className = 'second-button-desabled';
        }
      }
      document.querySelector(`#${functionsForButtonMenu[objectButton][3]}`).className = 'second-button';
      document.querySelector(`#${functionsForButtonMenu[objectButton][4]}`).className = 'second-button-selected';
    }
  }

  // якщо вибрали один з товарів - відключаємо всі пункти меню
  if (buttonSubMenu[objectButton]["status_select_pruduct"]) {
    for (const indexSubMenu in buttonSubMenu[objectButton]) {
      const currentElement = buttonSubMenu[objectButton][indexSubMenu];
      if (currentElement.selector === 'button') {
        // знімаємо фокус з елемента бо йде баг при зміні класів в дереві DOM
        document.querySelector(`#${indexSubMenu}`).blur();
        document.querySelector(`#${indexSubMenu}`).className = 'second-button-desabled';
      }
    }
  }

  // якщо меню інформаційне - забезпечуємо підсвічування відповідних кнопок
  if (buttonSubMenu[objectButton]["status_submenu"] === "information") {
    for (const indexSubMenu in buttonSubMenu[objectButton]) {
      const currentElement = buttonSubMenu[objectButton][indexSubMenu];
      if (currentElement.selector === 'button') {
        // знімаємо фокус з елемента бо йде баг при зміні класів в дереві DOM
        document.querySelector(`#${indexSubMenu}`).blur();
        if (currentElement.status) { document.querySelector(`#${indexSubMenu}`).className = 'second-button-selected'; }
        else { document.querySelector(`#${indexSubMenu}`).className = 'second-button'; }
      };

      //! ВРЕМЕННО  
      if (currentElement.selector === 'alphabet') {        
        document.querySelector(`#${indexSubMenu}`).blur();
        if (currentElement.status) { document.querySelector(`#${indexSubMenu}`).className = 'alphabet-selected'; }
        else { document.querySelector(`#${indexSubMenu}`).className = 'alphabet'; }
      }



      // if (currentElement.selector === 'alphabet') {
      //   if (currentElement.status) {
      //     nodeTextHTML.push(`<button class='alphabet-selected' id=${indexSubMenu}><p class='alphabet-header-selected'>${currentElement.header}</p></button>`);
      //   } else {
      //     nodeTextHTML.push(`<button class='alphabet' id=${indexSubMenu}><p class='alphabet-header'>${currentElement.header}</p></button>`);
      //   }
      // }



    }
  }
}
