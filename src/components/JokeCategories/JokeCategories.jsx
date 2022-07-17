import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import stringToColor from 'string-to-color';

import './JokeCategories.scss';
import { getCategories, selectCategory } from '../../redux/jokesSlice';
import { useDispatch, useSelector } from 'react-redux';

const JokeCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.jokes);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderedCategories = categories.map((category, i) => (
    <div
      key={i}
      className="joke-categories__category"
      onClick={() => dispatch(selectCategory(category))}
      style={{ backgroundColor: stringToColor(category) }}
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
