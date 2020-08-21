import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {noop} from '@/utils';
import {MovieInfoTab} from '@/const';

import MoviePage from './movie-page';
import {store as testStoreData} from '@/test-data/store';

const mockStore = configureStore([]);

it(`MoviePage should render correctly`, () => {
  const store = mockStore(testStoreData);

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MoviePage
            id={1}
            setActiveItem={noop}
            activeItemId={MovieInfoTab.OVERVIEW}
          />
        </Provider>
      </Router>,
      {
        createNodeMock() {
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
