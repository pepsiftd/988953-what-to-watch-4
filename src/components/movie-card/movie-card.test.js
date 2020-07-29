import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {MovieCard} from './movie-card';

const movie = {
  id: 15,

  title: `Movie Title`,
  genre: `Horror`,
  year: 15345,
  imageSrc: `image.jpg`,
  movieLink: `mlink.html`,
  preview: `preview`,
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
};

it(`MovieCard should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <MovieCard
          movie={movie}
          onToggleFavorite={() => {}}
          authorizationStatus={`AUTHORIZED`}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
