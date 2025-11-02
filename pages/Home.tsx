import React from 'react';
import Hero from '../components/Hero';
import MissionAndValues from '../components/MissionAndValues';
import Gallery from '../components/Gallery';
import GetInvolved from '../components/GetInvolved';
import Cta from '../components/Cta';
import Timeline from '../components/Timeline';
import ChallengeDetails from '../components/ChallengeDetails';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import FinalCta from '../components/FinalCta';

const Home: React.FC = () => {
  return (
    <main className="pt-28">
      <Hero />
      <MissionAndValues />
      <Gallery />
      <GetInvolved />
      <Cta />
      <Timeline />
      <ChallengeDetails />
      <Community />
      <Testimonials />
      <FinalCta />
    </main>
  );
};

export default Home;
