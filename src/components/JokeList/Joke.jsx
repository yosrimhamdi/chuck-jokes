import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

const Joke = ({ joke, selectedCategory }) => {
  const { value, id } = joke;

  const JokeName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 3,
    separator: ' ',
    style: 'capital',
  });

  return (
    <div className="joke">
      <div className="joke__title">
        <FontAwesomeIcon icon={faBolt} className="joke__bolt-icon" /> {JokeName}
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
