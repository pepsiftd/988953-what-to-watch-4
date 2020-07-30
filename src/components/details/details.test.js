import React from 'react';
import renderer from 'react-test-renderer';

import {Details} from './details';

it(`Details should render correctly`, () => {
  const tree = renderer.create(
      <Details
        director="Arthur Pirozhkov"
        starring={[`Belka`, `Strelka`, `Monkey`, `Rat`]}
        runTime={189}
        genre="Comedy"
        year={1984}
      />
  );

  expect(tree).toMatchSnapshot();
});
