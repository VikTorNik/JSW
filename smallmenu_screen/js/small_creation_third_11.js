const textReferenceInformation = {
  "Перегляд замовлення": ["Перший роділ - 11 субменю"],
  "Видалення замовлення": ["Другий роділ - 11 субменю"],
  "Оформлення замовлення": ["Третій роділ - 11 субменю"],
};

export const getReferenceInformationProduct_11 = (headerSubMenu) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation[headerSubMenu].forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}
