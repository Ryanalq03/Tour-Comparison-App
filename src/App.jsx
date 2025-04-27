import React, { useState, useEffect } from 'react';

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (tours.length === 0) {
    return <p>No tours available.</p>;
  }

  return (
    <section>
      <h2>Available Tours</h2>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h3>{tour.name}</h3>
            <p>{tour.info}</p>
            <button onClick={() => onRemove(tour.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
