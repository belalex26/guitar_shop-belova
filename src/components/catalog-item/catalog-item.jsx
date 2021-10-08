import React from 'react';
import PropTypes from 'prop-types';
import Rating from "../rating/rating";


function CatalogItem({...props}) {

  return (
    <>
      <li className="catalog__item">
        <div className="catalog__item-img">
          <img className="catalog__item-img-img" src={props.image} alt="фото товара" />
        </div>
        <div className="catalog__item-rate">
          <Rating />
          <p className="catalog__item-rate-text">{props.reviews}</p>
        </div>
        <div className="catalog__item-info">
          <p className="catalog__item-title">{props.name}</p>
          <p className="catalog__item-price">{props.price} ₽</p>
        </div>
        <div className="catalog__item-btns">
          <button className="catalog__item-btn-more" type="button">Подробнее</button>
          <button className="catalog__item-btn-buy" data-key={props.article} type="button" >Купить</button>
        </div>
      </li>
    </>
  );
}

CatalogItem.propTypes = {
  image: PropTypes.string,
  reviews: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  article: PropTypes.string,
};

export default CatalogItem;
