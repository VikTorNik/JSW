document.addEventListener("DOMContentLoaded", () => {
  const ROOT = document.documentElement;
  const widthWindowApplication = 1440;
  const heightWindowApplication = 800;
  const normalRatio = 1;
  const introText = [
    "Професійні пускові дроти<br>українського виробництва.",
    "М'який кабель марки КГ, залишається гнучким при сильному морозі. Мідна лужена плетінка з'єднує дві половини «крокодилів», забезпечуючи рівномірне розподілення струму та велику площу контакту.",
    "Дозвольте собі придбати якісні дроти, які будуть служити роками чи будуть чудовим подарунком.",
    "Виготовляємо також дроти для зварювальних апаратів, перемички гнучкі та перемички з шини.",
  ];
  const bigmenuText = [
    ["Пускові дроти", "Пускові (стартові) дроти для «прикурювання»"],
    ["Дроти для ПЗП", "Дроти для пуско-зарядних пристроїв"],
    ["Дроти для зварювання", "Дроти з мідного кабеля для зварювальних апаратів (інверторів)"],
    ["Перемички гнучкі", "Перемички на базі кабеля КГ з гумовою ізоляцією для з’єднання інверторів та акумуляторів"],
    ["Дроти для мережі 220В", "Дроти для підключення інверторів до мережі змінного струму 220В"],
    ["Шина мідна плетена", "Гнучкі перемички (шини) на базі мідної плетінки "],
    ["Гнучка шина", "Набірні шини з ізоляцією виготовлені з тонких мідних полос"],
    ["Тверда шина", "Тверді перемички (шини) на базі мідної полоси"],
    ["«Крокодили»", "Зажими типу «Крокодил» для пускових та зварювальних дротів"],
    ["Силові запобіжники", "Силові запобіжники ANL для постійного струму"],
    ["Як купити?", "інформація щодо оформлення замовлення"],
    ["Контакти", "контактна інформація виробника"],
  ];

  let currentScreen = 1;
  let orientationLandscape;
  let historyJSW = [];

  const showIntroScreenLandscape = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-intro-landscape";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='intro-left-landscape'><div class='intro-text-landscape'>"];
    introText.forEach((paragraphIntro) => introTextHTML.push(`<p>${paragraphIntro}</p>`));
    introTextHTML.push("</div></div><div class='intro-right-landscape'></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Вступительной странице - альбом");
    document.querySelector('.main-intro-landscape').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / Перешли во Второе меню - альбом");
      selectedItemMenu(2);
    }, { once: 1 });
  };

  const showIntroScreenPortrait = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-intro-portrait";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='intro-portrait'><div class='intro-text-portrait'>"];
    introText.forEach((paragraphIntro) => introTextHTML.push(`<p>${paragraphIntro}</p>`));
    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Вступительной странице - портрет");
    document.querySelector('.main-intro-portrait').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / Перешли во Второе меню - портрет");
      selectedItemMenu(2);
    }, { once: 1 });
  };

  const showBigmenuScreenLandscape = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-bigmenu-landscape";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='bigmenu-land-bg'><div class='bigmenu-land-div'>"];
    bigmenuText.forEach((buttonMenu) => { introTextHTML.push(`<button class='bigmenu-button'><p class='bigmenu-header'>${buttonMenu[0]}</p><p class='bigmenu-description'>${buttonMenu[1]}</p></button>`); });
    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Большом меню - альбом");
    document.querySelector('.main-bigmenu-landscape').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / Перешли в Третье меню - альбом");
      selectedItemMenu(3);
    }, { once: 1 });
  };

  const showBigmenuScreenPortrait = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-bigmenu-portrait";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='bigmenu-port-bg'><div class='bigmenu-port-div'>"];
    bigmenuText.forEach((buttonMenu) => { introTextHTML.push(`<button class='bigmenu-button'><p class='bigmenu-header'>${buttonMenu[0]}</p><p class='bigmenu-description'>${buttonMenu[1]}</p></button>`); });
    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Большом меню - портрет");
    document.querySelector('.main-bigmenu-portrait').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / Перешли в Третье меню - портрет");
      selectedItemMenu(3);
    }, { once: 1 });
  };

  const showSmallmenuScreenLandscape = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-small-landscape";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='smallmenu-landscape-div'></div>"];
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    document.querySelector('.main-small-landscape').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / ВЫБОР ЧЕГО-ТО В МАЛОМ МЕНЮ- альбом");
      console.log("Временно - вернулись во второе меню - альбом");
      selectedItemMenu(2);
    }, { once: 1 });
  };

  const showSmallmenuScreenPortrait = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-small-portrait";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='smallmenu-portrait-div'></div>"];
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    document.querySelector('.main-small-portrait').addEventListener('click', () => {
      console.log("Щелкнули / Присвоили значение / ВЫБОР ЧЕГО-ТО В МАЛОМ МЕНЮ- портрет");
      console.log("Временно - вернулись во второе меню - портрет");
      selectedItemMenu(2);
    }, { once: 1 });
  };

  const selectedItemMenu = (selectItem) => {
    currentScreen = (selectItem < 1) ? 1 : selectItem;
    window.history.pushState(currentScreen, "", '');
    historyJSW.push(history.state);
    if (orientationLandscape) {
      switch (currentScreen) {
        case 1:          
          showIntroScreenLandscape();
          break;
        case 2:          
          showBigmenuScreenLandscape();
          break;
        case 3:          
          showSmallmenuScreenLandscape();
          break;
      }
    } else {
      switch (currentScreen) {
        case 1:
          showIntroScreenPortrait();
          break;
        case 2:
          showBigmenuScreenPortrait();
          break;
        case 3:
          showSmallmenuScreenPortrait();
          break;
      }
    }    
  }

  const resizeWindowApplication = () => {
    let ratioWidth;
    let ratioHeight;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    orientationLandscape = (clientWidth > clientHeight);
    if (orientationLandscape) {
      ratioWidth = clientWidth / widthWindowApplication;
      ratioHeight = clientHeight / heightWindowApplication;
    } else {
      ratioWidth = clientWidth / heightWindowApplication;
      ratioHeight = clientHeight / widthWindowApplication;
    }
    if ((ratioWidth < 1) || (ratioHeight < 1)) {
      ROOT.style.setProperty("--ratioSizeWin", Math.min(ratioWidth, ratioHeight));
    } else {
      ROOT.style.setProperty("--ratioSizeWin", normalRatio);
    }
  };

  resizeWindowApplication();
  selectedItemMenu(1);

  window.addEventListener('resize', () => {
    resizeWindowApplication();
    selectedItemMenu(currentScreen);
  });

  document.querySelector('body').addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      console.log("Нажали Escape - currentScreen - ", currentScreen);
      selectedItemMenu(currentScreen - 1);
    }
  });

  window.addEventListener('popstate', e => {    
    // console.log("historyJSW - до перехода ", historyJSW);
    // historyJSW.pop();
    // selectedItemMenu(historyJSW[historyJSW.length-1]);
    // historyJSW.pop();    
    selectedItemMenu(historyJSW[historyJSW.length - 2]);
    historyJSW.splice(historyJSW.length-2, 2);
    // console.log("historyJSW - после перехода ", historyJSW);
  });

});

