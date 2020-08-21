import * as React from 'react';
import {FilmObject, AuthInfo} from '@/types';

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

interface Props {
  promoMovie: FilmObject;
  movies: FilmObject[];
  currentGenre: string;
  filteredMovies: FilmObject[];
  onTitleClick: (genre: string) => void;
  authorizationStatus: AuthorizationStatus;
  authorizationInfo: AuthInfo;
  onToggleFavorite: () => void;
}

const Main: React.FunctionComponent<Props> = ({
  promoMovie,
  movies,
  currentGenre,
  filteredMovies,
  onTitleClick,
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
            onTitleClick={onTitleClick}
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

export {Main};
