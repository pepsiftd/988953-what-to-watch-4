import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {AddReview} from './add-review';
import {movie} from '@/test-data/movies';
import {userInfo} from '@/test-data/user';
import {noop} from '@/utils';


it(`AddReview renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <AddReview
          movie={movie}
          errors={[]}
          onSubmit={noop}
          onInput={noop}
          authorizationStatus={`AUTHORIZED`}
          authorizationInfo={userInfo}
          isSubmitButtonDisabled={false}
          isFormDisabled={false}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
