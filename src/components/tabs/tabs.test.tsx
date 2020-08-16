import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {Tabs} from './tabs';

it(`Tabs renders correctly`, () => {
  const tree = renderer.create(
      <Tabs
        activeItemId="Overview"
        setActiveItem={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
