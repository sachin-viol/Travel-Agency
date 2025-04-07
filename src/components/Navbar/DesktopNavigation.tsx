// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, Search } from 'lucide-react';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { cn } from '@/lib/utils';

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"

// const DesktopNavigation = () => {

//   // Destinations content
//   const destinations: { title: string; href: string; }[] = [
//     {
//       title: "Europe",
//       href: "/trips?region=europe",
//     },
//     {
//       title: "Middle East",
//       href: "/trips?region=middle-east",
//     },
//     {
//       title: "Africa",
//       href: "/trips?region=africa",
//     },
//     {
//       title: "South America",
//       href: "/trips?region=south-america",
//     },
//     {
//       title: "Asia",
//       href: "/trips?region=asia",
//     },
//     {
//       title: "US & Canada",
//       href: "/trips?region=us-canada",
//     },
//     {
//       title: "Australia & New Zealand",
//       href: "/trips?region=australia-nz",
//     },
//   ]

//   // Ways to Travel content
//   const travelStyles: { title: string; href: string; description: string }[] = [
//     {
//       title: "Discovery Journeys",
//       href: "/travel-styles/discovery",
//       description: "See multiple countries on one tour with comprehensive itineraries.",
//     },
//     {
//       title: "Regional Journeys",
//       href: "/travel-styles/regional",
//       description: "Explore one region or country in-depth with local experiences.",
//     },
//     {
//       title: "Country Roads",
//       href: "/travel-styles/country-roads",
//       description: "Go off the beaten track and discover hidden gems with expert guides.",
//     },
//     {
//       title: "Easy Pace",
//       href: "/travel-styles/easy-pace",
//       description: "Stay for at least 3 nights in one location for a relaxed experience.",
//     },
//     {
//       title: "Group Travel",
//       href: "/travel-styles/group",
//       description: "Join like-minded travelers on carefully curated group adventures.",
//     },
//     {
//       title: "Solo Travel",
//       href: "/travel-styles/solo",
//       description: "Travel solo with the safety and camaraderie of a guided experience.",
//     },
//   ]

//   // Components content (already in the correct format)
//   const components: { title: string; href: string; description: string }[] = [
//     {
//       title: "Alert Dialog",
//       href: "/docs/primitives/alert-dialog",
//       description:
//         "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//       title: "Hover Card",
//       href: "/docs/primitives/hover-card",
//       description:
//         "For sighted users to preview content available behind a link.",
//     },
//     {
//       title: "Progress",
//       href: "/docs/primitives/progress",
//       description:
//         "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//       title: "Scroll-area",
//       href: "/docs/primitives/scroll-area",
//       description: "Visually or semantically separates content.",
//     },
//     {
//       title: "Tabs",
//       href: "/docs/primitives/tabs",
//       description:
//         "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//       title: "Tooltip",
//       href: "/docs/primitives/tooltip",
//       description:
//         "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
//   ]

//   // About Us content
//   const aboutUs: { title: string; href: string; description: string }[] = [
//     {
//       title: "Our Story",
//       href: "/about",
//       description: "Learn about our history and mission to create unforgettable travel experiences.",
//     },
//     {
//       title: "Meet Our Team",
//       href: "/team",
//       description: "Get to know our travel experts who curate exceptional journeys.",
//     },
//     {
//       title: "Gallery",
//       href: "/gallery",
//       description: "View stunning photos from our tours around the world.",
//     },
//     {
//       title: "FAQs",
//       href: "/faq",
//       description: "Find answers to commonly asked questions about our tours and services.",
//     },
//     {
//       title: "Contact Us",
//       href: "/contact",
//       description: "Reach out to our team for personalized assistance with your travel plans.",
//     },
//   ]

//   return (
//     <div className="hidden md:flex items-center justify-between w-full ml-28">
//       <NavigationMenu className="relative">
//         <NavigationMenuList className="flex space-x-1">

