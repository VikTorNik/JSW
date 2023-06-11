// формуємо нижній рядок з відображенням товару
export const creationBottomRow = () => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = "smallmenu-bottom-bg";

  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='smallmenu-bottom-div'>");
  nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  nodeTextHTML.push("</div>");

  fragmentDiv.innerHTML = nodeTextHTML.join("");

  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}
