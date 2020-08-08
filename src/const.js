import PropTypes from 'prop-types';

const MAX_GENRES_AMOUNT = 9;
const MAX_CARDS_ON_MOVIE_PAGE = 4;
const ALL_GENRES_FILTER = `All genres`;
const MAX_ACTORS_IN_SHORT_DETAILS = 4;
const API_REQUEST_TIMEOUT_IN_MS = 1000 * 5;

const URL = {
  BASE: `https://4.react.pages.academy/wtw`,
  FILES_STORAGE: `https://4.react.pages.academy`,
};

const MovieInfoTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const videoPlayerSettings = {
  isMute: false,
  autoplay: true,
};

const SMALL_CARD_VIDEO_SETTINGS = {
  isMute: true,
  width: `280`,
  height: `175`,
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

const RatingEstimate = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const filmObjectPropTypes = {
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
  RatingEstimate,
  filmObjectPropTypes,
  videoPlayerSettings,
  URL,
  MAX_GENRES_AMOUNT,
  ALL_GENRES_FILTER,
  MAX_CARDS_ON_MOVIE_PAGE,
  MovieInfoTab,
  SMALL_CARD_VIDEO_SETTINGS,
  MAX_ACTORS_IN_SHORT_DETAILS,
  API_REQUEST_TIMEOUT_IN_MS,
  RequestRoute,
};
