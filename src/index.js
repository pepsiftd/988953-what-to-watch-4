import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from '@/components/app/app';
import {createAPI} from '@/api';
import {PromoMovie} from '@/mocks/promo';
import {reducer, ActionCreator, AuthorizationStatus, Operation} from '@/reducer';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
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

store.dispatch(Operation.loadFilms())
  .then(() => {
    store.dispatch(ActionCreator.setCurrentGenre(`All genres`));
  })
  .then(render);
store.dispatch(Operation.checkAuth());

