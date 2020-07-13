import {films} from '@/mocks/films';
import {extend, getMoviesByGenre} from '@/utils';

const initialState = {
  currentGenre: `all`,
  movies: films,
  filteredMovies: films,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },
  getMoviesByGenre: (genre) => {
    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: genre,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        filteredMovies: getMoviesByGenre(state.movies, action.payload)
      });
  }

  return state;
};

export {initialState, ActionType, ActionCreator, reducer};
