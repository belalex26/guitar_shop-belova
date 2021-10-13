/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {selectObject} from "../../store/objectSlise";
import {removeBasket} from "../../store/basketSlise";

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const RemoveModal = ({...props}) => {
  const {removeModal, onRemoveModal} = props;

  const dispatch = useDispatch();
  const objectGuitar = useSelector(selectObject);
  const baskets = useSelector((state) => state.basket.baskets);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    // eslint-disable-next-line react/prop-types
    if (removeModal) {
      body.style.overflow = `hidden`;
    }
    body.style.overflow = `auto`;
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      onRemoveModal(false);
      bodyScroll();
    }
  };

  const onModalCloseClick = () => {
    onRemoveModal(false);
    bodyScroll();
  };

  const onButtonRemoveClick = () => {
    onRemoveModal(false);
    removeItemBasket();
  };

  const removeItemBasket = (itemGuitar) => {
    const temp = [...baskets];
    temp.splice(itemGuitar, 1);
    dispatch(removeBasket(temp));
  };

  return (
    <div className={removeModal ? `remove-modal remove-modal--active` : `remove-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={removeModal ? `remove-modal__callback remove-modal__callback--active` : `remove-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <h2 className="visually-hidden">Подтверждение</h2>
        <p className="remove-modal__title">Удалить этот товар?</p>
        <div className="remove-modal__info">
          <img className="remove-modal__img" src={objectGuitar.image} alt="фото товара" />
          <div className="remove-modal__info-date">
            <p className="remove-modal__info-name">{objectGuitar.name}</p>
            <p className="remove-modal__info-article">Артикул: {objectGuitar.article}</p>
            <p className="remove-modal__info-type">{objectGuitar.type}, {objectGuitar.strings}</p>
            <p className="remove-modal__info-price">Цена: {objectGuitar.price} ₽</p>
          </div>
          <div className="remove-modal__control">
            <button className="remove-modal__btn remove-modal__btn--remove" type="button" onClick={onButtonRemoveClick}>Удалить товар</button>
            <button className="remove-modal__btn remove-modal__btn--close" type="button" onClick={onModalCloseClick}>Продолжить покупки</button>
          </div>
        </div>
        <button className="remove-modal__close" aria-label="закрыть" onClick={onModalCloseClick}></button>
      </section>
    </div>
  );

};


export default RemoveModal;
