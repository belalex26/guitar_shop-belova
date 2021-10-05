import React from 'react';
import {useSelector /* , useDispatch*/} from 'react-redux';

import {selectGuitars} from '../../store/giutarsSlise';
import {selectBasket} from '../../store/basketSlise';

import Footer from '../footer/footer';
import Header from '../header/header';
import BasketItem from "../basket-item/basket-item";
// import {decrement} from '../../store/basketSlise';

function Basket() {

  const guitars = useSelector(selectGuitars);
  const basket = useSelector(selectBasket);
  // const dispatch = useDispatch();

  const goodsObj = guitars.reduce((accum, item) =>{
    accum[item[`article`]] = item;
    return accum;
  }, {});

  /*
  const onClickRemove = (evt) => {
    let target = evt.target;
    dispatch(decrement(target.getAttribute(`data-key`)));
    Object.keys(basket).filter((item) => goodsObj[item][`article`] !== item);
  };*/

  return (
    <>
      <Header />
      <main className="basket">
        <h1 className="basket__title">Корзина</h1>
        <ul className="basket__list">
          {Object.keys(basket).map((item) => <BasketItem key={goodsObj[item][`article`]}
            article = {goodsObj[item][`article`]}
            name = {goodsObj[item][`name`]}
            strings = {goodsObj[item][`strings`]}
            type = {goodsObj[item][`type`]}
            price = {goodsObj[item][`price`]}
            count = {basket[item]}
          />)}
        </ul>

        <p className="basket__promo-title">Промокод на скидку</p>
        <p className="basket__promo-text">Введите свой промокод, если он у вас есть.</p>
        <label className="basket__promo-label">
          <input className="basket__promo-input" type="text" placeholder="GITARAHIT" />
        </label>
        <button className="basket__promo-btn">Применить купон</button>
        <p className="basket__total-price">Всего: 47 000 ₽</p>
        <button className="basket__submit-btn">Оформить заказ</button>

      </main>
      <Footer />
    </>

  );
}

export default Basket;
