// CommunitySection.jsx
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

// Sample images - in a real application you would import these from your assets or fetch from an API
const INSTAGRAM_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
    alt: "Canyon with river flowing through mountains",
    likes: 542,
    comments: 32,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    alt: "Ocean waves crashing on shore during sunset",
    likes: 678,
    comments: 45,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    alt: "Mountain landscape with pine trees and deer",
    likes: 892,
    comments: 67,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    alt: "Looking up at tall redwood trees",
    likes: 723,
    comments: 38,
  },
];

const JoinNow = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("community-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="community-section"
      className={`py-16 bg-blue-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-travel-earth-light">
          Join Our Tribe
        </h2>

        <p className="max-w- mx-auto mb-12 text-lg text-center text-slate-600">
          Follow us on Instagram{" "}
          <span className="font-semibold">
            <a
              href="https://www.instagram.com/wandertribe.co?igsh=emZpaTZldHB4eGxx&utm_source=qr"
              target="_blank">
              @wandertribe.co
            </a>
          </span>{" "}
          and share your travel moments with us using{" "}
          <span className="font-semibold">#WanderTribe</span>.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INSTAGRAM_IMAGES.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden transition-transform duration-300 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setIsHovered(image.id)}
              onMouseLeave={() => setIsHovered(null)}>
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-64 transition-transform duration-500 hover:scale-105"
              />

              {/* Overlay that appears on hover */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                  isHovered === image.id ? "opacity-100" : "opacity-0"
                }`}>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{image.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{image.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/wandertribe.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 text-white transition-colors bg-travel-earth rounded-full hover:bg-travel-earth/90">
            <Instagram className="w-5 h-5 mr-2" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
