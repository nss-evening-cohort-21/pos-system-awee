import { getAllRevenue } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
import createOrderForm from '../pages/createOrderPage';
import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    const [, firebasekey] = e.target.id.split('--');
    // VIEW ORDERS PAGE
    if (e.target.id === 'viewOrdersBtn') {
      getAllOrders().then(viewOrdersPage);
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'createOrderBtn') {
      console.warn('Create Order');
      createOrderForm();
    }
    // VIEW REVENUE PAGE
    if (e.target.id === 'viewRevenueBtn') {
      getAllRevenue().then(viewRevenuePage);
    }
    // VIEW ORDER DETAILS
    if (e.target.id.includes('orderCardDetails')) {
      console.warn('DETAILS', firebasekey);
    }
    // EDIT ORDER
    if (e.target.id.includes('orderCardEdit')) {
      console.warn('EDIT', firebasekey);
    }
    // DELETE ORDER
    if (e.target.id.includes('orderCardDelete')) {
      console.warn('DELETE', firebasekey);
    }
    // VIEW ADD ITEM PAGE

    // GO TO PAYMENT

    // EDIT ITEM

    // DELETE ITEM
  });
};

export default domEvents;
