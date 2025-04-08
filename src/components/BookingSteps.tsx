import React from 'react';
import { CreditCard, PlaneTakeoff, FormInput } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BookingSteps = () => {
  return (
    <section className="py-16 bg-travel-slate-gray/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Booking Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-travel-earth">
              Book Your Next Adventure Trip In 3 Steps
            </h2>
            
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="h-16 w-16 flex-shrink-0 rounded-full border-2 border-travel-earth flex items-center justify-center">
                  <FormInput size={32} className="text-travel-earth" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-travel-earth">
                    Pick your trip and fill in the booking form
                  </h3>
                  <p className="text-wander-slate-gray">
                    Choose your trip and fill in the booking form here. Our team will get in touch with you for verification and answer any queries you may have.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="h-16 w-16 flex-shrink-0 rounded-full border-2 border-travel-earth flex items-center justify-center">
                  <CreditCard size={32} className="text-travel-earth" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-travel-earth">
                    Make the Deposit Payment
                  </h3>
                  <p className="text-wander-slate-gray">
                    You will pay the trip deposit and book your spot. That's it. Done. You are all set for your next adventure.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="h-16 w-16 flex-shrink-0 rounded-full border-2 border-travel-earth flex items-center justify-center">
                  <PlaneTakeoff size={32} className="text-travel-earth" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-travel-earth">
                    Arrive at your destination!
                  </h3>
                  <p className="text-wander-slate-gray">
                    Get all excited as now you only have to turn up to your destination and make some of the best memories of your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Trip FAQs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-travel-earth">
              Trip FAQs
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  Are Visas and Flights Included?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  Visas and flights are not included as we have travelers coming from different cities of the country and the flight cost varies depending on the city of departure. However we would be guiding you for booking flights and applying for visas.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  What if my Visa gets rejected?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  In case of visa rejection, we will refund the tour payment as per our cancellation policy. We always recommend applying for visas well in advance to handle any unexpected situations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  What if there are less number of travelers?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  We typically require a minimum number of travelers to operate our group tours. If we don't reach the minimum required, we offer options like tour rescheduling or full refund.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  Will I get assistance on Visas?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  Yes, our team will guide you through the entire visa application process, including documentation requirements and application procedures for your destination.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  What will be the accommodation like?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  We provide comfortable accommodation in well-rated hotels or similar alternatives. Specific details about accommodation for each trip are mentioned in the trip itinerary.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  Will I get Vegetarian food easily?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  Yes, vegetarian options are available at most destinations. We always inform our partners about dietary preferences in advance to ensure suitable meal options.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium text-wander-slate-gray">
                  Can I add more places in the itinerary?
                </AccordionTrigger>
                <AccordionContent className="text-wander-slate-gray">
                  While our group tours follow fixed itineraries, we can arrange for pre or post-tour extensions at additional cost. For completely customized itineraries, consider our private tour options.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <button className="bg-travel-earth hover:bg-travel-earth/90 text-travel-cloud-white font-medium py-3 px-8 rounded-md transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
