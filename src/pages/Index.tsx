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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      {/* <TourCategories /> */}
      <UpcomingTrips />
      <FeatureSection />
      {/* <InternationalTrips />
      <ExploreIndia />
      <RomanticEscapes /> */}
      {/* <FeaturedTours /> */}
      {/* <GuidedTravel /> */}
      <BookingSteps />
      <BestMoments />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
