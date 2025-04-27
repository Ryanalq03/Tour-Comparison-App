import React from 'react';

const DestinationSelector = ({ tours, selectedDestination, setSelectedDestination }) => {
  const uniqueDestinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div>
      <label htmlFor="destination-select">Select Destination: </label>
      <select
        id="destination-select"
        value={selectedDestination}
        onChange={(e) => setSelectedDestination(e.target.value)}
      >
        {uniqueDestinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;