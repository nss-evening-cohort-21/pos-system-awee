import { getAllRevenue } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    // VIEW ORDERS PAGE
    if (e.target.id === 'viewOrdersBtn') {
      getAllOrders().then(viewOrdersPage);
    }
    // VIEW CREATE ORDER PAGE

    // VIEW REVENUE PAGE
    if (e.target.id === 'viewRevenueBtn') {
      console.warn('VIEW REVENUE');
      getAllRevenue().then(console.warn);
      getAllRevenue().then(viewRevenuePage);
    }
    // VIEW ORDER DETAILS

    // EDIT ORDER

    // DELETE ORDER

    // VIEW ADD ITEM PAGE

    // GO TO PAYMENT

    // EDIT ITEM

    // DELETE ITEM
  });
};

export default domEvents;
