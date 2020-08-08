import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';


const SignIn = ({authorizationStatus, renderEmailInput, renderPasswordInput, isBadRequest, isValidEmail, onSubmit}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTHORIZED;

  if (isAuthorized) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  const isError = !isValidEmail || isBadRequest;
  const wrongEmailClass = isValidEmail ? `` : `sign-in__field--error`;

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
          onSubmit={onSubmit}
        >
          {isError &&
          <div className="sign-in__message">
            {!isValidEmail && <p>Please enter a valid email address</p>}
            {isBadRequest && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
          </div>}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${wrongEmailClass}`}>
              {renderEmailInput()}
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              {renderPasswordInput()}
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
};

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isBadRequest: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  renderPasswordInput: PropTypes.func.isRequired,
  renderEmailInput: PropTypes.func.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {SignIn};
