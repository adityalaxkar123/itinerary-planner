import React, { useState } from 'react';

// Dummy place suggestions (replace with real data from an API or database)
const placeSuggestions = {
  "India": {
    "Delhi": ["Red Fort", "Qutub Minar", "India Gate"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Elephanta Caves"]
  },
  "USA": {
    "New York": ["Statue of Liberty", "Central Park", "Times Square"],
    "California": ["Yosemite National Park", "Golden Gate Bridge", "Hollywood Sign"]
  }
};

const CustomizeTemplate = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [budget, setBudget] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track whether the user has clicked "Submit"

  // Handle country change and update states/cities accordingly
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState('');
    setCity('');
    setPlaces([]);
    setSelectedPlaces([]);
    setBudget(0);
    setIsSubmitted(false); // Reset submission state
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
    setPlaces(placeSuggestions[country]?.[e.target.value] || []);
    setSelectedPlaces([]);
    setBudget(0);
    setIsSubmitted(false); // Reset submission state
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePlaceToggle = (place) => {
    setSelectedPlaces((prevSelectedPlaces) =>
      prevSelectedPlaces.includes(place)
        ? prevSelectedPlaces.filter((p) => p !== place)
        : [...prevSelectedPlaces, place]
    );
  };

  // Calculate budget based on selected places (for simplicity, you can customize this further)
  const calculateBudget = () => {
    let totalBudget = 0;
    selectedPlaces.forEach((place) => {
      totalBudget += 100; // A placeholder value, replace with actual costs for each place
    });
    setBudget(totalBudget);
  };

  // Handle Submit button click
  const handleSubmit = () => {
    calculateBudget(); // Calculate the budget when submitting
    setIsSubmitted(true); // Mark the form as submitted
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-teal-400 to-lime-300 py-12">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">Customize Your Travel Template</h1>

        {/* Country Select */}
        <div className="mb-6">
          <label className="block text-white mb-2">Country:</label>
          <select onChange={handleCountryChange} value={country} className="p-2 w-full rounded-md shadow-md">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </div>

        {/* State Select */}
        {country && (
          <div className="mb-6">
            <label className="block text-white mb-2">State:</label>
            <select onChange={handleStateChange} value={state} className="p-2 w-full rounded-md shadow-md">
              <option value="">Select State</option>
              {Object.keys(placeSuggestions[country] || {}).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* City Select */}
        {state && (
          <div className="mb-6">
            <label className="block text-white mb-2">City:</label>
            <select onChange={handleCityChange} value={city} className="p-2 w-full rounded-md shadow-md">
              <option value="">Select City</option>
              {placeSuggestions[country]?.[state]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Places Selection */}
        {city && (
          <div className="mb-6">
            <h2 className="text-white text-2xl mb-4">Select Places to Visit:</h2>
            <div className="space-y-4">
              {placeSuggestions[country]?.[state]?.map((place) => (
                <div key={place} className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedPlaces.includes(place)}
                    onChange={() => handlePlaceToggle(place)}
                    className="form-checkbox h-5 w-5 text-teal-600"
                  />
                  <span className="text-white">{place}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        {city && (
          <div className="mb-6">
            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        )}

        {/* Display Budget after Submit */}
        {isSubmitted && selectedPlaces.length > 0 && budget > 0 && (
          <div className="mb-6">
            <h2 className="text-white">Estimated Budget:</h2>
            <p className="text-white text-xl">${budget}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizeTemplate;
