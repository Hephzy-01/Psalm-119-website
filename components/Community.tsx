import React from 'react';
import AnimatedSection from './AnimatedSection';

const Community: React.FC = () => {
  return (
    <section className="py-28 bg-green-800 text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-green-700 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="text-center mb-10">
              <h2 className="font-kalam text-5xl md:text-6xl font-bold text-shadow">Empowering Communities Through Engagement</h2>
            </div>
            <div className="flex flex-wrap items-center gap-12">
              <div className="w-full md:flex-1">
                <p className="text-xl text-green-100 mb-8">The Psalm 119 National Values Challenge not only enhances <span className="font-bold text-white">personal growth</span> but also fosters a strong sense of community. Participants engage in activities that promote leadership and service, making a positive impact on their communities.</p>
                
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3"><i className="fas fa-users"></i>Leadership Skills</h3>
                <p className="text-lg text-green-200 mb-6 ml-10">Participants develop essential leadership skills through workshops and practical activities, preparing them for future roles in their communities.</p>
                
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3"><i className="fas fa-hand-holding-heart"></i>Community Service</h3>
                <p className="text-lg text-green-200 ml-10">Engaging in community service projects, students make a tangible difference in their localities while applying the values learned from Psalm 119.</p>
              </div>
              <div className="w-full md:w-2/5">
                <img src="images/1ngnadgAeRZ3TpuZqQcAbkBIG02cojBKk.jpg" alt="Community engagement" className="rounded-xl shadow-lg w-full h-auto" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Community;