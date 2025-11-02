import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const MissionCovenant: React.FC = () => {
  return (
    <main className="pt-28 bg-gray-50">
      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl border-4 border-green-600 p-12 shadow-lg">
              <h2 className="font-lobster text-5xl font-bold text-green-700 text-center mb-4">Our Mission</h2>
              <div className="w-32 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-gray-700 text-xl text-center leading-relaxed">
                We empower students through the learning of Psalm 119, fostering <strong>character development</strong>, <strong>leadership skills</strong>, <strong>community engagement</strong>, and <strong>Nation Building</strong>. Together, we can make a difference in their lives.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7-Decade Covenant Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl border-4 border-green-600 p-12 shadow-lg">
              <h2 className="font-lobster text-5xl font-bold text-green-700 text-center mb-8 flex items-center justify-center gap-4">
                <i className="fas fa-star text-green-600"></i>
                A 7-Decade Covenant to Build Nigeria
                <i className="fas fa-star text-green-600"></i>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  The Psalm 119 National Values Challenge is more than a project—it's a <strong>divine covenant</strong> to transform our nation through generations. Over the next 70 years, we aim to instill <strong>godly values</strong> in Nigerian youth by anchoring their identity in Scripture, equipping them with <strong>leadership principles</strong>, and empowering them to be <strong>change agents</strong> in their communities.
                </p>
                <p>
                  This covenant is a declaration of <strong>faith</strong>, <strong>hope</strong>, and <strong>action</strong>. By sowing the seeds of truth, purpose, and character in our young people today, we are laying a firm foundation for a <strong>thriving</strong>, <strong>united</strong>, and <strong>morally upright</strong> Nigeria tomorrow.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default MissionCovenant;
