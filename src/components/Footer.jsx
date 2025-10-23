// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} My Task Manager. Made with ❤️ by Munde.
        </p>
      </div>
    </footer>
  );
};

export default Footer; // ✅ Make sure default export exists
