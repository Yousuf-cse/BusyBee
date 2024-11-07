import React from 'react';

export default function RotatingLogoLoader() {
  return (
    <div className="flex flex-col items-center justify-center text-white h-44">
      <img
        src= "https://img.icons8.com/?size=100&id=12494&format=png&color=000000"
        alt="Loading Logo"
        className="w-16 h-16 animate-spin filter drop-shadow-lg"
      />
      <p className='text-xs mt-6'>If the loading process takes longer than expected, please refresh the page and try again</p>
    </div>
  );
};
