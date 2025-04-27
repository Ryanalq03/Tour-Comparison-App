import React, { useEffect, useState, useCallback } from 'react';
import TourCard from './TourCard';
import '../styles/styles.css';

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
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
  }, [setTours]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  if (tours.length === 0) {
    return (
      <>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={fetchTours}>Refresh</button>
      </>
    );
  }

  return (
    <section className="tour-gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
