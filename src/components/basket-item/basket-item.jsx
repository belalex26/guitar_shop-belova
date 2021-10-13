import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";

import {updateBasket} from "../../store/basketSlise";
import {dataObject} from "../../store/objectSlise";

function BasketItem({...props}) {
  const {item, onRemoveModal} = props;
  const dispatch = useDispatch();

  let [countItem, setCountItem] = useState(1);
  let [totalPrice, setTotalPrice] = useState(0);

  let totalPriceItem = item.price * countItem;
  let tempTotal = {};

  useEffect(() => {
    setTotalPrice(totalPriceItem);
  }, [totalPriceItem]);

  useEffect(() => {
    dispatch(updateBasket(tempTotal));

  }, [totalPrice, countItem]);

  const onClickRemoveModal = (evt) => {
    evt.preventDefault();
    onRemoveModal(true);
    dispatch(dataObject(item));
  };

  const onPrevButtonClick = () => {
    let newCount = countItem - 1;
    setCountItem(newCount);

    if (countItem === 1) {
      setCountItem(1);
      onRemoveModal(true);
    }
  };

  const onNextButtonClick = () => {
    let newCount = countItem + 1;
    setCountItem(newCount);
  };

  tempTotal = {...item,
    count: countItem,
    totalPrice
  };

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
          <button className="basket__item-btn basket__item-btn--prev" type="button" onClick={onPrevButtonClick}></button>
          <p className="basket__item-count">{countItem}</p>
          <button className="basket__item-btn basket__item-btn--next" type="button" onClick={onNextButtonClick}></button>
        </div>
        <p className="basket__item-price-total">{totalPriceItem} ₽</p>
        <button className="basket__item-remove" type="button" aria-label="удалить товар" onClick={onClickRemoveModal}></button>
      </li>
    </>

  );
}

BasketItem.propTypes = {
  item: PropTypes.object,
  onRemoveModal: PropTypes.func,
};

export default BasketItem;
