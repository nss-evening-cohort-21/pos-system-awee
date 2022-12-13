import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}">
    <div class="mb-3">
      <label for="orderName" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="orderName">
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" id="phoneNumber" placeholder="phone">
      <label for="floatingInput">Customer Phone</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="phoneNumber" placeholder="email address">
      <label for="floatingInput">Customer Email</label>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Order Type</option>
      <option value="1">In-Person</option>
      <option value="2">Phone</option>
    </select>
</form>`;
  renderToDOM('#formContainer', domString);
};

export default createOrderForm;
