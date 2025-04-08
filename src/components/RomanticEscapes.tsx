import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a",
    price: "Rs. 44,999/-",
    slug: "thailand-romantic"
  },
  {
    name: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    price: "Rs. 57,999/-",
    slug: "vietnam-romantic"
  },
  {
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570",
    price: "Rs. 24,499/-",
    slug: "kashmir-romantic"
  },
  {
    name: "Andaman",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
    price: "Rs. 29,999/-",
    slug: "andaman-romantic"
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
    price: "Rs. 12,999/-",
    slug: "kerala-romantic"
  }
];

const DestinationCard = ({ destination }: { destination: typeof destinations[0] }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-travel-cloud-white">
          <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
          <p className="font-medium text-travel-cloud-white/90">Starting Price {destination.price}</p>
        </div>
      </div>
    </div>
  );
};

const RomanticEscapes = () => {
  return (
    <section className="relative py-16 bg-travel-cloud-white">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1609198092458-38a293c7ac4b)' }}>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">Romantic Escapes</h2>
          <p className="text-lg text-gray-600">
            Where Forever Begins...Together!
          </p>
        </div>
        
        <Link to="/trips?category=romantic" className="btn-primary mb-8 inline-flex items-center">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        
        <Carousel className="mt-8">
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <Link to={`/trip/${destination.slug}`}>
                  <DestinationCard destination={destination} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-travel-cloud-white/70 hover:bg-travel-cloud-white" />
          <CarouselNext className="-right-4 bg-travel-cloud-white/70 hover:bg-travel-cloud-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default RomanticEscapes;