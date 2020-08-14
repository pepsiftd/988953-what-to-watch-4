import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';

interface Props {
  authorizationStatus: AuthorizationStatus;
};

const PrivateRoute: React.FunctionComponent<Props> = (props) => {
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
