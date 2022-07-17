import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import stringToColor from 'string-to-color';

import { getJokes } from '../../redux/jokesSlice';

import './JokeList.scss';

const JokeList = () => {
  const dispatch = useDispatch();
  const { list, selectedCategory } = useSelector(state => state.jokes);

  useEffect(() => {
    dispatch(getJokes());
  }, [dispatch]);

  if (!list) {
    return null;
  }

  const renderedJokes = list[selectedCategory].map(({ value }, i) => {
    return (
      <div key={i} className="joke">
        <div className="joke__title">
          <FontAwesomeIcon icon={faBolt} className="joke__bolt-icon" /> POLICE
          JOKE
        </div>
        <p className="joke__content">{value}</p>
        <div className="joke__button-wrapper">
          <Link className="button" to={`/joke/${i + 1}`}>
            SEE STATS{' '}
            <FontAwesomeIcon
              className="button__arrow-icon"
              icon={faArrowRight}
            />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        className="current-category"
        style={{ backgroundColor: stringToColor(selectedCategory) }}
      >
        {selectedCategory} jokes
      </div>
      <div className="joke-list">
        {renderedJokes.length
          ? renderedJokes
          : 'There is no joke that matches this category.'}
      </div>
    </>
  );
};

export default JokeList;
