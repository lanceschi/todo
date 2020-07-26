import Types from 'FSATypes/app';
import { takeLatest, call, all } from 'redux-saga/effects';
import { routerNavigate as AppRouterNavigate } from 'Shared/history/index';

/**
 * Helper function to route app programmatically
 * though history object (createBrowserHistory)
 * @param  {Object} props
 * @param  {String} props.model
 * @param  {String} props.action
 * @returns {Promise<(Boolean|Error)>}
 */
const routeToItem = (props) => {
  return new Promise((resolve, reject) => {
    let nextRoute;

    if (props.model === 'todo') {
      if (props.action === 'list') {
        nextRoute = '/todo/list';
        return AppRouterNavigate(nextRoute);
      } else if (props.action === 'new') {
        nextRoute = '/todo/new';
        return AppRouterNavigate(nextRoute);
      } else if (props.action === 'edit') {
        nextRoute = `/todo/${props.id}/edit`;
        return AppRouterNavigate(nextRoute);
      }
    }

    return reject(false);
  });
};

/**
 * Saga worker to route app programmatically
 * @param  {Object} props
 * @param  {Object} props.payload Next route props object
 * @param  {String} props.payload.model
 * @param  {String} props.payload.action
 */
function* routeTo({ payload }) {
  try {
    yield call(routeToItem, payload);
  } catch (error) {
    yield call(handleError, { error, Notie });
  }
}

// Saga watchers
function* watch_routeTo() {
  yield takeLatest(Types.ROUTE_TO, routeTo);
}

export default function* rootSaga() {
  yield all([watch_routeTo()]);
}
