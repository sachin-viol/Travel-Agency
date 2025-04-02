import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const values = [
  {
    id: "01",
    title: "Community Experience",
    description: "We believe in the power of shared experiences. Our trips are designed to foster connections between travelers who start as strangers and end as friends. We prioritize group dynamics that encourage interaction, support, and lasting bonds."
  },
  {
    id: "02",
    title: "Customer Satisfaction",
    description: "Every aspect of our journey is crafted with your satisfaction in mind. From thoughtfully selected accommodations to carefully planned activities, we strive to exceed expectations at every turn, ensuring your travel experience is nothing short of extraordinary."
  },
  {
    id: "03",
    title: "Transparency",
    description: "Honesty forms the foundation of our business. We provide clear information about costs, inclusions, and what to expect on each trip. No hidden fees, no unpleasant surprises – just straightforward communication you can trust."
  },
  {
    id: "04",
    title: "Creative Mindset",
    description: "We approach travel planning with innovation and imagination. Our team constantly seeks new destinations, unique activities, and fresh perspectives to create journeys that inspire and surprise our travelers in meaningful ways."
  },
  {
    id: "05",
    title: "Freedom From Hassles",
    description: "We handle the logistics so you can focus on the experience. From transportation and accommodations to activities and meals, our team manages the details, allowing you to immerse yourself fully in the joy of discovery without worry."
  }
];

const CompanyValues = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    if (expandedValue === id) {
      setExpandedValue(null);
    } else {
      setExpandedValue(id);
    }
  };
  
  return (
    <section className="py-16 bg-travel-sand-light/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-travel-earth">
            Here's to the VALUES we strive for
          </h2>
          
          <p className="text-gray-600 mb-12 text-center">
            There are a whole lot of values and visions that one develops during their college days, which are otherwise rare to cultivate. It is these values that brought together a few engineers from NIT Kurukshetra, who took upon themselves the task to revolutionize the Indian Travel Industry. The result? A successful establishment of a travel community that the youth can identify with. Have a look at the values we swear by
          </p>
          
          <div className="space-y-4">
            {values.map((value) => (
              <div 
                key={value.id}
                className="border-b border-gray-200 pb-2"
              >
                <button
                  onClick={() => toggleExpand(value.id)}
                  className="w-full flex items-center justify-between py-3 text-left font-medium text-travel-earth hover:text-travel-teal transition-colors"
                >
                  <span className="flex items-center text-xl">
                    <span className="mr-4 text-2xl font-bold">{value.id}</span>
                    {value.title}
                  </span>
                  <ChevronRight className={`h-5 w-5 transition-transform ${expandedValue === value.id ? 'rotate-90' : ''}`} />
                </button>
                
                {expandedValue === value.id && (
                  <div className="py-3 pl-12 pr-4 text-gray-600">
                    <p>{value.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;