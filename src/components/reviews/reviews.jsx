import React from 'react';
import PropTypes from 'prop-types';

import {Review} from '@/components/review/review';

const Reviews = ({reviews}) => {
  const columnHeight = Math.ceil(reviews.length / 2);
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  })).isRequired,
};

export {Reviews};
