import React from 'react';
import PropTypes from 'prop-types';

import {VideoPlayer} from '@/components/video-player/video-player';

const SmallMovieCard = ({movie, handleHover, onMouseLeave, isPreviewPlaying}) => {
  const {title, imageSrc, movieLink, preview} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        handleHover(movie);
      }}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={preview}
          poster={imageSrc}
          isPlaying={isPreviewPlaying}
          isMute={true}
          width="280"
          height="175"
        />
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
    preview: PropTypes.string.isRequired,
  }).isRequired,
  handleHover: PropTypes.func.isRequired,
  isPreviewPlaying: PropTypes.bool.isRequired,
};

export {SmallMovieCard};
