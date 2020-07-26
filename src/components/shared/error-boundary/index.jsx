import * as React from 'react';
import style from './style.module.less';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      error,
      info,
    });

    // logErrorToMyService(error, info);
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
      console.error(info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.outerShell}>
          <div className={style.contentShell}>
            <div>
              <h1>Something went wrong</h1>
              <h2>Check the wrapped component</h2>
            </div>
            <hr />
            <p className="text-danger">
              <b>{this.state.error.message}</b>
            </p>
            <hr />
            <pre>
              <code>{this.state.info.componentStack}</code>
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
