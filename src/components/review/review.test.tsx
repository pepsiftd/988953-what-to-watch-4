import React from 'react';
import renderer from 'react-test-renderer';

import {Review} from './review';
import {reviews} from '@/test-data/comments';

const review = reviews[0];

it(`Review renders correctly`, () => {
  const tree = renderer.create(
      <Review
        review={review}
      />
  );

  expect(tree).toMatchSnapshot();
});
