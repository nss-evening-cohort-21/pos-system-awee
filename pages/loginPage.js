import loginButton from '../components/loginButton';
import logo from '../assets/hhpw_logo.png';

const loginPage = () => {
  const domString = `
  <div id="login-page">
    <div id="logo-container">
      <img src=${logo} alt="Hip Hop Pizza and Wangs Logo" width="200" height="80" id="hhpw-logo"/>
    </div>
    <div id="login-button-container">
    </div>

  </div>`;

  document.querySelector('#app').innerHTML = domString;
  loginButton();
};

export default loginPage;
