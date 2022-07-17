import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getJokes } from '../../redux/jokesSlice';
import SelectedCategory from '../SelectedCategory/SelectedCategory';
import Joke from './Joke';
import Spinner from '../Spinner/Spinner';

import './JokeList.scss';

const JokeList = () => {
  const dispatch = useDispatch();
  const { list, selectedCategory, isLoadingJokes } = useSelector(
    state => state.jokes
  );
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!list) {
      dispatch(getJokes());
    }
  }, [dispatch, list]);

  if (isLoadingJokes) {
    return <Spinner />;
  }

  if (!list) {
    return null;
  }

  const renderedJokes = [];

  for (let i = 0; i < 10; i++) {
    let jokes = list[selectedCategory];

    if (jokes.length > 10) {
      jokes = jokes.slice((0 + currentPage) * 10, 10 * (currentPage + 1));
    }

    if (i < jokes.length) {
      renderedJokes.push(
        <Joke
          key={jokes[i].id}
          joke={jokes[i]}
          selectedCategory={selectedCategory}
        />
      );
    }
  }

  return (
    <div>
      <SelectedCategory />
      <div className="joke-list">
        {renderedJokes.length
          ? renderedJokes
          : 'There is no joke that matches this category.'}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => setCurrentPage(event.selected)}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(list[selectedCategory].length / 10)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination-buttons"
        activeClassName="pagination-active"
      />
    </div>
  );
};

export default JokeList;
