import React from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';

const MoviesList = ({movies, renderPlayer, onMouseEnter, onMouseLeave}) => {
  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) => {
          return (
            <SmallMovieCard
              key={movie.title}
              movie={movie}
              renderPlayer={renderPlayer}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {MoviesList};
