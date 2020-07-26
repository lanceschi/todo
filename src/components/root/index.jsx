import * as React from 'react';
import { AppRoutes } from './routes';
import AppHistory from 'Shared/history/index';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from 'Components/shared/error-boundary';
import Store from 'AppStore';
import 'Less/index.less';

export default () => {
  return (
    <Provider store={Store}>
      <Router history={AppHistory}>
        <ErrorBoundary>
          <div id="outer-container">
            <AppRoutes />
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};
