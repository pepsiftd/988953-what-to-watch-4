import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {noop} from '@/utils';

import {withVideo} from './with-video';

Enzyme.configure({
  adapter: new Adapter()
});

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

const Player: React.FunctionComponent<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};


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

  window.HTMLMediaElement.prototype.play = noop;

  const {_videoRef} = wrapper.instance();
  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidUpdate();

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
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

  window.HTMLMediaElement.prototype.load = noop;

  const {_videoRef} = wrapper.instance();
  jest.spyOn(_videoRef.current, `load`);

  wrapper.instance().componentDidUpdate();

  expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
});
