import $ from 'jquery';
import Backbone from 'backbone';

function renderMenuItem(item) {
  const li = $(`
    <li class ="entreeitems">
      ${item.get('item')}
    </li>
    `);
return li;
}
export default renderMenuItem;
