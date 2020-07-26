import {initialState, ActionType, ActionCreator, Operation, reducer, AuthorizationStatus} from './user';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@/api.js';

const api = createAPI(() => {});

const authInfo = {
  'id': 1,
  'email': `Oliver.conner@gmail.com`,
  'name': `Oliver.conner`,
  'avatar_url': `img/1.png`
};


it(`User ActionCreator works correctly`, () => {
  expect(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTHORIZED)).toEqual({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: AuthorizationStatus.AUTHORIZED,
  });
});

describe(`User Operation`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
      .onGet(`/login`)
      .reply(200, authInfo);

  it(`should make a correct api-request to /login`, function () {
    const dispatch = jest.fn();
    const authChecker = Operation.checkAuth();

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTHORIZED,
        });
      });
  });
});

describe(`User reducer`, () => {
  it(`returns initial state when not passed arguments`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`sets Authorization Status correctly`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTHORIZED,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTHORIZED,
    });
  });
});
