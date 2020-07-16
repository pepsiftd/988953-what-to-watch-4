import React from 'react';
import renderer from 'react-test-renderer';

import {GenresList} from './genres-list';

const movies = [
  {
    id: 1,
    title: `I, Robot`,
    genre: `drama`,
    year: `1994`,
    imageSrc: `img/i-robot.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 2,
    title: `Brave new world`,
    genre: `antiutopia`,
    year: `1994`,
    imageSrc: `img/brave-new-world.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 3,
    title: `1984`,
    genre: `antiutopia`,
    year: `1994`,
    imageSrc: `img/1984.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 4,
    title: `Dune`,
    genre: `sci-fi`,
    year: `1994`,
    imageSrc: `img/dune.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 5,
    title: `Cloverfeld`,
    genre: `thriller`,
    year: `1994`,
    imageSrc: `img/cloverfeld.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 6,
    title: `Jumanji: The new level`,
    genre: `Adventures`,
    year: `1994`,
    imageSrc: `img/jumanji-the-new-level.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  }
];

it(`GenresList renders correctly`, () => {
  const tree = renderer.create(
      <GenresList
        movies={movies}
        renderItem={() => {}}
        setActiveItem={() => {}}
        titleClickHandler={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
