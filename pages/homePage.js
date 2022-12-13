import renderToDOM from '../utils/renderToDOM';

const homePage = (user) => {
  const domString = `<h1>Welcome, ${user.displayName}!</h1><div class="d-grid gap-2 col-3 mx-auto"><button class="btn btn-success mb-2" type="button" id="viewOrdersBtn">View Orders</button><button class="btn btn-primary mb-2" type="button" id="createOrderBtn">Create an Order</button><button class="btn btn-warning mb-2" type="button" id="viewRevenueBtn">View Revenue</button></div></div>`;

  renderToDOM('#main', domString);
};

export default homePage;
