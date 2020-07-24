import {createSelector} from 'reselect';

import {NameSpace} from '@/reducer/name-space';
import {getMoviesByGenre} from '@/utils';
import {getCurrentGenre} from '@/reducer/app/selectors';

const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

const getMoviesOfCurrentGenre = createSelector(
    getMovies,
    getCurrentGenre,
    getMoviesByGenre
);

export {getMovies, getMoviesOfCurrentGenre, getPromoMovie};
