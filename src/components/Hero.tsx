import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/5192722/5192722-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Overlay with stronger gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-slate-400/10 to-black/10 z-10"></div>

      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="hero-content animate-fade-in mt-14 relative z-20">
          {/* Semi-transparent backdrop for better text visibility */}
          {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl -m-6 p-6"></div> */}

          {/* Text content with enhanced shadows */}
          <div className="relative z-10">
            <h4 className="text-lg lg:text-2xl font-bold leading-tight text-white drop-shadow-xl"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}>
              Welcome to
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight text-white font-[Poppins]"
              style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9)" }}>
              Wander Tribe
            </h1>
            <p className="text-xl md:text-4xl max-w-3xl mx-auto mb-8 text-white drop-shadow-xl"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}>
              Let's Wander Together.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="bg-travel-earth hover:bg-travel-earth-light text-white font-medium py-3 px-14 rounded-md transition-all duration-300 shadow-lg">
                <Link to="/trips">View Trips</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-16 relative flex justify-center">
          <span className="w-0.5 h-10 bg-white/60 block"></span>
          <span className="w-2 h-2 bg-white absolute bottom-0 rotate-45"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;