import {RatingEstimate} from '@/const';

const MINUTES_IN_AN_HOUR = 60;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
  const hrs = Math.floor(timeInMinutes / MINUTES_IN_AN_HOUR);
  const mins = timeInMinutes - hrs * MINUTES_IN_AN_HOUR;
  const buff = [];

  if (hrs > 0) {
    buff.push(`${hrs}h`);
  }

  if (mins > 0) {
    buff.push(`${mins}m`);
  }

  return buff.join(` `);
};

const addLeadingZero = (number) => {
  return `0${number}`.slice(-2);
};

const humanizeTimeElapsed = (timeInSeconds) => {
  const hrs = Math.floor(timeInSeconds / SECONDS_IN_AN_HOUR);
  const mins = Math.floor((timeInSeconds - hrs * SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE);
  const seconds = Math.floor(timeInSeconds - hrs * SECONDS_IN_AN_HOUR - mins * SECONDS_IN_A_MINUTE);

  return `${addLeadingZero(hrs)}:${addLeadingZero(mins)}:${addLeadingZero(seconds)}`;
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

const getRatingString = (rating) => {
  const temp = `${String(rating).replace(`.`, `,`)},0`;
  const indexOfComma = temp.indexOf(`,`);

  return temp.slice(0, indexOfComma + 2);
};

const getFormattedDate = (date) => {
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export {
  extend,
  getMoviesByGenre,
  getUniqueItems,
  getGenresFromMovies,
  humanizeRunTime,
  getRatingEstimate,
  humanizeTimeElapsed,
  getRatingString,
  getFormattedDate,
};
