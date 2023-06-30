import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";

const objectProductParameters = {
  infoParametrs: {
    lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    widthTire: ["15", "16", "20", "25", "30", "40", "50"],
    widthThickness: ["2", "3", "4", "5"],
    typeMaterial: ["мідь", "алюміній"],
    productionTime: ["за 1 день", "2 д.", "за 4 дні"],

    priceAluminum: 300,
    priceCopper: 900,
    densityCopper: 8.9,
    densityAluminum: 2.7,
    tradeMargin: 1.26,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_copper_21: {
      typeMaterial: ["мідь"],
      widthThickness: ["2"],
      widthTire: ["16", "20"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 1 день"],
    },
    set_copper_22: {
      typeMaterial: ["мідь"],
      widthThickness: ["2"],
      widthTire: ["25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_copper_31: {
      typeMaterial: ["мідь"],
      widthThickness: ["3"],
      widthTire: ["20", "25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 2 дні"],
    },
    set_copper_32: {
      typeMaterial: ["мідь"],
      widthThickness: ["3"],
      widthTire: ["30", "40"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_copper_41: {
      typeMaterial: ["мідь"],
      widthThickness: ["4"],
      widthTire: ["20", "25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 2 дні"],
    },
    set_copper_42: {
      typeMaterial: ["мідь"],
      widthThickness: ["4"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_copper_51: {
      typeMaterial: ["мідь"],
      widthThickness: ["5"],
      widthTire: ["20", "25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 2 дні"],
    },
    set_copper_52: {
      typeMaterial: ["мідь"],
      widthThickness: ["5"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_aluminum_21: {
      typeMaterial: ["алюміній"],
      widthThickness: ["2"],
      widthTire: ["15", "20", "25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 2 дні"],
    },
    set_aluminum_22: {
      typeMaterial: ["алюміній"],
      widthThickness: ["2"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_aluminum_31: {
      typeMaterial: ["алюміній"],
      widthThickness: ["3"],
      widthTire: ["20", "25"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 2 дні"],
    },
    set_aluminum_32: {
      typeMaterial: ["алюміній"],
      widthThickness: ["3"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_aluminum_41: {
      typeMaterial: ["алюміній"],
      widthThickness: ["4"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
    set_aluminum_51: {
      typeMaterial: ["алюміній"],
      widthThickness: ["5"],
      widthTire: ["30", "40", "50"],
      lengthTire: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
      productionTime: ["за 4 дні"],
    },
  }
}

const textReferenceInformation = [
  " Тверда шина мідна і алюмінієва  ....",

];

export const getCreationButtonProduct_07 = (objectButtonProduct) => {
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
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.lengthTire}</p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Ширина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.widthTire} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Товщина</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.widthThickness} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Матеріал</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.typeMaterial} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Термін</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'>Ціна</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_07 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_07 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceAluminum = objProductParameters.infoParametrs.priceAluminum;
  const priceCopper = objProductParameters.infoParametrs.priceCopper;
  const densityCopper = objProductParameters.infoParametrs.densityCopper;
  const densityAluminum = objProductParameters.infoParametrs.densityAluminum;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;  
  let indexCountProduct = 0;
  let priceCurrentMaterial = 0;
  let densityCurrentMaterial = 0;
  let priceCurrentProduct = 0;


  // масиви допустимих значень після нажатих кнопок
  const includedLengthTire = [];
  const buttonsForLengthTire = ["middle_button_707", "middle_button_708", "middle_button_709", "middle_button_710", "middle_button_711", "middle_button_712", "middle_button_713", "middle_button_714", "middle_button_715", "middle_button_716"];
  const buttonsForLengthTireAll = ["middle_button_717"];
  for (const nameButton in buttonSubMenu.button_big_7) {
    if (buttonsForLengthTire.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedLengthTire.push(buttonSubMenu.button_big_7[nameButton].header);
      }
    }
    if (buttonsForLengthTireAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedLengthTire.push("5", "10", "15", "20", "25", "30", "35", "40", "45", "50");
      }
    }
  }

  const includedWidthTire = [];
  const buttonsForWidthTire = ["middle_button_723", "middle_button_724", "middle_button_725", "middle_button_726", "middle_button_727", "middle_button_728", "middle_button_729"];
  const buttonsForWidthTireAll = ["middle_button_730"];
  for (const nameButton in buttonSubMenu.button_big_7) {
    if (buttonsForWidthTire.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedWidthTire.push(buttonSubMenu.button_big_7[nameButton].header);
      }
    }
    if (buttonsForWidthTireAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedWidthTire.push("15", "16", "20", "25", "30", "40", "50");
      }
    }
  }

  const includedWidthThickness = [];
  const buttonsForWidthThickness = ["middle_button_718", "middle_button_719", "middle_button_720", "middle_button_721"];
  const buttonsForWidthThicknessAll = ["middle_button_722"];
  for (const nameButton in buttonSubMenu.button_big_7) {
    if (buttonsForWidthThickness.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedWidthThickness.push(buttonSubMenu.button_big_7[nameButton].header);
      }
    }
    if (buttonsForWidthThicknessAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedWidthThickness.push("2", "3", "4", "5");
      }
    }
  }

  const includedTypeMaterial = [];
  const buttonsForTypeMaterial = ["middle_button_704", "middle_button_705"];
  const buttonsForTypeMaterialAll = ["middle_button_706"];
  for (const nameButton in buttonSubMenu.button_big_7) {
    if (buttonsForTypeMaterial.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedTypeMaterial.push(buttonSubMenu.button_big_7[nameButton].header);
      }
    }
    if (buttonsForTypeMaterialAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedTypeMaterial.push("мідь", "алюміній");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_731", "middle_button_732", "middle_button_733"];
  const buttonsForProductionTimeAll = ["middle_button_734"];
  for (const nameButton in buttonSubMenu.button_big_7) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_7[nameButton].status) {
        switch (buttonSubMenu.button_big_7[nameButton].header) {
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
      if (buttonSubMenu.button_big_7[nameButton].status) {
        includedProductionTime.push("за 1 день", "за 2 дні", "за 4 дні");
      }
    }
  }

  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];

    objectCurrentSetProduct.lengthTire.forEach(length_tire => {
      if (includedLengthTire.includes(length_tire)) {

        objectCurrentSetProduct.widthTire.forEach(width_tire => {
          if (includedWidthTire.includes(width_tire)) {

            objectCurrentSetProduct.widthThickness.forEach(width_thickness => {
              if (includedWidthThickness.includes(width_thickness)) {

                objectCurrentSetProduct.typeMaterial.forEach(type_material => {
                  if (includedTypeMaterial.includes(type_material)) {

                    objectCurrentSetProduct.productionTime.forEach(production_time => {
                      if (includedProductionTime.includes(production_time)) {

                        indexCountProduct += 1;
                        exportObjectProduct[indexCountProduct] = [];
                        exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                        exportObjectProduct[indexCountProduct]["widthTire"] = `${width_tire} мм`;
                        exportObjectProduct[indexCountProduct]["lengthTire"] = `${length_tire} см.`;
                        exportObjectProduct[indexCountProduct]["widthThickness"] = `${width_thickness} мм`;
                        exportObjectProduct[indexCountProduct]["typeMaterial"] = `${type_material}`;
                        exportObjectProduct[indexCountProduct]["productionTime"] = `${production_time}`;
                        // розрахунок вартості продукту
                        switch (type_material) {
                          case "мідь":
                            priceCurrentMaterial = priceCopper;
                            densityCurrentMaterial = densityCopper;
                            break;
                          case "алюміній":
                            priceCurrentMaterial = priceAluminum;
                            densityCurrentMaterial = densityAluminum;
                            break;
                        }
                        priceCurrentProduct = 10 * Math.ceil(tradeMargin * priceCurrentMaterial * densityCurrentMaterial * (Number(width_tire) * Number(length_tire) * Number(width_thickness) / 100/1000) / 10);
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
  if (buttonSubMenu.button_big_7["middle_button_702"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
