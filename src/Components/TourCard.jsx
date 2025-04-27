import React, { useState, useCallback } from 'react';

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  // Toggles read more / show less
  const [readMore, setReadMore] = useState(false);

  // Memoize the toggle function
  const toggleReadMore = useCallback(() => {
    setReadMore((prev) => !prev);
  }, []);

  return (
    <article className="tour-card">
      {/* Tour image */}
      <img src={image} alt={name} className="tour-image" />

      {/* Tour details */}
      <div className="tour-info">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>
          {/* Show full or shortened info */}
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={toggleReadMore} className="read-more">
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>

        {/* "Not Interested" button */}
        <button onClick={() => onRemove(id)} className="not-interested">
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
