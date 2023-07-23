import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
    squareCable: ["10", "16", "25", "35", "50", "70", "95"],
    typePML: ["лужена", "не лужена"],
    typeTip: ["стандарт", "плоский"],
    productionTime: ["за 2 дні", "за 4 дні",],
    pricePML_10: currentPrice.pricePML_10,
    pricePML_16: currentPrice.pricePML_16,
    pricePML_25: currentPrice.pricePML_25,
    pricePML_35: currentPrice.pricePML_35,
    pricePML_50: currentPrice.pricePML_50,
    pricePML_70: currentPrice.pricePML_70,
    pricePML_95: currentPrice.pricePML_95,
    priceTipStandart: currentPrice.priceTipStandart,
    priceTipFlat: currentPrice.priceTipFlat,
    tradeСopper: currentPrice.tradeСopper,
    tradeCoating: currentPrice.tradeCoating,
    tradeMargin: currentPrice.tradeMargin_06,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["10"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_10_2: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["10"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_16_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["16"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_16_2: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["16"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_25_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["25"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_25_2: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["25"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_35_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40"],
      squareCable: ["35"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_35_2: {
      lengthCable: ["50", "60", "70"],
      squareCable: ["35"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 4 дні"],
    },
    set_35_3: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["35"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_50_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30"],
      squareCable: ["50"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_50_2: {
      lengthCable: ["35", "40", "50", "60", "70"],
      squareCable: ["50"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 4 дні"],
    },
    set_50_3: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["50"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_70_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30"],
      squareCable: ["70"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_70_2: {
      lengthCable: ["35", "40", "50", "60", "70"],
      squareCable: ["70"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 4 дні"],
    },
    set_70_3: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["70"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    },
    set_95_1: {
      lengthCable: ["5", "10", "15", "20", "25", "30"],
      squareCable: ["95"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 2 дні"],
    },
    set_95_2: {
      lengthCable: ["35", "40", "50", "60", "70"],
      squareCable: ["95"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["стандарт"],
      productionTime: ["за 4 дні"],
    },
    set_95_3: {
      lengthCable: ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
      squareCable: ["95"],
      typePML: ["лужена", "не лужена"],
      typeTip: ["плоский"],
      productionTime: ["за 4 дні"],
    }
  }
}

const textReferenceInformation = [
  "Шини маси з мідної плетінки можуть використовуватись у якості перемичок АКБ чи у іншій якості де потрібно передавати струм. Для виготовлення використовується мідна плетінка різного перерізу.",
  "Переріз шини впливає на здатність передавати струм. Чим більший переріз, тим більший струм шина може витримати без суттєвого перегріву поза межами визначеними виробником. Плетінка буває мідною чи мідною з покриттям (лужена). Лужена більш захищена від окислення при експлуатації в несприятливих умовах. Додатковим параметром є діаметр отвору у наконечниках на кінцівках перемичок.",
  "Наконечники можуть бути двох типів — стандартні та плоскі. Стандартні - це звичайні наконечники, які виготовляються промисловістю. Плоскі - це наконечники малої довжини плоскої форми. Всі типи наконечників опресовуються гідравлічним пресом.",
];

export const getCreationButtonProduct_06 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  nodeTextHTML.push(`<p class='header-name-product'>Шина плетена, ${objectButtonProduct.typePML} - ${objectButtonProduct.lengthCable} - ${objectButtonProduct.squareCable}</p>`);


  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (objectButtonProduct.typePML === "не лужена") {
    switch (objectButtonProduct.squareCable.slice(0, 2)) {
      case "10":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-1.jpg' alt='Cuprum'>");
        break;
      case "16":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-2.jpg' alt='Cuprum'>");
        break;
      case "25":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-3.jpg' alt='Cuprum'>");
        break;
      case "35":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-4.jpg' alt='Cuprum'>");
        break;
      case "50":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-5.jpg' alt='Cuprum'>");
        break;
      case "70":
      case "95":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/cup-6.jpg' alt='Cuprum'>");
        break;
    }
  } else {
    switch (objectButtonProduct.squareCable.slice(0, 2)) {
      case "10":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/10-1.jpg' alt='PML'>");
        break;
      case "16":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/10-2.jpg' alt='PML'>");
        break;
      case "25":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/10-3.jpg' alt='PML'>");
        break;
      case "35":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/10-4.jpg' alt='PML'>");
        break;
      case "50":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/16-1.jpg' alt='PML'>");
        break;
      case "70":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/16-2.jpg' alt='PML'>");
        break;
      case "95":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/06/16-3.jpg' alt='PML'>");
        break;
    }
  }
  nodeTextHTML.push("</div>");



  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
  // nodeTextHTML.push("<p class='paragraph-header'></p>");
  // nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typePML} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Наконечник</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeTip} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Термін</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Ціна</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_06 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_06 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const pricePML_10 = objProductParameters.infoParametrs.pricePML_10;
  const pricePML_16 = objProductParameters.infoParametrs.pricePML_16;
  const pricePML_25 = objProductParameters.infoParametrs.pricePML_25;
  const pricePML_35 = objProductParameters.infoParametrs.pricePML_35;
  const pricePML_50 = objProductParameters.infoParametrs.pricePML_50;
  const pricePML_70 = objProductParameters.infoParametrs.pricePML_70;
  const pricePML_95 = objProductParameters.infoParametrs.pricePML_95;
  const priceTipStandart = objProductParameters.infoParametrs.priceTipStandart;
  const priceTipFlat = objProductParameters.infoParametrs.priceTipFlat;
  const tradeСopper = objProductParameters.infoParametrs.tradeСopper;
  const tradeCoating = objProductParameters.infoParametrs.tradeCoating;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentPML = 0;
  let priceCurrentTip = 0;
  let priceCurrentTrade = 0;
  let priceCurrentProduct = 0;


  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_616", "middle_button_617", "middle_button_618", "middle_button_619", "middle_button_620", "middle_button_621", "middle_button_622"];
  const buttonsForSquareCableAll = ["middle_button_623"];
  for (const nameButton in buttonSubMenu.button_big_6) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_6[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35", "50", "70", "95");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_604", "middle_button_605", "middle_button_606", "middle_button_607", "middle_button_608", "middle_button_609", "middle_button_610", "middle_button_611", "middle_button_612", "middle_button_613", "middle_button_614"];
  const buttonsForLengthCableAll = ["middle_button_615"];
  for (const nameButton in buttonSubMenu.button_big_6) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_6[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedLengthCable.push("5", "10", "15", "20", "25", "30", "35", "40", "50", "60", "70");
      }
    }
  }

  const includedPML = [];
  const buttonsForPML = ["middle_button_624", "middle_button_625"];
  const buttonsForPMLAll = ["middle_button_626"];
  for (const nameButton in buttonSubMenu.button_big_6) {
    if (buttonsForPML.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedPML.push(buttonSubMenu.button_big_6[nameButton].header);
      }
    }
    if (buttonsForPMLAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedPML.push("лужена", "не лужена");
      }
    }
  }

  const includedTip = [];
  const buttonsForTip = ["middle_button_627", "middle_button_628"];
  const buttonsForTipAll = ["middle_button_629"];
  for (const nameButton in buttonSubMenu.button_big_6) {
    if (buttonsForTip.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedTip.push(buttonSubMenu.button_big_6[nameButton].header);
      }
    }
    if (buttonsForTipAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        includedTip.push("стандарт", "плоский");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_630", "middle_button_631"];
  const buttonsForProductionTimeAll = ["middle_button_632"];
  for (const nameButton in buttonSubMenu.button_big_6) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_6[nameButton].status) {
        switch (buttonSubMenu.button_big_6[nameButton].header) {
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
      if (buttonSubMenu.button_big_6[nameButton].status) {
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

            objectCurrentSetProduct.typePML.forEach(type_pml => {
              if (includedPML.includes(type_pml)) {

                objectCurrentSetProduct.typeTip.forEach(type_tip => {
                  if (includedTip.includes(type_tip)) {

                    objectCurrentSetProduct.productionTime.forEach(production_time => {
                      if (includedProductionTime.includes(production_time)) {

                        indexCountProduct += 1;
                        exportObjectProduct[indexCountProduct] = [];
                        exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                        exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable}&nbspсм`;
                        exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable}&nbspкв.мм.`;
                        exportObjectProduct[indexCountProduct]["typePML"] = `${type_pml}`;
                        exportObjectProduct[indexCountProduct]["typeTip"] = `${type_tip}`;
                        exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
                        // розрахунок вартості продукту
                        switch (square_cable) {
                          case "10":
                            priceCurrentPML = pricePML_10;
                            break;
                          case "16":
                            priceCurrentPML = pricePML_16;
                            break;
                          case "25":
                            priceCurrentPML = pricePML_25;
                            break;
                          case "35":
                            priceCurrentPML = pricePML_35;
                            break;
                          case "50":
                            priceCurrentPML = pricePML_50;
                            break;
                          case "70":
                            priceCurrentPML = pricePML_70;
                            break;
                          case "95":
                            priceCurrentPML = pricePML_95;
                            break;
                        }
                        switch (type_pml) {
                          case "лужена":
                            priceCurrentTrade = tradeCoating;
                            break;
                          case "не лужена":
                            priceCurrentTrade = tradeСopper;
                            break;
                        }
                        switch (type_tip) {
                          case "стандарт":
                            priceCurrentTip = priceTipStandart;
                            break;
                          case "плоский":
                            priceCurrentTip = priceTipFlat;
                            break;
                        }
                        priceCurrentProduct = 10 * Math.ceil(tradeMargin * priceCurrentTrade * (Number(length_cable) * priceCurrentPML / 100 + priceCurrentTip) / 10);
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
  if (buttonSubMenu.button_big_6["middle_button_602"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
