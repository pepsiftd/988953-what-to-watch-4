import {RatingEstimate} from '@/const';

const getUniqueItems = (list) => {
  return list.filter((it, i, array) => {
    return array.indexOf(it) === i;
  });
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getMoviesByGenre = (movies, genre) => {
  return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
};

const getGenresFromMovies = (movies) => {
  return getUniqueItems(movies.map((movie) => movie.genre));
};

const humanizeRunTime = (timeInMinutes) => {
  const hrs = Math.floor(timeInMinutes / 60);
  const mins = timeInMinutes - hrs * 60;
  const buff = [];

  if (hrs > 0) {
    buff.push(`${hrs}h`);
  }

  if (mins > 0) {
    buff.push(`${mins}m`);
  }

  return buff.join(` `);
};

const getRatingEstimate = (rating) => {
  let estimate = ``;

  switch (true) {
    case rating < 3:
      estimate = RatingEstimate.BAD;
      break;
    case rating >= 3 && rating < 5:
      estimate = RatingEstimate.NORMAL;
      break;
    case rating >= 5 && rating < 8:
      estimate = RatingEstimate.GOOD;
      break;
    case rating >= 8 && rating < 10:
      estimate = RatingEstimate.VERY_GOOD;
      break;
    case rating === 10:
      estimate = RatingEstimate.AWESOME;
      break;
  }

  return estimate;
};

export {extend, getMoviesByGenre, getUniqueItems, getGenresFromMovies, humanizeRunTime, getRatingEstimate};
