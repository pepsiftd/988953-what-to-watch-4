import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from 'react-router-dom';
import {history} from '@/history';

import {PageFooter} from "./page-footer";


it(`PageFooter renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <PageFooter />
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
