import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmObjectPropTypes, AppRoute} from '@/const';

import {AuthorizationStatus} from '@/reducer/user/user';

import {UserBlock} from '@/components/user-block/user-block';

const AddReview = ({movie, errors, onSubmit, onInput, authorizationStatus, isSubmitButtonDisabled}) => {
  const {id, title, backgroundImage, poster} = movie;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE_PAGE}/${id}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock
            authorizationStatus={authorizationStatus}
            avatarImageSrc="/img/avatar.jpg"
          />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onInput={onInput}
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit();
          }}
        >
          {errors.map((error) => {
            return <p key={error}>{error}</p>;
          })}
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" required="" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength="50" maxLength="400"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  movie: PropTypes.shape(filmObjectPropTypes),
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
};

export {AddReview};
