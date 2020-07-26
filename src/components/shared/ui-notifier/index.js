import { alert as notieAlert } from 'notie';

import 'notie/dist/notie.css';
import './style.less';

const Notie = {
  success: (text, time = 1.5) =>
    window.requestAnimationFrame(() =>
      notieAlert({ type: 'success', text, time })
    ),
  alert: (text, time = 3) =>
    window.requestAnimationFrame(() =>
      notieAlert({ type: 'error', text, time })
    ),
};

export default Notie;
