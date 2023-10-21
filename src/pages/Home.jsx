import React from 'react';

import Navbar from '../layout/Navbar';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
