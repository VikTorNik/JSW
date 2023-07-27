import { ROOT, SMALLMENU_SCREEN } from "../../index.js";
import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { currentRequiredOrdering } from "../../smallmenu_screen/js/object_current_price.js";
import { creationMainMenu } from "../../smallmenu_screen/js/small_creation_first.js";
import { creationSubMenu, clickButtonSubMenu, correctionCSSButtonSubMenu }
  from "../../smallmenu_screen/js/small_creation_second.js";
import { cartChoice, setСartChoice } from "../../cart/js/cart_choice.js";
import { cartWait, setСartWait } from "../../cart/js/cart_wait.js";


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
import { getReferenceInformationProduct_09 }
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
    showSubMenu("main-small-landscape", 'smallmenu-landscape-bg', 'smallmenu-land-div', BIG_MENU, SUB_MENU, PRODUCT_LIST, "smallmenu-first-land-bg", "smallmenu-first-land-div", "smallmenu-third-land-bg", "smallmenu-third-land-div");
  }
  else {
    showSubMenu("main-small-portrait", 'smallmenu-portrait-bg', 'smallmenu-port-div', PRODUCT_LIST, BIG_MENU, SUB_MENU, "smallmenu-top-bg", "smallmenu-top-div", "smallmenu-bottom-bg", "smallmenu-bottom-div");
  }
}

