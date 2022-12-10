import renderToDOM from './renderToDOM';

const domBuilder = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const domString = `  
  <div id="navBar"></div>
  <div id="main"></div>
  <div id="formContainer"></div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
