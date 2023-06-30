import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["10", "15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100", "110", "120", "140", "160", "180", "200"],
    squareCable: ["10", "16", "25", "35", "50"],
    leftCableTermination: ["наконечник", "штирь", "нічого"],
    rightCableTermination: ["наконечник", "штирь", "нічого"],
    productionTime: ["готове", "за 1 день"],
    priceCable_10: 80,
    priceCable_16: 120,
    priceCable_25: 175,
    priceCable_35: 240,
    priceCable_50: 360,
    priceTip: 20,
    pricePin: 30,
    priceNothingTip: 10,
    tradeMargin: 1.30,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      squareCable: ["10"],
      lengthCable: ["10", "15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["готове"],
    },
    set_10_2: {
      squareCable: ["10"],
      lengthCable: ["110", "120", "140", "160", "180", "200"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["за 1 день"],
    },
    set_16_1: {
      squareCable: ["16"],
      lengthCable: ["10", "15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["готове"],
    },
    set_16_2: {
      squareCable: ["16"],
      lengthCable: ["110", "120", "140", "160", "180", "200"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["за 1 день"],
    },
    set_25_1: {
      squareCable: ["25"],
      lengthCable: ["15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["готове"],
    },
    set_25_2: {
      squareCable: ["25"],
      lengthCable: ["110", "120", "140", "160", "180", "200"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["за 1 день"],
    },
    set_35_1: {
      squareCable: ["35"],
      lengthCable: ["15", "20", "25", "30", "35", "40", "50", "60", "70", "80"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["готове"],
    },
    set_35_2: {
      squareCable: ["35"],
      lengthCable: ["90", "100", "110", "120", "140", "160", "180", "200"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["за 1 день"],
    },
    set_50_1: {
      squareCable: ["50"],
      lengthCable: ["20", "25", "30", "35", "40", "50", "60", "70", "80"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["готове"],
    },
    set_50_2: {
      squareCable: ["50"],
      lengthCable: ["90", "100", "110", "120", "140", "160", "180", "200"],
      leftCableTermination: ["наконечник", "штирь", "нічого"],
      rightCableTermination: ["наконечник", "штирь", "нічого"],
      productionTime: ["за 1 день"],
    },
  }
}

const textReferenceInformation = [
  "Перемички гнучки за кабеля КГ ....",

];

export const getCreationButtonProduct_05 = (objectButtonProduct) => {
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
  nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'></p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.leftCableTermination} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'></p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.rightCableTermination} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Термін</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Ціна</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_05 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_05 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_10 = objProductParameters.infoParametrs.priceCable_10;
  const priceCable_16 = objProductParameters.infoParametrs.priceCable_16;
  const priceCable_25 = objProductParameters.infoParametrs.priceCable_25;
  const priceCable_35 = objProductParameters.infoParametrs.priceCable_35;
  const priceCable_50 = objProductParameters.infoParametrs.priceCable_50;
  const priceTip = objProductParameters.infoParametrs.priceTip;
  const pricePin = objProductParameters.infoParametrs.pricePin;
  const priceNothingTip = objProductParameters.infoParametrs.priceNothingTip;  
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;  
  let priceCurrentLeftCableTermination = 0;
  let priceCurrentRightCableTermination = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_524", "middle_button_525", "middle_button_526", "middle_button_527", "middle_button_528"];
  const buttonsForSquareCableAll = ["middle_button_529"];
  for (const nameButton in buttonSubMenu.button_big_5) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_5[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35", "50");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_504", "middle_button_505", "middle_button_506", "middle_button_507", "middle_button_508", "middle_button_509", "middle_button_510", "middle_button_511", "middle_button_512", "middle_button_513", "middle_button_514", "middle_button_515", "middle_button_516", "middle_button_517", "middle_button_518", "middle_button_519", "middle_button_520", "middle_button_521", "middle_button_522"];
  const buttonsForLengthCableAll = ["middle_button_523"];
  for (const nameButton in buttonSubMenu.button_big_5) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_5[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedLengthCable.push("10", "15", "20", "25", "30", "35", "40", "50", "60", "70", "80", "90", "100", "110", "120", "140", "160", "180", "200");
      }
    }
  }

  const includedLeftCableTermination = [];
  const buttonsForLeftCableTermination = ["middle_button_530", "middle_button_531", "middle_button_532"];  
  for (const nameButton in buttonSubMenu.button_big_5) {
    if (buttonsForLeftCableTermination.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedLeftCableTermination.push(buttonSubMenu.button_big_5[nameButton].header);
      }
    }    
  }
  
  const includedRightCableTermination = [];
  const buttonsForRightCableTermination = ["middle_button_533", "middle_button_534", "middle_button_535"];
  for (const nameButton in buttonSubMenu.button_big_5) {
    if (buttonsForRightCableTermination.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedRightCableTermination.push(buttonSubMenu.button_big_5[nameButton].header);
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_536", "middle_button_537"];
  const buttonsForProductionTimeAll = ["middle_button_538"];
  for (const nameButton in buttonSubMenu.button_big_5) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        switch (buttonSubMenu.button_big_5[nameButton].header) {
          case "готове":
            includedProductionTime.push("готове");
            break;
          case "1 д.":
            includedProductionTime.push("за 1 день");
            break;
        }
      }
    }
    if (buttonsForProductionTimeAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_5[nameButton].status) {
        includedProductionTime.push("готове", "за 1 день");
      }
    }
  }

  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];
    objectCurrentSetProduct.squareCable.forEach(square_cable => {
      if (includedSquareCable.includes(square_cable)) {
        objectCurrentSetProduct.lengthCable.forEach(length_cable => {
          if (includedLengthCable.includes(length_cable)) {

            objectCurrentSetProduct.leftCableTermination.forEach(left_cable_termination => {
              if (includedLeftCableTermination.includes(left_cable_termination)) {

                objectCurrentSetProduct.rightCableTermination.forEach(right_cable_termination => {
                  if (includedRightCableTermination.includes(right_cable_termination)) {

                    objectCurrentSetProduct.productionTime.forEach(production_time => {
                      if (includedProductionTime.includes(production_time)) {
                        indexCountProduct += 1;
                        exportObjectProduct[indexCountProduct] = [];
                        exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                        exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable} cм`;
                        exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable} кв.мм.`;
                        exportObjectProduct[indexCountProduct]["leftCableTermination"] = `${left_cable_termination}`;
                        exportObjectProduct[indexCountProduct]["rightCableTermination"] = `${right_cable_termination}`;
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
                        switch (left_cable_termination) {
                          case "наконечник":
                            priceCurrentLeftCableTermination = priceTip;
                            break;
                          case "штирь":
                            priceCurrentLeftCableTermination = pricePin;
                            break;
                          case "нічого":
                            priceCurrentLeftCableTermination = priceNothingTip;
                            break;                          
                        }                  
                        switch (right_cable_termination) {
                          case "наконечник":
                            priceCurrentRightCableTermination = priceTip;
                            break;
                          case "штирь":
                            priceCurrentRightCableTermination = pricePin;
                            break;
                          case "нічого":
                            priceCurrentRightCableTermination = priceNothingTip;
                            break;
                        }                  
                        priceCurrentProduct = 5 * Math.ceil(tradeMargin * (Number(length_cable) * priceCurrentCable / 100 + priceCurrentLeftCableTermination + priceCurrentRightCableTermination) / 5);
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
  if (buttonSubMenu.button_big_5["middle_button_502"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
