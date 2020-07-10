import React from 'react';
import PropTypes from 'prop-types';

import {Main} from '@/components/main/main';

const titleClickHandler = () => {};

const App = ({promoMovieTitle, promoMovieGenre, promoMovieYear, movies}) => {
  return (
    <Main
      promoMovieTitle={promoMovieTitle}
      promoMovieGenre={promoMovieGenre}
      promoMovieYear={promoMovieYear}
      movies={movies}
      titleClickHandler={titleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovieTitle: PropTypes.string.isRequired,
  promoMovieGenre: PropTypes.string.isRequired,
  promoMovieYear: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export {App};
