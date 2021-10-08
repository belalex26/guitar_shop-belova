/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {openModal, closeModal} from "../../store/modalSlise";
import {openModalSuccess} from "../../store/modalSlise";
import {selectModalAdd} from '../../store/modalSlise';
import {selectObject} from "../../store/objectSlise";
import {selectGuitars} from "../../store/giutarsSlise";

import SuccessModal from "../success-modal/success-modal";

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const AddModal = () => {
  const dispatch = useDispatch();
  const modalActiveAdd = useSelector(selectModalAdd);
  const guitars = useSelector(selectGuitars);
  const objectGuitar = useSelector(selectObject);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    // eslint-disable-next-line react/prop-types
    if (modalActiveAdd === true) {
      body.style.overflow = `hidden`;
      // eslint-disable-next-line no-console
      console.log(`блок`);
    }
    body.style.overflow = `auto`;
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
    // eslint-disable-next-line no-console
    console.log(itemGuitarObj);
    dispatch(closeModal());
    dispatch(openModalSuccess());
  };

  const guitarObj = guitars.reduce((accum, item) => {
    accum[item[`article`]] = item;
    return accum;
  }, {});

  const itemGuitarObj = Object.keys(objectGuitar).map((item) =>
    <div className="add-modal__info" key={item + guitarObj[item][`name`]}>

      <img className="add-modal__img" src={guitarObj[item][`image`]} alt="фото товара" />

      <div className="add-modal__info-date">
        <p className="add-modal__info-name">{guitarObj[item][`name`]}</p>
        <p className="add-modal__info-article">Артикул: {guitarObj[item][`article`]}</p>
        <p className="add-modal__info-type">{guitarObj[item][`type`]}, {guitarObj[item][`strings`]} струнная</p>
        <p className="add-modal__info-price">Цена: {guitarObj[item][`price`]}</p>
      </div>
      <button className="add-modal__btn" type="button" onClick={onButtonBuyClick}>Добавить в корзину</button>
    </div>
  );

  return (
    <>
      <div className={modalActiveAdd ? `add-modal add-modal--active` : `add-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
        <section className={openModal ? `add-modal__callback add-modal__callback--active` : `add-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
          <h2 className="visually-hidden">Подтверждение</h2>
          <p className="add-modal__title">Добавить товар в корзину</p>
          {itemGuitarObj}
          <button className="add-modal__close" onClick={onModalCloseClick} aria-label="закрыть"></button>
        </section>
      </div>
      <SuccessModal />

    </>
  );

};


export default AddModal;
