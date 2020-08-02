import React, {createRef} from 'react';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.Component {
    constructor(props) {
      super(props);
      this._videoSettings = props.videoSettings;

      this.state = {
        isPlaying: this._videoSettings.autoplay,
        progress: 0,
      };

      this._videoRef = createRef();

      this.onPlayClick = this.onPlayClick.bind(this);
    }

    onPlayClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    componentDidMount() {
      const {src, poster, isMute, autoplay} = this._videoSettings;
      const video = this._videoRef.current;

      video.autoplay = autoplay;
      video.src = src;
      video.poster = poster;
      video.muted = isMute;

      video.ontimeupdate = () => {
        this.setState({
          progress: parseInt(video.currentTime, 10),
        });
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.autoplay = null;
      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.muted = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          timeElapsed={this.state.progress}
          onPlayClick={this.onPlayClick}
          onFullscreenClick={() => {}}
        >
          <video
            width="100%"
            height="100%"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    videoSettings: PropTypes.shape({
      src: PropTypes.string.isRequired,
      isMute: PropTypes.bool.isRequired,
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool.isRequired,
  };

  return WithVideoPlayer;
};

export {withVideoPlayer};