const showSubMenu = (mainSmall, menuBG, menuDiv, subScreen1, subScreen2, subScreen3, firstBG, firstDiv, thirdBG, thirdDiv) => {
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
  const smallmenuDiv = document.querySelector(`.${menuDiv}`);
  let bigMenuDiv, subMenuDiv, productMenuDiv;
  if (subScreen1 === BIG_MENU) { bigMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen1 === PRODUCT_LIST) { productMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }

  if (subScreen2 === SUB_MENU) { subMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen2 === BIG_MENU) { bigMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }

  if (subScreen3 === PRODUCT_LIST) { productMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }
  if (subScreen3 === SUB_MENU) { subMenuDiv = smallmenuDiv.appendChild(document.createElement("div")); }

  // формуємо колонку з пунктами меню  
  const fragmentLeft = creationMainMenu(firstBG, firstDiv);
  bigMenuDiv.replaceWith(fragmentLeft);

  // тимчасовий div для сумісності при настуній заміні
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-second-bg";
  subMenuDiv.replaceWith(fragmentDiv);
  // document.querySelector(`.${menuDiv}`).appendChild(fragmentDiv);

  // тимчасовий div для сумісності при настуній заміні
  const fragmentThir = document.createElement("div");
  fragmentThir.className = thirdBG;
  productMenuDiv.replaceWith(fragmentThir);

  // обробка меню кошика
  const fixedClickButtonCart = () => {

    // фіксуємо натискання на продукт
    [...document.querySelectorAll('.button-ordering')].forEach(indexButtonClick => {
      indexButtonClick.addEventListener('click', () => {
        switch (indexButtonClick.id) {
          case 'button-goto-ordering': // Оформлення замовлення
            document.querySelector("#middle_button_1102").click();
            break;
          case 'button-wait-moving': // Перенести все у список вподобань
            setСartWait(cartWait.concat(cartChoice));
            cartChoice.length = 0;
            document.querySelector("#middle_button_1100").click();
            document.querySelector("#middle_button_1100").click();
            break;
          case 'button-cart-deliting': // Видалити товари з кошика
            cartChoice.length = 0;
            document.querySelector("#middle_button_1100").click();
            document.querySelector("#middle_button_1100").click();
            break;
          case 'button-cart-moving': // Перенести товари у кошик            
            setСartChoice(cartChoice.concat(cartWait));
            cartWait.length = 0;
            document.querySelector("#middle_button_1101").click();
            document.querySelector("#middle_button_1101").click();
            break;
          case 'button-wait-deliting': // Видалити товари зі списку вподобань
            cartWait.length = 0;
            document.querySelector("#middle_button_1101").click();
            document.querySelector("#middle_button_1101").click();
            break;
          case 'button-goto-cart': // Перейти у кошик
            document.querySelector("#middle_button_1100").click();
            break;
        };
      })
    });

    // реакція на кнопки під товаром Кошика - видалити і перенести у Вподобання
    [...document.querySelectorAll('.button-cart-delete'), ...document.querySelectorAll('.button-cart-move')].forEach(indexButtonClick => {
      indexButtonClick.addEventListener('click', (buttonOrdering) => {
        if (indexButtonClick.className === "button-cart-delete") {
          cartChoice.splice(Number(indexButtonClick.id), 1);
          document.querySelector("#middle_button_1100").click();
          document.querySelector("#middle_button_1100").click();
        };
        if (indexButtonClick.className === "button-cart-move") {
          cartWait.push(cartChoice[Number(indexButtonClick.id)]);
          cartChoice.splice(Number(indexButtonClick.id), 1);
          document.querySelector("#middle_button_1100").click();
          document.querySelector("#middle_button_1100").click();
        };
      })
    });

    // реакція на кнопки під товаром Вподобання - видалити і перенести у Кошик
    [...document.querySelectorAll('.button-wait-delete'), ...document.querySelectorAll('.button-wait-move')].forEach(indexButtonClick => {
      indexButtonClick.addEventListener('click', (buttonOrdering) => {
        if (indexButtonClick.className === "button-wait-delete") {
          cartWait.splice(Number(indexButtonClick.id), 1);
          document.querySelector("#middle_button_1101").click();
          document.querySelector("#middle_button_1101").click();
        };
        if (indexButtonClick.className === "button-wait-move") {
          cartChoice.push(cartWait[Number(indexButtonClick.id)]);
          cartWait.splice(Number(indexButtonClick.id), 1);
          document.querySelector("#middle_button_1101").click();
          document.querySelector("#middle_button_1101").click();
        };
      })
    });

    // реакція на кнопку Оформлення
    const deliveryOrder = document.getElementsByName("delivery");
    if (deliveryOrder.length > 0) {

      // забезпечення вводу символів за допомогою користувацької клавіатури
      let currentEventInput;
      // фокус на одму з елементів вводу
      [document.getElementById("email"), document.getElementById("viber"), document.getElementById("addinginfo"), document.getElementById("name_client"), document.getElementById("surname_client"), document.getElementById("city"), document.getElementById("numberdepartment"), document.getElementById("index")].forEach(inputElement => {
        inputElement.addEventListener('focus', (event) => {
          currentEventInput = event;
          // console.log("--- event--- 1 - ", currentEventInput.target);
          // console.log("--- value--- - ", currentEventInput.target.value);
        });
      });
      // console.log("--- currentEventInput--- - ", currentEventInput);

      // якщо ніякий input не вибраний, то примусово даємо фокус на email
      if (currentEventInput === undefined) { document.getElementById("email").focus(); }

      //! робочий варіант вводу текста в рядок
      [...document.querySelectorAll('.alphabet')].forEach(codeAlphabet => {
        codeAlphabet.addEventListener('click', () => {
          // поточне значення кнопки клавіатури
          const currentCodeAlphabet = buttonSubMenu[currentMenu][codeAlphabet.id].header;
          switch (currentCodeAlphabet) {
            case 'Ukrainian':

              break;
            case 'English':

              break;
            case 'Shift':
              // currentMenu = "button_big_12";
              // createSubMenu();
              break;
            case 'BackSpace':
              if (currentEventInput.target.value.length > 0) {
                currentEventInput.target.value = currentEventInput.target.value.substring(0, currentEventInput.target.value.length - 1);
              }
              break;
            case 'Space':
              currentEventInput.target.value += " ";
              break;
            default:
              currentEventInput.target.value = currentEventInput.target.value + buttonSubMenu[currentMenu][codeAlphabet.id].header;
          }

          // currentEventInput.focus();
          // document.activeElement.value += buttonSubMenu[currentMenu][codeAlphabet.id].header;
          // currentEventInput.target.value += buttonSubMenu[currentMenu][codeAlphabet.id].header;
          form_delivery.dispatchEvent(new Event('change', { bubbles: true }))
        });
      });


      // document.getElementById("email").addEventListener('blur', (event) => {
      //   console.log("--- втратили 'focus' --- в email");
      // });



      form_delivery.addEventListener('change', (event) => {
        // console.log("form_delivery -  'change'");
        // console.log("document.activeElement - ", document.activeElement);
        switch (event.target.id) {
          case 'olx':
            fieldset_after_payment.style.display = "none";
            document.getElementById("name_client").required = false;
            document.getElementById("surname_client").required = false;
            document.getElementById("city").required = false;
            document.getElementById("numberdepartment").required = false;
            document.getElementById("index").required = false;
            currentRequiredOrdering.olx_radio = true;
            currentRequiredOrdering.after_payment_radio = false;
            break;
          case 'after_payment':
            fieldset_after_payment.style.display = "block";
            document.getElementById("name_client").required = true;
            document.getElementById("surname_client").required = true;
            document.getElementById("city").required = true;
            document.getElementById("numberdepartment").required = true;
            document.getElementById("index").required = true;
            currentRequiredOrdering.olx_radio = false;
            currentRequiredOrdering.after_payment_radio = true;
            // ініціалізація первинного натискання
            if (currentRequiredOrdering.novapost_radio) { novapost.dispatchEvent(new Event('change', { bubbles: true })) };
            if (currentRequiredOrdering.ukrpost_radio) { ukrpost.dispatchEvent(new Event('change', { bubbles: true })) };
            break;
          case 'novapost':
            numberdepartment.style.opacity = 1;
            index.style.opacity = 0;
            document.getElementById("index").required = false;
            document.getElementById("numberdepartment").required = true;
            currentRequiredOrdering.novapost_radio = true;
            currentRequiredOrdering.ukrpost_radio = false;
            break;
          case 'ukrpost':
            numberdepartment.style.opacity = 0;
            index.style.opacity = 1;
            document.getElementById("index").required = true;
            document.getElementById("numberdepartment").required = false;
            currentRequiredOrdering.novapost_radio = false;
            currentRequiredOrdering.ukrpost_radio = true;
            break;
        };
        // записуємо всі дані, які буле введені клієнтом - в об'єкт
        currentRequiredOrdering.email_value = document.getElementById("email").value;
        currentRequiredOrdering.viber_value = document.getElementById("viber").value;
        currentRequiredOrdering.addinginfo_value = document.getElementById("addinginfo").value;
        currentRequiredOrdering.name_client_value = document.getElementById("name_client").value;
        currentRequiredOrdering.surname_client_value = document.getElementById("surname_client").value;
        currentRequiredOrdering.city_value = document.getElementById("city").value;
        currentRequiredOrdering.numberdepartment_value = document.getElementById("numberdepartment").value;
        currentRequiredOrdering.index_value = document.getElementById("index").value;
      });

      // ініціалізація даних, які були введені
      document.getElementById("email").value = currentRequiredOrdering.email_value;
      document.getElementById("viber").value = currentRequiredOrdering.viber_value;
      document.getElementById("addinginfo").value = currentRequiredOrdering.addinginfo_value;
      document.getElementById("name_client").value = currentRequiredOrdering.name_client_value;
      document.getElementById("surname_client").value = currentRequiredOrdering.surname_client_value;
      document.getElementById("city").value = currentRequiredOrdering.city_value;
      document.getElementById("numberdepartment").value = currentRequiredOrdering.numberdepartment_value;
      document.getElementById("index").value = currentRequiredOrdering.index_value;
      // ініціалізація первинного натискання      
      if (currentRequiredOrdering.olx_radio) { olx.dispatchEvent(new Event('change', { bubbles: true })) };
      if (currentRequiredOrdering.after_payment_radio) { after_payment.dispatchEvent(new Event('change', { bubbles: true })) };

      // кнопки для Згоди з обробкою персональних даних та Умовами використання сайту
      document.getElementById("buttonAgreement").addEventListener('click', () => {
        document.getElementById("button_big_10").click();
        document.getElementById("middle_button_1005").click();
      });
      document.getElementById("buttonConditions").addEventListener('click', () => {
        document.getElementById("button_big_10").click();
        document.getElementById("middle_button_1006").click();
      });
    };


  };

  // обробка вибору товара для додавання у кошик
  const fixedClickButtonProduct = () => {
    // фіксуємо натискання на продукт
    [...document.querySelectorAll('.div-button-product')].forEach(indexButtonClick => {
      indexButtonClick.addEventListener('click', (choiceCurrentProduct) => {
        // якщо натиснути на будь-який товар у правому вікні - "гасимо" всі кнопки у підменю
        buttonSubMenu[currentMenu]["status_select_pruduct"] = true;
        correctionCSSButtonSubMenu(currentMenu);
        // створюємо новий "div" для відображення продукта і заміняємо старий
        const divSelectProduct = document.createElement("div");
        divSelectProduct.className = "div-select-product";
        // зберігаємо DOM-дерево правого вікна
        const divWindowProduct = document.querySelector(`.${thirdBG}`).replaceChild(divSelectProduct, document.querySelector(`.${thirdDiv}`));
        // відображаємо три кнопки і вікно з товаром
        const nodePruductHTML = [];
        nodePruductHTML.push(`<div class=div-button-to-cart>`);
        nodePruductHTML.push(`<button class='button-add-cart' id='button-cart-choices'><p class='header-button-add-cart'>Додати у кошик</p></button>`);
        nodePruductHTML.push(`<button class='button-add-cart' id='button-cart-wait'><p class='header-button-add-cart'>Додати до вподобань</p></button>`);
        nodePruductHTML.push(`<button class='button-add-cart' id='button-cart-cancel'><p class='header-button-add-cart'>Повернутись до каталогу</p></button>`);
        nodePruductHTML.push(`</div>`);

        nodePruductHTML.push(`<div class=div-description-to-cart>`);
        nodePruductHTML.push(`</div>`);

        divSelectProduct.innerHTML = nodePruductHTML.join("");

        // клонуємо вибраний продукт для відображення ПЕРЕД переміщенням у кошик
        const cloneCartProductForSelect = choiceCurrentProduct.target.closest('.div-button-product').cloneNode(true);
        document.querySelector(".div-description-to-cart").appendChild(cloneCartProductForSelect);
        // заміна класу вибраного товару - щоб змініти форму курсора та margin від тексту
        document.querySelector(".div-button-product").className = "div-button-product-before-cart";

        // клонуємо вибраний продукт для ПЕРЕМІЩЕННЯ у кошик
        const cloneCartProductForCart = choiceCurrentProduct.target.closest('.div-button-product').cloneNode(true);
        // заміна класу вибраного товару - щоб змініти форму курсора
        cloneCartProductForCart.className = "div-button-product-cart";

        // створюємо новий "div" для відображення інформації по продукту
        const divAdditionalInformationProduct = document.createElement("div");
        divAdditionalInformationProduct.className = "div-additional-information-product";
        const nodeAddInformHTML = [];
        nodeAddInformHTML.push(...functionsForButtonMenu[currentMenu][2]());
        nodeAddInformHTML.push(`</div>`);
        divAdditionalInformationProduct.innerHTML = nodeAddInformHTML.join("");
        document.querySelector(".div-description-to-cart").appendChild(divAdditionalInformationProduct);

        // зберігаємо id товара на випадок форс-мажора (зміна орієнтації екрана)
        buttonSubMenu[currentMenu]["ID_select_product"] = indexButtonClick.id;
        // безпосереднє додавання товару у кошик
        [...document.querySelectorAll('.button-add-cart')].forEach(buttonClick => {
          buttonClick.addEventListener('click', (buttonSelectedCart) => {
            switch (buttonSelectedCart.currentTarget.id) {
              case 'button-cart-choices':
                cartChoice.push(cloneCartProductForCart);
                break;
              case 'button-cart-wait':
                cartWait.push(cloneCartProductForCart);
                break;
            };
            // ----> Відновлюємо всі товари у правому вікні
            document.querySelector(`.${thirdBG}`).replaceChild(divWindowProduct, divSelectProduct);
            // ----> Відновлюємо всі кнопки у підменю
            buttonSubMenu[currentMenu]["status_select_pruduct"] = false;
            correctionCSSButtonSubMenu(currentMenu);
          })
        });
      });
    });

    // якщо вийшла зміна орієнтації екрану в момент додавання товара у кошик
    if (buttonSubMenu[currentMenu]["status_select_pruduct"]) {
      // повертаємо всі кнопки субменю в нормальний стан (корегуємо CSS)
      buttonSubMenu[currentMenu]["status_select_pruduct"] = false;
      correctionCSSButtonSubMenu(currentMenu);
      // імітуємо натискання на вибраний товар по збереженому id
      document.querySelector(`#${buttonSubMenu[currentMenu]["ID_select_product"]}`).click();
    }
  }

  const createSubMenu = () => {
    // підсвічуємо поточний вибраний пункт
    document.querySelector(`#${currentMenu}`).className = 'selected-button';
    // формуємо колонку з субменю   
    const fragmentMiddle = creationSubMenu(buttonSubMenu[currentMenu]);
    console.log("buttonSubMenu[currentMenu] - ", buttonSubMenu[currentMenu]);
    console.log("currentMenu - ", currentMenu);
    document.querySelector(".smallmenu-second-bg").replaceWith(fragmentMiddle);
    // обробка натискання кнопок у субменю та відображення колонки з товаром
    clickButtonSubMenu();
    // забеспечення кольору конопок субменю при зміні орієнтації  
    correctionCSSButtonSubMenu(currentMenu);
    // формуємо колонку з товаром
    const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
      functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
    document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
    // обробка вибору товара для додавання у кошик
    fixedClickButtonProduct();
    // обробка натискань у меню кошик
    fixedClickButtonCart();

    // оновлення колонки з товаром після натискання кнопки субменю - 
    [...document.querySelectorAll('.second-button'), ...document.querySelectorAll('.second-button-selected')].forEach(indexMiddlelMenu => {
      indexMiddlelMenu.addEventListener('click', () => {
        const fragmentRight = creationWindowProduct(thirdBG, thirdDiv, currentMenu,
          functionsForButtonMenu[currentMenu][0], functionsForButtonMenu[currentMenu][1], functionsForButtonMenu[currentMenu][2]);
        document.querySelector(`.${thirdBG}`).replaceWith(fragmentRight);
        // обробка вибору товара для додавання у кошик
        fixedClickButtonProduct();
        // обробка натискань у меню кошик
        fixedClickButtonCart();
      });
    });
  }

  createSubMenu();

  // реалізація вибіру і підсвітки вибраного пункта меню
  [...document.querySelectorAll('.smallmenu-button'), ...document.querySelectorAll('.selected-button')].forEach(indexSmallMenu => {
    indexSmallMenu.addEventListener('click', () => {
      // попередньому пункту повертаємо стандартні кольори
      document.querySelector(`#${currentMenu}`).className = 'smallmenu-button';
      // новий вибраний пункт підсвічуємо 
      currentMenu = indexSmallMenu.id; // вибране меню - локальна змінна
      ROOT.style.setProperty("--currentMenu", indexSmallMenu.id); // вибране меню  - глобальна змінна
      createSubMenu();
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
    // Знаходимо нажату кнопку і отримуємо по ній інформаційну сторінку    
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
  return fragmentDiv;
}
