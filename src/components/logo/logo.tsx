import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '@/const';

const Logo = ({additionalClassName = ``}) => {
  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={`logo__link ${additionalClassName}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  additionalClassName: PropTypes.string,
};

export {Logo};
