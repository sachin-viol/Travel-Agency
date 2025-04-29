import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <PageHero
        title="Cancellation Policy"
        description="Your privacy matters to us. Read our policy to understand how we protect your data."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="bg-travel-earth-light/5 min-h-screen">
        <div className="container mx-auto px-4 pb-16">
          <div className=" rounded-xl p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-travel-earth text-center"></h1>

            <div className="prose max-w-none text-travel-earth-dark">
              <p className="mb-6 text-lg">
                Last Updated: April 15, 2025
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">1. Introduction</h2>
                <p className="mb-4">
                  At WANDER TRIBE, we understand that plans can change. This cancellation policy outlines what happens if you need to cancel your booking with us, or if we need to cancel a trip.
                </p>
                <p>
                  All bookings are subject to this cancellation policy, and by making a booking with us, you agree to these terms. We recommend reviewing this policy carefully before making a reservation.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">2. Customer Cancellations</h2>
                <p className="mb-4">
                  If you need to cancel your trip, please notify us in writing as soon as possible by emailing bookings@wandertribe.com. Your cancellation will be effective from the date we receive your written notification.
                </p>

                <div className="bg-travel-earth/5 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-xl mb-4 text-center">Cancellation Fee Schedule</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-travel-earth text-white">
                          <th className="px-4 py-2 text-left">Days Before Departure</th>
                          <th className="px-4 py-2 text-left">Cancellation Fee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">90+ days</td>
                          <td className="px-4 py-3">Deposit only (25% of trip cost)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">60-89 days</td>
                          <td className="px-4 py-3">50% of total trip cost</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">30-59 days</td>
                          <td className="px-4 py-3">75% of total trip cost</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3">0-29 days</td>
                          <td className="px-4 py-3">100% of total trip cost (no refund)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p>
                  Please note that certain promotional fares, special offers, or discounted trips may have different cancellation terms, which will be clearly communicated at the time of booking.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">3. Travel Credit Options</h2>
                <p className="mb-4">
                  Instead of a refund, you may choose to receive a travel credit that can be applied to future bookings with WANDER TRIBE. Travel credits offer the following benefits:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Travel credits are valid for 24 months from the date of issue</li>
                  <li>Credits can be used for any WANDER TRIBE trip, subject to availability</li>
                  <li>Credits are transferable to friends or family members</li>
                  <li>If choosing a travel credit instead of a refund, we'll add an additional 10% to the credit value</li>
                </ul>
                <div className="bg-travel-terracotta/10 p-4 rounded-lg mb-4">
                  <p className="font-medium">
                    To request a travel credit instead of a refund, please specify this in your cancellation email to bookings@wandertribe.com.
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">4. Trip Transfers</h2>
                <p className="mb-4">
                  If you can't participate in your booked trip, you may transfer your booking to another person who satisfies all the conditions applicable to the trip, subject to the following:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>You must notify us of the transfer at least 30 days before departure</li>
                  <li>Both you and the transferee remain jointly and severally liable for payment of all amounts due</li>
                  <li>A transfer fee of $150 per person applies to cover our administrative costs</li>
                  <li>Any additional costs incurred as a result of the transfer (e.g., airline fees for name changes) must be paid by you or the transferee</li>
                </ul>
                <p>
                  Transfers are not possible for certain trips or if suppliers do not permit name changes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">5. Cancellations by WANDER TRIBE</h2>
                <p className="mb-4">
                  In rare circumstances, we may need to cancel a scheduled trip. This could be due to insufficient bookings, safety concerns, or circumstances beyond our control (force majeure).
                </p>
                <p className="mb-4">
                  If we cancel your trip for any reason other than force majeure, you will be offered the following options:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Transfer to an alternative trip (subject to availability and any price difference)</li>
                  <li>Receive a full refund of all monies paid to us</li>
                  <li>Receive a travel credit worth 110% of your original payment, valid for 24 months</li>
                </ul>
                <p className="mb-4">
                  If we cancel due to force majeure (natural disasters, political instability, pandemics, etc.), we will offer:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>A travel credit worth 100% of recoverable costs, valid for 24 months</li>
                  <li>Assistance with travel insurance claims where applicable</li>
                </ul>
                <p>
                  WANDER TRIBE is not responsible for additional expenses such as visas, vaccinations, or non-refundable flights that you may have incurred in preparation for the trip.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">6. Travel Insurance</h2>
                <p className="mb-4">
                  We strongly recommend purchasing comprehensive travel insurance that includes trip cancellation coverage. A good travel insurance policy can protect you against financial loss if you need to cancel for covered reasons such as illness, injury, or other unexpected events.
                </p>
                <div className="bg-travel-earth/5 p-4 rounded-lg mb-4">
                  <p className="font-medium">
                    For coverage of pre-existing medical conditions, most insurance providers require policies to be purchased within 14-21 days of making your initial trip deposit.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about our cancellation policy or need to cancel a booking, please contact our customer service team:
                </p>
                <div className="bg-travel-earth/5 p-6 rounded-lg">
                  <p className="font-medium">WANDER TRIBE Bookings Team</p>
                  <p>Email: bookings@wandertribe.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Hours: Monday-Friday, 9am-6pm EST</p>
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

export default CancellationPolicy;