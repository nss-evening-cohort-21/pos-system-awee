import { getAllItems, patchItem, postItem } from '../api/itemData';
import { postOrder, patchOrder, getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import viewOrderDetails from '../pages/orderDetailsPage';

const formEvents = () => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    e.preventDefault();
    // NEED TO ADD "e" INSIDE THE PARENTHESIS

    // ADD ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('Clicked submit order');
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
      console.warn('CLICKED ADD/EDIT ITEM');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
      };

      postItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        patchItem(patchPayload).then(() => {
          getAllItems().then(viewOrderDetails);
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

      patchOrder(payload).then(() => {
        getAllItems().then(viewOrderDetails);
      });
    }
    // CLOSE ORDER
  });
};

export default formEvents;
