/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

import {openModal, closeModal} from "../../store/modalSlise";
import {selectModal} from '../../store/modalSlise';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const SuccessModal = () => {
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
    <div className={modalActive ? `success-modal success-modal--active` : `success-modal-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={openModal ? `success-modal__callback success-modal__callback--active` : `success-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <p className="success-modal__title">Товар успешно добавлен в корзину</p>
        <div className="success-modal__content">
          <Link className="success-modal__btn success-modal__btn--basket" to="/basket">Перейти в корзину</Link>
          <Link className="success-modal__btn success-modal__btn--main" to="/">Продолжить покупки</Link>
        </div>
        <button className="success-modal__close" aria-label="закрыть">X</button>
      </section>
    </div>
  );

};

export default SuccessModal;

