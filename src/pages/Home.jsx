// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Your Task Manager
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Organize, track, and manage your tasks efficiently with our powerful task management system.
          </p>
          <Link 
            to="/tasks" 
            className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Go to Tasks
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Easy Task Management</h3>
            <p className="text-gray-300">Create, organize, and track your tasks with our intuitive interface.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Time Tracking</h3>
            <p className="text-gray-300">Set start and end times for your tasks to manage your schedule effectively.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Progress Monitoring</h3>
            <p className="text-gray-300">Track your task completion and monitor your productivity over time.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
        <Link 
          to="/tasks" 
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 text-lg"
        >
          Start Managing Tasks
        </Link>
      </div>
    </div>
  );
};

export default Home;
