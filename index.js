import { showIntroScreen } from "./intro_screen/js/intro.js";
import { showBigmenuScreen } from "./bigmenu_screen/js/bigmenu.js";
import { showSmallmenuScreen } from "./smallmenu_screen/js/smallmenu.js";
export const ROOT = document.documentElement;
export const INTRO_SCREEN = "1";
export const BIGMENU_SCREEN = "2";
export const SMALLMENU_SCREEN = "3";

const WIDTH_WINDOW = 1440;
const HEIGHT_WINDOW = 800;
const NORMAL_RATIO = 1;

ROOT.style.setProperty('--currentScreen', INTRO_SCREEN);
ROOT.style.setProperty('--currentMenu', '');
let historyJSW = [];
export let windowOrientation;

export const screenDispatcher = (selectScreen, orientationСhange, numberMenu) => {

  const redrawingScreen = (selectScreen, orientationСhange, numberMenu) => {
    switch (selectScreen) {
      case INTRO_SCREEN:
        showIntroScreen(orientationСhange);
        break;
      case BIGMENU_SCREEN:
        showBigmenuScreen(orientationСhange);
        break;
      case SMALLMENU_SCREEN:
        showSmallmenuScreen(orientationСhange, numberMenu);
        break;
    }
  }

  if (ROOT.style.getPropertyValue('--currentScreen') !== selectScreen) {
    // записуємо хісторі, щоб повернутися на попередній екран
    window.history.pushState(ROOT.style.getPropertyValue('--currentScreen'), '', '');
    historyJSW.push(history.state);
    // зміна поточного екрану - оновлення
    ROOT.style.setProperty('--currentScreen', (Number(selectScreen) < Number(INTRO_SCREEN)) ? INTRO_SCREEN : selectScreen);
    redrawingScreen(selectScreen, windowOrientation, numberMenu);
  }
  if (orientationСhange) {
    // зміна орієнтації екрана - оновлення
    redrawingScreen(selectScreen, windowOrientation, numberMenu);
  }
}

const setWindowOrientation = () => {
  windowOrientation = (document.documentElement.clientWidth > document.documentElement.clientHeight);
}

const isResizeWindowApplication = () => {
  let oldCurrentOrientation = windowOrientation;
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  let ratioWidth;
  let ratioHeight;
  setWindowOrientation();
  if (windowOrientation) {
    ratioWidth = clientWidth / WIDTH_WINDOW;
    ratioHeight = clientHeight / HEIGHT_WINDOW;
  } else {
    ratioWidth = clientWidth / HEIGHT_WINDOW;
    ratioHeight = clientHeight / WIDTH_WINDOW;
  }
  if ((ratioWidth < 1) || (ratioHeight < 1)) {
    ROOT.style.setProperty('--ratioSizeWin', Math.min(ratioWidth, ratioHeight));
  } else {
    ROOT.style.setProperty('--ratioSizeWin', NORMAL_RATIO);
  }
  return (oldCurrentOrientation !== windowOrientation);
};

// первинна ініціалізація
setWindowOrientation();
isResizeWindowApplication();
showIntroScreen(windowOrientation);

// перемальовуємо екран в залежності від зміни розміру 
window.addEventListener('resize', () => screenDispatcher(ROOT.style.getPropertyValue('--currentScreen'), isResizeWindowApplication()));

// реагуємо на Escape (повернення на попередній екран)
document.querySelector('body').addEventListener('keyup', (event) => {
  // реагуємо якщо не на першій сторінці і якщо нажата Escape
  if ((event.key === 'Escape') && (ROOT.style.getPropertyValue('--currentScreen') !== INTRO_SCREEN)) {
    screenDispatcher(String(Number(ROOT.style.getPropertyValue('--currentScreen')) - 1), windowOrientation);
  }
});

// оновлюємо екран за кнопкою хісторі
window.addEventListener('popstate', () => {
  // реагуємо якщо хісторі більше нуля
  if (historyJSW.length > 0) {
    screenDispatcher(historyJSW[historyJSW.length - 1], windowOrientation);
    historyJSW.splice(historyJSW.length - 2, 2);
  }
});


//! Експеримент по поводу адресной строки
// function hideAddressBar() {
//   if (!window.location.hash) {
//     if (document.height < window.outerHeight) {
//       document.body.style.height = (window.outerHeight + 50) + "px";
//     }

//     setTimeout(function () { window.scrollTo(0, 1); }, 50);
//   }
// }

// window.addEventListener("load", function () { if (!window.pageYOffset) { hideAddressBar(); } });
// window.addEventListener("orientationchange", hideAddressBar);

//! Варіант 2
// function hideAddressBar() {
//   if (document.documentElement.scrollHeight < window.outerHeight / window.devicePixelRatio)
//     document.documentElement.style.height = (window.outerHeight / window.devicePixelRatio) + 'px';
//   setTimeout(window.scrollTo(1, 1), 0);
// }
// window.addEventListener("load", function () { hideAddressBar(); });
// window.addEventListener("orientationchange", function () { hideAddressBar(); });


// (function () {

//   var browser = window,
//     doc = browser.document;

//   // If there's a hash, or addEventListener is undefined, stop here
//   if (!location.hash || !browser.addEventListener) {

//     //set to 1
//     window.scrollTo(0, 1);
//     var scrollTop = 1,

//       //reset to 0 if needed
//       checkWindowBody = setInterval(function () {
//         if (doc.body) {
//           clearInterval(checkWindowBody);
//           scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
//           browser.scrollTo(0, scrollTop === 1 ? 0 : 1);
//         }
//       }, 15);

//     if (browser.addEventListener) {
//       browser.addEventListener("load", function () {
//         setTimeout(function () {
//           //reset to hide address
//           browser.scrollTo(0, scrollTop === 1 ? 0 : 1);
//         }, 0);
//       }, false);
//     }
//   }

// })();
