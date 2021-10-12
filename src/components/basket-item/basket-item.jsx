import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";

import {openModalRemove} from "../../store/modalSlise";
import {dataObject} from "../../store/objectSlise";

function BasketItem({...props}) {
  const {item} = props;

  const dispatch = useDispatch();

  const onClickRemoveModal = (evt) => {
    evt.preventDefault();
    dispatch(openModalRemove());
    dispatch(dataObject(item));
  };
  /*
  const onPrevButtonClick = () => {
    if (item.count === 1) {
      dispatch(openModalRemove());
    }

    return (item.count);
  };

  const onNextButtonClick = () => {
    let newCount = item.count + 1;

    item.count = newCount;

    // eslint-disable-next-line no-console
    console.log(item.count);
  };*/

  return (
    <>
      <li className="basket__item">
        <img className="basket__item-img" src={item.image} alt="фото товара"></img>
        <div className="basket__item-info">
          <h3 className="basket__item-title">{item.name}</h3>
          <p className="basket__item-article-number">Артикул: {item.article}</p>
          <p className="basket__item-guitar-type">{item.type}, {item.strings}струнная </p>
        </div>
        <p className="basket__item-guitar-price">{item.price} ₽</p>
        <div className="basket__item-btns">
          <button className="basket__item-btn basket__item-btn--prev" type="button" /* onClick={}*/></button>
          <p className="basket__item-count">{item.count}</p>
          <button className="basket__item-btn basket__item-btn--next" type="button" /* onClick={}*/></button>
        </div>
        <p className="basket__item-price-total">{item.totalPrice} ₽</p>
        <button className="basket__item-remove" type="button" aria-label="удалить товар" onClick={onClickRemoveModal}></button>
      </li>
    </>

  );
}

BasketItem.propTypes = {
  item: PropTypes.object,
};

export default BasketItem;
