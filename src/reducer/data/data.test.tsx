import {reducer, ActionType, ActionCreator, Operation} from './data';
import {FilmModel} from '@/models/film-model';
import {ReviewModel} from '@/models/review-model';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@/api.js';
import {noop} from '@/utils';

const api = createAPI(noop);

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

const reviews = [
  {
    'id': 1,
    'user': {
      'id': 4,
      'name': `Kate Muir`
    },
    'rating': 8.9,
    'comment': `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    'date': `2019-05-08T14:13:56.569Z`
  },
  {
    'id': 2,
    'user': {
      'id': 52,
      'name': `John Doe`
    },
    'rating': 3.2,
    'comment': `Boring, not worth the time spent on watching it`,
    'date': `2019-02-10T20:00:07.569Z`
  },
  {
    'id': 3,
    'user': {
      'id': 444,
      'name': `Jack Smith`
    },
    'rating': 10.0,
    'comment': `Brilliant masterpiece, perfect from every point of view.`,
    'date': `2019-09-03T04:38:01.569Z`
  },
];

it(`Data ActionCreator works correctly`, () => {
  expect(ActionCreator.loadFilms(movies)).toEqual({
    type: ActionType.LOAD_FILMS,
    payload: movies,
  });

  expect(ActionCreator.loadFavorite(movies)).toEqual({
    type: ActionType.LOAD_FAVORITE,
    payload: movies,
  });

  expect(ActionCreator.loadPromo({id: 0, title: `M`, genre: `O`, year: 1984})).toEqual({
    type: ActionType.LOAD_PROMO,
    payload: {id: 0, title: `M`, genre: `O`, year: 1984},
  });

  expect(ActionCreator.loadReviews(reviews)).toEqual({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  });
});

describe(`Data Reducer`, () => {
  it(`returns initial state when not passed arguments`, () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      promoMovie: {},
      favoriteMovies: [],
      reviews: [],
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

  it(`loads promo movie correctly`, () => {
    expect(reducer({
      promoMovie: [],
    }, {
      type: ActionType.LOAD_PROMO,
      payload: movies[0],
    })).toEqual({
      promoMovie: movies[0],
    });
  });

  it(`loads favorite movies correctly`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, {
      type: ActionType.LOAD_FAVORITE,
      payload: movies,
    })).toEqual({
      favoriteMovies: movies,
    });
  });

  it(`loads reviews correctly`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toEqual({
      reviews,
    });
  });
});

describe(`Data Operation`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

  apiMock
      .onGet(`/films/promo`)
      .reply(200, {name: `I`, genre: `AM`, year: 2000});
  apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);
  apiMock
      .onGet(`/comments/1`)
      .reply(200, reviews);

  it(`should make a correct api-request to /films`, function () {
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: ([new FilmModel({fake: true})]),
        });
      });
  });

  it(`should make a correct api-request to /films/promo`, function () {
    const dispatch = jest.fn();
    const promoLoader = Operation.loadPromo();

    return promoLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: (new FilmModel({name: `I`, genre: `AM`, year: 2000})),
        });
      });
  });

  it(`should make a correct api-request to /favorite`, function () {
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFavorite();

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE,
          payload: ([new FilmModel({fake: true})]),
        });
      });
  });

  it(`should make a correct api-request to /comments/:id`, function () {
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = Operation.loadReviews(id);

    return reviewsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: ReviewModel.parseReviews(reviews),
        });
      });
  });
});
