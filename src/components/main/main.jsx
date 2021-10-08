import React from "react";
import {Link} from "react-router-dom";
import Catalog from "../catalog/catalog";
import Filters from "../filters/filters";
import Footer from "../footer/footer";
import Header from "../header/header";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="visually-hidden">Guitar shop интернет магазин гитар</h1>
        <section className="main__catalog">
          <h2 className="main__catalog-title">Каталог гитар</h2>
          <ul className="main__catalog-breadcrumps">
            <li className="main__catalog-breadcrumps-item">
              <Link className="main__catalog-breadcrumps-link" to="/main">Главная</Link>
            </li>
            <li className="main__catalog-breadcrumps-item">
              <p className="main__catalog-breadcrumps-text">Каталог</p>
            </li>
          </ul>
          <Filters />
          <Catalog />
        </section>
      </main>
      <Footer />
    </>

  );
}

export default Main;
