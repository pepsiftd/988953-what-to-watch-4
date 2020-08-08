import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {LogoLight} from './logo-light';

it(`LogoLight renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <LogoLight />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
