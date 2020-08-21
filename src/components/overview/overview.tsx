import * as React from 'react';
import {getRatingEstimate, getRatingString} from '@/utils';
import {MAX_ACTORS_IN_SHORT_DETAILS} from '@/const';

interface Props {
  ratingScore: number;
  ratingCount: number;
  description: string;
  director: string;
  starring: string[];
}

const Overview: React.FunctionComponent<Props> = ({ratingScore, ratingCount, description, director, starring}) => {
  const starringShort = starring.slice(0, MAX_ACTORS_IN_SHORT_DETAILS);
  const starringString = starringShort.join(`, `);
  const score = getRatingString(ratingScore);
  const estimate = getRatingEstimate(ratingScore);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{estimate}</span>
          <span className="movie-rating__count">{`${ratingCount} ratings`}</span>
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

export {Overview};
