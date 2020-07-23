// import {films} from '@/mocks/films';
import {extend, getMoviesByGenre} from '@/utils';
import {FilmModel} from '@/models/film-model';

const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
};

const initialState = {
  currentGenre: `All genres`,
  movies: [],
  filteredMovies: [],
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },

  setAuthorizationStatus: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    };
  },

  loadFilms: (movies) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: movies,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        filteredMovies: getMoviesByGenre(state.movies, action.payload),
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        movies: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTHORIZED));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authorizationData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authorizationData.email,
      password: authorizationData.password,
    })
      .then(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTHORIZED));
      })
      .catch((err) => {
        throw err;
      });
  },

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
};

export {initialState, ActionType, ActionCreator, Operation, reducer, AuthorizationStatus};
