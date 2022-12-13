import createOrderForm from '../pages/createOrderPage';

const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // VIEW ORDERS
    if (e.target.id === 'view-orders') {
      console.warn('VIEW ORDERS');
    }
    // VIEW CREATE ORDER PAGE
    if (e.target.id === 'create-order') {
      console.warn('CREATE ORDER');
      createOrderForm();
    }
    // VIEW REVENUE PAGE

    // LOGO/VIEW WELCOME PAGE
  });
  // SEARCH
};

export default navEvents;
