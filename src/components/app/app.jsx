import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getMovies, getMoviesOfCurrentGenre, getPromoMovie} from '@/reducer/data/selectors';
import {getCurrentGenre} from '@/reducer/app/selectors';

import {ActionCreator as AppActionCreator} from '@/reducer/app/app';
import {Main} from '@/components/main/main';

const App = ({promoMovie, movies, filteredMovies, currentGenre, titleClickHandler}) => {
  return (
    <Main
      promoMovie={promoMovie}
      movies={movies}
      filteredMovies={filteredMovies}
      currentGenre={currentGenre}
      titleClickHandler={titleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  filteredMovies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  currentGenre: PropTypes.string.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentGenre: getCurrentGenre(state),
  filteredMovies: getMoviesOfCurrentGenre(state),
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  titleClickHandler: (genre) => {
    dispatch(AppActionCreator.setCurrentGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
