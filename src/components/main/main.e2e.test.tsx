import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';
import {promoMovie, movies} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';
import {noop} from '@/utils';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoMovie={promoMovie}
        movies={movies}
        filteredMovies={movies}
        currentGenre={`All genres`}
        onTitleClick={onTitleClick}
        onToggleFavorite={noop}
        authorizationStatus="AUTHORIZED"
        authorizationInfo={userInfo}
      />
  );

  const titles = main.find(`.catalog__genres-link`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(onTitleClick).toHaveBeenCalledTimes(titles.length);
});
