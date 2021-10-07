import React from 'react';
import PropTypes from 'prop-types';


function BasketItem() {

  return (
    <>

      <li className="basket__item">
        <div className="basket__item-img"></div>
        <div className="basket__item-info">
          <h3 className="basket__item-title">ЭлектроГитара Честер bass</h3>
          <p className="basket__item-article-number">Артикул: SO757575</p>
          <p className="basket__item-guitar-type">Электрогитара, 6 струнная </p>
        </div>
        <p className="basket__item-guitar-price">17 500 ₽</p>
        <div className="basket__item-btns">
          <button className="basket__item-btn basket__item-btn--prev" type="button"></button>
          <p className="basket__item-count">1</p>
          <button className="basket__item-btn basket__item-btn--next" type="button"></button>
        </div>
        <p className="basket__item-price-total">17 500 ₽</p>
        <button className="basket__item-remove" type="button" aria-label="удалить товар"></button>
      </li>

      {/*
      <li className="basket__item">
        <h3 className="basket__title">{props.name}</h3>
        <p className="basket__article-number">Артикул: {props.article}</p>
        <p className="basket__guitar-type">{props.type}, {props.strings}</p>
        <p className="basket__guitar-price">{props.price}</p>
        <div className="basket__item-btns">
          <button className="basket__item-btns basket__item-btns--prev" type="button"></button>
          <p className="basket__item-count">1</p>
          <button className="basket__item-btns basket__item-btns--next" type="button"></button>
        </div>
        <p className="basket__item-price-total">17 500 ₽</p>
        <button className="basket__item-remove" type="button" data-key={props.article}>X</button>
      </li>

*/}
    </>

  );
}

BasketItem.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
  strings: PropTypes.string,
  reviews: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  article: PropTypes.string,
  onClickRemove: PropTypes.func
};

export default BasketItem;
