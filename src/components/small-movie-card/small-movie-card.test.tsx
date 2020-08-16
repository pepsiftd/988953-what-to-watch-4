import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {movie} from '@/test-data/movies';
import {noop} from '@/utils';

it(`SmallMovieCard should render correct movie name`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SmallMovieCard
          movie={movie}
          onMouseEnter={noop}
          onMouseLeave={noop}
        >
          <video />
        </SmallMovieCard>
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
