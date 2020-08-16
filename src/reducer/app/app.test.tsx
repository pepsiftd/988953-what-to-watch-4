import {ActionCreator, reducer, ActionType, initialState} from './app';

it(`App ActionCreator works correctly`, () => {
  expect(ActionCreator.setCurrentGenre(`Soviet classic`)).toEqual({
    type: ActionType.SET_CURRENT_GENRE,
    payload: `Soviet classic`,
  });
});

describe(`App reducer`, () => {
  it(`returns initial state when not passed arguments`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`sets current genre correctly`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Soap opera`,
    })).toEqual({
      currentGenre: `Soap opera`,
    });
  });
});
