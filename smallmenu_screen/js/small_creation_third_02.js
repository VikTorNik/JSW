import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"],
    squareCable: ["10", "16", "25", "35", "50"],
    typePlug: ["10-25", "35-50"], // socket
    typeHolderMass: ["трим. 200А", "трим. 300А", "маса 200А", "маса 300А", "наконечник"],
    productionTime: ["за 2 дні", "за 4 дні",],
    priceCable_10: currentPrice.priceCable_10,
    priceCable_16: currentPrice.priceCable_16,
    priceCable_25: currentPrice.priceCable_25,
    priceCable_35: currentPrice.priceCable_35,
    priceCable_50: currentPrice.priceCable_50,
    pricePlug_1025: currentPrice.pricePlug_1025,
    pricePlug_3550: currentPrice.pricePlug_3550,
    priceHolder_200: currentPrice.priceHolder_200, // electrode holder
    priceHolder_300: currentPrice.priceHolder_300, // electrode holder
    priceMass_200: currentPrice.priceMass_200, // mass terminal
    priceMass_300: currentPrice.priceMass_300, // mass terminal
    priceTip: currentPrice.priceTip_02, //tip
    tradeMargin: currentPrice.tradeMargin_02,
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
  "Кабель для зварювальних інверторних апаратів виготовляється двух типів. Перший — клема маси з однієї сторони та байонетний роз'єм з другої. Другий — держак електродів з однієї сторони, та з байонетний роз'єм з другої сторони. Якщо ви маєте в наявності якісну клему маси чи тримач електродів, то є можливість замовити зварювальний кабель тільки з байонетним роз'ємом.",
  "Довжину кабелю потрібно вибирати мінімально можливою. Чим менша довжина кабелю, тим менша «просадка» напруги й, відповідно, інвертор буде стабільно «тримати» відповідну силу струму. При збільшенні довжини кабеля потрібно, відповідно збільшувати переріз мідної жили, щоб компенсувати втрати.",
  "Для виготовлення використовується мідний багатожильний провід українського виробництва. Кабель має гумову оболонку, яка не втрачає гнучкості до мінус 40 градусів морозу. Має відповідне маркування — виробник, переріз і дійсно гнучкий навіть при низькій температурі. Кабель для з'єднання з клемою маси чи байонетом завжди опресовується мідними наконечниками, а також додатково оздоблений термоусадкою з клеєм для запобігання окислення. Стандартна довжина кабеля складає 2-3 метри.",
  "В якості клем маси пропонуємо доопрацьовані латунні клеми маси італійського виробництва. У клеми додані товсті мідні перемички для рівномірного розподілу струму. Це створює умови для довготривалого надійного використання на максимальних струмах. Наразі є клеми маси під струм 200А та 250А",
  "Фірменні держаки виробицтва швецької компанії ESAB. Повністью латунний, важкий. Існує декільки типів під різні струми — 200А, 300А тощо.",
  "Байонетні роз'єми використовуються виробництва німецької компанії Abicor Binzel. Це латунні байонети чудової якості. Звераємо увагу, що аналогічні байонети китайського виробництва виготовляються з заліза, а не з латуні. При купівлі перевіряйне якість байонета за допомогою магніта. Латунь на магніт не реагує. Наразі найчастіше використовують два розміри байонетнів — 10-25 (діаметр 3/8 дюйми — 9,5 мм) і 35-50 (діаметр 1/2 дюйма — 12,5 мм).",
];

export const getCreationButtonProduct_02 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  switch (objectButtonProduct.typeHolderMass) {
    case "трим. 200А":
    case "трим. 300А":
      nodeTextHTML.push(`<p class='header-name-product'>Зварювальний дріт з тримачем - ${objectButtonProduct.lengthCable}</p>`);
      break;
    case "маса 200А":
    case "маса 300А":
      nodeTextHTML.push(`<p class='header-name-product'>Зварювальний дріт з клемою маси - ${objectButtonProduct.lengthCable}</p>`);
      break;
    case "наконечник":
      nodeTextHTML.push(`<p class='header-name-product'>Зварювальний дріт з наконечником - ${objectButtonProduct.lengthCable}</p>`);
      break;
  }

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

  switch (objectButtonProduct.typeHolderMass) {
    case "трим. 200А":
    case "трим. 300А":
      nodeTextHTML.push("<p class='paragraph-header'>Тримач</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeHolderMass.slice(-4)} </p>`);
      break;
    case "маса 200А":
    case "маса 300А":
      nodeTextHTML.push("<p class='paragraph-header'>Маса</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeHolderMass.slice(-4)} </p>`);
      break;
    case "наконечник":
      nodeTextHTML.push("<p class='paragraph-header'>Наконечник</p>");
      nodeTextHTML.push(`<p class='paragraph-value'>&#8960 8</p>`);
      break;
  }

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
                        exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable}&nbspм`;
                        exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable}&nbspкв.мм.`;
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
