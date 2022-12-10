import logoutButton from '../components/logoutButton';
import homePage from '../pages/homePage';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  homePage();
  logoutButton();
};

export default startApp;
