// import { Calendar, Clock, MapPin } from 'lucide-react';
// import { Link } from 'react-router-dom';


// const tripData = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//     destination: "Swiss Alps Adventure",
//     breakdown: "Zurich • Lucerne • Interlaken • Zermatt",
//     duration: "9 Days",
//     dates: "June 15 - June 23, 2024",
//     price: "$2,899",
//     slug: "swiss-alps-adventure"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
//     destination: "Japanese Wonders",
//     breakdown: "Tokyo • Kyoto • Osaka • Hakone",
//     duration: "12 Days",
//     dates: "July 3 - July 14, 2024",
//     price: "$3,499",
//     slug: "japanese-wonders"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
//     destination: "Costa Rican Paradise",
//     breakdown: "San José • Arenal • Monteverde • Manuel Antonio",
//     duration: "8 Days",
//     dates: "August 10 - August 17, 2024",
//     price: "$2,199",
//     slug: "costa-rican-paradise"
//   }
// ];

// const TripCard = ({ trip }: { trip: typeof tripData[0] }) => {
//   return (
//     <div className="trip-card">
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={trip.image}
//           alt={trip.destination}
//           className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//         />
//         <div className="absolute top-4 right-4 bg-travel-cloud-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth-light">
//           {trip.price}
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold mb-2 text-travel-earth-light">{trip.destination}</h3>
//         <p className="text-sm text-gray-500 flex items-center mb-4">
//           <MapPin size={16} className="mr-1" />
//           {trip.breakdown}
//         </p>

//         <div className="flex justify-between mb-4">
//           <div className="flex items-center text-gray-700">
//             <Clock size={18} className="mr-2 text-travel-teal" />
//             <span>{trip.duration}</span>
//           </div>
//           <div className="flex items-center text-gray-700">
//             <Calendar size={18} className="mr-2 text-travel-teal" />
//             <span>{trip.dates}</span>
//           </div>
//         </div>

//         <Link to={`/trip/${trip.slug}`} className="w-full btn-outline mt-2 block text-center">View Trip</Link>
//       </div>
//     </div>
//   );
// };

// const UpcomingTrips = () => {
//   return (
//     <section className="section-padding bg-travel-sand-light/30">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth-light">Upcoming Adventures</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Handcrafted itineraries designed to immerse you in extraordinary destinations.
//             Book your next adventure today.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {tripData.map((trip) => (
//             <TripCard key={trip.id} trip={trip} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/trips" >
//             <button className="btn-primary">View All Trips</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingTrips;


import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Extend the tripData array with more sample trips
const tripData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    destination: "Swiss Alps Adventure",
    breakdown: "Zurich • Lucerne • Interlaken • Zermatt",
    duration: "9 Days",
    dates: "June 15 - June 23, 2024",
    price: "$2,899",
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
    slug: "costa-rican-paradise"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    destination: "Maldives Escape",
    breakdown: "Male • Maafushi • Addu City",
    duration: "7 Days",
    dates: "September 1 - September 7, 2024",
    price: "$2,599",
    slug: "maldives-escape"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    destination: "Grand Canadian Tour",
    breakdown: "Toronto • Montreal • Quebec • Vancouver",
    duration: "10 Days",
    dates: "October 10 - October 19, 2024",
    price: "$3,099",
    slug: "grand-canadian-tour"
  }
];

const TripCard = ({ trip }: { trip: typeof tripData[0] }) => {
  return (
    <div className="trip-card rounded-lg overflow-hidden bg-travel-cloud-white shadow-md">
      <div className="relative h-64 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-travel-cloud-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth-light">
          {trip.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-travel-earth-light">{trip.destination}</h3>
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
  );
};

const UpcomingTrips = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="section-padding ">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth-light">Upcoming Adventures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handcrafted itineraries designed to immerse you in extraordinary destinations.
            Book your next adventure today.
          </p>
        </div>

        {/* Swiper Carousel */}
        {/* <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tripData.map((trip) => (
            <SwiperSlide key={trip.id}>
              <TripCard trip={trip} />
            </SwiperSlide>
          ))}
        </Swiper> */}
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
            <button className="w-full mt-4 bg-travel-earth hover:bg-travel-earth-light text-white py-2 rounded-md font-medium transition duration-200">
              View Trip
            </button>
          </div>
        </div>


        {/* <div className="text-center mt-12">
          <Link to="/trips">
            <button className="btn-primary">View All Trips</button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default UpcomingTrips;
