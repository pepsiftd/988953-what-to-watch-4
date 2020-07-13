import {ActionType, ActionCreator, reducer} from './reducer';

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

it(`ActionCreator works correctly`, () => {
  expect(ActionCreator.setCurrentGenre(`ibm`)).toEqual({
    type: ActionType.SET_CURRENT_GENRE,
    payload: `ibm`,
  });

  expect(ActionCreator.getMoviesByGenre(`chi`)).toEqual({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: `chi`,
  });
});

describe(`reducer`, () => {
  it(`sets current genre correctly`, () => {
    expect(reducer({
      currentGenre: `all`,
      movies,
      filteredMovies: movies,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `soap`,
    })).toEqual({
      currentGenre: `soap`,
      movies,
      filteredMovies: movies,
    });
  });

  it(`gets filtered movies list correctly`, () => {
    expect(reducer({
      movies,
      filteredMovies: movies,
    }, {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: `drama`,
    })).toEqual({
      movies,
      filteredMovies: [
        {
          id: 1,
          title: `A Beautiful Mind`,
          genre: `drama`,
          year: `2001`,
          imageSrc: `http://placehold.it/280x175`,
          movieLink: `movie-page.html`,
          preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        },
      ],
    });
  });
});
