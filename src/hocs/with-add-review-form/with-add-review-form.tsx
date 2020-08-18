import React, {PureComponent} from 'react';
import {Subtract} from 'utility-types';

import {ReviewModel} from '@/models/review-model';
import {COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '@/const';

const InputName = {
  'rating': `rating`,
  'review-text': `comment`,
};

const Error = {
  NO_RATING: `Please rate the movie by selecting stars amount`,
  COMMENT_OUT_OF_RANGE: `Your review should not be shorter than ${COMMENT_MIN_LENGTH} or longer than ${COMMENT_MAX_LENGTH} symbols`
};

interface State {
  rating: number;
  comment: string;
  isFormDisabled: boolean;
  isSubmitButtonDisabled: boolean;
  errors: string[];
}

interface InjectingProps {
  isFormDisabled: boolean;
  isSubmitButtonDisabled: boolean;
  onSubmit: () => void;
  onInput: (evt: React.FormEvent) => void;
  errors: string[];
}

const withAddReviewForm: (Component: React.ComponentClass | React.FunctionComponent) => React.ComponentClass = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithAddReviewForm extends PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``,
        isFormDisabled: false,
        isSubmitButtonDisabled: true,
        errors: [],
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onInput = this.onInput.bind(this);
    }

    _setError(errorText = null) {
      const errors = [];
      if (this.state.rating === null) {
        errors.push(Error.NO_RATING);
      }
      if (this.state.comment.length < COMMENT_MIN_LENGTH || this.state.comment.length > COMMENT_MAX_LENGTH) {
        errors.push(Error.COMMENT_OUT_OF_RANGE);
      }
      if (errorText) {
        errors.push(errorText);
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
        this._validateForm();
        this._setError();
      });
    }

    onSubmit() {
      Promise.all([this._validateForm(), this._setError()])
        .then(() => {
          const id = this.props.movie.id;
          const review = ReviewModel.toRAW(this.state.rating, this.state.comment);
          const handleSendReviewError = (err) => {
            this._setError(err.message);
            this.setState({
              isFormDisabled: false,
            });
          };

          const handleSendReviewSuccess = () => {
            this.setState({
              isFormDisabled: false,
            });
          };

          if (this.state.errors.length === 0) {
            this.setState({
              isFormDisabled: true,
            });
            this.props.onSendReview(id, review, handleSendReviewSuccess, handleSendReviewError);
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

  return WithAddReviewForm;
};

export {withAddReviewForm};
