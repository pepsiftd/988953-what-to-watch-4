import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {SignIn} from './sign-in';

it(`SignIn screen should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onSignIn={() => {}}
          isBadRequest={false}
          authorizationStatus={`UNAUTHORIZED`}
          renderEmailInput={() => {}}
          renderPasswordInput={() => {}}
          isValidEmail={true}
          onSubmit={() => {}}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
