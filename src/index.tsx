import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from '@/components/app/app';
import {createAPI} from '@/api';
import {combined as reducer} from '@/reducer/reducer';
import {AuthorizationStatus, ActionCreator as UserActionCreator, Operation as UserOperation} from '@/reducer/user/user';
import {Operation as DataOperation} from '@/reducer/data/data';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

Promise.all([
  store.dispatch(DataOperation.loadFilms()),
  store.dispatch(DataOperation.loadPromo()),
])
  .then(render);
store.dispatch(UserOperation.checkAuth())
  .then(() => {
    store.dispatch(DataOperation.loadFavorite());
  });

