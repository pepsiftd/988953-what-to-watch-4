import PropTypes from 'prop-types';

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films/:id`,
};

const filmObjectPropTypes = {
  id: PropTypes.number.isRequired,

  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
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

export {AppRoute, filmObjectPropTypes};
