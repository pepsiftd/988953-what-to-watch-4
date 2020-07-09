import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isMute: this.props.isMute,
      isPlaying: this.props.isPlaying,
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src, poster, width, height} = this.props;
    const {isMute} = this.state;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = isMute;
    video.width = width;
    video.height = height;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
    video.oncanplaythrough = null;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMute: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export {VideoPlayer};
