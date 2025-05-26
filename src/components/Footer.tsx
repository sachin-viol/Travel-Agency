import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-travel-earth-light text-travel-cloud-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-4 relative pr-6">
              <span className='text-travel-earth font-bold'>WANDER <span className='text-travel-warm-orange'>TRIBE</span></span>
              {/* <span className="block absolute -bottom-1 left-0 w-16 h-1 bg-travel-terracotta"></span> */}
            </h3>
            <p className="text-white/80 mb-6">
              Join our tribe and discover the world's most breathtaking destinations with like-minded travelers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/wandertribe.co?igsh=emZpaTZldHB4eGxx&utm_source=qr" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/16a4KcmWwz/?mibextid=wwXIfr" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Facebook size={20} />
              </a>

              <a href="https://youtube.com/@justwandertribe?si=8Gh47pavwBFOMJGI" className="text-white/80 hover:text-travel-sand transition-colors hover-lift">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animate-stagger-1">
            <h4 className="text-lg font-bold mb-4 relative">
              Quick Links
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/trips", label: "Our Trips" },
                { to: "/blog", label: "Travel Blog" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" }
              ].map((link, index) => (
                <li key={link.to} style={{ animationDelay: `${(index + 1) * 100}ms` }} className="animate-fade-in">
                  <Link to={link.to} className="text-white/80 hover:text-travel-sand transition-colors flex items-center sidebar-link">
                    <span className="text-travel-sand mr-2">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          {/* <div className="animate-fade-in animate-stagger-2">
            <h4 className="text-lg font-bold mb-4 relative">
              Popular Destinations
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/destinations/switzerland", label: "Switzerland" },
                { to: "/destinations/japan", label: "Japan" },
                { to: "/destinations/costa-rica", label: "Costa Rica" },
                { to: "/destinations/peru", label: "Peru" },
                { to: "/destinations/new-zealand", label: "New Zealand" }
              ].map((destination, index) => (
                <li key={destination.to} style={{ animationDelay: `${(index + 1) * 100}ms` }} className="animate-fade-in">
                  <Link to={destination.to} className="text-white/80 hover:text-travel-sand transition-colors flex items-center sidebar-link">
                    <span className="text-travel-sand mr-2">›</span> {destination.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}


          {/* Contact Info */}
          <div className="anim  ate-fade-in animate-stagger-3">
            <h4 className="text-lg font-bold mb-4 relative">
              Contact Us
              <span className="block absolute -bottom-1 left-0 w-12 h-0.5 bg-travel-teal"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1 text-travel-sand" />
                <span className="text-white/80">
                  Rosa Elite 1st floor <br />
                  Thane west 400615
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-travel-sand" />
                <a href="tel:+14155552671" className="text-white/80 hover:text-travel-sand transition-colors sidebar-link">
                  +91 9326412687
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-travel-sand" />
                <a href="mailto: info@wandertribe.co.in" className="text-white/80 hover:text-travel-sand transition-colors sidebar-link">
                  info@wandertribe.co.in
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in animate-stagger-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7531.787612610198!2d72.94541208623305!3d19.286983737784173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb0324914c3f%3A0xb21bc2c2e8a8363c!2sRosa%20Elite%20A%20CHSL!5e0!3m2!1sen!2sin!4v1745953734660!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-travel-cloud-white/20 pt-8 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Join Our Newsletter</h4>
            <p className="text-travel-cloud-white/80 mb-4">
              Subscribe to receive updates on new destinations, special offers, and travel tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-800 flex-1 focus:outline-none focus:ring-2 focus:ring-travel-teal"
              />
              <button
                type="submit"
                className="bg-travel-teal hover:bg-travel-teal-light px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-travel-cloud-white/20 mt-8 pt-8 text-center text-travel-cloud-white/60 text-sm">
          <p>© {currentYear} WANDER TRIBE. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-travel-cloud-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-travel-cloud-white transition-colors">Terms of Service</Link>
            <Link to="/cancellation-policy" className="hover:text-travel-cloud-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
