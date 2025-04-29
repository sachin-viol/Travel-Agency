// Newsletter.jsx
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    setMessage('');
    
    try {
      // Replace this with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success simulation
      setMessage('Thank you for subscribing!');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      // Error simulation
      setMessage('Something went wrong. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 bg-travel-earth">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Join Our Tribe</h2>
          
          <p className="mb-8 text-xl text-white">
            Subscribe to stay updated on trips, blogs, and exclusive deals!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 pr-10 text-gray-700 bg-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            
            <button
              type="submit"
              className={`px-6 py-3 text-white transition-colors bg-travel-warm-orange rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 md:w-auto w-full ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 text-sm ${messageType === 'success' ? 'text-green-100' : 'text-red-100'}`}>
              {message}
            </div>
          )}
          
          <p className="mt-4 text-sm text-white">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
