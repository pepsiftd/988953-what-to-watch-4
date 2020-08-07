import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {UserBlock} from './user-block';

const authInfo = {
  avatar: `img/avatar.jpg`,
};

describe(`UserBlock`, () => {
  it(`should render a login link when unauthorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <UserBlock
            authorizationStatus="UNAUTHORIZED"
            authorizationInfo={{}}
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
            authorizationInfo={authInfo}
          />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
