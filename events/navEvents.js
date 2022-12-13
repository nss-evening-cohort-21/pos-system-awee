const navEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // VIEW ORDERS
    if (e.target.id === 'view-orders') {
      console.warn('VIEW ORDERS');
    }
    // VIEW CREATE ORDER PAGE

    // VIEW REVENUE PAGE

    // LOGO/VIEW WELCOME PAGE
  });
  // SEARCH
};

export default navEvents;
