import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}">
    <div class="mb-3 form-group col-sm-8" style="text-align:left">
      <label for="orderName" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="orderName" value="${obj.name || ''}">
    </div>
    <div class="mb-3 form-group col-sm-8" style="text-align:left">
      <label for="customerPhone" class="form-label">Customer Phone</label>
      <input type="tel" class="form-control" id="phone" value="${obj.phone || ''}">
    </div>
    <div class="mb-3 form-group col-sm-8" style="text-align:left">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="email" class="form-control" id="customerEmail" value="${obj.email || ''}">
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Order Type</option>
      <option value="in-person"${obj.orderType === 'in-person' ? 'selected' : ''}>In-Person</option>
      <option value="phone"${obj.orderType === 'phone' ? 'selected' : ''}>Phone</option>
    </select>
    <button type="submit" class="btn btn-success mt-3">Create/Edit Order</button>
</form>`;
  renderToDOM('#formContainer', domString);
};

export default createOrderForm;
