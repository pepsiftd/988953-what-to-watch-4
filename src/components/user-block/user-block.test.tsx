import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import {userInfo} from '@/test-data/user';

import {UserBlock} from './user-block';


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
            authorizationInfo={userInfo}
          />
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
