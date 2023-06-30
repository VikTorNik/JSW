const textReferenceInformation = {
  "Навігація по сайту": ["Перший роділ - 9 субменю"],
  "Оформлення покупки": ["Другий роділ - 9 субменю"],
  "Гарантійні зобов'язання": ["Третій роділ - 9 субменю"],
  "Терміни виготовлення": ["Четвертий роділ - 9 субменю"]
};


export const getReferenceInformationProduct_09 = (headerSubMenu) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation[headerSubMenu].forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}
