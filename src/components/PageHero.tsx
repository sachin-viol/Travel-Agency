interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageHero = ({ 
  title, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
}: PageHeroProps) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
