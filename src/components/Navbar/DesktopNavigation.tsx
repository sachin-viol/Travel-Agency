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
//             <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">
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
//             <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">
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
//             <NavigationMenuTrigger className='text-travel-earth-light hover:text-travel-earth-light/8j0 bg-transparent hover:bg-travel-cloud-white/10'>Expert Travel Advice</NavigationMenuTrigger>
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
//             <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">
//               About Us
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[200px]">
//                 {aboutUs.map((item) => (
//                   <ListItem
//                     key={item.title}
//                     title={item.title}
//                     href={item.href}
//                   >
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>

//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* Search and Contact */}
//       <div className="flex items-center space-x-4 ml-auto">
//         <div className="flex items-center text-travel-earth-light">
//           <Phone size={20} className="mr-2" />
//           <span className="font-medium travel-cloud-whitespace-nowrap">1.888.680.1241</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesktopNavigation;




// // <NavigationMenuItem>
// //   <NavigationMenuTrigger className='text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold'>Components</NavigationMenuTrigger>
// //   <NavigationMenuContent>
// //     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
// //       {components.map((component) => (
// //         <ListItem
// //           key={component.title}
// //           title={component.title}
// //           href={component.href}
// //         >
// //           {component.description}
// //         </ListItem>
// //       ))}
// //     </ul>
// //   </NavigationMenuContent>
// // </NavigationMenuItem>



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
  navigationMenuTriggerStyle,
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
      title: "Careers",
      href: "/careers",
      description: "Reach out to our team for personalized assistance with your travel plans.",
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
    <div className="hidden md:flex items-center justify-between w-full ml-28 font-semibold">
      <NavigationMenu className="relative">

        <NavigationMenuItem className='list-none'>
          <Link to="/" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-travel-earth/75 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className='list-none'>
          <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">Trips</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[200px] lg:grid-cols-1">
              <ListItem href="/#upcoming-trips" title="Upcoming">
              </ListItem>
              <ListItem href="/" title="Ongoing">
              </ListItem>
              <ListItem href="/past-trips" title="Past">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className='list-none'>
          <Link to="/blog" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold`}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>

      <NavigationMenu>

        <NavigationMenuItem className='list-none'>
          <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">Experience </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[200px] lg:grid-cols-1">
              <ListItem href="/" title="Reviews">
              </ListItem>
              <ListItem href="/gallery" title="Gallery">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className='list-none'>
          <NavigationMenuTrigger className="text-travel-earth-light hover:text-travel-earth-light/80 bg-transparent hover:bg-travel-cloud-white/10 text-lg font-semibold">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-3 md:w-[200px] md:grid-cols-1 lg:w-[300px]">
              {aboutUs.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


      </NavigationMenu>

      {/* Search and Contact */}
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center text-travel-earth-light">
          <Phone size={20} className="mr-2" />
          <span className="font-medium travel-cloud-whitespace-nowrap">1.888.680.1241</span>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;