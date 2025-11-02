import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative py-28 flex items-center justify-center text-white text-center overflow-hidden px-4"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gray-200 opacity-80"></div>
      
      {/* Floating circles for background texture */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-300/20 rounded-full animate-float-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-green-300/20 rounded-full animate-float-sm animation-delay-2s"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-300/20 rounded-full animate-float-sm animation-delay-4s"></div>

      <div className="relative z-10 p-10 md:p-16 rounded-3xl max-w-6xl mx-auto bg-green-800 shadow-2xl">
          <h1 className="font-lobster text-8xl md:text-[120px] font-bold leading-tight mb-8 text-shadow">
            Join the Psalm 119 Challenge
          </h1>
          <p className="text-3xl md:text-4xl max-w-5xl mx-auto mb-14 text-gray-200">
            Embark on a <span className="text-amber-300 font-semibold">transformative journey</span> with the Psalm 119 National Values Challenge. Learn, understand, and apply 22 core national values through engaging with all 176 verses of Psalm 119. Compete for scholarships while developing <span className="text-amber-300 font-semibold">leadership skills</span>, personal growth, and community engagement!
          </p>
          <div className="flex justify-center flex-wrap gap-8">
            <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-6 px-14 rounded-full text-2xl hover:bg-green-600 transition duration-300 transform hover:scale-105 flex items-center gap-4">
                Register Now <i className="fas fa-arrow-right"></i>
            </a>
            <a href="/faq" className="bg-transparent border-2 border-white text-white font-bold py-6 px-14 rounded-full text-2xl hover:bg-white hover:text-green-800 transition duration-300 transform hover:scale-105 flex items-center gap-4">
                Learn More <i className="fas fa-info-circle"></i>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;