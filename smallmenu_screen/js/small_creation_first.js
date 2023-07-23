import { bigMenuText } from "../../bigmenu_screen/js/bigmenu.js";

// формуємо пункти головного меню
export const creationMainMenu = (classNameBG, classNameDiv) => {
  const fragmentDiv = document.createElement('div');
  fragmentDiv.className = classNameBG;
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class=${classNameDiv}>`);
  bigMenuText.forEach((buttonMenu, numberButton) => {
    nodeTextHTML.push(`<button class="smallmenu-button" id=button_big_${numberButton}><p class="smallmenu-header">${buttonMenu[0]}</p></button>`);
  });
  nodeTextHTML.push('</div>');
  fragmentDiv.innerHTML = nodeTextHTML.join('');
  return fragmentDiv;
}
