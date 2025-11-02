import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-green-400 mb-3">PSALM 119</h3>
            <p>Empowering students through values-based learning and character development.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-400">Mission & Values</Link></li>
              <li><Link to="/testimonies" className="hover:text-green-400">Testimonies</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-white">Get Involved</h4>
            <ul className="space-y-3">
              <li><a href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Register Now</a></li>
              <li><a href="https://pay.squadco.com/link/KidsINspiring1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Partner</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScb5JrFmB_l1yHbVG789MmLqaCGFRWTWdm5aRQQhnJGQJ8nAA/viewform" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Volunteer</a></li>
              <li><a href="https://pay.squadco.com/link/KidsINspiring1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Give Online</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-3 text-green-400"></i>goDsHub 0.1 Oremetta, Ota 11226, Ogun State</li>
              <li className="flex items-start"><i className="fas fa-phone mt-1 mr-3 text-green-400"></i>+234 812 267 3417</li>
              <li className="flex items-start"><i className="fas fa-envelope mt-1 mr-3 text-green-400"></i>Psalm119NationalValues@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-10 border-t border-gray-700">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://web.facebook.com/KidsinspiringNation/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
              <i className="fab fa-facebook text-3xl"></i>
            </a>
            <a href="https://x.com/kidsinspiringN?t=dUiNjp7mpY6bdeWpsIxMSw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="https://www.instagram.com/kidsinspiringnation/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="https://www.youtube.com/@KidsInspiringNation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
              <i className="fab fa-youtube text-3xl"></i>
            </a>
          </div>
          <p className="text-center">&copy; 2026 Psalm 119 National Values Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
