import { useEffect, useRef } from 'react';

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
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover top-7"
      >
        <source src="/WanderTribeHero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="hero-content animate-fade-in mt-14">
          <h4 className="text-lg lg:text-2xl font-bold  leading-tight text-white">
            Welcome to
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Wander Tribe
          </h1>
          <p className="text-xl md:text-4xl max-w-3xl mx-auto mb-8 text-white/90">
            Let's Wander Together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-14 rounded-md transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;