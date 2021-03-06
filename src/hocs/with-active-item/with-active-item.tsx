import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  currentItemId: number | string;
}

interface InjectingProps {
  activeItemId: number | string;
  renderItem: (ItemComponent: React.ComponentClass | React.FunctionComponent, itemId: number | string, itemProps: Record<string, unknown>) => React.ReactNode;
  setActiveItem: (id: string | number) => void;
  clearActiveItem: () => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        currentItemId: props.initialItemId ? props.initialItemId : null
      };
    }

    render() {
      const currentItemId = this.state.currentItemId;

      return (
        <Component
          {...this.props}
          activeItemId={currentItemId}
          renderItem={(ItemComponent, itemId, itemProps) => {
            return (
              <ItemComponent
                {...itemProps}
                isActive={itemId === currentItemId}
              />
            );
          }}
          setActiveItem={(id) => {
            this.setState({
              currentItemId: id
            });
          }}
          clearActiveItem={() => {
            this.setState({
              currentItemId: null
            });
          }}
        />
      );
    }
  }

  return WithActiveItem;
};

export {withActiveItem};
