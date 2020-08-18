import React, {createRef} from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  children: React.ReactNode;
}

const withVideo: (Component: React.ComponentClass | React.FunctionComponent) => React.ComponentClass = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideo extends React.Component<T> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private videoSettings: {
      src: string;
      poster: string;
      width: number;
      height: number;
      isMute: boolean;
    };

    constructor(props) {
      super(props);
      this.videoSettings = props.videoSettings;

      this.videoRef = createRef();
    }

    shouldComponentUpdate(nextProps) {
      return this.props.isActive !== nextProps.isActive;
    }

    componentDidMount() {
      const {src, poster, width, height, isMute} = this.videoSettings;
      const video = this.videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = isMute;
      video.width = width;
      video.height = height;
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.muted = null;
      video.width = null;
      video.height = null;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

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
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  return WithVideo;
};

export {withVideo};
