import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {noop} from '@/utils';

import {PromoMovieCard} from './promo-movie-card';
import {movie} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';

it(`PromoMovieCard should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <PromoMovieCard
          movie={movie}
          onToggleFavorite={noop}
          authorizationStatus={`AUTHORIZED`}
          authorizationInfo={userInfo}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
