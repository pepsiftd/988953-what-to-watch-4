import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {noop} from '@/utils';

import {withSignInForm} from './with-sign-in-form';

const MockComponent = ({renderEmailInput, renderPasswordInput, isValidEmail, onSubmit}) => {
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

MockComponent.propTypes = {
  renderPasswordInput: PropTypes.func.isRequired,
  renderEmailInput: PropTypes.func.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
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
