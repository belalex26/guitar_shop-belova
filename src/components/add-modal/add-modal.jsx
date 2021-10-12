/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {openModal, closeModal} from "../../store/modalSlise";
import {openModalSuccess} from "../../store/modalSlise";
import {selectModalAdd} from '../../store/modalSlise';
import {selectObject /* , selectCount*/} from "../../store/objectSlise";
// import {countObject} from "../../store/objectSlise";
import {addBasket /* , removeBasket*/} from "../../store/basketSlise";

import SuccessModal from "../success-modal/success-modal";

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const AddModal = () => {
  const dispatch = useDispatch();
  const modalActiveAdd = useSelector(selectModalAdd);
  const objectGuitar = useSelector(selectObject);
  // const baskets = useSelector((state) => state.basket.baskets);
  // let count = useSelector(selectCount);

  let itemBasket = {...objectGuitar,
    totalPrice: objectGuitar.price
  };

  // const itemInBasket = baskets.some((item) => item.article === itemBasket.article);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    if (modalActiveAdd === true) {
      return (body.style.overflow = `hidden`);
    }
    return (body.style.overflow = `auto`);
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      dispatch(closeModal());
      bodyScroll();
    }
  };

  const onModalCloseClick = () => {
    dispatch(closeModal());
    bodyScroll();
  };

  const onButtonBuyClick = () => {
    dispatch(closeModal());
    dispatch(openModalSuccess());
    /*
    let itemInBasket = baskets.some((item) => item.article === itemBasket.article);
    // eslint-disable-next-line no-console
    console.log(itemInBasket);

    if (itemInBasket) {
      dispatch(addBasket(itemBasket));
    } baskets[index].count++;

    /*
    if (itemInBasket) {
      removeItemBasket();
    } else {
      dispatch(addBasket(itemBasket));
    }*/
    dispatch(addBasket(itemBasket));
  };
  /*
  const removeItemBasket = (itemGuitar) => {
    const tempItem = {...itemBasket};
    tempItem.count = itemBasket.count + itemBasket.count;


    const temp = [...baskets];
    temp.splice(itemGuitar, 1);
    dispatch(removeBasket(temp));

    dispatch(addBasket(tempItem));
  };*/

  return (
    <>
      <div className={modalActiveAdd ? `add-modal add-modal--active` : `add-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
        <section className={openModal ? `add-modal__callback add-modal__callback--active` : `add-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
          <h2 className="visually-hidden">Подтверждение</h2>
          <p className="add-modal__title">Добавить товар в корзину</p>
          <div className="add-modal__info">

            <img className="add-modal__img" src={itemBasket.image} alt="фото товара" />

            <div className="add-modal__info-date">
              <p className="add-modal__info-name">{itemBasket.name}</p>
              <p className="add-modal__info-article">Артикул: {itemBasket.article}</p>
              <p className="add-modal__info-type">{itemBasket.type}, {itemBasket.strings} струнная</p>
              <p className="add-modal__info-price">Цена: {itemBasket.price}</p>
            </div>
            <button className="add-modal__btn" type="button" onClick={onButtonBuyClick()}>Добавить в корзину</button>
          </div>
          <button className="add-modal__close" onClick={onModalCloseClick} aria-label="закрыть"></button>
        </section>
      </div>
      <SuccessModal />

    </>
  );

};


export default AddModal;
