import React from 'react';
import renderer from 'react-test-renderer';

import {MoviesList} from './movies-list';
import {movies} from '@/test-data/movies';
import {noop} from '@/utils';

it(`MoviesList should render correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
        renderItem={noop}
        setActiveItem={noop}
        clearActiveItem={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
