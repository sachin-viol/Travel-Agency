import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  // Split highlights into two columns
  const midPoint = Math.ceil(highlights.length / 2);
  const firstColumn = highlights.slice(0, midPoint);
  const secondColumn = highlights.slice(midPoint);

  return (
    <section className="py-16 bg-travel-sand-light/30">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-travel-earth text-center">Trip Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {firstColumn.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-travel-terracotta mr-3 mt-0.5" />
                <p className="text-lg text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {secondColumn.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-travel-terracotta mr-3 mt-0.5" />
                <p className="text-lg text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripHighlights;
