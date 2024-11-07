import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-400 text-black">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
        
        {/* Centered Footer Links */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-4 sm:mb-6">
            <li>
              <a href="/" className="text-black hover:text-white text-sm sm:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-black hover:text-white text-sm sm:text-base">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-black hover:text-white text-sm sm:text-base">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-6 sm:mt-8">
          <h3 className="text-base sm:text-lg font-bold">Follow Us</h3>
          <div className="mt-3 flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-black hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.876v-6.99h-2.54v-2.886h2.54V9.797c0-2.506 1.493-3.89 3.77-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.244 0-1.63.773-1.63 1.563v1.874h2.773l-.443 2.886h-2.33v6.99C18.343 21.128 22 16.99 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-black hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd" d="M8.29 20.252c7.547 0 11.675-6.26 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.117 4.117 0 0021.448 4a8.273 8.273 0 01-2.605.996 4.106 4.106 0 00-6.993 3.742A11.653 11.653 0 013.67 4.898a4.105 4.105 0 001.27 5.482A4.073 4.073 0 012.8 9.713v.052a4.106 4.106 0 003.292 4.024 4.093 4.093 0 01-1.852.07 4.107 4.107 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-black hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.32 3.608 1.295.975.975 1.233 2.242 1.295 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.32 2.633-1.295 3.608-.975.975-2.242 1.233-3.608 1.295-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.32-3.608-1.295-.975-.975-1.233-2.242-1.295-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.32-2.633 1.295-3.608.975-.975 2.242-1.233 3.608-1.295C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.772.129 4.555.435 3.514 1.476 2.473 2.517 2.167 3.734 2.108 5.014.983 8.254.983 11.746.983 12s0 3.746.07 6.986c.059 1.28.365 2.497 1.406 3.538 1.041 1.041 2.258 1.347 3.538 1.406 3.24.07 3.746.07 6.986.07s3.746 0 6.986-.07c1.28-.059 2.497-.365 3.538-1.406 1.041-1.041 1.347-2.258 1.406-3.538.07-3.24.07-3.746.07-6.986s0-3.746-.07-6.986c-.059-1.28-.365-2.497-1.406-3.538-1.041-1.041-2.258-1.347-3.538-1.406C15.746.012 15.258 0 12 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0-2.162A8.324 8.324 0 113.676 12 8.324 8.324 0 0112 3.676zm6.406 1.31a1.512 1.512 0 100 3.024 1.512 1.512 0 000-3.024z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-black mt-2">
            Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors
          </p>
          <p className="text-xs sm:text-sm text-black">
            © 2024 BusyBee. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
