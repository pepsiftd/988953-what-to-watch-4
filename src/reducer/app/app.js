import {extend} from '@/utils';

const initialState = {
  currentGenre: `All genres`,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
  }

  return state;
};

export {initialState, ActionType, ActionCreator, reducer};
