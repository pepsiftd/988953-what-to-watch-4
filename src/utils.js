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

export {extend, getMoviesByGenre, getUniqueItems, getGenresFromMovies, humanizeRunTime};
