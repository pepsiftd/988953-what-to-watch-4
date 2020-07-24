import {extend} from '@/utils';
import {FilmModel} from '@/models/film-model';

const initialState = {
  movies: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms: (movies) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: movies,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        movies: action.payload,
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
};

export {reducer, ActionType, ActionCreator, Operation};
