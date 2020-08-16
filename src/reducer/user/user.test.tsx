import {initialState, ActionType, ActionCreator, Operation, reducer, AuthorizationStatus, AuthorizationError} from './user';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@/api.js';
import {UserInfoModel} from '@/models/user-info-model';

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
  it(`should make a correct api-request to /login`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
        .onGet(`/login`)
        .reply(200, authInfo);

    const dispatch = jest.fn();
    const authChecker = Operation.checkAuth();

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: UserInfoModel.parseUserInfo(authInfo),
        });
      });
  });

  it(`should correctly catch bad-request to /login`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(400, {response: {status: 400}});

    const dispatch = jest.fn();
    const login = Operation.login({email: `lsdkfj`, password: ``});

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_ERROR,
          payload: AuthorizationError.BAD_REQUEST,
        });
      });
  });

  it(`should correctly log user in and set UserInfo`, function () {
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(200, authInfo);

    const dispatch = jest.fn();
    const login = Operation.login({email: `correct@email.com`, password: `12345`});

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_ERROR,
          payload: AuthorizationError.NO_ERROR,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: UserInfoModel.parseUserInfo(authInfo),
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

  it(`sets Authorization Error correctly`, () => {
    expect(reducer({
      authorizationError: AuthorizationError.NO_ERROR,
    }, {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: AuthorizationError.BAD_REQUEST,
    })).toEqual({
      authorizationError: AuthorizationError.BAD_REQUEST,
    });
  });

  it(`sets Authorization Info correctly`, () => {
    expect(reducer({
      authorizationInfo: {},
    }, {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: authInfo,
    })).toEqual({
      authorizationInfo: authInfo,
    });
  });
});
