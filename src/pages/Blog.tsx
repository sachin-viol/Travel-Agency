import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Switzerland",
    excerpt: "Discover the less-traveled paths and secret spots that make Switzerland a paradise for adventurous souls.",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
    date: "May 12, 2024",
    author: "Emma Wilson",
    category: "Destinations"
  },
  {
    id: 2,
    title: "A Foodie's Guide to Japanese Street Food",
    excerpt: "From takoyaki to taiyaki, explore the vibrant world of Japanese street food that will tantalize your taste buds.",
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed",
    date: "April 29, 2024",
    author: "Michael Chen",
    category: "Food & Culture"
  },
  {
    id: 3,
    title: "Packing Essentials for Your Costa Rica Adventure",
    excerpt: "Everything you need to know about what to bring for a perfect Costa Rican exploration, from rainforests to beaches.",
    image: "https://images.unsplash.com/photo-1503756234508-e32369269deb",
    date: "April 15, 2024",
    author: "Carlos Rodriguez",
    category: "Travel Tips"
  },
  {
    id: 4,
    title: "How to Make Friends While Traveling Solo",
    excerpt: "Practical advice for building meaningful connections with fellow travelers and locals during your solo adventures.",
    image: "https://images.unsplash.com/photo-1479660095429-2cf4e1360472",
    date: "March 27, 2024",
    author: "Sarah Johnson",
    category: "Solo Travel"
  },
  {
    id: 5,
    title: "Sustainable Travel: Minimizing Your Footprint",
    excerpt: "Simple ways to make your travels more eco-friendly without sacrificing the quality of your experience.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    date: "March 10, 2024",
    author: "David Thompson",
    category: "Responsible Travel"
  },
  {
    id: 6,
    title: "Photography Tips for Capturing Epic Landscapes",
    excerpt: "Expert advice on how to take stunning landscape photos that will make your friends and family say 'wow'.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    date: "February 25, 2024",
    author: "Jessica Lee",
    category: "Photography"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth">Travel Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stories, tips, and inspiration to fuel your wanderlust and enhance your travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-travel-teal-light/20 text-travel-teal px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-travel-earth">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 text-travel-teal border border-travel-teal rounded-md hover:bg-travel-teal hover:text-white transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-primary">Load More Articles</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
