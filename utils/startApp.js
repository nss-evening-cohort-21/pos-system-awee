import domBuilder from './domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder();
  navBar();
  homePage(user);
  logoutButton();
};

export default startApp;
