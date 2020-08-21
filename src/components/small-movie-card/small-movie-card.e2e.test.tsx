import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {SmallMovieCard} from './small-movie-card';
import {movie} from '@/test-data/movies';

configure({
  adapter: new Adapter()
});

const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();

it(`When SmallMovieCard hovered should return movie id`, () => {
  const card = shallow(
      <SmallMovieCard
        movie={movie}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <video />
      </SmallMovieCard>
  );

  card.simulate(`mouseEnter`);
  card.simulate(`mouseLeave`);

  setTimeout(() => {
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movie.id);
  }, 1100);
  expect(onMouseLeave).toHaveBeenCalledTimes(1);
});
