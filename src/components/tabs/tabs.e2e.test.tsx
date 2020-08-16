import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieInfoTab} from '@/const';
import {noop} from '@/utils';

import {Tabs} from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Tabs clicks calls function correctly`, () => {
  const setActiveItem = jest.fn();
  const tabs = shallow(
      <Tabs
        activeItemId="Overview"
        setActiveItem={setActiveItem}
      />
  );

  const links = tabs.find(`.movie-nav__link`);

  links.forEach((link) => {
    link.simulate(`click`, {
      preventDefault: noop
    });
  });

  expect(links.length).toEqual(3);
  expect(setActiveItem).toHaveBeenCalledTimes(3);
  expect(setActiveItem).toHaveBeenNthCalledWith(1, MovieInfoTab.OVERVIEW);
  expect(setActiveItem).toHaveBeenNthCalledWith(2, MovieInfoTab.DETAILS);
  expect(setActiveItem).toHaveBeenNthCalledWith(3, MovieInfoTab.REVIEWS);
});
