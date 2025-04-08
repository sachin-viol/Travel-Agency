import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import CompanyValues from '@/components/CompanyValues';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-12 md:py-16 bg-travel-cloud-white">
          <div className="container-custom">            
            <TeamSection />
            
            <div className="mt-16">
              <CompanyValues />
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-travel-earth">Join Our Team</h3>
              <p className="text-lg text-gray-600 mb-6">
                Passionate about travel and creating exceptional experiences? We're always looking for talented individuals to join our growing team.
              </p>
              <a 
                href="/careers" 
                className="btn-primary inline-flex items-center"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;