import createOrderForm from '../pages/createOrderPage';
import { getAllOrders, getClosedOrders, getOpenOrders } from '../api/orderData';
import homePage from '../pages/homePage';
import { getRevenueDetails } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
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
      getRevenueDetails().then(viewRevenuePage);
    }
    // LOGO/VIEW WELCOME PAGE
    if (e.target.id === 'navbar-hhpw-logo') {
      homePage(user);
    }
    // DROPDOWN FILTERS
    if (e.target.id === 'dropLinkOpen') {
      getOpenOrders().then((arr) => {
        viewOrdersPage(arr);
        document.querySelector('#viewOrdersHeading').innerHTML = 'Open Orders';
      });
    }
    if (e.target.id === 'dropLinkClosed') {
      getClosedOrders().then((arr) => {
        viewOrdersPage(arr);
        document.querySelector('#viewOrdersHeading').innerHTML = 'Closed Orders';
      });
    }
    if (e.target.id === 'dropLinkAll') {
      getAllOrders().then(viewOrdersPage);
    }
  });
  // SEARCH
  document.querySelector('#searchBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    getAllOrders(user.uid).then((orders) => {
      const filteredOrders = orders.filter((item) => item.name.toLowerCase().includes(searchValue) || item.phone.includes(searchValue));
      viewOrdersPage(filteredOrders);
    });

    document.querySelector('#search').value = '';
  });
};

export default navEvents;
