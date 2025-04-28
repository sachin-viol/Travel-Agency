import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import CompanyValues from '@/components/CompanyValues';
import PageHero from '@/components/PageHero';

const About = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <PageHero 
        title="About Us"
        description="Learn about our story, mission, and the passionate team behind WANDER TRIBE"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-travel-earth-light">About Us</h1>
          <p className="text-lg text-travel-slate-gray mb-16">
            Learn about our story, mission, and the passionate team behind WANDER TRIBE.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-travel-earth-light">Our Story</h2>
              <p className="text-travel-slate-gray mb-4">
                Founded in 2010 by a group of passionate travelers who believed that travel should be more than just checking off bucket list items, WANDER TRIBE was born from a desire to create meaningful connections through immersive experiences.
              </p>
              <p className="text-travel-slate-gray mb-4">
                After years of independent travel across all seven continents, our founders recognized that the most memorable moments came from authentic cultural exchanges and connections with like-minded adventurers.
              </p>
              <p className="text-travel-slate-gray">
                Today, we're proud to have helped thousands of travelers discover the world's hidden wonders while forming lasting friendships and creating unforgettable memories.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a"
                alt="Team hiking in mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-travel-earth-light">Our Mission</h2>
            <p className="text-xl text-travel-slate-gray max-w-3xl mx-auto">
              To create extraordinary journeys that inspire, connect, and transform through authentic experiences and responsible travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-travel-cloud-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Authentic Experiences</h3>
              <p className="text-travel-slate-gray">
                We design each itinerary to immerse you in local cultures, traditions, and natural wonders that go beyond typical tourist attractions.
              </p>
            </div>
            <div className="bg-travel-cloud-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Meaningful Connections</h3>
              <p className="text-travel-slate-gray">
                Our small group trips foster friendships among travelers while creating opportunities to connect with local communities.
              </p>
            </div>
            <div className="bg-travel-cloud-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Responsible Travel</h3>
              <p className="text-travel-slate-gray">
                We're committed to sustainable practices that respect local environments, support local economies, and minimize our ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TeamSection />
      <CompanyValues />

      <div className="py-16 bg-travel-earth/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8 text-travel-earth-light">Ready to Start Your Adventure?</h2>
          <button className="btn-primary">Explore Our Trips</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;