import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TripImageGalleryProps {
  images: string[];
}

const TripImageGallery = ({ images }: TripImageGalleryProps) => {
  return (
    <section className="py-16 bg-travel-cloud-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-travel-earth text-center">Trip Gallery</h2>
        
        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`Trip image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TripImageGallery;
