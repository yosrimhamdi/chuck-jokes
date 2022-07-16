import React from 'react';
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
        <button className="button">
          SEE STATS{' '}
          <FontAwesomeIcon className="button__arrow-icon" icon={faArrowRight} />
        </button>
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
