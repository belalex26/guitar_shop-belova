/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const body = document.querySelector(`.body`);
const ESC_PRESS = 27;

const SuccessModalInBasket = ({...props}) => {
  const {successModalInBasket, onSuccessModalInBasket} = props;

  console.log(props);

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    // eslint-disable-next-line react/prop-types
    if (successModalInBasket) {
      body.style.overflow = `hidden`;
    }
    body.style.overflow = `auto`;
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      onSuccessModalInBasket(false);
      bodyScroll();
    }
  };

  const onModalCloseClick = () => {
    onSuccessModalInBasket(false);
    bodyScroll();
  };

  return (
    <div className={successModalInBasket ? `success-modal success-modal--active` : `success-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={successModalInBasket ? `success-modal__callback success-modal__callback--active` : `success-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <p className="success-modal__title">Товар уже в корзине</p>
        <div className="success-modal__content">
          <Link className="success-modal__btn success-modal__btn--basket" to="/basket" onClick={onModalCloseClick}>Перейти в корзину</Link>
          <button className="success-modal__btn success-modal__btn--main" type="button" onClick={onModalCloseClick}>Продолжить покупки</button>
        </div>
        <button className="success-modal__close" aria-label="закрыть" onClick={onModalCloseClick}></button>
      </section>
    </div>
  );

};

SuccessModalInBasket.propTypes = {
  successModalInBasket: PropTypes.bool,
  onSuccessModalInBasket: PropTypes.func,
};

export default SuccessModalInBasket;
