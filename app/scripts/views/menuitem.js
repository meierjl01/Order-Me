import $ from 'jquery';
import Backbone from 'backbone';

function renderMenuItem(item, orderItem) {
  const menuDiv = $(`
    <div class ="name-price">
      ${item.get('item')}
      ${item.get('price')}
      <div class="description">${item.get('description')}</div>
    </div>
    `);

    menuDiv.on('click', (e) =>{
      // console.log('hi');
      orderItem.addItem({
        name: item.get('item'),
        price: item.get('price'),
      });

      orderItem.addPrice(item.get('price'));
      orderItem.calculateTax(item.get('price'));
      orderItem.calculateTotal(item.get('price'));

});

return menuDiv;
}
export default renderMenuItem;
