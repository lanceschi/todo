import * as React from 'react';
import ReactDOM from 'react-dom';

/**
 * @param  {Object} props
 */
export default async (props) => {
  const { App } = props;
  var mountElement = document.createElement('div');

  if (!mountElement) {
    const message =
      'The app can’t find the mount DOM element. Please check the HTML markup';
    throw new Error(message);
  }

  document.body.appendChild(mountElement);

  ReactDOM.render(<App />, mountElement);
};
