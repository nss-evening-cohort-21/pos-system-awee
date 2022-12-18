import client from '../utils/client';
import createRevObj from '../utils/createRevObj';

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
        const revObj = createRevObj(dataArr, '', '');
        resolve(revObj);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getRevenueDates = (beginDate, endDate) => new Promise((resolve, reject) => {
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
        const filteredDates = dataArr.filter((item) => Date.parse(item.date) >= beginDate && Date.parse(item.date) <= endDate);
        const revObj = createRevObj(filteredDates, beginDate, endDate);
        resolve(revObj);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  patchRevenue, postRevenue, getRevenueDetails, getRevenueDates
};
