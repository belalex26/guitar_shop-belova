import React from 'react';

function Filters() {
  return (
    <aside className="filters">
      <h2 className="filters__title">Фильтр</h2>
      <div className="filters__content">
        <div className="filters__price">
          <p className="filters__price-title">Цена, ₽</p>
          <div className="filters__price-content">
            <label className="filters__price-label">
              <input className="filters__price-input" type="text" placeholder="1000" />
            </label>
            <label className="filters__price-label">
              <input className="filters__price-input" type="text" placeholder="30000" />
            </label>
          </div>
        </div>
        <div className="filters__type">
          <p className="filters__type-title">Тип гитар</p>
          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="guitar-type" />
            <span className="filters__type-text">Акустические гитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="guitar-type" />
            <span className="filters__type-text">Электрогитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="guitar-type" />
            <span className="filters__type-text">Укулеле</span>
          </label>
        </div>

        <div className="filters__strings">
          <p className="filters__strings-title">Количество струн</p>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count" />
            <span className="filters__strings-text">4</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count" />
            <span className="filters__strings-text">6</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count" />
            <span className="filters__strings-text">7</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count" />
            <span className="filters__strings-text">12</span>
          </label>
        </div>
        <button className="filters__btn" type="button">Показать</button>
      </div>
    </aside>


  );
}

export default Filters;
