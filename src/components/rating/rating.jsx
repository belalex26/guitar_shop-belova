import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({...props}) => {
  const {rating} = props;

  const onChangeRating = () => {
    return null;
  };

  return (

    <div className="rating">
      <div className="rating-items">
        <input type="radio" className="rating-item" id="rating-5" name="rating" value="5" checked={rating === 5 ? true : false} onChange={onChangeRating} />
        <label htmlFor="rating-5" className="rating-label" />

        <input type="radio" className="rating-item" id="rating-4" name="rating" value="4" checked={rating === 4 ? true : false} onChange={onChangeRating}/>
        <label htmlFor="rating-4" className="rating-label" />

        <input type="radio" className="rating-item" id="rating-3" name="rating" value="3" checked={rating === 3 ? true : false} onChange={onChangeRating}/>
        <label htmlFor="rating-3" className="rating-label" />

        <input type="radio" className="rating-item" id="rating-2" name="rating" value="2" checked={rating === 2 ? true : false} onChange={onChangeRating}/>
        <label htmlFor="rating-2" className="rating-label" />

        <input type="radio" className="rating-item" id="rating-1" name="rating" value="1" checked={rating === 1 ? true : false} onChange={onChangeRating}/>
        <label htmlFor="rating-1" className="rating-label" />
      </div>
    </div>

  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
