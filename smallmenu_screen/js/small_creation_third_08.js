import { buttonSubMenu } from "./object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    lengthInputVoltage: ["0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0"],
    numberSocket: ["1", "2", "3", "4", "5"],
    lengthOutputVoltage: ["1.0", "2.0", "3.0", "4.0", "5.0"],
    squareCable: ["3 * 2.5", "3 * 4.0", "3 * 6.0"],
    productionTime: ["за 2 дні", "за 4 дні"],
    priceCable_2_5: currentPrice.priceCable_2_5,
    priceCable_4_0: currentPrice.priceCable_4_0,
    priceCable_6_0: currentPrice.priceCable_6_0,
    priceSocket_1: currentPrice.priceSocket_1,
    priceSocket_2: currentPrice.priceSocket_2,
    priceSocket_3: currentPrice.priceSocket_3,
    priceSocket_4: currentPrice.priceSocket_4,
    priceSocket_5: currentPrice.priceSocket_5,
    tradeMargin: currentPrice.tradeMargin_08,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_1: {
      lengthInputVoltage: ["0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0"],
      numberSocket: ["1", "2", "3"],
      lengthOutputVoltage: ["1.0", "2.0", "3.0", "4.0", "5.0"],
      squareCable: ["3 * 2.5", "3 * 4.0"],
      productionTime: ["за 2 дні"],
    },
    set_2: {
      lengthInputVoltage: ["0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0"],
      numberSocket: ["4", "5"],
      lengthOutputVoltage: ["1.0", "2.0", "3.0", "4.0", "5.0"],
      squareCable: ["3 * 2.5", "3 * 4.0"],
      productionTime: ["за 4 дні"],
    },
    set_3: {
      lengthInputVoltage: ["0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0"],
      numberSocket: ["1", "2", "3", "4", "5"],
      lengthOutputVoltage: ["1.0", "2.0", "3.0", "4.0", "5.0"],
      squareCable: ["3 * 6.0"],
      productionTime: ["за 4 дні"],
    },
  }
}

const textReferenceInformation = [
  "Дроти 220В використовуються для вхідного підключення інверторів до мережі 220В та вихідного підключення споживачів.",
  "Кабель для вхідного підключення потрібен, якщо ваш інвертор не підключений безпосередньо до щитка та живиться від розетки. Кабель включає в себе стандартний штекер для розетки та кабель відповідної довжини на кінцях якого обжаті штирьові наконечники для зажиму у відповідних роз'ємах інвертора. Переріз кабель визначається потужністю інвертора у відповідності до потужності підключених споживачів.",
  "Кабель для вихідного підключення включає в себе планку з розетками від 1 до 5 штук для підключення споживачів.Другий кінец кабеля має обжаті штирьові наконечники для зажиму у відповідних роз'ємах інвертора. Переріз кабель визначається потужністю інвертора у відповідності до потужності підключених споживачів.",
  "Використовуєтья марка кабеля ПВС відповідного перерізку.Для невеликої потужності(до 1 кВт) — ПВС 3 * 2, 5. Для потужності від 1 до 3 кВт — ПВС 3 * 4, 0. І для потужності більше 3 кВт - ПВС 3 * 6, 0.",
];

