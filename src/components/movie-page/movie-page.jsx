import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, filmObjectPropTypes} from '@/const';
import {getMoviesByGenre} from '@/utils';

import {Operation as DataOperation} from '@/reducer/data/data';
import {AuthorizationStatus} from '@/reducer/user/user';
import {getAuthorizationStatus} from '@/reducer/user/selectors';
import {getMovies} from '@/reducer/data/selectors';

import {Overview} from '@/components/overview/overview';
import {Details} from '@/components/details/details';
import {Reviews} from '@/components/reviews/reviews';
import {UserBlock} from '@/components/user-block/user-block';
import {MoviesList} from '@/components/movies-list/movies-list';
import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

const MoviesListWithActiveItem = withActiveItem(MoviesList);

const MoviePage = ({movies, id, onToggleFavorite, authorizationStatus, setActiveItem, activeItemId}) => {
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

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock
              authorizationStatus={authorizationStatus}
              avatarImageSrc="/img/avatar.jpg"
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
                <button className="btn btn--play movie-card__button" type="button">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
                  <li className={`movie-nav__item ${activeItemId === `Overview` ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setActiveItem(`Overview`);
                      }}
                    >Overview</a>
                  </li>
                  <li className={`movie-nav__item ${activeItemId === `Details` ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setActiveItem(`Details`);
                      }}
                    >Details</a>
                  </li>
                  <li className={`movie-nav__item ${activeItemId === `Reviews` ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        setActiveItem(`Reviews`);
                      }}
                    >Reviews</a>
                  </li>
                </ul>
              </nav>

              {activeItemId === `Overview` &&
                <Overview
                  ratingScore={rating}
                  ratingCount={scoresCount}
                  description={description}
                  director={director}
                  starring={starring}
                />
              }

              {activeItemId === `Details` &&
                <Details
                  director={director}
                  starring={starring}
                  runTime={runTime}
                  genre={genre}
                  year={year}
                />
              }

              {activeItemId === `Reviews` &&
                <Reviews
                />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {// TODO ПЕРЕПИСАТЬ С ИСПОЛЬЗОВАНИЕМ STORE
          }
          <MoviesListWithActiveItem
            movies={getMoviesByGenre(movies, genre).filter((it) => it.id !== id).slice(0, 4)}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes)).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  activeItemId: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleFavorite: (id) => {
    dispatch(DataOperation.toggleFavorite(id));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
