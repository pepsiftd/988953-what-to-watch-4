import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/components/app/app';

const PromoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

const movieNames = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

ReactDOM.render(
    <App
      promoMovieTitle={PromoMovie.TITLE}
      promoMovieGenre={PromoMovie.GENRE}
      promoMovieYear={PromoMovie.YEAR}
      movieNames={movieNames}
    />,
    document.querySelector(`#root`)
);
