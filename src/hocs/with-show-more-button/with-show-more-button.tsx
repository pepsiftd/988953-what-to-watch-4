import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ShowMoreButton} from '@/components/show-more-button/show-more-button';

const withShowMoreButton = (Component) => {
  class WithShowMoreButton extends PureComponent {
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

  WithShowMoreButton.propTypes = {
    movies: PropTypes.array.isRequired,
    initialCardsCount: PropTypes.number.isRequired,
    addCardsOnShowMore: PropTypes.number.isRequired,
  };

  return WithShowMoreButton;
};

export {withShowMoreButton};
