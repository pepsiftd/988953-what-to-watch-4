import {getAuthorizationStatus, getAuthorizationInfo} from './selectors';
import {NameSpace} from '@/reducer/name-space';
import {AuthorizationStatus} from '@/reducer/user/user';

const state = {
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationInfo: {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatar: `img/1.png`
    },
  },

};

it(`Selector should return authorization status`, () => {
  expect(getAuthorizationStatus(state)).toEqual(AuthorizationStatus.AUTHORIZED);
});

it(`Selector should return authorization info`, () => {
  expect(getAuthorizationInfo(state)).toEqual({
    id: 1,
    email: `Oliver.conner@gmail.com`,
    name: `Oliver.conner`,
    avatar: `img/1.png`
  });
});
