import React, { useState, useEffect, useCallback } from 'react';
import Gallery from './Components/Gallery'; // This component will fetch & display tours

function App() {
  // Global state to hold list of tours
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tours
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
  }, []);

  // Fetch tours on component mount
  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  // Function to remove a tour by its id
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <main>
      <h1>Tour Comparison App</h1>
      {tours.length === 0 ? (
        <>
          <h2>No tours left. Refresh to reload.</h2>
          <button onClick={fetchTours}>Refresh</button>
        </>
      ) : (
        <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      )}
    </main>
  );
}

export default App;