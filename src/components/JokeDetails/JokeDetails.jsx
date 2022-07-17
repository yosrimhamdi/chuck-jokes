import React from 'react';
import { Link, matchPath, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

import Thumb from './Thumb';
import Status from './Status';
import SelectedCategory from '../SelectedCategory/SelectedCategory';
import Navigation from './Navigation';

import './JokeDetails.scss';
import TopTen from './TopTen';

const JokeDetails = () => {
  const location = useLocation();
  const { list } = useSelector(state => state.jokes);

  if (!list) {
    return <Navigate to="/" replace />;
  }

  const { category, jokeId } = matchPath(
    '/category/:category/:jokeId',
    location.pathname
  ).params;

  const { value, likes, dislikes } = list[category].find(
    ({ id }) => id === jokeId
  );

  const JokeName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 3,
    separator: ' ',
    style: 'capital',
  });

  return (
    <>
      <Link to="/">
        <FontAwesomeIcon className="back-button" icon={faAngleLeft} />
      </Link>
      <div className="container">
        <div>
          <div className="joke-details">
            <div className="joke-info">
              <SelectedCategory />
              <Status likes={likes} />
            </div>
            <div className="joke-details__title">{JokeName}</div>
            <div className="joke-details__joke">{value}</div>
          </div>
          <div className="cta-container">
            <div className="thumbs-container">
              <Thumb count={likes} />
              <Thumb down count={dislikes} />
            </div>
            <Navigation
              jokes={list[category]}
              category={category}
              selectedJokeId={jokeId}
            />
          </div>
        </div>
        <TopTen />
      </div>
    </>
  );
};

export default JokeDetails;
