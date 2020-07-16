import React from 'react';
import PropTypes from 'prop-types';

const GenresListItem = ({genre, titleClickHandler, isActive}) => {
  const activeGenreClass = `catalog__genres-item--active`;

  return (
    <li className={`catalog__genres-item ${isActive ? activeGenreClass : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        titleClickHandler(genre);
      }}>{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export {GenresListItem};
