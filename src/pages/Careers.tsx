import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripHero from '@/components/TripHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Award, Users, Heart, MapPin, Star, Coffee, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Careers"
        description="Learn about our story, mission, and the passionate team behind WANDER TRIBE"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="py-16">


      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">
              Our Team Values
            </h2>
            <p className="text-lg text-travel-earth-light max-w-3xl mx-auto">
              At WANDER TRIBE, we're committed to building an environment where passionate individuals can thrive while creating unforgettable travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-travel-teal border-t-4 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-travel-teal-light/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Heart className="text-travel-teal h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-travel-earth">Passion for Travel</h3>
                <p className="text-travel-earth-light">
                  We believe in the transformative power of travel and bring our own enthusiasm to every trip we curate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-travel-sand border-t-4 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-travel-sand-light/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="text-travel-sand h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-travel-earth">Collaborative Spirit</h3>
                <p className="text-travel-earth-light">
                  We work together across teams to create seamless, exceptional experiences for our travelers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-travel-terracotta border-t-4 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-travel-terracotta/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Award className="text-travel-terracotta h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-travel-earth">Excellence</h3>
                <p className="text-travel-earth-light">
                  We strive for excellence in everything we do, from trip planning to customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-travel-earth/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">
              Why Work With Us
            </h2>
            <p className="text-lg text-travel-earth-light max-w-3xl mx-auto">
              We offer competitive benefits and a unique work environment that supports your growth and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-travel-teal">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-travel-earth">Travel Opportunities</h3>
              <p className="text-travel-earth-light text-sm">
                Experience destinations firsthand with generous travel benefits and familiarization trips.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-travel-sand">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-travel-earth">Flexible Schedule</h3>
              <p className="text-travel-earth-light text-sm">
                Maintain work-life balance with flexible work arrangements and remote options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-travel-terracotta">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-travel-earth">Career Growth</h3>
              <p className="text-travel-earth-light text-sm">
                Develop your skills through mentorship, training, and advancement opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-travel-teal-light">
                <Coffee size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-travel-earth">Vibrant Culture</h3>
              <p className="text-travel-earth-light text-sm">
                Join a diverse team of travel enthusiasts in a collaborative and fun work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">
              Current Opportunities
            </h2>
            <p className="text-lg text-travel-earth-light max-w-3xl mx-auto mb-8">
              While we don't have any open positions right now, we're always interested in meeting talented individuals passionate about travel and exceptional customer experiences.
            </p>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-travel-earth/5 border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-travel-earth">Open to Future Possibilities?</h3>
                  <p className="mb-6 text-travel-earth-light">
                    Send us your resume and a cover letter explaining why you'd be a perfect addition to our WANDER TRIBE family. We'll keep your information on file and reach out when a suitable position becomes available.
                  </p>

                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="text-center font-medium text-travel-earth">
                      Send your application to: <span className="text-travel-terracotta">careers@wanderTRIBE.com</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-travel-earth">Include in your application:</h4>
                    <ul className="space-y-2 text-travel-earth-light">
                      <li className="flex items-start">
                        <span className="text-travel-terracotta mr-2">•</span>
                        Your resume highlighting relevant experience
                      </li>
                      <li className="flex items-start">
                        <span className="text-travel-terracotta mr-2">•</span>
                        A cover letter explaining your passion for travel and why you want to join WANDER TRIBE
                      </li>
                      <li className="flex items-start">
                        <span className="text-travel-terracotta mr-2">•</span>
                        Portfolio of work (if applicable to your field)
                      </li>
                      <li className="flex items-start">
                        <span className="text-travel-terracotta mr-2">•</span>
                        Types of positions you're interested in
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-travel-teal/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">
              Voices from Our Team
            </h2>
            <p className="text-lg text-travel-earth-light max-w-3xl mx-auto">
              Hear from the people who make WANDER TRIBE an amazing place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-travel-earth">Sarah Johnson</h3>
                    <p className="text-travel-earth-light text-sm">Trip Coordinator, 3 years</p>
                  </div>
                  <Badge className="bg-travel-teal text-white">Leadership</Badge>
                </div>
                <p className="text-travel-earth-light italic">
                  "Working at WANDER TRIBE has given me the opportunity to combine my organizational skills with my passion for travel. Every day brings new challenges and adventures, and I love being able to create memorable experiences for our clients."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-travel-earth">Marcus Chen</h3>
                    <p className="text-travel-earth-light text-sm">Destination Specialist, 5 years</p>
                  </div>
                  <Badge className="bg-travel-sand text-travel-earth">Expert</Badge>
                </div>
                <p className="text-travel-earth-light italic">
                  "The collaborative environment at WANDER TRIBE allows me to continuously grow my expertise. I've been able to explore new destinations, expand my knowledge, and work with an incredible team that feels like family."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Growth & Learning */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">
                Grow Your Career With Us
              </h2>
              <p className="text-lg text-travel-earth-light mb-6">
                At WANDER TRIBE, we believe in investing in our team members' growth and development. We provide opportunities to expand your skills, knowledge, and career path.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-travel-terracotta/20 p-2 rounded-full mr-4 mt-1">
                    <Briefcase size={16} className="text-travel-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-bold text-travel-earth">Professional Development</h3>
                    <p className="text-travel-earth-light">
                      Access to industry certifications, conferences, and training programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-travel-teal/20 p-2 rounded-full mr-4 mt-1">
                    <Users size={16} className="text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-travel-earth">Mentorship Program</h3>
                    <p className="text-travel-earth-light">
                      Learn from experienced team members through our structured mentorship initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-travel-sand/20 p-2 rounded-full mr-4 mt-1">
                    <MapPin size={16} className="text-travel-sand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-travel-earth">Destination Familiarity</h3>
                    <p className="text-travel-earth-light">
                      Opportunities to experience our destinations firsthand to build expertise.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-travel-terracotta hover:bg-travel-terracotta/90 text-white">
                Learn More
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team members collaborating"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-travel-earth text-white border-b-2 border-travel-earth-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey With Us?
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            Even without current openings, we're always looking for exceptional talent to join our team when opportunities arise.
          </p>
          <Button className="bg-travel-sand hover:bg-travel-sand/90 text-travel-earth px-6 py-3 rounded-md shadow-md transition-all duration-300">
            Submit Your Application
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </div>
  );
};

export default Careers;
