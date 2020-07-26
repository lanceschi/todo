import React from 'react';
import style from './style.module.less';

export const Header = ({ cancel }) => {
  return (
    <div className={style.Header}>
      <button onClick={cancel} data-testid="cancel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
        <p>Back</p>
      </button>
      <h1 data-testid="title">CREATE TODO</h1>
      <span>&nbsp;</span>
    </div>
  );
};

export default Header;
