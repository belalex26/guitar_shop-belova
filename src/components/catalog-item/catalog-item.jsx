import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {openModal} from "../../store/modalSlise";
import Rating from "../rating/rating";
// import AddModal from "../add-modal/add-modal";


function CatalogItem({...props}) {

  const dispatch = useDispatch();

  const onClickOpenModal = () => {
    dispatch(openModal());
    // eslint-disable-next-line no-console
    console.log(`open`);
  };

  return (
    <>
      <li className="catalog__item">
        {/* <img className="catalog__item-img" src={props.image} alt="фото товара" />*/}
        <div className="catalog__item-img">фото товара</div>
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
          <button className="catalog__item-btn-buy" type="button" onClick={onClickOpenModal} >Купить</button>
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
