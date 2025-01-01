// src/pages/ItineraryPlanner.js
import React from 'react';
import { Link } from 'react-router-dom';

const itineraries = [
  {
    title: 'Adventure Tour in India',
    type: 'Adventure',
    budget: '₹50,000',
    places: ['Rishikesh', 'Manali', 'Leh'],
    description: 'An exciting adventure trip with trekking, rafting, and high-altitude exploration.',
    link: '/adventure-tour'
  },
  {
    title: 'Cultural Tour in India',
    type: 'Cultural',
    budget: '₹40,000',
    places: ['Agra', 'Jaipur', 'Varanasi'],
    description: 'Explore the rich culture and heritage of India through its historic cities and temples.',
    link: '/cultural-tour'
  },
  {
    title: 'Food Tour in India',
    type: 'Food Tour',
    budget: '₹30,000',
    places: ['Delhi', 'Lucknow', 'Kolkata'],
    description: 'A food lover’s dream, sampling the best culinary delights from India’s famous cities.',
    link: '/food-tour'
  }
];

const ItineraryPlanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-teal-400 to-lime-300 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12">
          Your Travel Itinerary Planner
        </h1>

        {/* Main Cards for the Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* ChatGPT, Voting Poll, and Expense Tracker Cards */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-center text-blue-600">Ask ChatGPT</h2>
            <p className="text-center text-gray-700">
              Have any queries regarding your trip? Ask ChatGPT for personalized advice!
            </p>
            <Link
              to="/chatgpt"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-md text-center block hover:bg-blue-700 transition duration-300"
            >
              Ask ChatGPT
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-center text-teal-600">Destination Voting</h2>
            <p className="text-center text-gray-700">
              Can't decide where to go? Let us help you choose your next destination with a poll!
            </p>
            <Link
              to="/votingPoll"
              className="w-full py-3 px-6 bg-teal-600 text-white rounded-md text-center block hover:bg-teal-700 transition duration-300"
            >
              Vote for Destination
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-center text-lime-600">Manage Your Budget</h2>
            <p className="text-center text-gray-700">
              Keep track of your trip expenses and plan within your budget!
            </p>
            <Link
              to="/expenseTracker"
              className="w-full py-3 px-6 bg-lime-600 text-white rounded-md text-center block hover:bg-lime-700 transition duration-300"
            >
              Start Budgeting
            </Link>
          </div>
          {/* To-Do List Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-center text-indigo-600">Travel To-Do List</h2>
            <p className="text-center text-gray-700">
              Keep track of your tasks, mark them as done, and manage them with drag-and-drop.
            </p>
            <Link
              to="/todo"
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md text-center block hover:bg-indigo-700 transition duration-300"
            >
              Go to To-Do List
            </Link>
          </div>
        </div>

        {/* Travel Templates Section */}
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Pre-set Travel Itineraries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {itineraries.map((itinerary, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-center text-indigo-600">{itinerary.title}</h2>
              <p className="text-center text-gray-700">Type: {itinerary.type}</p>
              <p className="text-center text-gray-700">Budget: {itinerary.budget}</p>
              <p className="text-center text-gray-700">Destinations: {itinerary.places.join(', ')}</p>
              <p className="text-center text-gray-700">{itinerary.description}</p>
              <Link
                to={itinerary.link}
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md text-center block hover:bg-indigo-700 transition duration-300"
              >
                Explore This Itinerary
              </Link>
            </div>
          ))}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-center text-indigo-600">Customize Travel Templates</h2>
          <p className="text-center text-gray-700">
            Customize your travel plan by selecting the country, state, city, and places you want to visit.
          </p>
          <Link
            to="/customize-templates"
            className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md text-center block hover:bg-indigo-700 transition duration-300"
          >
            Start Customizing
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
