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
    <div className={modalActive ? `remove-modal remove-modal--active` : `remove-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={openModal ? `remove-modal__callback remove-modal__callback--active` : `remove-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <h2 className="">Подтверждение</h2>
        <p className="add-modal__title">Удалить этот товар?</p>
        <div className="">
          <button className="" type="button">Удалить товар</button>
        </div>

        <button className="success-modal__close">X</button>
      </section>
    </div>
  );

};


export default AddModal;
