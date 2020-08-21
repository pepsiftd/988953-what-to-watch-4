import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {noop} from '@/utils';

import {MovieCardTop} from './movie-card-top';

it(`MovieCardTop renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <MovieCardTop
          id={1}
          title={`MovieTitle`}
          year={1995}
          genre={`Thriller`}
          isFavorite={true}
          isAuthorized={true}
          onToggleFavorite={noop}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
