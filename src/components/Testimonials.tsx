// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     location: "New York, USA",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     text: "The Swiss Alps trip exceeded all my expectations. The guides were knowledgeable and passionate, and the itinerary perfectly balanced adventure and relaxation. I made friends for life!",
//     rating: 5,
//     trip: "Swiss Alps Adventure"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     location: "Toronto, Canada",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     text: "Japan was always on my bucket list, and this trip made it an unforgettable experience. Every detail was taken care of, allowing me to fully immerse myself in the culture. Highly recommend!",
//     rating: 5,
//     trip: "Japanese Wonders"
//   },
//   {
//     id: 3,
//     name: "Emma Rodriguez",
//     location: "London, UK",
//     image: "https://randomuser.me/api/portraits/women/63.jpg",
//     text: "Costa Rica was magical! From zip-lining through rainforests to relaxing on pristine beaches, every day was an adventure. The local guides shared insights I never would have discovered on my own.",
//     rating: 5,
//     trip: "Costa Rican Paradise"
//   },
//   {
//     id: 4,
//     name: "David Patel",
//     location: "Sydney, Australia",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     text: "I've traveled with many companies, but this experience stands out. The attention to detail, the authentic experiences, and the like-minded travelers made this trip truly special.",
//     rating: 5,
//     trip: "Swiss Alps Adventure"
//   },
//   {
//     id: 5,
//     name: "Olivia Kim",
//     location: "Seoul, South Korea",
//     image: "https://randomuser.me/api/portraits/women/29.jpg",
//     text: "As a solo traveler, I was nervous about joining a group trip. Those fears disappeared immediately! The guides made everyone feel welcome, and I've made connections that will last a lifetime.",
//     rating: 5,
//     trip: "Japanese Wonders"
//   }
// ];

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const itemsPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
//   const maxIndex = testimonials.length - itemsPerView;

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth-light">What Our Tribes Say</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Hear from fellow adventurers who have experienced our exceptional journeys firsthand.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Desktop and Tablet Navigation */}
//           <div className="hidden sm:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-4">
//             <button 
//               onClick={prevSlide} 
//               className="w-12 h-12 rounded-full bg-travel-cloud-white shadow-md flex items-center justify-center text-travel-earth-light hover:bg-travel-teal hover:text-travel-cloud-white transition-all duration-300"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button 
//               onClick={nextSlide} 
//               className="w-12 h-12 rounded-full bg-travel-cloud-white shadow-md flex items-center justify-center text-travel-earth-light hover:bg-travel-teal hover:text-travel-cloud-white transition-all duration-300"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* Testimonial Cards */}
//           <div className="overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
//             >
//               {testimonials.map((testimonial) => (
//                 <div 
//                   key={testimonial.id} 
//                   className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
//                 >
//                   <div className="testimonial-card h-full flex flex-col">
//                     <div className="flex items-center mb-4">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name} 
//                         className="w-14 h-14 rounded-full object-cover"
//                       />
//                       <div className="ml-4">
//                         <h4 className="font-bold text-travel-earth-light">{testimonial.name}</h4>
//                         <p className="text-sm text-gray-500">{testimonial.location}</p>
//                       </div>
//                     </div>

//                     <div className="flex mb-3">
//                       {Array.from({ length: testimonial.rating }).map((_, i) => (
//                         <Star key={i} size={18} className="fill-travel-sand text-travel-sand" />
//                       ))}
//                     </div>

//                     <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>

//                     <p className="mt-4 pt-4 border-t text-sm font-medium text-travel-teal">
//                       {testimonial.trip}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="flex justify-center mt-6 space-x-2 sm:hidden">
//             {Array.from({ length: testimonials.length }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === activeIndex ? 'bg-travel-teal w-6' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



// import { useEffect, useRef, useState } from 'react';

