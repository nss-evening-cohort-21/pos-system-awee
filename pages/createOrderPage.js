import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="customerName" placeholder="Full Name">
      <label for="floatingInput">Order Name</label>
    </div>
    <div class="form-floating">
      <input type="tel" class="form-control" id="phoneNumber" placeholder="phone">
      <label for="floatingInput">Customer Phone</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="phoneNumber" placeholder="email address">
      <label for="floatingInput">Customer Email</label>
    </div>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Order Type
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">In-Person</a></li>
      <li><a class="dropdown-item" href="#">Phone</a></li>
    </ul>
  </div>
</form>`;
  renderToDOM('#formContainer', domString);
};

export default createOrderForm;
