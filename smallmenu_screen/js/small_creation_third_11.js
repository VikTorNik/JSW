import { cartChoice } from "../../cart/js/cart_choice.js";
import { cartWait } from "../../cart/js/cart_wait.js";
import { currentRequiredOrdering } from "../../smallmenu_screen/js/object_current_price.js";
import { windowOrientation } from "../../index.js";


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
      if (cartChoice.length > 0) {
        let numberProduct = 0;
        // розбираємо об'єкт на таблицю
        nodeTextHTML.push('<table class="table-ordering">');
        nodeTextHTML.push('<caption class="header-placing-an-order">Перелік товарів для оформлення</caption>');

        nodeTextHTML.push('<thead class="thead-ordering">');
        nodeTextHTML.push("<tr>")
        nodeTextHTML.push('<th class="th-number">№</th>')
        nodeTextHTML.push('<th class="th-name">Найменування</th>');
        nodeTextHTML.push('<th class="th-characteristic">Характеристики</th>');
        nodeTextHTML.push('<th class="th-readiness">Готовність</th>');
        nodeTextHTML.push('<th class="th-price">Ціна</th>');
        nodeTextHTML.push("</tr>");
        nodeTextHTML.push("</thead>");

        nodeTextHTML.push("<tbody>");
        let currentProduct;
        cartChoice.forEach(choice => {
          numberProduct += 1;
          currentProduct = new DOMParser().parseFromString(choice.outerHTML, "text/html");
          const divs = currentProduct.querySelectorAll('p');

          nodeTextHTML.push("<tr>");
          nodeTextHTML.push(`<td class="td-order-product">${numberProduct}</td>`);
          nodeTextHTML.push(`<td class="td-order-product">${divs[0].innerHTML}</td>`);
          nodeTextHTML.push('<td class="td-order-product">');
          for (let i = 1; i <= divs.length - 5; i++) {
            nodeTextHTML.push(divs[i].innerHTML, " ");
            if ((i % 2 === 0) & (i !== divs.length - 5)) { nodeTextHTML.push("- "); }
          }
          nodeTextHTML.push("</td>");
          nodeTextHTML.push(`<td class="td-order-product">${divs[divs.length - 3].innerHTML}</td>`);
          nodeTextHTML.push(`<td class="td-order-product">${divs[divs.length - 1].innerHTML}</td>`);
          nodeTextHTML.push("</tr>");
        });

        const [_, sumOrder] = getTotalSumTotalAmount(cartChoice);
        nodeTextHTML.push("<tr>");
        nodeTextHTML.push('<td class="td-total-product" colspan="4">Загальна сума</td>');
        nodeTextHTML.push(`<td class="td-total-product">${sumOrder} грн.</td>`);
        nodeTextHTML.push("</tr>");

        nodeTextHTML.push("</tbody>");
        nodeTextHTML.push("</table>");

        nodeTextHTML.push('<form action ="#" id="form_delivery" method="post">');
        nodeTextHTML.push('<p class="header-placing-an-order">Оформлення доставки</p>');

        // оформлення через ОЛХ - доставку   <----> частковий накладний платіж
        nodeTextHTML.push('<fieldset class="fieldset-order">');
        nodeTextHTML.push('<legend>&nbspВиберіть варіант оформлення доставки&nbsp</legend>')
        nodeTextHTML.push('<div class="radio-div radio-div-delivery">');

        if (currentRequiredOrdering.olx_radio) {
          nodeTextHTML.push('<input type="radio" id="olx" class="input-radio" name="delivery" checked>')
        } else { nodeTextHTML.push('<input type="radio" id="olx" class="input-radio" name="delivery">') };
        nodeTextHTML.push('<label class="label-radio" for="olx"><span>Оформлення через ОЛХ-доставку</span></label>');

        // якщо портретна орієнтація, то робимо з нового рядка
        if (!windowOrientation) { nodeTextHTML.push('</div><div class="radio-div radio-div-delivery">') };

        if (currentRequiredOrdering.after_payment_radio) {
          nodeTextHTML.push('<input type="radio" id="after_payment" class="input-radio" name="delivery" checked>');
        } else { nodeTextHTML.push('<input type="radio" class="input-radio" id="after_payment" name="delivery">'); }
        nodeTextHTML.push('<label class="label-radio" for="after_payment"><span>Накладний платіж з частковою передплатою</span></label>');

        nodeTextHTML.push('</div>');
        nodeTextHTML.push('</fieldset>');

        //!   оформлення через ОЛХ - доставку
        //   * вайбер       <---->     ел.пошта
        //   * коментар до замовлення - не обов'язково
        nodeTextHTML.push('<fieldset class="fieldset-order">');
        nodeTextHTML.push('<legend>&nbspКонтактна і додаткова інформація по замовленню&nbsp</legend>')
        nodeTextHTML.push('<div>');
        nodeTextHTML.push('<input type="text" id="email" name="email" inputmode="none" autocomplete="on" minlength="6" pattern="[a-zA-Z0-9.%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$" required>');
        nodeTextHTML.push('<label for="email">Електронна пошта</label>');

        // якщо портретна орієнтація, то робимо з нового рядка
        if (!windowOrientation) { nodeTextHTML.push('</div><div>') };

        nodeTextHTML.push('<input type="text" id="viber" name="viber" inputmode="none" autocomplete="on" minlength="7" pattern="[0-9]{7}" required>');
        nodeTextHTML.push('<label for="viber">Вайбер/телефон</label>');
        nodeTextHTML.push('</div>');
        nodeTextHTML.push('<div>');
        nodeTextHTML.push('<textarea id="addinginfo" name="addinginfo" inputmode="none" autocomplete="off" placeholder="За потреби, напишіть в цьому полі додаткову пояснювальну інформацію по замовленню"></textarea>');
        nodeTextHTML.push('</div>');
        nodeTextHTML.push('</fieldset>');

        //!   частковий накладний платіж
        //   * Ім'я      
        //   * місто (селище) / район / область
        //   * Нова пошта       <---->     Укрпошта
        //   * № відділення     <---->     індекс      
        nodeTextHTML.push('<fieldset id="fieldset_after_payment" class="fieldset-order">');
        nodeTextHTML.push('<legend>&nbspНакладний платіж з частковою передплатою&nbsp</legend>')
        nodeTextHTML.push('<div>');
        nodeTextHTML.push('<input type="text" id="name_client" name="name_client" inputmode="none" autocomplete="on" minlength="2" required>');
        nodeTextHTML.push('<label for="name_client">Ім`я</label>');
        nodeTextHTML.push('<input type="text" id="surname_client" name="surname_client" inputmode="none" autocomplete="on" minlength="2" required>');
        nodeTextHTML.push('<label for="surname_client">Прізвище</label>');

        nodeTextHTML.push('</div><div>')
        nodeTextHTML.push('<label for="city">Місто (селище), район, область</label>');
        // якщо портретна орієнтація, то робимо з нового рядка
        if (!windowOrientation) { nodeTextHTML.push('</div><div>') };
        nodeTextHTML.push('<input type="text" id="city" inputmode="none"  autocomplete="on" minlength="3" required>');

        nodeTextHTML.push('<fieldset class="fieldset-order">');
        nodeTextHTML.push('<legend>&nbspСлужба доставки&nbsp</legend>')
        nodeTextHTML.push('<div class="radio-div">');

        if (currentRequiredOrdering.novapost_radio) {
          nodeTextHTML.push('<input type="radio" id="novapost" class="input-radio" name="post" checked>');
        } else { nodeTextHTML.push('<input type="radio" id="novapost" class="input-radio" name="post">') };

        nodeTextHTML.push('<label class="label-radio" for="novapost"><span>«Нова пошта», відділення</span></label>');
        nodeTextHTML.push('<input type="text" id="numberdepartment" name="numberdepartment" inputmode="none" autocomplete="on" required>');

        // якщо портретна орієнтація, то робимо з нового рядка
        if (!windowOrientation) { nodeTextHTML.push('</div><div class="radio-div">') };

        if (currentRequiredOrdering.ukrpost_radio) {
          nodeTextHTML.push('<input type="radio" id="ukrpost" class="input-radio" name="post" checked>');
        } else { nodeTextHTML.push('<input type="radio" id="ukrpost" class="input-radio" name="post">') };

        nodeTextHTML.push('<label class="label-radio" for="ukrpost"><span>«Укрпошта», індекс</span></label>');
        nodeTextHTML.push('<input type="text" id="index" inputmode="none" autocomplete="on" minlength="5" maxlength="5" required>');


        nodeTextHTML.push('</div>');
        nodeTextHTML.push('</fieldset>');

        nodeTextHTML.push('</div>');


        nodeTextHTML.push('</fieldset>');

        // Згода на обробку даних та умови використання сайту
        nodeTextHTML.push('<fieldset class="fieldset-order">');
        nodeTextHTML.push('<legend>&nbspЗгода на обробку даних та умови використання сайту&nbsp</legend>')
        nodeTextHTML.push('<div class="checkbox-div">');
        // «Даю згоду на обробку персональних даних»
        // «Погоджуюся з політикою конфіденційності та умовами використання сайту»
        nodeTextHTML.push('<input type="checkbox" id="agreementPersonal" name="agreement" class="checkbox-input" checked>');
        nodeTextHTML.push('<label for="agreementPersonal" class="checkbox-label"><span>Даю &nbsp<button type="button" id="buttonAgreement">згоду</button> &nbsp на обробку персональних даних</span></label>');
        // nodeTextHTML.push('<label for="agreementPersonal" class="checkbox-label"><span>Даю згоду на обробку персональних даних</span></label>');
        nodeTextHTML.push('</div><div class="checkbox-div">');
        nodeTextHTML.push('<input type="checkbox" id="agreementSite" name="agreement" class="checkbox-input" checked>');
        // nodeTextHTML.push('<label for="agreementSite" class="checkbox-label"><span>Погоджуюся з політикою конфіденційності та умовами використання сайту</span></label>');
        nodeTextHTML.push('<label for="agreementSite" class="checkbox-label"><span>Погоджуюся з політикою конфіденційності та &nbsp<button type="button" id="buttonConditions">умовами</button> &nbsp використання сайту</span></label>');

        nodeTextHTML.push('</div>');
        nodeTextHTML.push('</fieldset>');

        nodeTextHTML.push('<button class="button-submit" type="submit">Відправити замовлення в роботу</button>');
        // nodeTextHTML.push('<button type="button" id="testbutton">Тестова кнопка</button>');
        nodeTextHTML.push('</form>');
      };
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
