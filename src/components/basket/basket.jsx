import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

// import {discont} from "../../store/basketSlise";

import Footer from '../footer/footer';
import Header from '../header/header';
import BasketItem from "../basket-item/basket-item";
import RemoveModal from "../remove-modal/remove-modal";

function Basket() {

  // const dispatch = useDispatch();
  const baskets = useSelector((state) => state.basket.baskets);
  const [promoCode, setPromoCode] = useState(`GITARAHIT`);
  const [errorPromoCode, setErrorPromoCode] = useState(false);


  function totalBasketsPrice() {
    let totalPrice = 0;
    const summ = baskets.reduce(function (accumulator, item) {
      return accumulator + item.totalPrice;
    }, totalPrice);
    return summ;
  }

  let totalPriceBasket = totalBasketsPrice();

  const renderBasketItem = () => {
    if (baskets.length === 0) {
      return (`Пока пусто`);
    }
    return (baskets.map((item) => <BasketItem key={item.article}
      item={item}
    />));
  };

  const onButtonPromoClick = () => {
    onValidCode();
    // eslint-disable-next-line no-console
    console.log(errorPromoCode);
  };

  const onValidCode = () => {
    if (promoCode === `GITARAHIT` || promoCode === `SUPERGITARA` || promoCode === `GITARA2020 `) {
      setErrorPromoCode(false);
    } setErrorPromoCode(true);
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
              <input className="basket__promo-input" type="text" value={promoCode} onChange={(evt) => setPromoCode(evt.target.value)}/>
            </label>
            <button className="basket__promo-btn" onClick={onButtonPromoClick}>Применить купон</button>
          </div>
          <div className="basket__control">
            <p className="basket__control-total">Всего: {totalPriceBasket} ₽</p>
            <button className="basket__control-submit">Оформить заказ</button>

          </div>
        </div>

      </main>
      <Footer />
      <RemoveModal />
    </>

  );
}

export default Basket;
