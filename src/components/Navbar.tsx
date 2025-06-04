import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Adjust the import path as per your setup
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      { label: "Upcoming", href: "/#upcoming-trips" },
      { label: "Ongoing", href: "/trips" },
      { label: "Past", href: "/past-trips" },
    ],
    experience: [
      { label: "Reviews", href: "/reviews" },
      { label: "Gallery", href: "/gallery" },
    ],
    aboutUs: [
      { label: "Our Story", href: "/about" },
      { label: "Meet Our Team", href: "/team" },
      { label: "Career", href: "/career" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Feedback", href: "/feedback" },
    ],
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  ${scrolled ? "bg-white shadow-md py-6" : " md:py-6 py-4"
        }`}>
      <div
        className={`container mx-auto px-4 flex justify-between items-center   ${scrolled
          ? ""
          : " border-2 border-white/30 py-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg"
          }`}>
        {/* Logo */}
        <Link to="/">
          {/* <div className="flex items-center cursor-pointer font-['Alkaline'] italic"  style={{ fontFamily: 'Alkaline, sans-serif' }}>
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-400' : 'text-blue-300'}`}>
              Wander
            </span>
            <span className={`text-2xl font-bold ${scrolled ? 'text-orange-500' : 'text-orange-400'}`}>
              Tribe
            </span>
          </div> */}
          <img src="/Logo1.png" alt="LOGO" className="w-[210px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" text="Home" scrolled={scrolled} />

          <NavLink href="/trips" text="Trips" scrolled={scrolled} />

          <NavLink href="/blogs" text="Blogs" scrolled={scrolled} />

          {/* Experience Dropdown */}
          {/* <div className="relative group">
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
          </div> */}

          {/* About Us Dropdown */}
          <div className="hidden md:block mr-5 z-0 relative">
            <DropdownMenu onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className={ `ring-0 flex items-center font-medium transition-colors duration-300 ${scrolled
                    ? "text-travel-earth-light hover:text-blue-600"
                    : "text-white hover:text-blue-200 mr-3"
                    }`}
                >
                  About Us
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-" : "rotate-0"
                      }`}
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-44 bg-white rounded-md shadow-lg py-1 z-50  whitespace-nowrap">
                {dropdownMenus.aboutUs.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    asChild
                    className="text-travel-earth-light hover:bg-travel-earth/20 cursor-pointer"
                  >
                    <Link to={item.href} className=" px-4 py-2 block">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${scrolled ? "text-travel-earth-light" : "text-travel-earth-light"
              }`}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            {/* <div className="py-2">
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
            </div> */}

            <MobileNavLink href="/trips" text="Trips" />
            <MobileNavLink href="/blogs" text="Blogs" />

            {/* Mobile Experience Dropdown */}
            <div className="py-2">
              <button
                onClick={() => toggleDropdown("mobileExperience")}
                className="flex items-center justify-between w-full text-travel-earth-light hover:bg-travel-earth/20 px-3 py-2 rounded-md">
                <span>Experience</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mobileExperience"
                    ? "transform rotate-180"
                    : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobileExperience" && (
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
                onClick={() => toggleDropdown("mobileAboutUs")}
                className="flex items-center justify-between w-full text-travel-earth-light hover:bg-travel-earth/20 px-3 py-2 rounded-md">
                <span>About Us</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mobileAboutUs"
                    ? "transform rotate-180"
                    : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobileAboutUs" && (
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
      <div
        className={`cursor-pointer ${scrolled
          ? "text-travel-earth-light hover:text-blue-600"
          : "text-white hover:text-blue-200"
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
