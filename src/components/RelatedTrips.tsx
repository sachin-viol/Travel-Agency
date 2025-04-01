import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRelatedTrips } from '@/services/tripService';

interface RelatedTripsProps {
  currentTripSlug: string;
}

const RelatedTrips = ({ currentTripSlug }: RelatedTripsProps) => {
  // Get up to 3 related trips
  const relatedTrips = getRelatedTrips(currentTripSlug, 3).map(trip => ({
    id: trip.slug,
    slug: trip.slug,
    image: trip.heroImage,
    destination: trip.title.split(':')[0],
    breakdown: trip.itinerary.map(i => i.location).join(' • '),
    duration: trip.overview.duration,
    dates: trip.overview.dates,
    price: "$2,599", // This would come from a pricing service in a real app
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-travel-earth text-center">More Adventures You'll Love</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedTrips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trip.image} 
                  alt={trip.destination} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth">
                  {trip.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-travel-earth">{trip.destination}</h3>
                <p className="text-sm text-gray-500 flex items-center mb-4">
                  <MapPin size={16} className="mr-1" />
                  {trip.breakdown}
                </p>
                
                <div className="flex justify-between mb-4">
                  <div className="flex items-center text-gray-700">
                    <Clock size={18} className="mr-2 text-travel-teal" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="mr-2 text-travel-teal" />
                    <span>{trip.dates}</span>
                  </div>
                </div>
                
                <Link to={`/trip/${trip.slug}`} className="w-full btn-outline mt-2 block text-center">View Trip</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/trips" className="btn-primary">View All Trips</Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedTrips;
