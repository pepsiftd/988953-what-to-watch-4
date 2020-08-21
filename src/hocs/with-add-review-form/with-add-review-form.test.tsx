import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '@/utils';

import {withAddReviewForm} from './with-add-review-form';

interface Props {
  errors: string[];
  onInput: () => void;
  onSubmit: () => void;
  isSubmitButtonDisabled: boolean;
  isFormDisabled: boolean;
}

const MockComponent: React.FunctionComponent<Props> = ({isFormDisabled, isSubmitButtonDisabled, onSubmit, onInput, errors}) => {
  return (
    <form
      onSubmit={onSubmit}
    >
      {errors}
      <input type="text" onInput={onInput} disabled={isFormDisabled} />
      <input type="submit" disabled={isSubmitButtonDisabled || isFormDisabled} />
    </form>
  );
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
