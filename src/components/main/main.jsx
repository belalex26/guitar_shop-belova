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
        <h1 className="visually-hidden">Guitar shop интернет магазин гитар</h1>
        <section className="main__catalog">
          <h2 className="main__catalog-title">Каталог гитар</h2>
          <Filters />
          <Catalog />
        </section>
      </main>
      <Footer />
    </>

  );
}

export default Main;
