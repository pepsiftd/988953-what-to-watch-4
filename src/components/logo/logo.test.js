import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {Logo} from './logo';

describe(`Logo`, () => {
  it(`renders without additional className`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Logo />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });

  it(`renders with additional className`, () => {
    const additionalClassName = `additional__class--name`;

    const tree = renderer.create(
        <Router history={history}>
          <Logo additionalClassName={additionalClassName} />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
