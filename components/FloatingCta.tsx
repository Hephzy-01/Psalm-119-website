
import React, { useState, useEffect } from 'react';

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-20 right-5 bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-3 hover:bg-green-700 transition-all duration-300 z-50 transform hover:scale-105 ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}
    >
      <i className="fas fa-school"></i>
      <span>Invite Us to Your School</span>
    </a>
  );
};

export default FloatingCta;