import React from 'react';
import PropTypes from 'prop-types';
import {filmObjectPropTypes} from '@/const';

import {PromoMovieCard} from '@/components/promo-movie-card/promo-movie-card';
import {MoviesList} from '@/components/movies-list/movies-list';
import {GenresList} from '@/components/genres-list/genres-list';
import {PageFooter} from '@/components/page-footer/page-footer';

import {withActiveItem} from '@/hocs/with-active-item/with-active-item';
import {withShowMoreButton} from '@/hocs/with-show-more-button/with-show-more-button';

import {AuthorizationStatus} from '@/reducer/user/user';

const INITIAL_CARDS_COUNT = 8;
const ADD_CARDS_ON_SHOW_MORE = 8;

const MoviesListWrapped = withShowMoreButton(withActiveItem(MoviesList));
const GenresListWrapped = withActiveItem(GenresList);

const Main = ({
  promoMovie,
  movies,
  currentGenre,
  filteredMovies,
  titleClickHandler,
  authorizationStatus,
  authorizationInfo,
  onToggleFavorite}) => {

  return (
    <React.Fragment>
      <PromoMovieCard
        movie={promoMovie}
        onToggleFavorite={onToggleFavorite}
        authorizationStatus={authorizationStatus}
        authorizationInfo={authorizationInfo}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListWrapped
            initialItemId={currentGenre}
            movies={movies}
            titleClickHandler={titleClickHandler}
          />

          <MoviesListWrapped
            movies={filteredMovies}
            initialCardsCount={INITIAL_CARDS_COUNT}
            addCardsOnShowMore={ADD_CARDS_ON_SHOW_MORE}
          />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoMovie: PropTypes.shape(filmObjectPropTypes).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  currentGenre: PropTypes.string.isRequired,
  filteredMovies: PropTypes.arrayOf(PropTypes.shape(filmObjectPropTypes).isRequired).isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export {Main};
