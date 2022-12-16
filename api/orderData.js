import client from '../utils/client';
import { deleteItem, getOrderDetails } from './itemData';

const endpoint = client.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
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

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
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

const patchOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebaseKey}.json`, {
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

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderTotal = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="orderID"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const dataArr = Object.values(data);
        const orderTotal = dataArr.map((item) => Number(item.price)).reduce((a, b) => a + b, 0);
        resolve(orderTotal);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderDetails(firebaseKey).then((orderItemsArray) => {
    const deleteItemPromises = orderItemsArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getAllOrders, getSingleOrder, patchOrder, postOrder, deleteOrder, getOrderTotal, deleteOrderItemsRelationship
};
