import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '@/reducer/user/user';
import {FILM_OBJECT_PROP_TYPES, AppRoute} from '@/const';
import {history} from '@/history';

import {UserBlock} from '@/components/user-block/user-block';
import {Logo} from '@/components/logo/logo';

const PromoMovieCard = ({movie, onToggleFavorite, authorizationStatus, authorizationInfo}) => {
  const {
    id,

    title,
    genre,
    year,

    poster,
    backgroundImage,
    isFavorite,
  } = movie;

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTHORIZED;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />

        <UserBlock
          authorizationStatus={authorizationStatus}
          authorizationInfo={authorizationInfo}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovieCard.propTypes = {
  movie: PropTypes.shape(FILM_OBJECT_PROP_TYPES).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export {PromoMovieCard};
