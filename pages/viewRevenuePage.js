import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const revenuePage = (array) => {
  clearDOM();
  let domString = '<h1>REVENUE</h1><hr>';
  array.forEach((item) => {
    domString += `<h2>TOTAL REVENUE: ${item.total}</h2>`;
  });
  renderToDOM('#main', domString);
};

export default revenuePage();
