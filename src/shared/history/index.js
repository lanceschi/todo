import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

/**
 * Navigate the browser to the passed in new pathname
 * @param  {String} nextPath
 * @returns {Promise<(Boolean|Error)>}
 */
export const routerNavigate = (nextPath) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        history.push(String(nextPath), null);
        resolve(true);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  });
};

export default history;
