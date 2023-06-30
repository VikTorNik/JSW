import { buttonSubMenu } from "./object_buttonSubMenu.js";

const objectProductParameters = {
  infoParametrs: {
    alligatorBooster: ["1 штука", "2 штуки", "4 штуки",],
    massTerminal: ["латунь 200А", "латунь 250А",],
    productionTime: ["готове", "за 1 день", "за 2 дні", "за 4 дні",],
    priceAlligator_1: 160,
    priceAlligator_2: 320,
    priceAlligator_4: 600,
    massTerminal_200: 400,
    massTerminal_250: 650,
    tradeMargin: 1.0,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_1: {
      alligatorBooster: ["1 штука"],
      massTerminal: ["латунь 200А"],
      productionTime: ["готове"],
    },
    set_2: {
      alligatorBooster: ["2 штуки",],
      massTerminal: [],
      productionTime: ["за 1 день"],
    },
    set_3: {
      alligatorBooster: ["4 штуки",],
      massTerminal: [],
      productionTime: ["за 2 дні",],
    },
    set_4: {
      alligatorBooster: [],
      massTerminal: ["латунь 250А",],
      productionTime: ["за 4 дні",],
    },
  }
}

const textReferenceInformation = [
  " КРОКОДИЛИ І КЛЕМИ МАСИ ....",
];

export const getCreationButtonProduct_04 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-button-product'>");

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (true) {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }

  nodeTextHTML.push("</div>");
  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'> </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.alligatorMass} </p>`);  
  nodeTextHTML.push("<p class='paragraph-header'> Готовність </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Ціна </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_04 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_04 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceAlligator_1 = objProductParameters.infoParametrs.priceAlligator_1;
  const priceAlligator_2 = objProductParameters.infoParametrs.priceAlligator_2;
  const priceAlligator_4 = objProductParameters.infoParametrs.priceAlligator_4;
  const massTerminal_200 = objProductParameters.infoParametrs.massTerminal_200;
  const massTerminal_250 = objProductParameters.infoParametrs.massTerminal_250;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;

  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentAlligatorMass = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedAlligator = [];
  const buttonsForAlligator = ["middle_button_404", "middle_button_405", "middle_button_406"];
  const buttonsForAlligatorAll = ["middle_button_407"];
  for (const nameButton in buttonSubMenu.button_big_4) {
    if (buttonsForAlligator.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        includedAlligator.push(buttonSubMenu.button_big_4[nameButton].header);
      }
    }
    if (buttonsForAlligatorAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        includedAlligator.push("1 штука", "2 штуки", "4 штуки");
      }
    }
  }

  const includedMassTerminal = [];
  const buttonsForMassTerminal = ["middle_button_408", "middle_button_409"];
  const buttonsForMassTerminalAll = ["middle_button_410"];
  for (const nameButton in buttonSubMenu.button_big_4) {
    if (buttonsForMassTerminal.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        includedMassTerminal.push(buttonSubMenu.button_big_4[nameButton].header);
      }
    }
    if (buttonsForMassTerminalAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        includedMassTerminal.push("латунь 200А", "латунь 250А");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_411", "middle_button_412", "middle_button_413", "middle_button_414"];
  const buttonsForProductionTimeAll = ["middle_button_415"];
  for (const nameButton in buttonSubMenu.button_big_4) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        switch (buttonSubMenu.button_big_4[nameButton].header) {
          case "готове":
            includedProductionTime.push("готове");
            break;
          case "1 д.":
            includedProductionTime.push("за 1 день");
            break;
          case "2 д.":
            includedProductionTime.push("за 2 дні");
            break;
          case "4 д.":
            includedProductionTime.push("за 4 дні");
            break;
        }
      }
    }
    if (buttonsForProductionTimeAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_4[nameButton].status) {
        includedProductionTime.push("готове", "за 1 день", "за 2 дні", "за 4 дні");
      }
    }
  }

  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];
    [...objectCurrentSetProduct.alligatorBooster, ...objectCurrentSetProduct.massTerminal].forEach(alligator_mass => {
      if ([...includedAlligator, ...includedMassTerminal].includes(alligator_mass)) {
        objectCurrentSetProduct.productionTime.forEach(production_time => {
          if (includedProductionTime.includes(production_time)) {
            indexCountProduct += 1;
            exportObjectProduct[indexCountProduct] = [];
            exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
            exportObjectProduct[indexCountProduct]["alligatorMass"] = `${alligator_mass}`;
            exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
            // розрахунок вартості продукту
            switch (alligator_mass) {
              case "1 штука":
                priceCurrentAlligatorMass = priceAlligator_1;
                break;
              case "2 штуки":
                priceCurrentAlligatorMass = priceAlligator_2;
                break;
              case "4 штуки":
                priceCurrentAlligatorMass = priceAlligator_4;
                break;
              case "латунь 200А":
                priceCurrentAlligatorMass = massTerminal_200;
                break;
              case "латунь 250А":
                priceCurrentAlligatorMass = massTerminal_250;
                break;
            }
            priceCurrentProduct = 10 * Math.ceil(tradeMargin * priceCurrentAlligatorMass / 10);
            exportObjectProduct[indexCountProduct]["priceProduct"] = `${priceCurrentProduct} грн.`;
          }
        })
      }
    }
    );
  }

  console.log(exportObjectProduct);
  // сортування з видаленням " .грн"
  if (buttonSubMenu.button_big_4["middle_button_402"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
