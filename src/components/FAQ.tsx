import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I book a trip?",
    answer: "Booking a trip with WANDERLUX is easy! Browse our available trips, select the one you're interested in, and click the 'Book Now' button. Follow the prompts to complete your booking, make a payment, and receive confirmation details."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our standard cancellation policy offers a full refund if cancelled 30 days before the trip start date, a 50% refund if cancelled 15-29 days before, and no refund for cancellations within 14 days. Some trips may have custom policies, which will be clearly noted during booking."
  },
  {
    question: "Are flights included in the trip price?",
    answer: "Unless explicitly stated, flight costs are not included in our trip packages. We offer comprehensive ground services but recommend guests book their flights separately. We're happy to provide guidance on flight booking if needed."
  },
  {
    question: "What should I pack for my trip?",
    answer: "Once your trip is booked, you'll receive a detailed packing list specific to your destination, including recommended clothing, essential documents, and any special items needed for activities. We suggest packing light but thorough, with layers for various weather conditions."
  },
  {
    question: "Do I need travel insurance?",
    answer: "Yes, travel insurance is mandatory for all WANDERLUX trips. It should cover emergency medical expenses, trip cancellation, and lost luggage. We recommend comprehensive coverage that includes adventure activities if your trip involves them."
  },
  {
    question: "Are your trips suitable for solo travelers?",
    answer: "Absolutely! Many of our guests are solo travelers looking to explore with like-minded people. Our trips are designed to foster community and connection, making them perfect for solo adventurers. We also offer single occupancy options for those who prefer private accommodations."
  },
  {
    question: "What is the typical group size?",
    answer: "Our groups typically range from 8-16 travelers, depending on the destination and nature of the trip. We believe this size offers the perfect balance: small enough for personalized attention and authentic experiences, but large enough to create a fun community atmosphere."
  },
  {
    question: "Are meals included?",
    answer: "Most of our trips include breakfasts daily, and many include select lunches and dinners as specified in each itinerary. This gives you the flexibility to explore local cuisine on your own while ensuring you have key meals covered. Special dietary requirements can be accommodated with advance notice."
  },
  {
    question: "How physically demanding are your trips?",
    answer: "We offer trips across all activity levels, from relaxed cultural explorations to challenging adventure expeditions. Each trip listing includes an activity level rating and detailed description of physical activities involved, helping you choose the experience that matches your comfort level."
  },
  {
    question: "Do you offer customized or private trips?",
    answer: "Yes! We specialize in creating custom itineraries for private groups, families, or special occasions. Contact our team with your dream destination and preferences, and we'll craft a personalized journey just for you."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <section className="py-12 md:py-16 bg-travel-cloud-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-600">
                Find answers to common questions about booking, traveling, and experiencing our adventures
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-travel-cloud-white rounded-xl shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="py-5 px-6 text-left text-travel-earth font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-gray-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Still have questions? Contact our friendly team for personalized assistance.
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;