import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';

interface Props {
  authorizationStatus: AuthorizationStatus.AUTHORIZED | AuthorizationStatus.UNAUTHORIZED;
  // [propName: string]: any;
}

const PrivateRoute: Route<Props> = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.UNAUTHORIZED) {
    return (
      <Redirect to={AppRoute.LOGIN} />
    );
  }

  return (
    <Route
      {...props}
    />
  );
};

export {PrivateRoute};
