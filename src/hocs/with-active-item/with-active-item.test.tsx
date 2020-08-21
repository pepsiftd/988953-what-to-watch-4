import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {withActiveItem} from './with-active-item';

interface ItemProps {
  isActive: boolean;
}

const MockComponentItem: React.FunctionComponent<ItemProps> = ({isActive}) => {
  return (
    <li className={`list-item ${isActive ? `list-item--active` : ``}`} />
  );
};

interface Props {
  renderItem: (Component: React.FunctionComponent | React.ComponentClass, id: number | string, props: Record<string, unknown>) => React.ReactNode;
}

const MockComponent: React.FunctionComponent<Props> = ({renderItem}) => {
  return (
    <ul>
      {renderItem(MockComponentItem, 1, {key: 1})}
      {renderItem(MockComponentItem, 2, {key: 2})}
    </ul>
  );
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
