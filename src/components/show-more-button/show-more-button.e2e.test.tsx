import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {ShowMoreButton} from './show-more-button';

configure({
  adapter: new Adapter(),
});


it(`ShowMoreButton should call onClick when button is clicked`, () => {
  const onClick = jest.fn();
  const block = shallow(
      <ShowMoreButton
        onClick={onClick}
      />
  );

  const button = block.find(`button`);

  button.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
