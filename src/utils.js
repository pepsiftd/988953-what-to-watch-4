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

export {extend, getMoviesByGenre, getUniqueItems, getGenresFromMovies};
