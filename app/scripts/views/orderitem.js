import $ from 'jquery';

function renderOrder(item, orderItem) {
  let oneOrder = $(`<div class ="order-items">
    <div>${item.name}</div>
    <div>$${item.price}</div>
    <button>Delete</button>
    </div>
  `);

  return oneOrder;
}

export default renderOrder;
