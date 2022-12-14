import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = (obj) => {
  clearDOM();
  const domString = `
  <h1>REVENUE</h1>
  <hr>
  <h3>TOTAL REVENUE: ${obj.totalRevenue}</h3>
    <ul style="list-style-type:none;">
      <li>Total Tips: ${obj.totalTips}</li>
      <li>Total call in orders:</li>
      <li>Total walk in orders:</li><br>
      <li>Payment Types:</li>
      <li>Cash - </li>
      <li>Credit - </li>
      <li>Mobile - </li>
    </ul>
    `;

  renderToDOM('#main', domString);
};

export default viewRevenuePage;
