import React from 'react';
// import Basket from '../basket/basket';
import Catalog from '../catalog/catalog';
import Filters from '../filters/filters';
import Footer from '../footer/footer';
import Header from '../header/header';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <Catalog />
      </main>
      <Footer />
    </>

  );
}

export default Main;
