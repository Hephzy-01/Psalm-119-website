import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import FloatingElements from './components/FloatingElements';
import FloatingCta from './components/FloatingCta';
import ScholarshipModal from './components/ScholarshipModal';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';
import MissionCovenant from './pages/MissionCovenant';
import History from './pages/History';
import PastScholars from './pages/PastScholars';
import FAQ from './pages/FAQ';
import MemorizationGuide from './pages/MemorizationGuide';
import CBTPortal from './pages/CBTPortal';
import RecordingGuidelines from './pages/RecordingGuidelines';
import CommunityImpact from './pages/CommunityImpact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('psalm119ModalShown');
    
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('psalm119ModalShown', 'true');
  };

  return (
    <Router>
      <div className="font-sans antialiased relative overflow-x-hidden bg-gray-200">
        <FloatingElements />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mission-covenant" element={<MissionCovenant />} />
          <Route path="/history" element={<History />} />
          <Route path="/past-scholars" element={<PastScholars />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/memorization-guide" element={<MemorizationGuide />} />
          <Route path="/cbt-portal" element={<CBTPortal />} />
          <Route path="/recording-guidelines" element={<RecordingGuidelines />} />
          <Route path="/community-impact" element={<CommunityImpact />} />
        </Routes>
        <Footer />
        <BackToTopButton />
        <FloatingCta />
        <ScholarshipModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </Router>
  );
}

export default App;
