import React from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

import './Container.scss';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container-content">{children}</div>
      <Footer />
    </>
  );
};

export default Container;
