import Backbone from 'backbone';
import $ from 'jquery';

function OrderItemView(orderItems) {
  let orderDiv = $(`
    <div>
    ${orderItems.get('name')}
    ${orderItems.get('price')}
    <button class="button">Delete</button>
    </div>
    `);

    orderDiv.find('.button').on('click', (e) => {
      orderItems.destroy({
        success: function(){
          console.log('deleted item');
        }
      }

      );
    });

    return orderDiv;
}


export default OrderItemView;
