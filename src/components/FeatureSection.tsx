import {ChevronLeft, ChevronRight, Users, CreditCard, Clipboard, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const FeatureSection = () => {
  const [slidePosition, setSlidePosition] = useState(0); // 0 = initial, 1 = slid right
  const sliderRef = useRef(null);
  
  // Total 4 feature cards + 1 main card = 5 cards total
  const featureCards = [
    {
      icon: <Users size={48} className="text-travel-teal" />,
      title: "Like Minded Travellers",
      content: "Joining solo or in a group, you're never alone. Come meet your new squad of best friends you never knew you had.",
      link: "/trips",
      linkText: "200+ immersive, guided tours"
    },
    {
      icon: <CreditCard size={48} className="text-travel-teal" />,
      title: "All Inclusive & Hassle Free",
      content: "No more worrying about the transportation, hotels & itineraries. One booking and we've got you all covered.",
    },
    {
      icon: <Clipboard size={48} className="text-travel-teal" />,
      title: "Bucket list experiences",
      content: " Curated by experts who've been there done that. Local food, travel icons, unique experiences, everything is hand picked.",
      link: "/about",
      linkText: "what going guided is all about"
    },
    {
      icon:<User size={48} className="text-travel-teal" />,
      title: "Led by Experts",
      content: " Trip leaders & local guides who are smart, fun & experienced. Top suggestions and support you need along the way.",
      link: "/guides",
      linkText: "Meet our guides"
    }
  ];

  const slideRight = () => {
    setSlidePosition(1);
  };

  const slideLeft = () => {
    setSlidePosition(0);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Immersive guided tours, all around the globe</h2>
          <p className="text-lg text-gray-700">
            Explore with a friend, the whole family, or solo. However—and wherever—you want to go, our expert-planned group travel experiences make it easy to see the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12 tracking-wider">
          {/* Main feature card - always visible */}
          <div className="bg-travel-earth p-8 rounded-2xl flex flex-col text-white">
            <div className='flex-grow'>
              <h3 className="text-2xl font-bold mb-3">Experiential travel made easy</h3>
              <p className="mb-8">You dream it. We'll take care of every last detail.</p>
            </div>
            <div>
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-white text-travel-earth rounded-full font-medium hover:bg-gray-100 transition-colors">
                Find out how
              </Link>
            </div>
          </div>

          {/* Sliding cards container */}
          <div className="lg:col-span-3 relative">
            <div 
              className="overflow-hidden" 
              ref={sliderRef}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${slidePosition * 33.33}%)` }}
              >
                {featureCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-2" 
                    style={{ width: `33.33%` }}
                  >
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                      <div className="flex justify-center mb-6">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-travel-earth">{card.title}</h3>
                      <p className="text-gray-700">
                        {card.link && card.linkText ? (
                          <>
                            {card.content.split(card.linkText)[0]}
                            <Link to={card.link} className="text-travel-teal font-semibold hover:underline">
                              {card.linkText}
                            </Link>
                            {card.content.split(card.linkText)[1]}
                          </>
                        ) : (
                          card.content
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditional navigation buttons */}
            {slidePosition === 0 && (
              <button 
                onClick={slideRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} className="text-travel-earth" />
              </button>
            )}
            
            {slidePosition === 1 && (
              <button 
                onClick={slideLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="text-travel-earth" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;