const textReferenceInformation = {
  "Пускові дроти": ["Розділ «Онлайн розрахунки пускових дротів» зараз на етапі доопрацювання і найближчим часом буде доступний."],
  "Зварювальні дроти": ["Розділ «Онлайн розрахунки зварювальних дротів» зараз на етапі доопрацювання і найближчим часом буде доступний."],
  "Перемички АКБ": ["Розділ «Онлайн розрахунки перемичок акумуляторих батарей» зараз на етапі доопрацювання і найближчим часом буде доступний."],
  "Тверда шина": ["Розділ «Онлайн розрахунки твердих шин» зараз на етапі доопрацювання і найближчим часом буде доступний."],
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
