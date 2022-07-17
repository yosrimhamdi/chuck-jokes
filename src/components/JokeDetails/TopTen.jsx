import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopTen = () => {
  const { list } = useSelector(state => state.jokes);
  const jokes = list['uncategorized'];

  const topTen = [...jokes].sort((a, b) => b.likes - a.likes).slice(0, 10);

  const renderedTopTen = topTen.map(({ value, id }) => (
    <Link
      key={id}
      className="top-ten__item"
      to={`/category/uncategorized/${id}`}
    >
      {value.split(' ').slice(0, 4).join(' ')}...
    </Link>
  ));

  return (
    <div className="top-ten">
      <h4 className="top-ten__title">Top 10 jokes this week</h4>
      {renderedTopTen}
    </div>
  );
};

export default TopTen;
