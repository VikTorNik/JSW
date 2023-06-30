import { buttonSubMenu } from "../../smallmenu_screen/js/object_buttonSubMenu.js";

const objectProductParameters = {
  infoParametrs: {
    lengthCable: ["2.5", "2.8", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0",],
    squareCable: ["10", "16", "25", "35",],
    typeAlligator: ["залізо", "пластик"],
    productionTime: ["готове", "за 1 день", "за 2 дні", "за 4 дні",],
    priceCable_10: 80,
    priceCable_16: 120,
    priceCable_25: 175,
    priceCable_35: 240,
    priceAlligatorFerum: 337,
    priceAlligatorPlastic: 516,
    tradeMargin: 1.18,
  },

  // формуємо можливі варіанти (сети) для кожного перерізу кабеля
  setParametrs: {
    set_10_1: {
      squareCable: ["10"],
      lengthCable: ["2.8"],
      typeAlligator: ["залізо"],
      productionTime: ["готове"],
    },
    set_10_2: {
      squareCable: ["10"],
      lengthCable: ["2.5", "3.0"],
      typeAlligator: ["залізо"],
      productionTime: ["за 1 день"],
    },
    set_16_1: {
      squareCable: ["16"],
      lengthCable: ["3.0", "4.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["готове"],
    },
    set_16_2: {
      squareCable: ["16"],
      lengthCable: ["2.5", "5.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_16_3: {
      squareCable: ["16"],
      lengthCable: ["6.0", "7.0", "8.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 2 дні"],
    },
    set_25_1: {
      squareCable: ["25"],
      lengthCable: ["3.0", "4.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["готове"],
    },
    set_25_2: {
      squareCable: ["25"],
      lengthCable: ["5.0", "6.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_25_3: {
      squareCable: ["25"],
      lengthCable: ["7.0", "8.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 4 дні"],
    },
    set_35_1: {
      squareCable: ["35"],
      lengthCable: ["3.0", "4.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 1 день"],
    },
    set_35_2: {
      squareCable: ["35"],
      lengthCable: ["5.0", "6.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 2 дні"],
    },
    set_35_3: {
      squareCable: ["35"],
      lengthCable: ["7.0", "8.0"],
      typeAlligator: ["залізо", "пластик"],
      productionTime: ["за 4 дні"],
    }
  }
}

const textReferenceInformation = [
  "Комплект пускових дротів складається з «плюсового» та «мінусового» кабелю на закінченні якого закріплені «крокодили» відповідного кольору. «Плюсовий» кабель має «крокодили» червоного кольору, а «мінусовий» кабель має «крокодили» чорного кольору.",
  "Довжину кабелю потрібно вибирати мінімально можливої довжини. Чим менша довжина кабелю, тим менша «просадка» напруги й, відповідно, тим більше шансів успішно завершити процедуру прикурювання. Зазвичай для легкових авто буде достатньою довжина кабелю 2,8 - 3,0 метри.",
  "Для виготовлення використовується мідний багатожильний провід українського виробництва. Кабель має гумову оболонку, яка не втрачає гнучкості до мінус 40 градусів морозу. Має відповідне маркування — виробник, переріз і дійсно гнучкий навіть при низькій температурі. Кабель обтиснений мідними наконечниками та додатково оздоблений термоусадкою з клеєм для запобігання окислення.",
  "Звертаємо увагу, що зазвичай в автомобільних магазинах та на ринках на 90% китайська продукція - товсте обплетення та тонкий алюмінієвий кабель усередині.",
  "Можливий вибір між двома типами «крокодилів»: залізними та пластиковими.",
  "Залізні крокодили мають менший розмір та більш компактні ніж пластикові. Дозволяють підключатися у важкодоступних місцях. Їх недоліки в тому, що вони не ізольовані, тобто потрібно бути обережним при підключенні, щоб запобігти короткому замиканню. Також до недоліків, порівняно з пластиковими можна віднести те, що кабель кріпиться не безпосередньо до губок контакту, а до ручки «крокодилу», що дещо збільшує їх опір.",
  "Пластикові крокодили - великі, повністю ізольовані. Це робить процедуру прикурювання безпечною та мінімізує ризики короткого замикання. Кабель надійно закріплений безпосередньо до губок.",
  "Обидва типи «крокодилів» мають мідну плетену перемичку між половинами. Напротивагу маленьким зубчикам у звичайних «крокодилів», плетінка забезпечує велику площу контакту при будь-якій формі клем автомобіля. Також вона забезпечує рівномірний розподіл струму між губками.",
  "Велика площа контакту зменшує ризики перегріву і підгоряння кабелю та губок «крокодилів» при великих струмах, чи довготривалій процедурі прикурювання.",
  "Такі дроти у магазині не продаються – тут мідь повного перерізу, товарний вигляд – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Дроти можна купити – користуватися 5 років і потім продати як мінімум за ті самі гроші. Мідь лише дорожчає. Гумова оболонка не тріскається.",
  "Дозвольте собі придбати якісні дроти, які будуть придатні до використання роками і які не соромно подарувати.",
];

export const getCreationButtonProduct_00 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-button-product'>");

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  if (objectButtonProduct.typeAlligator === "залізо") {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/083.jpg' alt='Image cable'>");
  }
  if (objectButtonProduct.typeAlligator === "пластик") {
    nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/082.jpg' alt='Image cable'>");
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

export const getReferenceInformationProduct_00 = () => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-information-product'>");
  // формуємо опис продукту
  textReferenceInformation.forEach(paragraph => {
    nodeTextHTML.push(`<p class='paragraph-information'>${paragraph}</p>`);
  });

  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

export const getFilteredAssortedProduct_00 = () => {
  const objProductParameters = objectProductParameters;
  const exportObjectProduct = [];
  const priceCable_10 = objProductParameters.infoParametrs.priceCable_10;
  const priceCable_16 = objProductParameters.infoParametrs.priceCable_16;
  const priceCable_25 = objProductParameters.infoParametrs.priceCable_25;
  const priceCable_35 = objProductParameters.infoParametrs.priceCable_35;
  const priceAlligatorFerum = objProductParameters.infoParametrs.priceAlligatorFerum;
  const priceAlligatorPlastic = objProductParameters.infoParametrs.priceAlligatorPlastic;
  const tradeMargin = objProductParameters.infoParametrs.tradeMargin;
  let indexCountProduct = 0;
  let priceCurrentProduct = 0;
  let priceCurrentCable = 0;
  let priceCurrentAlligator = 0;

  // масиви допустимих значень після нажатих кнопок
  const includedSquareCable = [];
  const buttonsForSquareCable = ["middle_button_013", "middle_button_014", "middle_button_015", "middle_button_016"];
  const buttonsForSquareCableAll = ["middle_button_017"];
  for (const nameButton in buttonSubMenu.button_big_0) {
    if (buttonsForSquareCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedSquareCable.push(buttonSubMenu.button_big_0[nameButton].header);
      }
    }
    if (buttonsForSquareCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedSquareCable.push("10", "16", "25", "35");
      }
    }
  }

  const includedLengthCable = [];
  const buttonsForLengthCable = ["middle_button_004", "middle_button_005", "middle_button_006", "middle_button_007", "middle_button_008", "middle_button_009", "middle_button_010", "middle_button_011"];
  const buttonsForLengthCableAll = ["middle_button_012"];
  for (const nameButton in buttonSubMenu.button_big_0) {
    if (buttonsForLengthCable.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedLengthCable.push(buttonSubMenu.button_big_0[nameButton].header);
      }
    }
    if (buttonsForLengthCableAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedLengthCable.push("2.5", "2.8", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0");
      }
    }
  }

  const includedTypeAlligator = [];
  const buttonsForTypeAlligator = ["middle_button_018", "middle_button_019"];
  const buttonsForTypeAlligatorAll = ["middle_button_020"];
  for (const nameButton in buttonSubMenu.button_big_0) {
    if (buttonsForTypeAlligator.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedTypeAlligator.push(buttonSubMenu.button_big_0[nameButton].header);
      }
    }
    if (buttonsForTypeAlligatorAll.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        includedTypeAlligator.push("залізо", "пластик");
      }
    }
  }

  const includedProductionTime = [];
  const buttonsForProductionTime = ["middle_button_021", "middle_button_022", "middle_button_023", "middle_button_024"];
  const buttonsForProductionTimeAll = ["middle_button_025"];
  for (const nameButton in buttonSubMenu.button_big_0) {
    if (buttonsForProductionTime.includes(nameButton)) {
      if (buttonSubMenu.button_big_0[nameButton].status) {
        switch (buttonSubMenu.button_big_0[nameButton].header) {
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
      if (buttonSubMenu.button_big_0[nameButton].status) {
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
                    exportObjectProduct[indexCountProduct]["lengthCable"] = `${length_cable} м`;
                    exportObjectProduct[indexCountProduct]["squareCable"] = `${square_cable} кв.мм.`;
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
                    }
                    switch (type_alligator) {
                      case "залізо":
                        priceCurrentAlligator = priceAlligatorFerum;
                        break;
                      case "пластик":
                        priceCurrentAlligator = priceAlligatorPlastic;
                        break;
                    }
                    priceCurrentProduct = 50 * Math.ceil(tradeMargin * (Number(length_cable) * priceCurrentCable * 2 + priceCurrentAlligator) / 50);
                    exportObjectProduct[indexCountProduct]["priceProduct"] = `${priceCurrentProduct} грн.`;
                    // product_001 [
                    //   ID: "product_1",
                    //   lengthCable: "3 м",
                    //   squareCable: "16 кв.мм.",
                    //   typeAlligator: "метал",
                    //   productionTime: "готове",
                    //   priceProduct: "1250 грн.",
                    // ]
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
  if (buttonSubMenu.button_big_0["middle_button_002"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
