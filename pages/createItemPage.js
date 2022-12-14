import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createItemForm = (obj = {}) => {
  clearDom();
  const domString = `
  <div id="create-item-container">
    <form class="form-text" id="${obj.orderID ? `update-item--${obj.firebaseKey}` : `submit-item--${obj.firebaseKey}`}">
      <div class="mb-3" style="text-align:left">
        <label for="itemName" class="form-label">Item Name</label>
        <input type="text" class="form-control" id="itemName" value="${obj.itemName || ''}">
      </div>
      <div class="mb-3" style="text-align:left">
        <label for="itemPrice" class="form-label">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" value="${obj.price || ''}" pattern="[0-9]+(\\.[0-9][0-9]?)?">
      </div>
      <button type="submit" class="btn btn-yellow mt-3" id="add-edit-item-btn">Add/Edit Item</button>
    </form>
  </div>
  `;
  renderToDOM('#formContainer', domString);
};

export default createItemForm;
