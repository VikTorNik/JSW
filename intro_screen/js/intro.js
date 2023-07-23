import { ROOT, screenDispatcher, INTRO_SCREEN, BIGMENU_SCREEN } from "../../index.js";

const introText = [
  "Професійні пускові дроти<br>українського виробництва.",
  "М'який кабель марки КГ, залишається гнучким при сильному морозі. Мідна лужена плетінка з'єднує дві половини «крокодилів», забезпечуючи рівномірне розподілення струму та велику площу контакту.",
  "Дозвольте собі придбати якісні дроти, які будуть служити роками чи будуть чудовим подарунком.",
  "Виготовляємо також дроти для зварювальних апаратів, перемички гнучкі та перемички з шини.",
];

export const showIntroScreen = (orientationScreenLandscape) => {
  ROOT.style.setProperty("--currentScreen", INTRO_SCREEN); // поточний екран
  if (orientationScreenLandscape) { createDOMIntro('main-intro-landscape', '<div class="intro-left-landscape"><div class="intro-text-landscape">', '</div></div><div class="intro-right-landscape"></div>'); }
  else { createDOMIntro('main-intro-portrait', '<div class="intro-portrait"><div class="intro-text-portrait">', '</div></div>'); }
}

const createDOMIntro = (mainOrientation, openDiv, closeDiv) => {
  const parentDiv = document.createElement('main');
  parentDiv.className = mainOrientation;
  document.querySelector('main').replaceWith(parentDiv);
  const introTextHTML = [openDiv];
  introText.forEach((paragraphIntro) => introTextHTML.push(`<p>${paragraphIntro}</p>`));
  introTextHTML.push(closeDiv);
  parentDiv.innerHTML = introTextHTML.join('');
  document.body.appendChild(parentDiv);

  document.querySelector(`.${mainOrientation}`).addEventListener('click', () => {
    screenDispatcher(BIGMENU_SCREEN, false);
  }, { once: 1 });
};
