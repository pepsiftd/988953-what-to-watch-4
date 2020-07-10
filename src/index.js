import React from 'react';
import ReactDOM from 'react-dom';

import {App} from '@/components/app/app';
import {films} from '@/mocks/films';
import {genres} from '@/mocks/genres';
import {PromoMovie} from '@/mocks/promo';

ReactDOM.render(
    <App
      PromoMovie={PromoMovie}
      movies={films}
      genres={genres}
    />,
    document.querySelector(`#root`)
);
