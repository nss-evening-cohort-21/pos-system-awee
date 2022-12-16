import client from '../utils/client';

const endpoint = client.databaseURL;

const postRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getRevenueDetails = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const dataArr = Object.values(data);
        const totalRevenue = dataArr.map((item) => Number(item.total)).reduce((a, b) => a + b, 0);
        const totalTips = dataArr.map((item) => Number(item.tip)).reduce((a, b) => a + b, 0);
        const combinedRevenue = totalRevenue + totalTips;
        const revObj = {
          combinedRevenue,
          totalRevenue,
          totalTips,
          callInOrders: dataArr.filter((item) => item.orderType === 'phone').length,
          walkInOrders: dataArr.filter((item) => item.orderType === 'in-person').length,
          cashOrders: dataArr.filter((item) => item.paymentType === 'cash').length,
          checkOrders: dataArr.filter((item) => item.paymentType === 'check').length,
          debitOrders: dataArr.filter((item) => item.paymentType === 'debit').length,
          creditOrders: dataArr.filter((item) => item.paymentType === 'credit').length,
          mobileOrders: dataArr.filter((item) => item.paymentType === 'mobile').length
        };
        resolve(revObj);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  patchRevenue, postRevenue, getRevenueDetails
};
