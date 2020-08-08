import React from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';
import {withVideo} from '@/hocs/with-video/with-video';
import {SMALL_CARD_VIDEO_SETTINGS} from '@/const';

const SmallMovieCardWithVideo = withVideo(SmallMovieCard);

const MoviesList = ({movies, renderItem, setActiveItem, clearActiveItem, cardsShowing, renderShowMore = () => {}}) => {
  const cardsShowingCount = cardsShowing ? cardsShowing : movies.length;
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          movies.slice(0, cardsShowingCount).map((movie) => {
            const videoSettings = Object.assign({}, {
              src: movie.preview,
              poster: movie.imageSrc,
            }, SMALL_CARD_VIDEO_SETTINGS);

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
      {renderShowMore()}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  renderItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  clearActiveItem: PropTypes.func.isRequired,
  cardsShowing: PropTypes.number,
  renderShowMore: PropTypes.func,
};

export {MoviesList};
