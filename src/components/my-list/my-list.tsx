import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '@/reducer/user/user';

import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

import {MoviesList} from '@/components/movies-list/movies-list';
import {UserBlock} from '@/components/user-block/user-block';
import {PageFooter} from '@/components/page-footer/page-footer';
import {Logo} from '@/components/logo/logo';

const MoviesListWrapped = withActiveItem(MoviesList);

const MyList = ({favoriteMovies, authorizationStatus, authorizationInfo}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock
          authorizationStatus={authorizationStatus}
          authorizationInfo={authorizationInfo}
        />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesListWrapped
          movies={favoriteMovies}
        />
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)),
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export {MyList};
