import React from 'react';
import PropTypes from 'prop-types';
import {history} from '@/history';
import {AppRoute} from '@/const';
import {Link} from 'react-router-dom';

const PREVIEW_START_TIMEOUT = 1000;

const SmallMovieCard = ({movie, onMouseEnter, onMouseLeave, children}) => {
  const {title, id} = movie;
  let timeout = null;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        timeout = setTimeout(() => {
          onMouseEnter(id);
        }, PREVIEW_START_TIMEOUT);
      }}
      onMouseLeave={() => {
        if (timeout) {
          clearTimeout(timeout);
        }
        onMouseLeave();
      }}
      onClick={() => {
        history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
      }}
    >
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${AppRoute.MOVIE_PAGE}/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {SmallMovieCard};
