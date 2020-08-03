import {getMovies, getMoviesOfCurrentGenre, getPromoMovie, getFavoriteMovies, getReviews} from './selectors';
import {NameSpace} from '@/reducer/name-space';

describe(`Selector`, () => {
  it(`should return movies`, () => {
    const state = {
      [NameSpace.DATA]: {
        movies: [{id: 1}, {id: 2}],
      },
    };

    expect(getMovies(state)).toEqual([{id: 1}, {id: 2}]);
  });

  it(`should return favorite movies`, () => {
    const state = {
      [NameSpace.DATA]: {
        favoriteMovies: [{id: 1}, {id: 2}],
      },
    };

    expect(getFavoriteMovies(state)).toEqual([{id: 1}, {id: 2}]);
  });

  it(`should return promo movie`, () => {
    const state = {
      [NameSpace.DATA]: {
        promoMovie: {id: 1, title: `MAMA`, year: 2015},
      }
    };

    expect(getPromoMovie(state)).toEqual({id: 1, title: `MAMA`, year: 2015});
  });

  it(`should return movies of current genre`, () => {
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

  it(`should return reviews`, () => {
    const state = {
      [NameSpace.DATA]: {
        reviews: [{id: 1}, {id: 2}],
      },
    };

    expect(getReviews(state)).toEqual([{id: 1}, {id: 2}]);
  });
});
