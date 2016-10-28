import $ from 'jquery';
import Backbone from 'backbone';

function renderMenuItem(item, orderItems) {
  const MenuDiv = $(`
    <div class ="name-price">
      ${item.get('item')}
      ${item.get('price')}
      <div class="description">${item.get('description')}</div>
    </div>
    `);

    MenuDiv.on('click', (e) =>{
      // console.log('hi');
      orderItems.create({
        name: item.get('item'),
        price: item.get('price'),
        id: item.get('id')
      });

});

return MenuDiv;
}
export default renderMenuItem;
