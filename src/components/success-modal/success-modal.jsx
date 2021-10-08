/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

import {openModalSuccess, closeModalSuccess} from "../../store/modalSlise";
import {selectModalSuccess} from '../../store/modalSlise';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const SuccessModal = () => {
  const dispatch = useDispatch();
  const modalActiveSuccess = useSelector(selectModalSuccess);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    // eslint-disable-next-line react/prop-types
    if (modalActiveSuccess) {
      body.style.overflow = `hidden`;
    }
    body.style.overflow = `auto`;
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      dispatch(closeModalSuccess());
      bodyScroll();
    }
  };

  const onModalCloseClick = () => {
    dispatch(closeModalSuccess());
    bodyScroll();
  };

  return (
    <div className={modalActiveSuccess ? `success-modal success-modal--active` : `success-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={openModalSuccess ? `success-modal__callback success-modal__callback--active` : `success-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <p className="success-modal__title">Товар успешно добавлен в корзину</p>
        <div className="success-modal__content">
          <Link className="success-modal__btn success-modal__btn--basket" to="/basket">Перейти в корзину</Link>
          <button className="success-modal__btn success-modal__btn--main" type="button" onClick={onModalCloseClick}>Продолжить покупки</button>
        </div>
        <button className="success-modal__close" aria-label="закрыть">X</button>
      </section>
    </div>
  );

};

export default SuccessModal;

