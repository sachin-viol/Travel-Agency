import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Heart, MapPin, Star, Coffee, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';

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
          <div className="container-custom">            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth" style={{ color: "#4AA3DF" }}>
              Current Opportunities
            </h2>
            <p className="text-lg text-travel-earth-light max-w-3xl mx-auto mb-8">
              We're looking for passionate individuals to join our team and help create unforgettable travel experiences.
            </p>

            <div className="max-w-6xl mx-auto space-y-8">
              {/* Job Posting 1: Group Trip Leader */}
              <Card className="bg-travel-earth/5 border-none shadow-sm" style={{ backgroundColor: "#F8FCFF" }}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-travel-teal p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-travel-earth text-left" style={{ color: "#4AA3DF" }}>
                          🌍 We're Hiring: Group Trip Leader
                        </h3>
                        <p className="text-travel-earth-light">Posted on June 1, 2025</p>
                      </div>
                    </div>
                    <span className="bg-travel-teal/20 text-travel-teal px-4 py-1 rounded-full font-medium">
                      Trip-Based
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                    {/* Left side - Job Details */}
                    <div className='col-span-3'>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            ✨ About Wander Tribe
                          </h4>
                          <p className="text-travel-earth-light">
                            Wander Tribe is a travel company built for the curious, the adventurous, and the community-seekers aged 18–35. We design offbeat, immersive travel experiences that help solo travelers and small groups connect — not just with places, but with each other.<br />

                            Our mission is simple: <b>make travel feel like home, no matter where you are.
                            </b>{" "}
                            From backpacking adventures to culture-rich getaways, we curate every trip to be safe, exciting, and unforgettable.
                            We’re growing fast — and now we’re looking for travel-loving humans to lead the way.

                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            🎒 About the Role
                          </h4>
                          <p className="text-travel-earth-light">
                            As a <b>Wander Tribe Trip Leader</b>, you’ll accompany small-group trips across India. Each trip is a chance to connect with travelers, guide them through unforgettable moments, and ensure the experience runs smoothly from start to finish.
                            <br />
                            You're not just a trip leader. You’re the connector, problem-solver, vibe-setter, and go-to guide. You’ll bring energy, empathy, and calm leadership — all while having fun doing what you love.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            💼 What You'll Do
                          </h4>
                          <ul className="space-y-2 text-travel-earth-light">
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Host and guide group trips (10–30 travelers)
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Keep the group informed, engaged, and safe                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Participate in daily activities like hikes, boat trips, nightlife, and food experiences                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Coordinate logistics with local vendors, drivers, and guides
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Handle trip admin (expenses, check-ins, emails) and gather post-trip reviews
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Represent Wander Tribe with positivity, professionalism, and people-first energy
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            ✅ What We're Looking For

                          </h4>
                          <p className='text-travel-earth-light'> You must be:</p>
                          <ul className="space-y-2 text-travel-earth-light ml-3">
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              <b>Based in India</b>
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Fluent in <b>English and Hindi</b>
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Comfortable with international and domestic travel                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Outgoing, organized, calm under pressure
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Energetic and excited to meet and lead diverse groups
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Able to confidently manage safety and logistics on the go
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Open to working odd hours, sharing space with groups, and being fully present during trips
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            💬 Important to Know
                          </h4>
                          <p className="text-travel-earth-light mb-2">
                            This is <b>not a holiday</b> — your travelers are on vacation, but you're there to <b>make it seamless, fun, and unforgettable.</b> <br />
                            You might repeat the same itinerary, handle unpredictable challenges, or deal with difficult group dynamics — but if you're a people person with a passion for travel, it's one of the most rewarding roles out there.                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            📩 How to Apply
                          </h4>
                          <p className="text-travel-earth-light">
                            Excited to lead the way?<br /> Let’s talk.
                            👉 Apply via the form (https://forms.gle/GbJppWvoYPDCVU5y9) or send your resume to  <span className="text-travel-terracotta font-medium" style={{ color: "#F47B56" }}>career@wandertribe.co.in</span> with the subject line "Group Trip Leader Application"
                          </p>
                        </div>

                        <div className="mt-8">
                          <Link to="https://forms.gle/GbJppWvoYPDCVU5y9" target="_blank" >
                            <Button className="bg-travel-teal hover:bg-travel-teal/90 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
                              Apply Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Job Information */}
                    <div className="text-left col-span-1">
                      <h3 className="text-2xl font-bold mb-6 text-travel-earth" style={{ color: "#4AA3DF" }}>
                        Job Details
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Location</p>
                          <p className="text-travel-earth-dark font-bold">Remote</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Date Posted</p>
                          <p className="text-travel-earth-dark font-bold">June 1, 2025</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Job Type</p>
                          <p className="text-travel-earth-dark font-bold">Freelance Contract</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Compensation</p>
                          <p className="text-travel-earth-dark font-bold">Paid Per Trip</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Department</p>
                          <p className="text-travel-earth-dark font-bold">Trip Leaders</p>
                        </div>

                        <div className="flex items-center justify-start mt-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-travel-earth/10" style={{ backgroundColor: "rgba(74, 163, 223, 0.1)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-travel-earth" style={{ color: "#4AA3DF" }}>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 8v4M12 16h.01"></path>
                            </svg>
                          </span>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Travel Required</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Posting 2: Social Media Content Creator */}
              <Card className="bg-travel-earth/5 border-none shadow-sm" style={{ backgroundColor: "#F8FCFF" }}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-travel-sand p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-travel-earth" style={{ color: "#4AA3DF" }}>
                          📱 We're Hiring: Social Media Content Creator
                        </h3>
                        <p className="text-travel-earth-light">Posted on June 1, 2025</p>
                      </div>
                    </div>
                    <span className="bg-travel-sand/20 text-travel-sand px-4 py-1 rounded-full font-medium">
                      Freelance
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                    {/* Left side - Job Details */}
                    <div className='col-span-3'>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            ✨ About Wander Tribe
                          </h4>
                          <p className="text-travel-earth-light">
                            Wander Tribe is a travel company built for the curious, the adventurous, and the community-seekers aged 18–35. We design offbeat, immersive travel experiences that help solo travelers and small groups connect — not just with places, but with each other.<br />

                            Our mission is simple: <b>make travel feel like home, no matter where you are.
                            </b>{" "}
                            From backpacking adventures to culture-rich getaways, we curate every trip to be safe, exciting, and unforgettable.
                            We’re growing fast — and now we’re looking for travel-loving humans to lead the way.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            🎒 About the Role
                          </h4>
                          <p className="text-travel-earth-light">
                            As our <b>Social Media Content Creator</b>, you’ll be the voice and visual vibe of Wander Tribe across platforms like <b>Instagram, YouTube, and Pinterest.</b><br />
                            From Reels and travel memes to behind-the-scenes edits and destination stories — you’ll craft content that sparks FOMO and feels authentic.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            💼 What You'll Do
                          </h4>
                          <ul className="space-y-2 text-travel-earth-light">
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Plan and create short-form video content (Reels, Shorts, Stories) for Instagram & YouTube
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Develop content ideas around travel, storytelling, founder journeys, and community moments
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Edit photos/videos from our trips into engaging, on-brand visuals
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Write compelling captions and storylines that connect with Gen Z and millennial audiences
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Help maintain a content calendar and post consistently
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Support content creation for trip promotions, hiring posts, founder intros, and community shoutouts
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Contribute to growing engagement, shares, saves, and overall brand presence
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            ✅ What We're Looking For
                          </h4>
                          <ul className="space-y-2 text-travel-earth-light">
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Strong understanding of trends on <b>Instagram Reels, YouTube Shorts, and meme culture</b>
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Proficiency in <b>video editing tools</b> (CapCut, Adobe Premiere, InShot, Canva, etc.)
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              A solid eye for <b>aesthetic visuals, clean layout, and emotional hooks</b>
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Creative and witty writing skills — you get our audience’s tone
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Bonus if you love travel and have experience in capturing moments on the go
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Comfortable working independently and responding quickly to trends or deadlines
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Ability to pitch new content ideas and adapt voice/tone for each platform
                            </li>
                          </ul>
                        </div>

                        {/* <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            💬 Important to Know
                          </h4>
                          <p className="text-travel-earth-light mb-2">
                            This is a remote freelance position with the opportunity to travel on select trips to create content. We're looking for someone who can commit to consistent deliverables on a monthly basis.
                          </p>
                        </div> */}

                        <div>
                          <h4 className="font-bold text-travel-earth text-xl mb-3" style={{ color: "#4AA3DF" }}>
                            📩 How to Apply
                          </h4>
                          <p className="text-travel-earth-light mb-2">Send us:</p>
                          <ul className="space-y-2 text-travel-earth-light ml-3">
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              Your <b> <p>{" "}</p>resume or portfolio </b>
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              2–3 content samples or mock Reels you’ve created (travel-related if possible)
                            </li>
                            <li className="flex items-start">
                              <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                              A short note on why you’d love to work with Wander Tribe
                            </li>
                          </ul>
                          <br />
                          <p className="text-travel-earth-light">📧 Apply at <b>career@wandertribe.co.in</b><br />
                            📲 Or DM us on Instagram{" "}
                            <Link to="https://www.instagram.com/wandertribe.co/" target="_blank" className="text-travel-terracotta font-medium" style={{ color: "#F47B56" }}>@wandertribe.co</Link> with your content samples and a brief intro.<br />
                            if you're more of a “show, don’t tell” kind of creator 😉</p>
                        </div>

                        <div className="mt-8">
                          <Button className="bg-travel-sand hover:bg-travel-sand/90 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Job Information */}
                    <div className="text-left col-span-1">
                      <h3 className="text-2xl font-bold mb-6 text-travel-earth" style={{ color: "#4AA3DF" }}>
                        Job Details
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Location</p>
                          <p className="text-travel-earth-dark font-bold">Remote</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Date Posted</p>
                          <p className="text-travel-earth-dark font-bold">June 1, 2025</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Job Type</p>
                          <p className="text-travel-earth-dark font-bold">Freelance</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Compensation</p>
                          <p className="text-travel-earth-dark font-bold">Project-Based</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Department</p>
                          <p className="text-travel-earth-dark font-bold">Marketing</p>
                        </div>

                        <div className="flex items-center justify-start mt-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-travel-earth/10" style={{ backgroundColor: "rgba(74, 163, 223, 0.1)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-travel-earth" style={{ color: "#4AA3DF" }}>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 8v4M12 16h.01"></path>
                            </svg>
                          </span>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>Some Travel Required</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Open to Future Possibilities Section */}
              <Card className="bg-travel-earth/5 border-none shadow-sm" style={{ backgroundColor: "#F8FCFF" }}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left side - Open to Future Possibilities */}
                    <div className='col-span-3'>
                      <h3 className="text-2xl font-bold mb-4 text-travel-earth" style={{ color: "#4AA3DF" }}>
                        Don't See a Perfect Fit? Send Us Your Application
                      </h3>
                      <p className="mb-6 text-travel-earth-light">
                        Even if these positions don't match your skills, we're always interested in meeting talented
                        individuals passionate about travel and exceptional customer experiences. Send us your resume
                        and a cover letter explaining why you'd be a perfect addition to our WANDER TRIBE family.
                      </p>

                      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                        <p className="text-center font-medium text-travel-earth">
                          Send your application to: <span className="text-travel-terracotta" style={{ color: "#F47B56" }}>career@wandertribe.co.in</span>
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-travel-earth text-center" style={{ color: "#4AA3DF" }}>
                          Include in your application:
                        </h4>
                        <ul className="space-y-2 text-travel-earth-light">
                          <li className="flex items-start">
                            <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                            Your resume highlighting relevant experience
                          </li>
                          <li className="flex items-start">
                            <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                            A cover letter explaining your passion for travel and why you want to join
                            WANDER TRIBE
                          </li>
                          <li className="flex items-start">
                            <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                            Portfolio of work (if applicable to your field)
                          </li>
                          <li className="flex items-start">
                            <span className="text-travel-terracotta mr-2" style={{ color: "#F47B56" }}>•</span>
                            Types of positions you're interested in
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Side - Job Information */}
                    <div className="text-left col-span-1">
                      <h3 className="text-2xl font-bold mb-6 text-travel-earth" style={{ color: "#4AA3DF" }}>
                        Our Hiring Process
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>1. Application Review</p>
                          <p className="text-travel-earth-light">We review all applications carefully</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>2. Initial Interview</p>
                          <p className="text-travel-earth-light">Virtual meeting with our team</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>3. Skills Assessment</p>
                          <p className="text-travel-earth-light">Role-specific task or presentation</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>4. Final Interview</p>
                          <p className="text-travel-earth-light">Meet with leadership team</p>
                        </div>

                        <div>
                          <p className="font-medium text-travel-earth" style={{ color: "#4AA3DF" }}>5. Offer</p>
                          <p className="text-travel-earth-light">Welcome to the tribe!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </section>        {/* Call to Action */}
        <section className="py-16 bg-travel-earth text-white border-b-2 border-travel-earth-light">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey With Us?
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              We have exciting opportunities waiting for you! Join our team of passionate travel enthusiasts and help create unforgettable experiences.
            </p>
            <Button className="bg-travel-sand hover:bg-travel-sand/90 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
              View Current Openings
            </Button>
          </div>
        </section>

        <Footer />
      </div >
    </div >
  );
};

export default Careers;



{/* Team Testimonials */ }
{/* <section className="py-16 bg-travel-teal/10">
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
      </section> */}

{/* Career Growth & Learning */ }
{/* <section className="py-16 bg-white">
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
      </section> */}
