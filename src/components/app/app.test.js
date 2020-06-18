import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const promoMovieTitle = `I Am the Movie`;
const promoMovieGenre = `Thriller`;
const promoMovieYear = `2001`;
const movieNames = [
  `I, Robot`,
  `Brave new world`,
  `1984`,
  `Dune`,
  `Cloverfeld`,
  `Jumanji: The new level`
];

it(`App should render correctly`, () => {
  const tree = renderer.create(
      <App
        promoMovieTitle={promoMovieTitle}
        promoMovieGenre={promoMovieGenre}
        promoMovieYear={promoMovieYear}
        movieNames={movieNames}
      />
  );

  expect(tree).toMatchSnapshot();
});
