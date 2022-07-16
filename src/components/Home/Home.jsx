import React from 'react';

import JokeCategories from '../JokeCategories/JokeCategories';
import JokeList from '../JokeList/JokeList';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <JokeCategories />
      <JokeList />
    </div>
  );
};

export default Home;
