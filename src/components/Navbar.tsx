
// import { useState, useEffect } from 'react';
// import { Menu, X, Search, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import DesktopNavigation from './Navbar/DesktopNavigation';
// import MobileNavigation from './Navbar/MobileNavigation';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu when window is resized to desktop view
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Close mobile menu when route changes (using URL)
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false);
//     };

//     // This will detect URL changes
//     window.addEventListener('popstate', handleRouteChange);
//     return () => window.removeEventListener('popstate', handleRouteChange);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 text-travel-earth-light' : ' py-4 '}`}>
//       <div className="container flex justify-evenly items-center px-4">
//         <div className='flex items-center space-x-4 w-full'>
//           <Link to="/" className="text-2xl font-bold text-travel-earth">WANDER <span className='text-travel-warm-orange'>TRIBE</span> 
//           {/* <img src="/unnamed.ico" alt="Logo" className='w-16' /> */}
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <DesktopNavigation />

//         {/* Mobile Navigation Toggle */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button
//             className="text-travel-cloud-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-expanded={isOpen}
//             aria-label="Toggle navigation menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <MobileNavigation isOpen={isOpen} />
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Define dropdown menus
  const dropdownMenus = {
    trips: [
      { label: 'Upcoming', href: '/#upcoming-trips' },
      { label: 'Ongoing', href: '/trips' },
      { label: 'Past', href: '/past-trips' }
    ],
    experience: [
      { label: 'Reviews', href: '/reviews' },
      { label: 'Gallery', href: '/gallery' }
    ],
    aboutUs: [
      { label: 'Our Story', href: '/about' },
      { label: 'Meet Our Team', href: '/team' },
      { label: 'Career', href: '/careers' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center cursor-pointer font-['Alkaline'] italic"  style={{ fontFamily: 'Alkaline, sans-serif' }}>
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-400' : 'text-blue-300'}`}>
              Wander
            </span>
            <span className={`text-2xl font-bold ${scrolled ? 'text-orange-500' : 'text-orange-400'}`}>
              Tribe
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" text="Home" scrolled={scrolled} />

          <NavLink href="/trips" text="Trips" scrolled={scrolled} />

          <NavLink href="/blogs" text="Blogs" scrolled={scrolled} />

          {/* Experience Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('experience')}
              className={`flex items-center ${scrolled ? 'text-travel-earth-light hover:text-blue-600' : 'text-white hover:text-blue-200'
                } font-medium transition-colors duration-300`}
            >
              Experience
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transform opacity-0 scale-95 
                ${activeDropdown === 'experience' ? 'transform-none opacity-100' : ''} 
                transition-all duration-200 origin-top-left
                group-hover:transform-none group-hover:opacity-100`}
            >
              {dropdownMenus.experience.map((item) => (
                <Link key={item.label} to={item.href}>
                  <div className="block px-4 py-2 text-travel-earth-light hover:bg-travel-earth/20">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('aboutUs')}
              className={`flex items-center ${scrolled ? 'text-travel-earth-light hover:text-blue-600' : 'text-white hover:text-blue-200'
                } font-medium transition-colors duration-300`}
            >
              About Us
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transform opacity-0 scale-95 
                ${activeDropdown === 'aboutUs' ? 'transform-none opacity-100' : ''} 
                transition-all duration-200 origin-top-right
                group-hover:transform-none group-hover:opacity-100`}
            >
              {dropdownMenus.aboutUs.map((item) => (
                <Link key={item.label} to={item.href}>
                  <div className="block px-4 py-2 text-travel-earth-light hover:bg-travel-earth/20">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${scrolled ? 'text-travel-earth-light' : 'text-white'}`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <MobileNavLink href="/" text="Home" />

            {/* Mobile Trips Dropdown */}
            <div className="py-2">
              <button
                onClick={() => toggleDropdown('mobileTrips')}
                className="flex items-center justify-between w-full text-travel-earth-light hover:bg-travel-earth/20 px-3 py-2 rounded-md"
              >
                <span>Trips</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobileTrips' ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobileTrips' && (
                <div className="pl-4 mt-1 space-y-1">
                  {dropdownMenus.trips.map((item) => (
                    <Link key={item.label} to={item.href}>
                      <div className="block px-3 py-2 text-gray-600 hover:bg-travel-earth/20 rounded-md">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <MobileNavLink href="/blogs" text="Blogs" />

            {/* Mobile Experience Dropdown */}
            <div className="py-2">
              <button
                onClick={() => toggleDropdown('mobileExperience')}
                className="flex items-center justify-between w-full text-travel-earth-light hover:bg-travel-earth/20 px-3 py-2 rounded-md"
              >
                <span>Experience</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobileExperience' ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobileExperience' && (
                <div className="pl-4 mt-1 space-y-1">
                  {dropdownMenus.experience.map((item) => (
                    <Link key={item.label} to={item.href}>
                      <div className="block px-3 py-2 text-gray-600 hover:bg-travel-earth/20 rounded-md">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Us Dropdown */}
            <div className="py-2">
              <button
                onClick={() => toggleDropdown('mobileAboutUs')}
                className="flex items-center justify-between w-full text-travel-earth-light hover:bg-travel-earth/20 px-3 py-2 rounded-md"
              >
                <span>About Us</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobileAboutUs' ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobileAboutUs' && (
                <div className="pl-4 mt-1 space-y-1">
                  {dropdownMenus.aboutUs.map((item) => (
                    <Link key={item.label} to={item.href}>
                      <div className="block px-3 py-2 text-gray-600 hover:bg-travel-earth/20 rounded-md">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, text, scrolled }) => {
  return (
    <Link to={href}>
      <div className={`cursor-pointer ${scrolled ? 'text-travel-earth-light hover:text-blue-600' : 'text-white hover:text-blue-200'
        } font-medium transition-colors duration-300`}>
        {text}
      </div>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, text }) => {
  return (
    <Link to={href}>
      <div className="block px-3 py-2 text-travel-earth-light hover:bg-travel-earth/20 rounded-md">
        {text}
      </div>
    </Link>
  );
};

export default Navbar;

