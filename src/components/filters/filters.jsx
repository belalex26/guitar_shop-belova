import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {selectAcoustic, selectElectro, selectUculele} from "../../store/filtersSliseType";
import {selectCheckboxesaAcoustic, selectCheckboxesElectro, selectCheckboxesUculele} from "../../store/filtersSliseType";
import {selectStringsCheck4, selectStringsCheck6, selectStringsCheck7, selectStringsCheck12} from "../../store/filtersStringsCheck";
import {select4Checkbox, select6Checkbox, select7Checkbox, select12Checkbox} from "../../store/filtersStringsCheck";
import {selectStringsDisable4, selectStringsDisable6, selectStringsDisable7, selectStringsDisable12} from "../../store/filtersStringsDisable";
import {select4Disable, select6Disable, select7Disable, select12Disable} from "../../store/filtersStringsDisable";
import {changeFilter} from "../../store/filterSlise";
import {selectGuitars} from "../../store/giutarsSlise";

function Filters() {

  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(30000);

  let strings = [];
  let type = [];
  let filterData = {};
  let filterArr = {};
  let tempMin = Number(minPrice);
  let tempMax = Number(maxPrice);
  const guitars = useSelector(selectGuitars);
  let guitarsCopy = guitars;

  if (guitarsCopy.length < 0) {
    guitarsCopy = guitars;
    filterArr = guitarsCopy;
    dispatch(changeFilter(filterArr));

    return guitarsCopy;
  }

  // inputs

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

  // type

  const selectAcousticCheckbox = useSelector(selectAcoustic);
  const selectElectroCheckbox = useSelector(selectElectro);
  const selectUculeleCheckbox = useSelector(selectUculele);

  // strings

  const selectStr4 = useSelector(selectStringsCheck4);
  const selectStr6 = useSelector(selectStringsCheck6);
  const selectStr7 = useSelector(selectStringsCheck7);
  const selectStr12 = useSelector(selectStringsCheck12);

  // strings disable

  const disableStr4 = useSelector(selectStringsDisable4);
  const disableStr6 = useSelector(selectStringsDisable6);
  const disableStr7 = useSelector(selectStringsDisable7);
  const disableStr12 = useSelector(selectStringsDisable12);

  // type checkbox onChange

  const onAcousticClick = () => {
    dispatch(selectCheckboxesaAcoustic(!selectAcousticCheckbox));
  };
  const onElectroClick = () => {
    dispatch(selectCheckboxesElectro(!selectElectroCheckbox));
  };
  const onUculeleClick = () => {
    dispatch(selectCheckboxesUculele(!selectUculeleCheckbox));
  };

  if (selectUculeleCheckbox) {
    type.push(`укулеле`);
  }

  if (selectElectroCheckbox) {
    type.push(`электрогитара`);
  }

  if (selectAcousticCheckbox) {
    type.push(`акустическая гитара`);
  }

  // strings checkbox onChange

  const onStr4Click = () => {
    dispatch(select4Checkbox(!selectStr4));
  };

  const onStr6Click = () => {
    dispatch(select6Checkbox(!selectStr6));
  };

  const onStr7Click = () => {
    dispatch(select7Checkbox(!selectStr7));
  };

  const onStr12Click = () => {
    dispatch(select12Checkbox(!selectStr12));
  };

  /* filters strings */

  // if check Acoustic

  if (selectAcousticCheckbox && !selectUculeleCheckbox && !selectElectroCheckbox) {
    dispatch(select4Checkbox(false));
    dispatch(select4Disable(true));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(false));
  }

  // if check Electro

  if (!selectAcousticCheckbox && !selectUculeleCheckbox && selectElectroCheckbox) {
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Checkbox(false));
    dispatch(select12Disable(true));
  }

  // if check Uculele

  if (!selectAcousticCheckbox && selectUculeleCheckbox && !selectElectroCheckbox) {
    dispatch(select4Checkbox(true));
    dispatch(select4Disable(false));
    dispatch(select6Checkbox(false));
    dispatch(select6Disable(true));
    dispatch(select7Checkbox(false));
    dispatch(select7Disable(true));
    dispatch(select12Checkbox(false));
    dispatch(select12Disable(true));
  }

  // if check Uculele + Electro

  if (!selectAcousticCheckbox && selectUculeleCheckbox && selectElectroCheckbox) {
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(true));
  }

  // if check Uculele + Acoustic

  if (selectAcousticCheckbox && selectUculeleCheckbox && !selectElectroCheckbox) {
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(false));
  }

  // if check Electro + Acoustic

  if (selectAcousticCheckbox && !selectUculeleCheckbox && selectElectroCheckbox) {
    dispatch(select4Checkbox(false));
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(false));
  }

  // if check Uculele + Electro + Acoustic

  if (selectAcousticCheckbox && selectUculeleCheckbox && selectElectroCheckbox) {
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(false));
  }

  // not check

  if (!selectAcousticCheckbox && !selectUculeleCheckbox && !selectElectroCheckbox) {
    dispatch(select4Disable(false));
    dispatch(select6Disable(false));
    dispatch(select7Disable(false));
    dispatch(select12Disable(false));
  }

  if (selectStr4) {
    strings.push(4);
  }

  if (selectStr6) {
    strings.push(6);
  }

  if (selectStr7) {
    strings.push(7);
  }

  if (selectStr12) {
    strings.push(12);
  }

  filterData = {
    type,
    strings
  };

  // eslint-disable-next-line no-console
  console.log(filterData);

  // фильтр по цене

  const filterByPrice = (arr, a, b) => {
    return arr.filter((item) => (a <= item.price && item.price <= b));
  };

  // фильтр по типу

  function filter(array = [], filters = {}) {
    const keys = Object.keys(filters).filter((key) => filters.hasOwnProperty(key));
    return array.filter((elem) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key));
      return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
    });
  }

  // eslint-disable-next-line consistent-return
  const onShowBtnClick = () => {
    let filterByCheckbox = filter(guitarsCopy, filterData);
    guitarsCopy = filterByPrice(filterByCheckbox, minPrice, maxPrice);
    filterArr = guitarsCopy;
    dispatch(changeFilter(filterArr));
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
            <input className="filters__type-checkbox" type="checkbox" name="acoustic" checked={selectAcousticCheckbox} onChange={onAcousticClick} value="acoustic"/>
            <span className="filters__type-text">Акустические гитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="electro" checked={selectElectroCheckbox} onChange={onElectroClick} value="electro"/>
            <span className="filters__type-text">Электрогитары</span>
          </label>

          <label className="filters__type-label">
            <input className="filters__type-checkbox" type="checkbox" name="uculele" checked={selectUculeleCheckbox} onChange={onUculeleClick} value="uculele"/>
            <span className="filters__type-text">Укулеле</span>
          </label>
        </div>

        <div className="filters__strings">
          <p className="filters__strings-title">Количество струн</p>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count4" value="4" checked={selectStr4} onChange={onStr4Click} disabled={disableStr4}/>
            <span className="filters__strings-text">4</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count6" value="6" checked={selectStr6} onChange={onStr6Click} disabled={disableStr6}/>
            <span className="filters__strings-text">6</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count7" value="7" checked={selectStr7} onChange={onStr7Click} disabled={disableStr7}/>
            <span className="filters__strings-text">7</span>
          </label>
          <label className="filters__strings-label">
            <input className="filters__strings-checkbox" type="checkbox" name="strings-count12" value="12" checked={selectStr12} onChange={onStr12Click} disabled={disableStr12}/>
            <span className="filters__strings-text">12</span>
          </label>
        </div>
        <button className="filters__btn" type="button" onClick={onShowBtnClick}>Показать</button>
      </div>
    </>
  );
}

export default Filters;
