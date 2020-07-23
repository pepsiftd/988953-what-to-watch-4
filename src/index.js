import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from '@/components/app/app';
import {createAPI} from '@/api';
import {PromoMovie} from '@/mocks/promo';
import {reducer} from '@/reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

const api = createAPI();

ReactDOM.render(
    <Provider store={store}>
      <App
        PromoMovie={PromoMovie}
      />
    </Provider>,
    document.querySelector(`#root`)
);
