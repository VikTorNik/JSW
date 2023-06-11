import { bigMenuText } from "/bigmenu_screen/js/bigmenu.js";

// формуємо верхній рядок з пунктами меню
export const creationTopRow = () => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-top-bg";

  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-top-div'>");
  bigMenuText.forEach((buttonMenu, numberButton) => { nodeTextHTML.push(`<button class='smallmenu-button' id=button_big_${numberButton}><p class='smallmenu-header'>${buttonMenu[0]}</p></button>`); });
  nodeTextHTML.push("</div>");

  fragmentDiv.innerHTML = nodeTextHTML.join("");

  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}
