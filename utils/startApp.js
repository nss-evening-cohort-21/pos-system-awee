import domBuilder from './domBuilder';
import navBar from '../components/shared/navBar';
import homePage from '../pages/homePage';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  homePage(user);
  logoutButton();
  domEvents();
  formEvents();
  navEvents(user);
};

export default startApp;
