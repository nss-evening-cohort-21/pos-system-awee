import homePage from '../pages/homePage';
import { getAllRevenue } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // VIEW ORDERS
    if (e.target.id === 'view-orders') {
      console.warn('VIEW ORDERS');
    }
    // VIEW CREATE ORDER PAGE

    // VIEW REVENUE PAGE
    if (e.target.id === 'view-revenue') {
      console.warn('VIEW REVENUE');
      getAllRevenue().then(console.warn);
      getAllRevenue().then(viewRevenuePage);
    }
    // LOGO/VIEW WELCOME PAGE
    if (e.target.id.includes('navbar-hhpw-logo')) {
      console.warn('CLICKED LOGO');

      homePage(user);
    }
  });
  // SEARCH
};

export default navEvents;
