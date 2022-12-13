import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = (array) => {
  clearDOM();
  console.warn(array);
  const domString = '<h1>REVENUE</h1><hr>';
  const newArr = array.map((item) => item.total).join([]);
  console.warn(newArr);
  renderToDOM('#main', domString);
};

export default viewRevenuePage;
