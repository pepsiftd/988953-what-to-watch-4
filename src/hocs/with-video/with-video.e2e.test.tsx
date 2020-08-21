import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {noop} from '@/utils';

import {withVideo} from './with-video';

configure({
  adapter: new Adapter()
});


const Player: React.FunctionComponent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};


window.HTMLMediaElement.prototype.play = noop;
window.HTMLMediaElement.prototype.load = noop;

it(`Video starts playing when updated with isActive-prop set true`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(
      <PlayerWrapped
        videoSettings={{
          src: `source.mp4`,
          poster: `image.jpg`,
          isMute: true,
          width: `280`,
          height: `175`,
        }}
        isActive={true}
      />
  );


  const {videoRef} = wrapper.instance();
  jest.spyOn(videoRef.current, `play`);

  wrapper.instance().componentDidUpdate();

  expect(videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Video calls load when updated with isActive-prop set false`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(
      <PlayerWrapped
        videoSettings={{
          src: `source.mp4`,
          poster: `image.jpg`,
          isMute: true,
          width: `280`,
          height: `175`,
        }}
        isActive={false}
      />
  );


  const {videoRef} = wrapper.instance();
  jest.spyOn(videoRef.current, `load`);

  wrapper.instance().componentDidUpdate();

  expect(videoRef.current.load).toHaveBeenCalledTimes(1);
});
