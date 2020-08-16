import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AddReview} from './add-review';
import {movie} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';
import {noop} from '@/utils';

Enzyme.configure({
  adapter: new Adapter()
});

it(`AddReview calls callback functions onInput and onSubmit`, () => {
  const onSubmit = jest.fn();
  const onInput = jest.fn();

  const component = shallow(
      <AddReview
        movie={movie}
        errors={[]}
        onSubmit={onSubmit}
        onInput={onInput}
        authorizationStatus={`AUTHORIZED`}
        authorizationInfo={userInfo}
        isSubmitButtonDisabled={false}
        isFormDisabled={false}
      />
  );

  const form = component.find(`form`);

  form.simulate(`input`);
  form.simulate(`submit`, {
    preventDefault: noop
  });

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onInput).toHaveBeenCalledTimes(1);
});
