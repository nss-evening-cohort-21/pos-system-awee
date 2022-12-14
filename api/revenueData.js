import client from '../utils/client';

const endpoint = client.databaseURL;

const getAllRevenue = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

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

const deleteRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
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
        const totalRevenue = dataArr.map((item) => Number(item.total)).reduce((a, b) => a + b, 0)
          .toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const totalTips = dataArr.map((item) => Number(item.tip)).reduce((a, b) => a + b, 0)
          .toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        const revObj = {
          totalRevenue,
          totalTips
        };
        console.warn(revObj);
        // resolve(totalRevenue);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getTipsTotal = () => new Promise((resolve, reject) => {
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
        const totalTips = dataArr.map((item) => Number(item.tip)).reduce((a, b) => a + b, 0)
          .toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        console.warn('TIPS', totalTips);
        // resolve(totalTips);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllRevenue, getSingleRevenue, patchRevenue, postRevenue, deleteRevenue, getRevenueDetails, getTipsTotal
};
