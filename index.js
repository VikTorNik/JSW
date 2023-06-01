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

  let currentScreen = 1;
  let orientationLandscape;
  let historyJSW = [];
  let selectedSmallMenu;

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

    bigmenuText.forEach((buttonMenu, numberButton) => { introTextHTML.push(`<button class='bigmenu-button' id=button-${numberButton}><p class='bigmenu-header'>${buttonMenu[0]}</p><p class='bigmenu-description'>${buttonMenu[1]}</p></button>`); });
    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Большом меню - альбом");

    [...document.querySelectorAll('.bigmenu-button')].forEach(indexSmallMenu => {
      indexSmallMenu.addEventListener('click', () => {
        console.log("Щелкнули / Присвоили значение / Перешли в Третье меню - альбом - ", indexSmallMenu.id);
        selectedSmallMenu = indexSmallMenu.id;
        selectedItemMenu(3);
      }), { once: 1 }
    });


  };

  const showBigmenuScreenPortrait = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-bigmenu-portrait";
    document.querySelector("main").replaceWith(parentDiv);
    const introTextHTML = ["<div class='bigmenu-port-bg'><div class='bigmenu-port-div'>"];

    bigmenuText.forEach((buttonMenu, numberButton) => { introTextHTML.push(`<button class='bigmenu-button' id=button-${numberButton}><p class='bigmenu-header'>${buttonMenu[0]}</p><p class='bigmenu-description'>${buttonMenu[1]}</p></button>`); });

    introTextHTML.push("</div></div>");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    console.log("Находимся на Большом меню - портрет");

    [...document.querySelectorAll('.bigmenu-button')].forEach(indexSmallMenu => {
      indexSmallMenu.addEventListener('click', () => {
        console.log("Щелкнули / Присвоили значение / Перешли в Третье меню - портрет - ", indexSmallMenu.id);
        selectedSmallMenu = indexSmallMenu.id;
        selectedItemMenu(3);
      }), { once: 1 }
    });
  };

  const showSmallmenuScreenLandscape = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-small-landscape";
    document.querySelector("main").replaceWith(parentDiv);

    const introTextHTML = ["<div class='smallmenu-landscape-bg'>"];
    introTextHTML.push("<div class='smallmenu-land-div'>");

    introTextHTML.push("<div class='smallmenu-left-bg'>");
    introTextHTML.push("<div class='smallmenu-left-div'>");

    bigmenuText.forEach((buttonMenu, numberButton) => { introTextHTML.push(`<button class='smallmenu-button' id=button-${numberButton}><p class='smallmenu-header'>${buttonMenu[0]}</p></button>`); });

    introTextHTML.push("</div></div>");

    introTextHTML.push("<div class='smallmenu-right-bg'>");
    introTextHTML.push("<div class='smallmenu-right-div'>");
    introTextHTML.push("</div></div>");

    introTextHTML.push("</div></div > ");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    document.querySelector(`#${selectedSmallMenu}`).className = 'selected-button';

    [...document.querySelectorAll('.smallmenu-button')].forEach(indexSmallMenu => {
      indexSmallMenu.addEventListener('click', () => {
        console.log("Щелкнули / Присвоили значение / ВЫБОР ЧЕГО-ТО В МАЛОМ МЕНЮ- альбом - ", indexSmallMenu.id);
        document.querySelector(`#${selectedSmallMenu}`).className = 'smallmenu-button';
        selectedSmallMenu = indexSmallMenu.id;
        document.querySelector(`#${selectedSmallMenu}`).className = 'selected-button';
      })
    });

  };

  const showSmallmenuScreenPortrait = () => {
    const parentDiv = document.createElement("main");
    parentDiv.className = "main-small-portrait";
    document.querySelector("main").replaceWith(parentDiv);

    const introTextHTML = ["<div class='smallmenu-portrait-bg'>"];
    introTextHTML.push("<div class='smallmenu-port-div'>");

    introTextHTML.push("<div class='smallmenu-top-bg'>");
    introTextHTML.push("<div class='smallmenu-top-div'>");

    bigmenuText.forEach((buttonMenu, numberButton) => { introTextHTML.push(`<button class='smallmenu-button' id=button-${numberButton}><p class='smallmenu-header'>${buttonMenu[0]}</p></button>`); });

    introTextHTML.push("</div></div>");

    introTextHTML.push("<div class='smallmenu-bottom-bg'>");
    introTextHTML.push("<div class='smallmenu-bottom-div'>");
    introTextHTML.push("</div></div>");

    introTextHTML.push("</div></div > ");
    parentDiv.innerHTML = introTextHTML.join("");
    document.body.appendChild(parentDiv);

    document.querySelector(`#${selectedSmallMenu}`).className = 'selected-button';

    [...document.querySelectorAll('.smallmenu-button')].forEach(indexSmallMenu => {
      indexSmallMenu.addEventListener('click', () => {
        console.log("Щелкнули / Присвоили значение / ВЫБОР ЧЕГО-ТО В МАЛОМ МЕНЮ- портрет- ", indexSmallMenu.id);
        document.querySelector(`#${selectedSmallMenu}`).className = 'smallmenu-button';
        selectedSmallMenu = indexSmallMenu.id;
        document.querySelector(`#${selectedSmallMenu}`).className = 'selected-button';
      })
    });
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
    selectedItemMenu(historyJSW[historyJSW.length - 2]);
    historyJSW.splice(historyJSW.length - 2, 2);
  });

});

