import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Search, Bookmark, ArrowRight, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Why We Travel: The Story Behind Wander Tribe",
    excerpt: "Discover the heart of Wander Tribe — our passion for travel, hidden gems, and the people and places that inspire us to explore.",
    slug: "why-we-travel-wander-tribe",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
    date: "April 30, 2025",
    author: "Jinit Thakkar",
    category: "Destinations"
  },
  {
    id: 2,
    title: "The Ultimate First-Timer’s Guide: How to Plan Your Trip with Wander Tribe",
    excerpt: "Dreaming of your next adventure but not sure where to start?",
    slug: "how-to-plan-your-trip-with-wander-tribe",
    image: "https://images.pexels.com/photos/9943247/pexels-photo-9943247.jpeg",
    date: "May 26, 2025",
    author: "Jinit Thakkar",
    category: "Destinations"
  },
];

const BlogCategories = () => {
  const categories = [
    { name: "Destinations", count: 12 },
    { name: "Travel Tips", count: 8 },
    { name: "Food & Culture", count: 6 },
    { name: "Solo Travel", count: 7 },
    { name: "Photography", count: 5 },
    { name: "Responsible Travel", count: 4 },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth-light">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.name} className="flex justify-between items-center group cursor-pointer">
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-2 text-travel-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-gray-700 group-hover:text-travel-teal transition-colors">{category.name}</span>
            </div>
            <span className="bg-travel-sand-light/50 text-travel-earth-light px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularPosts = () => {
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth-light">Popular Posts</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 group-hover:text-travel-teal transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth-light">Search</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-teal/20 focus:border-travel-teal"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

const NewsletterSignup = () => {
  return (
    <div className="bg-travel-earth text-travel-cloud-white p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-travel-cloud-white/80">Get travel tips and inspiration delivered to your inboox.</p>
      <div className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-3 border border-travel-cloud-white/20 bg-travel-cloud-white rounded-lg text-travel-teal placeholder:text-travel-teal focus:outline-none focus:ring-2 focus:ring-travel-cloud-white/30 text-sm"
        />
        <button className="flex items-center justify-center bg-travel-cloud-white text-travel-teal font-medium py-3 px-4 rounded-lg hover:bg-travel-cloud-white/90 transition-colors text-sm">
          <Mail size={16} className="mr-2" />
          Subscribe
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <PageHero
        title="Blogs"
        description="Explore travel tales and inspiration from the Wander Tribe."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="py-16">
        <div className="container-custom">
          <div className="relative text-center mb-16 ">
            {/* Decorative background element */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth-light relative z-10"></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto relative z-10">
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-travel-cloud-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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
                      <h3 className="text-xl font-bold mb-2 text-travel-earth-light">{post.title}</h3>
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
                      <button className="w-full mt-6 py-2 btn-outline transition-colors flex items-center justify-center">
                        <Link to={`/blogs/${post.slug}`} className="flex items-center">
                          <span>Read More</span>
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-12 text-center">
                <button className="btn-primary">Load More Articles</button>
              </div> */}
            </div>

            <div className="lg:w-1/3">
              <SearchBox />
              {/* <BlogCategories /> */}
              <PopularPosts />
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
