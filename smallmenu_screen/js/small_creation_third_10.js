const textReferenceInformation = {
  "Телефон": ["Перший роділ - 10 субменю"],
  "Вайбер": ["Другий роділ - 10 субменю"],
  "Телеграм": ["Третій роділ - 10 субменю"],
  "Сайт": ["Четвертий роділ - 10 субменю"]
};

export const getReferenceInformationProduct_10 = (headerSubMenu) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation[headerSubMenu].forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}
