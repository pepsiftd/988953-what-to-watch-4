import React from 'react';
import renderer from 'react-test-renderer';

import {ShowMoreButton} from './show-more-button';

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
