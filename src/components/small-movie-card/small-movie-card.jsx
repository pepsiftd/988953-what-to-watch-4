import React from 'react';
import PropTypes from 'prop-types';

const IS_MUTE = true;

const SmallMovieCard = ({movie, renderPlayer, onMouseEnter, onMouseLeave}) => {
  const {title, movieLink} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMouseEnter(movie);
      }}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        {renderPlayer(movie, IS_MUTE, `280`, `175`)}
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
  renderPlayer: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {SmallMovieCard};
