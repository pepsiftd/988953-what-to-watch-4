import React, {createRef} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends React.Component {
    constructor(props) {
      super(props);
      this._videoSettings = props.videoSettings;

      this._videoRef = createRef();

      this.state = {
        isMute: this._videoSettings.isMute,
        isActive: props.isActive,
      };
    }

    shouldComponentUpdate(nextProps) {
      return this.props.isActive !== nextProps.isActive;
    }

    componentDidMount() {
      const {src, poster, width, height} = this._videoSettings;
      const {isMute} = this.state;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = isMute;
      video.width = width;
      video.height = height;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.muted = null;
      video.width = null;
      video.height = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isActive) {
        video.play();
      } else {
        video.load();
      }
    }

    render() {

      return (
        <Component
          {...this.props}
        >
          <video
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    videoSettings: PropTypes.shape({
      src: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      isMute: PropTypes.bool.isRequired,
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export {withVideo};
