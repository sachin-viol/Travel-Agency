import { Shield, Award, Heart } from 'lucide-react';

const CompanyIntroduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth-light">Introduction to Company</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in transformative travel experiences. Our mission is to create journeys that inspire, 
            educate, and connect people to the world in meaningful ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-travel-earth/20 p-8 text-travel-earth-light rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-4 relative">
                <Shield size={36} className="text-travel-earth-light" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Commitment to Safety</h3>
            <p className="text-center">
              Your wellbeing is our priority. We offer flexible cancellation policies and comprehensive travel protection 
              so you can explore with complete peace of mind.
            </p>
          </div>

          <div className="bg-travel-earth/20 p-8 text-travel-earth-light rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-4 relative">
                <Award size={36} className="text-travel-earth-light" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Heritage</h3>
            <p className="text-center">
              With over a decade of experience since 2010, we've established ourselves as industry leaders 
              in creating authentic and immersive travel experiences around the globe.
            </p>
          </div>

          <div className="bg-travel-earth/20 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-4 relative">
                <Heart size={36} className="text-travel-earth-light" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-travel-earth-light">Our Philosophy</h3>
            <p className="text-center text-travel-earth-light">
              We believe travel should enrich lives. Our carefully curated experiences promote cultural understanding, 
              environmental sustainability, and meaningful connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;


// import { Shield, Award, Heart, CreditCard } from 'lucide-react';

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 bg-travel-cloud-white">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Confidently WANDER TRIBE</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Travel with trust. Because this is your trip - something you've planned for and
//             dreamed about. You should feel confident in your journey every step of the way.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
//           <div className="bg-travel-earth/20green-700 p-10 text-travel-cloud-white md:rounded-tl-[40px]">
//             <div className="mb-6 flex justify-center">
//               <div className="rounded-full bg-travel-cloud-white p-5 relative">
//                 <Shield size={42} className="text-green-700" />
//                 <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-4 text-center">Industry-Leading Travel Protection</h3>
//             <p className="text-center">
//               Cancel for any reason (bad hair day applies) up to 24 hours before your tour leaves and
//               get a full money-back refund. WANDER TRIBE issued a record-breaking $15 million cash back to
//               travelers during the COVID-19 pandemic.
//             </p>
//           </div>

//           <div className="bg-travel-earth/20travel-earth p-10 text-travel-cloud-white">
//             <div className="mb-6 flex justify-center">
//               <div className="rounded-full bg-travel-cloud-white p-5 relative">
//                 <Award size={42} className="text-travel-earth" />
//                 <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-4 text-center">Experience & Expertise</h3>
//             <p className="text-center">
//               We've been doing this for a long time. Since 2010, in fact. WANDERL TRIBE is the most experienced
//               and longest-running tour operator in the adventure travel industry. You choose us for our expertise.
//             </p>
//           </div>

//           <div className="bg-travel-earth/20sky-100 p-10 md:rounded-tr-[40px]">
//             <div className="mb-6 flex justify-center">
//               <div className="rounded-full bg-travel-cloud-white p-5 relative">
//                 <Heart size={42} className="text-travel-teal" />
//                 <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-4 text-center text-travel-earth">Traveling Well</h3>
//             <p className="text-center text-gray-700">
//               Our team is on the pulse of world events and protocols, so you are kept fully aware and feel
//               well-prepared for your trip. We ensure your safety is our priority.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;