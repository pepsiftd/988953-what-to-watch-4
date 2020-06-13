import React from 'react';
import Main from '@/components/main/main';

const App = ({promoMovieTitle, promoMovieGenre, promoMovieYear, movieNames}) => {
  return (
    <Main
      promoMovieTitle={promoMovieTitle}
      promoMovieGenre={promoMovieGenre}
      promoMovieYear={promoMovieYear}
      movieNames={movieNames}
    />
  );
};

export default App;
