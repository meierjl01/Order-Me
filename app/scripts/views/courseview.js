import $ from 'jquery';
import menuItem from './menuItem';

function renderCourseList(items) {
  const ul = $(`
      <ul>
      </ul>
    `);
    item.forEach((item) => {
      ul.append(renderMenuItem(item));
    });
    return ul;
}

export default renderCourseList;
