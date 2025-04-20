import React, { useState } from 'react';
import Gallery from './Components/Gallery';
import DestinationSelector from './Components/DestinationSelector';

function App() {
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const filteredTours = selectedDestination === 'All Destinations'
    ? tours
    : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Tour Comparison App</h1>
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <Gallery tours={filteredTours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;

