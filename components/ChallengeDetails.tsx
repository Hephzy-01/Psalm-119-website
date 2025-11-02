
import React from 'react';
import AnimatedSection from './AnimatedSection';

const DetailCard: React.FC<{
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
}> = ({ title, image, imageAlt, children, reverse = false }) => (
  <AnimatedSection>
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-green-500">
      <div className="text-center mb-10">
        <h2 className="font-lobster text-5xl md:text-6xl font-bold text-green-600">{title}</h2>
      </div>
      <div className={`flex flex-wrap items-center gap-12 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="w-full md:flex-1">
          {children}
        </div>
        <div className="w-full md:w-2/5">
          <img src={image} alt={imageAlt} className="rounded-xl shadow-lg w-full h-auto" />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ChallengeDetails: React.FC = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-6 space-y-20">
        
        {/* Learning */}
        <DetailCard
          title="Master the Art of Learning"
          image="/images/1TzQdFp__jBUURvLezoAloaqN35wTzhAZ.jpg"
          imageAlt="Students memorizing scripture"
        >
          <p className="text-xl text-gray-600 mb-6">Participants are tasked with memorizing all 176 verses of Psalm 119. This stage is crucial as it lays the foundation for the subsequent phases of the challenge. <span className="font-bold text-green-700">Embrace this opportunity</span> to enhance your memory skills and spiritual growth.</p>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-3"><i className="fas fa-lightbulb text-green-500"></i>Guidelines</h3>
          <p className="text-lg text-gray-700 mb-6 ml-9">Follow our <span className="font-semibold">structured plan</span> to memorize effectively. Consistency is key to success in this challenge.</p>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-3"><i className="fas fa-star text-green-500"></i>Requirements</h3>
          <p className="text-lg text-gray-700 mb-8 ml-9">Participants must be students aged 7-17, committed to the learning process and willing to engage in community activities.</p>
          
          <a href="/learning-guide" className="bg-white border-2 border-green-600 text-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-green-50 transition duration-300 inline-flex items-center gap-3">
              <i className="fas fa-download"></i> Download our learning guide
          </a>
        </DetailCard>

        {/* Knowledge Application */}
        <DetailCard
          title="Mastering Knowledge Application"
          image="/images/1gGV44m8hwITF6NQiZbE_ILQtb9CPIER1.jpg"
          imageAlt="Student taking a CBT test"
          reverse={true}
        >
            <p className="text-xl text-gray-600 mb-6">The Knowledge Application stage is a pivotal part of the Psalm 119 National Values Challenge. Participants engage in a CBT test that evaluates their understanding and application of the memorized verses, fostering critical thinking and deeper comprehension.</p>
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1.5"></i><span>Interactive CBT test for comprehensive evaluation</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1.5"></i><span>Enhances critical thinking and problem-solving skills</span></li>
                <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-3 mt-1.5"></i><span>Prepares students for real-world applications</span></li>
            </ul>
            <a href="/cbt-portal" className="bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300 inline-flex items-center gap-3">
                Learn about the test format <i className="fas fa-arrow-right"></i>
            </a>
        </DetailCard>
        
      </div>
    </section>
  );
};

export default ChallengeDetails;