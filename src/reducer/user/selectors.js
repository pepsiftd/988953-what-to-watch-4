import {NameSpace} from '@/reducer/name-space';

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export {getAuthorizationStatus};
