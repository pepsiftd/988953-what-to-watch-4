import React from 'react';
import PropTypes from 'prop-types';

import {getGenresFromMovies} from '@/utils';

const GenresList = ({movies, currentGenre, titleClickHandler}) => {
  const genres = getGenresFromMovies(movies);
  const activeGenreClass = `catalog__genres-item--active`;

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${currentGenre === `All genres` ? activeGenreClass : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={() => {
          titleClickHandler(`All genres`);
        }}>All genres</a>
      </li>
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? activeGenreClass : ``}`}>
            <a href="#" className="catalog__genres-link" onClick={() => {
              titleClickHandler(genre);
            }}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  currentGenre: PropTypes.string.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
};

export {GenresList};
