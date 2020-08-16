import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {noop} from '@/utils';
import {MovieCardTop} from './movie-card-top';

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Add to favorite button click calls function correctly`, () => {
  const onToggleFavorite = jest.fn();
  const card = shallow(
      <MovieCardTop
        id={1}
        title={`MovieTitle`}
        year={1987 }
        genre={`Thriller`}
        isFavorite={false}
        isAuthorized={true}
        onToggleFavorite={onToggleFavorite}
      />
  );

  const btn = card.find(`.btn--list`);

  btn.simulate(`click`, {
    preventDefault: noop
  });

  expect(onToggleFavorite).toHaveBeenCalledTimes(1);
  expect(onToggleFavorite).toHaveBeenNthCalledWith(1, 1);
});
