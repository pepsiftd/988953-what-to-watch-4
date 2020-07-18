import React from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';
import {withVideo} from '@/hocs/with-video/with-video';

const SmallMovieCardWithVideo = withVideo(SmallMovieCard);

const VIDEO_SETTINGS = {
  isMute: true,
  width: `280`,
  height: `175`,
};

const MoviesList = ({movies, renderItem, setActiveItem, clearActiveItem}) => {
  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) => {
          const videoSettings = Object.assign({}, {
            src: movie.preview,
            poster: movie.imageSrc,
          }, VIDEO_SETTINGS);

          return renderItem(SmallMovieCardWithVideo, movie.id, {
            key: movie.id,
            movie,
            onMouseEnter: setActiveItem,
            onMouseLeave: clearActiveItem,

            videoSettings,
          });
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
  renderItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  clearActiveItem: PropTypes.func.isRequired,
};

export {MoviesList};
