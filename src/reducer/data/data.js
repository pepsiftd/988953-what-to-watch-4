import {extend} from '@/utils';
import {FilmModel} from '@/models/film-model';
import {ReviewModel} from '@/models/review-model';
import {getMovies} from './selectors';

const initialState = {
  movies: [],
  promoMovie: {},
  favoriteMovies: [],
  reviews: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadFilms: (movies) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: movies,
    };
  },

  loadPromo: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promoMovie,
    };
  },

  loadFavorite: (favoriteMovies) => {
    return {
      type: ActionType.LOAD_FAVORITE,
      payload: favoriteMovies,
    };
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favoriteMovies: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = FilmModel.parseFilms(response.data);
        dispatch(ActionCreator.loadFilms(movies));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoMovie = FilmModel.parseFilm(response.data);
        dispatch(ActionCreator.loadPromo(promoMovie));
      });
  },
  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteMovies = FilmModel.parseFilms(response.data);
        dispatch(ActionCreator.loadFavorite(favoriteMovies));
      })
      .catch((err) => {
        throw err;
      });
  },
  toggleFavorite: (id) => (dispatch, getState, api) => {
    const state = getState();
    const film = getMovies(state).find((movie) => movie.id === id);

    return api.post(`/favorite/${id}/${film.isFavorite ? `0` : `1`}`)
      .then(() => {
        dispatch(Operation.loadFilms());
        dispatch(Operation.loadFavorite());
        dispatch(Operation.loadPromo());
      })
      .catch((err) => {
        throw err;
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const reviews = ReviewModel.parseReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
  postReview: (id, review) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        const reviews = ReviewModel.parseReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      })
      .catch((err) => {
        throw err;
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};
