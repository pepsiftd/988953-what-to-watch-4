import React from 'react';
import Main from '@/components/main/main';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoMovieTitle, promoMovieGenre, promoMovieYear} = props;

  return (
    <Main
      promoMovieTitle={promoMovieTitle}
      promoMovieGenre={promoMovieGenre}
      promoMovieYear={promoMovieYear}
    />
  );
};

export default App;
