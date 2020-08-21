import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {VideoPlayer} from './video-player';

configure({
  adapter: new Adapter()
});

it(`VideoPlayer calls right functions when clicked buttons`, () => {
  const onPlayClick = jest.fn();
  const onFullscreenClick = jest.fn();

  const player = mount(
      <VideoPlayer
        isPlaying={true}
        title={`Movie Title`}
        timeElapsed={553}
        duration={3695}
        onPlayClick={onPlayClick}
        onFullscreenClick={onFullscreenClick}
      >
        <video />
      </VideoPlayer>
  );

  const playButton = player.find(`.player__play`);
  const fullscreenButton = player.find(`.player__full-screen`);

  playButton.simulate(`click`);
  fullscreenButton.simulate(`click`);

  expect(onPlayClick).toHaveBeenCalledTimes(1);
  expect(onFullscreenClick).toHaveBeenCalledTimes(1);
});
