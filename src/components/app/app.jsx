import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getMovies, getMoviesOfCurrentGenre, getPromoMovie} from '@/reducer/data/selectors';
import {getCurrentGenre} from '@/reducer/app/selectors';
import {getAuthorizationStatus, getBadRequestStatus} from '@/reducer/user/selectors';
import {Operation as UserOperation} from '@/reducer/user/user';
import {ActionCreator as AppActionCreator} from '@/reducer/app/app';
import {Main} from '@/components/main/main';
import {SignIn} from '@/components/sign-in/sign-in';
import {AuthorizationStatus} from '@/reducer/user/user';

const App = ({promoMovie, movies, filteredMovies, currentGenre, titleClickHandler, authorizationStatus, onSignIn, isBadRequest}) => {
  return (
    authorizationStatus === AuthorizationStatus.AUTHORIZED ?
      <Main
        promoMovie={promoMovie}
        movies={movies}
        filteredMovies={filteredMovies}
        currentGenre={currentGenre}
        titleClickHandler={titleClickHandler}
        authorizationStatus={authorizationStatus}
      /> :
      <SignIn
        onSignIn={onSignIn}
        isBadRequest={isBadRequest}
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
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  onSignIn: PropTypes.func.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentGenre: getCurrentGenre(state),
  filteredMovies: getMoviesOfCurrentGenre(state),
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
  isBadRequest: getBadRequestStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  titleClickHandler: (genre) => {
    dispatch(AppActionCreator.setCurrentGenre(genre));
  },
  onSignIn: (authorizationData) => {
    dispatch(UserOperation.login(authorizationData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
