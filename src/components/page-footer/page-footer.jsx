import React from 'react';

import {LogoLight} from '@/components/logo-light/logo-light';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <LogoLight />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export {PageFooter};

