import {NameSpace} from '@/reducer/name-space';

const getCurrentGenre = (state) => {
  return state[NameSpace.APP].currentGenre;
};

export {getCurrentGenre};
