import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

import Thumb from './Thumb';

import './JokeDetails.scss';
import SelectedCategory from '../SelectedCategory/SelectedCategory';

const JokeDetails = () => {
  const location = useLocation();
  const { list } = useSelector(state => state.jokes);
  const { category, jokeId } = matchPath(
    '/category/:category/:jokeId',
    location.pathname
  ).params;

  const { value } = list[category].find(({ id }) => id === jokeId);

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
              <div className="trending">TRENDING</div>
            </div>
            <div className="joke-details__title">{JokeName}</div>
            <div className="joke-details__joke">{value}</div>
          </div>
          <div className="cta-container">
            <div className="thumbs-container">
              <Thumb count={130} />
              <Thumb down count={98} />
            </div>
            <div>
              <Link to={`/joke/2`} className="button nav-button">
                <FontAwesomeIcon icon={faAngleLeft} /> PREV. JOKE
              </Link>
              <Link to={`/joke/2`} className="button nav-button">
                NEXT JOKE <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
        </div>
        <div className="top-ten">
          <h4 className="top-ten__title">Top 10 jokes this week</h4>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
          <div>Chuck Norris eats steak</div>
        </div>
      </div>
    </>
  );
};

export default JokeDetails;
