import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '@/reducer/user/user';
import {filmObjectPropTypes} from '@/const';

import {UserBlock} from '@/components/user-block/user-block';

const PromoMovieCard = ({movie, onToggleFavorite, authorizationStatus}) => {
  const {
    id,

    title,
    genre,
    year,

    poster,
    backgroundImage,
    isFavorite,
  } = movie;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <UserBlock
          authorizationStatus={authorizationStatus}
          avatarImageSrc="img/avatar.jpg"
        />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={() => {
                  onToggleFavorite(id);
                }}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
                </svg>
                <span>My list</span>
              </button>
              {isFavorite && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovieCard.propTypes = {
  movie: PropTypes.shape(filmObjectPropTypes).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
};

export {PromoMovieCard};
