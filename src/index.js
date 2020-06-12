import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/app/app';

const PromoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      promoMovieTitle={PromoMovie.TITLE}
      promoMovieGenre={PromoMovie.GENRE}
      promoMovieYear={PromoMovie.YEAR}
    />,
    document.querySelector(`#root`)
);
