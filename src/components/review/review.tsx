import React from 'react';
import {ReviewData} from '@/types';
import {getRatingString, getFormattedDate} from '@/utils';

interface Props {
  review: ReviewData;
}

const Review: React.FunctionComponent<Props> = ({review}) => {
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

export {Review};
