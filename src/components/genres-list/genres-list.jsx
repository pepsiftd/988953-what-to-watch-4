import React from 'react';
import PropTypes from 'prop-types';

import {GenresListItem} from '@/components/genres-list-item/genres-list-item';
import {getGenresFromMovies} from '@/utils';

const GenresList = ({movies, renderItem, setActiveItem, titleClickHandler}) => {
  const genres = [`All genres`, ...getGenresFromMovies(movies)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          renderItem(
              GenresListItem,
              genre,
              {
                key: genre,
                genre,
                titleClickHandler: (...args) => {
                  setActiveItem(...args);
                  titleClickHandler(...args);
                },
              }
          )
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
  renderItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
};

export {GenresList};
