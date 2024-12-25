import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';

// Import the page components for each section
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItineraryPlanner from './pages/ItineraryPlanner';
import AboutUs from './pages/Aboutus';
import Footer from './pages/Footer';
const App = () => {
  return (<>
    <Router>
      <Navbar />
      <div className="p-4">
        {/* Define routes for each section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/itinerary" element={<ItineraryPlanner />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

    <Footer/>
</>
  );
};

export default App;
