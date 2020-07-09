import React, {PureComponent} from 'react';
import {VideoPlayer} from '@/components/video-player/video-player';

const PREVIEW_START_TIMEOUT = 1000; // 1 second

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        current: null
      };
      this.timeout = null;
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(movie) {
      this.timeout = setTimeout(() => {
        this.setState({
          current: movie.id
        });
      }, PREVIEW_START_TIMEOUT);
    }

    onMouseLeave() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.setState({
        current: null
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          renderPlayer={(src, poster, isPlaying, isMute, width, height) => {
            return (
              <VideoPlayer
                src={src}
                poster={poster}
                isPlaying={isPlaying}
                isMute={isMute}
                width={width}
                height={height}
              />
            );
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {

  };

  return WithVideoPlayer;
};

export {withVideoPlayer};
