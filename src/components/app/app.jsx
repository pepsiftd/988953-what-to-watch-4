import React from 'react';
import PropTypes from 'prop-types';

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

App.propTypes = {
  promoMovieTitle: PropTypes.string.isRequired,
  promoMovieGenre: PropTypes.string.isRequired,
  promoMovieYear: PropTypes.string.isRequired,
  movieNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
