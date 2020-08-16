import React from 'react';
import {Router} from 'react-router-dom';
import {history} from '@/history';
import renderer from 'react-test-renderer';
import {Main} from './main';
import {promoMovie, movies} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';
import {noop} from '@/utils';

const onTitleClick = jest.fn();

it(`Main should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Main
          promoMovie={promoMovie}
          movies={movies}
          filteredMovies={movies}
          favoriteMovies={[]}
          currentGenre={`All genres`}
          onTitleClick={onTitleClick}
          onToggleFavorite={noop}
          authorizationStatus="AUTHORIZED"
          authorizationInfo={userInfo}
        />
      </Router>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  );

  expect(tree).toMatchSnapshot();
});
