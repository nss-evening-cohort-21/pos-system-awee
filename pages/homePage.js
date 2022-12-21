import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';
import background from '../assets/abstract_background.jpg';
import logo from '../assets/hhpw_logo.png';

const homePage = (user) => {
  clearDOM();
  const domString = `
  <div class="image-container">
    <img src=${background} alt="Abstract, colorful background" width="100%" height="100%" id="homepage-background" class="background"/>
    <div class="homepage-content">
      <h1 class="header">WELCOME, <br>${user.displayName}!</h1>
      <div>
        <button class="btn btn-pink mb-3 homepage-buttons" type="button" id="viewOrdersBtn">View Orders</button>
        <button class="btn btn-orange mb-3 homepage-buttons" type="button" id="createOrderBtn">Create an Order</button>
        <button class="btn btn-yellow mb-3 homepage-buttons" type="button" id="viewRevenueBtn">View Revenue</button>
      </div>
      <img src=${logo} alt="Hip Hop Pizza and Wangs Logo" width="150" height="150" class="logo-hp"/>
    </div>
  </div>`;

  renderToDOM('#main', domString);
};

export default homePage;
