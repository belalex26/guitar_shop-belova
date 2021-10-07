import React from 'react';
import Logo from '../logo/logo';
import NavigationBar from '../navigation-bar/navigation-bar';

function Menu() {
  return (
    <nav className="menu">
      <div className="menu__container">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="/">
              Каталог
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/custom-map">
              Где купить?
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/about">
              О компании
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/services">
              Сервис-центры
            </a>
          </li>
        </ul>
        <NavigationBar />
      </div>

    </nav>

  );
}

export default Menu;