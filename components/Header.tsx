import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Mission & Values', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg">
        <div className="flex items-center justify-between h-20 px-8">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-green-600">PSALM 119</Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-green-600 hover:text-green-800 text-lg font-medium transition-all duration-300 hover:scale-110">
                  {link.name}
                </Link>
              ))}
              <a href="https://pay.squadco.com/link/KidsINspiring1" target="_blank" rel="noopener noreferrer" className="text-green-600 border-2 border-green-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Partner
              </a>
              <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:scale-105 hover:shadow-xl">
                Register Now
              </a>
            </div>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
        <div className="rounded-xl bg-white/95 backdrop-blur-md shadow-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
             <a href="https://pay.squadco.com/link/KidsINspiring1" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="block text-center mt-4 text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 hover:text-white transition-colors">
                Partner
              </a>
              <a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="block text-center mt-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors shadow-lg">
                Register Now
              </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
