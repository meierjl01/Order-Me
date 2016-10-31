import $ from 'jquery';

function renderOrder(item, orderItem) {
  let oneOrder = $(`<div class ="order-items">
    <div>${item.name}
    $${item.price}</div>
    </div>
  `);

  return oneOrder;
}

export default renderOrder;
