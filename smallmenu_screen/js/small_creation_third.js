const objectProductItem = {
  product_001: {
    ID: "product_001",
    lengthCable: "3 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "метал",
    productionTime: "готове",
    priceProduct: "1250 грн.",
  },
  product_002: {
    ID: "product_002",
    lengthCable: "2.8 м",
    squareCable: "10 кв.мм.",
    typeAlligator: "метал",
    productionTime: "готове",
    priceProduct: "900 грн.",
  },
  product_003: {
    ID: "product_003",
    lengthCable: "3 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "готове",
    priceProduct: "1450 грн.",
  },
  product_004: {
    ID: "product_004",
    lengthCable: "4 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "метал",
    productionTime: "1 день",
    priceProduct: "1500 грн.",
  },
  product_005: {
    ID: "product_005",
    lengthCable: "5 м",
    squareCable: "25 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "2 дні",
    priceProduct: "2200 грн.",
  },
  product_006: {
    ID: "product_006",
    lengthCable: "4 м",
    squareCable: "35 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "3 дні",
    priceProduct: "3500 грн.",
  },
  product_007: {
    ID: "product_007",
    lengthCable: "3 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "метал",
    productionTime: "готове",
    priceProduct: "1250 грн.",
  },
  product_008: {
    ID: "product_008",
    lengthCable: "2.8 м",
    squareCable: "10 кв.мм.",
    typeAlligator: "метал",
    productionTime: "готове",
    priceProduct: "900 грн.",
  },
  product_009: {
    ID: "product_009",
    lengthCable: "3 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "готове",
    priceProduct: "1450 грн.",
  },
  product_010: {
    ID: "product_010",
    lengthCable: "4 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "метал",
    productionTime: "1 день",
    priceProduct: "1500 грн.",
  },
  product_011: {
    ID: "product_011",
    lengthCable: "5 м",
    squareCable: "25 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "2 дні",
    priceProduct: "2200 грн.",
  },
  product_012: {
    ID: "product_012",
    lengthCable: "4 м",
    squareCable: "35 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "3 дні",
    priceProduct: "3500 грн.",
  },
  product_013: {
    ID: "product_013",
    lengthCable: "7 м",
    squareCable: "16 кв.мм.",
    typeAlligator: "пластик",
    productionTime: "2 дні",
    priceProduct: "2200 грн.",
  },
}

// формуємо вікно для відображення товару
export const creationWindowProduct2 = (classNameBG, classNameDiv) => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = classNameBG;

  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class=${classNameDiv}>`);
  // nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  // nodeTextHTML.push("<p>Заповнення відповідного меню</p>");
  nodeTextHTML.push(...getCreationButtonProduct(objectProductItem.product_001));
  nodeTextHTML.push("</div>");

  fragmentDiv.innerHTML = nodeTextHTML.join("");

  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}

export const creationWindowProduct = (classNameBG, classNameDiv) => {
  const fragmentDiv = document.createElement("div");
  fragmentDiv.className = classNameBG;
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class=${classNameDiv}>`);

  // перебираємо весь об'єкт і формуємо html-код
  for (const indexSubMenu in objectProductItem) {
    const currentProduct = objectProductItem[indexSubMenu];
    nodeTextHTML.push(...getCreationButtonProduct(currentProduct));
  }

  nodeTextHTML.push("</div>");
  fragmentDiv.innerHTML = nodeTextHTML.join("");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(fragmentDiv);
  return fragment;
}



const getCreationButtonProduct = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-button-product'>");

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (objectButtonProduct.typeAlligator === "метал") {
    nodeTextHTML.push("<img class='image-product' src='../../smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }
  if (objectButtonProduct.typeAlligator === "пластик") {
    nodeTextHTML.push("<img class='image-product' src='../../smallmenu_screen/img/082.jpg' alt='Image cable'>");
  }
  nodeTextHTML.push("</div>");
  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'> Довжина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Кабель </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Крокодили </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeAlligator} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Наявність </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Ціна </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

