import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {PromoMovieCard} from './promo-movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`PromoMovieCard clicks calls function correctly`, () => {
  const onToggleFavorite = jest.fn();
  const card = shallow(
      <PromoMovieCard
        movie={movie}
        onToggleFavorite={onToggleFavorite}
        authorizationStatus={`AUTHORIZED`}
        authorizationInfo={authInfo}
      />
  );

  const btn = card.find(`.btn--list`);

  btn.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(onToggleFavorite).toHaveBeenCalledTimes(1);
  expect(onToggleFavorite).toHaveBeenNthCalledWith(1, movie.id);
});
