const MAX_PERCENT = 100;

export const body = document.querySelector(`.body`);
export const ESC_PRESS = 27;

export const GITARAHIT_SALE = 0.1;
export const SUPERGITARA_SALE = 700;
export const GITARA2020_SALE = 0.3;
export const GITARA2020_SALE_MAX = 3000;

export const MAX_SALE = (GITARA2020_SALE_MAX * MAX_PERCENT) / (GITARA2020_SALE * MAX_PERCENT);


export const renderPrice = (el) => {
  let separator = ` `;
  // eslint-disable-next-line indent
    if (el > 0) {
    let price = el.toString();
    return price.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + separator);
  }
  return el;
};
