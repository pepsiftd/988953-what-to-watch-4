import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';

const PREVIEW_START_TIMEOUT = 1000; // 1 second

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null
    };
    this.timeout = null;
    this.handleSmallCardHover = this.handleSmallCardHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  handleSmallCardHover(movie) {
    this.timeout = setTimeout(() => {
      this.setState({
        current: movie.id
      });
    }, PREVIEW_START_TIMEOUT);
  }

  onMouseLeave() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }

    this.setState({
      current: null
    });
  }

  render() {
    const {movies} = this.props;
    const current = this.state.current;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return (
              <SmallMovieCard
                key={movie.title}
                movie={movie}
                handleHover={this.handleSmallCardHover}
                onMouseLeave={this.onMouseLeave}
                isPreviewPlaying={movie.id === current}/>
            );
          })
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    movieLink: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export {MoviesList};
