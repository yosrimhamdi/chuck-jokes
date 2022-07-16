import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="hero__title">The Joke Bible</h1>
        <h4 className="hero__sub-title">Daily Laughs for you and yours</h4>
        <div className="hero__input-container">
          <input
            type="text"
            className="hero__search-input"
            placeholder="How can we make you laugh today?"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hero__magnifier"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
