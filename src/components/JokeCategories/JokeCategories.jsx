import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import stringToColor from 'string-to-color';

import './JokeCategories.scss';

const categories = [
  'animal',
  'career',
  'celebrity',
  'dev',
  'explicit',
  'fashion',
  'food',
  'history',
  'money',
  'movie',
  'music',
  'political',
  'religion',
  'science',
  'sport',
  'travel',
];

const JokeCategories = () => {
  const renderedCategories = categories.map((category, i) => (
    <div
      key={i}
      className="joke-categories__category"
      style={{
        backgroundColor:
          i < 8 ? `var(--category-${i + 1})` : stringToColor(category),
      }}
    >
      {category}
    </div>
  ));

  renderedCategories.push(
    <div key={categories.length} className="joke-categories__category view-all">
      <span>view all</span>
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );

  return <div className="joke-categories">{renderedCategories}</div>;
};

export default JokeCategories;
