import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {PromoMovieCard} from './promo-movie-card';

const movie = {
  id: 15,

  title: `Movie Title`,
  genre: `Horror`,
  year: 15345,
  imageSrc: `image.jpg`,
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

const authInfo = {
  avatar: `img/avatar.jpg`,
};

it(`PromoMovieCard should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <PromoMovieCard
          movie={movie}
          onToggleFavorite={() => {}}
          authorizationStatus={`AUTHORIZED`}
          authorizationInfo={authInfo}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
