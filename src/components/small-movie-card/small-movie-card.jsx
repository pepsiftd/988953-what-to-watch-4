import React from 'react';

const SmallMovieCard = ({movieName}) => {
  const imageSrc = `img/${movieName.replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase()}.jpg`;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={imageSrc} alt={movieName} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;
