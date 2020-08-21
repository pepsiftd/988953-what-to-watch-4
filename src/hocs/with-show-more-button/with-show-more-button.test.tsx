import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {withShowMoreButton} from './with-show-more-button';

interface Props {
  renderShowMore: () => React.ReactNode;
}

const MockComponent: React.FunctionComponent<Props> = ({renderShowMore}) => {
  return (
    <div>
      {renderShowMore()}
    </div>
  );
};

it(`withShowMoreButton renders ShowMoreButton correctly`, () => {
  const MockComponentWrapped = withShowMoreButton(MockComponent);

  const tree = renderer.create(
      <MockComponentWrapped
        movies={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        initialCardsCount={4}
        addCardsOnShowMore={4}
      />
  );

  expect(tree).toMatchSnapshot();
});

it(`withShowMoreButton does not render ShowMoreButton when not needed`, () => {
  const MockComponentWrapped = withShowMoreButton(MockComponent);

  const tree = renderer.create(
      <MockComponentWrapped
        movies={[1, 2, 3]}
        initialCardsCount={4}
        addCardsOnShowMore={4}
      />
  );

  expect(tree).toMatchSnapshot();
});
