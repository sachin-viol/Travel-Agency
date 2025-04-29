import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';

const Terms = () => {
  return (

    <div className="min-h-screen relative">
      <Navbar />
      <PageHero
        title="Terms of Service"
        description="Your adventure starts here. Read our terms and conditions to ensure a smooth journey with Wander Tribe."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="bg-travel-earth-light/5 min-h-screen">
        <div className="container mx-auto px-4 pb-16 ">
          <div className="rounded-xl  p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-travel-earth text-center"></h1>

            <div className="prose max-w-none text-travel-earth-dark">
              <p className="mb-6 text-lg">
                Last Updated: April 15, 2025
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to WANDER TRIBE. These terms and conditions outline the rules and regulations for the use of our website and services.
                </p>
                <p className="mb-4">
                  By accessing this website and using our services, we assume you accept these terms and conditions in full. You must not use this website or our services if you disagree with any part of these terms and conditions.
                </p>
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement, and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us" refers to WANDER TRIBE. "Party", "Parties", or "Us" refers to both the Client and ourselves, or either the Client or ourselves.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">2. Bookings and Payments</h2>
                <p className="mb-4">
                  When you book a trip with us, you agree to provide accurate, current, and complete information about yourself as prompted by our booking form.
                </p>
                <p className="mb-4">
                  All bookings are subject to availability and acceptance by us. A booking is not confirmed until we issue a confirmation email and receive the required deposit or full payment, depending on the time of booking relative to the trip departure date.
                </p>
                <div className="bg-travel-earth/5 p-4 rounded-lg mb-4">
                  <h3 className="font-medium text-lg mb-2">Payment Terms:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>For bookings made more than 60 days before departure, a 25% non-refundable deposit is required to secure your spot</li>
                    <li>Full payment is due 60 days before the trip departure date</li>
                    <li>For bookings made within 60 days of departure, full payment is required at the time of booking</li>
                    <li>All payments are made in the currency specified for your trip</li>
                  </ul>
                </div>
                <p>
                  We reserve the right to cancel your booking if payment is not received by the due date. In such cases, our cancellation policy will apply.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">3. Trip Participation Requirements</h2>
                <p className="mb-4">
                  By booking a trip with us, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>You must be at least 18 years old to make a booking and participate in our trips, unless accompanied by a parent or guardian</li>
                  <li>You are responsible for ensuring you meet the physical requirements necessary for participating in the activities included in your chosen trip</li>
                  <li>You must disclose any pre-existing medical conditions that may affect your ability to participate in trip activities</li>
                  <li>You are responsible for obtaining and maintaining all necessary travel documents, including passports, visas, and travel insurance</li>
                  <li>You agree to comply with all local laws, respect local customs, and behave in a manner that does not disrupt the enjoyment of others on the trip</li>
                </ul>
                <p>
                  We reserve the right to refuse participation or continue participation to any person if, in our opinion, their actions or behavior may cause danger, upset, distress, or annoyance to themselves or others, or damage to property.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">4. Trip Changes and Cancellations by Us</h2>
                <p className="mb-4">
                  While we strive to operate all trips as described, we reserve the right to change any aspect of the trip if necessary due to circumstances beyond our control or which could risk the health or safety of our clients.
                </p>
                <p className="mb-4">
                  Changes may include, but are not limited to, the itinerary, accommodations, transportation methods, or included activities. We will inform you of any significant changes as soon as possible.
                </p>
                <p className="mb-4">
                  In rare cases, we may need to cancel a trip entirely. This could be due to insufficient bookings, unexpected events, or force majeure. If we cancel a trip, you may choose between:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Transferring to an alternative trip (subject to availability and any price difference)</li>
                  <li>Receiving a full refund of all monies paid to us</li>
                  <li>Receiving a travel credit for future trips</li>
                </ul>
                <p>
                  We are not responsible for any incidental expenses you may have incurred as a result of your booking, such as visas, vaccinations, or non-refundable flights.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">5. Liability and Insurance</h2>
                <p className="mb-4">
                  Travel involves risks beyond our control. While we take all reasonable steps to ensure your safety, we cannot accept responsibility for any loss, damage, injury, illness, death, or other claim that may arise during or as a result of our trips.
                </p>
                <p className="mb-4">
                  We strongly recommend that you purchase comprehensive travel insurance that covers trip cancellation, medical expenses, emergency evacuation, personal liability, and repatriation. Your insurance should also cover the activities you plan to participate in.
                </p>
                <div className="bg-travel-terracotta/10 p-4 rounded-lg mb-4">
                  <p className="font-medium">
                    By booking with us, you confirm that you have or will obtain suitable travel insurance for your trip. It is your responsibility to ensure that your insurance fully covers all your requirements.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">6. Intellectual Property</h2>
                <p className="mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of WANDER TRIBE or our content suppliers and is protected by international copyright laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">7. Governing Law</h2>
                <p className="mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which WANDER TRIBE is registered, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">8. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-travel-earth/5 p-6 rounded-lg">
                  <p className="font-medium">WANDER TRIBE</p>
                  <p>Email: legal@wandertribe.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Adventure Street, Explorerville, EX 12345</p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <a href="/" className="text-travel-earth hover:text-travel-terracotta transition-colors">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Terms;