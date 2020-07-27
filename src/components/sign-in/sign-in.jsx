import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const BAD_REQUEST = 400;

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._emailInputRef = createRef();
    this._passwordInputRef = createRef();

    this.state = {
      isValidEmail: true,
      isBadRequest: false,
    };

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(evt) {
    evt.preventDefault();

    this.props.onSignIn({
      email: this._emailInputRef.current.value,
      password: this._passwordInputRef.current.value,
    })
      .catch((err) => {
        // НЕ ЛОВИТ ОШИБКУ
        if (err.response.status === BAD_REQUEST) {
          this.setState({
            isBadRequest: true,
          });
        }
      });
  }

  render() {
    const isError = !this.state.isValidEmail || this.state.isBadRequest;
    const wrongEmailClass = this.state.isValidEmail ? `` : `sign-in__field--error`;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
              {this.state.isBadRequest && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
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
};

export {SignIn};
