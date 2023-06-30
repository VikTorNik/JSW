import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"],
    squareCable: ["10", "16", "25", "35", "50"],
    typePlug: ["10-25", "35-50"], // socket
    typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
    productionTime: ["за 2 дні", "за 4 дні",],
    priceCable_10: 80,
    priceCable_16: 120,
    priceCable_25: 175,
    priceCable_35: 240,
    priceCable_50: 360,
    pricePlug_1025: 170,
    pricePlug_3550: 300,
    priceHolder_200: 350, // electrode holder
    priceHolder_300: 550, // electrode holder
    priceMass_200: 400, // mass terminal
    priceMass_300: 650, // mass terminal
    priceTip: 50, //tip
    tradeMargin: 1.26,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      squareCable: ["10"],
      lengthCable: ["2.0", "3.0"],
      typePlug: ["10-25"],
      typeHolderMass: ["трим. 200А", "маса 200А", "наконечник"],
      productionTime: ["за 2 дні"],
    },
    set_16_1: {
      squareCable: ["16"],
      lengthCable: ["2.0", "3.0", "4.0", "5.0"],
      typePlug: ["10-25"],
      typeHolderMass: ["трим. 200А", "маса 200А", "наконечник"],
      productionTime: ["за 2 дні"],
    },
    set_16_2: {
      squareCable: ["16"],
      lengthCable: ["3.0", "4.0", "5.0"],
      typePlug: ["10-25"],
      typeHolderMass: ["трим. 300А", "маса 300А"],
      productionTime: ["за 4 дні"],
    },
    set_25_1: {
      squareCable: ["25"],
      lengthCable: ["2.0", "3.0", "4.0", "5.0"],
      typePlug: ["10-25"],
      typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
      productionTime: ["за 2 дні"],
    },
    set_25_2: {
      squareCable: ["25"],
      lengthCable: ["6.0", "7.0", "8.0"],
      typePlug: ["10-25"],
      typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
      productionTime: ["за 4 дні"],
    },
    set_35_1: {
      squareCable: ["35"],
      lengthCable: ["2.0", "3.0"],
      typePlug: ["35-50"],
      typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
      productionTime: ["за 2 дні"],
    },
    set_35_2: {
      squareCable: ["35"],
      lengthCable: ["4.0", "5.0", "6.0", "7.0", "8.0"],
      typePlug: ["35-50"],
      typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
      productionTime: ["за 4 дні"],
    },
    set_50_1: {
      squareCable: ["50"],
      lengthCable: ["2.0", "3.0", "4.0"],
      typePlug: ["35-50"],
      typeHolderMass: ["трим. 300А", "маса 300А", "наконечник"],
      productionTime: ["за 2 дні"],
    },
    set_50_2: {
      squareCable: ["50"],
      lengthCable: ["5.0", "6.0", "7.0", "8.0"],
      typePlug: ["35-50"],
      typeHolderMass: ["трим. 300А", "маса 300А", "наконечник"],
      productionTime: ["за 4 дні"],
    },
  }
}

const textReferenceInformation = [
  "Кабель для зварювальних робіт ....",

];

