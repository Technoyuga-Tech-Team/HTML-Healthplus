import ReactStars from "react-rating-stars-component";
import React from "react";

function StarComponant({ value, edit, size, onReviewChanges }) {

  const ratingChanged = (newRating) => {
    onReviewChanges(newRating)
  };

  return (
    <>
      <ReactStars
        edit={edit || false}
        value={value || 0}
        count={5}
        onChange={ratingChanged}
        size={size || 18}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </>
  )
}

export default StarComponant