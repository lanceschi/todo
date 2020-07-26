import Notie from 'Components/shared/ui-notifier/index';
import is from 'is_js';

export default function* handleError(props) {
  const { error = {} } = props;

  let message = error.message ? error.message : error;

  console.error(message);
  console.trace(error);
  console.error(error.stack);

  if (is.string(message)) {
    Notie.alert(message);
  } else {
    Notie.alert('Uncaught Error');
  }
}
