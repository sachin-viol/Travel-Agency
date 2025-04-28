import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import Navbar from './Navbar';

const teamMembers = [
  {
    name: "Govind Gaur",
    position: "CEO, Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "Govind is a visionary travelpreneur with an experience of leading more than 200 community trips. He's fond of all kinds of voyages, yet his favourite are motorbike expeditions, having accounts for 30000kms of extreme rides. He can hold a conversation around business, human values and almost everything one can think of. The man knows how to get down to work and party, equally well.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Madhusudan Jaju",
    position: "Head of Finance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Madusudhan is a passionate learner, and an instinctive marketer. He has led more than 40 trips and has taken his hot wheels on a ride of total 50,000kms. He has a habit of finding a path even where it seems impossible, that is why he has been to over 30 treks, some well known, others unexplored. Being an avid reader, he is the perfect motivational speaker for the team.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Chirag Jain",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "Chirag is a strong analyst of travel operations, and thus heads the responsibility of running the entire show. Just like Sindbad the Sailor, he finds out the most interesting experiences and tests them all before presenting to the community. With so many duties to perform, it is hard to believe that he managed to code the html and css for this website!",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "Priya brings over a decade of marketing expertise to our team. With her strategic vision and creative approach, she has successfully positioned WANDERLUX as a premium travel brand across digital platforms. Her passion for storytelling helps us connect with travelers looking for authentic experiences.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Rahul Mehra",
    position: "Experience Designer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "Rahul has traveled to over 40 countries and brings that global perspective to our trip design. He works meticulously to craft journeys that balance popular attractions with hidden gems. His expertise in local cuisines and cultural experiences ensures that every itinerary offers something truly memorable.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Ananya Patel",
    position: "Customer Relations",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Ananya is the warm, friendly voice of WANDERLUX. Her exceptional people skills and attention to detail ensure that every traveler feels valued and understood. Having led over 25 group trips herself, she knows exactly how to address concerns and create a supportive environment for our community.",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="py">
      
      <div className="container-custom">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold mb-4 text-travel-earth-light">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The ideal set of extraordinary people</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
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

              <div className="flex space-x-3 mb-4">
                <a href={member.social.linkedin} className="text-travel-teal hover:text-travel-earth-light transition-colors">
                  <Linkedin />
                </a>
                <a href={member.social.instagram} className="text-travel-teal hover:text-travel-earth-light transition-colors">
                  <Instagram />
                </a>
              </div>

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