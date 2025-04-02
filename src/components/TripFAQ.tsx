import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface TripFAQProps {
  faqs: FAQ[];
}

const TripFAQ = ({ faqs }: TripFAQProps) => {
  return (
    <section className="py-16 bg-travel-sand-light/30">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-travel-earth text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-travel-earth hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-base text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TripFAQ;
