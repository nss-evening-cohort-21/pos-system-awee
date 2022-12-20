import Chart from 'chart.js/auto';
import clearDOM from '../utils/clearDom';
import currency from '../utils/currency';
import renderToDOM from '../utils/renderToDOM';
import { getAllRevenueData } from '../api/revenueData';

const viewRevenuePage = (obj) => {
  clearDOM();
  const domString = `
  <h1 class="header">REVENUE</h1>
  <hr>
  <div id="revTotalDiv">
    <h3 class="total">TOTAL REVENUE: <br>${currency(obj.combinedRevenue)}</h3>
  </div>
  <hr>
  <div id="dateRangeContainer">
  <p class="rev-text">Date Range:</p>
  <p class="rev-text">${obj.earliestDate} - ${obj.latestDate}</p>
  <input type="date" id="beginDate">
  <input type="date" id="endDate">
  <button class="btn btn-yellow btn-sm" id="dateBtn">View</button>
  <button class="btn btn-orange btn-sm" id="resetDateBtn">Reset</button>
  </div>
  <hr>
    <ul class="rev-text" style="list-style-type:none;">
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
  <hr>
  <div>
    <h3 class="total">Revenue by Date</h3>
    <canvas id="myChart"></canvas>
  </div>
    `;

  renderToDOM('#main', domString);
  const ctx = document.getElementById('myChart');

  const revenueChart = (revenueArray) => new Chart(ctx, {
    type: 'line',
    data: {
      labels: revenueArray.map((row) => row.date),
      datasets: [{
        label: 'Per Order Revenue in $',
        data: revenueArray.map((row) => row.total),
        borderWidth: 1,
        borderColor: '#ffba08',
        backgroundColor: '#ffba08'
      }]
    },
    options: {
      scales: {
        y: {
          ticks: { color: 'white', beginAtZero: true }
        },
        x: {
          ticks: { color: 'white' }
        }
      }
    }
  });
  getAllRevenueData().then(revenueChart);
};

export default viewRevenuePage;
