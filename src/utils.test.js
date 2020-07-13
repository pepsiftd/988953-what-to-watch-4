import {extend, getMoviesByGenre} from './utils';

const movies = [
  {
    id: 1,
    title: `A Beautiful Mind`,
    genre: `drama`,
    year: `2001`,
    imageSrc: `http://placehold.it/280x175`,
    movieLink: `movie-page.html`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 2,
    title: `Fahrenheit 451`,
    genre: `antiutopia`,
    year: `1966`,
    imageSrc: `http://placehold.it/280x175`,
    movieLink: `movie-page.html`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 3,
    title: `Equilibrium`,
    genre: `antiutopia`,
    year: `2002`,
    imageSrc: `http://placehold.it/280x175`,
    movieLink: `movie-page.html`,
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
        movieLink: `movie-page.html`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 3,
        title: `Equilibrium`,
        genre: `antiutopia`,
        year: `2002`,
        imageSrc: `http://placehold.it/280x175`,
        movieLink: `movie-page.html`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
    ]);
  });
});

