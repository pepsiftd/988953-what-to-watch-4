import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import {withActiveItem} from './with-active-item';

const MockComponentItem = ({isActive}) => {
  return (
    <li className={`list-item ${isActive ? `list-item--active` : ``}`} />
  );
};

MockComponentItem.propTypes = {
  isActive: PropTypes.bool.isRequired
};

const MockComponent = ({renderItem}) => {
  return (
    <ul>
      {renderItem(MockComponentItem, 1, {key: 1})}
      {renderItem(MockComponentItem, 2, {key: 2})}
    </ul>
  );
};

MockComponent.propTypes = {
  renderItem: PropTypes.func.isRequired
};

it(`withActiveItem renders Active-Inactive items correctly`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);

  const tree = renderer.create(
      <MockComponentWrapped
        initialItemId={1}
      />
  );

  expect(tree).toMatchSnapshot();
});