export const getCreationButtonProduct_08 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  if (objectButtonProduct.lengthOutputVoltage) {
    nodeTextHTML.push(`<p class='header-name-product'>Кабель вихідний з розетками (${objectButtonProduct.lengthOutputVoltage})</p>`);
  }
  if (objectButtonProduct.lengthInputVoltage) {
    nodeTextHTML.push(`<p class='header-name-product'>Кабель вхідний (${objectButtonProduct.lengthInputVoltage} - ${objectButtonProduct.squareCable})</p>`);
  }

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (true) {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }

  nodeTextHTML.push("</div>");
  // формуємо опис продукту

  if (objectButtonProduct.lengthOutputVoltage) {
    nodeTextHTML.push("<div class='div-description-product'>");
    nodeTextHTML.push("<p class='paragraph-header'>Розетка</p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.numberSocket} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthOutputVoltage} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'> Готовність </p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'> Ціна </p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
    nodeTextHTML.push("</div>");
  }

  if (objectButtonProduct.lengthInputVoltage) {
    nodeTextHTML.push("<div class='div-description-product'>");
    // nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
    // nodeTextHTML.push(`<p class='paragraph-value'>вхідний</p>`);
    nodeTextHTML.push("<p class='paragraph-header'>Довжина</p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthInputVoltage} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'>Кабель</p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.squareCable} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'> Готовність </p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
    nodeTextHTML.push("<p class='paragraph-header'> Ціна </p>");
    nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
    nodeTextHTML.push("</div>");
  }
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_08 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_08 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_2_5 = objProductParameters.infoParametrs.priceCable_2_5;
  const priceCable_4_0 = objProductParameters.infoParametrs.priceCable_4_0;
  const priceCable_6_0 = objProductParameters.infoParametrs.priceCable_6_0;
  const priceSocket_1 = objProductParameters.infoParametrs.priceSocket_1;
  const priceSocket_2 = objProductParameters.infoParametrs.priceSocket_2;
  const priceSocket_3 = objProductParameters.infoParametrs.priceSocket_3;
  const priceSocket_4 = objProductParameters.infoParametrs.priceSocket_4;
  const priceSocket_5 = objProductParameters.infoParametrs.priceSocket_5;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;

  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;
  let priceCurrentSocket = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedInputVoltage = [];
  const buttonsForInputVoltage = ["middle_button_804", "middle_button_805", "middle_button_806", "middle_button_807", "middle_button_808", "middle_button_809", "middle_button_810"];
  const buttonsForInputVoltageAll = ["middle_button_811"];
  for (const nameButton in buttonSubMenu.button_big_8) {
    if (buttonsForInputVoltage.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedInputVoltage.push(buttonSubMenu.button_big_8[nameButton].header);
      }
    }
    if (buttonsForInputVoltageAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedInputVoltage.push("0.5", "1.0", "1.5", "2.0", "3.0", "4.0", "5.0");
      }
    }
  }

  const includedNumberSocket = [];
  const buttonsForNumberSocket = ["middle_button_812", "middle_button_813", "middle_button_814", "middle_button_815", "middle_button_816"];
  const buttonsForNumberSocketAll = ["middle_button_817"];
  for (const nameButton in buttonSubMenu.button_big_8) {
    if (buttonsForNumberSocket.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedNumberSocket.push(buttonSubMenu.button_big_8[nameButton].header);
      }
    }
    if (buttonsForNumberSocketAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedNumberSocket.push("1", "2", "3", "4", "5");
      }
    }
  }

  const includedOutputVoltage = [];
  const buttonsForOutputVoltage = ["middle_button_818", "middle_button_819", "middle_button_820", "middle_button_821", "middle_button_822"];
  const buttonsForOutputVoltageAll = ["middle_button_823"];
  for (const nameButton in buttonSubMenu.button_big_8) {
    if (buttonsForOutputVoltage.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedOutputVoltage.push(buttonSubMenu.button_big_8[nameButton].header);
      }
    }
    if (buttonsForOutputVoltageAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedOutputVoltage.push("1.0", "2.0", "3.0", "4.0", "5.0");
      }
    }
  }

  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_824", "middle_button_825", "middle_button_826"];
  const buttonsForSquareCableAll = ["middle_button_827"];
  for (const nameButton in buttonSubMenu.button_big_8) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_8[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedSquareCable.push("3 * 2.5", "3 * 4.0", "3 * 6.0");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_828", "middle_button_829"];
  const buttonsForProductionTimeAll = ["middle_button_830"];
  for (const nameButton in buttonSubMenu.button_big_8) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_8[nameButton].status) {
        switch (buttonSubMenu.button_big_8[nameButton].header) {
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
      if (buttonSubMenu.button_big_8[nameButton].status) {
        includedProductionTime.push("за 2 дні", "за 4 дні");
      }
    }
  }

  // Формуємо перелік товару для вихіного кабеля з розеткою
  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];

    objectCurrentSetProduct.numberSocket.forEach(number_socket => {
      if (includedNumberSocket.includes(number_socket)) {
        objectCurrentSetProduct.lengthOutputVoltage.forEach(output_voltage => {
          if (includedOutputVoltage.includes(output_voltage)) {
            objectCurrentSetProduct.squareCable.forEach(square_cable => {
              if (includedSquareCable.includes(square_cable)) {
                objectCurrentSetProduct.productionTime.forEach(production_time => {
                  if (includedProductionTime.includes(production_time)) {
                    indexCountProduct += 1;
                    exportObjectProduct[indexCountProduct] = [];
                    exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                    exportObjectProduct[indexCountProduct]["numberSocket"] = `${number_socket} гнізда`;
                    exportObjectProduct[indexCountProduct]["lengthOutputVoltage"] = `${output_voltage} м`;
                    exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable} кв.мм`;
                    exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
                    // розрахунок вартості продукту
                    switch (number_socket) {
                      case "1":
                        priceCurrentSocket = priceSocket_1;
                        break;
                      case "2":
                        priceCurrentSocket = priceSocket_2;
                        break;
                      case "3":
                        priceCurrentSocket = priceSocket_3;
                        break;
                      case "4":
                        priceCurrentSocket = priceSocket_4;
                        break;
                      case "5":
                        priceCurrentSocket = priceSocket_5;
                        break;
                    }
                    switch (square_cable) {
                      case "3 * 2.5":
                        priceCurrentCable = priceCable_2_5;
                        break;
                      case "3 * 4.0":
                        priceCurrentCable = priceCable_4_0;
                        break;
                      case "3 * 6.0":
                        priceCurrentCable = priceCable_6_0;
                        break;
                    }
                    priceCurrentProduct = 20 * Math.ceil(tradeMargin * (Number(output_voltage) * priceCurrentCable + priceCurrentSocket) / 20);
                    exportObjectProduct[indexCountProduct]["priceProduct"] = `${priceCurrentProduct} грн.`;
                  }
                })
              };
            })
          };
        });
      }
    }
    );
  }

  // Формуємо перелік товару для вхіного кабеля
  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];
    objectCurrentSetProduct.lengthInputVoltage.forEach(input_voltage => {
      if (includedInputVoltage.includes(input_voltage)) {

        objectCurrentSetProduct.squareCable.forEach(square_cable => {
          if (includedSquareCable.includes(square_cable)) {

            objectCurrentSetProduct.productionTime.forEach(production_time => {
              if (includedProductionTime.includes(production_time)) {

                indexCountProduct += 1;
                exportObjectProduct[indexCountProduct] = [];
                exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                exportObjectProduct[indexCountProduct]["lengthInputVoltage"] = `${input_voltage}&nbspм`;
                exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable}&nbspкв.мм`;
                exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
                // розрахунок вартості продукту                
                switch (square_cable) {
                  case "3 * 2.5":
                    priceCurrentCable = priceCable_2_5;
                    break;
                  case "3 * 4.0":
                    priceCurrentCable = priceCable_4_0;
                    break;
                  case "3 * 6.0":
                    priceCurrentCable = priceCable_6_0;
                    break;
                }
                priceCurrentProduct = 20 * Math.ceil(tradeMargin * (Number(input_voltage) * priceCurrentCable) / 20);
                exportObjectProduct[indexCountProduct]["priceProduct"] = `${priceCurrentProduct} грн.`;
              }
            })
          };
        })
      };
    });
  }

  // сортування з видаленням " .грн"
  if (buttonSubMenu.button_big_8["middle_button_802"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
