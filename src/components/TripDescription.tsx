import React from 'react';

interface TripDescriptionProps {
  description: string;
  galleryImage: string;
}

const TripDescription = ({ description, galleryImage }: TripDescriptionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src={galleryImage} alt="Group travelers" className="w-full h-auto rounded-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-travel-earth">About this trip</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description} We'll hop through a kaleidoscope of sceneries ensuring there's never a dull moment, starting at the beach side beauty of Barcelona and concluding at the booty busting hill city of Lisbon. Get ready to turn up the HEAT!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDescription;
