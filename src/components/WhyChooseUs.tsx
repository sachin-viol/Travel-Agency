import React from 'react';
import { Shield, Filter, Users, CheckSquare } from 'lucide-react';

const features = [
  {
    title: "No Third Party Mess",
    description: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
    icon: <Users className="w-10 h-10 text-travel-teal" />
  },
  {
    title: "Transparency & Security",
    description: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!",
    icon: <Shield className="w-10 h-10 text-travel-teal" />
  },
  {
    title: "Co-Travelers Filtering",
    description: "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!",
    icon: <Filter className="w-10 h-10 text-travel-teal" />
  },
  {
    title: "One Stop Hassle Free Experience",
    description: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!",
    icon: <CheckSquare className="w-10 h-10 text-travel-teal" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-travel-sand-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-travel-teal text-white px-6 py-2 rounded-md mb-6 text-xl font-bold">
            Why WANDER TRIBE?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-travel-earth hidden">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-travel-teal">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="bg-travel-teal/10 p-6 rounded-full w-20 h-20 flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;