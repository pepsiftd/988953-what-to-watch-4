import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, filmObjectPropTypes, MovieInfoTab, MAX_CARDS_ON_MOVIE_PAGE} from '@/const';
import {getMoviesByGenre} from '@/utils';
import {history} from '@/history';

import {Operation as DataOperation} from '@/reducer/data/data';
import {AuthorizationStatus} from '@/reducer/user/user';
import {getAuthorizationStatus, getAuthorizationInfo} from '@/reducer/user/selectors';
import {getMovies, getReviews} from '@/reducer/data/selectors';

import {Overview} from '@/components/overview/overview';
import {Details} from '@/components/details/details';
import {Reviews} from '@/components/reviews/reviews';
import {UserBlock} from '@/components/user-block/user-block';
import {MoviesList} from '@/components/movies-list/movies-list';
import {PageFooter} from '@/components/page-footer/page-footer';
import {Logo} from '@/components/logo/logo';

import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

const MoviesListWithActiveItem = withActiveItem(MoviesList);

class MoviePage extends PureComponent {
  componentDidMount() {
    const {id, loadReviews} = this.props;
    loadReviews(id);
  }

  componentDidUpdate(prevProps) {
    const {id, loadReviews} = this.props;
    const {id: prevId} = prevProps;

    if (prevId !== id) {
      loadReviews(id);
    }
  }

  render() {
    const {
      movies,
      id,
      onToggleFavorite,
      authorizationStatus,
      authorizationInfo,
      reviews,
      setActiveItem,
      activeItemId
    } = this.props;
    const movie = movies.find((it) => it.id === id);
    const {
      title,
      genre,
      year,
      poster,
      backgroundImage,
      isFavorite,

      rating,
      scoresCount,
      description,
      director,
      starring,

      runTime,
    } = movie;

    const isAuthorized = authorizationStatus === AuthorizationStatus.AUTHORIZED;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo />

              <UserBlock
                authorizationStatus={authorizationStatus}
                authorizationInfo={authorizationInfo}
              />
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={() => {
                      history.push(`${AppRoute.PLAYER}/${id}`);
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => {
                      onToggleFavorite(id);
                    }}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  {isAuthorized && <Link to={`${AppRoute.MOVIE_PAGE}/${id}/review`} className="btn movie-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={`${title} poster`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className={`movie-nav__item ${activeItemId === MovieInfoTab.OVERVIEW ? `movie-nav__item--active` : ``}`}>
                      <a
                        href="#"
                        className="movie-nav__link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          setActiveItem(MovieInfoTab.OVERVIEW);
                        }}
                      >Overview</a>
                    </li>
                    <li className={`movie-nav__item ${activeItemId === MovieInfoTab.DETAILS ? `movie-nav__item--active` : ``}`}>
                      <a
                        href="#"
                        className="movie-nav__link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          setActiveItem(MovieInfoTab.DETAILS);
                        }}
                      >Details</a>
                    </li>
                    <li className={`movie-nav__item ${activeItemId === MovieInfoTab.REVIEWS ? `movie-nav__item--active` : ``}`}>
                      <a
                        href="#"
                        className="movie-nav__link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          setActiveItem(MovieInfoTab.REVIEWS);
                        }}
                      >Reviews</a>
                    </li>
                  </ul>
                </nav>

                {activeItemId === MovieInfoTab.OVERVIEW &&
                  <Overview
                    ratingScore={rating}
                    ratingCount={scoresCount}
                    description={description}
                    director={director}
                    starring={starring}
                  />
                }

                {activeItemId === MovieInfoTab.DETAILS &&
                  <Details
                    director={director}
                    starring={starring}
                    runTime={runTime}
                    genre={genre}
                    year={year}
                  />
                }

                {activeItemId === MovieInfoTab.REVIEWS &&
                  <Reviews
                    reviews={reviews}
                  />
                }
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesListWithActiveItem
              movies={getMoviesByGenre(movies, genre).filter((it) => it.id !== id).slice(0, MAX_CARDS_ON_MOVIE_PAGE)}
            />
          </section>

          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}
MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes)).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  })).isRequired,
  loadReviews: PropTypes.func.isRequired,
  activeItemId: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleFavorite: (id) => {
    dispatch(DataOperation.toggleFavorite(id));
  },
  loadReviews: (id) => {
    dispatch(DataOperation.loadReviews(id));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
