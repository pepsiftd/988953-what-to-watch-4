import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '@/reducer/user/user';
import {AppRoute} from '@/const';


const UserBlock = ({authorizationStatus, avatarImageSrc = `img/avatar.jpg`}) => {
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTHORIZED &&
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src={avatarImageSrc} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      }
      {authorizationStatus === AuthorizationStatus.UNAUTHORIZED &&
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }

    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  avatarImageSrc: PropTypes.string,
};

export {UserBlock};
