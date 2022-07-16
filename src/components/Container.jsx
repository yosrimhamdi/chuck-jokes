import React from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer';

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
