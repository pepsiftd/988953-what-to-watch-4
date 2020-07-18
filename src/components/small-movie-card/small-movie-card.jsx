import React from 'react';
import PropTypes from 'prop-types';

const PREVIEW_START_TIMEOUT = 1000;

const SmallMovieCard = ({movie, onMouseEnter, onMouseLeave, children}) => {
  const {title, movieLink} = movie;
  let timeout = null;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        timeout = setTimeout(() => {
          onMouseEnter(movie.id);
        }, PREVIEW_START_TIMEOUT);
      }}
      onMouseLeave={() => {
        if (timeout) {
          clearTimeout(timeout);
        }
        onMouseLeave();
      }}
    >
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={movieLink}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {SmallMovieCard};
