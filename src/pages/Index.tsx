
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/FeatureSection';
import UpcomingTrips from '@/components/UpcomingTrips';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import GroupTripNote from '@/components/GroupTripNote';
import InternationalTrips from '@/components/InternationalTrips';
import ExploreIndia from '@/components/ExploreIndia';
import RomanticEscapes from '@/components/RomanticEscapes';
import WhyChooseUs from '@/components/WhyChooseus';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GroupTripNote />
      <FeatureSection />
      <InternationalTrips />
      <ExploreIndia />
      <UpcomingTrips />
      <RomanticEscapes />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
