import renderToDOM from './renderToDOM';

const domBuilder = () => {
  const domString = `  
  <div id="navBar"></div>
  <div id="main"></div>
  <div id="formContainer"></div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
