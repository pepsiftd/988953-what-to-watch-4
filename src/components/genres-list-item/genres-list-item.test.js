import React from 'react';
import renderer from 'react-test-renderer';

import {GenresListItem} from './genres-list-item';

describe(`GenresListItem renders`, () => {
  it(` active Item correctly`, () => {
    const tree = renderer.create(
        <GenresListItem
          genre={`All genres`}
          titleClickHandler={() => {}}
          isActive={true}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(` not active Item correctly`, () => {
    const tree = renderer.create(
        <GenresListItem
          genre={`All genres`}
          titleClickHandler={() => {}}
          isActive={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
