import * as React from 'react';

import {GenresListItem} from '@/components/genres-list-item/genres-list-item';
import {getGenresFromMovies} from '@/utils';
import {MAX_GENRES_AMOUNT, ALL_GENRES_FILTER} from '@/const';

interface Props {
  movies: {
    id: number;
    genre: string;
  }[];
  renderItem: (ItemComponent: React.FunctionComponent, itemId: number | string, itemProps: Record<string, unknown>) => React.ReactNode;
  setActiveItem: (id: number | string) => void;
  onTitleClick: (id: number | string) => void;
}

const GenresList: React.FunctionComponent<Props> = ({movies, renderItem, setActiveItem, onTitleClick}) => {
  const genres = [ALL_GENRES_FILTER, ...getGenresFromMovies(movies).slice(0, MAX_GENRES_AMOUNT)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          renderItem(
              GenresListItem,
              genre,
              {
                key: genre,
                genre,
                onTitleClick: (args) => {
                  setActiveItem(args);
                  onTitleClick(args);
                },
              }
          )
        );
      })}

    </ul>
  );
};

export {GenresList};
