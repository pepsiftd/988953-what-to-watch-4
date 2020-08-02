import React from 'react';
import PropTypes from 'prop-types';
import {history} from '@/history';

const VideoPlayer = ({children, isPlaying, title, timeElapsed, onPlayClick, onFullscreenClick}) => {
  const timeElapsedString = `${timeElapsed}`;
  return (
    <div className="player">
      {children}

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          history.go(-1);
        }}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsedString}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying
            ?
            <button
              type="button"
              className="player__play"
              onClick={onPlayClick}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            :
            <button
              type="button"
              className="player__play"
              onClick={onPlayClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          }

          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullscreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.element.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  timeElapsed: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
};

export {VideoPlayer};
