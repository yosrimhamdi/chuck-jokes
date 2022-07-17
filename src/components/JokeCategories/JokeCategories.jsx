import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import stringToColor from 'string-to-color';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, selectCategory } from '../../redux/jokesSlice';
import Spinner from '../Spinner/Spinner';

import './JokeCategories.scss';

const JokeCategories = () => {
  const dispatch = useDispatch();
  const { categories, isLoadingCategories } = useSelector(state => state.jokes);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);

  if (isLoadingCategories) {
    return <Spinner />;
  }

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
    <div
      onClick={() => dispatch(selectCategory('uncategorized'))}
      key={categories.length}
      className="joke-categories__category view-all"
    >
      <span>view all</span>
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );

  return <div className="joke-categories">{renderedCategories}</div>;
};

export default JokeCategories;
