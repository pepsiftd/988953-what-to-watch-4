import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {history} from '@/history';

import App from '@/components/app/app';
import {AppRoute} from '@/const';
import {createAPI} from '@/api';
import {combined as reducer} from '@/reducer/reducer';
import {AuthorizationStatus, ActionCreator as UserActionCreator, Operation as UserOperation} from '@/reducer/user/user';
import {Operation as DataOperation} from '@/reducer/data/data';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED));
  history.push(AppRoute.LOGIN);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
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

