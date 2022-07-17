import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './JokeDetails.scss';
import Thumb from './Thumb';
import { Link } from 'react-router-dom';

const JokeDetails = () => {
  return (
    <>
      <Link to="/">
        <FontAwesomeIcon className="back-button" icon={faAngleLeft} />
      </Link>
      <div className="container">
        <div>
          <div className="joke-details">
            <div className="joke-info">
              <div className="current-category">social jokes</div>
              <div className="trending">TRENDING</div>
            </div>
            <div className="joke-details__title">the Granny Joke </div>
            <div className="joke-details__joke">
              Chuck Norris eats steak for every single meal. Most times he
              forgets to kill the cow.
            </div>
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
