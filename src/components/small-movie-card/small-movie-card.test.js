import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './small-movie-card';
import {Router} from 'react-router-dom';
import {history} from '@/history';

const movie = {
  id: 152,
  title: `Some movie: Revenge`,
  imageSrc: `img/some-movie-revenge.jpg`,
  movieLink: `movie-page.html`,
  preview: `preview-link.mp4`,
};

it(`SmallMovieCard should render correct movie name`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SmallMovieCard
          movie={movie}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <video />
        </SmallMovieCard>
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
