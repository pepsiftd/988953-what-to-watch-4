import * as React from 'react';
import * as renderer from 'react-test-renderer';

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
        cardsShowing={8}
        renderShowMore={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
