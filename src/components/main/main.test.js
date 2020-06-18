import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

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

it(`Main should render correctly`, () => {
  const tree = renderer.create(
      <Main
        promoMovieTitle={promoMovieTitle}
        promoMovieGenre={promoMovieGenre}
        promoMovieYear={promoMovieYear}
        movieNames={movieNames}
      />
  );

  expect(tree).toMatchSnapshot();
});
