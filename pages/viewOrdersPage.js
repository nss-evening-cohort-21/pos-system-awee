import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = (arr) => {
  clearDOM();
  if (arr.length === 0) {
    const domString = `
    <h1>No Orders!</h1>
  `;
    renderToDOM('#main', domString);
  } else {
    const domString = `
    <h1 class="header" id="viewOrdersHeading">All Orders</h1>
    <div id="orderCardsDiv"></div>
  `;
    renderToDOM('#main', domString);
    let cardString = '';
    arr.forEach((item) => {
      cardString += `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" id="orderCardName">${item.name}</h5>
      <h6 class="card-subtitle mb-2" id="orderCardStatus">${item.statusOpen ? 'OPEN' : 'CLOSED'}</h6>
      <p class="card-text cust-info" id="orderCardPhone">${item.phone}</p>
      <p class="card-text cust-info" id="orderCardEmail">${item.email}</p>
      <p class="card-text order-type" id="orderCardType">${item.orderType}</p>
      <a href="#" class="card-link details" id="orderCardDetails--${item.firebaseKey}">Details</a>
      <a href="#" class="card-link edit" id="orderCardEdit--${item.firebaseKey}">Edit</a>
      ${item.statusOpen ? `<a href="#" class="card-link delete" id="orderCardDelete--${item.firebaseKey}">Delete</a>` : ''}
    </div>
  </div>
      `;
      renderToDOM('#orderCardsDiv', cardString);
    });
  }
};

export default viewOrdersPage;
