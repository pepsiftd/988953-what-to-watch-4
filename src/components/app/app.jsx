import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Router, Route, Switch} from 'react-router-dom';
import {history} from '@/history';
import {AppRoute, filmObjectPropTypes} from '@/const';

import {getMovies, getMoviesOfCurrentGenre, getPromoMovie, getFavoriteMovies} from '@/reducer/data/selectors';
import {getCurrentGenre} from '@/reducer/app/selectors';
import {getAuthorizationStatus, getBadRequestStatus} from '@/reducer/user/selectors';
import {Operation as UserOperation} from '@/reducer/user/user';
import {Operation as DataOperation} from '@/reducer/data/data';
import {ActionCreator as AppActionCreator} from '@/reducer/app/app';
import {AuthorizationStatus} from '@/reducer/user/user';

import {Main} from '@/components/main/main';
import {SignIn} from '@/components/sign-in/sign-in';
import {MyList} from '@/components/my-list/my-list';
import MoviePage from '@/components/movie-page/movie-page';
import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

const MoviePageWithActiveItem = withActiveItem(MoviePage);

const App = ({
  promoMovie,
  movies,
  filteredMovies,
  favoriteMovies,
  currentGenre,
  titleClickHandler,
  authorizationStatus,
  onSignIn,
  isBadRequest,
  onToggleFavorite}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={`${AppRoute.MOVIE_PAGE}/:id`} exact render={({match}) => (
          <MoviePageWithActiveItem
            id={parseInt(match.params.id, 10)}
            initialItemId={`Overview`}
          />)}
        />
        <Route path="/dev-movie-page" exact render={() => (
          <MoviePageWithActiveItem
            id={15}
            initialItemId={`Overview`}
          />)}
        />
        <Route path={AppRoute.ROOT} exact>
          <Main
            promoMovie={promoMovie}
            movies={movies}
            filteredMovies={filteredMovies}
            currentGenre={currentGenre}
            titleClickHandler={titleClickHandler}
            authorizationStatus={authorizationStatus}
            onToggleFavorite={onToggleFavorite}
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
            favoriteMovies={favoriteMovies}
          />
        </Route>
        <Route>
          <h1>Error 404</h1>
          <p>Route unknown</p>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape(filmObjectPropTypes).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  filteredMovies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  currentGenre: PropTypes.string.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  onSignIn: PropTypes.func.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentGenre: getCurrentGenre(state),
  filteredMovies: getMoviesOfCurrentGenre(state),
  favoriteMovies: getFavoriteMovies(state),
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
      dispatch(DataOperation.loadFavorite());
      history.push(AppRoute.ROOT);
    }));
  },
  onToggleFavorite: (id) => {
    dispatch(DataOperation.toggleFavorite(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
