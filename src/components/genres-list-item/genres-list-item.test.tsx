import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {GenresListItem} from './genres-list-item';

describe(`GenresListItem renders`, () => {
  it(` active Item correctly`, () => {
    const tree = renderer.create(
        <GenresListItem
          genre={`All genres`}
          onTitleClick={noop}
          isActive={true}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(` not active Item correctly`, () => {
    const tree = renderer.create(
        <GenresListItem
          genre={`All genres`}
          onTitleClick={noop}
          isActive={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
