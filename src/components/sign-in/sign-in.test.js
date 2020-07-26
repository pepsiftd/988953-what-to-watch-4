import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

it(`SignIn screen should render correctly`, () => {
  const tree = renderer.create(
      <SignIn />
  );

  expect(tree).toMatchSnapshot();
});
