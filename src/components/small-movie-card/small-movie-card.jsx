import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({movie, handleHover}) => {
  const {title, imageSrc, movieLink} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        handleHover(movie);
      }}
    >
      <div className="small-movie-card__image">
        <img src={imageSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={movieLink}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
  }).isRequired,
  handleHover: PropTypes.func.isRequired
};

export {SmallMovieCard};
