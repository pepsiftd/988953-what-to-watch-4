import PropTypes from 'prop-types';

const BASE_URL = `https://4.react.pages.academy/wtw`;
const FILES_STORAGE_URL = `https://4.react.pages.academy`;
const MAX_GENRES_AMOUNT = 9;

const videoPlayerSettings = {
  isMute: false,
  autoplay: true,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films`,
  PLAYER: `/player`,
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
  BASE_URL,
  FILES_STORAGE_URL,
  MAX_GENRES_AMOUNT,
};
