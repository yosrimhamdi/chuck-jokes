import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ jokes, selectedJokeId, category }) => {
  const arrayJokes = [...jokes];
  const index = arrayJokes.findIndex(joke => joke.id === selectedJokeId);

  return (
    <div>
      {index > 0 && (
        <Link
          to={`/category/${category}/${arrayJokes[index - 1].id}`}
          className="button nav-button"
        >
          <FontAwesomeIcon icon={faAngleLeft} /> PREV. JOKE
        </Link>
      )}
      {index < arrayJokes.length - 1 && (
        <Link
          to={`/category/${category}/${arrayJokes[index + 1].id}`}
          className="button nav-button"
        >
          NEXT JOKE <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      )}
    </div>
  );
};

export default Navigation;
