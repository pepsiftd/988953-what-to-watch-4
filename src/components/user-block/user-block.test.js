import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {UserBlock} from './user-block';

describe(`UserBlock`, () => {
  it(`should render a login link when unauthorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlock
            authorizationStatus="UNAUTHORIZED"
          />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });

  it(`should render avatar image when authorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlock
            authorizationStatus="AUTHORIZED"
            avatarImageSrc="img/avatar.jpg"
          />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});