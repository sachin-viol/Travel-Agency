// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // Gallery image collections by category
// const galleryImages = {
//   all: [
//     "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
//     "https://images.unsplash.com/photo-1452960962994-acf4fd70b632",
//     "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
//     "https://images.unsplash.com/photo-1573499931825-6fcd48f57c22",
//     "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
//     "https://images.unsplash.com/photo-1531804055935-76f44d7c3621",
//     "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1",
//     "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
//     "https://images.unsplash.com/photo-1599661046289-e31897846e41",
//     "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//     "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
//   ],
//   nature: [
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//     "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
//     "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
//     "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
//     "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
//     "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
//   ],
//   adventure: [
//     "https://images.unsplash.com/photo-1531804055935-76f44d7c3621",
//     "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1",
//     "https://images.unsplash.com/photo-1452960962994-acf4fd70b632",
//     "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
//   ],
//   cultural: [
//     "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
//     "https://images.unsplash.com/photo-1573499931825-6fcd48f57c22",
//     "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
//     "https://images.unsplash.com/photo-1577717903453-89ea6ad0bb15"
//   ],
//   beach: [
//     "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
//     "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
//     "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
//     "https://images.unsplash.com/photo-1540202404-a2f29016b523"
//   ]
// };

// const Gallery = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="pt-24 flex-grow">
//         <section className="py-12 md:py-16 bg-white">
//           <div className="container-custom">
//             <div className="text-center mb-12">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">Our Travel Gallery</h1>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Explore beautiful moments captured during our adventures around the world. 
//                 Each image tells a story of discovery, connection, and the joy of travel.
//               </p>
//             </div>

//             <Tabs defaultValue="all" className="w-full">
//               <div className="flex justify-center mb-8">
//                 <TabsList className="bg-travel-sand-light/30">
//                   <TabsTrigger value="all">All Photos</TabsTrigger>
//                   <TabsTrigger value="nature">Nature</TabsTrigger>
//                   <TabsTrigger value="adventure">Adventure</TabsTrigger>
//                   <TabsTrigger value="cultural">Cultural</TabsTrigger>
//                   <TabsTrigger value="beach">Beach</TabsTrigger>
//                 </TabsList>
//               </div>

//               {Object.keys(galleryImages).map((category) => (
//                 <TabsContent key={category} value={category} className="mt-0">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {galleryImages[category as keyof typeof galleryImages].map((image, index) => (
//                       <div key={index} className="overflow-hidden rounded-lg aspect-square bg-gray-100">
//                         <img 
//                           src={image} 
//                           alt={`Travel ${category} photo ${index + 1}`} 
//                           className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>

//             <div className="mt-16 text-center">
//               <h3 className="text-2xl font-bold mb-4 text-travel-earth">Share Your WANDERLUX Moments</h3>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
//                 Been on a trip with us? Share your photos on social media with #WANDERLUXTravel 
//                 for a chance to be featured in our gallery!
//               </p>
//               <div className="flex justify-center space-x-4">
//                 <a href="#" className="text-travel-teal hover:text-travel-teal-light transition-colors text-sm font-medium">
//                   Instagram
//                 </a>
//                 <a href="#" className="text-travel-teal hover:text-travel-teal-light transition-colors text-sm font-medium">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-travel-teal hover:text-travel-teal-light transition-colors text-sm font-medium">
//                   Twitter
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Gallery;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestMoments from '@/components/BestMoments';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the BestMoments section on the homepage
    const scrollToSection = () => {
      navigate('/');
      setTimeout(() => {
        const bestMomentsSection = document.getElementById('best-moments');
        if (bestMomentsSection) {
          bestMomentsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    scrollToSection();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">Our Travel Gallery</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Redirecting to our Best Moments section...
              </p>
            </div>

            <BestMoments />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;