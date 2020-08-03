import React from 'react';
import renderer from 'react-test-renderer';

import {MoviesList} from './movies-list';

const movies = [
  {
    id: 1,
    title: `I, Robot`,
    imageSrc: `img/i-robot.jpg`,
    preview: `preview-video.mp4`,
  },
  {
    id: 2,
    title: `Brave new world`,
    imageSrc: `img/brave-new-world.jpg`,
    preview: `preview-video.mp4`,
  },
  {
    id: 3,
    title: `1984`,
    imageSrc: `img/1984.jpg`,
    preview: `preview-video.mp4`,
  },
  {
    id: 4,
    title: `Dune`,
    imageSrc: `img/dune.jpg`,
    preview: `preview-video.mp4`,
  },
  {
    id: 5,
    title: `Cloverfeld`,
    imageSrc: `img/cloverfeld.jpg`,
    preview: `preview-video.mp4`,
  },
  {
    id: 6,
    title: `Jumanji: The new level`,
    imageSrc: `img/jumanji-the-new-level.jpg`,
    preview: `preview-video.mp4`,
  }
];

it(`MoviesList should render correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
        renderItem={() => {}}
        setActiveItem={() => {}}
        clearActiveItem={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
