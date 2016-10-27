import $ from 'jquery';
import Backbone from 'backbone';
import renderMenuItem from './menuitem';

function renderCourseList(entreeItems) {
  const ul = $(`
      <ul>
      </ul>
    `);
    entreeItems.forEach((item) => {
      ul.append(renderMenuItem(item));
    });

  entreeItems.on('update', () => {
    entreeItems.forEach((item) => {
      ul.append(renderMenuItem(item));
      console.log(entreeItems);
    });
});
    return ul;
}

export default renderCourseList;
