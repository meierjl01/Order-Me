import Backbone from 'backbone';
import $ from 'jquery';
import renderOrder from './orderitem.js';

function orderItemView(orderItem, orderItems) {
    let orderDiv = $(`<div>
      </div>`);
    $('.order').append(orderDiv);
    orderItem.get('order').forEach((item) => {
        orderDiv.append(renderOrder(item));
    });


    orderItem.on('change', () => {
        orderDiv.empty();
        orderItem.get('order').forEach((item) => {
            orderDiv.append(renderOrder(item));
        });

        orderDiv.find('button').on('click', (e) => {
            // console.log(orderItem);
        });

        let taxDiv = $(`<div class="tax">
        <h3>Tax: $${orderItem.get('tax')}</h3>
      </div>
      `);

        let totalDiv = $(`
          <div class="total">
          <h2>Total: $${orderItem.get('total')}</h2>
          </div>
          `);

        const placeOrder = $(`<button class="order-button">Place Order</button>`);

        orderDiv.append(taxDiv);
        orderDiv.append(totalDiv);
        orderDiv.append(placeOrder);

        placeOrder.on('click', (e) => {
            e.preventDefault();
            // orderItems.create({
            //     order: orderItem.get('order'),
            //     tax: orderItem.get('tax'),
            //     total: orderItem.get('total')
            // });

            location.hash = 'success';
        });

    });

    return orderDiv;
}


export default orderItemView;