// const testimonials = [
//   {
//     quote: "Intellisage's AI solutions have transformed our customer service operations, reducing response times by 60% while improving satisfaction scores.",
//     author: "Sarah Johnson",
//     position: "CTO, TechCorp Global"
//   },
//   {
//     quote: "The predictive analytics platform developed by Intellisage helped us identify market trends months ahead of our competitors, giving us a significant edge.",
//     author: "Michael Chen",
//     position: "Director of Innovation, FutureTech"
//   },
//   {
//     quote: "Working with Intellisage to implement natural language processing has revolutionized how we handle document processing, saving thousands of work hours annually.",
//     author: "Elena Rodriguez",
//     position: "Operations Manager, DataDrive Inc."
//   },
//   {
//     quote: "The custom AI solution from Intellisage automated our quality control process with 99.8% accuracy, something we thought impossible before.",
//     author: "David Wilson",
//     position: "Head of Manufacturing, PrecisionTech"
//   }
// ];

// const TestimonialsSection = () => {
//   const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elementsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => {
//       elementsRef.current.forEach((el) => {
//         if (el) observer.unobserve(el);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="sm:py-20 py-10 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="glow absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16 opacity-100" ref={el => { elementsRef.current[2] = el; }}>
//           <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-travel-earth-light">
//             Client Testimonials
//           </h2>
//           <p className="text-travel-earth-light/90 max-w-2xl mx-auto ">
//             Discover how our AI solutions are driving real-world results for businesses
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto relative opacity-" ref={el => { elementsRef.current[2] = el; }}>
//           <div className="bg-travel-earth/0 backdrop-blur-sm border border-travel-earth rounded-xl p-8 md:p-12">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`transition-opacity duration-1000 absolute inset-0 p-8 md:p-12 flex flex-col justify-between ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   }`}
//               >
//                 <div>
//                   <svg className="text-travel-earth h-10 w-10 mb-4" fill="currentColor" viewBox="0 0 32 32">
//                     <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
//                   </svg>
//                   <p className="text-xl text-travel-earth-light italic">{testimonial.quote}</p>
//                 </div>

//                 <div className="mt-8">
//                   <p className="font-semibold text-travel-earth-light">{testimonial.author}</p>
//                   <p className="text-sm text-travel-earth-light">{testimonial.position}</p>
//                 </div>
//               </div>
//             ))}

//             <div className="h-64"></div> {/* Spacer to maintain height */}
//           </div>

//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-travel-earth-light w-8' : 'bg-gray-300 w-2'
//                   }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;


import { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    author: "Sarah Johnson",
    position: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The Swiss Alps trip exceeded all my expectations. The guides were knowledgeable and passionate, and the itinerary perfectly balanced adventure and relaxation. I made friends for life!",
    rating: 5,
    trip: "Swiss Alps Adventure"
  },
  {
    id: 2,
    author: "Michael Chen",
    position: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Japan was always on my bucket list, and this trip made it an unforgettable experience. Every detail was taken care of, allowing me to fully immerse myself in the culture. Highly recommend!",
    rating: 5,
    trip: "Japanese Wonders"
  },
  {
    id: 3,
    author: "Emma Rodriguez",
    position: "London, UK",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "Costa Rica was magical! From zip-lining through rainforests to relaxing on pristine beaches, every day was an adventure. The local guides shared insights I never would have discovered on my own.",
    rating: 5,
    trip: "Costa Rican Paradise"
  },
  {
    id: 4,
    author: "David Patel",
    position: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote: "I've traveled with many companies, but this experience stands out. The attention to detail, the authentic experiences, and the like-minded travelers made this trip truly special.",
    rating: 5,
    trip: "Swiss Alps Adventure"
  },
  {
    id: 5,
    author: "Olivia Kim",
    position: "Seoul, South Korea",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote: "As a solo traveler, I was nervous about joining a group trip. Those fears disappeared immediately! The guides made everyone feel welcome, and I've made connections that will last a lifetime.",
    rating: 5,
    trip: "Japanese Wonders"
  }
];

const TestimonialsSection = () => {
  const elementsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12 opacit0 transition-opacity duration-700"
          ref={el => elementsRef.current[0] = el}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our travel experiences are creating unforgettable memories for adventurers worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-xl shadow-lg p-8 opacity transition-opacity duration-700"
            ref={el => elementsRef.current[1] = el}
          >
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-opacity duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                    </div>

                    <p className="text-gray-700 italic mb-6 text-lg">
                      "{testimonial.quote}"
                    </p>

                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 text-lg">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.trip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-300 w-2'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;