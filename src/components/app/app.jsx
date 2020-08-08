import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Router, Route, Switch} from 'react-router-dom';
import {history} from '@/history';
import {AppRoute, filmObjectPropTypes, videoPlayerSettings} from '@/const';

import {getMovies, getMoviesOfCurrentGenre, getPromoMovie, getFavoriteMovies} from '@/reducer/data/selectors';
import {getCurrentGenre} from '@/reducer/app/selectors';
import {getAuthorizationStatus, getBadRequestStatus, getAuthorizationInfo} from '@/reducer/user/selectors';
import {Operation as UserOperation} from '@/reducer/user/user';
import {Operation as DataOperation} from '@/reducer/data/data';
import {ActionCreator as AppActionCreator} from '@/reducer/app/app';
import {AuthorizationStatus} from '@/reducer/user/user';

import {Main} from '@/components/main/main';
import {SignIn} from '@/components/sign-in/sign-in';
import {MyList} from '@/components/my-list/my-list';
import MoviePage from '@/components/movie-page/movie-page';
import {VideoPlayer} from '@/components/video-player/video-player';
import {AddReview} from '@/components/add-review/add-review';
import {PrivateRoute} from '@/components/private-route/private-route';

import {withActiveItem} from '@/hocs/with-active-item/with-active-item';
import {withVideoPlayer} from '@/hocs/with-video-player/with-video-player';
import {withAddReviewForm} from '@/hocs/with-add-review-form/with-add-review-form';
import {withSignInForm} from '@/hocs/with-sign-in-form/with-sign-in-form';

const MoviePageWithActiveItem = withActiveItem(MoviePage);
const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);
const AddReviewWrapped = withAddReviewForm(AddReview);
const SignInWrapped = withSignInForm(SignIn);

const App = ({
  promoMovie,
  movies,
  filteredMovies,
  favoriteMovies,
  currentGenre,
  titleClickHandler,
  authorizationStatus,
  authorizationInfo,
  onSignIn,
  isBadRequest,
  onToggleFavorite,
  onSendReview}) => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          authorizationStatus={authorizationStatus}
          path={`${AppRoute.MOVIE_PAGE}/:id/review`} exact
          render={({match}) => {
            const id = parseInt(match.params.id, 10);
            const movie = movies.find((it) => it.id === id);
            return (
              <AddReviewWrapped
                movie={movie}
                authorizationStatus={authorizationStatus}
                authorizationInfo={authorizationInfo}
                onSendReview={onSendReview}
              />
            );
          }}
        />

        <Route path={`${AppRoute.MOVIE_PAGE}/:id`} exact render={({match}) => (
          <MoviePageWithActiveItem
            id={parseInt(match.params.id, 10)}
            initialItemId={`Overview`}
          />)}
        />

        <Route path={AppRoute.ROOT} exact>
          <Main
            promoMovie={promoMovie}
            movies={movies}
            currentGenre={currentGenre}
            filteredMovies={filteredMovies}
            currentGenre={currentGenre}
            titleClickHandler={titleClickHandler}
            authorizationStatus={authorizationStatus}
            authorizationInfo={authorizationInfo}
            onToggleFavorite={onToggleFavorite}
          />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <SignInWrapped
            onSignIn={onSignIn}
            isBadRequest={isBadRequest}
            authorizationStatus={authorizationStatus}
          />
        </Route>

        <PrivateRoute
          authorizationStatus={authorizationStatus}
          authorizationInfo={authorizationInfo}
          path={AppRoute.MY_LIST} exact
        >
          <MyList
            favoriteMovies={favoriteMovies}
            authorizationStatus={authorizationStatus}
            authorizationInfo={authorizationInfo}
          />
        </PrivateRoute>

        <Route path={`${AppRoute.PLAYER}/:id`} exact render={({match}) => {
          const id = parseInt(match.params.id, 10);
          const movie = movies.find((it) => it.id === id);
          const videoSettings = Object.assign({}, videoPlayerSettings, {
            src: movie.fullVideo,
            poster: movie.poster,
          });

          return (
            <VideoPlayerWrapped
              title={movie.title}
              videoSettings={videoSettings}
              isActive={true}
            />
          );
        }}>
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
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  onSignIn: PropTypes.func.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  onSendReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentGenre: getCurrentGenre(state),
  filteredMovies: getMoviesOfCurrentGenre(state),
  favoriteMovies: getFavoriteMovies(state),
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  isBadRequest: getBadRequestStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  titleClickHandler: (genre) => {
    dispatch(AppActionCreator.setCurrentGenre(genre));
  },
  onSignIn: (authorizationData) => {
    dispatch(UserOperation.login(authorizationData, () => {
      dispatch(DataOperation.loadFavorite());
      history.go(-1);
    }));
  },
  onToggleFavorite: (id) => {
    dispatch(DataOperation.toggleFavorite(id));
  },
  onSendReview: (id, review, onSuccess, onError) => {
    dispatch(DataOperation.postReview(id, review))
      .then(() => {
        onSuccess();
        history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
      })
      .catch((err) => {
        onError(err);
      });
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