export const getCreationButtonProduct_02 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-button-product'>");

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (objectButtonProduct.typePlug === "10-25") {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }
  if (objectButtonProduct.typePlug === "35-50") {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/082.jpg' alt='Image cable'>");
  }
  nodeTextHTML.push("</div>");
  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Штекер</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typePlug} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'><--></p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeHolderMass} </p>`);  
  nodeTextHTML.push("<p class='paragraph-header'>Термін</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Ціна</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_02 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_02 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_10 = objProductParameters.infoParametrs.priceCable_10;
  const priceCable_16 = objProductParameters.infoParametrs.priceCable_16;
  const priceCable_25 = objProductParameters.infoParametrs.priceCable_25;
  const priceCable_35 = objProductParameters.infoParametrs.priceCable_35;
  const priceCable_50 = objProductParameters.infoParametrs.priceCable_50;
  const pricePlug_1025 = objProductParameters.infoParametrs.pricePlug_1025;
  const pricePlug_3550 = objProductParameters.infoParametrs.pricePlug_3550;
  const priceHolder_200 = objProductParameters.infoParametrs.priceHolder_200;
  const priceHolder_300 = objProductParameters.infoParametrs.priceHolder_300;
  const priceMass_200 = objProductParameters.infoParametrs.priceMass_200;
  const priceMass_300 = objProductParameters.infoParametrs.priceMass_300;
  const priceTip = objProductParameters.infoParametrs.priceTip;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;
  let priceCurrentHolderMass = 0;
  let priceCurrentPlug = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_212", "middle_button_213", "middle_button_214", "middle_button_215", "middle_button_216"];
  const buttonsForSquareCableAll = ["middle_button_217"];
  for (const nameButton in buttonSubMenu.button_big_2) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_2[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35", "50");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_204", "middle_button_205", "middle_button_206", "middle_button_207", "middle_button_208", "middle_button_209", "middle_button_210"];
  const buttonsForLengthCableAll = ["middle_button_211"];
  for (const nameButton in buttonSubMenu.button_big_2) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_2[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedLengthCable.push("2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0");
      }
    }
  }

  const includedPlug = [];
  const buttonsForPlug = ["middle_button_218", "middle_button_219"];
  const buttonsForPlugAll = ["middle_button_220"];
  for (const nameButton in buttonSubMenu.button_big_2) {
    if (buttonsForPlug.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedPlug.push(buttonSubMenu.button_big_2[nameButton].header);
      }
    }
    if (buttonsForPlugAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedPlug.push("10-25", "35-50");
      }
    }
  }

  const includedHolderMass = [];
  const buttonsForHolderMass = ["middle_button_221", "middle_button_222", "middle_button_223", "middle_button_224", "middle_button_225"];
  const buttonsForHolderMassAll = ["middle_button_226"];
  for (const nameButton in buttonSubMenu.button_big_2) {
    if (buttonsForHolderMass.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedHolderMass.push(buttonSubMenu.button_big_2[nameButton].header);
      }
    }
    if (buttonsForHolderMassAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedHolderMass.push("трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_227", "middle_button_228"];
  const buttonsForProductionTimeAll = ["middle_button_229"];
  for (const nameButton in buttonSubMenu.button_big_2) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_2[nameButton].status) {
        switch (buttonSubMenu.button_big_2[nameButton].header) {
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
      if (buttonSubMenu.button_big_2[nameButton].status) {
        includedProductionTime.push("за 2 дні", "за 4 дні");
      }
    }
  }



  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];
    objectCurrentSetProduct.squareCable.forEach(square_cable => {
      if (includedSquareCable.includes(square_cable)) {
        objectCurrentSetProduct.lengthCable.forEach(length_cable => {
          if (includedLengthCable.includes(length_cable)) {
            objectCurrentSetProduct.typePlug.forEach(type_plug => {
              if (includedPlug.includes(type_plug)) {
                objectCurrentSetProduct.typeHolderMass.forEach(type_holdermass => {
                  if (includedHolderMass.includes(type_holdermass)) {
                    objectCurrentSetProduct.productionTime.forEach(production_time => {
                      if (includedProductionTime.includes(production_time)) {
                        indexCountProduct += 1;
                        exportObjectProduct[indexCountProduct] = [];
                        exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                        exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable} м`;
                        exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable} кв.мм.`;
                        exportObjectProduct[indexCountProduct]["typePlug"] = `${type_plug}`;
                        exportObjectProduct[indexCountProduct]["typeHolderMass"] = `${type_holdermass}`;
                        exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
                        // розрахунок вартості продукту
                        switch (square_cable) {
                          case "10":
                            priceCurrentCable = priceCable_10;
                            break;
                          case "16":
                            priceCurrentCable = priceCable_16;
                            break;
                          case "25":
                            priceCurrentCable = priceCable_25;
                            break;
                          case "35":
                            priceCurrentCable = priceCable_35;
                            break;
                          case "50":
                            priceCurrentCable = priceCable_50;
                            break;
                        }
                        switch (type_plug) {
                          case "10-25":
                            priceCurrentPlug = pricePlug_1025;
                            break;
                          case "35-50":
                            priceCurrentPlug = pricePlug_3550;
                            break;
                        }
                        switch (type_holdermass) {
                          case "трим. 200А":
                            priceCurrentHolderMass = priceHolder_200;
                            break;
                          case "трим. 300А":
                            priceCurrentHolderMass = priceHolder_300;
                            break;
                          case "маса 200А":
                            priceCurrentHolderMass = priceMass_200;
                            break;
                          case "маса 300А":
                            priceCurrentHolderMass = priceMass_300;
                            break;
                          case "наконечник":
                            priceCurrentHolderMass = priceTip;
                            break;
                        }
                        priceCurrentProduct = 20 * Math.ceil(tradeMargin * (Number(length_cable) * priceCurrentCable + priceCurrentPlug + priceCurrentHolderMass) / 20);
                        exportObjectProduct[indexCountProduct]["priceProduct"] = `${priceCurrentProduct} грн.`;
                      }
                    })
                  };
                })
              };
            })
          };
        });
      }
    }
    );
  }
  // сортування з видаленням " .грн"
  if (buttonSubMenu.button_big_2["middle_button_202"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
