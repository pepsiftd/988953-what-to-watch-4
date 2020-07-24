import {NameSpace} from '@/reducer/name-space';
import {getMoviesByGenre} from '@/utils';

const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

const getMoviesOfCurrentGenre = (state) => {
  const genre = state[NameSpace.APP].currentGenre;
  const movies = state[NameSpace.DATA].movies;

  return getMoviesByGenre(movies, genre);
};

export {getMovies, getMoviesOfCurrentGenre};
