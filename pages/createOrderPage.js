import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <div id="createOrderContainer">
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}">
      <div class="mb-3" style="text-align:left">
        <label for="orderName" class="form-label">Order Name</label>
        <input type="text" class="form-control" id="orderName" value="${obj.name || ''}" required>
      </div>
      <div class="mb-3" style="text-align:left">
        <label for="customerPhone" class="form-label">Customer Phone</label>
        <input type="tel" class="form-control" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="XXX-XXX-XXXX" value="${obj.phone || ''}" required>
      </div>
      <div class="mb-3" style="text-align:left">
        <label for="email" class="form-label">Customer Email</label>
        <input type="email" class="form-control" id="email" value="${obj.email || ''}" required>
      </div>
      <div class="mb-3" style="text-align:left">
        <label for="orderType" class="form-label">Order Type</label>  
        <select class="form-select" aria-label="Default select example" id="orderType" required>
          <option selected disabled value="">Select an Order Type</option>
          <option value="in-person"${obj.orderType === 'in-person' ? 'selected' : ''}>In-Person</option>
          <option value="phone"${obj.orderType === 'phone' ? 'selected' : ''}>Phone</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success mt-3">Create/Edit Order</button>
    </form>
  </div> `;
  renderToDOM('#formContainer', domString);
};

export default createOrderForm;
