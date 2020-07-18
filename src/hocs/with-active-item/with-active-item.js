import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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

  WithActiveItem.propTypes = {
    initialItemId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  return WithActiveItem;
};

export {withActiveItem};
