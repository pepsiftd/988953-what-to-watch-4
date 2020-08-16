import {getCurrentGenre} from './selectors';
import {NameSpace} from '@/reducer/name-space';

const state = {
  [NameSpace.APP]: {
    currentGenre: `All genres`,
  },
};

it(`Selector should return current Genre`, () => {
  expect(getCurrentGenre(state)).toEqual(`All genres`);
});
