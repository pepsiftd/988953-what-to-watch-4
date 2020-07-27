import {NameSpace} from '@/reducer/name-space';
import {AuthorizationError} from '@/reducer/user/user';

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getBadRequestStatus = (state) => {
  return state[NameSpace.USER].authorizationError === AuthorizationError.BAD_REQUEST;
};

export {getAuthorizationStatus, getBadRequestStatus};
