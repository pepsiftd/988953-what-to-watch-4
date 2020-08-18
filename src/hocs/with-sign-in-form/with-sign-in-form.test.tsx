import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {withSignInForm} from './with-sign-in-form';

interface Props {
  renderPasswordInput: () => React.ReactNode;
  renderEmailInput: () => React.ReactNode;
  isValidEmail: boolean;
  onSubmit: () => void;
}

const MockComponent: React.FunctionComponent<Props> = ({renderEmailInput, renderPasswordInput, isValidEmail, onSubmit}) => {
  return (
    <form
      onSubmit={onSubmit}
    >
      {isValidEmail && <p>Email is valid</p>}
      {renderEmailInput()}
      {renderPasswordInput()}
    </form>
  );
};


it(`withSignInForm renders inputs correctly`, () => {
  const MockComponentWrapped = withSignInForm(MockComponent);

  const tree = renderer.create(
      <MockComponentWrapped
        onSignIn={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
