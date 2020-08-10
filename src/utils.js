import {RATING_LEVEL_MAP, ALL_GENRES_FILTER} from '@/const';

const MINUTES_IN_AN_HOUR = 60;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

const MONTH_NAMES = [`January`, `February`, `March`, `April`, `May`, `June`,
  `July`, `August`, `September`, `October`, `November`, `December`
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
  return genre === ALL_GENRES_FILTER ? movies : movies.filter((movie) => movie.genre === genre);
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
  for (const level of Object.keys(RATING_LEVEL_MAP).reverse()) {
    if (rating >= level) {
      return RATING_LEVEL_MAP[level];
    }
  }

  return null;
};

const getRatingString = (rating) => {
  const temp = `${String(rating).replace(`.`, `,`)},0`;
  const indexOfComma = temp.indexOf(`,`);

  return temp.slice(0, indexOfComma + 2);
};

const getFormattedDate = (date) => {
  const month = MONTH_NAMES[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

const checkEmail = (email) => {
  const pattern = new RegExp(`^([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})([.]{1,})([A-z]{2,8})$`);

  return pattern.test(email.trim());
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
  checkEmail,
};
