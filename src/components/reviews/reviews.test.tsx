import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Reviews} from './reviews';
import {reviews} from '@/test-data/comments';

it(`Reviews renders correctly`, () => {
  const tree = renderer.create(<Reviews reviews={reviews} />);

  expect(tree).toMatchSnapshot();
});
