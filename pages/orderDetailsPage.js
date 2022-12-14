import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrderDetails = (array) => {
  clearDOM();
  const domString = '<h2>Order Total: </h2><hr><div id="itemCards-container" style="display: flex; flex-wrap: wrap;"></div><button class="btn btn-primary gap-2 col-5 m-1" type="button" id="add-item-btn">Add Item</button><button class="btn btn-success gap-2 col-5 m-1" id="go-to-payment-btn" type="button">Go To Payment</button>';
  renderToDOM('#main', domString);

  let cardString = '';
  array.forEach((item) => {
    cardString += `<div class="card w-50 m-2"><div class="card-body"><h5 class="card-title text-start">${item.itemName}</h5><h5 class="card-text text-start">Price: ${item.price}</h5><div class="card-body text-start"><a href="#" class="card-link" id="edit-item-btn--${item.firebaseKey}">Edit Item</a><a href="#" class="card-link" id="delete-item-btn--${item.firebaseKey}">Delete Item</a></div></div></div>`;
  });
  renderToDOM('#itemCards-container', cardString);
};

export default viewOrderDetails;
