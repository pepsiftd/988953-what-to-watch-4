import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';

const checkEmail = (email) => {
  const pattern = new RegExp(`^([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})([.]{1,})([A-z]{2,8})$`);

  return pattern.test(email.trim());
};

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._emailInputRef = createRef();
    this._passwordInputRef = createRef();

    this.state = {
      isValidEmail: true,
    };

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(evt) {
    evt.preventDefault();

    if (this.state.isValidEmail && this._passwordInputRef.current.value.length > 0) {
      this.props.onSignIn({
        email: this._emailInputRef.current.value,
        password: this._passwordInputRef.current.value,
      });
    }
  }

  render() {
    const isAuthorized = this.props.authorizationStatus === AuthorizationStatus.AUTHORIZED;

    if (isAuthorized) {
      return <Redirect to={AppRoute.ROOT} />;
    }

    const isBadRequest = this.props.isBadRequest;
    const isError = !this.state.isValidEmail || isBadRequest;
    const wrongEmailClass = this.state.isValidEmail ? `` : `sign-in__field--error`;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._onSubmit}
          >
            {isError &&
            <div className="sign-in__message">
              {!this.state.isValidEmail && <p>Please enter a valid email address</p>}
              {isBadRequest && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
            </div>}

            <div className="sign-in__fields">
              <div className={`sign-in__field ${wrongEmailClass}`}>
                <input
                  ref={this._emailInputRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  onInput={() => {
                    if (checkEmail(this._emailInputRef.current.value)) {
                      this.setState({
                        isValidEmail: true
                      });
                    } else {
                      this.setState({
                        isValidEmail: false
                      });
                    }
                  }}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={this._passwordInputRef}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
};

export {SignIn, checkEmail};
