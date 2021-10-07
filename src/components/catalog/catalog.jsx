import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import ReactPaginate from 'react-paginate';

// import {increment} from '../../store/basketSlise';
import {selectGuitars} from "../../store/giutarsSlise";
import {selectPagination} from "../../store/paginationSlise";
import {selectPage} from "../../store/paginationSlise";
import CatalogItem from "../catalog-item/catalog-item";
import AddModal from "../add-modal/add-modal";
import SortPanel from "../sort-panel/sort-panel";

function Catalog() {

  const guitars = useSelector(selectGuitars);
  const pageNumber = useSelector(selectPagination);
  const pageCountSelect = useSelector(selectPagination);
  const dispatch = useDispatch();
  const GUITARS_PER_PAGE = 9;

  const pagesVisites = pageNumber * GUITARS_PER_PAGE;
  const pageCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);

  // eslint-disable-next-line no-console
  console.log(pageCountSelect);

  const onPageChangeClick = ({selected}) => {
    dispatch(selectPage(selected));
  };

  const displayGuitars = guitars.slice(pagesVisites, pagesVisites + GUITARS_PER_PAGE)
  .map((item) => <CatalogItem key={item.article}
    article={item.article}
    name={item.name}
    image={item.image}
    price={item.price}
    reviews={item.reviews}
  />);


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
        <SortPanel />
        <ul className="catalog__list">
          {displayGuitars}
        </ul>
        <ReactPaginate
          previousLabel={`Назад`}
          nextLabel={`Далее`}
          breakLabel={`...`}
          breakClassName={`pagination__break`}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={onPageChangeClick}
          pageClassName={`catalog__pagination-item`}
          containerClassName={`catalog__pagination`}
          activeClassName={`catalog__pagination--active`}
          previousClassName={`catalog__pagination--prev`}
          nextClassName={`catalog__pagination--next`}
          disabledClassName={`catalog__pagination-controls--disabled`}

        />
      </section>
      <AddModal />
    </>


  );
}

export default Catalog;