import React, { useState } from 'react';
import Gallery from './Components/Gallery'; // This component will fetch & display tours

function App() {
  // Global state to hold list of tours
  const [tours, setTours] = useState([]);

  // Function to remove a tour by its id
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const filteredTours = selectedDestination === 'All Destinations'
    ? tours
    : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default Gallery;
