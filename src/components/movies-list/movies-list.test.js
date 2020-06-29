import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from './movies-list';

const movies = [
  {
    title: `I, Robot`,
    imageSrc: `img/i-robot.jpg`,
    movieLink: `movie-page.html`,
  },
  {
    title: `Brave new world`,
    imageSrc: `img/brave-new-world.jpg`,
    movieLink: `movie-page.html`,
  },
  {
    title: `1984`,
    imageSrc: `img/1984.jpg`,
    movieLink: `movie-page.html`,
  },
  {
    title: `Dune`,
    imageSrc: `img/dune.jpg`,
    movieLink: `movie-page.html`,
  },
  {
    title: `Cloverfeld`,
    imageSrc: `img/cloverfeld.jpg`,
    movieLink: `movie-page.html`,
  },
  {
    title: `Jumanji: The new level`,
    imageSrc: `img/jumanji-the-new-level.jpg`,
    movieLink: `movie-page.html`,
  }
];

it(`MoviesList should render correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
      />
  );

  expect(tree).toMatchSnapshot();
});
