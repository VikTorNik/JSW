import { buttonSubMenu } from "./object_buttonSubMenu.js";
import { currentPrice } from "../../smallmenu_screen/js/object_current_price.js";

const objectProductParameters = {
  infoParametrs: {
    alligatorBooster: ["1 штука", "2 штуки", "4 штуки",],
    massTerminal: ["латунь 200А", "латунь 250А",],
    productionTime: ["готове", "за 1 день", "за 2 дні", "за 4 дні",],
    priceAlligator_1: currentPrice.priceAlligator_1,
    priceAlligator_2: currentPrice.priceAlligator_2,
    priceAlligator_4: currentPrice.priceAlligator_4,
    massTerminal_200: currentPrice.massTerminal_200,
    massTerminal_250: currentPrice.massTerminal_250,
    weightAlligator_1: currentPrice.weightAlligator_1,
    weightMassTerminal_200: currentPrice.weightMassTerminal_200,
    weightMassTerminal_250: currentPrice.weightMassTerminal_250,
    tradeMargin: currentPrice.tradeMargin_04,
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
  "Залізні крокодили використовуються для самостійного виготовлення пускових дротив для «прикурювання». Дозволяють підключатися у важкодоступних місцях. «Крокодили» мають мідну плетену перемичку 16 кв.мм. між половинами, що забезпечує рівноміний розподіл струму між половинками. Напротивагу маленьким зубчикам у звичайних «крокодилів», плетінка забезпечує велику площу контакту при будь-якій формі клем автомобіля. Також вона забезпечує рівномірний розподіл струму між губками. Велика площа контакту зменшує ризики перегріву і підгоряння кабелю та губок «крокодилів» при великих струмах, чи довготривалій процедурі прикурювання.",
  "Латунні клеми маси використовуються у зварювальних апаратах. Якісні італійські латунні клеми доопрацьовані до стану ідеальних. В обох варіантах на 200А і на 250А додадан мідна гнучка перемичка для рівноміного розподілу струму. Центральний гвинт, який з'єднує половинки «крокодилів» ізольований ПВХ трукою для захисту пружини від перегріву і відпуску. Обидві клеми маси для довготривалого використання.",  
  "Параметри клеми маси 200А після доопрацювання — ПВ60 % - 200А, ПВ35 % - 250А. Вага 205г. Під'єднати можна кабель до 25 кв.мм. Наконечник у комплекті. Розкриття губок до 45 мм.",
  "Параметри клеми маси 250А після доопрацювання — ПВ60 % - 250А, ПВ35 % - 300А. Вага 285г. Під'єднати можна кабель до 35 кв.мм. Наконечник у комплекті. Розкриття губок до 55 мм. Зручно тримається на трубах діаметром до 50 мм.",
];

export const getCreationButtonProduct_04 = (objectButtonProduct) => {
  const nodeTextHTML = [];
  nodeTextHTML.push(`<div class='div-button-product' id=${objectButtonProduct.ID}>`);

  // формуємо заголовок товару
  switch (objectButtonProduct.alligatorMass) {
    case "1 штука":
    case "2 штуки":
    case "4 штуки":
      nodeTextHTML.push(`<p class='header-name-product'>Крокодил для прикурювання - ${objectButtonProduct.alligatorMass}</p>`);
      break;
    case "латунь 200А":
    case "латунь 250А":
      nodeTextHTML.push(`<p class='header-name-product'>Клема маси - ${objectButtonProduct.alligatorMass}</p>`);
      break;
  }

  // формуємо фото продукту
  nodeTextHTML.push("<div class='div-image-product'>");
  switch (objectButtonProduct.alligatorMass) {
    case "1 штука":
      nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/04/all-1.jpg' alt='Alligator metall'>");
      break;
    case "2 штуки":
      nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/04/all-2.jpg' alt='Alligator metall'>");
      break;
    case "4 штуки":
      nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/04/all-4.jpg' alt='Alligator metall'>");
      break;
    case "латунь 200А":
      nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/04/mass-200.jpg' alt='Mass 200A'>");
      break;
    case "латунь 250А":
      nodeTextHTML.push("<img class='image-product' src='smallmenu_screen/img/04/mass-250.jpg' alt='Mass 250A'>");
      break;
  }
  nodeTextHTML.push("</div>");

  // формуємо опис продукту
  nodeTextHTML.push("<div class='div-description-product'>");
  nodeTextHTML.push("<p class='paragraph-header'> Матеріал</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.alligatorMaterial} </p>`);

  switch (objectButtonProduct.alligatorMass) {
    case "латунь 200А":
    case "латунь 250А":      
      nodeTextHTML.push("<p class='paragraph-header'> Струм</p>");
      nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.alligatorMass.slice(-4) }</p>`);
      break;
  }

  nodeTextHTML.push("<p class='paragraph-header'> Вага</p>");
  nodeTextHTML.push(`<p class='paragraph-value'> ${objectButtonProduct.weight}&nbspг</p>`);
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
  const weightAlligator_1 = objProductParameters.infoParametrs.weightAlligator_1;
  const weightMassTerminal_200 = objProductParameters.infoParametrs.weightMassTerminal_200;
  const weightMassTerminal_250 = objProductParameters.infoParametrs.weightMassTerminal_250;
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
                exportObjectProduct[indexCountProduct]["alligatorMaterial"] = `залізо`;
                exportObjectProduct[indexCountProduct]["weight"] = weightAlligator_1;
                break;
              case "2 штуки":
                priceCurrentAlligatorMass = priceAlligator_2;
                exportObjectProduct[indexCountProduct]["alligatorMaterial"] = `залізо`;
                exportObjectProduct[indexCountProduct]["weight"] = weightAlligator_1 * 2;
                break;
              case "4 штуки":
                priceCurrentAlligatorMass = priceAlligator_4;
                exportObjectProduct[indexCountProduct]["alligatorMaterial"] = `залізо`;
                exportObjectProduct[indexCountProduct]["weight"] = weightAlligator_1 * 4;
                break;
              case "латунь 200А":
                priceCurrentAlligatorMass = massTerminal_200;
                exportObjectProduct[indexCountProduct]["alligatorMaterial"] = `латунь`;
                exportObjectProduct[indexCountProduct]["weight"] = weightMassTerminal_200;
                break;
              case "латунь 250А":
                priceCurrentAlligatorMass = massTerminal_250;
                exportObjectProduct[indexCountProduct]["alligatorMaterial"] = `латунь`;
                exportObjectProduct[indexCountProduct]["weight"] = weightMassTerminal_250;
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

  // сортування з видаленням " .грн"
  if (buttonSubMenu.button_big_4["middle_button_402"].status) {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) > Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  } else {
    return exportObjectProduct.sort((a, b) => Number(a["priceProduct"].slice(0, -5)) < Number(b["priceProduct"].slice(0, -5)) ? 1 : -1);
  }
}
