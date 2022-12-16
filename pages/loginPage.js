import loginButton from '../components/loginButton';
import logo from '../assets/hhpw_logo.png';
import background from '../assets/abstract_background.jpg';

function loginPage() {
  const domString = `
  <div id="login-page">
    <img src=${background} alt="Abstract, colorful background" width="100%" height="100%" id="login-page-background">
      <img src=${logo} alt="Hip Hop Pizza and Wangs Logo" width="300" height="300" id="hhpw-logo"/>
    <div id="login-button-container">
  </div>

  </div>`;

  document.querySelector('#app').innerHTML = domString;
  loginButton();
}

export default loginPage;
