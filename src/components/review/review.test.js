import React from 'react';
import renderer from 'react-test-renderer';

import {Review} from './review';

const review = {
  id: 1,
  user: {
    id: 4,
    name: `Courtney Cox`,
  },
  rating: 5.1,
  comment: `I don't know what to say but I can't help posting`,
  date: new Date(`August 3, 2020`),
};

it(`Review renders correctly`, () => {
  const tree = renderer.create(
      <Review
        review={review}
      />
  );

  expect(tree).toMatchSnapshot();
});
