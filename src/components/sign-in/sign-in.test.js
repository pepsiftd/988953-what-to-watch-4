import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {SignIn, checkEmail} from './sign-in';

it(`SignIn screen should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onSignIn={() => {}}
          isBadRequest={false}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});

describe(`checkEmail`, () => {
  it(`should return false when passed empty string`, () => {
    expect(checkEmail(``)).toEqual(false);
  });
  it(`should return false when passed a string without @`, () => {
    expect(checkEmail(`yapochta.ru`)).toEqual(false);
  });
  it(`should return false when passed a string without .`, () => {
    expect(checkEmail(`yapo@chtaru`)).toEqual(false);
  });
  it(`should return false when passed only spaces`, () => {
    expect(checkEmail(`       `)).toEqual(false);
  });
  it(`should return false when passed a string without @`, () => {
    expect(checkEmail(`yapochta.ru`)).toEqual(false);
  });
  it(`should return false when passed a string with spaces`, () => {
    expect(checkEmail(`ya@pochta.ru mail`)).toEqual(false);
  });
  it(`should return true when passed example@microsoft.com`, () => {
    expect(checkEmail(`example@microsoft.com`)).toEqual(true);
  });
  it(`should return true when passed example.server@edu.nist.gov`, () => {
    expect(checkEmail(`example.server@edu.nist.gov`)).toEqual(true);
  });
});