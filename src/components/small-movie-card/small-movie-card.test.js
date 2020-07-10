import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card';

const movie = {
  id: 152,
  title: `Some movie: Revenge`,
  imageSrc: `img/some-movie-revenge.jpg`,
  movieLink: `movie-page.html`,
  preview: `preview-link.mp4`,
};

it(`SmallMovieCard should render correct movie name`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        movie={movie}
        renderPlayer={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});
