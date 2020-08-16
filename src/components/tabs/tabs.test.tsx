import React from 'react';
import renderer from 'react-test-renderer';

import {Tabs} from './tabs';

it(`Tabs renders correctly`, () => {
  const tree = renderer.create(
      <Tabs
        activeItemId="Overview"
        setActiveItem={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
