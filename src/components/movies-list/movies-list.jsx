import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = null;
    this.handleSmallCardHover = this.handleSmallCardHover.bind(this);
  }

  handleSmallCardHover(movie) {
    this.setState({
      current: {movie}
    });
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return <SmallMovieCard key={movie.title} movie={movie} handleHover={this.handleSmallCardHover}/>;
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
