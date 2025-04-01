import React from 'react';
import { Calendar, Clock, Users, Compass, Building, UserCog } from 'lucide-react';

interface TripOverviewProps {
  duration: string;
  dates: string;
  groupSize: string;
  tripStyle: string;
  accommodation: string;
  team: string;
}

const TripOverview = ({ 
  duration, 
  dates, 
  groupSize, 
  tripStyle,
  accommodation,
  team
}: TripOverviewProps) => {
  return (
    <section className="py-10 bg-travel-sand-light/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Duration</h3>
            <p className="text-lg font-bold text-travel-earth">{duration}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Calendar className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Dates</h3>
            <p className="text-lg font-bold text-travel-earth">{dates}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Users className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Group Size</h3>
            <p className="text-lg font-bold text-travel-earth">{groupSize}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Compass className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Trip Style</h3>
            <p className="text-lg font-bold text-travel-earth">{tripStyle}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Building className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Accommodation</h3>
            <p className="text-lg font-bold text-travel-earth">{accommodation}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <UserCog className="w-10 h-10 text-travel-teal mb-3" />
            <h3 className="text-sm font-medium text-gray-600 mb-1">Team</h3>
            <p className="text-lg font-bold text-travel-earth">{team}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripOverview;