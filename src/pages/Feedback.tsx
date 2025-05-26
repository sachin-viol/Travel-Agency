import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/PageHero';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      rating: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Feedback"
        description="Your feedback helps us improve and serve you better. Let us know how your experience was."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
      />
      <div className="py-16">
        <div className="container-custom">
          <div className="lg:col-span-3 bg-travel-cloud-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-travel-earth">We'd love your feedback!</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Your feedback has been received. We appreciate your time and thoughts.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-teal"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-teal"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
                      Rate Your Experience
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-teal"
                      required
                    >
                      <option value="">Select a rating</option>
                      <option value="5">Excellent (5 Stars)</option>
                      <option value="4">Very Good (4 Stars)</option>
                      <option value="3">Good (3 Stars)</option>
                      <option value="2">Fair (2 Stars)</option>
                      <option value="1">Poor (1 Star)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Your Feedback
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-teal"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-travel-teal hover:bg-travel-earth text-travel-cloud-white font-medium py-3 px-6 rounded-md transition-colors w-full"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
