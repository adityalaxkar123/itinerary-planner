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
import Chatgpt from './pages/Chatgpt';
import VotingPoll from './pages/VotingPoll';
import ExpenseTracker from './pages/ExpenseTracker';
import TodoPage from './pages/TodoPage';
import CustomizeTemplate from './pages/CustomizeTemplate';
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
          <Route path="/chatgpt" element={<Chatgpt />} />
        <Route path="/votingPoll" element={<VotingPoll />} />
        <Route path="/expenseTracker" element={<ExpenseTracker />} />
        <Route path="/todo" element={<TodoPage/>} />
        <Route path="//customize-templates" element={<CustomizeTemplate/>} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

    <Footer/>
</>
  );
};

export default App;
