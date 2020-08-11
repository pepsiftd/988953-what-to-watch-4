import React from 'react';
import PropTypes from 'prop-types';
import {history} from '@/history';
import {AppRoute} from '@/const';
import {Link} from 'react-router-dom';

const MovieCardTop = ({id, title, year, genre, isFavorite, isAuthorized, onToggleFavorite}) => {
  return (
    <div className="movie-card__wrap">
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{year}</span>
        </p>

        <div className="movie-card__buttons">
          <button
            className="btn btn--play movie-card__button"
            type="button"
            onClick={() => {
              history.push(`${AppRoute.PLAYER}/${id}`);
            }}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <button
            className="btn btn--list movie-card__button"
            type="button"
            onClick={() => {
              if (!isAuthorized) {
                history.push(AppRoute.LOGIN);
              } else {
                onToggleFavorite(id);
              }
            }}>
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
            </svg>
            <span>My list</span>
          </button>
          {isAuthorized && <Link to={`${AppRoute.MOVIE_PAGE}/${id}/review`} className="btn movie-card__button">Add review</Link>}
        </div>
      </div>
    </div>
  );
};

MovieCardTop.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export {MovieCardTop};
