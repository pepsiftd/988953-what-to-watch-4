import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

import {checkEmail} from '@/utils';

const withSignInForm = (Component) => {
  class WithSignInForm extends PureComponent {
    constructor(props) {
      super(props);

      this._emailInputRef = createRef();
      this._passwordInputRef = createRef();

      this.state = {
        isValidEmail: true,
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onEmailInput = this.onEmailInput.bind(this);
    }

    onEmailInput() {
      if (checkEmail(this._emailInputRef.current.value)) {
        this.setState({
          isValidEmail: true
        });
      } else {
        this.setState({
          isValidEmail: false
        });
      }
    }

    onSubmit(evt) {
      evt.preventDefault();

      if (this.state.isValidEmail && this._passwordInputRef.current.value.length > 0) {
        this.props.onSignIn({
          email: this._emailInputRef.current.value,
          password: this._passwordInputRef.current.value,
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          renderEmailInput={() => {
            return (
              <input
                ref={this._emailInputRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onInput={this.onEmailInput}
              />
            );
          }}

          renderPasswordInput={() => {
            return (
              <input
                ref={this._passwordInputRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
            );
          }}

          isValidEmail={this.state.isValidEmail}
          onSubmit={this.onSubmit}
        />
      );
    }
  }

  WithSignInForm.propTypes = {
    onSignIn: PropTypes.func.isRequired,
  };

  return WithSignInForm;
};

export {withSignInForm};
