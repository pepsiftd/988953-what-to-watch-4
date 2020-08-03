import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {MoviePage} from './movie-page';

const movies = [
  {
    id: 1,
    title: `I, Robot`,
    genre: `drama`,
    year: 1994,
    imageSrc: `img/i-robot.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  },
  {
    id: 2,
    title: `Brave new world`,
    genre: `antiutopia`,
    year: 1994,
    imageSrc: `img/brave-new-world.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  },
  {
    id: 3,
    title: `1984`,
    genre: `antiutopia`,
    year: 1994,
    imageSrc: `img/1984.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  },
  {
    id: 4,
    title: `Dune`,
    genre: `sci-fi`,
    year: 1994,
    imageSrc: `img/dune.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  },
  {
    id: 5,
    title: `Cloverfeld`,
    genre: `thriller`,
    year: 1994,
    imageSrc: `img/cloverfeld.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  },
  {
    id: 6,
    title: `Jumanji: The new level`,
    genre: `Adventures`,
    year: 1994,
    imageSrc: `img/jumanji-the-new-level.jpg`,
    preview: `preview-video.mp4`,
    fullVideo: `fullvideo.mp4`,
    poster: `bigimage.jpgg`,
    backgroundImage: `backgroundImage.jpg`,
    backgroundColor: `#FACE8D`,
    description: `NICE`,
    rating: 155,
    scoresCount: 5,
    director: `John connor`,
    starring: [`chubakka`, `leia`, `skywalker`],
    runTime: 556,
    isFavorite: false,
  }
];

it(`MoviePage should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <MoviePage
          movies={movies}
          id={1}
          onToggleFavorite={() => {}}
          authorizationStatus={`AUTHORIZED`}
          setActiveItem={() => {}}
          activeItemId={`Overview`}
        />
      </Router>,
      {
        createNodeMock() {
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
