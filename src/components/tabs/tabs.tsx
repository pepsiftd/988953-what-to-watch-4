import React from 'react';
import PropTypes from 'prop-types';
import {MovieInfoTab} from '@/types';

interface Props {
  activeItemId: MovieInfoTab;
  setActiveItem: (id: MovieInfoTab) => void;
};

const Tabs = ({activeItemId, setActiveItem}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeItemId === MovieInfoTab.OVERVIEW ? `movie-nav__item--active` : ``}`}>
          <a
            href="#"
            className="movie-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              setActiveItem(MovieInfoTab.OVERVIEW);
            }}
          >Overview</a>
        </li>
        <li className={`movie-nav__item ${activeItemId === MovieInfoTab.DETAILS ? `movie-nav__item--active` : ``}`}>
          <a
            href="#"
            className="movie-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              setActiveItem(MovieInfoTab.DETAILS);
            }}
          >Details</a>
        </li>
        <li className={`movie-nav__item ${activeItemId === MovieInfoTab.REVIEWS ? `movie-nav__item--active` : ``}`}>
          <a
            href="#"
            className="movie-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              setActiveItem(MovieInfoTab.REVIEWS);
            }}
          >Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

export {Tabs};
