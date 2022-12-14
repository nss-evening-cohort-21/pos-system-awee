import createOrderForm from '../pages/createOrderPage';
import { getAllOrders } from '../api/orderData';
import homePage from '../pages/homePage';
import { getRevenueDetails } from '../api/revenueData';
// import viewRevenuePage from '../pages/viewRevenuePage';
import viewOrdersPage from '../pages/viewOrdersPage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // VIEW ORDERS
    if (e.target.id === 'view-orders') {
      getAllOrders().then(viewOrdersPage);
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'create-order') {
      createOrderForm();
    }
    // VIEW REVENUE PAGE
    if (e.target.id === 'view-revenue') {
      getRevenueDetails();
      // getRevenueTotal().then((rev) => {
      //   console.warn(rev);
      //   viewRevenuePage(rev);
      // });
    }
    // LOGO/VIEW WELCOME PAGE
    if (e.target.id.includes('navbar-hhpw-logo')) {
      homePage(user);
    }
  });
  // SEARCH
};

export default navEvents;
