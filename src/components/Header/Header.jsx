import React from 'react';

export default function Header() {
  return (
    <header className="bg-green-400 w-auto py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Title */}
        <div className="text-2xl font-bold text-gray-900">
          BusyBee
        </div>

        {/* Tagline */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-gray-700 text-lg font-medium">
            Say No To Crowd
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
