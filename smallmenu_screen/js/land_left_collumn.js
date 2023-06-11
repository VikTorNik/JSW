import { bigMenuText } from "/bigmenu_screen/js/bigmenu.js";

// формуємо ліву колонку з пунктами меню
export const creationLeftCollumn = () => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-left-bg";

  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-left-div'>");
  bigMenuText.forEach((buttonMenu, numberButton) => { nodeTextHTML.push(`<button class='smallmenu-button' id=button_big_${numberButton}><p class='smallmenu-header'>${buttonMenu[0]}</p></button>`); });
  nodeTextHTML.push("</div>");

  fragmentDiv.innerHTML = nodeTextHTML.join("");

  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}
