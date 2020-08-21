import * as React from 'react';
import {ReviewData} from '@/types';

import {Review} from '@/components/review/review';

const COLUMNS_AMOUNT = 2;

interface Props {
  reviews: ReviewData[];
}

const Reviews: React.FunctionComponent<Props> = ({reviews}) => {
  const columnHeight = Math.ceil(reviews.length / COLUMNS_AMOUNT);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, columnHeight).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(columnHeight).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export {Reviews};
