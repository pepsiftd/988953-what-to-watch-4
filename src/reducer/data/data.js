import {extend} from '@/utils';
import {FilmModel} from '@/models/film-model';

const initialState = {
  movies: [],
  promoMovie: {},
  favoriteMovies: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
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
};

export {reducer, ActionType, ActionCreator, Operation};
