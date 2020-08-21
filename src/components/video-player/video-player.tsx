import * as React from 'react';
import {history} from '@/history';
import {humanizeTimeElapsed} from '@/utils';

const PERCENTS = 100;

interface Props {
  children: React.ReactElement;
  isPlaying: boolean;
  title: string;
  duration: number;
  timeElapsed: number;
  onPlayClick: () => void;
  onFullscreenClick: () => void;
}

const VideoPlayer: React.FunctionComponent<Props> = ({children, isPlaying, title, duration, timeElapsed, onPlayClick, onFullscreenClick}) => {
  const timeElapsedString = humanizeTimeElapsed(timeElapsed);
  const progress = timeElapsed / duration * PERCENTS;
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
            <progress className="player__progress" value={timeElapsed} max={duration}></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
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

export {VideoPlayer};
