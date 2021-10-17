const MAX_PERCENT = 100;

export const body = document.querySelector(`.body`);
export const ESC_PRESS = 27;

export const GITARAHIT_SALE = 0.1;
export const SUPERGITARA_SALE = 700;
export const GITARA2020_SALE = 0.3;
export const GITARA2020_SALE_MAX = 3000;

export const MAX_SALE = (GITARA2020_SALE_MAX * MAX_PERCENT) / (GITARA2020_SALE * MAX_PERCENT);

export const SORT_BY_PRICE = `price`;
export const SORT_BY_REVIEW = `reviews`;
export const DIRECTION_UP = `up`;
export const DIRECTION_DOWN = `down`;


export const renderTypeText = (type) => {
  if (type === `electroType`) {
    return (`Электрогитара`);
  } else if (type === `acousticType`) {
    return (`Акустическая гитара`);
  }
  return (`Укулеле`);
};

export const renderPrice = (el) => {
  let separator = ` `;
  // eslint-disable-next-line indent
    if (el > 0) {
    let price = el.toString();
    return price.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + separator);
  }
  return el;
};

export function filterChechbox(array = [], filters = {}) {
  const keys = Object.keys(filters).filter((key) => filters.hasOwnProperty(key));
  return array.filter((elem) => {
    const commonKeys = keys.filter((key) => elem.hasOwnProperty(key));
    return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
  });
}

export const filterByPrice = (arr, a, b) => {
  return arr.filter((item) => (a <= item.price && item.price <= b));
};

// сортировка по цене

export const renderGuitarsSortByPriceUp = (arr) => {
  arr.sort((a, b) => a.price > b.price ? 1 : -1);
  return (arr);
};

// по убыванию
export const renderGuitarsSortByPriceDown = (arr) => {
  arr.sort((a, b) => a.price <= b.price ? 1 : -1);
  return (arr);
};

// рейтинг
// по возрастанию

export const renderGuitarsSortByReviewsUp = (arr) => {
  arr.sort((a, b) => a.reviews > b.reviews ? 1 : -1);
  return (arr);
};

// по убыванию

export const renderGuitarsSortByReviewsDown = (arr) => {
  arr.sort((a, b) => a.reviews < b.reviews ? 1 : -1);
  return (arr);
};
