import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute w-full h-full inset-0">
        <img
          src="/vid_backgound.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0 z-0"
          style={{ transition: "opacity 0.5s" }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover bg-gray-700 z-10"
          style={{ transition: "opacity 0.5s" }}>
          <source src="./vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Enhanced Overlay with stronger gradient */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="hero-content animate-fade-in mt-14 relative z-20">
          {/* Semi-transparent backdrop for better text visibility */}
          {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl -m-6 p-6"></div> */}

          {/* Text content with enhanced shadows */}
          {/* <div className="relative z-10">
            <h4
              className="text-lg lg:text-2xl font-bold leading-tight text-white drop-shadow-xl"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}>
              Curated group trips exclusively for travelers aged 18 to 35,
              designed to connect like- minded explorers
            </h4>
            <h1
              className="text-lg md:text-2xl lg:text-5xl tracking-normal mb-6 leading-normal text-white font-bold max-w-4xl"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}>
              You've Just Found Your Tribe
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-travel-earth hover:bg-travel-earth-light text-white font-medium py-3 px-14 rounded-md transition-all duration-300 shadow-lg">
                <Link to="/trips">View Trips</Link>
              </button>
            </div>
          </div> */}
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-travel-earth/30 hover:ring-travel-earth/80 transition-all">
                Let's Book your next trip with US.{" "}
                <a
                  href="/contact"
                  className="font-semibold text-travel-terracotta hover:text-travel-earth transition-colors duration-300">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center ">
              <h1 className="text-5xl tracking-tight text-balance sm:text-7xl font-bold leading-tight text-white drop-shadow-xl">
                You've Just Found Your Tribe
              </h1>
              <p className="mt-5 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 max-w-2xl text-center mx-auto">
                Curated group trips exclusively for travelers aged 18 to 35,
                designed to connect like- minded explorers
              </p>
              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View Trips
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8">
                <Link to="/trips"><button className="bg-travel-earth hover:bg-travel-earth-light text-white font-medium py-3 px-14 rounded-md transition-all duration-300 shadow-lg">
                  View Trips
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-16 relative flex justify-center">
          <span className="w-0.5 h-10 bg-black/60 block"></span>
          <span className="w-2 h-2 bg-black absolute bottom-0 rotate-45"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
