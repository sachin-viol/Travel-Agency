import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileNavigationItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 pb-3">
      <button 
        className="text-white flex items-center justify-between w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{title}</span>
        <ChevronDown 
          size={18} 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

const MobileNavigation = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-travel-earth absolute top-full left-0 w-full shadow-md">
      <div className="container-custom py-4 flex flex-col space-y-2">
        <MobileNavigationItem title="Destinations">
          <div className="text-white space-y-3">
            <div>
              <h4 className="font-medium mb-1">Regions</h4>
              <ul className="space-y-1 pl-2">
                <li><Link to="/trips?region=europe" className="text-white/80 hover:text-white">Europe</Link></li>
                <li><Link to="/trips?region=asia" className="text-white/80 hover:text-white">Asia</Link></li>
                <li><Link to="/trips?region=africa" className="text-white/80 hover:text-white">Africa</Link></li>
                <li><Link to="/trips?region=america" className="text-white/80 hover:text-white">Americas</Link></li>
              </ul>
            </div>
            <Link to="/trips" className="block text-white font-medium underline">See All Destinations</Link>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="Ways to Travel">
          <div className="text-white space-y-3">
            <ul className="space-y-1">
              <li><Link to="/ways-to-travel/tour-styles" className="text-white/80 hover:text-white">Tour Styles</Link></li>
              <li><Link to="/ways-to-travel/group-travel" className="text-white/80 hover:text-white">Group Travel</Link></li>
              <li><Link to="/ways-to-travel/tailor-made" className="text-white/80 hover:text-white">Tailor Made Tours</Link></li>
              <li><Link to="/trips?collection=women-only" className="text-white/80 hover:text-white">Women-Only Tours</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="Expert Travel Advice">
          <div className="text-white space-y-1">
            <ul>
              <li><Link to="/blog" className="text-white/80 hover:text-white">Travel Blog</Link></li>
              <li><Link to="/travel-tips" className="text-white/80 hover:text-white">Travel Tips & Guides</Link></li>
              <li><Link to="/packing-list" className="text-white/80 hover:text-white">Packing Lists</Link></li>
              <li><Link to="/travel-insurance" className="text-white/80 hover:text-white">Travel Insurance</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="About Us">
          <div className="text-white space-y-1">
            <ul>
              <li><Link to="/about" className="text-white/80 hover:text-white">Our Story</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-white">Meet Our Team</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-white">Gallery</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white">FAQs</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <div className="flex items-center text-white mt-4">
          <Phone size={20} className="mr-2" />
          <span className="font-medium">1.888.680.1241</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
