import React from 'react';

interface Props {
  genre: string;
  onTitleClick: (id: string) => void;
  isActive: boolean;
}

const GenresListItem: React.FunctionComponent<Props> = ({genre, onTitleClick, isActive}) => {
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

export {GenresListItem};
