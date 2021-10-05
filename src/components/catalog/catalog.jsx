import React from 'react';
import {useSelector} from "react-redux";

// import {increment} from '../../store/basketSlise';
import {selectGuitars} from "../../store/giutarsSlise";
import CatalogItem from "../catalog-item/catalog-item";
import AddModal from "../add-modal/add-modal";

function Catalog() {

  const guitars = useSelector(selectGuitars);


  /*
  // eslint-disable-next-line consistent-return
  const clickHandler = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    if (!target.classList.contains(`catalog__item-btn-buy`)) {
      return true;
    }
    dispatch(increment(target.getAttribute(`data-key`)));
  };*/

  return (
    <>
      <section className="catalog">
        <ul className="catalog__list">
          {guitars.map((item) => <CatalogItem key={item.article}
            article={item.article}
            name={item.name}
            image={item.image}
            price={item.price}
            reviews={item.reviews}
          />)}
        </ul>
      </section>
      <AddModal />
    </>


  );
}

export default Catalog;
