import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt } from '@fortawesome/free-solid-svg-icons';

import './JokeList.scss';

const jokes = [
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
  'Chuck Norris once won a game of croquet while holding an enraged gorilla in a half-nelson.',
];

const JokeList = () => {
  const renderedJokes = jokes.map((joke, i) => {
    return (
      <div key={i} className="joke">
        <div className="joke__title">
          <FontAwesomeIcon icon={faBolt} className="joke__bolt-icon" /> POLICE
          JOKE
        </div>
        <p className="joke__content">{joke}</p>
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
      <div className="current-category">social jokes</div>
      <div className="joke-list">{renderedJokes}</div>
    </>
  );
};

export default JokeList;
