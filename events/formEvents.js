const formEvents = () => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    // NEED TO ADD "e" INSIDE THE PARENTHESIS

    // ADD ORDER

    // UPDATE ORDER

    // ADD ITEM

    // UPDATE ITEM
    if (e.target.id === 'add-edit-item-btn') {
      console.warn('CLICKED ADD/EDIT ITEM');
      // render order details page to DOM -- pass in order's firebaseKey?
    }

    // CLOSE ORDER
  });
};

export default formEvents;
