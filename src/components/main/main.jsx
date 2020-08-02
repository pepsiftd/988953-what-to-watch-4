import React from 'react';
import PropTypes from 'prop-types';
import {filmObjectPropTypes} from '@/const';

import {PromoMovieCard} from '@/components/promo-movie-card/promo-movie-card';
import {MoviesList} from '@/components/movies-list/movies-list';
import {GenresList} from '@/components/genres-list/genres-list';
import {withActiveItem} from '@/hocs/with-active-item/with-active-item';
import {withShowMoreButton} from '@/hocs/with-show-more-button/with-show-more-button';

import {AuthorizationStatus} from '@/reducer/user/user';

const INITIAL_GENRE_FILTER = `All genres`;
const INITIAL_CARDS_COUNT = 8;
const ADD_CARDS_ON_SHOW_MORE = 8;

const MoviesListWrapped = withShowMoreButton(withActiveItem(MoviesList));
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
            initialCardsCount={INITIAL_CARDS_COUNT}
            addCardsOnShowMore={ADD_CARDS_ON_SHOW_MORE}
          />
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
