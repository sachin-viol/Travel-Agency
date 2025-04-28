import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/FeatureSection';
import UpcomingTrips from '@/components/UpcomingTrips';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import InternationalTrips from '@/components/InternationalTrips';
import ExploreIndia from '@/components/ExploreIndia';
import RomanticEscapes from '@/components/RomanticEscapes';
import WhyChooseUs from '@/components/WhyChooseUs';
import BestMoments from '@/components/BestMoments';
import TourCategories from '@/components/TourCategories';
import GuidedTravel from '@/components/GuidedTravel';
import FeaturedTours from '@/components/FeaturedTours';
import BookingSteps from '@/components/BookingSteps';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Add a class to body for page transitions
    document.body.classList.add('page-loaded');

    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <WhyChooseUs />
      </div>
      {/* <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <TourCategories />
      </div> */}
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        <UpcomingTrips />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <GuidedTravel />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
        <FeatureSection />
      </div>
      {/* <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
        <FeaturedTours />
      </div> */}
      <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
        <BookingSteps />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
        <BestMoments />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
