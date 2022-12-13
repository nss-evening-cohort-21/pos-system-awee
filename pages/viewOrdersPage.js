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
    <h1>View Orders Page</h1>
    <div id="orderCardsDiv"></div>
  `;
    renderToDOM('#main', domString);
    let cardString = '';
    arr.forEach((item) => {
      cardString += `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" id="orderCardName">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="orderCardStatus">${item.statusOpen ? 'OPEN' : 'CLOSED'}</h6>
      <p class="card-text" id="orderCardPhone">${item.phone}</p>
      <p class="card-text" id="orderCardEmail">${item.email}</p>
      <p class="card-text" id="orderCardType">${item.orderType}</p>
      <a href="#" class="card-link" id="orderCardDetails--${item.firebaseKey}">Details</a>
      <a href="#" class="card-link" id="orderCardEdit--${item.firebaseKey}">Edit</a>
      ${item.statusOpen ? `<a href="#" class="card-link" id="orderCardDelete--${item.firebaseKey}">Delete</a>` : ''}
    </div>
  </div>
      `;
      renderToDOM('#orderCardsDiv', cardString);
    });
  }
};

export default viewOrdersPage;
