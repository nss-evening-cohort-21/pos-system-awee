import {
  patchItem, postItem, getOrderDetails, getSingleItem
} from '../api/itemData';
import {
  postOrder, patchOrder, getAllOrders, getSingleOrder, getOrderTotal
} from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import viewOrderDetails from '../pages/orderDetailsPage';
import { patchRevenue, postRevenue } from '../api/revenueData';

const formEvents = () => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    e.preventDefault();
    // ADD ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#orderName').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        statusOpen: true,
      };

      postOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        patchOrder(patchPayload).then(() => {
          getAllOrders().then(viewOrdersPage);
        });
      });
    }
    // UPDATE ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#orderName').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        firebaseKey
      };

      patchOrder(payload).then(() => {
        getAllOrders().then(viewOrdersPage);
      });
    }
    // ADD ITEM
    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        orderID: firebaseKey
      };

      postItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        patchItem(patchPayload).then(() => {
          getOrderDetails(firebaseKey).then((arr) => {
            getSingleOrder(firebaseKey).then((obj) => {
              viewOrderDetails(obj, arr);
            });
          });
        });
      });
    }
    // UPDATE ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        firebaseKey
      };

      patchItem(payload).then(() => {
        getSingleItem(firebaseKey).then((item) => {
          getOrderDetails(item.orderID).then((arr) => {
            getSingleOrder(item.orderID).then((obj) => {
              viewOrderDetails(obj, arr);
            });
          });
        });
      });
    }
    // CLOSE ORDER
    if (e.target.id.includes('close-order-form')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        statusOpen: false,
        firebaseKey
      };
      getSingleOrder(firebaseKey).then((order) => {
        getOrderTotal(firebaseKey).then((orderTotal) => {
          const revPayload = {
            date: new Date().toLocaleDateString(),
            orderId: order.firebaseKey,
            orderType: order.orderType,
            paymentType: document.querySelector('#paymentType').value,
            tip: document.querySelector('#tipAmount').value,
            total: orderTotal
          };

          postRevenue(revPayload).then(({ name }) => {
            const patchPayload = { firebaseKey: name };

            patchRevenue(patchPayload);
          });
        });
      });
      patchOrder(payload).then(() => {
        getAllOrders().then(viewOrdersPage);
      });
    }
  });
};

export default formEvents;
