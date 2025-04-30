import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Filter, Globe, Award, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const trips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    destination: "Swiss Alps Adventure",
    breakdown: "Zurich • Lucerne • Interlaken • Zermatt",
    duration: "9 Days",
    dates: "June 15 - June 23, 2024",
    price: "$2,899",
    category: "Adventure",
    slug: "swiss-alps-adventure"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    destination: "Japanese Wonders",
    breakdown: "Tokyo • Kyoto • Osaka • Hakone",
    duration: "12 Days",
    dates: "July 3 - July 14, 2024",
    price: "$3,499",
    category: "Cultural",
    slug: "japanese-wonders"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    destination: "Costa Rican Paradise",
    breakdown: "San José • Arenal • Monteverde • Manuel Antonio",
    duration: "8 Days",
    dates: "August 10 - August 17, 2024",
    price: "$2,199",
    category: "Nature",
    slug: "costa-rican-paradise"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    destination: "Peruvian Expedition",
    breakdown: "Lima • Sacred Valley • Machu Picchu • Cusco",
    duration: "10 Days",
    dates: "September 5 - September 14, 2024",
    price: "$2,699",
    category: "Cultural",
    slug: "peruvian-expedition"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    destination: "New Zealand Explorer",
    breakdown: "Auckland • Rotorua • Queenstown • Milford Sound",
    duration: "14 Days",
    dates: "October 8 - October 21, 2024",
    price: "$3,899",
    category: "Adventure",
    slug: "new-zealand-explorer"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1523592121529-f6dde35f079e",
    destination: "Thai Island Hopping",
    breakdown: "Bangkok • Phuket • Phi Phi • Krabi",
    duration: "11 Days",
    dates: "November 12 - November 22, 2024",
    price: "$2,399",
    category: "Beach",
    slug: "thai-island-hopping"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
    destination: "Spain & Portugal Adventure",
    breakdown: "Barcelona • Ibiza • Madrid • Lisbon",
    duration: "11 Days",
    dates: "June 7 - June 28, 2024",
    price: "$2,599",
    category: "Backpacking",
    slug: "spain-portugal-adventure"
  }
];

const TripCategories = () => {
  const categories = [
    { name: "Adventure", icon: <Globe className="h-6 w-6 mb-3" />, color: "bg-travel-terracotta/10 text-travel-terracotta" },
    { name: "Cultural", icon: <Award className="h-6 w-6 mb-3" />, color: "bg-travel-teal/10 text-travel-teal" },
    { name: "Beach", icon: <Heart className="h-6 w-6 mb-3" />, color: "bg-travel-sand/10 text-travel-sand" },
    { name: "Backpacking", icon: <Users className="h-6 w-6 mb-3" />, color: "bg-travel-earth/10 text-travel-earth-light" },
  ];

  return (
    <div className="py-16 bg-travel-cloud-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-travel-earth-light mb-10 text-center">Browse by Trip Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all cursor-pointer">
              <div className={`rounded-full p-3 ${category.color}`}>
                {category.icon}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TripSearchBanner = () => {
  return (
    <div className="py-16 bg-travel-earth text-travel-cloud-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">Can't Find the Perfect Trip?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let our travel experts help you craft a personalized adventure tailored to your preferences and schedule.
        </p>
        <Link to="/contact" className="bg-travel-cloud-white text-travel-earth-light px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Contact Our Experts
        </Link>
      </div>
    </div>
  );
};

const Trips = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Adventures"
        description="Explore our carefully crafted journeys designed to immerse you in extraordinary destinations
        and connect you with like-minded travelers."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth-light"></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            </p>
          </div>

          {/* <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold text-travel-earth-light">All Trips</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <button className="flex items-center bg-travel-cloud-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Filter size={16} className="mr-2" />
                  <span>Filter</span>
                </button>
              </div>

              <select className="bg-travel-cloud-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Shortest First</option>
                <option>Duration: Longest First</option>
                <option>Upcoming Dates</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-travel-cloud-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth-light">
                    {trip.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-travel-terracotta text-travel-cloud-white px-3 py-1 rounded-full text-sm font-medium">
                    {trip.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-travel-earth-light">{trip.destination}</h3>
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
          </div> */}

          <div className="w-full max-w-4xl mx-auto">
            {/* Navbar */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-4 py-2 font-bold text-lg ${activeTab === 'upcoming'
                  ? 'border-b-2 border-travel-earth-light text-travel-earth-light'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Trip
              </button>
              <button
                className={`px-4 py-2 font-bold text-lg ${activeTab === 'past'
                  ? 'border-b-2 border-travel-earth-light text-travel-earth-light'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('past')}
              >
                Past Trips
              </button>
            </div>

            {/* Content */}
            <div className="mt-6">
              {activeTab === 'upcoming' ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1715959168101-6001fd95ea3d?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Goa beach"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold shadow-sm">
                      TBD
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-travel-earth-light">Goa Adventure</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Goa</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>TBD Days</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>TBD</span>
                    </div>
                    <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition duration-200">
                      View Trip
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-48">
                  <p className="text-travel-earth-light text-2xl font-bold">Coming soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <TripCategories />
      <TripSearchBanner />
      <Footer />
    </div>
  );
};

export default Trips;