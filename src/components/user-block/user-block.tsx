import React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '@/reducer/user/user';
import {AppRoute} from '@/const';
import {AuthInfo} from '@/types';

interface Props {
  authorizationStatus: AuthorizationStatus;
  authorizationInfo: AuthInfo;
}


const UserBlock: React.FunctionComponent<Props> = ({authorizationStatus, authorizationInfo}) => {
  const {avatar} = authorizationInfo;
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTHORIZED &&
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      }
      {authorizationStatus === AuthorizationStatus.UNAUTHORIZED &&
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }

    </div>
  );
};

export {UserBlock};
