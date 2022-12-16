import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const closeOrderPage = (firebaseKey) => {
  clearDOM();
  const domString = `
    <div id="closeOrderContainer">
      <form id="close-order-form--${firebaseKey}">
        <div class="row">
          <div class="mb-3 form-group col-sm-6 mx-auto">
            <label for="formGroupExampleInput" class="form-label">Payment Type</label>
            <select class="form-select" aria-label="Payment Type" id="paymentType" required>
              <option selected disabled value="">Select a Payment Type</option>
              <option value="cash">Cash</option>
              <option value="check">Check</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="mb-3 form-group col-sm-6 mx-auto">
            <label for="tip amount" class="form-label">Tip Amount</label>
              <input type="text" class="form-control" id="tipAmount" name="tipAmount" placeholder="0.00" pattern="[0-9]+(\\.[0-9][0-9]?)?" required>
          </div>
        </div>
        <button type="submit" class="btn btn-success">Close Order</button>
      </form>
    </div>
    `;

  renderToDOM('#formContainer', domString);
};

export default closeOrderPage;
