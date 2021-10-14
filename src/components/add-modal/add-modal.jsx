import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";

import {selectObject} from "../../store/objectSlise";
import {addBasket} from "../../store/basketSlise";

import {renderPrice, body, ESC_PRESS} from "../../utils";
import SuccessModal from "../success-modal/success-modal";
import SuccessModalInBasket from "../success-modal/success-modal-in-basket";

const AddModal = ({...props}) => {
  const {addModal, onAddModal, successModal, onOpenSuccessModal, successModalInBasket, onSuccessModalInBasket} = props;

  const dispatch = useDispatch();
  const itemBasket = useSelector(selectObject);
  const baskets = useSelector((state) => state.basket.baskets);
  let itemInBasket = false;

  useEffect(() => {
    bodyScroll();
  });

  useEffect(() => {
    document.addEventListener(`keydown`, onClose, {passive: true});
    return () => document.removeEventListener(`keydown`, onClose);
  });

  useEffect(() => {
    clearTimeout();
  }, [addModal]);

  const bodyScroll = () => {
    if (addModal) {
      return (body.style.overflow = `hidden`);
    }
    return (body.style.overflow = `auto`);
  };

  const onClose = (evt) => {
    if (evt.keyCode === ESC_PRESS) {
      onModalCloseClick();
    }
  };

  const onModalCloseClick = () => {
    onAddModal(false);
    bodyScroll();
  };

  const onButtonBuyClick = () => {
    itemInBasket = baskets.some((item) => item.article === itemBasket.article);
    onModalCloseClick();

    if (!itemInBasket) {
      dispatch(addBasket(itemBasket));
      onOpenSuccessModal(true);
    } else {
      onSuccessModalInBasket(true);
    }
  };

  return (
    <>
      <div className={addModal ? `add-modal add-modal--active` : `add-modal`} onClick={onModalCloseClick} role="dialog" tabIndex="-1" >
        <section className={addModal ? `add-modal__callback add-modal__callback--active` : `add-modal__callback`} onClick={(evt) => evt.stopPropagation()}>
          <h2 className="visually-hidden">Подтверждение</h2>
          <p className="add-modal__title">Добавить товар в корзину</p>
          <div className="add-modal__info">

            <img className="add-modal__img" src={itemBasket.image} alt="фото товара" />

            <div className="add-modal__info-date">
              <p className="add-modal__info-name">{itemBasket.name}</p>
              <p className="add-modal__info-article">Артикул: {itemBasket.article}</p>
              <p className="add-modal__info-type">{itemBasket.type}, {itemBasket.strings} струнная</p>
              <p className="add-modal__info-price">Цена: {renderPrice(itemBasket.price)} ₽</p>
            </div>
            <button className="add-modal__btn" type="button" onClick={onButtonBuyClick}>Добавить в корзину</button>
          </div>
          <button className="add-modal__close" onClick={onModalCloseClick} aria-label="закрыть"></button>
        </section>
      </div>
      <SuccessModal
        successModal={successModal}
        onOpenSuccessModal={onOpenSuccessModal}
      />

      <SuccessModalInBasket
        successModalInBasket={successModalInBasket}
        onSuccessModalInBasket={onSuccessModalInBasket}
      />
    </>
  );
};

AddModal.propTypes = {
  addModal: PropTypes.bool,
  successModal: PropTypes.bool,
  onAddModal: PropTypes.func,
  onOpenSuccessModal: PropTypes.func,
  successModalInBasket: PropTypes.bool,
  onSuccessModalInBasket: PropTypes.func,
};

export default AddModal;
