import React from 'react';

interface ScholarshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScholarshipModal: React.FC<ScholarshipModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl max-w-lg w-full relative text-center transform transition-all duration-300 scale-95 animate-fadeInUp"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Limited Time Banner */}
        <div className="absolute top-0 right-0 overflow-hidden w-32 h-32">
            <div className="absolute top-8 -right-8 bg-amber-400 text-yellow-900 text-sm font-bold uppercase tracking-wider py-1 w-48 text-center transform rotate-45 shadow-md">
                Limited Time!
            </div>
        </div>

        {/* Icon */}
        <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-inner">
            <i className="fas fa-trophy text-green-600 text-4xl"></i>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-green-600 font-kalam">Don't Miss Out!</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-800 my-3">
            ₦3,000,000 Scholarship
        </h3>
        <p className="text-gray-600 text-lg mb-8">
            Register now for the Psalm 119 National Values Challenge 2026 and compete for this life-changing scholarship!
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center space-y-4">
            <a 
              href="https://chat.whatsapp.com/LhdmEpKXoXgDgtEj73WVqz" target="_blank" rel="noopener noreferrer" 
              onClick={onClose}
              className="w-full bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
            >
                <span>Register Now</span>
                <i className="fas fa-arrow-right"></i>
            </a>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-green-600 font-medium transition-colors"
            >
              Remind me later
            </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipModal;