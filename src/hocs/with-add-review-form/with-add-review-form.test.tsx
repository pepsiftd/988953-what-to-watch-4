import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {noop} from '@/utils';

import {withAddReviewForm} from './with-add-review-form';

const MockComponent = ({isFormDisabled, isSubmitButtonDisabled, onSubmit, onInput, errors}) => {
  return (
    <form
      onSubmit={onSubmit}
      disabled={isFormDisabled}
    >
      {errors}
      <input type="text" onInput={onInput} />
      <input type="submit" disabled={isSubmitButtonDisabled} />
    </form>
  );
};

MockComponent.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
};


it(`withAddReviewForm renders correctly`, () => {
  const MockComponentWrapped = withAddReviewForm(MockComponent);

  const tree = renderer.create(
      <MockComponentWrapped
        movie={{
          id: 5
        }}
        onSendReview={noop}
      />
  );

  expect(tree).toMatchSnapshot();
});
