import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";

import {changeFilter} from "../../store/filterSlise";

function Filters() {

  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(30000);

  const [acoustic, setAcoustic] = useState(false);
  const [electro, setElectro] = useState(true);
  const [uculele, setUculele] = useState(false);

  const [str4, setStr4] = useState(false);
  const [str6, setStr6] = useState(false);
  const [str7, setStr7] = useState(false);
  const [str12, setStr12] = useState(false);

  const [str4Disable, setStr4Disable] = useState(false);
  const [str6Disable, setStr6Disable] = useState(false);
  const [str7Disable, setStr7Disable] = useState(false);
  const [str12Disable, setStr12Disable] = useState(false);

  const dispatch = useDispatch();

  let tempMin = Number(minPrice);
  let tempMax = Number(maxPrice);
  let type = {};

  useEffect(() => {
    checkType();
  }, [type]);

  if (minPrice < 0) {
    return setMinPrice(0);
  }
  if (maxPrice < 0) {
    return setMaxPrice(0);
  }

  if (tempMin > tempMax) {
    setMaxPrice(tempMin);
    setMinPrice(tempMax);
  }

  if (tempMax < tempMin) {
    setMinPrice(tempMax);
    setMaxPrice(tempMin);
  }

  type = {
    acousticType: acoustic,
    electroType: electro,
    uculeleType: uculele
  };

  let strings = {
    4: str4,
    6: str6,
    7: str7,
    12: str12
  };

  const renderArrFilter = (arr, filter) => {
    for (let key in filter) {
      if (filter[key] === true) {
        arr.push(key);
      }
    }
  };

  const checkType = () => {

    let typeFilter = [];

    renderArrFilter(typeFilter, type);

    let typeCount = typeFilter.join(`-`);

    setStr4Disable(false);
    setStr12Disable(false);
    setStr6Disable(false);
    setStr7Disable(false);

    if (typeCount === `electroType`) {
      setStr12Disable(true);
    } else if (typeCount === `acousticType`) {
      setStr4Disable(true);
    } else if (typeCount === `uculeleType`) {
      setStr12Disable(true);
      setStr6Disable(true);
      setStr7Disable(true);
    }

    if (typeCount === `electroType-uculeleType`) {
      setStr12Disable(true);
    }

  };

  const onShowBtnClick = () => {
    let temp = {};
    let typeFilterArr = [];
    let stringFilterArr = [];

    renderArrFilter(typeFilterArr, type);
    renderArrFilter(stringFilterArr, strings);

    temp = {
      maxPrice,
      minPrice,
      typeFilterArr,
      stringFilterArr
    };

    dispatch(changeFilter(temp));
  };


  return (
    <>
      <h2 className="filters__title">Фильтр</h2>
      <div className="filters__content">
        <div className="filters__price">
          <p className="filters__price-title">Цена, ₽</p>
          <div className="filters__price-content">
            <label className="filters__price-label">
              <input className="filters__price-input" type="number" value={minPrice} onChange={((evt) => setMinPrice(evt.target.value))}/>
            </label>
            <label className="filters__price-label">
              <input className="filters__price-input" type="number" value={maxPrice} onChange={((evt) => setMaxPrice(evt.target.value))}/>
            </label>
          </div>
        </div>
        <div className="filters__type">
          <p className="filters__type-title">Тип гитар</p>
          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="acoustic" checked={acoustic} onChange={() => setAcoustic(!acoustic)}/>
            <span className="filters__type-text">Акустические гитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="electro" checked={electro} onChange={() => setElectro(!electro)}/>
            <span className="filters__type-text">Электрогитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="uculele" checked={uculele} onChange={() => setUculele(!uculele)}/>
            <span className="filters__type-text">Укулеле</span>
          </label>
        </div>

        <div className="filters__strings">
          <p className="filters__strings-title">Количество струн</p>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count4" disabled={str4Disable} checked={str4} onChange={() => setStr4(!str4)} />
            <span className="filters__strings-text">4</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count6" disabled={str6Disable} checked={str6} onChange={() => setStr6(!str6)} />
            <span className="filters__strings-text">6</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count7" disabled={str7Disable} checked={str7} onChange={() => setStr7(!str7)} />
            <span className="filters__strings-text">7</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count12" disabled={str12Disable} checked={str12} onChange={() => setStr12(!str12)}/>
            <span className="filters__strings-text">12</span>
          </label>
        </div>
        <button className="filters__btn" type="button" onClick={onShowBtnClick}>Показать</button>
      </div>
    </>
  );
}

export default Filters;
