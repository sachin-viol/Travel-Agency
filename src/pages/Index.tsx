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
import NewComp from '@/components/NewComp';
import JoinNow from '@/components/JoinNow';
import Newsletter from '@/components/NewsLetter';

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
      <FeatureSection />
      <UpcomingTrips />
      <GuidedTravel />
      <JoinNow />
      <Testimonials />
      <Newsletter />
      {/* <BookingSteps /> */}
      {/* <WhyChooseUs />
      <BestMoments /> */}
      <Footer />
    </div>
  );
};

export default Index;
