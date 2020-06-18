import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard, {getImageSrc} from './small-movie-card';

const movieName = `Some movie: Revenge`;

it(`SmallMovieCard should render correct movie name`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        movieName={movieName}
      />
  );

  expect(tree).toMatchSnapshot();
});

describe(`getImageSrc should return correct string`, () => {
  it(`Should getImageSrc transform simple Movie name`, () => {
    const src = getImageSrc(`The Matrix`);

    expect(src).toBe(`img/the-matrix.jpg`);
  });
  it(`Should getImageSrc transform movie name with colon and commas`, () => {
    const src = getImageSrc(`The Movie: Returns, Resurrection, Revenge`);

    expect(src).toBe(`img/the-movie-returns-resurrection-revenge.jpg`);
  });
  it(`Should getImageSrc transform movie name with exclamation and question mark`, () => {
    const src = getImageSrc(`Me, Myself! and I?`);

    expect(src).toBe(`img/me-myself-and-i.jpg`);
  });
});
