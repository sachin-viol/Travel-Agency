import { blogDetails } from '@/services/BlogService';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';


const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogDetails.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="text-center mt-20 text-gray-500">Blog not found.</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Why We Travel: The Story Behind Wander Tribe"
        description=""
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">{blog.title}</h1> */}

        <div className="w-full h-[400px] mb-10 rounded-xl overflow-hidden">
          <img
            src={blog.heroImage}
            alt={blog.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {blog.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {blog.gallery && blog.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {blog.gallery.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  alt={`Blog gallery ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 space-y-4">
          {blog.ctas?.map((ctaItem, idx) => (
            <div key={idx}>
              <a
                href={ctaItem.link}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                {ctaItem.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default BlogDetails;
