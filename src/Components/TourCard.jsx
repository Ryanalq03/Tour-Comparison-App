import React, { useState } from 'react';

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  //Toggles read more / show less
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-info">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={toggleReadMore} className="read-more">
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)} className="not-interested">
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
