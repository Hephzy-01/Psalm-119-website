import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const PastScholars: React.FC = () => {
  const scholars = [
    {
      year: 1,
      name: 'Ms. Jenima Ukpong',
      group: 'Apt Scholars',
      prize: '₦11,176',
      description: 'Ms. Jenima Ukpong, Apt Scholar of the Year, delivered a captivating presentation representing Apt Scholars. She stood out with her passionate delivery and deep understanding of the values in Psalm 119. Her dedication set the tone for excellence in the years to follow.',
      mediaType: 'video',
      mediaUrl: 'https://www.youtube.com/embed/UDRGh4RbwL4'
    },
    {
      year: 2,
      name: 'Master Goodluck Jonathan',
      group: '',
      prize: '₦119,176',
      description: 'A remarkable scholar, Master Goodluck Jonathan made history by achieving a perfect score of 119/119. His flawless recitation and clear commitment to biblical values left a lasting impression on the judges and audience alike.',
      mediaType: 'image',
      mediaUrl: 'images/year2-scholar.jpg'
    },
    {
      year: 3,
      name: 'Ms. Joy Ogheneda',
      group: 'Goldbeam Scholars',
      prize: '₦357,119',
      description: 'Ms. Joy Ogheneda brought a unique energy to the challenge in Year 3, representing Goldbeam Scholars. Her dedication and passion for the Word highlight the potential and impact of the Challenge.',
      mediaType: 'image',
      mediaUrl: 'images/year3-scholar.jpg'
    },
    {
      year: 4,
      name: 'Ms. Talia Atskameh',
      group: 'Ambassadors Pry School',
      prize: '₦528,119',
      description: 'Ms. Talia Atskameh stunned the audience with her powerful interpretation of Psalm 119, representing Ambassadors Primary School. She showed extraordinary dedication and became a role model for future participants.',
      mediaType: 'image',
      mediaUrl: 'images/1OV6PR7sRTzTLb6xprdvP5aBqXGkPuQAS.jpg'
    }
  ];

  return (
    <main className="pt-28 bg-white min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-500"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-lobster text-6xl md:text-7xl font-bold text-green-700 mb-4">
              Meet Our Past Scholars
            </h1>
            <div className="w-32 h-1 bg-green-600 mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* Scholars List */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          {scholars.map((scholar, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-green-100 hover:shadow-2xl transition-all duration-300">
                {/* Header Bar */}
                <div className="bg-green-600 px-8 py-6">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">
                    Year {scholar.year} - {scholar.name}
                    {scholar.group && <span className="font-normal"> ({scholar.group})</span>}
                    <span className="block md:inline md:ml-4 text-green-200 font-bold mt-2 md:mt-0">
                      {scholar.prize}
                    </span>
                  </h2>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {scholar.description}
                  </p>

                  {/* Media */}
                  <div className="rounded-xl overflow-hidden border-4 border-green-600 shadow-lg">
                    {scholar.mediaType === 'video' ? (
                      <div className="relative pb-[56.25%] h-0">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={scholar.mediaUrl}
                          title={`${scholar.name} presentation`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <img
                        src={scholar.mediaUrl}
                        alt={`${scholar.name} - Year ${scholar.year} Scholar`}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastScholars;
