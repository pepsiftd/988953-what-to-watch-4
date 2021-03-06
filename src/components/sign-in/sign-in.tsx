import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';
import {PageFooter} from '@/components/page-footer/page-footer';
import {Logo} from '@/components/logo/logo';

interface Props {
  isBadRequest: boolean;
  authorizationStatus: AuthorizationStatus;
  renderPasswordInput: () => React.ReactElement;
  renderEmailInput: () => React.ReactElement;
  isValidEmail: boolean;
  onSubmit: () => void;
}

const SignIn: React.FunctionComponent<Props> = ({authorizationStatus, renderEmailInput, renderPasswordInput, isBadRequest, isValidEmail, onSubmit}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTHORIZED;

  if (isAuthorized) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  const isError = !isValidEmail || isBadRequest;
  const wrongEmailClass = isValidEmail ? `` : `sign-in__field--error`;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

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

      <PageFooter />
    </div>
  );
};

export {SignIn};
