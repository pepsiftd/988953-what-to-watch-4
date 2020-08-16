import React, {PureComponent, createRef} from 'react';
import {Subtract} from 'utility-types';

import {checkEmail} from '@/utils';

interface State {
  isValidEmail: boolean;
}

interface InjectingProps {
  renderEmailInput: () => React.ReactNode;
  renderPasswordInput: () => React.ReactNode;
  isValidEmail: boolean;
  onSubmit: (evt: React.FormEvent) => void;
}

const withSignInForm: (Component: React.ComponentClass) => React.ReactNode = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSignInForm extends PureComponent<T, State> {
    private emailInputRef: React.RefObject<HTMLInputElement>;
    private passwordInputRef: React.RefObject<HTMLInputElement>;

    constructor(props) {
      super(props);

      this.emailInputRef = createRef();
      this.passwordInputRef = createRef();

      this.state = {
        isValidEmail: true,
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onEmailInput = this.onEmailInput.bind(this);
    }

    onEmailInput() {
      if (checkEmail(this.emailInputRef.current.value)) {
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

      if (this.state.isValidEmail && this.passwordInputRef.current.value.length > 0) {
        this.props.onSignIn({
          email: this.emailInputRef.current.value,
          password: this.passwordInputRef.current.value,
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
                ref={this.emailInputRef}
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
                ref={this.passwordInputRef}
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

  return WithSignInForm;
};

export {withSignInForm};
