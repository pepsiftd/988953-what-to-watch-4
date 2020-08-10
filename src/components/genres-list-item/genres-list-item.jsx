import React from 'react';
import PropTypes from 'prop-types';

const GenresListItem = ({genre, onTitleClick, isActive}) => {
  const activeGenreClass = `catalog__genres-item--active`;

  return (
    <li className={`catalog__genres-item ${isActive ? activeGenreClass : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onTitleClick(genre);
      }}>{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export {GenresListItem};
