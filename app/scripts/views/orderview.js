// import Backbone from 'backbone';
// import $ from 'jquery';
// import OrderItemView from './orderitemview';
//
// let orderArea = $('.order');
//
// function renderOrder(orderItems) {
//   const orderItemsDiv = $(`
//   <div>
//   </div>
//   `);
//     orderItems.forEach((item) => {
//         orderItemsDiv.append(OrderItemView(item));
//     });
//
//     orderItems.on('update', () => {
//         orderItemsDiv.empty();
//
//         let subtotal = 0;
//         let tax = 0;
//         let total = 0;
//
//         orderItems.forEach((item) => {
//             let itemPrice = item.get('price');
//             subtotal += itemPrice;
//             tax += itemPrice*0.08;
//             total = tax + subtotal;
//             console.log(total);
//             orderItemsDiv.append(OrderItemView(item));
//         });
//
//         const orderTotal = $(`
//         <div class ="orderSummary">
//           <div class="taxTotal">Tax: $${tax} </div>
//           <div class="orderTotal">Total: $${total}</div>
//           <input type="submit" value="Order Now"></input>
//         </div>
//           `);
//
//
//         $('.orderSummary').remove();
//         // orderArea.append(taxTotal);
//         orderArea.append(orderTotal);
//         // orderArea.append(orderButton);
//
//     });
//     return orderItemsDiv;
// }
//
// export default renderOrder;