//           {/* Destinations Dropdown */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//               Destinations
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid md:grid-cols-2 lg:w-[300px]">
//                 {destinations.map((destination) => (
//                   <ListItem
//                     key={destination.title}
//                     title={destination.title}
//                     href={destination.href}
//                   >
//                   </ListItem>
//                 ))}
//                 {destinations.map((destination) => (
//                   <ListItem
//                     key={destination.title}
//                     title={destination.title}
//                     href={destination.href}
//                   >
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           {/* Ways to Travel Dropdown */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//               Ways to Travel
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                 {travelStyles.map((style) => (
//                   <ListItem
//                     key={style.title}
//                     title={style.title}
//                     href={style.href}
//                   >
//                     {style.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           {/* Components (Expert Travel Advice) */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className='text-white hover:text-white/8j0 bg-transparent hover:bg-white/10'>Expert Travel Advice</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                 {components.map((component) => (
//                   <ListItem
//                     key={component.title}
//                     title={component.title}
//                     href={component.href}
//                   >
//                     {component.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//           {/* About Us */}
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
//               About Us
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                 {aboutUs.map((item) => (
//                   <ListItem
//                     key={item.title}
//                     title={item.title}
//                     href={item.href}
//                   >
//                     {item.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* Search and Contact */}
//       <div className="flex items-center space-x-4 ml-auto">
//         <div className="flex items-center text-white">
//           <Phone size={20} className="mr-2" />
//           <span className="font-medium whitespace-nowrap">1.888.680.1241</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesktopNavigation;




//           // <NavigationMenuItem>
//           //   <NavigationMenuTrigger className='text-white hover:text-white/80 bg-transparent hover:bg-white/10'>Components</NavigationMenuTrigger>
//           //   <NavigationMenuContent>
//           //     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//           //       {components.map((component) => (
//           //         <ListItem
//           //           key={component.title}
//           //           title={component.title}
//           //           href={component.href}
//           //         >
//           //           {component.description}
//           //         </ListItem>
//           //       ))}
//           //     </ul>
//           //   </NavigationMenuContent>
//           // </NavigationMenuItem>



import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const DesktopNavigation = () => {
  // Restructured destinations based on the image
  const europeDestinations = [
    { title: "Albania", href: "/trips?country=albania" },
    { title: "Austria", href: "/trips?country=austria" },
    { title: "Belgium", href: "/trips?country=belgium" },
    { title: "Bosnia and Herzegovina", href: "/trips?country=bosnia-herzegovina" },
    { title: "Bulgaria", href: "/trips?country=bulgaria" },
    { title: "Croatia", href: "/trips?country=croatia" },
    { title: "Czech Republic", href: "/trips?country=czech-republic" },
    { title: "Denmark", href: "/trips?country=denmark" },
    { title: "Estonia", href: "/trips?country=estonia" },
    { title: "Finland", href: "/trips?country=finland" },
    { title: "France", href: "/trips?country=france" },
    { title: "Germany", href: "/trips?country=germany" },
    { title: "Greece", href: "/trips?country=greece" },
    { title: "Hungary", href: "/trips?country=hungary" },
    { title: "Iceland", href: "/trips?country=iceland" },
    { title: "Italy", href: "/trips?country=italy" },
    { title: "Latvia", href: "/trips?country=latvia" },
    { title: "Liechtenstein", href: "/trips?country=liechtenstein" },
    { title: "Lithuania", href: "/trips?country=lithuania" },
    { title: "Luxembourg", href: "/trips?country=luxembourg" },
    { title: "Macedonia", href: "/trips?country=macedonia" },
    { title: "Malta", href: "/trips?country=malta" },
    { title: "Monaco", href: "/trips?country=monaco" },
    { title: "Montenegro", href: "/trips?country=montenegro" },
    { title: "Netherlands", href: "/trips?country=netherlands" },
    { title: "Norway", href: "/trips?country=norway" },
    { title: "Poland", href: "/trips?country=poland" },
    { title: "Portugal", href: "/trips?country=portugal" },
    { title: "Romania", href: "/trips?country=romania" },
    { title: "Serbia", href: "/trips?country=serbia" },
    { title: "Slovakia", href: "/trips?country=slovakia" },
    { title: "Slovenia", href: "/trips?country=slovenia" },
    { title: "Spain", href: "/trips?country=spain" },
    { title: "Sweden", href: "/trips?country=sweden" },
    { title: "Switzerland", href: "/trips?country=switzerland" },
  ];

  const ukAndIrelandDestinations = [
    { title: "England", href: "/trips?country=england" },
    { title: "Ireland", href: "/trips?country=ireland" },
    { title: "Scotland", href: "/trips?country=scotland" },
    { title: "Wales", href: "/trips?country=wales" },
  ];

  const northAfricaDestinations = [
    { title: "Egypt", href: "/trips?country=egypt" },
    { title: "Morocco", href: "/trips?country=morocco" },
  ];

  const asiaDestinations = [
    { title: "India", href: "/trips?country=india" },
    { title: "Israel", href: "/trips?country=israel" },
    { title: "Jordan", href: "/trips?country=jordan" },
    { title: "Nepal", href: "/trips?country=nepal" },
    { title: "Sri Lanka", href: "/trips?country=sri-lanka" },
    { title: "Türkiye (Turkey)", href: "/trips?country=turkey" },
  ];

  const usaAndCanadaDestinations = [
    { title: "Canada", href: "/trips?country=canada" },
    { title: "United States", href: "/trips?country=united-states" },
  ];

  const latinAmericaDestinations = [
    { title: "Argentina", href: "/trips?country=argentina" },
    { title: "Brazil", href: "/trips?country=brazil" },
    { title: "Chile", href: "/trips?country=chile" },
    { title: "Peru", href: "/trips?country=peru" },
    { title: "Uruguay", href: "/trips?country=uruguay" },
  ];

  const findYourTourOptions = [
    {
      title: "2025 & 2026 Worldwide Tours",
      href: "/worldwide-tours",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Christmas Market Tours",
      href: "/christmas-market-tours",
      image: "/api/placeholder/400/300"
    },
    {
      title: "US Local Tours",
      href: "/us-local-tours",
      image: "/api/placeholder/400/300"
    },
    {
      title: "FIND YOUR TOUR",
      href: "/find-your-tour",
      icon: "search"
    },
  ];

  // Ways to Travel content
  const travelStyles = [
    {
      title: "Discovery Journeys",
      href: "/travel-styles/discovery",
      description: "See multiple countries on one tour with comprehensive itineraries.",
    },
    {
      title: "Regional Journeys",
      href: "/travel-styles/regional",
      description: "Explore one region or country in-depth with local experiences.",
    },
    {
      title: "Country Roads",
      href: "/travel-styles/country-roads",
      description: "Go off the beaten track and discover hidden gems with expert guides.",
    },
    {
      title: "Easy Pace",
      href: "/travel-styles/easy-pace",
      description: "Stay for at least 3 nights in one location for a relaxed experience.",
    },
    {
      title: "Group Travel",
      href: "/travel-styles/group",
      description: "Join like-minded travelers on carefully curated group adventures.",
    },
    {
      title: "Solo Travel",
      href: "/travel-styles/solo",
      description: "Travel solo with the safety and camaraderie of a guided experience.",
    },
  ];

  // Components content
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  // About Us content
  const aboutUs = [
    {
      title: "Our Story",
      href: "/about",
      description: "Learn about our history and mission to create unforgettable travel experiences.",
    },
    {
      title: "Meet Our Team",
      href: "/team",
      description: "Get to know our travel experts who curate exceptional journeys.",
    },
    {
      title: "Gallery",
      href: "/gallery",
      description: "View stunning photos from our tours around the world.",
    },
    {
      title: "FAQs",
      href: "/faq",
      description: "Find answers to commonly asked questions about our tours and services.",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "Reach out to our team for personalized assistance with your travel plans.",
    },
  ];

  return (
    <div className="hidden md:flex items-center justify-between w-full ml-28">
      <NavigationMenu className="relative">
        <NavigationMenuList className="flex space-x-1">

          {/* Destinations Dropdown - Restructured to match the image */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
              Destinations
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-6 gap-4 p-4 w-[800px] max-w-screen-xl ">
                {/* EUROPE Section */}
                <div className="col-span-1">
                  <h3 className="font-bold mb-2">EUROPE</h3>
                  <ul className="space-y-1">
                    {europeDestinations.slice(0, Math.ceil(europeDestinations.length / 3)).map((destination) => (
                      <li key={destination.title}>
                        <Link to={destination.href} className="text-sm hover:underline">
                          {destination.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1">
                  <ul className="space-y-1 mt-8">
                    {europeDestinations.slice(Math.ceil(europeDestinations.length / 3), Math.ceil(europeDestinations.length / 3) * 2).map((destination) => (
                      <li key={destination.title}>
                        <Link to={destination.href} className="text-sm hover:underline">
                          {destination.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1">
                  <ul className="space-y-1 mt-8">
                    {europeDestinations.slice(Math.ceil(europeDestinations.length / 3) * 2).map((destination) => (
                      <li key={destination.title}>
                        <Link to={destination.href} className="text-sm hover:underline">
                          {destination.title}
                        </Link>
                      </li>
                    ))}
                    <li className="mt-2">
                      <Link to="/trips?region=europe" className="text-sm font-semibold text-blue-600 hover:underline">
                        VIEW ALL EUROPE TOURS
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* UK & IRELAND Section */}
                <div className="col-span-1">
                  <h3 className="font-bold mb-2">UK & IRELAND</h3>
                  <ul className="space-y-1">
                    {ukAndIrelandDestinations.map((destination) => (
                      <li key={destination.title}>
                        <Link to={destination.href} className="text-sm hover:underline">
                          {destination.title}
                        </Link>
                      </li>
                    ))}
                    <li className="mt-2">
                      <Link to="/trips?region=uk-ireland" className="text-sm font-semibold text-blue-600 hover:underline">
                        VIEW ALL UK & IRELAND TOURS
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* NORTH AFRICA, ASIA, etc. combined in one column */}
                <div className="col-span-1">
                  <div>
                    <h3 className="font-bold mb-2">NORTH AFRICA</h3>
                    <ul className="space-y-1">
                      {northAfricaDestinations.map((destination) => (
                        <li key={destination.title}>
                          <Link to={destination.href} className="text-sm hover:underline">
                            {destination.title}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2">
                        <Link to="/trips?region=north-africa" className="text-sm font-semibold text-blue-600 hover:underline">
                          VIEW ALL NORTH AFRICA TOURS
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold mb-2">ASIA</h3>
                    <ul className="space-y-1">
                      {asiaDestinations.map((destination) => (
                        <li key={destination.title}>
                          <Link to={destination.href} className="text-sm hover:underline">
                            {destination.title}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2">
                        <Link to="/trips?region=asia" className="text-sm font-semibold text-blue-600 hover:underline">
                          VIEW ALL ASIA TOURS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* USA & CANADA, LATIN AMERICA combined in one column */}
                <div className="col-span-1">
                  <div>
                    <h3 className="font-bold mb-2">USA & CANADA</h3>
                    <ul className="space-y-1">
                      {usaAndCanadaDestinations.map((destination) => (
                        <li key={destination.title}>
                          <Link to={destination.href} className="text-sm hover:underline">
                            {destination.title}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2">
                        <Link to="/trips?region=usa-canada" className="text-sm font-semibold text-blue-600 hover:underline">
                          VIEW ALL USA & CANADA TOURS
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold mb-2">LATIN AMERICA</h3>
                    <ul className="space-y-1">
                      {latinAmericaDestinations.map((destination) => (
                        <li key={destination.title}>
                          <Link to={destination.href} className="text-sm hover:underline">
                            {destination.title}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2">
                        <Link to="/trips?region=latin-america" className="text-sm font-semibold text-blue-600 hover:underline">
                          VIEW ALL LATIN AMERICA TOURS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Find Your Tour section with images */}
                <div className="col-span-6 mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-bold mb-4">FIND YOUR TOUR</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {findYourTourOptions.map((option, index) => (
                      <Link key={option.title} to={option.href} className="block">
                        {option.icon ? (
                          <div className="flex items-center justify-center border border-gray-200 rounded-md h-16">
                            <Search size={24} />
                            <span className="ml-2 font-bold">{option.title}</span>
                          </div>
                        ) : (
                          <div>
                            <img
                              src={option.image}
                              alt={option.title}
                              className="w-full h-24 object-cover rounded-md"
                            />
                            <p className="mt-2 text-sm font-medium">{option.title}</p>
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Ways to Travel Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
              Ways to Travel
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {travelStyles.map((style) => (
                  <ListItem
                    key={style.title}
                    title={style.title}
                    href={style.href}
                  >
                    {style.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Expert Travel Advice */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-white hover:text-white/80 bg-transparent hover:bg-white/10'>
              Expert Travel Advice
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {aboutUs.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Search and Contact */}
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center text-white">
          <Phone size={20} className="mr-2" />
          <span className="font-medium whitespace-nowrap">1.888.680.1241</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;