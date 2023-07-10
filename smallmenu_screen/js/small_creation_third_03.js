import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0"],
    squareCable: ["10", "16", "25", "35", "50"],
    typeLeftBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
    typeRightBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
    productionTime: ["за 2 дні", "за 4 дні",],
    priceCable_10: currentPrice.priceCable_10,
    priceCable_16: currentPrice.priceCable_16,
    priceCable_25: currentPrice.priceCable_25,
    priceCable_35: currentPrice.priceCable_35,
    priceCable_50: currentPrice.priceCable_50,
    pricePlug_1025: currentPrice.pricePlug_1025,
    pricePlug_3550: currentPrice.pricePlug_3550,
    priceSocet_1025: currentPrice.priceSocet_1025,
    priceSocet_3550: currentPrice.priceSocet_3550,
    tradeMargin: currentPrice.tradeMargin_03,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      squareCable: ["10"],
      lengthCable: ["0.5", "1.0", "1.5", "2.0"],
      typeLeftBayonet: ["10-25 папа", "10-25 мама"],
      typeRightBayonet: ["10-25 папа", "10-25 мама"],
      productionTime: ["за 2 дні"],
    },
    set_16_1: {
      squareCable: ["16"],
      lengthCable: ["0.5", "1.0", "1.5", "2.0", "3.0"],
      typeLeftBayonet: ["10-25 папа", "10-25 мама"],
      typeRightBayonet: ["10-25 папа", "10-25 мама"],
      productionTime: ["за 2 дні"],
    },
    set_16_2: {
      squareCable: ["16"],
      lengthCable: ["4.0", "5.0"],
      typeLeftBayonet: ["10-25 папа", "10-25 мама"],
      typeRightBayonet: ["10-25 папа", "10-25 мама"],
      productionTime: ["за 4 дні"],
    },
    set_25_1: {
      squareCable: ["25"],
      lengthCable: ["0.5", "1.0", "1.5", "2.0"],
      typeLeftBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      typeRightBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      productionTime: ["за 2 дні"],
    },
    set_25_2: {
      squareCable: ["25"],
      lengthCable: ["3.0", "4.0", "5.0"],
      typeLeftBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      typeRightBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      productionTime: ["за 4 дні"],
    },
    set_35_1: {
      squareCable: ["35"],
      lengthCable: ["0.5", "1.0"],
      typeLeftBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      typeRightBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      productionTime: ["за 2 дні"],
    },
    set_35_2: {
      squareCable: ["35"],
      lengthCable: ["1.5", "2.0", "3.0", "4.0", "5.0"],
      typeLeftBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      typeRightBayonet: ["10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама"],
      productionTime: ["за 4 дні"],
    },
    set_50_1: {
      squareCable: ["50"],
      lengthCable: ["0.5", "1.0", "1.5"],
      typeLeftBayonet: ["35-50 папа", "35-50 мама"],
      typeRightBayonet: ["35-50 папа", "35-50 мама"],
      productionTime: ["за 2 дні"],
    },
    set_50_2: {
      squareCable: ["50"],
      lengthCable: ["2.0", "3.0", "4.0", "5.0"],
      typeLeftBayonet: ["35-50 папа", "35-50 мама"],
      typeRightBayonet: ["35-50 папа", "35-50 мама"],
      productionTime: ["за 4 дні"],
    },
  }
}

const textReferenceInformation = [
  "Подовжувачі для зварювальних апаратів відрізняються типом і розміром байонетних роз'ємів однієї і другої сторони.",
  "Байонетні роз'єми використовуються виробництва німецької компанії Abicor Binzel. Це латунні байонети чудової якості. Звераємо увагу, що аналогічні байонети китайського виробництва виготовляються з заліза, а не з латуні. При купівлі перевіряйне якість байонета за допомогою магніта. Латунь на магніт не реагує. Наразі найчастіше використовують два розміри байонетнів — 10-25 (діаметр 3/8 дюйми — 9,5 мм) і 35-50 (діаметр 1/2 дюйма — 12,5 мм).",
  "Довжину кабелю потрібно вибирати мінімально можливою. Чим менша довжина кабелю, тим менша «просадка» напруги й, відповідно, інвертор буде стабільно «тримати» відповідну силу струму. При збільшенні довжини кабеля потрібно, відповідно збільшувати переріз мідної жили, щоб компенсувати втрати.",
  "Для виготовлення використовується мідний багатожильний провід українського виробництва. Кабель має гумову оболонку, яка не втрачає гнучкості до мінус 40 градусів морозу. Має відповідне маркування — виробник, переріз і дійсно гнучкий навіть при низькій температурі. Кабель для з'єднання з клемою маси чи байонетом завжди опресовується мідними наконечниками, а також додатково оздоблений термоусадкою з клеєм для запобігання окислення.",
];

