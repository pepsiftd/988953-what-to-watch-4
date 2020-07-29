import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Router, Route, Switch} from 'react-router-dom';
import {history} from '@/history';
import {AppRoute} from '@/const';

import {getMovies, getMoviesOfCurrentGenre, getPromoMovie} from '@/reducer/data/selectors';
import {getCurrentGenre} from '@/reducer/app/selectors';
import {getAuthorizationStatus, getBadRequestStatus} from '@/reducer/user/selectors';
import {Operation as UserOperation} from '@/reducer/user/user';
import {ActionCreator as AppActionCreator} from '@/reducer/app/app';
import {AuthorizationStatus} from '@/reducer/user/user';

import {Main} from '@/components/main/main';
import {SignIn} from '@/components/sign-in/sign-in';
import {MyList} from '@/components/my-list/my-list';

const App = ({promoMovie, movies, filteredMovies, currentGenre, titleClickHandler, authorizationStatus, onSignIn, isBadRequest}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            promoMovie={promoMovie}
            movies={movies}
            filteredMovies={filteredMovies}
            currentGenre={currentGenre}
            titleClickHandler={titleClickHandler}
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignIn
            onSignIn={onSignIn}
            isBadRequest={isBadRequest}
          />
        </Route>
        <Route path={AppRoute.MY_LIST} exact>
          <MyList
            favoriteMovies={movies}
          />
        </Route>
      </Switch>
    </Router>
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
    dispatch(UserOperation.login(authorizationData, () => {
      history.push(AppRoute.ROOT);
    }));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
