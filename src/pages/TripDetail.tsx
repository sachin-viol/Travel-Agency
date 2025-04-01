import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripHero from '@/components/TripHero';
import TripOverview from '@/components/TripOverview';
import TripHighlights from '@/components/TripHighlights';
import TripImageGallery from '@/components/TripImageGallery';
import TripItinerary from '@/components/TripItinenary';
import TripFAQ from '@/components/TripFAQ';
import RelatedTrips from '@/components/RelatedTrips';
import LoadingState from '@/components/LoadingState';
import TripNotFound from '@/components/TripNotFound';
import TripDescription from '@/components/TripDescription';
import GroupTripNote from '@/components/GroupTripNote';
import { useToast } from '@/hooks/use-toast';
import { getTripBySlug } from '@/services/tripService';

const TripDetail = () => {
  const { slug } = useParams();
  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundTrip = getTripBySlug(slug || '');
      setTrip(foundTrip);
      setLoading(false);
      
      if (!foundTrip) {
        toast({
          title: "Trip not found",
          description: "Sorry, we couldn't find details for this trip",
          variant: "destructive"
        });
      }
    }, 500);
  }, [slug, toast]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <LoadingState />
        <Footer />
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <TripNotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <TripHero 
        title={trip.title} 
        description={trip.description} 
        image={trip.heroImage} 
      />
      
      {/* Trip Overview */}
      <TripOverview {...trip.overview} />
      
      {/* Group Trip Note */}
      <GroupTripNote />
      
      {/* Trip Description */}
      <TripDescription 
        description={trip.description}
        galleryImage={trip.gallery[0]}
      />
      
      {/* Trip Highlights */}
      <TripHighlights highlights={trip.highlights} />
      
      {/* Trip Gallery */}
      <TripImageGallery images={trip.gallery} />
      
      {/* Trip Itinerary */}
      <TripItinerary 
        itinerary={trip.itinerary} 
        inclusions={trip.inclusions} 
        exclusions={trip.exclusions} 
      />
      
      {/* Trip FAQ */}
      <TripFAQ faqs={trip.faq} />
      
      {/* More Like This */}
      <RelatedTrips currentTripSlug={trip.slug} />
      
      <Footer />
    </div>
  );
};

export default TripDetail;
