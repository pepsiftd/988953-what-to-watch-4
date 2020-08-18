import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import App from './app';
import {store as testStoreData} from '@/test-data/store';

import {noop} from '@/utils';


const mockStore = configureStore([]);

it(`App should render correctly`, () => {
  const store = mockStore(testStoreData);

  const tree = renderer.create(
      <Provider store={store}>
        <App
          onTitleClick={noop}
          favoriteMovies={[]}
        />
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
