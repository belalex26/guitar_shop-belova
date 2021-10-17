import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";

import {selectGuitars} from "../../store/giutarsSlise";
import {selectPagination} from "../../store/paginationSlise";
import {selectPage} from "../../store/paginationSlise";
import {selectFilter, selectSort} from "../../store/filterSlise";


import {renderGuitarsSortByPriceUp, renderGuitarsSortByPriceDown, renderGuitarsSortByReviewsUp, renderGuitarsSortByReviewsDown, filterChechbox, filterByPrice} from "../../utils";
import {DIRECTION_DOWN, DIRECTION_UP, SORT_BY_REVIEW, SORT_BY_PRICE} from "../../utils";
import CatalogItem from "../catalog-item/catalog-item";
import Modal from "../modal/modal";
import AddContent from "../add-content/add-content";
import SortPanel from "../sort-panel/sort-panel";

function Catalog() {
  const [modalActive, setModalActive] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const GUITARS_PER_PAGE = 9;
  let pageCount = 1;

  const guitars = useSelector(selectGuitars);
  const pageNumber = useSelector(selectPagination);
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  let cloneGuitars = JSON.parse(JSON.stringify(guitars));

  useEffect(() => {
    onSortingGuitars();
  }, [sort]);

  useEffect(() => {
    renderGuitars();
  }, [cloneGuitars]);

  useEffect(() => {
    setSuccessModal(false);
  }, [modalActive]);

  const renderPageCount = () => {
    pageCount = Math.ceil(cloneGuitars.length / GUITARS_PER_PAGE);
    return pageCount;
  };

  const pagesVisites = pageNumber * GUITARS_PER_PAGE;

  const onPageChangeClick = ({selected}) => {
    dispatch(selectPage(selected));
  };

  // фильтры

  const onFilters = () => {
    if (Object.keys(filter).length !== 0) {

      let type = filter.typeFilterArr;
      let strings = filter.stringFilterArr;

      let filterData = {
        type,
        strings
      };

      cloneGuitars = filterChechbox(cloneGuitars, filterData);

      // по цене

      cloneGuitars = filterByPrice(cloneGuitars, filter.minPrice, filter.maxPrice);
    }
    return cloneGuitars;
  };

  const onSortingGuitars = () => {

    if (sort.type === SORT_BY_PRICE && sort.direction === DIRECTION_UP) {
      renderGuitarsSortByPriceUp(cloneGuitars);
    }

    // цена по убыванию

    if (sort.type === SORT_BY_PRICE && sort.direction === DIRECTION_DOWN) {
      renderGuitarsSortByPriceDown(cloneGuitars);
    }

    // рейтинг по возрастанию

    if (sort.type === SORT_BY_REVIEW && sort.direction === DIRECTION_UP) {
      renderGuitarsSortByReviewsUp(cloneGuitars);
    }
    // рейтинг по убыванию

    if (sort.type === SORT_BY_REVIEW && sort.direction === DIRECTION_DOWN) {
      renderGuitarsSortByReviewsDown(cloneGuitars);
    }

    if (sort.type === SORT_BY_PRICE) {
      renderGuitarsSortByPriceUp(cloneGuitars);
    }
    if (sort.type === SORT_BY_REVIEW) {
      renderGuitarsSortByReviewsDown(cloneGuitars);
    }

    if (sort.direction === DIRECTION_UP) {
      renderGuitarsSortByPriceUp(cloneGuitars);
    }
    if (sort.direction === DIRECTION_DOWN) {
      renderGuitarsSortByPriceDown(cloneGuitars);
    }

    return cloneGuitars;
  };

  // отрисовка основного массива

  const renderGuitars = () => {
    onFilters();
    onSortingGuitars();
    renderPageCount();

    cloneGuitars.slice(pagesVisites, pagesVisites + GUITARS_PER_PAGE)
      .map((item) => <CatalogItem key={item.articul}
        item={item}
        onModalActive={setModalActive}
      />);

    if (cloneGuitars.length === 0) {
      return (
        <p className="catalog__list-text">Нет товаров по указанным фильтрам</p>
      );

    } return (
      cloneGuitars.slice(pagesVisites, pagesVisites + GUITARS_PER_PAGE)
      .map((item) => <CatalogItem key={item.articul}
        item={item}
        onModalActive={setModalActive}
      />));
  };

  let guitarPage = renderGuitars();

  return (
    <>
      <section className="catalog">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__sort-panel sort-panel" >
          <SortPanel/>
        </div>
        <ul className="catalog__list">
          {guitarPage}
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

      <Modal
        modalActive={modalActive}
        onModalActive={setModalActive}
      >
        <AddContent
          onModalAddActive={setModalActive}
          successModal={successModal}
          onSuccessModal={setSuccessModal}

        />
      </Modal>
    </>
  );
}

export default Catalog;
