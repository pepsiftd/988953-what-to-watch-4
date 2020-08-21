import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {noop} from '@/utils';
import {MovieInfoTab} from '@/const';

import {MoviePage} from './movie-page';

import {movies} from '@/test-data/movies';
import {reviews} from '@/test-data/comments';
import {userInfo} from '@/test-data/user';
import {AuthorizationStatus} from '@/reducer/user/user';


it(`MoviePage should render correctly`, () => {

  const tree = renderer.create(
      <Router history={history}>
        <MoviePage
          id={1}
          setActiveItem={noop}
          activeItemId={MovieInfoTab.OVERVIEW}
          movies={movies}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          authorizationInfo={userInfo}
          reviews={reviews}
          onToggleFavorite={noop}
          loadReviews={noop}
        />
      </Router>,
      {
        createNodeMock() {
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
