import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileNavigationItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-travel-cloud-white/20 pb-3">
      <button 
        className="text-travel-cloud-white flex items-center justify-between w-full py-2"
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
          <div className="text-travel-cloud-white space-y-3">
            <div>
              <h4 className="font-medium mb-1">Regions</h4>
              <ul className="space-y-1 pl-2">
                <li><Link to="/trips?region=europe" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Europe</Link></li>
                <li><Link to="/trips?region=asia" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Asia</Link></li>
                <li><Link to="/trips?region=africa" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Africa</Link></li>
                <li><Link to="/trips?region=america" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Americas</Link></li>
              </ul>
            </div>
            <Link to="/trips" className="block text-travel-cloud-white font-medium underline">See All Destinations</Link>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="Ways to Travel">
          <div className="text-travel-cloud-white space-y-3">
            <ul className="space-y-1">
              <li><Link to="/ways-to-travel/tour-styles" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Tour Styles</Link></li>
              <li><Link to="/ways-to-travel/group-travel" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Group Travel</Link></li>
              <li><Link to="/ways-to-travel/tailor-made" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Tailor Made Tours</Link></li>
              <li><Link to="/trips?collection=women-only" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Women-Only Tours</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="Expert Travel Advice">
          <div className="text-travel-cloud-white space-y-1">
            <ul>
              <li><Link to="/blog" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Travel Blog</Link></li>
              <li><Link to="/travel-tips" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Travel Tips & Guides</Link></li>
              <li><Link to="/packing-list" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Packing Lists</Link></li>
              <li><Link to="/travel-insurance" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Travel Insurance</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <MobileNavigationItem title="About Us">
          <div className="text-travel-cloud-white space-y-1">
            <ul>
              <li><Link to="/about" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Our Story</Link></li>
              <li><Link to="/team" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Meet Our Team</Link></li>
              <li><Link to="/gallery" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Gallery</Link></li>
              <li><Link to="/faq" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">FAQs</Link></li>
              <li><Link to="/contact" className="text-travel-cloud-white/80 hover:text-travel-cloud-white">Contact Us</Link></li>
            </ul>
          </div>
        </MobileNavigationItem>
        
        <div className="flex items-center text-travel-cloud-white mt-4">
          <Phone size={20} className="mr-2" />
          <span className="font-medium">1.888.680.1241</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
