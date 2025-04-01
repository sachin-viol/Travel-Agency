import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const TripNotFound = () => {
  return (
    <div className="container-custom py-32 flex items-center justify-center">
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-travel-earth">Trip Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the trip you're looking for.</p>
        <Link to="/trips" className="btn-primary">Browse All Trips</Link>
      </div>
    </div>
  );
};

export default TripNotFound;
