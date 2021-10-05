import React from 'react';
import PropTypes from 'prop-types';


function BasketItem({...props}) {

  return (
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
