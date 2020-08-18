import {NameSpace} from '@/reducer/name-space';
import {movies, promoMovie} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';
import {reviews} from '@/test-data/comments';
import {ALL_GENRES_FILTER} from '@/const';

const store = {
  [NameSpace.DATA]: {
    movies,
    promoMovie,
    favoriteMovies: [],
    reviews,
  },
  [NameSpace.APP]: {
    currentGenre: ALL_GENRES_FILTER,
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTHORIZED`,
    authorizationError: 200,
    authorizationInfo: userInfo,
  },
};

export {store};
