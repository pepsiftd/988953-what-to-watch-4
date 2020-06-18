import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be pressed`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(
      <Main
        promoMovieTitle={promoMovieTitle}
        promoMovieGenre={promoMovieGenre}
        promoMovieYear={promoMovieYear}
        movieNames={movieNames}
        titleClickHandler={titleClickHandler}
      />
  );

  const titles = main.find(`.catalog__genres-link`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(titleClickHandler).toHaveBeenCalledTimes(titles.length);
});
