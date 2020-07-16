import React from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';
import {withVideo} from '@/hocs/with-video/with-video';

const SmallMovieCardWithVideo = withVideo(SmallMovieCard);

const MoviesList = ({movies, renderPlayer, onMouseEnter, onMouseLeave}) => {
  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) => {
          const videoSettings = {
            src: movie.preview,
            poster: movie.imageSrc,
            isActive: false,
            isMute: true,
            width: `280`,
            height: `175`,
          };

          return (
            <SmallMovieCardWithVideo
              key={movie.title}
              movie={movie}
              renderPlayer={renderPlayer}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}

              videoSettings={videoSettings}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {MoviesList};
