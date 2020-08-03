import React from 'react';
import PropTypes from 'prop-types';
import {getRatingString, getFormattedDate} from '@/utils';

const Review = ({review}) => {
  const {user, rating, comment, date} = review;
  const dateString = getFormattedDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date.toISOString()}>{dateString}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{getRatingString(rating)}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
};

export {Review};
