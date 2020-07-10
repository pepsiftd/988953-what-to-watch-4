import React from 'react';
import PropTypes from 'prop-types';

import {Main} from '@/components/main/main';

const titleClickHandler = () => {};

const App = ({PromoMovie, movies, genres}) => {
  return (
    <Main
      PromoMovie={PromoMovie}
      movies={movies}
      genres={genres}
      titleClickHandler={titleClickHandler}
    />
  );
};

App.propTypes = {
  PromoMovie: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export {App};
