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
      <h5 class="card-title">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">OrderStatus</h6>
      <p class="card-text">Phone</p>
      <p class="card-text">Email</p>
      <p class="card-text">Type</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
      `;
      renderToDOM('#orderCardsDiv', cardString);
    });
  }
};

export default viewOrdersPage;
