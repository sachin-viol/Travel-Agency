// pages/index.js

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons can be imported from a library like heroicons or created as components
const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const HotelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChecklistIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default function NewComp() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  return (
    <div className="min-h-screen bg-blue-50">


      {/* Hero Section */}
      <section className="px-4 py-16 bg-blue-50 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Discover the World with WanderTribe
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600">
            We are more than just a travel company – we are a tribe of passionate wanderers who believe 
            in creating meaningful connections through authentic travel experiences. Our carefully curated 
            trips combine adventure, cultural immersion, and responsible tourism to give you the most 
            enriching travel experience possible.
          </p>
          <Link to="/trips">
            <a className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-600">
              Explore Our Trips
            </a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 - Highlight Card */}
            <div className="overflow-hidden transition-transform duration-300 bg-blue-500 rounded-lg shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center p-6 text-center text-white">
                <PlaneIcon />
                <h3 className="mt-4 mb-2 text-xl font-bold">Experiential travel made easy</h3>
                <p className="mb-6 text-blue-100">
                  You dream it. We'll take care of every last detail. Immersive guided tours, 
                  all around the globe designed for authentic experiences.
                </p>
                <Link to="/how-it-works">
                  <a className="px-6 py-2 mt-auto font-semibold text-blue-500 transition-colors bg-white rounded-full hover:bg-blue-50">
                    Find out how
                  </a>
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="text-blue-500">
                  <PersonIcon />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-bold text-gray-800">Like Minded Travellers</h3>
                <p className="text-gray-600">
                  Joining solo or in a group, you're never alone. Come meet your new 
                  squad of best friends you never knew you had.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="text-blue-500">
                  <HotelIcon />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-bold text-gray-800">All Inclusive & Hassle Free</h3>
                <p className="text-gray-600">
                  No more worrying about the transportation, hotels & itineraries. 
                  One booking and we've got you all covered.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="text-blue-500">
                  <ChecklistIcon />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-bold text-gray-800">Bucket list experiences</h3>
                <p className="text-gray-600">
                  Curated by experts who've been there done that. Local food, travel icons, 
                  unique experiences, everything is hand picked.
                </p>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            <button 
              onClick={() => setActiveSlide(0)}
              className={`w-3 h-3 rounded-full ${activeSlide === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
              aria-label="Go to slide 1"
            />
            <button 
              onClick={() => setActiveSlide(1)}
              className={`w-3 h-3 rounded-full ${activeSlide === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
              aria-label="Go to slide 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}