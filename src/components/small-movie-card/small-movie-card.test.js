import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

const movie = {
  title: `Some movie: Revenge`,
  imageSrc: `img/some-movie-revenge.jpg`,
  movieLink: `movie-page.html`,
};

const handleHover = jest.fn();

it(`SmallMovieCard should render correct movie name`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        movie={movie}
        handleHover={handleHover}
      />
  );

  expect(tree).toMatchSnapshot();
});
