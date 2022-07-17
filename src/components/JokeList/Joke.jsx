import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import stringToColor from 'string-to-color';

const Joke = ({ joke, selectedCategory }) => {
  const { value, id } = joke;

  return (
    <div className="joke">
      <div className="joke__title">
        <FontAwesomeIcon
          icon={faBolt}
          style={{ marginRight: '1em', color: stringToColor(selectedCategory) }}
          className="joke__bolt-icon"
        />
        {value.split(' ').slice(0, 3).join(' ')}...
      </div>
      <p className="joke__content">{value}</p>
      <div className="joke__button-wrapper">
        <Link className="button" to={`/category/${selectedCategory}/${id}`}>
          SEE STATS{' '}
          <FontAwesomeIcon className="button__arrow-icon" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Joke;
