import { cartChoice } from "../../cart/js/cart_choice.js";
import { cartWait } from "../../cart/js/cart_wait.js";

export const getReferenceInformationProduct_11 = (headerSubMenu) => {
  const nodeTextHTML = [];
  nodeTextHTML.push("<div class='div-menu-cart'>");
  switch (headerSubMenu) {
    case "Товар у кошику":
      nodeTextHTML.push("<div class='div-button-and-total'>");
      nodeTextHTML.push("<div class='div-total-amount'>");
      const [amountChoice, sumChoice] = getTotalSumTotalAmount(cartChoice);
      nodeTextHTML.push("<p class='total-header'>Кількість товарів</p>");
      nodeTextHTML.push(`<p class='total-value'> ${amountChoice}</p>`);
      nodeTextHTML.push("<p class='total-header'>Загальна сума</p>");
      nodeTextHTML.push(`<p class='total-value'> ${sumChoice} грн.</p>`);
      nodeTextHTML.push("</div>");
      nodeTextHTML.push("<div class='div-button-ordering'>");
      if (cartChoice.length > 0) {
        nodeTextHTML.push(`<button class='button-ordering' id='button-goto-ordering'><p class='header-ordering'>Оформлення замовлення</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering' id='button-wait-moving'><p class='header-ordering'>Перенести все у список вподобань</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering' id='button-cart-deliting'><p class='header-ordering'>Видалити товари з кошика</p></button>`);
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("<div class='div-cart-product'>");
        let numberButtonChoice = 0;
        cartChoice.forEach(choice => {
          nodeTextHTML.push("<div class='div-product-and-button'>");
          nodeTextHTML.push(choice.outerHTML);
          nodeTextHTML.push("<div class='div-button-delete-movie'>");
          nodeTextHTML.push(`<button class='button-cart-delete' id=${numberButtonChoice}><p class='header-edit-cart'>Видалити</p></button>`);
          nodeTextHTML.push(`<button class='button-cart-move' id=${numberButtonChoice}><p class='header-edit-cart'>Перенести у вподобання</p></button>`);
          numberButtonChoice += 1;
          nodeTextHTML.push("</div>");
          nodeTextHTML.push("</div>");
        });
      } else { // відключаємо кнопки через css
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Оформлення замовлення</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Перенести все у список вподобань</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Видалити товари з кошика</p></button>`);
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("</div>");
      }
      nodeTextHTML.push("</div>");
      break;

    case "Список вподобань":
      nodeTextHTML.push("<div class='div-button-and-total'>");
      nodeTextHTML.push("<div class='div-total-amount'>");
      const [amountWait, sumWait] = getTotalSumTotalAmount(cartWait);
      nodeTextHTML.push("<p class='total-header'>Кількість товарів</p>");
      nodeTextHTML.push(`<p class='total-value'> ${amountWait}</p>`);
      nodeTextHTML.push("<p class='total-header'>Загальна сума</p>");
      nodeTextHTML.push(`<p class='total-value'> ${sumWait} грн.</p>`);
      nodeTextHTML.push("</div>");
      nodeTextHTML.push("<div class='div-button-ordering'>");
      if (cartWait.length > 0) {
        nodeTextHTML.push(`<button class='button-ordering' id='button-cart-moving'><p class='header-ordering'>Перенести товари у кошик</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering' id='button-wait-deliting'><p class='header-ordering'>Видалити товари зі списку вподобань</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering' id='button-goto-cart'><p class='header-ordering'>Перейти у кошик</p></button>`);
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("<div class='div-cart-product'>");
        let numberButtonWait = 0;
        cartWait.forEach(wait => {
          nodeTextHTML.push("<div class='div-product-and-button'>");
          nodeTextHTML.push(wait.outerHTML);
          nodeTextHTML.push("<div class='div-button-delete-movie'>");
          nodeTextHTML.push(`<button class='button-wait-delete' id=${numberButtonWait}><p class='header-edit-cart'>Видалити</p></button>`);
          nodeTextHTML.push(`<button class='button-wait-move' id=${numberButtonWait}><p class='header-edit-cart'>Перенести у кошик</p></button>`);
          numberButtonWait += 1;
          nodeTextHTML.push("</div>");
          nodeTextHTML.push("</div>");
        });
      } else { // відключаємо кнопки через css
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Перенести товари у кошик</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Видалити товари зі списку вподобань</p></button>`);
        nodeTextHTML.push(`<button class='button-ordering-disabled'><p class='header-ordering'>Перейти у кошик</p></button>`);
        nodeTextHTML.push("</div>");
        nodeTextHTML.push("</div>");
      }
      nodeTextHTML.push("</div>");
      break;

    case "Оформлення замовлення":
      // 	форма для заповнення
      //   * ФІ
      //   * телефон
      //   * вайбер
      //   * ел.пошта
      //   * коментар до замовлення
      //   * оформлення через ОЛХ - доставку
      //   * частковий накладний платіж
      //   * перелік товару / загальна сума / термін виготовлення
      nodeTextHTML.push("Оформлення замовлення");
      break;
  }
  nodeTextHTML.push("</div>");
  return nodeTextHTML;
}

const getTotalSumTotalAmount = (cartChoiceWait) => {
  // кількість товарів і загальна сума
  const totalSum = cartChoiceWait.reduce((total, cart) => total + Number(cart.textContent.slice(cart.textContent.indexOf("Ціна") + 4, cart.textContent.length - 6)), 0);
  return [cartChoiceWait.length, totalSum];
};











