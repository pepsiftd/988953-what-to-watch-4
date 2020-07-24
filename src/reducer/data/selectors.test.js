import {getMovies, getMoviesOfCurrentGenre} from './selectors';
import {NameSpace} from '@/reducer/name-space';

it(`Selector should return movies`, () => {
  const state = {
    [NameSpace.DATA]: {
      movies: [{id: 1}, {id: 2}],
    },
  };

  expect(getMovies(state)).toEqual([{id: 1}, {id: 2}]);
});

it(`Selector should return movies of current genre`, () => {
  const state = {
    [NameSpace.DATA]: {
      movies: [
        {id: 1, genre: `Drama`},
        {id: 2, genre: `Thriller`},
        {id: 3, genre: `Thriller`},
        {id: 4, genre: `Horror`}],
    },
    [NameSpace.APP]: {
      currentGenre: `Thriller`,
    },
  };

  expect(getMoviesOfCurrentGenre(state)).toEqual([
    {id: 2, genre: `Thriller`},
    {id: 3, genre: `Thriller`},
  ]);
});
