import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import CompanyValues from '@/components/CompanyValues';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <PageHero
        title="About Us"
        description="Learn about our story, mission, and the passionate team behind WANDER TRIBE"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="py-16 pb-8">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-travel-earth-light">About Us</h1>
          <p className="text-lg text-travel-slate-gray mb-16">
            Learn about our story, mission, and the passionate team behind WANDER TRIBE.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-travel-earth-light">Our Story</h2>
              <p className="text-travel-slate-gray mb-4">
                At Wander Tribe, we believe travel is far more than a checklist of destinations — it is a deeply personal and transformative experience. Our approach is rooted in authenticity, cultural connection, and unforgettable moments that go beyond the ordinary.
              </p>
              <p className="text-travel-slate-gray mb-4">
                Our journey began with a genuine love for exploration — from the energy of major cities to the charm of remote corners, from solo adventures to shared experiences with friends. What began as a personal passion evolved into a clear purpose: to create meaningful journeys that connect people not only to places, but to cultures and to one another.
              </p>
              <p className="text-travel-slate-gray mb-4">
                Our journey began with a genuine love for exploration — from the energy of major cities to the charm of remote corners, from solo adventures to shared experiences with friends. What began as a personal passion evolved into a clear purpose: to create meaningful journeys that connect people not only to places, but to cultures and to one another.
              </p>
              <p className="text-travel-slate-gray mb-4">
                Wander Tribe was founded to share this spirit of exploration with travelers who seek more than surface-level tourism. We thoughtfully design immersive trips that allow individuals to truly engage with their surroundings — whether they’re in search of adventure, reflection, or a balance of both.
              </p>
              <p className="text-travel-slate-gray">
                Today, we are proud to be cultivating a community — a tribe — of curious, compassionate, and adventurous individuals who believe in the power of travel to inspire and transform.
                <br />
                Join us on the journey — because the world is too extraordinary to remain still.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-">
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

      {/* <TeamSection /> */}
      <CompanyValues />

      <div className="py-16 bg-travel-earth/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8 text-travel-earth-light">Ready to Start Your Adventure?</h2>
          <Link to="/trips"><button className="btn-primary">
            Explore Our Trips</button></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

