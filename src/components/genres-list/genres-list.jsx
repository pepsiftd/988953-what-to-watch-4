import React from 'react';
import PropTypes from 'prop-types';

import {GenresListItem} from '@/components/genres-list-item/genres-list-item';
import {getGenresFromMovies} from '@/utils';
import {MAX_GENRES_AMOUNT, ALL_GENRES_FILTER} from '@/const';

const GenresList = ({movies, renderItem, setActiveItem, onTitleClick}) => {
  const genres = [ALL_GENRES_FILTER, ...getGenresFromMovies(movies).slice(0, MAX_GENRES_AMOUNT)];

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
                onTitleClick: (...args) => {
                  setActiveItem(...args);
                  onTitleClick(...args);
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
    genre: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  renderItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export {GenresList};
