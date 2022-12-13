import viewRevenuePage from '../pages/viewRevenuePage';
import { getAllRevenue } from '../api/revenueData';

const domEvents = () => {
  // VIEW ORDERS PAGE

  // VIEW CREATE ORDER PAGE

  // VIEW REVENUE PAGE
  document.querySelector('#main').addEventListener('click', () => {
    getAllRevenue().then((revenueArray) => {
      if (revenueArray.length) {
        viewRevenuePage(revenueArray);
      } else {
        console.warn('No Revenue!');
      }
    });
  });
  // VIEW ORDER DETAILS

  // EDIT ORDER

  // DELETE ORDER

  // VIEW ADD ITEM PAGE

  // GO TO PAYMENT

  // EDIT ITEM

  // DELETE ITEM
};

export default domEvents;
