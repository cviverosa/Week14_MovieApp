import React, { useState } from "react";

const Ratings = ({ onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((rating) => (
        <span
          key={rating}
          style={{
            cursor: "pointer",
            color:
              rating <= (hoveredRating || selectedRating) ? "gold" : "gray",
          }}
          onMouseEnter={() => handleRatingHover(rating)}
          onMouseLeave={handleRatingLeave}
          onClick={() => handleRatingClick(rating)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Ratings;
