import createOrderForm from '../pages/createOrderPage';
import { getAllOrders } from '../api/orderData';
import homePage from '../pages/homePage';
import viewOrdersPage from '../pages/viewOrdersPage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // VIEW ORDERS
    if (e.target.id === 'view-orders') {
      getAllOrders().then(viewOrdersPage);
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'create-order') {
      console.warn('CREATE ORDER');
      createOrderForm(user);
    }
    // VIEW REVENUE PAGE

    // LOGO/VIEW WELCOME PAGE
    if (e.target.id.includes('navbar-hhpw-logo')) {
      console.warn('CLICKED LOGO');

      homePage(user);
    }
  });
  // SEARCH
};

export default navEvents;
