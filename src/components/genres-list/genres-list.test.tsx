import React from 'react';
import renderer from 'react-test-renderer';

import {noop} from '@/utils';
import {GenresList} from './genres-list';
import {movies} from '@/test-data/movies';

it(`GenresList renders correctly`, () => {
  const tree = renderer.create(
      <GenresList
        movies={movies}
        renderItem={noop}
        setActiveItem={noop}
        onTitleClick={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
