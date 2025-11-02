import React from 'react';
import AnimatedSection from './AnimatedSection';

const Cta: React.FC = () => {
  return (
    <section id="register" className="bg-gray-100 py-28 px-4">
      <div className="container mx-auto">
        <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 lg:p-20 max-w-7xl mx-auto overflow-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center md:text-left">
                        <h2 className="font-lobster text-5xl md:text-6xl text-green-700 font-bold leading-tight">
                            Register for the Psalm 119 National Values Challenge 2026!
                        </h2>
                        <p className="mt-8 text-gray-600 text-2xl">
                            Embark on a life-changing journey of learning national values, personal growth, and community impact!
                        </p>

                        <div className="mt-8 bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-2xl flex items-center space-x-6">
                            <i className="fas fa-trophy text-5xl text-amber-500"></i>
                            <div>
                                <h3 className="font-bold text-2xl text-green-800">Grand Prize: ₦3,000,000 Scholarship!</h3>
                                <p className="text-lg text-gray-600">Plus many other exciting prizes and opportunities!</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                                <i className="fas fa-check-circle"></i>
                                <span>Register Now</span>
                            </a>
                            <a href="/faq" className="bg-white border-2 border-green-600 text-green-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-green-50 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                                <i className="fas fa-info-circle"></i>
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Graphic */}
                    <div className="relative flex justify-center items-center h-96 md:h-[450px] mt-10 md:mt-0">
                        {/* Main Circle */}
                        <div className="animate-pulse-grow w-72 h-72 md:w-96 md:h-96 bg-amber-400 rounded-full flex flex-col justify-center items-center shadow-xl border-8 border-white">
                            <span className="text-white text-5xl font-extrabold">₦</span>
                            <span className="text-white text-8xl md:text-9xl font-extrabold -my-3">3M</span>
                            <span className="text-white text-2xl font-bold tracking-widest">SCHOLARSHIP</span>
                        </div>
                        {/* Orbiting Icons */}
                        <div className="absolute top-0 left-4 md:left-8 w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-float-sm" style={{ animationDelay: '0s' }}>
                           <i className="fas fa-crown text-3xl text-white"></i>
                        </div>
                        <div className="absolute bottom-0 right-4 md:right-8 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-float-sm" style={{ animationDelay: '1.5s' }}>
                            <i className="fas fa-gem text-3xl text-white"></i>
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedSection>
         <p className="text-center mt-8 text-gray-500 text-lg">Don't miss this incredible opportunity! Registration closes soon.</p>
      </div>
    </section>
  );
};

export default Cta;