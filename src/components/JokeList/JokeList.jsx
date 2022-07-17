import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Joke from './Joke';

import { getJokes } from '../../redux/jokesSlice';
import SelectedCategory from '../SelectedCategory/SelectedCategory';

import './JokeList.scss';

const JokeList = () => {
  const dispatch = useDispatch();
  const { list, selectedCategory } = useSelector(state => state.jokes);

  useEffect(() => {
    dispatch(getJokes());
  }, [dispatch]);

  if (!list) {
    return null;
  }

  const renderedJokes = list[selectedCategory].map(joke => {
    return (
      <Joke key={joke.id} joke={joke} selectedCategory={selectedCategory} />
    );
  });

  return (
    <>
      <SelectedCategory />
      <div className="joke-list">
        {renderedJokes.length
          ? renderedJokes
          : 'There is no joke that matches this category.'}
      </div>
    </>
  );
};

export default JokeList;
