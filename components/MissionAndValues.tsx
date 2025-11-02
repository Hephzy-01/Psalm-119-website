import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Card: React.FC<{ icon: string; title: string; children: React.ReactNode; buttonText: string; href?: string }> = ({ icon, title, children, buttonText, href = '#' }) => (
    <AnimatedSection>
        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border-2 border-green-500">
            <div className="flex-shrink-0">
                <div className="text-green-500 text-6xl mb-5"><i className={icon}></i></div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
            </div>
            <div className="flex-grow">
                <p className="text-xl text-gray-600 mb-8">{children}</p>
            </div>
            <div>
                {href.startsWith('/') ? (
                    <Link to={href} className="font-semibold text-green-600 hover:text-green-700 transition-colors text-xl">
                        {buttonText} <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                ) : (
                    <a href={href} className="font-semibold text-green-600 hover:text-green-700 transition-colors text-xl">
                        {buttonText} <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                )}
            </div>
        </div>
    </AnimatedSection>
);


const MissionAndValues: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <div className="text-center mb-20">
                <h2 className="font-lobster text-6xl md:text-7xl font-bold text-green-600">Our Mission and Values</h2>
                <p className="text-3xl text-gray-600 mt-8 max-w-5xl mx-auto">The Psalm 119 National Values Challenge aims to <span className="font-bold text-green-600 underline">empower students</span> through National Values, fostering <span className="font-bold text-green-600 underline">integrity</span>, <span className="font-bold text-green-600 underline">perseverance</span>, <span className="font-bold text-green-600 underline">community engagement</span>, and <span className="font-bold text-green-600 underline">personal growth</span>.</p>
            </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Card icon="fas fa-crosshairs" title="Our Mission" buttonText="Read more" href="/mission-covenant">
            We empower students through engaging with Psalm 119, fostering character development, leadership skills, community engagement and Nation Building. Together, we can make a difference in their lives.
          </Card>
          <Card icon="fas fa-book-open" title="Our History" buttonText="Read more" href="/history">
            Established in 2021, the Psalm 119 National Values Challenge has worked to build a culture of values-based learning, fostering community dedicated to personal growth and Nation Building.
          </Card>
          <Card icon="fas fa-users" title="Meet Past Scholars" buttonText="Read more" href="/past-scholars">
            Meet our past Psalm 119 National Values Challenge scholars who have been empowered through engaging with Psalm 119 and have gone on to make a positive impact.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;