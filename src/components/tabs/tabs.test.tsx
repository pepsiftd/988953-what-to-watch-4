import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '@/utils';
import {MovieInfoTab} from '@/const';

import {Tabs} from './tabs';

it(`Tabs renders correctly`, () => {
  const tree = renderer.create(
      <Tabs
        activeItemId={MovieInfoTab.OVERVIEW}
        setActiveItem={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
