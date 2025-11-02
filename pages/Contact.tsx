import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h1 className="font-lobster text-7xl font-bold text-white mb-6">Contact Us</h1>
            <p className="font-sans text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              We'd love to hear from you! Reach out to our team for any questions about the Psalm 119 National Values Challenge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-white border-4 border-green-600 rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-lg">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="font-lobster text-3xl font-bold text-green-700 mb-4">Email Us</h3>
                <p className="font-sans text-gray-700 text-lg mb-4">For enquiries and better information, please send us an email to:</p>
                <a href="mailto:Psalm119NationalValues@gmail.com" className="text-green-600 font-bold text-lg hover:underline">
                  Psalm119NationalValues@gmail.com
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white border-4 border-green-600 rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-lg">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="font-lobster text-3xl font-bold text-green-700 mb-4">Call Us</h3>
                <p className="font-sans text-gray-700 text-lg mb-4">If you prefer to speak with someone directly, feel free to call us at:</p>
                <a href="tel:+2348122473417" className="text-green-600 font-bold text-lg hover:underline">
                  +234 81 2247 3417
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white border-4 border-green-600 rounded-2xl p-10 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="font-lobster text-3xl font-bold text-green-700 mb-4">Visit Us</h3>
                <p className="font-sans text-gray-700 text-lg mb-4">You can also visit our office at the location below:</p>
                <p className="text-green-600 font-bold text-lg">
                  goDsHub 0.1 Oremetta, Ota 11226, Ogun State
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Send Us a Message Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white border-4 border-green-600 rounded-2xl p-12 shadow-2xl">
              <h2 className="font-lobster text-5xl font-bold text-green-700 text-center mb-10">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-lg">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none text-lg transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-lg">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none text-lg transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-lg">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none text-lg transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-lg">Your Message</label>
                  <textarea 
                    rows={8} 
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none text-lg transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-5 rounded-xl text-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Location and Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="w-32 h-1 bg-green-700 rounded-full"></div>
                <h2 className="font-lobster text-5xl font-bold text-green-700">Our Location</h2>
                <div className="w-32 h-1 bg-green-700 rounded-full"></div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-600">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.2!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f3e0e0e0e0e%3A0x0!2sOremetta%2C%20Ota%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%" 
                height="500" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Psalm 119 Location - Oremetta, Ota, Ogun State"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
