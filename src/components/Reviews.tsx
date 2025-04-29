import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import CompanyValues from '@/components/CompanyValues';
import PageHero from '@/components/PageHero';

export default function Reviews() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <PageHero
        title="Reviews"
        description="Discover what our travelers have to say about their unforgettable experiences with WANDER TRIBE. Read real reviews and testimonials from our happy adventurers."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div>
        <div className="py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-travel-earth-light">What Our Travelers Say</h1>
            <p className="text-lg text-travel-slate-gray mb-16">
              Discover what our travelers have to say about their unforgettable experiences with WANDER TRIBE. Read real reviews and testimonials from our happy adventurers.
            </p>

            {/* Reviews Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Review Card */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Amazing Experience!</h3>
                <p className="text-gray-600 mb-4">"I had the time of my life on this trip! The guides were fantastic and the itinerary was well-planned."</p>
                <p className="text-sm text-gray-500">- John Doe</p>
              </div>
              {/* Add more review cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}