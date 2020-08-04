import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReviewModel} from '@/models/review-model';

const InputName = {
  'rating': `rating`,
  'review-text': `comment`,
};

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 400;

const Error = {
  NO_RATING: `Please rate the movie by selecting stars amount`,
  COMMENT_OUT_OF_RANGE: `Your review should not be shorter than ${COMMENT_MIN_LENGTH} or longer than ${COMMENT_MAX_LENGTH} symbols`
};

const withAddReviewForm = (Component) => {
  class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``,
        isFormDisabled: false,
        isSubmitButtonDisabled: false,
        errors: [],
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onInput = this.onInput.bind(this);
    }

    _setError() {
      const errors = [];
      if (this.state.rating === null) {
        errors.push(Error.NO_RATING);
      }
      if (this.state.comment.length < 50 || this.state.comment.length > 400) {
        errors.push(Error.COMMENT_OUT_OF_RANGE);
      }
      return this.setState({
        errors,
      });
    }

    _validateForm() {
      const {rating, comment} = this.state;

      return this.setState({
        isSubmitButtonDisabled: !rating || comment.length < COMMENT_MIN_LENGTH || comment.length > COMMENT_MAX_LENGTH
      });
    }

    onInput(evt) {
      const {name, value} = evt.target;

      this.setState({
        [InputName[name]]: value
      }, () => {
        if (this.state.isSubmitButtonDisabled) {
          this._validateForm();
          this._setError();
        }
      });
    }

    onSubmit() {
      Promise.all([this._validateForm(), this._setError()])
        .then(() => {
          const id = this.props.movie.id;
          const review = ReviewModel.toRAW(this.state.rating, this.state.comment);

          if (this.state.errors.length === 0) {
            this.props.onSendReview(id, review);
          }
        });
    }

    render() {
      const {isFormDisabled, isSubmitButtonDisabled, errors} = this.state;
      return (
        <Component
          {...this.props}
          isFormDisabled={isFormDisabled}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          onSubmit={this.onSubmit}
          onInput={this.onInput}
          errors={errors}
        />
      );
    }
  }

  WithAddReviewForm.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    onSendReview: PropTypes.func.isRequired,
  };

  return WithAddReviewForm;
};

export {withAddReviewForm};
