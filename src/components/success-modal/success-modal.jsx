import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {body, ESC_PRESS} from "../../utils";

const SuccessModal = ({...props}) => {
  const {successModal, onOpenSuccessModal} = props;

  useEffect(() => {
    bodyScroll();
  });

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  const bodyScroll = () => {
    if (successModal) {
      return (body.style.overflow = `hidden`);
    }
    return (body.style.overflow = `auto`);
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      onOpenSuccessModal(false);
      bodyScroll();
    }
  };

  const onModalCloseClick = () => {
    onOpenSuccessModal(false);
    bodyScroll();
  };

  return (
    <div className={successModal ? `success-modal success-modal--active` : `success-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
      <section className={successModal ? `success-modal__callback success-modal__callback--active` : `success-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
        <p className="success-modal__title">Товар успешно добавлен в корзину</p>
        <div className="success-modal__content">
          <Link className="success-modal__btn success-modal__btn--basket" to="/basket" onClick={onModalCloseClick}>Перейти в корзину</Link>
          <button className="success-modal__btn success-modal__btn--main" type="button" onClick={onModalCloseClick}>Продолжить покупки</button>
        </div>
        <button className="success-modal__close" aria-label="закрыть" onClick={onModalCloseClick}></button>
      </section>
    </div>
  );

};

SuccessModal.propTypes = {
  successModal: PropTypes.bool,
  onOpenSuccessModal: PropTypes.func,
};

export default SuccessModal;
