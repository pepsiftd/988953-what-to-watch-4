import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '@/reducer';
import {Main} from '@/components/main/main';

const App = ({PromoMovie, movies, filteredMovies, currentGenre, titleClickHandler}) => {
  return (
    <Main
      PromoMovie={PromoMovie}
      movies={movies}
      filteredMovies={filteredMovies}
      currentGenre={currentGenre}
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
  movies: state.movies,
  currentGenre: state.currentGenre,
  filteredMovies: state.filteredMovies,
});

const mapDispatchToProps = (dispatch) => ({
  titleClickHandler: (genre) => {
    dispatch(ActionCreator.setCurrentGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
