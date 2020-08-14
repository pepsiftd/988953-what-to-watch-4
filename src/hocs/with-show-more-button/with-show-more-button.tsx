import React, {PureComponent} from 'react';
import {Subtract} from 'utility-types';

import {ShowMoreButton} from '@/components/show-more-button/show-more-button';

interface State {
  cardsShowing: number;
  isButtonShowing: boolean;
};

interface InjectingProps {
  cardsShowing: number;
  renderShowMore: () => React.ReactNode;
};

const withShowMoreButton = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithShowMoreButton extends PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        cardsShowing: props.initialCardsCount,
        isButtonShowing: props.movies.length > props.initialCardsCount,
      };

      this.onShowMoreButtonClick = this.onShowMoreButtonClick.bind(this);
    }

    onShowMoreButtonClick() {
      this.setState((prevState) => ({
        cardsShowing: prevState.cardsShowing + this.props.addCardsOnShowMore,
        isButtonShowing: this.props.movies.length > (prevState.cardsShowing + this.props.addCardsOnShowMore),
      }));
    }

    componentDidUpdate(prevProps) {
      if (this.props.movies !== prevProps.movies) {
        this.setState({
          cardsShowing: this.props.initialCardsCount,
          isButtonShowing: this.props.movies.length > this.props.initialCardsCount,
        });
      } else {
        this.setState({
          isButtonShowing: this.props.movies.length > this.state.cardsShowing,
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          cardsShowing={this.state.cardsShowing}
          renderShowMore={() => {
            return this.state.isButtonShowing ? (
              <ShowMoreButton
                onClick={this.onShowMoreButtonClick}
              />
            ) : ``;
          }}
        />);
    }
  }

  return WithShowMoreButton;
};

export {withShowMoreButton};
