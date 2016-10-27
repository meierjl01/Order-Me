import $ from 'jquery';
import Backbone from 'backbone';



function renderMenuItem(model) {
  const li = $(`
    <li>
      ${model.get('item', 'price', 'description')}
    `);
    // items.forEach((item) => {
    //   ul.append(renderMenuItem())
    // });

}

export default renderMenuItem;
