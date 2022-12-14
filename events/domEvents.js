import { getAllRevenue } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
import createOrderForm from '../pages/createOrderPage';
import { getAllOrders, getSingleOrder } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import createItemForm from '../pages/createItemPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    const [, firebaseKey] = e.target.id.split('--');
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
      console.warn('DETAILS', firebaseKey);
    }
    // EDIT ORDER
    if (e.target.id.includes('orderCardEdit')) {
      console.warn('EDIT', firebaseKey);
      getSingleOrder(firebaseKey).then((orderObj) => createOrderForm(orderObj));
    }
    // DELETE ORDER
    if (e.target.id.includes('orderCardDelete')) {
      console.warn('DELETE', firebaseKey);
    }
    // VIEW CREATE/ADD ITEM PAGE
    if (e.target.id === 'test-edit-item') {
      console.warn('CLICKED ADD/EDIT ITEM');
      createItemForm();
    }
    // GO TO PAYMENT

    // EDIT ITEM

    // DELETE ITEM
  });
};

export default domEvents;
