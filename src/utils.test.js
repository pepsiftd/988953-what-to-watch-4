import {
  extend,
  getMoviesByGenre,
  getUniqueItems,
  getGenresFromMovies,
  humanizeRunTime,
  getRatingEstimate,
  humanizeTimeElapsed,
  getRatingString,
  getFormattedDate,
  checkEmail,
} from './utils';

const movies = [
  {
    id: 1,
    title: `A Beautiful Mind`,
    genre: `drama`,
    year: `2001`,
    imageSrc: `http://placehold.it/280x175`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 2,
    title: `Fahrenheit 451`,
    genre: `antiutopia`,
    year: `1966`,
    imageSrc: `http://placehold.it/280x175`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 3,
    title: `Equilibrium`,
    genre: `antiutopia`,
    year: `2002`,
    imageSrc: `http://placehold.it/280x175`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

it(`extend works correctly`, () => {
  expect(extend({a: 1, b: 2}, {b: 42, c: 3, d: 4})).toEqual({a: 1, b: 42, c: 3, d: 4});
});

describe(`getMoviesByGenre returns`, () => {
  it(`all movies when given genre 'All genres'`, () => {
    expect(getMoviesByGenre(movies, `All genres`)).toEqual(movies);
  });

  it(`no movies when no has none of such genre`, () => {
    expect(getMoviesByGenre(movies, `piupiu`)).toEqual([]);
  });

  it(`a list of movies with specified genre`, () => {
    expect(getMoviesByGenre(movies, `antiutopia`)).toEqual([
      {
        id: 2,
        title: `Fahrenheit 451`,
        genre: `antiutopia`,
        year: `1966`,
        imageSrc: `http://placehold.it/280x175`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 3,
        title: `Equilibrium`,
        genre: `antiutopia`,
        year: `2002`,
        imageSrc: `http://placehold.it/280x175`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
    ]);
  });
});

it(`getUniqueItems works correctly`, () => {
  expect(getUniqueItems([0, 0, 1, 2, 5, 1, 0, 5, 2])).toEqual([0, 1, 2, 5]);
  expect(getUniqueItems(movies.map((movie) => movie.genre))).toEqual([`drama`, `antiutopia`]);
});

it(`getGenresFromMovies works correctly`, () => {
  expect(getGenresFromMovies(movies)).toEqual([`drama`, `antiutopia`]);
});

it(`humanizeRunTime works correctly`, () => {
  expect(humanizeRunTime(15)).toEqual(`15m`);
  expect(humanizeRunTime(120)).toEqual(`2h`);
  expect(humanizeRunTime(189)).toEqual(`3h 9m`);
});

it(`getRatingEstimate works correctly`, () => {
  expect(getRatingEstimate(1.3)).toEqual(`Bad`);
  expect(getRatingEstimate(3)).toEqual(`Normal`);
  expect(getRatingEstimate(4.5)).toEqual(`Normal`);
  expect(getRatingEstimate(5)).toEqual(`Good`);
  expect(getRatingEstimate(7.5)).toEqual(`Good`);
  expect(getRatingEstimate(8)).toEqual(`Very good`);
  expect(getRatingEstimate(9.5)).toEqual(`Very good`);
  expect(getRatingEstimate(10)).toEqual(`Awesome`);
});

it(`humanizeTimeElapsed works correctly`, () => {
  expect(humanizeTimeElapsed(10)).toEqual(`00:00:10`);
  expect(humanizeTimeElapsed(330)).toEqual(`00:05:30`);
  expect(humanizeTimeElapsed(3930)).toEqual(`01:05:30`);
  expect(humanizeTimeElapsed(36600)).toEqual(`10:10:00`);
});

it(`getRatingString works correctly`, () => {
  expect(getRatingString(8.9)).toEqual(`8,9`);
  expect(getRatingString(3.54)).toEqual(`3,5`);
  expect(getRatingString(5.0)).toEqual(`5,0`);
  expect(getRatingString(8)).toEqual(`8,0`);
  expect(getRatingString(10)).toEqual(`10,0`);
});

it(`getFormattedDate works correctly`, () => {
  expect(getFormattedDate(new Date(`December 17, 1995`))).toEqual(`December 17, 1995`);
  expect(getFormattedDate(new Date(`February 5, 2018`))).toEqual(`February 5, 2018`);
});

describe(`checkEmail`, () => {
  it(`should return false when passed empty string`, () => {
    expect(checkEmail(``)).toEqual(false);
  });
  it(`should return false when passed a string without @`, () => {
    expect(checkEmail(`yapochta.ru`)).toEqual(false);
  });
  it(`should return false when passed a string without .`, () => {
    expect(checkEmail(`yapo@chtaru`)).toEqual(false);
  });
  it(`should return false when passed only spaces`, () => {
    expect(checkEmail(`       `)).toEqual(false);
  });
  it(`should return false when passed a string without @`, () => {
    expect(checkEmail(`yapochta.ru`)).toEqual(false);
  });
  it(`should return false when passed a string with spaces`, () => {
    expect(checkEmail(`ya@pochta.ru mail`)).toEqual(false);
  });
  it(`should return true when passed example@microsoft.com`, () => {
    expect(checkEmail(`example@microsoft.com`)).toEqual(true);
  });
  it(`should return true when passed example.server@edu.nist.gov`, () => {
    expect(checkEmail(`example.server@edu.nist.gov`)).toEqual(true);
  });
});
