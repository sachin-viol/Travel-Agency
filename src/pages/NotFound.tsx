import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-travel-earth/20">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-travel-earth">404</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">Oops! This destination isn't on our map.</p>
          <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
            The page you're looking for seems to have wandered off. Let's get you back on the right path.
          </p>
          <Link
            to="/"
            className="bg-travel-teal hover:bg-travel-earth text-travel-cloud-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
