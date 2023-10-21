import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Clothes'
          image='/image/clothes.jpg'
        />
        <Categorie
          name='Shoes'
          image='/image/shoes.jpg'
        />
        <Categorie
          name='Electronics'
          image='/image/electronics.jpg'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Special'
          image='/image/special.jpg'
        />
        <Categorie
          name='Others'
          image='/image/other.jpg'
        />
      </div>
    </section>
  );
};

export default Categories;
