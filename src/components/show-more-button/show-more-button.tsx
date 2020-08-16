import React from 'react';

interface Props {
  onClick: () => void;
}

const ShowMoreButton: React.FunctionComponent<Props> = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClick}
      >Show more</button>
    </div>
  );
};

export {ShowMoreButton};
