import Backbone from 'backbone';
import $ from 'jquery';
import OrderItemView from './orderitemview';

function renderOrder(orderItems) {
  const orderItemsDiv = $(`
    <div>
    </div>
    `);
    orderItems.forEach((item)=> {
      orderItemsDiv.append(OrderItemView(item));
    });
    orderItems.on('update', () => {
      orderItemsDiv.empty();
      orderItems.forEach((item) => {
        orderItemsDiv.append(OrderItemView(item));
    });

  });
  return orderItemsDiv;
}

export default renderOrder;
