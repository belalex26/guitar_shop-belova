import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {selectSortDirection, selectSortType, changeSortType, changeSortDirection} from "../../store/filterSlise";
import {selectFilter, changeFilter} from "../../store/filterSlise";

function SortPanel() {
  const dispatch = useDispatch();

  const SORT_BY_PRICE = `price`;
  const SORT_BY_REVIEW = `reviews`;
  const DIRECTION_UP = `up`;
  const DIRECTION_DOWN = `down`;

  const typeSort = useSelector(selectSortType);
  const direction = useSelector(selectSortDirection);

  let guitarsCopyFilter = Array.from(useSelector(selectFilter));

  useEffect(() => {
  }, [guitarsCopyFilter]);

  useEffect(() => {
    renderData();
  }, [typeSort]);

  useEffect(() => {
    renderData();
  }, [direction]);

  const renderGuitarsSortByPriceUp = (arr) => {
    arr.sort((a, b) => a.price > b.price ? 1 : -1);
    return (arr);
  };
  // по убыванию
  const renderGuitarsSortByPriceDown = (arr) => {
    arr.sort((a, b) => a.price <= b.price ? 1 : -1);
    return (arr);
  };

  // рейтинг
  // по возрастанию

  const renderGuitarsSortByReviewsUp = (arr) => {
    arr.sort((a, b) => a.reviews > b.reviews ? 1 : -1);
    return (arr);
  };

  // по убыванию

  const renderGuitarsSortByReviewsDown = (arr) => {
    arr.sort((a, b) => a.reviews < b.reviews ? 1 : -1);
    return (arr);
  };

  const renderData = () => {
    dispatch(changeFilter(guitarsCopyFilter));
  };

  const onFilterByPriceClick = () => {
    dispatch(changeSortType(SORT_BY_PRICE));
    renderGuitarsSortByPriceUp(guitarsCopyFilter);
    renderData();
  };

  const onFilterByReviewsClick = () => {
    dispatch(changeSortType(SORT_BY_REVIEW));
    renderGuitarsSortByReviewsDown(guitarsCopyFilter);
    renderData();
  };

  const onDirectUpClick = () => {
    dispatch(changeSortDirection(DIRECTION_UP));
    renderGuitarsSortByPriceUp(guitarsCopyFilter);
    renderData();
  };

  const onDirectDownClick = () => {
    dispatch(changeSortDirection(DIRECTION_DOWN));
    renderGuitarsSortByPriceDown(guitarsCopyFilter);
    renderData();
  };

  // комбинации

  // цена по возрастанию

  if (typeSort === SORT_BY_PRICE && direction === DIRECTION_UP) {
    renderGuitarsSortByPriceUp(guitarsCopyFilter);
  }

  // цена по убыванию

  if (typeSort === SORT_BY_PRICE && direction === DIRECTION_DOWN) {
    renderGuitarsSortByReviewsDown(guitarsCopyFilter);
  }

  // рейтинг по возрастанию

  if (typeSort === SORT_BY_REVIEW && direction === DIRECTION_UP) {
    renderGuitarsSortByReviewsUp(guitarsCopyFilter);
  }
  // рейтинг по убыванию

  if (typeSort === SORT_BY_REVIEW && direction === DIRECTION_DOWN) {
    renderGuitarsSortByReviewsDown(guitarsCopyFilter);
  }

  return (
    <>
      <p className="sort-panel__title">Сортировать:</p>
      <div className="sort-panel__content">

        <div className="sort-panel__type">
          <label className="sort-panel__type--price" onClick={onFilterByPriceClick}>
            <input className="sort-panel__type-radio" type="radio" name="sortType" readOnly value="price"/>
            <span className="sort-panel__type-text">по цене</span>
          </label>

          <label className="sort-panel__type--reviews"onClick={onFilterByReviewsClick}>
            <input className="sort-panel__type-radio" type="radio" name="sortType" readOnly value="review"/>
            <span className="sort-panel__type-text">по популярности</span>
          </label>
        </div>

        <div className="sort-panel__direction">

          <label className="sort-panel__direction" onClick={onDirectUpClick}>
            <input className="sort-panel__direction-radio" type="radio" name="direction" readOnly value="up"/>
            <span className="sort-panel__direction-icon" aria-label="по возрастанию"></span>
          </label>

          <label className="sort-panel__direction--reviews"onClick={onDirectDownClick}>
            <input className="sort-panel__direction-radio" type="radio" name="direction" readOnly value="down"/>
            <span className="sort-panel__direction-icon sort-panel__direction-icon--down" aria-label="по убыванию"></span>
          </label>

        </div>
      </div>
    </>
  );
}

export default SortPanel;
