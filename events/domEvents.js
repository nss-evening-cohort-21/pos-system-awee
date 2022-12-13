import createOrderForm from '../pages/createOrderPage';

const domEvents = () => {
  // VIEW ORDERS PAGE

  // VIEW CREATE ORDER PAGE
  document.querySelector('#createOrderBtn').addEventListener('click', () => {
    console.warn('create order?');
    createOrderForm();
  });

  // VIEW REVENUE PAGE

  // VIEW ORDER DETAILS

  // EDIT ORDER

  // DELETE ORDER

  // VIEW ADD ITEM PAGE

  // GO TO PAYMENT

  // EDIT ITEM

  // DELETE ITEM
};

export default domEvents;
