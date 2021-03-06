import * as React from 'react';

import {SmallMovieCard} from '@/components/small-movie-card/small-movie-card';
import {withVideo} from '@/hocs/with-video/with-video';
import {SMALL_CARD_VIDEO_SETTINGS} from '@/const';
import {noop} from '@/utils';

const SmallMovieCardWithVideo = withVideo(SmallMovieCard);

interface Props {
  movies: {
    id: number;
    title: string;
    imageSrc: string;
    preview: string;
  }[];
  renderItem: (ItemComponent: React.ComponentClass, itemId: number | string, itemProps: Record<string, unknown>) => React.ReactNode;
  setActiveItem: (id: number) => void;
  clearActiveItem: () => void;
  cardsShowing: number;
  renderShowMore: () => void;
}

const MoviesList: React.FunctionComponent<Props> = ({movies, renderItem, setActiveItem, clearActiveItem, cardsShowing, renderShowMore = noop}) => {
  const cardsShowingCount = cardsShowing ? cardsShowing : movies.length;
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          movies.slice(0, cardsShowingCount).map((movie) => {
            const videoSettings = Object.assign({}, {
              src: movie.preview,
              poster: movie.imageSrc,
            }, SMALL_CARD_VIDEO_SETTINGS);

            return renderItem(SmallMovieCardWithVideo, movie.id, {
              key: movie.id,
              movie,
              onMouseEnter: setActiveItem,
              onMouseLeave: clearActiveItem,

              videoSettings,
            });
          })
        }
      </div>
      {renderShowMore()}
    </React.Fragment>
  );
};

export {MoviesList};
