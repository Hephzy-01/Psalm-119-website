import React from 'react';
import AnimatedSection from './AnimatedSection';

const FinalCta: React.FC = () => {
  return (
    <section id="partner" className="bg-green-600">
      <div className="container mx-auto px-6 py-24 text-center">
        <AnimatedSection>
            <h2 className="font-lobster text-6xl md:text-7xl font-bold text-white mb-6 text-shadow">Ready to Transform Your Life?</h2>
            <p className="text-2xl text-white mb-12 max-w-3xl mx-auto">Join hundreds of students who have already benefited from the Psalm 119 National Values Challenge.</p>
            <div className="flex justify-center flex-wrap gap-6">
                <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center gap-3">
                    Register Now <i className="fas fa-arrow-right"></i>
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-5 px-12 rounded-full text-xl hover:bg-white hover:text-green-600 transition duration-300 transform hover:scale-105 flex items-center gap-3">
                    Contact Us <i className="fas fa-envelope"></i>
                </a>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCta;