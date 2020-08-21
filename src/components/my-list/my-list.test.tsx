import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {MyList} from './my-list';
import {movies as favoriteMovies} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';

it(`MyList should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <MyList
          favoriteMovies={favoriteMovies}
          authorizationStatus={`AUTHORIZED`}
          authorizationInfo={userInfo}
        />
      </Router>
      , {
        createNodeMock() {
          return {};
        }
      });

  expect(tree).toMatchSnapshot();
});
