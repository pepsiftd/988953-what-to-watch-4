import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  isPlaying: boolean;
  progress: number;
  isFullscreen: boolean;
}

interface InjectingProps {
  isPlaying: boolean;
  duration: number;
  timeElapsed: number;
  onPlayClick: () => void;
  onFullscreenClick: () => void;
}

const withVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideoPlayer extends React.Component<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private videoSettings: {
      src: string;
      poster: string;
      isMute: boolean;
      autoplay: boolean;
      width: string;
      height: string;
    };
    duration: number;

    constructor(props) {
      super(props);
      this.videoSettings = props.videoSettings;

      this.state = {
        isPlaying: this.videoSettings.autoplay,
        progress: 0,
        isFullscreen: false,
      };

      this.videoRef = React.createRef();
      this.duration = 0;

      this.onPlayClick = this.onPlayClick.bind(this);
      this.onFullscreenClick = this.onFullscreenClick.bind(this);
    }

    onPlayClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    onFullscreenClick() {
      this.videoRef.current.requestFullscreen();
    }

    componentDidMount() {
      const {src, poster, isMute, autoplay} = this.videoSettings;
      const video = this.videoRef.current;

      video.autoplay = autoplay;
      video.src = src;
      video.poster = poster;
      video.muted = isMute;

      video.oncanplaythrough = () => {
        this.duration = video.duration;
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: video.currentTime,
        });
      };

      video.onfullscreenchange = () => {
        if (document.fullscreenElement) {
          this.setState({
            isFullscreen: true,
          });
        } else {
          this.setState({
            isFullscreen: false,
            isPlaying: !video.paused,
          });
        }
      };
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.autoplay = null;
      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.muted = null;
      video.ontimeupdate = null;
      video.onfullscreenchange = null;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      if (!this.state.isFullscreen) {
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      }
    }

    render() {
      const {width, height} = this.videoSettings;

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          duration={this.duration}
          timeElapsed={this.state.progress}
          onPlayClick={this.onPlayClick}
          onFullscreenClick={this.onFullscreenClick}
        >
          <video
            width={width}
            height={height}
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  return WithVideoPlayer;
};

export {withVideoPlayer};
