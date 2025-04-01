import React from 'react';

const LoadingState = () => {
  return (
    <div className="container-custom py-32 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-travel-teal border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-xl text-travel-earth">Loading trip details...</p>
      </div>
    </div>
  );
};

export default LoadingState;
