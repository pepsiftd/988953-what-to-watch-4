import React from 'react';
import renderer from 'react-test-renderer';

import {VideoPlayer} from './video-player';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={true}
        title="Movie Title"
        timeElapsed="1:30:29"
        onPlayClick={() => {}}
        onFullscreenClick={() => {}}
        onExitClick={() => {}}
      >
        <video />
      </VideoPlayer>
  );

  expect(tree).toMatchSnapshot();
});
