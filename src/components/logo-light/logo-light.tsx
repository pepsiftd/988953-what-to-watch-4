import React from 'react';

import {Logo} from '@/components/logo/logo';

const LIGHT_LOGO_CLASSNAME = `logo__link--light`;

const LogoLight = () => {
  return (
    <Logo additionalClassName={LIGHT_LOGO_CLASSNAME} />
  );
};

export {LogoLight};
