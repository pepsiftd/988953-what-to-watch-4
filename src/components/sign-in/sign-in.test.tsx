import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {noop} from '@/utils';

import {SignIn} from './sign-in';

it(`SignIn screen should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          isBadRequest={false}
          authorizationStatus={`UNAUTHORIZED`}
          renderEmailInput={noop}
          renderPasswordInput={noop}
          isValidEmail={true}
          onSubmit={noop}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
