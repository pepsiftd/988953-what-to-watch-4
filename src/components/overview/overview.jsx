import React from 'react';
import PropTypes from 'prop-types';
import {getRatingEstimate} from '@/utils';

const Overview = ({ratingScore, ratingCount, description, director, starring}) => {
  const starringShort = starring.slice(0, 4);
  const starringString = starringShort.join(`, `);
  const score = String(ratingScore).replace(`.`, `,`);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingEstimate(ratingScore)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="movie-card__starring"><strong>{`Starring: ${starringString}${starringShort.length < starring.length ? ` and other` : ``}`}</strong></p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = {
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export {Overview};