export const getCreationButtonProduct_03 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  nodeTextHTML.push(`<p class='header-name-product'>Подовжувач зварний - ${objectButtonProduct.lengthCable} - ${objectButtonProduct.squareCable}</p>`);

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (true) {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }
  nodeTextHTML.push("</div>");
  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);

  switch (objectButtonProduct.typeLeftBayonet.slice(-4)) {
    case "мама":
      nodeTextHTML.push("<p class='paragraph-header'>Гніздо</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeLeftBayonet.slice(0, 5)} </p>`);
      break;
    case "папа":
      nodeTextHTML.push("<p class='paragraph-header'>Штекер</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeLeftBayonet.slice(0, 5)} </p>`);
      break;
  }

  switch (objectButtonProduct.typeRightBayonet.slice(-4)) {
    case "мама":
      nodeTextHTML.push("<p class='paragraph-header'>Гніздо</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeRightBayonet.slice(0, 5)} </p>`);
      break;
    case "папа":
      nodeTextHTML.push("<p class='paragraph-header'>Штекер</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeRightBayonet.slice(0, 5)} </p>`);
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

export const getReferenceInformationProduct_03 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_03 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_10 = objProductParameters.infoParametrs.priceCable_10;
  const priceCable_16 = objProductParameters.infoParametrs.priceCable_16;
  const priceCable_25 = objProductParameters.infoParametrs.priceCable_25;
  const priceCable_35 = objProductParameters.infoParametrs.priceCable_35;
  const priceCable_50 = objProductParameters.infoParametrs.priceCable_50;
  const pricePlug_1025 = objProductParameters.infoParametrs.pricePlug_1025;
  const pricePlug_3550 = objProductParameters.infoParametrs.pricePlug_3550;
  const priceSocet_1025 = objProductParameters.infoParametrs.priceSocet_1025;
  const priceSocet_3550 = objProductParameters.infoParametrs.priceSocet_3550;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;
  let priceCurrentHolderMass = 0;
  let priceCurrentLeftBayonet = 0;
  let priceCurrentRightBayonet = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_312", "middle_button_313", "middle_button_314", "middle_button_315", "middle_button_316"];
  const buttonsForSquareCableAll = ["middle_button_317"];
  for (const nameButton in buttonSubMenu.button_big_3) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_3[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35", "50");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_304", "middle_button_305", "middle_button_306", "middle_button_307", "middle_button_308", "middle_button_309", "middle_button_310"];
  const buttonsForLengthCableAll = ["middle_button_311"];
  for (const nameButton in buttonSubMenu.button_big_3) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_3[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedLengthCable.push("0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0");
      }
    }
  }

  const includedLeftBayonet = [];
  const buttonsForLeftBayonet = ["middle_button_318", "middle_button_319", "middle_button_320", "middle_button_321"];
  const buttonsForLeftBayonetAll = ["middle_button_322"];
  for (const nameButton in buttonSubMenu.button_big_3) {
    if (buttonsForLeftBayonet.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedLeftBayonet.push(buttonSubMenu.button_big_3[nameButton].header);
      }
    }
    if (buttonsForLeftBayonetAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedLeftBayonet.push("10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама");
      }
    }
  }

  const includedRightBayonet = [];
  const buttonsForRightBayonet = ["middle_button_323", "middle_button_324", "middle_button_325", "middle_button_326"];
  const buttonsForRightBayonetAll = ["middle_button_327"];
  for (const nameButton in buttonSubMenu.button_big_3) {
    if (buttonsForRightBayonet.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedRightBayonet.push(buttonSubMenu.button_big_3[nameButton].header);
      }
    }
    if (buttonsForRightBayonetAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        includedRightBayonet.push("10-25 папа", "35-50 папа", "10-25 мама", "35-50 мама");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_328", "middle_button_329"];
  const buttonsForProductionTimeAll = ["middle_button_330"];
  for (const nameButton in buttonSubMenu.button_big_3) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_3[nameButton].status) {
        switch (buttonSubMenu.button_big_3[nameButton].header) {
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
      if (buttonSubMenu.button_big_3[nameButton].status) {
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

            objectCurrentSetProduct.typeLeftBayonet.forEach(type_leftbayonet => {
              if (includedLeftBayonet.includes(type_leftbayonet)) {

                objectCurrentSetProduct.typeRightBayonet.forEach(type_rightbayonet => {
                  if (includedRightBayonet.includes(type_rightbayonet)) {

                    objectCurrentSetProduct.productionTime.forEach(production_time => {
                      if (includedProductionTime.includes(production_time)) {
                        indexCountProduct += 1;
                        exportObjectProduct[indexCountProduct] = [];
                        exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                        exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable}&nbspм`;
                        exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable}&nbspкв.мм.`;
                        exportObjectProduct[indexCountProduct]["typeLeftBayonet"] = `${type_leftbayonet}`;
                        exportObjectProduct[indexCountProduct]["typeRightBayonet"] = `${type_rightbayonet}`;
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
                        switch (type_leftbayonet) {
                          case "10-25 папа":
                            priceCurrentLeftBayonet = pricePlug_1025;
                            break;
                          case "35-50 папа":
                            priceCurrentLeftBayonet = pricePlug_3550;
                            break;
                          case "10-25 мама":
                            priceCurrentLeftBayonet = priceSocet_1025;
                            break;
                          case "35-50 мама":
                            priceCurrentLeftBayonet = priceSocet_3550;
                            break;
                        }
                        switch (type_rightbayonet) {
                          case "10-25 папа":
                            priceCurrentRightBayonet = pricePlug_1025;
                            break;
                          case "35-50 папа":
                            priceCurrentRightBayonet = pricePlug_3550;
                            break;
                          case "10-25 мама":
                            priceCurrentRightBayonet = priceSocet_1025;
                            break;
                          case "35-50 мама":
                            priceCurrentRightBayonet = priceSocet_3550;
                            break;
                        }
                        priceCurrentProduct = 20 * Math.ceil(tradeMargin * (Number(length_cable) * priceCurrentCable + priceCurrentLeftBayonet + priceCurrentRightBayonet) / 20);
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
  if (buttonSubMenu.button_big_3["middle_button_302"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
