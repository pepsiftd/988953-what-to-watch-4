import {ActionType, ActionCreator, reducer, initialState} from './reducer';

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
});

describe(`reducer`, () => {
  it(`returns initial state when not passed arguments`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`sets current genre correctly`, () => {
    expect(reducer({
      currentGenre: `All genres`,
      movies,
      filteredMovies: movies,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `soap`,
    })).toEqual({
      currentGenre: `soap`,
      movies,
      filteredMovies: [],
    });
  });

  it(`gets filtered movies list correctly`, () => {
    expect(reducer({
      currentGenre: `All genres`,
      movies,
      filteredMovies: movies,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `drama`,
    })).toEqual({
      currentGenre: `drama`,
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
