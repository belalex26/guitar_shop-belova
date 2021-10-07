/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {openModal, closeModal} from "../../store/modalSlise";
import {selectModal} from '../../store/modalSlise';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const AddModal = () => {
  const dispatch = useDispatch();
  const modalActive = useSelector(selectModal);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    // eslint-disable-next-line react/prop-types
    if (modalActive) {
      body.style.overflow = `hidden`;
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

  return (
    <div className={modalActive ? `add-modal add-modal--active` : `add-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={openModal ? `add-modal__callback add-modal__callback--active` : `add-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <h2 className="visually-hidden">Подтверждение</h2>
        <p className="add-modal__title">Добавить товар в корзину</p>
        <div className="add-modal__info">
          <div className="add-modal__img">фото товара</div>
          <div className="add-modal__info-date">
            <p className="add-modal__info-name">Гитара Честер bass</p>
            <p className="add-modal__info-article">Артикул: SO757575</p>
            <p className="add-modal__info-type">Электрогитара, 6 струнная</p>
            <p className="add-modal__info-price">Цена: 17 500 ₽</p>
          </div>
          <button className="add-modal__btn" type="button">Добавить в корзину</button>
        </div>
        <button className="add-modal__close" aria-label="закрыть"></button>
      </section>
    </div>
  );

};


export default AddModal;
