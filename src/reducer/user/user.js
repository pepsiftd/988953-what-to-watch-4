import {extend} from '@/utils';

const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
};

const AuthorizationError = {
  NO_ERROR: 200,
  BAD_REQUEST: 400,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.AUTHORIZED,
  authorizationError: AuthorizationError.NO_ERROR,
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
};

const ActionCreator = {
  setAuthorizationStatus: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    };
  },
  setAuthorizationError: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: status,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationError: action.payload,
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
        if (err.response.status === AuthorizationError.BAD_REQUEST) {
          dispatch(ActionCreator.setAuthorizationError(AuthorizationError.BAD_REQUEST));
        } else {
          throw err;
        }
      });
  },
};

export {initialState, ActionType, ActionCreator, Operation, reducer, AuthorizationStatus, AuthorizationError};
