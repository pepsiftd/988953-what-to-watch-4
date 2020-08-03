import React from 'react';
import renderer from 'react-test-renderer';

import {Reviews} from './reviews';

const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Courtney Cox`,
    },
    rating: 5.1,
    comment: `I don't know what to say but I can't help posting`,
    date: new Date(`August 3, 2020`),
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Mockingbird`,
    },
    rating: 8.3,
    comment: `This is not a movie of a simple kind`,
    date: new Date(`July 15, 2020`),
  },
  {
    id: 3,
    user: {
      id: 154,
      name: `Pelagia`,
    },
    rating: 1.5,
    comment: `Super mega exquisitely boring`,
    date: new Date(`June 1, 2020`),
  }
];

it(`Reviews renders correctly`, () => {
  const tree = renderer.create(<Reviews reviews={reviews} />);

  expect(tree).toMatchSnapshot();
});
