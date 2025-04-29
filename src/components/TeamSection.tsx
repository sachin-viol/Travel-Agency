import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import Navbar from './Navbar';

const teamMembers = [
  {
    name: "Maria Pereira",
    position: "CEO, Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "From wandering through bustling cities to exploring hidden corners of the world, Maria felt most alive when she’s on the move. What began as solo adventures soon turned into unforgettable journeys with friends, deepening her love for new places and cultures. Travel isn’t just a passion for her it’s a way of life. Inspired by her own experiences, she founded this company to create meaningful, immersive journeys that help others craft memories beyond the guidebooks—authentic, personal, and unforgettable.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Jinit Thakkar",
    position: "Co-Founder, Voluntary Assistance and Tech Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Jinit has always held a deep passion for the way travel connects individuals to diverse places, cultures, and narratives. Motivated by this belief, he co-founded the company with the vision of enabling others to experience the authentic essence of each destination. Beyond iconic landmarks, he emphasizes the importance of engaging with local cuisine, customs, and daily life—elements that truly define a place. His mission is to simplify and enrich the travel experience, empowering people to explore, discover, and appreciate the world in its fullest form.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
];

const TeamSection = () => {
  return (
    <section className="py">
      
      <div className="container-custom">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold mb-4 text-travel-earth-light">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The ideal set of extraordinary people</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-travel-sand-light">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-travel-earth-light mb-1">{member.name}</h3>
              <p className="text-xl text-gray-600 mb-3">{member.position}</p>

              <div className="border-t border-gray-200 pt-4 w-full">
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;