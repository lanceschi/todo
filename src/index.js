import Notie from 'notie';
import { startApp } from './starters';
import App from './components/root';

/**
 * @desc Web-app starts here
 * @returns {Boolean}
 */
const start = async () => {
  try {
    // The React Webapp starts here
    await startApp({ App });

    return true;
  } catch (e) {
    const message = e.message ? e.message : e;
    console.error(message);

    if (e instanceof ErrorPlus) {
      const { level: type } = e;
      Notie.alert({ type, text: message, time: 3 });
    } else {
      Notie.alert({ type: 'error', text: message, time: 3 });
      routeAppToLogout();
    }

    return false;
  }
};

start();
