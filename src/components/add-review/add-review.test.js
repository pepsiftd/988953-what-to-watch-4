import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {AddReview} from './add-review';

const movie = {
  title: `I Am the Movie`,
  genre: `Thriller`,
  year: 2001,
  id: 0,
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

it(`AddReview renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <AddReview
          movie={movie}
          errors={[]}
          onSubmit={() => {}}
          onInput={() => {}}
          authorizationStatus={`AUTHORIZED`}
          isSubmitButtonDisabled={false}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
