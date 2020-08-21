import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '@/const';
import {FilmObject, AuthInfo} from '@/types';

import {AuthorizationStatus} from '@/reducer/user/user';

import {UserBlock} from '@/components/user-block/user-block';
import {Logo} from '@/components/logo/logo';
import {COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '@/const';

interface Props {
  movie: FilmObject;
  errors: string[];
  onInput: () => void;
  onSubmit: () => void;
  authorizationStatus: AuthorizationStatus;
  authorizationInfo: AuthInfo;
  isSubmitButtonDisabled: boolean;
  isFormDisabled: boolean;
}

const AddReview: React.FunctionComponent<Props>
= ({movie, errors, onSubmit, isFormDisabled, onInput, authorizationStatus, authorizationInfo, isSubmitButtonDisabled}) => {

  const {id, title, backgroundImage, poster} = movie;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

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
            authorizationInfo={authorizationInfo}
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
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" required={true} disabled={isFormDisabled} />
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
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={COMMENT_MIN_LENGTH}
              maxLength={COMMENT_MAX_LENGTH}
              disabled={isFormDisabled}
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isSubmitButtonDisabled || isFormDisabled}
              >Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export {AddReview};
