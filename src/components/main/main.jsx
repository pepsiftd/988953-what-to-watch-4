import React from 'react';
import PropTypes from 'prop-types';
import {filmObjectPropTypes} from '@/const';

import {PromoMovieCard} from '@/components/promo-movie-card/promo-movie-card';
import {MoviesList} from '@/components/movies-list/movies-list';
import {GenresList} from '@/components/genres-list/genres-list';
import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

import {AuthorizationStatus} from '@/reducer/user/user';

const INITIAL_GENRE_FILTER = `All genres`;

const MoviesListWrapped = withActiveItem(MoviesList);
const GenresListWrapped = withActiveItem(GenresList);

const Main = ({promoMovie, movies, filteredMovies, titleClickHandler, authorizationStatus, onToggleFavorite}) => {

  return (
    <React.Fragment>
      <PromoMovieCard
        movie={promoMovie}
        onToggleFavorite={onToggleFavorite}
        authorizationStatus={authorizationStatus}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListWrapped
            initialItemId={INITIAL_GENRE_FILTER}
            movies={movies}
            titleClickHandler={titleClickHandler}
          />

          <MoviesListWrapped
            movies={filteredMovies}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

Main.propTypes = {
  promoMovie: PropTypes.shape(filmObjectPropTypes).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  filteredMovies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  onToggleFavorite: PropTypes.func.isRequired,
};

export {Main};
