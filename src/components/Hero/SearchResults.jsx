import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import stringToColor from 'string-to-color';
import { Link } from 'react-router-dom';

import { setTerm } from '../../redux/jokesSlice';

const SearchResults = () => {
  const { term, list, categories } = useSelector(state => state.jokes);
  const dispatch = useDispatch();
  if (!term) {
    return null;
  }

  const searchResults = {};

  categories.forEach(category => {
    const joke = list[category].find(({ value }) => value.includes(term));

    searchResults[category] = joke;
  });

  const renderedSearchResults = categories.map(category => {
    if (searchResults[category]) {
      const { value: joke, id } = searchResults[category];
      return (
        <Link
          key={id}
          onClick={() => dispatch(setTerm(''))}
          to={`/category/${category}/${id}`}
          className="search-item"
        >
          <FontAwesomeIcon
            icon={faBolt}
            style={{ marginRight: '1em', color: stringToColor(joke) }}
          />
          {joke.split(' ').slice(0, 4).join(' ')}...
        </Link>
      );
    }

    return null;
  });

  return (
    <div className="hero__search-results">
      {renderedSearchResults.every(element => element === null)
        ? 'No results matching this term.'
        : renderedSearchResults}
    </div>
  );
};

export default SearchResults;
