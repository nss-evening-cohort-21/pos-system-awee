import createOrderForm from '../pages/createOrderPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    // VIEW ORDERS PAGE
    if (e.target.id === 'viewOrdersBtn') {
      console.warn('VIEW ORDERS');
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'createOrdersBtn') {
      console.warn('Create Order');
      createOrderForm();
    }
    // VIEW REVENUE PAGE

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
