import { postOrder, patchOrder, getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';

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
      const payload = {
        name: document.querySelector('#orderName').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
      };

      patchOrder(payload).then(() => {
        getAllOrders().then(viewOrdersPage);
      });
    }
    // ADD ITEM

    // UPDATE ITEM

    // CLOSE ORDER
  });
};

export default formEvents;
