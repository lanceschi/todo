import React from 'react';
import style from './style.module.less';

export const Footer = ({
  isRecording,
  isPlaying,
  isEmpty,
  toggleIsRecording,
  play,
  resetRecorder,
}) => {
  return (
    <div className={style.Footer}>
      <div className={style.FooterContent}>
        <span>
          <button
            onClick={toggleIsRecording}
            disabled={isRecording || isPlaying}
            title="Record"
            data-testid="record"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8" />
            </svg>
            <p>Record</p>
          </button>
          <button
            onClick={toggleIsRecording}
            disabled={!isRecording}
            title="Stop recording"
            data-testid="stopRecording"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <rect x="9" y="9" width="6" height="6"></rect>
            </svg>
            <p>Stop Recording</p>
          </button>
        </span>
        &nbsp;
        <span>
          <button
            onClick={play}
            disabled={isEmpty || isPlaying}
            title="Play recording"
            data-testid="playRecording"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <p>Play Recording</p>
          </button>
          <button
            onClick={resetRecorder}
            disabled={isPlaying || isEmpty}
            title="Clear recording"
            data-testid="clearRecording"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <p>Clear Recording</p>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
