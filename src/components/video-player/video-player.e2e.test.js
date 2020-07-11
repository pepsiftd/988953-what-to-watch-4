import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {VideoPlayer} from './video-player';

Enzyme.configure({
  adapter: new Adapter()
});

const playerConfig = {
  src: `video-video-xxx.mp4`,
  poster: `img/video-poster-xxx.jpg`,
  isMute: true,
  width: `280`,
  height: `175`,
};

describe(`VideoPlayer should have 2 states`, () => {
  it(`VideoPlayer with pause state`, () => {
    const player = mount(
        <VideoPlayer
          {...playerConfig}
          isPlaying={false}
        />
    );

    expect(player.state().isPlaying).toBe(false);
  });

  it(`VideoPlayer with play state`, () => {
    const player = mount(
        <VideoPlayer
          {...playerConfig}
          isPlaying={true}
        />
    );

    expect(player.state().isPlaying).toBe(true);
  });
});
