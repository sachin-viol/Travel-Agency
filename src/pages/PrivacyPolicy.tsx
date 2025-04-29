import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        description="Your privacy matters to us. Read our policy to understand how we protect your data."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />
      <div className="bg-travel-earth-light/5 min-h-screen">
        <div className="container mx-auto px-4 pb-16">
          <div className="rounded-xl p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-travel-earth text-center"></h1>

            <div className="prose max-w-none text-travel-earth-dark">
              <p className="mb-6 text-lg">
                Last Updated: April 15, 2025
              </p>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">1. Introduction</h2>
                <p className="mb-4">
                  At WANDER TRIBE, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p>
                  We recommend that you read this privacy policy carefully as it contains important information about your personal data. If you have any questions about this privacy policy, please contact us using the details provided below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">2. Information We Collect</h2>
                <p className="mb-4">
                  We collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <span className="font-medium">Personal identification information</span>: Name, email address, phone number, postal address, and other similar contact data when you book a trip or create an account
                  </li>
                  <li>
                    <span className="font-medium">Booking information</span>: Travel dates, destinations, accommodation preferences, special requirements, and payment information
                  </li>
                  <li>
                    <span className="font-medium">Technical data</span>: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website
                  </li>
                  <li>
                    <span className="font-medium">Usage data</span>: Information about how you use our website, products, and services
                  </li>
                  <li>
                    <span className="font-medium">Marketing preferences</span>: Your preferences in receiving marketing from us and our third parties
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect about you for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To process and manage your bookings</li>
                  <li>To provide you with information, products, or services that you request from us</li>
                  <li>To fulfill our obligations arising from any contracts entered into between you and us</li>
                  <li>To notify you about changes to our service</li>
                  <li>To improve our website, products, and services</li>
                  <li>To measure or understand the effectiveness of advertising we serve to you and others</li>
                  <li>To administer and protect our business and this website</li>
                  <li>To deliver relevant website content and advertisements to you</li>
                  <li>To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">4. Cookies</h2>
                <p className="mb-4">
                  We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
                <p>
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">5. Data Security</h2>
                <p className="mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
                <p>
                  We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">6. Your Rights</h2>
                <p className="mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p>
                  If you wish to exercise any of these rights, please contact us using the contact details provided below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-travel-earth/5 p-6 rounded-lg">
                  <p className="font-medium">WANDER TRIBE</p>
                  <p>Email: privacy@wandertribe.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Adventure Street, Explorerville, EX 12345</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-travel-earth">8. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p>
                  You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                </p>
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

export default PrivacyPolicy;