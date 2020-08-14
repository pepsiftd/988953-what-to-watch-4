import React from 'react';
import {AuthorizationStatus} from '@/reducer/user/user';
import {AuthInfo} from '@/types';

import {withActiveItem} from '@/hocs/with-active-item/with-active-item';

import {MoviesList} from '@/components/movies-list/movies-list';
import {UserBlock} from '@/components/user-block/user-block';
import {PageFooter} from '@/components/page-footer/page-footer';
import {Logo} from '@/components/logo/logo';

const MoviesListWrapped = withActiveItem(MoviesList);

interface Props {
  authorizationStatus: AuthorizationStatus;
  authorizationInfo: AuthInfo;
  favoriteMovies: {
    id: number;
    title: string;
    imageSrc: string;
    preview: string;
  }[];
};

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

export {MyList};
