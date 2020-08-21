import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {ShowMoreButton} from './show-more-button';

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
