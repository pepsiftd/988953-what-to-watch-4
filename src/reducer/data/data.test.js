import {reducer, ActionType, ActionCreator, Operation} from './data';
import {FilmModel} from '@/models/film-model';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@/api.js';

const api = createAPI(() => {});

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

it(`Data ActionCreator works correctly`, () => {
  expect(ActionCreator.loadFilms(movies)).toEqual({
    type: ActionType.LOAD_FILMS,
    payload: movies,
  });
});

describe(`Data Reducer`, () => {
  it(`returns initial state when not passed arguments`, () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
    });
  });

  it(` loads movies correctly`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: movies,
    })).toEqual({
      movies,
    });
  });
});

describe(`Data Operation`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

  it(`should make a correct api-request to /films`, function () {
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: ([new FilmModel({fake: true})]),
        });
      });
  });
});
