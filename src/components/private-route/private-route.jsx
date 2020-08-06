import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute} from '@/const';
import {AuthorizationStatus} from '@/reducer/user/user';

const PrivateRoute = (props) => {
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

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired
};

export {PrivateRoute};
