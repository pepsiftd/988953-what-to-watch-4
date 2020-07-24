import {getAuthorizationStatus} from './selectors';
import {NameSpace} from '@/reducer/name-space';
import {AuthorizationStatus} from '@/reducer/user/user';

const state = {
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  },
};

it(`Selector should return authorization status`, () => {
  expect(getAuthorizationStatus(state)).toEqual(AuthorizationStatus.AUTHORIZED);
});
