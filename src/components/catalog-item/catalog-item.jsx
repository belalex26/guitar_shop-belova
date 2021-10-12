import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";

import Rating from "../rating/rating";
import {openModal} from '../../store/modalSlise';
import {dataObject} from "../../store/objectSlise";


function CatalogItem({...props}) {
  const {item} = props;
  const dispatch = useDispatch();

  const onClickOpenModal = (evt) => {
    evt.preventDefault();
    dispatch(openModal());
    dispatch(dataObject(item));
  };

  return (
    <>
      <li className="catalog__item">
        <div className="catalog__item-img">
          <img className="catalog__item-img-img" src={item.image} alt="фото товара" />
        </div>
        <div className="catalog__item-rate">
          <Rating rating={item.rating}/>
          <p className="catalog__item-rate-text">{item.reviews}</p>
        </div>
        <div className="catalog__item-info">
          <p className="catalog__item-title">{item.name}</p>
          <p className="catalog__item-price">{item.price} ₽</p>
        </div>
        <div className="catalog__item-btns">
          <button className="catalog__item-btn-more" type="button">Подробнее</button>
          <button className="catalog__item-btn-buy" onClick={onClickOpenModal} type="button">Купить</button>
        </div>
      </li>
    </>
  );
}

CatalogItem.propTypes = {
  item: PropTypes.object,
};

export default CatalogItem;
