/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {openModal, closeModal} from "../../store/modalSlise";
import {selectModal} from '../../store/modalSlise';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const RemoveModal = () => {
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
    <div className={modalActive ? `remove-modal remove-modal--active` : `remove-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={openModal ? `remove-modal__callback remove-modal__callback--active` : `remove-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <h2 className="visually-hidden">Подтверждение</h2>
        <p className="remove-modal__title">Удалить этот товар?</p>
        <div className="remove-modal__info">
          <div className="remove-modal__img">фото товара</div>
          <div className="remove-modal__info-date">
            <p className="remove-modal__info-name">Гитара Честер bass</p>
            <p className="remove-modal__info-article">Артикул: SO757575</p>
            <p className="remove-modal__info-type">Электрогитара, 6 струнная</p>
            <p className="remove-modal__info-price">Цена: 17 500 ₽</p>
          </div>
          <div className="remove-modal__control">
            <button className="remove-modal__btn remove-modal__btn--remove" type="button">Удалить товар</button>
            <button className="remove-modal__btn remove-modal__btn--close" type="button">Продолжить покупки</button>
          </div>
        </div>
        <button className="remove-modal__close" aria-label="закрыть"></button>
      </section>
    </div>
  );

};


export default RemoveModal;
