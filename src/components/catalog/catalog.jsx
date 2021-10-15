import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";

import {selectGuitars} from "../../store/giutarsSlise";
import {selectPagination} from "../../store/paginationSlise";
import {selectPage} from "../../store/paginationSlise";
// import {selectFilter} from "../../store/filterSlise";

import CatalogItem from "../catalog-item/catalog-item";
import Modal from "../modal/modal";
import AddContent from "../add-content/add-content";
// import SortPanel from "../sort-panel/sort-panel";

function Catalog() {
  const [modalActive, setModalActive] = useState(false);
  // const [successModal, setSuccessModal] = useState(false);
  // const [successModalInBasket, setSuccessModalInBasket] = useState(false);

  const GUITARS_PER_PAGE = 9;

  const guitars = useSelector(selectGuitars);
  const pageNumber = useSelector(selectPagination);
  const dispatch = useDispatch();

  let pageCount = 1;

  const renderPageCount = () => {
    pageCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);
    return pageCount;
  };

  const pagesVisites = pageNumber * GUITARS_PER_PAGE;

  const onPageChangeClick = ({selected}) => {
    dispatch(selectPage(selected));
  };

  // eslint-disable-next-line consistent-return
  // отрисовка основного массива

  const renderGuitars = () => {
    renderPageCount();
    return (
      guitars.slice(pagesVisites, pagesVisites + GUITARS_PER_PAGE)
    .map((item) => <CatalogItem key={item.articul}
      item={item}
      onModalActive={setModalActive}
    />));
  };

  let guitarPage = renderGuitars();

  return (
    <>
      <section className="catalog">
        <div className="catalog__sort-panel sort-panel" >
          {/*
          <SortPanel
            renderGuitars={renderGuitars}
          />
          */}
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
        <AddContent onModalAddActive={setModalActive}/>
      </Modal>
    </>


  );
}

export default Catalog;
