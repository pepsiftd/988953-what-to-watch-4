import React from 'react';
import {history} from '@/history';
import {AppRoute} from '@/const';
import {Link} from 'react-router-dom';

const PREVIEW_START_TIMEOUT = 1000;

interface Props {
  movie: {
    id: number;
    title: string;
    imageSrc: string;
    preview: string;
  };
  children: React.ReactElement;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const SmallMovieCard: React.FunctionComponent<Props> = ({movie, onMouseEnter, onMouseLeave, children}) => {
  const {title, id} = movie;
  let timeout = null;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        timeout = setTimeout(() => {
          onMouseEnter(id);
        }, PREVIEW_START_TIMEOUT);
      }}
      onMouseLeave={() => {
        if (timeout) {
          clearTimeout(timeout);
        }
        onMouseLeave();
      }}
      onClick={() => {
        history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
      }}
    >
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${AppRoute.MOVIE_PAGE}/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

export {SmallMovieCard};
