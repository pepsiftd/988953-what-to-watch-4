import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Overview} from './overview';

describe(`Overview should render correctly`, () => {
  it(`with 5 or more actors`, () => {
    const tree = renderer.create(
        <Overview
          ratingScore={8.9}
          ratingCount={31337}
          description="description text"
          director="Arthur Pirozhkov"
          starring={[`Belka`, `Strelka`, `Monkey`, `Rat`, `Donkey`]}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`with less than 5 actors`, () => {
    const tree = renderer.create(
        <Overview
          ratingScore={8.9}
          ratingCount={31337}
          description="description text"
          director="Arthur Pirozhkov"
          starring={[`Belka`, `Strelka`, `Monkey`, `Rat`]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
