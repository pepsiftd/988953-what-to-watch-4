import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  title: `Some movie: Revenge`,
  imageSrc: `img/some-movie-revenge.jpg`,
  movieLink: `movie-page.html`,
};

const handleHover = jest.fn();

it(`When SmallMovieCard hovered should return movie data`, () => {
  const card = shallow(
    <SmallMovieCard
      movie={movie}
      handleHover={handleHover}
    />);

  card.simulate(`mouseEnter`);

  expect(handleHover).toHaveBeenCalledTimes(1);
  expect(handleHover.mock.calls[0][0]).toMatchObject(movie);
});
