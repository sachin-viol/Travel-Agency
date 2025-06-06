import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import PageHero from './PageHero';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <PageHero
          title="Meet Our Team"
          description="The ideal set of extraordinary people"
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        />
        <div className="py-16">
          <div className="container-custom">
            <TeamSection />

            {/* <div className="mt-16">
              <CompanyValues />
            </div> */}

          </div>
        </div>
        <div className='bg-travel-earth/10 w-full py-10'>
          <div className="mt max-w-3xl mx-auto text-center ">
            <h3 className="text-2xl font-bold mb-4 text-travel-earth-light">Join Our Team</h3>
            <p className="text-lg text-gray-600 mb-6">
              Passionate about travel and creating exceptional experiences? We're always looking for talented individuals to join our growing team.
            </p>
            <a
              href="/career"
              className="btn-primary inline-flex items-center"
            >
              View Open Positions
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Team;