import PropTypes from 'prop-types';

const MAX_GENRES_AMOUNT = 9;
const MAX_CARDS_ON_MOVIE_PAGE = 4;
const ALL_GENRES_FILTER = `All genres`;
const MAX_ACTORS_IN_SHORT_DETAILS = 4;
const API_REQUEST_TIMEOUT_IN_MS = 1000 * 5;
const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 400;

const Url = {
  BASE: `https://4.react.pages.academy/wtw`,
  FILES_STORAGE: `https://4.react.pages.academy`,
};

const MovieInfoTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const VIDEO_PLAYER_SETTINGS = {
  isMute: false,
  autoplay: true,
  width: `100%`,
  height: `100%`,
};

const SMALL_CARD_VIDEO_SETTINGS = {
  isMute: true,
  width: 280,
  height: 175,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films`,
  PLAYER: `/player`,
};

const RequestRoute = {
  LOGIN: `/login`,
  FILMS: `/films`,
  FAVORITE: `/favorite`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
};

const RATING_LEVEL_MAP = {
  0: `Bad`,
  3: `Normal`,
  5: `Good`,
  8: `Very good`,
  10: `Awesome`,
};

const FILM_OBJECT_PROP_TYPES = {
  id: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  fullVideo: PropTypes.string.isRequired,

  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export {
  AppRoute,
  RATING_LEVEL_MAP,
  FILM_OBJECT_PROP_TYPES,
  VIDEO_PLAYER_SETTINGS,
  Url,
  MAX_GENRES_AMOUNT,
  ALL_GENRES_FILTER,
  MAX_CARDS_ON_MOVIE_PAGE,
  COMMENT_MIN_LENGTH,
  COMMENT_MAX_LENGTH,
  MovieInfoTab,
  SMALL_CARD_VIDEO_SETTINGS,
  MAX_ACTORS_IN_SHORT_DETAILS,
  API_REQUEST_TIMEOUT_IN_MS,
  RequestRoute,
};
