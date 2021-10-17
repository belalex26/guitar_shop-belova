import React from "react";
import PropTypes from "prop-types";

const Ratings = ({...props}) => {
  const {rating} = props;

  // eslint-disable-next-line no-console
  console.log(rating);

  return (
    <div className="ratings">
      <div className="ratings__item" data-item-value="5">★</div>
      <div className="ratings__item" data-item-value="4">★</div>
      <div className="ratings__item" data-item-value="3">★</div>
      <div className="ratings__item" data-item-value="2">★</div>
      <div className="ratings__item" data-item-value="1">★</div>
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number,
};

export default Ratings;
