import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {AddReview} from './add-review';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`AddReview calls callback functions onInput and onSubmit`, () => {
  const onSubmit = jest.fn();
  const onInput = jest.fn();

  const component = shallow(
    <AddReview
      movie={movie}
      errors={[]}
      onSubmit={onSubmit}
      onInput={onInput}
      authorizationStatus={`AUTHORIZED`}
      isSubmitButtonDisabled={false}
    />
  );

  const form = component.find(`form`);

  form.simulate(`input`);
  form.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onInput).toHaveBeenCalledTimes(1);
});
