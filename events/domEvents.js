import { getRevenueDetails } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
import createOrderForm from '../pages/createOrderPage';
import { getAllOrders, getSingleOrder } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import createItemForm from '../pages/createItemPage';
import { getSingleItem, getOrderDetails } from '../api/itemData';
import viewOrderDetails from '../pages/orderDetailsPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    const [, firebaseKey] = e.target.id.split('--');
    // VIEW ORDERS PAGE
    if (e.target.id === 'viewOrdersBtn') {
      getAllOrders().then(viewOrdersPage);
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'createOrderBtn') {
      createOrderForm();
    }
    // VIEW REVENUE PAGE
    if (e.target.id === 'viewRevenueBtn') {
      getRevenueDetails().then(viewRevenuePage);
    }
    // VIEW ORDER DETAILS
    if (e.target.id.includes('orderCardDetails')) {
      getOrderDetails(firebaseKey).then((arr) => {
        getSingleOrder(firebaseKey).then((obj) => {
          viewOrderDetails(obj, arr);
        });
      });
    }
    // EDIT ORDER
    if (e.target.id.includes('orderCardEdit')) {
      getSingleOrder(firebaseKey).then((orderObj) => createOrderForm(orderObj));
    }
    // DELETE ORDER
    if (e.target.id.includes('orderCardDelete')) {
      console.warn('DELETE', firebaseKey);
    }
    // EDIT ITEM
    if (e.target.id.includes('edit-item-btn')) {
      getSingleItem(firebaseKey).then((itemObj) => createItemForm(itemObj));
    }
    // DELETE ITEM

    // ADD ITEM
    if (e.target.id.includes('add-item-btn')) {
      getSingleOrder(firebaseKey).then((obj) => {
        createItemForm(obj);
      });
    }
    // GO TO PAYMENT
  });
};

export default domEvents;
