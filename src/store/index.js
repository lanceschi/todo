/*eslint no-undef: 'off'*/

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'Reducers';

import rootSagaApp from 'Sagas/app';
import rootSagaTodoList from 'Sagas/todo-list';
import rootSagaTodoNew from 'Sagas/todo-new';
import rootSagaTodoEdit from 'Sagas/todo-edit';
import rootSagaRecorder from 'Sagas/recorder';

let Store;
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  const loggerOpts = {
    collapsed: true,
  };

  const logger = createLogger(loggerOpts);
  const middlewares = [sagaMiddleware, logger];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          name: 'To-Do List Challenge',
        })
      : compose;

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  Store = createStore(reducer, enhancers);
}

if (process.env.NODE_ENV === 'production') {
  let middlewares = [sagaMiddleware];
  middlewares = applyMiddleware(...middlewares);
  Store = createStore(reducer, middlewares);
}

sagaMiddleware.run(rootSagaApp);
sagaMiddleware.run(rootSagaTodoList);
sagaMiddleware.run(rootSagaTodoNew);
sagaMiddleware.run(rootSagaTodoEdit);
sagaMiddleware.run(rootSagaRecorder);

export default Store;
