// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const location = useLocation();
//   useEffect(() => {
//     const handleScroll = () => {
//       if (location.pathname === "/") {
//         setIsScrolled(window.scrollY > 50);
//       } else {
//         setIsScrolled(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Run once to set initial state
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]); 

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300  ${isScrolled ? 'bg-travel-earth/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container-custom flex justify-between items-center">
//         <Link to="/" className="text-2xl font-serif font-bold text-white">WANDER TRIBE</Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/about" className="navbar-item">About</Link>
//           <Link to="/trips" className="navbar-item">Trips</Link>
//           <Link to="/blog" className="navbar-item">Blog</Link>
//           <Link to="/past-trips" className="navbar-item">Past Trips</Link>
//           <Link to="/contact" className="navbar-item">Contact</Link>

//           <div className="relative">
//             <button
//               className="navbar-item flex items-center"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
//             >
//               More <ChevronDown className="ml-1 h-4 w-4" />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                 <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">FAQ</Link>
//                 <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">Gallery</Link>
//                 <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-travel-teal-light/10 hover:text-travel-teal">Our Team</Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-travel-earth absolute top-full left-0 w-full shadow-md">
//           <div className="container-custom py-4 flex flex-col space-y-4">
//             <Link to="/about" className="navbar-item">About</Link>
//             <Link to="/trips" className="navbar-item">Trips</Link>
//             <Link to="/blog" className="navbar-item">Blog</Link>
//             <Link to="/past-trips" className="navbar-item">Past Trips</Link>
//             <Link to="/contact" className="navbar-item">Contact</Link>
//             <Link to="/faq" className="navbar-item">FAQ</Link>
//             <Link to="/gallery" className="navbar-item">Gallery</Link>
//             <Link to="/team" className="navbar-item">Our Team</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils";

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

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-travel-earth/95 shadow-md py-2' : 'bg-travel-earth py-4'}`}>
//       <div className="container-custom flex justify-between items-center">
//         <Link to="/" className="text-2xl font-serif font-bold text-white">WANDERLUX</Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center">
//           <NavigationMenu className="mr-4">
//             <NavigationMenuList className="space-x-2">
//               {/* Destinations Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//                   Destinations
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white rounded-md shadow-lg p-4">
//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Regions</h3>
//                       <ul className="space-y-2">
//                         <li><Link to="/trips?region=europe" className="text-gray-700 hover:text-travel-teal">Europe</Link></li>
//                         <li><Link to="/trips?region=middle-east" className="text-gray-700 hover:text-travel-teal">Middle East</Link></li>
//                         <li><Link to="/trips?region=africa" className="text-gray-700 hover:text-travel-teal">Africa</Link></li>
//                         <li><Link to="/trips?region=south-america" className="text-gray-700 hover:text-travel-teal">South America</Link></li>
//                         <li><Link to="/trips?region=asia" className="text-gray-700 hover:text-travel-teal">Asia</Link></li>
//                         <li><Link to="/trips?region=us-canada" className="text-gray-700 hover:text-travel-teal">US & Canada</Link></li>
//                         <li><Link to="/trips?region=australia-nz" className="text-gray-700 hover:text-travel-teal">Australia & New Zealand</Link></li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Top Destinations</h3>
//                       <div className="grid grid-cols-2">
//                         <ul className="space-y-2">
//                           <li><Link to="/trip/italy" className="text-gray-700 hover:text-travel-teal">Italy</Link></li>
//                           <li><Link to="/trip/great-britain" className="text-gray-700 hover:text-travel-teal">Great Britain</Link></li>
//                           <li><Link to="/trip/ireland" className="text-gray-700 hover:text-travel-teal">Ireland</Link></li>
//                           <li><Link to="/trip/germany" className="text-gray-700 hover:text-travel-teal">Germany</Link></li>
//                           <li><Link to="/trip/portugal" className="text-gray-700 hover:text-travel-teal">Portugal</Link></li>
//                           <li><Link to="/trip/scotland" className="text-gray-700 hover:text-travel-teal">Scotland</Link></li>
//                           <li><Link to="/trip/france" className="text-gray-700 hover:text-travel-teal">France</Link></li>
//                         </ul>
//                         <ul className="space-y-2">
//                           <li><Link to="/trip/spain" className="text-gray-700 hover:text-travel-teal">Spain</Link></li>
//                           <li><Link to="/trip/greece" className="text-gray-700 hover:text-travel-teal">Greece</Link></li>
//                           <li><Link to="/trip/croatia" className="text-gray-700 hover:text-travel-teal">Croatia</Link></li>
//                           <li><Link to="/trip/iceland" className="text-gray-700 hover:text-travel-teal">Iceland</Link></li>
//                           <li><Link to="/trip/switzerland" className="text-gray-700 hover:text-travel-teal">Switzerland</Link></li>
//                           <li><Link to="/trip/peru" className="text-gray-700 hover:text-travel-teal">Peru</Link></li>
//                           <li><Link to="/trip/costa-rica" className="text-gray-700 hover:text-travel-teal">Costa Rica</Link></li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Collections</h3>
//                       <ul className="space-y-2">
//                         <li><Link to="/trips?collection=military-tattoo" className="text-gray-700 hover:text-travel-teal">Edinburgh Military Tattoo Tours</Link></li>
//                         <li><Link to="/trips?collection=christmas" className="text-gray-700 hover:text-travel-teal">Europe's Christmas Markets</Link></li>
//                         <li><Link to="/trips?collection=multi-country" className="text-gray-700 hover:text-travel-teal">Multi-Country European Packages</Link></li>
//                         <li><Link to="/trips?collection=cost-saver" className="text-gray-700 hover:text-travel-teal">CostSaver Tours</Link></li>
//                         <li><Link to="/trips?collection=insight" className="text-gray-700 hover:text-travel-teal">Insight Vacations Tours</Link></li>
//                         <li><Link to="/trips?collection=river-cruises" className="text-gray-700 hover:text-travel-teal">Uniworld River Cruises</Link></li>
//                         <li><Link to="/trips?collection=women-only" className="text-gray-700 hover:text-travel-teal">Women-Only Tours</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="mt-6 text-center">
//                     <Link to="/trips" className="bg-travel-teal text-white px-6 py-2 rounded-md hover:bg-travel-earth transition-all duration-300">
//                       Browse All Trips
//                     </Link>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* Ways to Travel Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//                   Ways to Travel
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white rounded-md shadow-lg p-6 w-[800px]">
//                   <div className="grid grid-cols-4 gap-6">
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Tour Styles</h3>
//                       <ul className="space-y-4">
//                         <li>
//                           <h4 className="font-semibold">Discovery Journeys</h4>
//                           <p className="text-sm text-gray-600">See multiple countries on one tour.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Regional Journeys</h4>
//                           <p className="text-sm text-gray-600">Explore one region or country in-depth.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Country Roads</h4>
//                           <p className="text-sm text-gray-600">Go off the beaten track.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Easy Pace</h4>
//                           <p className="text-sm text-gray-600">Stay for at least 3 nights in one location.</p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Group Travel</h3>
//                       <ul className="space-y-4">
//                         <li>
//                           <h4 className="font-semibold">Group Size</h4>
//                           <p className="text-sm text-gray-600">Always smaller groups.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Groups on Set Departures</h4>
//                           <p className="text-sm text-gray-600">Travel with your group and enjoy the benefits.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Private Custom Groups</h4>
//                           <p className="text-sm text-gray-600">Customize your own group tour.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Solo Travel</h4>
//                           <p className="text-sm text-gray-600">Travel solo, travel in style.</p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Tailor Your Tour</h3>
//                       <ul className="space-y-4">
//                         <li>
//                           <h4 className="font-semibold">When to Go Where</h4>
//                           <p className="text-sm text-gray-600">Choose the best destination per month.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Special Interest Tours</h4>
//                           <p className="text-sm text-gray-600">Explore your passions.</p>
//                         </li>
//                         <li>
//                           <h4 className="font-semibold">Personalize Your Tour</h4>
//                           <p className="text-sm text-gray-600">Make your trip your own.</p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-3 text-travel-earth">Women-Only Tours</h3>
//                       <div className="bg-gray-100 p-4 rounded-lg">
//                         <img
//                           src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24"
//                           alt="Women-Only Tours"
//                           className="w-full h-32 object-cover rounded-lg mb-3"
//                         />
//                         <h4 className="font-semibold text-center">Tours For Women By Women</h4>
//                         <p className="text-sm text-gray-600 text-center mt-2">Book now and save 10%*</p>
//                         <Link to="/trips?collection=women-only" className="block text-center mt-3 text-travel-teal hover:underline">
//                           Learn More
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* Expert Travel Advice */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//                   Expert Travel Advice
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white rounded-md shadow-lg p-4 w-[400px]">
//                   <ul className="space-y-2">
//                     <li><Link to="/blog" className="text-gray-700 hover:text-travel-teal">Travel Blog</Link></li>
//                     <li><Link to="/travel-tips" className="text-gray-700 hover:text-travel-teal">Travel Tips & Guides</Link></li>
//                     <li><Link to="/packing-list" className="text-gray-700 hover:text-travel-teal">Packing Lists</Link></li>
//                     <li><Link to="/travel-insurance" className="text-gray-700 hover:text-travel-teal">Travel Insurance</Link></li>
//                     <li><Link to="/visa-requirements" className="text-gray-700 hover:text-travel-teal">Visa Requirements</Link></li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* About Us */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//                   About Us
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white rounded-md shadow-lg p-4 w-[400px]">
//                   <ul className="space-y-2">
//                     <li><Link to="/about" className="text-gray-700 hover:text-travel-teal">Our Story</Link></li>
//                     <li><Link to="/team" className="text-gray-700 hover:text-travel-teal">Meet Our Team</Link></li>
//                     <li><Link to="/gallery" className="text-gray-700 hover:text-travel-teal">Gallery</Link></li>
//                     <li><Link to="/faq" className="text-gray-700 hover:text-travel-teal">FAQs</Link></li>
//                     <li><Link to="/contact" className="text-gray-700 hover:text-travel-teal">Contact Us</Link></li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           {/* Search and Contact */}
//           <div className="flex items-center space-x-4">
//             <button className="text-white hover:text-white/80">
//               <Search size={20} />
//             </button>
//             <div className="flex items-center text-white">
//               <Phone size={20} className="mr-2" />
//               <span className="font-medium">1.888.680.1241</span>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-travel-earth absolute top-full left-0 w-full shadow-md">
//           <div className="container-custom py-4 flex flex-col space-y-4">
//             <div className="border-b border-white/20 pb-3">
//               <button className="text-white flex items-center justify-between w-full">
//                 <span className="text-lg">Destinations</span>
//                 <ChevronDown size={18} />
//               </button>
//             </div>
//             <div className="border-b border-white/20 pb-3">
//               <button className="text-white flex items-center justify-between w-full">
//                 <span className="text-lg">Ways to Travel</span>
//                 <ChevronDown size={18} />
//               </button>
//             </div>
//             <div className="border-b border-white/20 pb-3">
//               <button className="text-white flex items-center justify-between w-full">
//                 <span className="text-lg">Expert Travel Advice</span>
//                 <ChevronDown size={18} />
//               </button>
//             </div>
//             <div className="border-b border-white/20 pb-3">
//               <button className="text-white flex items-center justify-between w-full">
//                 <span className="text-lg">About Us</span>
//                 <ChevronDown size={18} />
//               </button>
//             </div>
//             <div className="flex items-center text-white mt-4">
//               <Phone size={20} className="mr-2" />
//               <span className="font-medium">1.888.680.1241</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import DesktopNavigation from './Navbar/DesktopNavigation';
import MobileNavigation from './Navbar/MobileNavigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes (using URL)
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    // This will detect URL changes
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-travel-earth/95 shadow-md py-2' : 'bg-travel-earth py-4'}`}>
      <div className="container-custom flex justify-evenly items-center">
        <div className='flex items-center space-x-4 w-full'>
          <Link to="/" className="text-2xl font-bold text-white">WANDER TRIBE</Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavigation isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;