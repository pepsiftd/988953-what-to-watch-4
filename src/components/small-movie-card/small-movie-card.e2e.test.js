import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SmallMovieCard} from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  id: 152,
  title: `Some movie: Revenge`,
  imageSrc: `img/some-movie-revenge.jpg`,
  movieLink: `movie-page.html`,
  preview: `preview-link.mp4`,
};

const renderPlayer = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();

it(`When SmallMovieCard hovered should return movie data`, () => {
  const card = shallow(
      <SmallMovieCard
        movie={movie}
        renderPlayer={renderPlayer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
  );

  card.simulate(`mouseEnter`);
  card.simulate(`mouseLeave`);
  card.simulate(`mouseEnter`);
  card.simulate(`mouseLeave`);

  expect(renderPlayer).toHaveBeenCalledTimes(1);
  expect(onMouseEnter).toHaveBeenCalledTimes(2);
  expect(onMouseLeave).toHaveBeenCalledTimes(2);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movie);
});
