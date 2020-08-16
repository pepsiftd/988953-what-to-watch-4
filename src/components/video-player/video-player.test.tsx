import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {VideoPlayer} from './video-player';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={true}
        title="Movie Title"
        timeElapsed={553}
        duration={3695}
        onPlayClick={noop}
        onFullscreenClick={noop}
        onExitClick={noop}
      >
        <video />
      </VideoPlayer>
  );

  expect(tree).toMatchSnapshot();
});
