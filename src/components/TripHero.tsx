
import React from 'react';

interface TripHeroProps {
  title: string;
  description: string;
  image: string;
}

const TripHero = ({ title, description, image }: TripHeroProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-travel-cloud-white mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-travel-cloud-white/90 max-w-3xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TripHero;