import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Products from '../components/Products';
import Title from '../components/Title';

const ShoppingCategorie = () => {
  const { category } = useParams();

  return (
    <>
      <Navbar />
      <Title>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</Title>
      <Products category={category} />
      <Footer />
    </>
  );
};

export default ShoppingCategorie;
