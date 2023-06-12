import { ROOT } from "../../index.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";

// формуємо середню колонку з фільтрами і сортуванням
export const creationMiddleCollumn = (objectButtonMiddleMenu) => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-middle-bg";
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-middle-div'>");
  // перебираємо весь об'єкт і формуємо html-код
  for (const elementSubMenu in objectButtonMiddleMenu) {
    const currentElement = objectButtonMiddleMenu[elementSubMenu];
    if (currentElement.selector === 'button') {
      if (currentElement.status) {
        nodeTextHTML.push(`<${currentElement.selector} class='middle-button-selected' id=${elementSubMenu}><p class='middle-button-header-selected'>${currentElement.header}</p></${currentElement.selector}>`);
      } else {
        nodeTextHTML.push(`<${currentElement.selector} class='middle-button' id=${elementSubMenu}><p class='middle-button-header'>${currentElement.header}</p></${currentElement.selector}>`);
      }
    }
    if (currentElement.selector === 'p') {
      nodeTextHTML.push(`<${currentElement.selector} class='middle-header' id=${elementSubMenu}>${currentElement.header}</${currentElement.selector}>`);
    }
  }
  nodeTextHTML.push("</div>");
  fragmentDiv.innerHTML = nodeTextHTML.join("");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}

// фіксація і відтискання кнопки
export const clickButtonMiddleCollumn = () => {
  [...document.querySelectorAll('.middle-button'), ...document.querySelectorAll('.middle-button-selected')].forEach(indexMiddlelMenu => {
    indexMiddlelMenu.addEventListener('click', () => {
      // формування ліквідного вибору після натискання
      correctionButtonMiddleCollumn(ROOT.style.getPropertyValue("--currentMenu"), indexMiddlelMenu.id);
      // корегування (оновлення) CSS згідно з вибором
      correctionCSSButtonMiddleCollumn(ROOT.style.getPropertyValue("--currentMenu"));
    })
  });
};

// формування ліквідного вибору після натискання
const correctionButtonMiddleCollumn = (objectButton /* "button_big_0" */, pressButton /* "middle-button-1" */) => {

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

        // Якщо серед простих кнопок всі 1, то всі кнопки робимо 0 і робимо 1 для "включено все"
        let sum = true;
        for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
          sum = sum && currentArrayStatusButton[numberString][i];
        }
        if (sum) {
          for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
            currentArrayStatusButton[numberString][i] = false;
          }
          currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
        }

        // Якщо серед простих кнопок всі 0, то робимо 1 - для "включено все"
        sum = true;
        for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
          sum = sum && !currentArrayStatusButton[numberString][i];
        }
        if (sum) {
          currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
        } else // Якщо є різні включені/виключені, то робимо 0 - для "включено все"       
        {
          currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = false;
        }

        // Натискання на сумарну кнопку
        if (stringStructure[2] === pressButton) {
          if (currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1]) {
            // 	Якщо включена - 1 , то виключаємо її - 0 і включаємо першу звичайну кнопку у цій групі - 1
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = false;
            currentArrayStatusButton[numberString][1] = true;
          } else {// 	Якщо виключена - 0 , то включаємо її - 1 і відключаємо всі прості кнопки - 0
            currentArrayStatusButton[numberString][currentArrayStatusButton[numberString].length - 1] = true;
            for (let i = 1; i <= currentArrayStatusButton[numberString].length - 2; i++) {
              currentArrayStatusButton[numberString][i] = false;
            }
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
const correctionCSSButtonMiddleCollumn = (objectButton /* "button_big_0" */) => {
  for (const elementSubMenu in buttonSubMenu[objectButton]) {
    const currentElement = buttonSubMenu[objectButton][elementSubMenu];
    if (currentElement.selector === 'button') {
      if (currentElement.status) { document.querySelector(`#${elementSubMenu}`).className = 'middle-button-selected'; }
      else { document.querySelector(`#${elementSubMenu}`).className = 'middle-button'; }
    }
  }
}
