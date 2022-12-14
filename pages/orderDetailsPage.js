import { getOrderTotal } from '../api/orderData';
import clearDOM from '../utils/clearDom';
import currency from '../utils/currency';
import renderToDOM from '../utils/renderToDOM';

const viewOrderDetails = (obj, array) => {
  clearDOM();
  getOrderTotal(obj.firebaseKey).then((orderTotal) => {
    const domString = `
    <h2 class="header">ORDER NAME:<br>${obj.name}</h2>
    <h2 class="header">ORDER TOTAL: <br>${currency(orderTotal)}</h2>
    <hr>
    <div id="itemCards-container" style="display: flex; flex-wrap: wrap;margin-bottom: 35px;"></div>
    ${obj.statusOpen ? `<div class="btn-margin"><button class="btn btn-yellow gap-2 col-3 m-1" type="button" id="add-item-btn--${obj.firebaseKey}">Add Item</button>
    <button class="btn btn-pink gap-2 col-3 m-1" id="go-to-payment-btn--${obj.firebaseKey}" type="button">Go To Payment</button></div>` : ''}
    `;
    renderToDOM('#main', domString);

    let cardString = '';
    array.forEach((item) => {
      cardString += `
      <div class="card w-50 m-2 item-card">
        <div class="card-body">
          <h5 class="card-title item-name">${item.itemName}</h5>
          <h5 class="card-text item-price">Price: ${currency(item.price)}</h5>
          <div class="card-body text-start">
          ${obj.statusOpen ? `<a href="#" class="card-link edit" id="edit-item-btn--${item.firebaseKey}">Edit Item</a>
          <a href="#" class="card-link delete" id="delete-item-btn--${item.firebaseKey}">Delete Item</a>` : ''}
          </div>
        </div>
      </div>`;
    });
    renderToDOM('#itemCards-container', cardString);
  });
};

export default viewOrderDetails;
