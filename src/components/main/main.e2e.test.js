import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';

const promoMovieTitle = `I Am the Movie`;
const promoMovieGenre = `Thriller`;
const promoMovieYear = `2001`;
const movies = [
  {
    id: 1,
    title: `I, Robot`,
    imageSrc: `img/i-robot.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 2,
    title: `Brave new world`,
    imageSrc: `img/brave-new-world.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 3,
    title: `1984`,
    imageSrc: `img/1984.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 4,
    title: `Dune`,
    imageSrc: `img/dune.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 5,
    title: `Cloverfeld`,
    imageSrc: `img/cloverfeld.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  },
  {
    id: 6,
    title: `Jumanji: The new level`,
    imageSrc: `img/jumanji-the-new-level.jpg`,
    movieLink: `movie-page.html`,
    preview: `preview-video.mp4`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be pressed`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(
      <Main
        promoMovieTitle={promoMovieTitle}
        promoMovieGenre={promoMovieGenre}
        promoMovieYear={promoMovieYear}
        movies={movies}
        titleClickHandler={titleClickHandler}
      />
  );

  const titles = main.find(`.catalog__genres-link`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(titleClickHandler).toHaveBeenCalledTimes(titles.length);
});
