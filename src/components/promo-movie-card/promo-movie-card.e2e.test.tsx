import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {noop} from '@/utils';

import {PromoMovieCard} from './promo-movie-card';
import {movie} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';

Enzyme.configure({
  adapter: new Adapter(),
});


it(`PromoMovieCard clicks calls function correctly`, () => {
  const onToggleFavorite = jest.fn();
  const card = shallow(
      <PromoMovieCard
        movie={movie}
        onToggleFavorite={onToggleFavorite}
        authorizationStatus={`AUTHORIZED`}
        authorizationInfo={userInfo}
      />
  );

  const btn = card.find(`.btn--list`);

  btn.simulate(`click`, {
    preventDefault: noop
  });

  expect(onToggleFavorite).toHaveBeenCalledTimes(1);
  expect(onToggleFavorite).toHaveBeenNthCalledWith(1, movie.id);
});
