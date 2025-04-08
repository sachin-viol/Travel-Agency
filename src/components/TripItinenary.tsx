import React, { useState } from 'react';
import { MapPin, PlaneTakeoff, Bus, ChevronDown, ChevronUp, Utensils, Bus as BusIcon, Ticket, Building } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ItineraryDay {
  day: number;
  location: string;
  country: string;
  nights: number;
  description: string;
}

interface TripItineraryProps {
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

const TripItinerary = ({ itinerary, inclusions, exclusions }: TripItineraryProps) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-16 bg-travel-cloud-white">
      <div className="container-custom">
        <Tabs defaultValue="itinerary">
          <div className="mb-8 border-b border-gray-200">
            <TabsList className="flex w-full justify-center bg-transparent">
              <TabsTrigger 
                value="itinerary"
                className="data-[state=active]:text-travel-teal data-[state=active]:border-b-2 data-[state=active]:border-travel-teal rounded-none px-8 py-4 text-lg font-medium"
              >
                Itinerary
              </TabsTrigger>
              <TabsTrigger 
                value="inclusions"
                className="data-[state=active]:text-travel-teal data-[state=active]:border-b-2 data-[state=active]:border-travel-teal rounded-none px-8 py-4 text-lg font-medium"
              >
                Inclusions
              </TabsTrigger>
              <TabsTrigger 
                value="exclusions"
                className="data-[state=active]:text-travel-teal data-[state=active]:border-b-2 data-[state=active]:border-travel-teal rounded-none px-8 py-4 text-lg font-medium"
              >
                Exclusions
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="itinerary">
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <PlaneTakeoff className="w-5 h-5 text-travel-teal" />
                  <p className="text-lg font-medium">Fly in to {itinerary[0].location} on Day 1</p>
                </div>
              </div>

              {itinerary.map((day, index) => (
                <Collapsible 
                  key={index}
                  open={openItems[index]}
                  onOpenChange={() => toggleItem(index)}
                  className="border rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className="bg-travel-terracotta text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-travel-earth">{day.location}</h3>
                        <p className="text-sm text-gray-600">Country: {day.country} | {day.nights} Nights</p>
                      </div>
                    </div>
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{day.description}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inclusions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-travel-teal text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-travel-earth mb-2">Accommodation</h3>
                      <p className="text-gray-700">10 nights stay in mixed gender dorms in centrally located premium hostels</p>
                      <a href="#" className="text-travel-teal hover:underline text-sm mt-1 inline-block">Click for pictures</a>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-travel-teal text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-travel-earth mb-2">Meals & Drinks</h3>
                      <p className="text-gray-700">10 meals - 10 Breakfasts</p>
                      <p className="text-gray-700">Few shots during Pub Crawl</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-travel-teal text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <BusIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-travel-earth mb-2">Intercity Transportation</h3>
                      <p className="text-gray-700">Intercity transportation from BCN to IBZ and IBZ to MAD by flights and MAD to LIS by bus</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-travel-teal text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-travel-earth mb-2">Activities</h3>
                      <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        {inclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-travel-teal text-travel-cloud-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Bus className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-travel-earth mb-2">Local taxes & fees</h3>
                      <p className="text-gray-700">Entry fees for included places and local taxes are all included. No hidden charges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="exclusions">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-travel-earth mb-6">What's Not Included</h3>
              <ul className="space-y-4">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-travel-terracotta rounded-full mt-2 mr-3"></span>
                    <p className="text-lg text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TripItinerary;