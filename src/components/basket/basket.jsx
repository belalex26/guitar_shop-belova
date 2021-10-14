import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {addTotalCount} from "../../store/basketSlise";

import {GITARAHIT_SALE, SUPERGITARA_SALE, GITARA2020_SALE, GITARA2020_SALE_MAX, MAX_SALE, renderPrice} from "../../utils";
import Footer from "../footer/footer";
import Header from "../header/header";
import BasketItem from "../basket-item/basket-item";
import RemoveModal from "../remove-modal/remove-modal";

function Basket() {

  const NOT_SALE = 0;
  const dispatch = useDispatch();
  const baskets = useSelector((state) => state.basket.baskets);
  const [promoCode, setPromoCode] = useState(`GITARAHIT`);
  const [sale, setSale] = useState(0);
  const [saleCheck, setSaleCheck] = useState(false);
  const [errorPromoCode, setErrorPromoCode] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  let initialTotalPrice = 0;
  let saleCount = 0;

  let totalPrice = baskets.reduce((acc, totalSumm) => acc + totalSumm.totalPrice, initialTotalPrice);
  let totalCount = baskets.reduce((acc, totalCouunt) => acc + totalCouunt.count, saleCount);


  // eslint-disable-next-line consistent-return
  const countsSale = () => {

    if (promoCode === `GITARAHIT`) {
      saleCount = totalPrice * GITARAHIT_SALE;
      setSale(saleCount);
    }

    if (promoCode === `SUPERGITARA`) {
      saleCount = SUPERGITARA_SALE;
      setSale(saleCount);
    }

    if (promoCode === `GITARA2020`) {
      if (totalPrice < MAX_SALE) {
        saleCount = totalPrice * GITARA2020_SALE;
      } else {
        saleCount = GITARA2020_SALE_MAX;
      }
      setSale(saleCount);
    }

    if (sale !== NOT_SALE && saleCheck) {
      setSale(sale);
    }
  };

  const renderBasketItem = () => {
    if (baskets.length === 0) {
      return (
        <p className="basket__list-text">
          Пока пусто
        </p>
      );
    }
    return (baskets.map((item) => <BasketItem key={item.article}
      item={item}
      onRemoveModal={setRemoveModal}
    />));
  };

  dispatch(addTotalCount(totalCount));

  const onButtonPromoClick = () => {
    onValidCode();
    countsSale();
  };

  const onValidCode = () => {

    if (promoCode === `GITARAHIT` || promoCode === `SUPERGITARA` || promoCode === `GITARA2020`) {
      setErrorPromoCode(false);
      setSaleCheck(true);
    } else {
      setErrorPromoCode(true);
    }
  };

  const onChangePromoCode = (evt) => {
    setSaleCheck(false);
    setPromoCode(evt.target.value);
  };

  const renderTotalPrice = () => {
    totalPrice = Number(totalPrice - sale);
    return totalPrice;
  };

  const formatPrice = () => {
    renderTotalPrice();
    let formatPriceTotal = renderPrice(totalPrice);
    return formatPriceTotal;
  };

  return (
    <>
      <Header />
      <main className="basket">
        <div className="basket__container">
          <h1 className="basket__title">Корзина</h1>
          <ul className="basket__breadcrumps">
            <li className="basket__breadcrumps-item">
              <Link className="basket__breadcrumps-link" to="/main">Главная</Link>
            </li>
            <li className="basket__breadcrumps-item">
              <Link className="basket__breadcrumps-link" to="/">Каталог</Link>
            </li>
            <li className="basket__breadcrumps-item basket__breadcrumps-item--last">
              <p className="basket__breadcrumps-text">Оформляем</p>
            </li>
          </ul>

          <ul className="basket__list">
            {renderBasketItem()}
          </ul>

          <div className="basket__promo">
            <p className="basket__promo-title">Промокод на скидку</p>
            <p className="basket__promo-text">Введите свой промокод, если он у вас есть.</p>
            <label className="basket__promo-label">
              <span className={errorPromoCode ? `basket__promo-error basket__promo-error--active` : `basket__promo-error`}>код не действителен</span>
              <input className="basket__promo-input" type="text" value={promoCode} onChange={onChangePromoCode} />
            </label>
            <button className="basket__promo-btn" onClick={onButtonPromoClick}>Применить купон</button>
          </div>
          <div className="basket__control">
            <p className="basket__control-total">Всего: {formatPrice()} ₽</p>
            <a className="basket__control-submit" href="/success">Оформить заказ</a>
          </div>
        </div>
      </main>
      <Footer />
      <RemoveModal removeModal={removeModal} onRemoveModal={setRemoveModal}/>
    </>

  );
}

export default Basket;
