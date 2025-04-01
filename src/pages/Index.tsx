
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/FeatureSection';
import UpcomingTrips from '@/components/UpcomingTrips';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSection />
      <UpcomingTrips />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
