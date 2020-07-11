import React from 'react';
import renderer from 'react-test-renderer';

import {VideoPlayer} from './video-player';

const config = {
  src: `video-video-xxx.mp4`,
  poster: `img/video-poster-xxx.jpg`,
  isPlaying: true,
  isMute: true,
  width: `280`,
  height: `175`,
};

it(`VideoPlayer should render correctly`, () => {
  const player = renderer.create(
      <VideoPlayer
        {...config}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  );

  expect(player).toMatchSnapshot();
});
