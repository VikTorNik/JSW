import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["1.5", "2.0", "2.5", "3.0", "4.0", "5.0", "6.0",],
    squareCable: ["10", "16", "25", "35", "50"],
    typeAlligator: ["залізо", "пластик"],
    productionTime: ["готове", "за 1 день", "за 2 дні", "за 4 дні",],
    priceCable_10: currentPrice.priceCable_10,
    priceCable_16: currentPrice.priceCable_16,
    priceCable_25: currentPrice.priceCable_25,
    priceCable_35: currentPrice.priceCable_35,
    priceCable_50: currentPrice.priceCable_50,
    priceAlligatorFerum: currentPrice.priceOneAlligatorFerum,
    priceAlligatorPlastic: currentPrice.priceOneAlligatorPlastic,
    tradeMargin: currentPrice.tradeMargin_01,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      squareCable: ["10"],
      lengthCable: ["1.5", "2.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["готове"],
    },
    set_10_2: {
      squareCable: ["10"],
      lengthCable: ["2.5", "3.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_16_1: {
      squareCable: ["16"],
      lengthCable: ["1.5", "2.0", "2.5", "3.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["готове"],
    },
    set_16_2: {
      squareCable: ["16"],
      lengthCable: ["4.0", "5.0", "6.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_25_1: {
      squareCable: ["25"],
      lengthCable: ["2.0", "2.5", "3.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["готове"],
    },
    set_25_2: {
      squareCable: ["25"],
      lengthCable: ["4.0", "5.0", "6.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_35_1: {
      squareCable: ["35"],
      lengthCable: ["2.0", "2.5", "3.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_35_2: {
      squareCable: ["35"],
      lengthCable: ["4.0", "5.0", "6.0",],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 2 дні"],
    },
    set_50_1: {
      squareCable: ["50"],
      lengthCable: ["2.0", "3.0",],
      typeAlligator: ["залізо"],
      productionTime: ["за 2 дні"],
    },
    set_50_2: {
      squareCable: ["50"],
      lengthCable: ["4.0", "5.0", "6.0",],
      typeAlligator: ["залізо"],
      productionTime: ["за 4 дні"],
    },
  }
}

const textReferenceInformation = [
  "Комплект дротів для пуско-зарядних пристроїв складається з «плюсового» та «мінусового» кабелю з однєї сторони закріплені «крокодили» відповідного кольору, а з іншого мідний наконечник. «Плюсовий» кабель має «крокодил» червоного кольору, а «мінусовий» кабель має «крокодил» чорного кольору.",
  "Довжину кабелю потрібно вибирати мінімально можливою. Чим менша довжина кабелю, тим менша «просадка» напруги й, відповідно, тим більше шансів успішно завершити процедуру пуску двигуна.",
  "Для виготовлення використовується мідний багатожильний провід українського виробництва. Кабель має гумову оболонку, яка не втрачає гнучкості до мінус 40 градусів морозу. Має відповідне маркування — виробник, переріз і дійсно гнучкий навіть при низькій температурі. Кабель додатково оздоблений термоусадкою з клеєм для запобігання окислення.",
  "Звертаємо увагу, що зазвичай у стандартній комплектації до пуско-зарядних пристроїв ви отримаєте комплект кабелів з алюмінієвими жилами всередені.",
  "Можливий вибір між двома типами «крокодилів»: залізними та пластиковими.",
  "Залізні крокодили мають менший розмір та більш компактні ніж пластикові. Дозволяють підключатися у важкодоступних місцях. Їх недоліки в тому, що вони не ізольовані, тобто потрібно бути обережним при підключенні, щоб запобігти короткому замиканню.",
  "Пластикові крокодили - великі, повністю ізольовані. Це робить процедуру прикурювання безпечною та мінімізує ризики короткого замикання. Кабель надійно закріплений безпосередньо до губок.",
  "Обидва типи «крокодилів» мають мідну плетену перемичку між половинами. Напротивагу маленьким зубчикам у звичайних «крокодилів», плетінка забезпечує велику площу контакту при будь-якій формі клем автомобіля. Також вона забезпечує рівномірний розподіл струму між губками.",
  "Велика площа контакту зменшує ризики перегріву і підгоряння кабелю та губок «крокодилів» при великих струмах, чи довготривалій процедурі прикурювання.",
];

export const getCreationButtonProduct_01 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  nodeTextHTML.push(`<p class='header-name-product'>Пуско-зарядні дроти - ${objectButtonProduct.lengthCable} - ${objectButtonProduct.squareCable}</p>`);

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");

  if (objectButtonProduct.typeAlligator === "залізо") {
    switch (objectButtonProduct.squareCable.slice(0, 2)) {
      case "10":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/m-1.jpg' alt='Cable 10 square, metal alligator'>");
        break;
      case "16":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/m-2.jpg' alt='Cable 16 square, metal alligator'>");
        break;
      case "25":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/m-3.jpg' alt='Cable 25 square, metal alligator'>");
        break;
      case "35":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/m-4.jpg' alt='Cable 35 square, metal alligator'>");
        break;
      case "50":
        nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/m-5.jpg' alt='Cable 35 square, metal alligator'>");
        break;
    }
  }
  if (objectButtonProduct.typeAlligator === "пластик") {
    switch (objectButtonProduct.squareCable.slice(0, 2)) {
      case "10":
        if (Number(objectButtonProduct.lengthCable.slice(0, 3)) <= 2.5) {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-1.jpg' alt='Cable 10 square, plastic alligator'>");
        }
        else {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-2.jpg' alt='Cable 10 square, plastic alligator'>");
        }
        break;
      case "16":
        if (Number(objectButtonProduct.lengthCable.slice(0, 3)) <= 2) {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-3.jpg' alt='Cable 16 square, plastic alligator'>");
        }
        else {
          if (Number(objectButtonProduct.lengthCable.slice(0, 3)) <= 4) {
            nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-4.jpg' alt='Cable 16 square, plastic alligator'>");
          } else {
            nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-5.jpg' alt='Cable 16 square, plastic alligator'>");
          }
        }
        break;
      case "25":
        if (Number(objectButtonProduct.lengthCable.slice(0, 3)) <= 3) {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-6.jpg' alt='Cable 25 square, plastic alligator'>");
        }
        else {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-7.jpg' alt='Cable 25 square, plastic alligator'>");
        }
        break;
      case "35":
        if (Number(objectButtonProduct.lengthCable.slice(0, 3)) <= 3) {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-8.jpg' alt='Cable 35 square, plastic alligator'>");
        }
        else {
          nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/01/p-9.jpg' alt='Cable 35 square, plastic alligator'>");
        }
        break;
    }
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
  nodeTextHTML.push("<p class='paragraph-header'> Готовність </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.productionTime} </p>`);
  nodeTextHTML.push("<p class='paragraph-header'> Ціна </p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.priceProduct} </p>`);
  nodeTextHTML.push("</div>");

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getReferenceInformationProduct_01 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_01 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_10 = objProductParameters.infoParametrs.priceCable_10;
  const priceCable_16 = objProductParameters.infoParametrs.priceCable_16;
  const priceCable_25 = objProductParameters.infoParametrs.priceCable_25;
  const priceCable_35 = objProductParameters.infoParametrs.priceCable_35;
  const priceCable_50 = objProductParameters.infoParametrs.priceCable_50;
  const priceAlligatorFerum = objProductParameters.infoParametrs.priceAlligatorFerum;
  const priceAlligatorPlastic = objProductParameters.infoParametrs.priceAlligatorPlastic;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;
  let priceCurrentAlligator = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_112", "middle_button_113", "middle_button_114", "middle_button_115", "middle_button_116"];
  const buttonsForSquareCableAll = ["middle_button_117"];
  for (const nameButton in buttonSubMenu.button_big_1) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_1[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35", "50");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_104", "middle_button_105", "middle_button_106", "middle_button_107", "middle_button_108", "middle_button_109", "middle_button_110"];
  const buttonsForLengthCableAll = ["middle_button_111"];
  for (const nameButton in buttonSubMenu.button_big_1) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_1[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedLengthCable.push("1.5", "2.0", "2.5", "3.0", "4.0", "5.0", "6.0");
      }
    }
  }

  const includedTypeAlligator = [];
  const buttonsForTypeAlligator = ["middle_button_118", "middle_button_119"];
  const buttonsForTypeAlligatorAll = ["middle_button_120"];
  for (const nameButton in buttonSubMenu.button_big_1) {
    if (buttonsForTypeAlligator.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedTypeAlligator.push(buttonSubMenu.button_big_1[nameButton].header);
      }
    }
    if (buttonsForTypeAlligatorAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedTypeAlligator.push("залізо", "пластик");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_121", "middle_button_122", "middle_button_123", "middle_button_124"];
  const buttonsForProductionTimeAll = ["middle_button_125"];
  for (const nameButton in buttonSubMenu.button_big_1) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_1[nameButton].status) {
        switch (buttonSubMenu.button_big_1[nameButton].header) {
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
      if (buttonSubMenu.button_big_1[nameButton].status) {
        includedProductionTime.push("готове", "за 1 день", "за 2 дні", "за 4 дні");
      }
    }
  }

  for (const indexProduct in objProductParameters.setParametrs) {
    const objectCurrentSetProduct = objProductParameters.setParametrs[indexProduct];
    objectCurrentSetProduct.squareCable.forEach(square_cable => {
      if (includedSquareCable.includes(square_cable)) {
        objectCurrentSetProduct.lengthCable.forEach(length_cable => {
          if (includedLengthCable.includes(length_cable)) {
            objectCurrentSetProduct.typeAlligator.forEach(type_alligator => {
              if (includedTypeAlligator.includes(type_alligator)) {
                objectCurrentSetProduct.productionTime.forEach(production_time => {
                  if (includedProductionTime.includes(production_time)) {
                    indexCountProduct += 1;
                    exportObjectProduct[indexCountProduct] = [];
                    exportObjectProduct[indexCountProduct]["ID"] = `product_${indexCountProduct}`;
                    exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable}&nbspм`;
                    exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable}&nbspкв.мм.`;
                    exportObjectProduct[indexCountProduct]["typeAlligator"] = `${type_alligator}`;
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
                    switch (type_alligator) {
                      case "залізо":
                        priceCurrentAlligator = priceAlligatorFerum;
                        break;
                      case "пластик":
                        priceCurrentAlligator = priceAlligatorPlastic;
                        break;
                    }
                    priceCurrentProduct = 20 * Math.ceil(tradeMargin * (Number(length_cable) * priceCurrentCable * 2 + priceCurrentAlligator) / 20);
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
  // сортування з видаленням " .грн"
  if (buttonSubMenu.button_big_1["middle_button_102"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
