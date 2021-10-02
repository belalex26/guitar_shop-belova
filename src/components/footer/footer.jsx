import React from 'react';
import Logo from '../logo/logo';
import SocialBar from '../social-bar/social-bar';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__social-bar">
          <Logo />
          <SocialBar />
        </div>

        <div className="footer__about">
          <p className="footer__title">О нас</p>
          <p className="footer__about-text">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
          <p className="footer__about-text">Все инструменты проверены, отстроены и доведены до идеала! </p>
        </div>

        <div className="footer__catalog">
          <p className="footer__title">Каталог</p>
          <ul className="footer__catalog-list">
            <li className="footer__catalog-item">
              <a href="">Акустические гитары</a>
            </li>
            <li className="footer__catalog-item">
              <a href="">Классические гитары</a>
            </li>
            <li className="footer__catalog-item">
              <a href="">Электрогитары</a>
            </li>
            <li className="footer__catalog-item">
              <a href="">Бас-гитары</a>
            </li>
            <li className="footer__catalog-item">
              <a href="">Укулеле</a>
            </li>
          </ul>
        </div>

        <div className="footer__support">
          <p className="footer__title">Информация</p>
          <ul className="footer__support-list">
            <li className="footer__support-item">
              <a href="">Где купить?</a>
            </li>
            <li className="footer__support-item">
              <a href="">Блог</a>
            </li>
            <li className="footer__support-item">
              <a href="">Вопрос - ответ</a>
            </li>
            <li className="footer__support-item">
              <a href="">Возврат</a>
            </li>
            <li className="footer__support-item">
              <a href="">Сервис-центры</a>
            </li>
          </ul>
        </div>

        <div className="footer__contacts">
          <p className="footer__title">Контакты</p>
          <p className="footer__about-text">г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</p>
          <a href="tel:+78125005050">8-812-500-50-50</a>
          <p className="footer__about-text">Режим работы: <span>с 11:00 до 20:00,</span>без выходных. </p>
        </div>
      </div>

    </footer>


  );
}

export default Footer;
