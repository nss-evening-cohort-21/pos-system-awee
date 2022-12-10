import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBar';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
