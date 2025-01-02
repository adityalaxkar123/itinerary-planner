import React, { useState } from "react";

const VotingPoll = () => {
  // Poll options for stage 1
  const options = ["Beach", "Mountain", "City", "Countryside"];

  // Sample sub-poll options for each choice
  const beachPlaces = ["Hawaii", "Maldives", "Bora Bora", "Costa Rica"];
  const cityPlaces = ["New York", "Paris", "Tokyo", "Sydney"];
  const countrysidePlaces = ["Tuscany", "New Zealand", "Ireland", "Scotland"];
  const mountainPlaces = ["Swiss Alps", "Rockies", "Himalayas", "Andes"];

  // To store votes and selected option
  const [votes, setVotes] = useState({
    Beach: 0,
    Mountain: 0,
    City: 0,
    Countryside: 0,
  });

  const [submitted, setSubmitted] = useState(false); // Track submission
  const [stage, setStage] = useState(1); // Track the current stage of the poll

  const [beachVotes, setBeachVotes] = useState({
    Hawaii: 0,
    Maldives: 0,
    "Bora Bora": 0,
    "Costa Rica": 0,
  });

  const [cityVotes, setCityVotes] = useState({
    "New York": 0,
    Paris: 0,
    Tokyo: 0,
    Sydney: 0,
  });

  const [countrysideVotes, setCountrysideVotes] = useState({
    Tuscany: 0,
    "New Zealand": 0,
    Ireland: 0,
    Scotland: 0,
  });

  const [mountainVotes, setMountainVotes] = useState({
    "Swiss Alps": 0,
    Rockies: 0,
    Himalayas: 0,
    Andes: 0,
  });

  // To store the winning place for each stage
  const [winner, setWinner] = useState("");
  const [mainPollWinner, setMainPollWinner] = useState(""); // Store the main poll winner

  // Custom poll states
  const [tripType, setTripType] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [placesToVisit, setPlacesToVisit] = useState([]);
  const [customVotes, setCustomVotes] = useState({});
  const [customPollActive, setCustomPollActive] = useState(false); // Track if Custom Poll is active
  const [customPollWinner, setCustomPollWinner] = useState(""); // Store winner for custom poll

  // Handle voting logic for stage 1
  const handleVote = (option) => {
    if (!submitted) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [option]: prevVotes[option] + 1,
      }));
    }
  };

  // Find the option with the most votes in the current poll
  const getWinner = (pollVotes) => {
    const maxVotes = Math.max(...Object.values(pollVotes));
    return Object.keys(pollVotes).find((key) => pollVotes[key] === maxVotes);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const winnerOption = getWinner(votes);
    setMainPollWinner(winnerOption); // Set the winner of the main poll

    // If any option wins, go to the second poll
    if (winnerOption === "Mountain") {
      setStage(2); // Transition to the second stage (mountain places)
    } else if (winnerOption === "Beach") {
      setStage(3); // Transition to the second stage (beach places)
    } else if (winnerOption === "City") {
      setStage(4); // Transition to the second stage (city places)
    } else if (winnerOption === "Countryside") {
      setStage(5); // Transition to the second stage (countryside places)
    }
  };

  // Handle voting logic for each stage (Mountain, Beach, City, Countryside)
  const handlePlaceVote = (place, placeType) => {
    if (placeType === "Mountain") {
      setMountainVotes((prevVotes) => ({ ...prevVotes, [place]: prevVotes[place] + 1 }));
    } else if (placeType === "Beach") {
      setBeachVotes((prevVotes) => ({ ...prevVotes, [place]: prevVotes[place] + 1 }));
    } else if (placeType === "City") {
      setCityVotes((prevVotes) => ({ ...prevVotes, [place]: prevVotes[place] + 1 }));
    } else if (placeType === "Countryside") {
      setCountrysideVotes((prevVotes) => ({ ...prevVotes, [place]: prevVotes[place] + 1 }));
    }
  };

  // Handle submission for all stages (final voting)
  const handleFinalSubmit = () => {
    let winnerOption;
    if (stage === 2) {
      winnerOption = getWinner(mountainVotes);
      setWinner(`The winning mountain place is: ${winnerOption}`);
    } else if (stage === 3) {
      winnerOption = getWinner(beachVotes);
      setWinner(`The winning beach place is: ${winnerOption}`);
    } else if (stage === 4) {
      winnerOption = getWinner(cityVotes);
      setWinner(`The winning city place is: ${winnerOption}`);
    } else if (stage === 5) {
      winnerOption = getWinner(countrysideVotes);
      setWinner(`The winning countryside place is: ${winnerOption}`);
    }
  };

  // Handle customizing the poll (set the custom poll section active)
  const activateCustomPoll = () => {
    setCustomPollActive(true);
  };

  // Handle customizing the trip type and country
  const handleTripTypeSelection = (e) => {
    setTripType(e.target.value);
    if (e.target.value === "Adventure") {
      setPlacesToVisit(["Swiss Alps", "Rockies", "Himalayas", "Andes"]);
    } else if (e.target.value === "Cultural") {
      setPlacesToVisit(["New York", "Paris", "Tokyo", "Sydney"]);
    } else if (e.target.value === "Foodie") {
      setPlacesToVisit(["Hawaii", "Maldives", "Bora Bora", "Costa Rica"]);
    }
  };

  // Handle country selection and set places accordingly
  const handleCountrySelection = (e) => {
    setSelectedCountry(e.target.value);
    if (e.target.value === "USA") {
      setPlacesToVisit(["New York", "California", "Las Vegas", "Miami"]);
    } else if (e.target.value === "Italy") {
      setPlacesToVisit(["Rome", "Venice", "Florence", "Milan"]);
    } else if (e.target.value === "Japan") {
      setPlacesToVisit(["Tokyo", "Osaka", "Kyoto", "Hokkaido"]);
    }
  };

  const handleCustomVote = (place) => {
    setCustomVotes((prevVotes) => ({
      ...prevVotes,
      [place]: prevVotes[place] ? prevVotes[place] + 1 : 1,
    }));
  };

  const handleCustomPollSubmit = () => {
    const winnerPlace = getWinner(customVotes);
    setCustomPollWinner(`The winning place is: ${winnerPlace}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Select Poll Type</h2>

      {/* Poll Type Selection Cards */}
      <div className="flex justify-between mb-6">
        <div
          onClick={() => setCustomPollActive(false)} // Activate Suggested Poll
          className="w-1/2 p-4 bg-gray-100 border rounded text-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Suggested Poll</h3>
          <p>Choose from predefined trip options</p>
        </div>
        <div
          onClick={activateCustomPoll} // Activate Custom Poll
          className="w-1/2 p-4 bg-gray-100 border rounded text-center cursor-pointer"
        >
          <h3 className="text-lg font-semibold">Customize Poll</h3>
          <p>Create your own poll by selecting trip type and country</p>
        </div>
      </div>

      {/* Suggested Poll (Show if custom poll is not active) */}
      {!customPollActive && (
        <div>
          {/* Stage 1 Poll */}
          {stage === 1 && (
            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleVote(option)}
                  className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition ${submitted ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={submitted} // Disable buttons after submission
                >
                  Vote for {option}
                </button>
              ))}
            </div>
          )}

          {/* Stage 2, 3, 4, 5 (Main Poll Stages) */}
          {stage !== 1 && (
            <div>
              <h3 className="text-xl font-semibold">{mainPollWinner} selected</h3>
              <div className="space-y-4">
                {(stage === 2 ? mountainPlaces : stage === 3 ? beachPlaces : stage === 4 ? cityPlaces : countrysidePlaces).map((place) => (
                  <button
                    key={place}
                    onClick={() => handlePlaceVote(place, stage === 2 ? "Mountain" : stage === 3 ? "Beach" : stage === 4 ? "City" : "Countryside")}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                  >
                    Vote for {place}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button for Stage 1 */}
          {!submitted && (
            <button
              onClick={handleSubmit}
              className="w-full py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}

          {/* Result after submission */}
          {submitted && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Winner:</h3>
              <p className="text-lg text-green-600">{mainPollWinner}</p>
            </div>
          )}

          {/* Submit Final Vote */}
          {submitted && (
            <button
              onClick={handleFinalSubmit}
              className="w-full py-2 mt-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition"
            >
              Submit Final Vote
            </button>
          )}

          {/* Display Final Winner */}
          {winner && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Final Winner:</h3>
              <p className="text-lg text-green-600">{winner}</p>
            </div>
          )}
        </div>
      )}

      {/* Custom Poll */}
      {customPollActive && (
        <div>
          <h3 className="text-xl font-semibold">Customize Your Poll</h3>

          {/* Trip Type Selection */}
          <select value={tripType} onChange={handleTripTypeSelection} className="w-full p-2 mt-2 mb-4 border rounded">
            <option value="">Select Trip Type</option>
            <option value="Adventure">Adventure</option>
            <option value="Cultural">Cultural</option>
            <option value="Foodie">Foodie</option>
          </select>

          {/* Country Selection */}
          {tripType && (
            <select value={selectedCountry} onChange={handleCountrySelection} className="w-full p-2 mt-2 mb-4 border rounded">
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
            </select>
          )}

          {/* Custom Places */}
          {placesToVisit.length > 0 && (
            <div className="space-y-4">
              {placesToVisit.map((place) => (
                <button
                  key={place}
                  onClick={() => handleCustomVote(place)}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                  Vote for {place}
                </button>
              ))}
            </div>
          )}

          <button onClick={handleCustomPollSubmit} className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition">
            Submit Custom Poll
          </button>

          {/* Display Custom Poll Result */}
          {customPollWinner && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Winner:</h3>
              <p className="text-lg text-green-600">{customPollWinner}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VotingPoll;
