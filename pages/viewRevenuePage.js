import clearDOM from '../utils/clearDom';
import currency from '../utils/currency';
import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = (obj) => {
  clearDOM();
  const domString = `
  <h1>REVENUE</h1>
  <hr>
  <h3>TOTAL REVENUE: ${currency(obj.combinedRevenue)}</h3>
    <ul style="list-style-type:none;">
      <li>Total Tips: ${currency(obj.totalTips)}</li>
      <li>Total call in orders: ${obj.callInOrders}</li>
      <li>Total walk in orders: ${obj.walkInOrders}</li><br>
      <li>Payment Types:</li>
      <li>Cash - ${obj.cashOrders}</li>
      <li>Credit - ${obj.creditOrders}</li>
      <li>Debit - ${obj.debitOrders}</li>
      <li>Check - ${obj.checkOrders}</li>
      <li>Mobile - ${obj.mobileOrders}</li>
    </ul>
    `;

  renderToDOM('#main', domString);
};

export default viewRevenuePage;
