import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {/*<video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover top-7"
      >
        <source src="/WanderTribeHero.mp4" type="video/mp4" /> 
        <source src="https://videos.pexels.com/video-files/5192722/5192722-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}

      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" alt="Background" className="absolute w-full h-full object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="hero-content animate-fade-in mt-14">
          <h4 className="text-lg lg:text-2xl font-bold  leading-tight text-travel-cloud-white drop-shadow-lg">
            Welcome to
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-lg font-[Poppins]">
            Wander Tribe
          </h1>
          <p className="text-xl md:text-4xl max-w-3xl mx-auto mb-8 text-travel-cloud-white/90 drop-shadow-lg">
            Let's Wander Together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-travel-earth hover:bg-travel-earth-light text-travel-cloud-white  font-medium py-3 px-14 rounded-md transition-all duration-300">
              <Link to="/trips">View Trips</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-16 relative flex justify-center">
          <span className="w-0.5 h-10 bg-travel-cloud-white/40 block"></span>
          <span className="w-2 h-2 bg-travel-cloud-white absolute bottom-0 rotate-45"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;