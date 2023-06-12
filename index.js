import { showIntroScreen } from "./intro_screen/js/intro.js";
import { showBigmenuScreen } from "./bigmenu_screen/js/bigmenu.js";
import { showSmallmenuScreen } from "./smallmenu_screen/js/smallmenu.js";
export const ROOT = document.documentElement;

const widthWindowApplication = 1440;
const heightWindowApplication = 800;
const normalRatio = 1;

ROOT.style.setProperty("--currentScreen", "1");
ROOT.style.setProperty("--currentMenu", "");
let orientationLandscape;
let historyJSW = [];

export const screenDispatcher = (selectScreen, orientationСhange, numberMenu) => {

  const redrawingScreen = (selectScreen, orientationСhange, numberMenu) => {
    switch (selectScreen) {
      case "1":
        showIntroScreen(orientationСhange);
        break;
      case "2":
        showBigmenuScreen(orientationСhange);
        break;
      case "3":
        showSmallmenuScreen(orientationСhange, numberMenu);
        break;
    }
  }

  if (ROOT.style.getPropertyValue("--currentScreen") !== selectScreen) {
    // записуємо хісторі, щоб повернутися на попередній екран
    window.history.pushState(ROOT.style.getPropertyValue("--currentScreen"), "", '');
    historyJSW.push(history.state);
    // змінюємо поточний екран
    ROOT.style.setProperty("--currentScreen", (selectScreen < 1) ? 1 : selectScreen);
    redrawingScreen(selectScreen, orientationLandscape, numberMenu);
  }

  if (orientationСhange) {
    // запускаємо відповідну функцію - щоб оновити екран
    redrawingScreen(selectScreen, orientationLandscape, numberMenu);
  }
}

const resizeWindowApplication = () => {
  let ratioWidth;
  let ratioHeight;
  let currentOrientationLandscape = orientationLandscape;
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
  return (currentOrientationLandscape !== orientationLandscape);
};

// первинна ініціалізація
resizeWindowApplication();
showIntroScreen(orientationLandscape);

// перемальовуємо екран в залежності від зміни розміру 
window.addEventListener('resize', () =>
  screenDispatcher(ROOT.style.getPropertyValue("--currentScreen"), resizeWindowApplication()));

// реагуємо на ескейп
document.querySelector('body').addEventListener("keyup", (event) => {
  // реагуємо якщо не на першій сторінці і якщо нажата Escape
  if ((event.key === "Escape") && (ROOT.style.getPropertyValue("--currentScreen") !== "1")) {
    screenDispatcher(String(Number(ROOT.style.getPropertyValue("--currentScreen")) - 1), orientationLandscape);
  }
});

// оновлюємо екран за кнопкою хісторі
window.addEventListener('popstate', () => {
  // реагуємо якщо хісторі більше нуля
  if (historyJSW.length > 0) {
    screenDispatcher(historyJSW[historyJSW.length - 1], orientationLandscape);
    historyJSW.splice(historyJSW.length - 2, 2);
  }
});


