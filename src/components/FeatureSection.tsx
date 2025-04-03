// import { Users, CreditCard, Clipboard, User } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const FeatureSection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gray-50">
//       <div className="container-custom">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Trips for all travellers</h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Whatever your situation, whichever destination - if you're looking
//             for a good time, we've got you covered
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Feature 1 */}
//           <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
//             <div className="flex-shrink-0">
//               <Users size={48} className="text-travel-teal" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-travel-earth">Like Minded Travellers</h3>
//               <p className="text-gray-600">
//                 Joining solo or in a group, you're never alone. Come meet your new squad of best
//                 friends you never knew you had.
//               </p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             <div className="flex-shrink-0">
//               <CreditCard size={48} className="text-travel-teal" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-travel-earth">All Inclusive & Hassle Free</h3>
//               <p className="text-gray-600">
//                 No more worrying about the transportation, hotels & itineraries. One
//                 booking and we've got you all covered.
//               </p>
//             </div>
//           </div>

//           {/* Feature 3 */}
//           <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <div className="flex-shrink-0">
//               <Clipboard size={48} className="text-travel-teal" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-travel-earth">Bucket list experiences</h3>
//               <p className="text-gray-600">
//                 Curated by experts who've been there done that. Local food, travel icons, unique
//                 experiences, everything is hand picked.
//               </p>
//             </div>
//           </div>

//           {/* Feature 4 */}
//           <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
//             <div className="flex-shrink-0">
//               <User size={48} className="text-travel-teal" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-travel-earth">Led by Experts</h3>
//               <p className="text-gray-600">
//                 Trip leaders & local guides who are smart, fun & experienced. Top suggestions and
//                 support you need along the way.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/about">
//             <button className="btn-primary">Who We Are</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;


import React from 'react';
import { ArrowRight, Map, Wallet, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className=" mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Immersive guided tours, all around the globe</h2>
          <p className="text-lg text-gray-700 ">
            Explore with a friend, the whole family, or solo. However—and wherever—you want to go, our expert-planned group travel experiences make it easy to see the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12  tracking-wider">
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

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex justify-center mb-6">
              <Map size={40} className="text-travel-earth" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-travel-earth">Pick your perfect trip</h3>
            <p className="text-gray-700">
              We offer <Link to="/trips" className="text-travel-teal font-semibold hover:underline">200+ immersive, guided tours</Link> around the world. Wherever you choose to go, you'll enjoy lots of advantages that make traveling with us different.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex justify-center mb-6">
              <Wallet size={40} className="text-travel-earth" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-travel-earth">Put just $99 down</h3>
            <p className="text-gray-700">
              That's all it takes to secure a spot on one of our group tours when you sign up for AutoPay. Plus, you can pay in interest-free, monthly installments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex justify-center mb-6">
              <Briefcase size={40} className="text-travel-earth" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-travel-earth">Prep your packing list</h3>
            <p className="text-gray-700">
              While you're deciding what to take, we'll be busy arranging your hotels, meals, tickets, and more tour essentials. That's <Link to="/about" className="text-travel-teal font-semibold hover:underline">what going guided is all about</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;