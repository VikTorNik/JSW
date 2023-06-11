// формуємо праву колонку з відображенням товару
export const creationRightCollumn = () => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-right-bg";

  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-right-div'>");
  nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  nodeTextHTML.push("</div>");

  fragmentDiv.innerHTML = nodeTextHTML.join("");

  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}
