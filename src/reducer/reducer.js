import {combineReducers} from 'redux';

import {reducer as data} from '@/reducer/data/data';
import {reducer as user} from '@/reducer/user/user';
import {reducer as app} from '@/reducer/app/app';
import {NameSpace} from '@/reducer/name-space';

const combined = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.APP]: app,
});

export {combined};
