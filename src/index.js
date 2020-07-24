import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from '@/components/app/app';
import {createAPI} from '@/api';
import {PromoMovie} from '@/mocks/promo';
import {combined as reducer} from '@/reducer/reducer';
import {AuthorizationStatus, ActionCreator as UserActionCreator, Operation as UserOperation} from '@/reducer/user/user';
import {Operation as DataOperation} from '@/reducer/data/data';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED));
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
        <App
          PromoMovie={PromoMovie}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

store.dispatch(DataOperation.loadFilms())
  .then(render);
store.dispatch(UserOperation.checkAuth());

